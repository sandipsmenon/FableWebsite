import { describe, expect, it } from 'vitest';
import { Rng } from '../src/core/Rng';
import { TEAMS } from '../src/data/teams';
import { autoSimMatch } from '../src/match/AutoSim';
import { FORMATS } from '../src/match/Formats';
import { MatchState } from '../src/match/MatchState';
import { Team } from '../src/match/Teams';

describe('Full match auto-simulation (AI vs AI)', () => {
  it('completes a T20 with a legal scorecard and a result', () => {
    const m = new MatchState([TEAMS[0], TEAMS[1]] as [Team, Team], FORMATS.find((f) => f.id === 't20')!, 0);
    autoSimMatch(m, new Rng(1234));

    expect(m.isMatchOver).toBe(true);
    expect(m.result).toBeDefined();

    for (const inn of m.innings) {
      // Legal ball count
      expect(inn.legalBalls).toBeLessThanOrEqual(20 * 6);
      expect(inn.wickets).toBeLessThanOrEqual(10);
      // Batter runs + extras = total
      const batRuns = inn.cards.reduce((s, c) => s + c.runs, 0);
      expect(batRuns + inn.extras.wides + inn.extras.noBalls).toBe(inn.runs);
      // Bowler legal balls match innings legal balls
      const bowlerBalls = [...inn.bowlerCards.values()].reduce((s, c) => s + c.legalBalls, 0);
      expect(bowlerBalls).toBe(inn.legalBalls);
      // Bowler quota respected
      for (const card of inn.bowlerCards.values()) {
        expect(Math.floor(card.legalBalls / 6)).toBeLessThanOrEqual(4);
      }
      // Wickets match dismissed cards
      const outCount = inn.cards.filter((c) => c.out).length;
      expect(outCount).toBe(inn.wickets);
      expect(inn.fow).toHaveLength(inn.wickets);
    }

    // A T20 between decent teams should produce a non-trivial score.
    expect(m.innings[0].runs).toBeGreaterThan(40);
  }, 30000);

  it('produces different but valid results across seeds', () => {
    const scores: number[] = [];
    for (const seed of [7, 99, 2024]) {
      const m = new MatchState([TEAMS[0], TEAMS[1]] as [Team, Team], FORMATS.find((f) => f.id === 'five')!, 0);
      autoSimMatch(m, new Rng(seed));
      expect(m.isMatchOver).toBe(true);
      scores.push(m.innings[0].runs);
    }
    expect(new Set(scores).size).toBeGreaterThan(1);
  }, 30000);

  it('skilled batting teams outscore weak ones on average', () => {
    const strong = TEAMS[0];
    const weak: Team = {
      ...TEAMS[1],
      players: TEAMS[1].players.map((p) => ({ ...p, batting: Math.max(5, p.batting - 50) })),
    };
    let strongTotal = 0;
    let weakTotal = 0;
    for (const seed of [1, 2, 3, 4, 5]) {
      const m1 = new MatchState([strong, TEAMS[1]] as [Team, Team], FORMATS.find((f) => f.id === 'five')!, 0);
      autoSimMatch(m1, new Rng(seed));
      strongTotal += m1.innings[0].runs;
      const m2 = new MatchState([weak, TEAMS[1]] as [Team, Team], FORMATS.find((f) => f.id === 'five')!, 0);
      autoSimMatch(m2, new Rng(seed));
      weakTotal += m2.innings[0].runs;
    }
    expect(strongTotal).toBeGreaterThan(weakTotal);
  }, 60000);
});
