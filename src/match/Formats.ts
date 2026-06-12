export interface Format {
  id: string;
  name: string;
  overs: number;
  maxOversPerBowler: number;
}

export const FORMATS: Format[] = [
  { id: 'quick', name: 'Quick Bash (2 overs)', overs: 2, maxOversPerBowler: 1 },
  { id: 'five', name: 'Five5 (5 overs)', overs: 5, maxOversPerBowler: 2 },
  { id: 't20', name: 'Twenty20 (20 overs)', overs: 20, maxOversPerBowler: 4 },
];
