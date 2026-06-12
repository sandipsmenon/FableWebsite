import { Rng } from '../core/Rng';
import { aiSelectShot } from '../sim/BatterAI';
import { resolveBall } from '../sim/BallResolver';
import { generateAiDelivery } from '../sim/DeliveryGenerator';
import { DEFENSIVE_FIELD, KEEPER_POS } from '../sim/FieldPlacements';
import { FielderState } from '../sim/FielderSim';
import { vClone } from '../sim/types';
import { MatchState } from './MatchState';
import { Team } from './Teams';

export function buildFielders(bowlingTeam: Team): FielderState[] {
  const keeper = bowlingTeam.players.find((p) => p.role === 'wk') ?? bowlingTeam.players[5];
  const others = bowlingTeam.players.filter((p) => p !== keeper);
  const fielders: FielderState[] = [
    {
      name: keeper.name,
      home: vClone(KEEPER_POS),
      pos: vClone(KEEPER_POS),
      speed: 6.5,
      skill: keeper.fielding,
    },
  ];
  DEFENSIVE_FIELD.forEach((fp, i) => {
    const p = others[i % others.length];
    fielders.push({
      name: p.name,
      home: vClone(fp.pos),
      pos: vClone(fp.pos),
      speed: 6 + (p.fielding / 100) * 2.5,
      skill: p.fielding,
    });
  });
  return fielders;
}

/** Pick the AI's next bowler: best eligible, preferring variety. */
export function aiPickBowler(m: MatchState, rng: Rng): number {
  const eligible = m.eligibleBowlers();
  if (eligible.length === 0) {
    // Fallback: anyone but the last bowler (shouldn't happen with sane formats).
    const team = m.bowlingTeam;
    const all = team.players.map((_, i) => i).filter((i) => i !== m.inn.lastBowler);
    return all[all.length - 1];
  }
  const sorted = [...eligible].sort(
    (a, b) => m.bowlingTeam.players[b].bowling - m.bowlingTeam.players[a].bowling,
  );
  return rng.chance(0.7) ? sorted[0] : rng.pick(sorted);
}

export function pressureOf(m: MatchState): number {
  const inn = m.inn;
  if (inn.target === undefined) return Math.min(0.5, inn.legalBalls / (m.format.overs * 6));
  const ballsLeft = m.format.overs * 6 - inn.legalBalls;
  if (ballsLeft <= 0) return 1;
  const needed = inn.target - inn.runs;
  const rrr = (needed / ballsLeft) * 6;
  return Math.max(0, Math.min(1, (rrr - 5) / 8));
}

/** Simulate one AI-vs-AI delivery and apply it to the match. Returns the outcome text. */
export function autoSimBall(m: MatchState, rng: Rng): string {
  if (m.inn.currentBowler < 0 || m.isOverComplete) {
    m.setBowler(aiPickBowler(m, rng));
  }
  const bowler = m.bowler;
  const delivery = generateAiDelivery(
    { skill: bowler.bowling, style: bowler.bowlStyle ?? 'pace' },
    m.inn.legalBalls % 6,
    rng,
  );
  const striker = m.striker;
  const shot = aiSelectShot(delivery, {
    batterSkill: striker.batting,
    pressure: pressureOf(m),
    wicketsInHandFrac: (10 - m.inn.wickets) / 10,
    rng,
  });
  const fielders = buildFielders(m.bowlingTeam);
  const resolved = resolveBall(delivery, shot, {
    batterSkill: striker.batting,
    runningSkill: striker.batting,
    fielders,
    keeperName: fielders[0].name,
    rng,
    runAggression: pressureOf(m),
  });
  m.applyBall({
    runs: resolved.outcome.runs,
    extra: resolved.outcome.wide ? 'wide' : undefined,
    wicket: resolved.outcome.wicket ? { ...resolved.outcome.wicket, bowler: bowler.name } : undefined,
    boundary: resolved.outcome.boundary,
    text: resolved.outcome.text,
  });
  return resolved.outcome.text;
}

/** Play out an entire match AI-vs-AI. Used by the smoke test and the "Sim" feature. */
export function autoSimMatch(m: MatchState, rng: Rng, maxBalls = 4000): void {
  let balls = 0;
  while (!m.isMatchOver && balls < maxBalls) {
    if (m.inn.closed && m.current === 0) m.startSecondInnings();
    autoSimBall(m, rng);
    balls++;
  }
}
