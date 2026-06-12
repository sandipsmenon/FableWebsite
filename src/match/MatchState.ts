import { DismissalType } from '../sim/types';
import { Format } from './Formats';
import { Player, Team } from './Teams';

export interface Dismissal {
  how: DismissalType;
  bowler?: string;
  fielder?: string;
}

export interface BatterCard {
  playerIndex: number;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  out?: Dismissal;
}

export interface BowlerCard {
  playerIndex: number;
  legalBalls: number;
  runs: number;
  wickets: number;
  maidens: number;
}

export interface FallOfWicket {
  score: number;
  wicket: number;
  overText: string;
  batterName: string;
}

export interface InningsState {
  battingTeamIndex: 0 | 1;
  runs: number;
  wickets: number;
  legalBalls: number;
  extras: { wides: number; noBalls: number };
  cards: BatterCard[]; // index into batting team's players
  bowlerCards: Map<number, BowlerCard>;
  strikerCard: number; // index into cards
  nonStrikerCard: number;
  currentBowler: number; // player index in bowling team
  lastBowler: number; // -1 if none
  fow: FallOfWicket[];
  target?: number;
  closed: boolean;
}

export interface BallOutcome {
  runs: number; // off the bat (or completed runs)
  extra?: 'wide' | 'noBall';
  wicket?: Dismissal;
  boundary?: 4 | 6;
  /** Display text e.g. "FOUR!", "WICKET", "2 runs", "Wide" */
  text: string;
}

export interface MatchResult {
  winnerTeamIndex: 0 | 1 | null; // null = tie
  text: string;
}

export class MatchState {
  innings: InningsState[] = [];
  current = 0;
  result?: MatchResult;
  /** Index of the team the human controls. */
  userTeamIndex: 0 | 1 = 0;

  constructor(
    public teams: [Team, Team],
    public format: Format,
    battingFirst: 0 | 1,
  ) {
    this.innings.push(this.newInnings(battingFirst));
  }

  private newInnings(battingTeamIndex: 0 | 1): InningsState {
    return {
      battingTeamIndex,
      runs: 0,
      wickets: 0,
      legalBalls: 0,
      extras: { wides: 0, noBalls: 0 },
      cards: [
        { playerIndex: 0, runs: 0, balls: 0, fours: 0, sixes: 0 },
        { playerIndex: 1, runs: 0, balls: 0, fours: 0, sixes: 0 },
      ],
      bowlerCards: new Map(),
      strikerCard: 0,
      nonStrikerCard: 1,
      currentBowler: -1,
      lastBowler: -1,
      fow: [],
      closed: false,
    };
  }

  get inn(): InningsState {
    return this.innings[this.current];
  }

  get battingTeam(): Team {
    return this.teams[this.inn.battingTeamIndex];
  }

  get bowlingTeam(): Team {
    return this.teams[1 - this.inn.battingTeamIndex];
  }

  get striker(): Player {
    return this.battingTeam.players[this.inn.cards[this.inn.strikerCard].playerIndex];
  }

  get bowler(): Player {
    return this.bowlingTeam.players[this.inn.currentBowler];
  }

  get userIsBatting(): boolean {
    return this.inn.battingTeamIndex === this.userTeamIndex;
  }

  oversText(inn = this.inn): string {
    return `${Math.floor(inn.legalBalls / 6)}.${inn.legalBalls % 6}`;
  }

  get ballsRemaining(): number {
    return this.format.overs * 6 - this.inn.legalBalls;
  }

  get isOverComplete(): boolean {
    return this.inn.legalBalls > 0 && this.inn.legalBalls % 6 === 0;
  }

  setBowler(playerIndex: number): void {
    const inn = this.inn;
    inn.currentBowler = playerIndex;
    if (!inn.bowlerCards.has(playerIndex)) {
      inn.bowlerCards.set(playerIndex, { playerIndex, legalBalls: 0, runs: 0, wickets: 0, maidens: 0 });
    }
  }

  eligibleBowlers(): number[] {
    const inn = this.inn;
    const team = this.bowlingTeam;
    return team.players
      .map((p, i) => ({ p, i }))
      .filter(({ p, i }) => {
        if (p.role !== 'bowl' && p.role !== 'all') return false;
        if (i === inn.lastBowler) return false;
        const card = inn.bowlerCards.get(i);
        const oversBowled = card ? Math.floor(card.legalBalls / 6) : 0;
        return oversBowled < this.format.maxOversPerBowler;
      })
      .map(({ i }) => i);
  }

