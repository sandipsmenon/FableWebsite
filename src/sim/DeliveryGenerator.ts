import { Rng } from '../core/Rng';
import { BowlStyle, Delivery, DeliveryType, PACE_DELIVERIES, PITCH, SPIN_DELIVERIES, v3 } from './types';

export interface BowlerProfile {
  skill: number; // 0-100
  style: BowlStyle;
  /** Over-arm release: slightly off-center, above the bowling crease. */
  rightArm?: boolean;
}

/** Tuning data per delivery type for an AI (or as a base for the user's chosen ball). */
export function baseDelivery(type: DeliveryType, style: BowlStyle, skill: number, rng: Rng): Delivery {
  const pace = style === 'pace';
  const baseSpeed = pace ? 128 + skill * 0.22 : 82 + skill * 0.1;
  let speedKph = baseSpeed + rng.range(-4, 4);
  let length = 6.5; // good length: ~6-7m from striker stumps
  let lineX = rng.range(-0.05, 0.18);
  let swing = 0;
  let turn = 0;

  switch (type) {
    case 'outswing':
      swing = rng.range(0.5, 1.1);
      length = rng.range(5.5, 7.5);
      lineX = rng.range(-0.15, 0.1);
      break;
    case 'inswing':
      swing = -rng.range(0.5, 1.1);
      length = rng.range(5.0, 7.0);
      lineX = rng.range(0.0, 0.25);
      break;
    case 'straight':
      length = rng.range(5.5, 7.5);
      swing = rng.range(-0.2, 0.2);
      break;
    case 'bouncer':
      length = rng.range(9.5, 11.5);
      speedKph += 3;
      lineX = rng.range(-0.1, 0.1);
      break;
    case 'yorker':
      length = rng.range(0.5, 1.6);
      lineX = rng.range(-0.08, 0.12);
      break;
    case 'offspin':
      turn = -rng.range(0.8, 1.6); // turns into RH batter (toward leg, -x)
      length = rng.range(4.5, 6.5);
      lineX = rng.range(0.05, 0.3);
      break;
    case 'legspin':
      turn = rng.range(0.9, 1.8); // turns away (toward off, +x)
      length = rng.range(4.5, 6.5);
      lineX = rng.range(-0.2, 0.15);
      break;
    case 'googly':
      turn = -rng.range(0.7, 1.4);
      length = rng.range(4.5, 6.0);
      lineX = rng.range(-0.1, 0.2);
      break;
  }

  // Accuracy error shrinks with skill.
  const err = (105 - skill) / 100;
  lineX += rng.range(-0.3, 0.3) * err;
  length += rng.range(-1.2, 1.2) * err;

  return {
    type,
    speedKph,
    releasePos: v3(0.25, 2.2, PITCH.bowlerCreaseZ),
    pitchTarget: { x: lineX, z: Math.max(0.4, length) },
    swing,
    turn,
  };
}

/** AI bowler tactic: pick a delivery for the current match situation. */
export function generateAiDelivery(profile: BowlerProfile, ballOfOver: number, rng: Rng): Delivery {
  const options = profile.style === 'pace' ? PACE_DELIVERIES : SPIN_DELIVERIES;
  let type: DeliveryType;
  if (profile.style === 'pace') {
    // Mostly stock balls, surprise bouncer/yorker.
    const r = rng.next();
    if (r < 0.12) type = 'bouncer';
    else if (r < 0.24) type = 'yorker';
    else type = rng.pick(['outswing', 'inswing', 'straight'] as DeliveryType[]);
  } else {
    const r = rng.next();
    if (r < 0.15) type = 'googly';
    else type = rng.pick(['offspin', 'legspin'] as DeliveryType[]);
  }
  if (!options.includes(type)) type = options[0];
  return baseDelivery(type, profile.style, profile.skill, rng);
}
