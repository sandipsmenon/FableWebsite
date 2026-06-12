import { Vec3, v3 } from './types';

export interface FieldPosition {
  name: string;
  pos: Vec3;
}

// Positions relative to striker at origin, +z toward bowler, +x off side (RH batter).
export const KEEPER_POS: Vec3 = v3(0, 0, -14);

export const ATTACKING_FIELD: FieldPosition[] = [
  { name: 'First Slip', pos: v3(2.2, 0, -13.5) },
  { name: 'Point', pos: v3(22, 0, 4) },
  { name: 'Cover', pos: v3(20, 0, 14) },
  { name: 'Mid Off', pos: v3(9, 0, 26) },
  { name: 'Mid On', pos: v3(-9, 0, 26) },
  { name: 'Midwicket', pos: v3(-20, 0, 13) },
  { name: 'Square Leg', pos: v3(-22, 0, 1) },
  { name: 'Fine Leg', pos: v3(-22, 0, -38) },
  { name: 'Third Man', pos: v3(26, 0, -36) },
];

export const DEFENSIVE_FIELD: FieldPosition[] = [
  { name: 'Point', pos: v3(26, 0, 5) },
  { name: 'Deep Cover', pos: v3(42, 0, 30) },
  { name: 'Long Off', pos: v3(16, 0, 52) },
  { name: 'Long On', pos: v3(-16, 0, 52) },
  { name: 'Deep Midwicket', pos: v3(-42, 0, 28) },
  { name: 'Deep Square Leg', pos: v3(-44, 0, -2) },
  { name: 'Fine Leg', pos: v3(-24, 0, -40) },
  { name: 'Third Man', pos: v3(26, 0, -38) },
  { name: 'Mid Off', pos: v3(10, 0, 28) },
];
