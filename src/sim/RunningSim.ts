import { PITCH } from './types';

/**
 * Abstract running model: batsmen run the 17.7m between popping creases.
 * Run i (1-based) completes at runTime * i (turnaround included in runTime).
 */
export interface RunningPlan {
  /** Seconds per run for the slower batsman. */
  secondsPerRun: number;
}

export const CREASE_DISTANCE = PITCH.bowlerCreaseZ - PITCH.strikerCreaseZ; // ~17.7m

export function secondsPerRun(battingSkill: number): number {
  const speed = 5.4 + (battingSkill / 100) * 1.6; // m/s
  return CREASE_DISTANCE / speed + 0.55; // + turn/settle time
}

/** How many runs are safely completable before the ball is back at the stumps. */
export function safeRuns(plan: RunningPlan, ballBackAtStumpsTime: number, margin = 0.8): number {
  let runs = 0;
  while ((runs + 1) * plan.secondsPerRun + margin <= ballBackAtStumpsTime) runs++;
  return Math.min(runs, 3);
}

/**
 * Run-out check for an attempted N-th run: did the throw arrive before the
 * runner made their ground?
 */
export function isRunOut(plan: RunningPlan, attemptedRuns: number, throwArrivesAt: number): boolean {
  const runnerArrives = attemptedRuns * plan.secondsPerRun;
  return throwArrivesAt < runnerArrives - 0.05;
}
