import { describe, expect, it } from 'vitest';
import { TEAMS } from '../src/data/teams';
import { FORMATS } from '../src/match/Formats';
import { MatchState } from '../src/match/MatchState';
import { Team } from '../src/match/Teams';

const t20 = FORMATS.find((f) => f.id === 't20')!;
const quick = FORMATS.find((f) => f.id === 'quick')!;

function newMatch(format = t20) {
  const m = new MatchState([TEAMS[0], TEAMS[1]] as [Team, Team], format, 0);
  m.setBowler(10);
  return m;
}

describe('MatchState', () => {
  it('rotates strike on odd runs', () => {
    const m = newMatch();
    expect(m.inn.strikerCard).toBe(0);
    m.applyBall({ runs: 1, text: '1 run' });
    expect(m.inn.strikerCard).toBe(1);
    m.applyBall({ runs: 2, text: '2 runs' });
    expect(m.inn.strikerCard).toBe(1);
  });

  it('swaps strike at the end of an over', () => {
    const m = newMatch();
    for (let i = 0; i < 6; i++) m.applyBall({ runs: 0, text: 'dot' });
    expect(m.inn.legalBalls).toBe(6);
    expect(m.inn.strikerCard).toBe(1);
    expect(m.eligibleBowlers()).not.toContain(10);
  });

  it('wides add runs without counting a ball', () => {
    const m = newMatch();
    m.applyBall({ runs: 0, extra: 'wide', text: 'Wide' });
    expect(m.inn.runs).toBe(1);
    expect(m.inn.legalBalls).toBe(0);
    expect(m.inn.extras.wides).toBe(1);
  });

  it('records wickets, FOW, and brings in the next batter', () => {
    const m = newMatch();
    m.applyBall({ runs: 0, wicket: { how: 'bowled', bowler: 'M. Khan' }, text: 'OUT' });
    expect(m.inn.wickets).toBe(1);
    expect(m.inn.fow).toHaveLength(1);
    expect(m.inn.cards).toHaveLength(3);
    expect(m.inn.cards[m.inn.strikerCard].playerIndex).toBe(2);
    expect(m.inn.bowlerCards.get(10)!.wickets).toBe(1);
  });

  it('closes the innings when overs run out and sets a target', () => {
    const m = newMatch(quick);
    for (let i = 0; i < 12; i++) m.applyBall({ runs: 1, text: '1' });
    expect(m.innings[0].closed).toBe(true);
    expect(m.innings).toHaveLength(2);
    expect(m.innings[1].target).toBe(13);
  });

  it('all out closes the innings', () => {
    const m = newMatch();
    for (let i = 0; i < 10; i++) m.applyBall({ runs: 0, wicket: { how: 'bowled' }, text: 'OUT' });
    expect(m.inn.wickets).toBe(10);
    expect(m.innings[0].closed).toBe(true);
  });

  it('resolves a successful chase as a win by wickets', () => {
    const m = newMatch(quick);
    for (let i = 0; i < 12; i++) m.applyBall({ runs: 1, text: '1' });
    m.startSecondInnings();
    m.setBowler(10);
    for (let i = 0; i < 4; i++) m.applyBall({ runs: 4, boundary: 4, text: 'FOUR' });
    expect(m.isMatchOver).toBe(true);
    expect(m.result!.winnerTeamIndex).toBe(1);
    expect(m.result!.text).toContain('win by');
    expect(m.result!.text).toContain('wicket');
  });

  it('resolves a failed chase as a win by runs', () => {
    const m = newMatch(quick);
    for (let i = 0; i < 12; i++) m.applyBall({ runs: 2, text: '2' });
    m.startSecondInnings();
    m.setBowler(10);
    for (let i = 0; i < 12; i++) m.applyBall({ runs: 1, text: '1' });
    expect(m.isMatchOver).toBe(true);
    expect(m.result!.winnerTeamIndex).toBe(0);
    expect(m.result!.text).toContain('run');
  });

  it('detects a tie', () => {
    const m = newMatch(quick);
    for (let i = 0; i < 12; i++) m.applyBall({ runs: 1, text: '1' });
    m.startSecondInnings();
    m.setBowler(10);
    for (let i = 0; i < 12; i++) m.applyBall({ runs: 1, text: '1' });
    expect(m.result!.winnerTeamIndex).toBeNull();
    expect(m.result!.text).toContain('tied');
  });

  it('enforces bowler quotas and no consecutive overs', () => {
    const m = newMatch(t20);
    // Bowl 4 overs with bowler 10 (alternating with 9 to avoid consecutive)
    for (let over = 0; over < 8; over++) {
      m.setBowler(over % 2 === 0 ? 10 : 9);
      for (let b = 0; b < 6; b++) m.applyBall({ runs: 0, text: 'dot' });
    }
    // bowler 10 has bowled 4 overs (the t20 max)
    expect(m.eligibleBowlers()).not.toContain(10);
    expect(m.eligibleBowlers()).toContain(8);
  });
});
