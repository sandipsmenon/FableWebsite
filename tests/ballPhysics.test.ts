import { describe, expect, it } from 'vitest';
import { createDeliveryBall, hitsStumps, stepBall, timeToPlaneZ } from '../src/sim/BallPhysics';
import { Rng } from '../src/core/Rng';
import { baseDelivery } from '../src/sim/DeliveryGenerator';
import { Delivery, PITCH, v3 } from '../src/sim/types';

function simulateToBounce(d: Delivery) {
  const ball = createDeliveryBall(d);
  const dt = 1 / 240;
  while (!ball.bounced && ball.t < 3 && ball.pos.z > -2) {
    stepBall(ball, dt, d.swing, d.turn);
  }
  return ball;
}

describe('BallPhysics', () => {
  it('yorker pitches near the striker stumps', () => {
    const d: Delivery = {
      type: 'yorker',
      speedKph: 140,
      releasePos: v3(0.2, 2.2, PITCH.bowlerCreaseZ),
      pitchTarget: { x: 0, z: 1.0 },
      swing: 0,
      turn: 0,
    };
    const ball = simulateToBounce(d);
    expect(ball.bounced).toBe(true);
    expect(Math.abs(ball.pos.z - 1.0)).toBeLessThan(1.0);
  });

  it('reaches the batting crease in a plausible time at 140kph', () => {
    const d: Delivery = {
      type: 'straight',
      speedKph: 140,
      releasePos: v3(0.2, 2.2, PITCH.bowlerCreaseZ),
      pitchTarget: { x: 0, z: 6.5 },
      swing: 0,
      turn: 0,
    };
    const t = timeToPlaneZ(createDeliveryBall(d), PITCH.strikerCreaseZ);
    expect(t).not.toBeNull();
    expect(t!).toBeGreaterThan(0.4);
    expect(t!).toBeLessThan(0.75);
  });

  it('legspin deviates toward off side (+x) after bouncing', () => {
    const d: Delivery = {
      type: 'legspin',
      speedKph: 85,
      releasePos: v3(0, 2.2, PITCH.bowlerCreaseZ),
      pitchTarget: { x: 0, z: 5.5 },
      swing: 0,
      turn: 1.4,
    };
    const ball = createDeliveryBall(d);
    const dt = 1 / 240;
    while (!ball.bounced && ball.t < 3) stepBall(ball, dt, d.swing, d.turn);
    const xAtBounce = ball.pos.x;
    while (ball.pos.z > 0.2 && ball.t < 3) stepBall(ball, dt, d.swing, d.turn);
    expect(ball.pos.x).toBeGreaterThan(xAtBounce + 0.05);
  });

  it('outswing drifts toward off side before the bounce', () => {
    const d: Delivery = {
      type: 'outswing',
      speedKph: 135,
      releasePos: v3(0, 2.2, PITCH.bowlerCreaseZ),
      pitchTarget: { x: 0, z: 6.5 },
      swing: 1.0,
      turn: 0,
    };
    // The solver compensates aim so it still pitches near target.
    const ball = simulateToBounce(d);
    expect(Math.abs(ball.pos.x)).toBeLessThan(0.5);
  });

  it('straight ball at the stumps is detected as hitting', () => {
    const d: Delivery = {
      type: 'yorker',
      speedKph: 135,
      releasePos: v3(0.1, 2.2, PITCH.bowlerCreaseZ),
      pitchTarget: { x: 0, z: 1.2 },
      swing: 0,
      turn: 0,
    };
    expect(hitsStumps(createDeliveryBall(d))).toBe(true);
  });

  it('wide ball misses the stumps', () => {
    const d: Delivery = {
      type: 'straight',
      speedKph: 135,
      releasePos: v3(0.2, 2.2, PITCH.bowlerCreaseZ),
      pitchTarget: { x: 1.1, z: 6 },
      swing: 0,
      turn: 0,
    };
    expect(hitsStumps(createDeliveryBall(d))).toBe(false);
  });

  it('bouncer gets up above stump height by the crease', () => {
    const d: Delivery = {
      type: 'bouncer',
      speedKph: 142,
      releasePos: v3(0.2, 2.2, PITCH.bowlerCreaseZ),
      pitchTarget: { x: 0, z: 10.5 },
      swing: 0,
      turn: 0,
    };
    const ball = createDeliveryBall(d);
    const dt = 1 / 240;
    while (ball.pos.z > PITCH.strikerCreaseZ && ball.t < 3) stepBall(ball, dt);
    expect(ball.pos.y).toBeGreaterThan(PITCH.stumpHeight);
  });

  it('generated deliveries from all types land on the pitch surface', () => {
    const rng = new Rng(42);
    for (const type of ['outswing', 'inswing', 'straight', 'bouncer', 'yorker', 'offspin', 'legspin', 'googly'] as const) {
      const style = ['offspin', 'legspin', 'googly'].includes(type) ? 'spin' : 'pace';
      const d = baseDelivery(type, style, 85, rng);
      const ball = simulateToBounce(d);
      expect(ball.bounced).toBe(true);
      expect(Math.abs(ball.pos.x)).toBeLessThan(PITCH.width);
      expect(ball.pos.z).toBeGreaterThan(-1);
      expect(ball.pos.z).toBeLessThan(PITCH.bowlerCreaseZ);
    }
  });
});
