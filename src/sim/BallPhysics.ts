import { BallState, Delivery, PITCH, Vec3, v3, vClone, vLen } from './types';

const G = 9.81;
const DRAG = 0.012; // simple quadratic drag coefficient lumped with mass/area
const ROLL_FRICTION = 1.55; // m/s^2 deceleration while rolling
const GROUND_RESTITUTION = 0.46;

/**
 * Build the initial ball state for a delivery. The release velocity is solved so the
 * ball (under gravity + swing) lands close to the requested pitchTarget.
 */
export function createDeliveryBall(d: Delivery): BallState {
  const speed = d.speedKph / 3.6;
  const dz = d.pitchTarget.z - d.releasePos.z; // negative (towards striker)
  const dx = d.pitchTarget.x - d.releasePos.x;
  const horiz = Math.hypot(dx, dz);
  // Estimate flight time from horizontal speed, then solve vy for the drop.
  const t = horiz / speed;
  const vy = (0 - d.releasePos.y + 0.5 * G * t * t) / t;
  // Subtract expected swing drift so the ball still pitches near the target.
  const swingDrift = 0.5 * d.swing * t * t;
  const vx = (dx - swingDrift) / t;
  const vz = dz / t;
  return {
    pos: vClone(d.releasePos),
    vel: v3(vx, vy, vz),
    bounced: false,
    live: true,
    rolling: false,
    t: 0,
  };
}

/**
 * Advance the ball by dt. `swing` only acts before the bounce; `turn` kicks in at the bounce.
 * Works both for deliveries and for struck balls (pass swing=0, turn=0).
 */
export function stepBall(ball: BallState, dt: number, swing = 0, turn = 0): void {
  if (!ball.live) return;
  ball.t += dt;

  if (ball.rolling) {
    const sp = Math.hypot(ball.vel.x, ball.vel.z);
    if (sp < 0.05) {
      ball.vel.x = 0;
      ball.vel.z = 0;
      return;
    }
    const dec = Math.min(sp, ROLL_FRICTION * dt);
    ball.vel.x -= (ball.vel.x / sp) * dec;
    ball.vel.z -= (ball.vel.z / sp) * dec;
    ball.pos.x += ball.vel.x * dt;
    ball.pos.z += ball.vel.z * dt;
    ball.pos.y = 0.035;
    return;
  }

  const sp = vLen(ball.vel);
  const dragK = DRAG * sp;
  ball.vel.x += (-dragK * ball.vel.x + (ball.bounced ? 0 : swing)) * dt;
  ball.vel.y += (-G - dragK * ball.vel.y) * dt;
  ball.vel.z += -dragK * ball.vel.z * dt;
  ball.pos.x += ball.vel.x * dt;
  ball.pos.y += ball.vel.y * dt;
  ball.pos.z += ball.vel.z * dt;

  if (ball.pos.y <= 0.035 && ball.vel.y < 0) {
    ball.pos.y = 0.035;
    ball.vel.y = -ball.vel.y * GROUND_RESTITUTION;
    if (!ball.bounced) {
      ball.bounced = true;
      ball.vel.x += turn; // seam/spin deviation off the pitch
      // pitch grips the ball slightly
      ball.vel.z *= 0.92;
    } else {
      ball.vel.x *= 0.85;
      ball.vel.z *= 0.85;
    }
    if (ball.vel.y < 0.9) {
      ball.vel.y = 0;
      ball.rolling = true;
    }
  }
}

/** Simulate a copy of the ball forward and report position at time t (no swing/turn). */
export function predictBallAt(ball: BallState, t: number, dt = 1 / 120): Vec3 {
  const copy: BallState = {
    pos: vClone(ball.pos),
    vel: vClone(ball.vel),
    bounced: ball.bounced,
    live: true,
    rolling: ball.rolling,
    t: ball.t,
  };
  let elapsed = 0;
  while (elapsed < t) {
    stepBall(copy, dt);
    elapsed += dt;
  }
  return copy.pos;
}

/** Time until the delivery crosses the given z plane (e.g. the batting crease), or null. */
export function timeToPlaneZ(ball: BallState, planeZ: number, swing = 0, turn = 0, maxT = 3): number | null {
  const copy: BallState = {
    pos: vClone(ball.pos),
    vel: vClone(ball.vel),
    bounced: ball.bounced,
    live: true,
    rolling: ball.rolling,
    t: 0,
  };
  const dt = 1 / 240;
  while (copy.t < maxT) {
    stepBall(copy, dt, swing, turn);
    if (copy.pos.z <= planeZ) return copy.t;
  }
  return null;
}

/** Will this delivery (from its current state) go on to hit the striker's stumps? */
export function hitsStumps(ball: BallState, swing = 0, turn = 0): boolean {
  const copy: BallState = {
    pos: vClone(ball.pos),
    vel: vClone(ball.vel),
    bounced: ball.bounced,
    live: true,
    rolling: ball.rolling,
    t: 0,
  };
  const dt = 1 / 240;
  while (copy.t < 3 && copy.pos.z > PITCH.strikerStumpsZ - 0.1) {
    stepBall(copy, dt, swing, turn);
    if (copy.pos.z <= PITCH.strikerStumpsZ && copy.pos.z > PITCH.strikerStumpsZ - 0.25) {
      return Math.abs(copy.pos.x) < PITCH.stumpHalfWidth + 0.036 && copy.pos.y < PITCH.stumpHeight;
    }
  }
  return false;
}
