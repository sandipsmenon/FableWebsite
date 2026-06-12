import { Rng } from '../core/Rng';
import {
  BallState,
  SHOT_ANGLES,
  ShotInput,
  ShotQuality,
  ShotResult,
  Vec3,
  v3,
} from './types';

export interface ShotContext {
  batterSkill: number; // 0-100
  ballSpeedAtBat: number; // m/s
  ballPos: Vec3; // where the ball is at contact attempt
  lateralMovement: number; // |swing| + |turn| of the delivery, raises edge chance
  rng: Rng;
}

const PERFECT_MS = 42;
const GOOD_MS = 95;
const MISTIME_MS = 160;

/**
 * Resolve a batting attempt: timing error -> quality -> exit velocity.
 * A `missed` result means bat didn't touch ball (stumps/LBW handled by caller).
 */
export function resolveShot(input: ShotInput, ctx: ShotContext): ShotResult {
  if (input.type === 'leave') return { quality: 'missed' };

  const absMs = Math.abs(input.timingError) * 1000;
  // Skill widens effective timing windows slightly.
  const skillScale = 0.85 + (ctx.batterSkill / 100) * 0.4;
  const eff = absMs / skillScale;

  let quality: ShotQuality;
  if (eff < PERFECT_MS) quality = 'perfect';
  else if (eff < GOOD_MS) quality = 'good';
  else if (eff < MISTIME_MS) quality = 'mistimed';
  else return { quality: 'missed' };

  // Reachability: ball too wide of the bat = miss/edge even with good timing.
  const wide = Math.abs(ctx.ballPos.x);
  if (wide > 1.25) return { quality: 'missed' };

  // Edge chance grows with lateral movement, mistiming, and ball width.
  let edgeP = 0.008 + ctx.lateralMovement * 0.018 + wide * 0.03;
  if (quality === 'good') edgeP += 0.015;
  if (quality === 'mistimed') edgeP += 0.06;
  edgeP *= 1.25 - (ctx.batterSkill / 100) * 0.5;
  if (input.type !== 'defensive' && ctx.rng.chance(edgeP)) {
    // Edge: thin deflection carrying behind square on the off side.
    const sp = ctx.ballSpeedAtBat;
    const dir = ctx.rng.range(0.25, 0.8); // toward keeper/slips
    return {
      quality: 'edge',
      exitVel: v3(
        Math.sin(dir) * sp * ctx.rng.range(0.5, 0.85) * (ctx.rng.chance(0.8) ? 1 : -0.5),
        ctx.rng.range(0.4, 2.4),
        -Math.cos(dir) * sp * ctx.rng.range(0.45, 0.8),
      ),
    };
  }

  if (input.type === 'defensive') {
    if (quality === 'mistimed' && ctx.rng.chance(0.25)) return { quality: 'missed' };
    return {
      quality,
      exitVel: v3(ctx.rng.range(-1.5, 1.5), ctx.rng.range(-0.5, 0.4), ctx.rng.range(1.5, 4)),
    };
  }

  // Power from skill, timing and incoming pace.
  const qualityPower = quality === 'perfect' ? 1 : quality === 'good' ? 0.8 : 0.5;
  const skillPower = 0.75 + (ctx.batterSkill / 100) * 0.45;
  const base = (input.type === 'lofted' ? 31 : 29) + ctx.ballSpeedAtBat * 0.32;
  let speed = base * qualityPower * skillPower * ctx.rng.range(0.9, 1.08);

  // Direction scatter when not perfect.
  let angle = SHOT_ANGLES[input.direction];
  const scatter = quality === 'perfect' ? 0.06 : quality === 'good' ? 0.18 : 0.5;
  angle += ctx.rng.range(-scatter, scatter);

  // Elevation: grounded shots stay low; lofted go aerial; mistimed lofted balloons up.
  let elev: number;
  if (input.type === 'lofted') {
    elev = quality === 'mistimed' ? ctx.rng.range(0.9, 1.25) : ctx.rng.range(0.42, 0.62);
    if (quality === 'mistimed') speed *= 0.75;
  } else {
    elev = quality === 'mistimed' ? ctx.rng.range(0.12, 0.45) : ctx.rng.range(-0.06, 0.1);
  }

  const horiz = speed * Math.cos(elev);
  return {
    quality,
    exitVel: v3(Math.sin(angle) * horiz, Math.sin(elev) * speed, Math.cos(angle) * horiz),
  };
}

/** Apply a shot result to the live ball state (mutates). */
export function applyShotToBall(ball: BallState, exitVel: Vec3): void {
  ball.vel = v3(exitVel.x, exitVel.y, exitVel.z);
  ball.bounced = true; // no more swing/turn
  ball.rolling = false;
  if (ball.pos.y < 0.08) ball.pos.y = 0.3;
}
