// Pure simulation types. This layer must not import Three.js or touch the DOM.

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export const v3 = (x = 0, y = 0, z = 0): Vec3 => ({ x, y, z });
export const vAdd = (a: Vec3, b: Vec3): Vec3 => v3(a.x + b.x, a.y + b.y, a.z + b.z);
export const vSub = (a: Vec3, b: Vec3): Vec3 => v3(a.x - b.x, a.y - b.y, a.z - b.z);
export const vScale = (a: Vec3, s: number): Vec3 => v3(a.x * s, a.y * s, a.z * s);
export const vLen = (a: Vec3): number => Math.hypot(a.x, a.y, a.z);
export const vLenXZ = (a: Vec3): number => Math.hypot(a.x, a.z);
export const vDistXZ = (a: Vec3, b: Vec3): number => Math.hypot(a.x - b.x, a.z - b.z);
export const vClone = (a: Vec3): Vec3 => v3(a.x, a.y, a.z);

// Pitch geometry (meters). Striker's stumps at origin, bowler's stumps at +Z.
export const PITCH = {
  length: 20.12,
  strikerStumpsZ: 0,
  bowlerStumpsZ: 20.12,
  strikerCreaseZ: 1.22, // popping crease in front of striker stumps
  bowlerCreaseZ: 18.9,
  stumpHeight: 0.71,
  stumpHalfWidth: 0.114, // outer stump center offset from middle
  width: 3.05,
  boundaryRadius: 66,
  groundRadius: 78,
  wideLineX: 0.89, // return-crease-ish wide line for judging wides
} as const;

export type BowlStyle = 'pace' | 'spin';

export type DeliveryType =
  | 'outswing'
  | 'inswing'
  | 'straight'
  | 'bouncer'
  | 'yorker'
  | 'offspin'
  | 'legspin'
  | 'googly';

export const PACE_DELIVERIES: DeliveryType[] = ['outswing', 'inswing', 'straight', 'bouncer', 'yorker'];
export const SPIN_DELIVERIES: DeliveryType[] = ['offspin', 'legspin', 'googly', 'straight'];

export interface Delivery {
  type: DeliveryType;
  speedKph: number;
  releasePos: Vec3;
  /** Where the bowler is trying to pitch the ball (x lateral, z along pitch). */
  pitchTarget: { x: number; z: number };
  /** Lateral aerodynamic drift before the bounce, signed m/s^2 (+x = toward off side of RH batter). */
  swing: number;
  /** Lateral deviation applied at the bounce, signed m/s (+x). */
  turn: number;
}

export interface BallState {
  pos: Vec3;
  vel: Vec3;
  bounced: boolean;
  /** True while the ball can still produce game events. */
  live: boolean;
  rolling: boolean;
  t: number;
}

export type ShotType = 'grounded' | 'lofted' | 'defensive' | 'leave';

export type ShotDirection =
  | 'straight'
  | 'offDrive'
  | 'coverDrive'
  | 'cut'
  | 'lateCut'
  | 'onDrive'
  | 'flick'
  | 'pull'
  | 'glance';

export interface ShotInput {
  direction: ShotDirection;
  type: ShotType;
  /** Seconds of timing error: press time minus ideal contact time. */
  timingError: number;
}

export type ShotQuality = 'perfect' | 'good' | 'mistimed' | 'edge' | 'missed';

export type DismissalType = 'bowled' | 'caught' | 'lbw' | 'runout';

export interface ShotResult {
  quality: ShotQuality;
  /** Ball velocity off the bat; undefined for clean misses/leaves. */
  exitVel?: Vec3;
}

/** Horizontal angle (radians, around striker) for each shot direction; 0 = straight down the ground (+z), positive = off side (+x) for RH bat. */
export const SHOT_ANGLES: Record<ShotDirection, number> = {
  straight: 0,
  offDrive: 0.45,
  coverDrive: 0.95,
  cut: 1.55,
  lateCut: 2.3,
  onDrive: -0.45,
  flick: -1.0,
  pull: -1.6,
  glance: -2.4,
};