  /** Apply a completed delivery to the score. Handles strike rotation and over end. */
  applyBall(outcome: BallOutcome): void {
    const inn = this.inn;
    const bowlerCard = inn.bowlerCards.get(inn.currentBowler)!;
    const strikerCard = inn.cards[inn.strikerCard];

    if (outcome.extra) {
      inn.runs += 1 + outcome.runs;
      bowlerCard.runs += 1 + outcome.runs;
      if (outcome.extra === 'wide') inn.extras.wides += 1 + outcome.runs;
      else inn.extras.noBalls += 1;
      if (outcome.extra === 'noBall') {
        strikerCard.runs += outcome.runs;
        strikerCard.balls++;
        if (outcome.boundary === 4) strikerCard.fours++;
        if (outcome.boundary === 6) strikerCard.sixes++;
      }
      if (outcome.runs % 2 === 1) this.swapStrike();
      this.checkChaseComplete();
      return; // not a legal ball: re-bowled
    }

    inn.legalBalls++;
    bowlerCard.legalBalls++;
    strikerCard.balls++;
    strikerCard.runs += outcome.runs;
    inn.runs += outcome.runs;
    bowlerCard.runs += outcome.runs;
    if (outcome.boundary === 4) strikerCard.fours++;
    if (outcome.boundary === 6) strikerCard.sixes++;

    if (outcome.wicket) {
      this.fallOfWicket(outcome.wicket);
      if (outcome.wicket.how !== 'runout') bowlerCard.wickets++;
    }

    if (outcome.runs % 2 === 1) this.swapStrike();
    if (this.isOverComplete && !this.inn.closed) {
      this.swapStrike();
      inn.lastBowler = inn.currentBowler;
    }

    this.checkChaseComplete();
    this.checkInningsEnd();
  }

  private swapStrike(): void {
    const inn = this.inn;
    [inn.strikerCard, inn.nonStrikerCard] = [inn.nonStrikerCard, inn.strikerCard];
  }

  private fallOfWicket(d: Dismissal): void {
    const inn = this.inn;
    const card = inn.cards[inn.strikerCard];
    card.out = d;
    inn.wickets++;
    inn.fow.push({
      score: inn.runs,
      wicket: inn.wickets,
      overText: this.oversText(),
      batterName: this.battingTeam.players[card.playerIndex].name,
    });
    // Next batter in
    const nextIndex = inn.cards.length;
    if (nextIndex < 11 && inn.wickets < 10) {
      inn.cards.push({ playerIndex: nextIndex, runs: 0, balls: 0, fours: 0, sixes: 0 });
      inn.strikerCard = inn.cards.length - 1;
    }
  }

  private checkChaseComplete(): void {
    const inn = this.inn;
    if (inn.target !== undefined && inn.runs >= inn.target) {
      inn.closed = true;
      this.finishMatch();
    }
  }

  private checkInningsEnd(): void {
    const inn = this.inn;
    if (inn.closed) return;
    const allOut = inn.wickets >= 10;
    const oversDone = inn.legalBalls >= this.format.overs * 6;
    if (allOut || oversDone) {
      inn.closed = true;
      if (this.current === 0) {
        const next = this.newInnings((1 - inn.battingTeamIndex) as 0 | 1);
        next.target = inn.runs + 1;
        this.innings.push(next);
      } else {
        this.finishMatch();
      }
    }
  }

  /** Move to the second innings (call after the innings-break screen). */
  startSecondInnings(): void {
    if (this.innings.length === 2 && this.current === 0) this.current = 1;
  }

  private finishMatch(): void {
    const first = this.innings[0];
    const second = this.innings[1];
    if (!second) return;
    const firstTeam = this.teams[first.battingTeamIndex];
    const secondTeam = this.teams[second.battingTeamIndex];
    if (second.runs >= (second.target ?? Infinity)) {
      this.result = {
        winnerTeamIndex: second.battingTeamIndex,
        text: `${secondTeam.name} win by ${10 - second.wickets} wicket${10 - second.wickets === 1 ? '' : 's'}`,
      };
    } else if (second.runs === first.runs) {
      this.result = { winnerTeamIndex: null, text: 'Match tied!' };
    } else {
      this.result = {
        winnerTeamIndex: first.battingTeamIndex,
        text: `${firstTeam.name} win by ${first.runs - second.runs} run${first.runs - second.runs === 1 ? '' : 's'}`,
      };
    }
  }

  get isMatchOver(): boolean {
    return this.result !== undefined;
  }
}
