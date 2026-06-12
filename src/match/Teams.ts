import { BowlStyle } from '../sim/types';

export interface Player {
  name: string;
  batting: number; // 0-100
  bowling: number; // 0-100
  fielding: number; // 0-100
  role: 'bat' | 'bowl' | 'all' | 'wk';
  bowlStyle?: BowlStyle;
}

export interface Team {
  name: string;
  shortName: string;
  /** Kit colors as hex ints for the renderer. */
  primaryColor: number;
  secondaryColor: number;
  players: Player[]; // batting order
}

export function bowlersOf(team: Team): number[] {
  return team.players
    .map((p, i) => ({ p, i }))
    .filter(({ p }) => p.role === 'bowl' || p.role === 'all')
    .map(({ i }) => i);
}
