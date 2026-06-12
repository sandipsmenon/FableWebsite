import { Rng } from '../core/Rng';
import { Delivery, ShotDirection, ShotInput, ShotType } from './types';

export interface BatterAiContext {
  batterSkill: number;
  /** Required run rate pressure 0..1 (0 = cruise, 1 = desperate). */
  pressure: number;
  wicketsInHandFrac: number; // 1 = all wickets, 0 = last pair
  rng: Rng;
}

/** Pick a plausible shot for the delivery; quality comes from a synthetic timing error. */
export function aiSelectShot(d: Delivery, ctx: BatterAiContext): ShotInput {
  const r = ctx.rng;
  const length = d.pitchTarget.z;
  const wide = d.pitchTarget.x;

  let aggression = 0.32 + ctx.pressure * 0.45 + (ctx.batterSkill / 100) * 0.1;
  aggression *= 0.6 + ctx.wicketsInHandFrac * 0.4;

  // Leave very wide balls when not under pressure.
  if (Math.abs(wide) > 0.85 && ctx.pressure < 0.5 && r.chance(0.55)) {
    return { direction: 'straight', type: 'leave', timingError: 1 };
  }

  let direction: ShotDirection;
  if (length > 9) {
    direction = r.pick<ShotDirection>(['pull', 'cut', 'glance']);
  } else if (length < 2.5) {
    direction = r.pick<ShotDirection>(['straight', 'flick', 'glance']);
  } else if (wide > 0.35) {
    direction = r.pick<ShotDirection>(['coverDrive', 'cut', 'offDrive', 'lateCut']);
  } else if (wide < -0.2) {
    direction = r.pick<ShotDirection>(['flick', 'onDrive', 'pull', 'glance']);
  } else {
    direction = r.pick<ShotDirection>(['straight', 'offDrive', 'onDrive', 'coverDrive', 'flick']);
  }

  let type: ShotType;
  const roll = r.next();
  if (roll < aggression * 0.32) type = 'lofted';
  else if (roll < aggression + 0.35) type = 'grounded';
  else type = 'defensive';

  // Synthetic timing error: skilled batters cluster near zero; pressure adds error.
  const sigma = 0.02 + (1 - ctx.batterSkill / 100) * 0.06 + ctx.pressure * 0.015;
  const timingError = gaussian(r) * sigma;

  return { direction, type, timingError };
}

function gaussian(rng: Rng): number {
  // Box-Muller
  const u = Math.max(1e-9, rng.next());
  const v = rng.next();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}
