import { Rng } from '../core/Rng';
import { stepBall } from './BallPhysics';
import {
  BallState,
  PITCH,
  Vec3,
  v3,
  vClone,
  vDistXZ,
} from './types';

export interface FielderState {
  name: string;
  home: Vec3;
  pos: Vec3;
  speed: number; // m/s from fielding rating
  skill: number; // 0-100
}

export type InterceptKind = 'catch' | 'pickup';

export interface InterceptPlan {
  fielderIndex: number;
  point: Vec3;
  time: number;
  kind: InterceptKind;
}

export interface BallPathSample {
  pos: Vec3;
  t: number;
  airborne: boolean;
}

const REACTION_TIME = 0.35;

/** Sample the struck ball's future path until it stops or crosses the boundary. */
export function sampleBallPath(ball: BallState, maxT = 12): BallPathSample[] {
  const copy: BallState = {
    pos: vClone(ball.pos),
    vel: vClone(ball.vel),
    bounced: ball.bounced,
    live: true,
    rolling: ball.rolling,
    t: 0,
  };
  const out: BallPathSample[] = [];
  const dt = 1 / 60;
  // Once the struck ball touches the grass, it can no longer be caught.
  let touchedGround = copy.pos.y <= 0.05;
  while (copy.t < maxT) {
    stepBall(copy, dt);
    if (copy.pos.y <= 0.05) touchedGround = true;
    out.push({ pos: vClone(copy.pos), t: copy.t, airborne: !touchedGround && copy.pos.y > 0.3 });
    const r = Math.hypot(copy.pos.x, copy.pos.z - PITCH.length / 2);
    if (r > PITCH.boundaryRadius + 2) break;
    if (copy.rolling && Math.hypot(copy.vel.x, copy.vel.z) < 0.05) break;
  }
  return out;
}

/**
 * Find the earliest interception by any fielder. Catch = reach an airborne sample
 * below catchable height; pickup = reach the ball on the ground/rolling.
 */
export function planInterception(
  path: BallPathSample[],
  fielders: FielderState[],
): InterceptPlan | null {
  let best: InterceptPlan | null = null;
  for (const sample of path) {
    if (sample.pos.y > 2.4) continue; // too high to take
    for (let i = 0; i < fielders.length; i++) {
      const f = fielders[i];
      const dist = vDistXZ(f.pos, sample.pos);
      const arrive = REACTION_TIME + dist / f.speed;
      if (arrive <= sample.t) {
        const kind: InterceptKind = sample.airborne ? 'catch' : 'pickup';
        if (!best || sample.t < best.time) {
          best = { fielderIndex: i, point: vClone(sample.pos), time: sample.t, kind };
        }
      }
    }
    if (best) break; // earliest sample wins
  }
  return best;
}

/** Does the path cross the rope, and was it on the full? Returns null if it stays in. */
export function boundaryOutcome(
  path: BallPathSample[],
  beforeT = Infinity,
): { runs: 4 | 6; time: number } | null {
  const center = v3(0, 0, PITCH.length / 2);
  let wasAirborneAllTheWay = true;
  for (const s of path) {
    if (s.t > beforeT) return null;
    if (!s.airborne) wasAirborneAllTheWay = false;
    const r = Math.hypot(s.pos.x - center.x, s.pos.z - center.z);
    if (r >= PITCH.boundaryRadius) {
      return { runs: wasAirborneAllTheWay ? 6 : 4, time: s.t };
    }
  }
  return null;
}

export function resolveCatch(fielder: FielderState, ballSpeed: number, hangTime: number, rng: Rng): boolean {
  let p = 0.42 + (fielder.skill / 100) * 0.42;
  p += Math.min(0.15, hangTime * 0.05); // more hang time = easier
  p -= Math.min(0.3, ballSpeed * 0.006); // flat hits are harder
  return rng.chance(Math.max(0.08, Math.min(0.97, p)));
}

/** Flight time for a fielder's throw to a set of stumps. */
export function throwTime(from: Vec3, to: Vec3, skill: number): number {
  const d = vDistXZ(from, to);
  const throwSpeed = 22 + (skill / 100) * 10;
  return 0.45 + d / throwSpeed; // wind-up + flight
}
