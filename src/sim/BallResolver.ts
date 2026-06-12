import { Rng } from '../core/Rng';
import { createDeliveryBall, hitsStumps, stepBall, timeToPlaneZ } from './BallPhysics';
import {
  BallPathSample,
  FielderState,
  InterceptPlan,
  boundaryOutcome,
  planInterception,
  resolveCatch,
  sampleBallPath,
  throwTime,
} from './FielderSim';
import { isRunOut, safeRuns, secondsPerRun } from './RunningSim';
import { applyShotToBall, resolveShot } from './ShotModel';
import {
  BallState,
  Delivery,
  DismissalType,
  PITCH,
  ShotInput,
  ShotQuality,
  Vec3,
  v3,
  vClone,
  vLen,
} from './types';

export interface ResolvedBall {
  /** Ball state at the moment of bat contact / passing the batter. */
  contactState: BallState;
  /** Time from release to contact plane. */
  contactTime: number;
  quality: ShotQuality;
  /** Path of the ball after contact (empty if missed/taken by keeper). */
  path: BallPathSample[];
  outcome: {
    runs: number;
    boundary?: 4 | 6;
    wicket?: { how: DismissalType; fielder?: string };
    wide?: boolean;
    text: string;
  };
  intercept?: InterceptPlan;
  /** Total seconds the ball is live after contact (for animation pacing). */
  liveTime: number;
  /** Runs the batsmen attempted (for animating running). */
  attemptedRuns: number;
}

export interface ResolveContext {
  batterSkill: number;
  runningSkill: number;
  fielders: FielderState[];
  keeperName: string;
  rng: Rng;
  /** Extra run aggression: 0 conservative .. 1 risky (AI); user override handled by caller. */
  runAggression?: number;
  /** Forced attempted runs (user pressed for extra run); otherwise computed. */
  forcedExtraRun?: boolean;
}

const CONTACT_PLANE_Z = 1.0; // just in front of the popping crease

/** Simulate the delivery to the contact plane, returning state + time. */
export function simulateToContact(d: Delivery): { state: BallState; time: number } {
  const ball = createDeliveryBall(d);
  const dt = 1 / 240;
  while (ball.pos.z > CONTACT_PLANE_Z && ball.t < 3) {
    stepBall(ball, dt, d.swing, d.turn);
  }
  return { state: ball, time: ball.t };
}

export function idealContactTime(d: Delivery): number {
  return timeToPlaneZ(createDeliveryBall(d), CONTACT_PLANE_Z, d.swing, d.turn) ?? 0.6;
}

/** Is the delivery a wide if left alone? */
export function isWide(contact: BallState): boolean {
  return Math.abs(contact.pos.x) > PITCH.wideLineX && contact.pos.y < 2.2;
}

/**
 * Resolve everything that happens after the batter's (or AI's) shot decision.
 * Pure function of inputs + rng: usable headlessly and by the live renderer.
 */
export function resolveBall(d: Delivery, shot: ShotInput, ctx: ResolveContext): ResolvedBall {
  const { state: contact, time: contactTime } = simulateToContact(d);
  const lateralMovement = Math.abs(d.swing) + Math.abs(d.turn);

  const shotResult = resolveShot(shot, {
    batterSkill: ctx.batterSkill,
    ballSpeedAtBat: vLen(contact.vel),
    ballPos: contact.pos,
    lateralMovement,
    rng: ctx.rng,
  });

  // ----- Missed / left -----
  if (shotResult.quality === 'missed' || !shotResult.exitVel) {
    const ballAtContact = cloneState(contact);
    if (hitsStumps(cloneState(contact), 0, 0)) {
      return missedResult(contact, contactTime, 'bowled', shot, ctx);
    }
    // LBW: ball in line with stumps at pad height, would have gone on to hit.
    const inLine = Math.abs(contact.pos.x) < 0.25 && contact.pos.y < 0.6;
    if (inLine && shot.type !== 'leave' && ctx.rng.chance(0.5)) {
      return missedResult(contact, contactTime, 'lbw', shot, ctx);
    }
    // Through to the keeper: dead ball (possibly wide).
    const wide = isWide(ballAtContact);
    return {
      contactState: contact,
      contactTime,
      quality: 'missed',
      path: [],
      outcome: wide
        ? { runs: 0, wide: true, text: 'Wide' }
        : { runs: 0, text: shot.type === 'leave' ? 'Left alone' : 'Beaten!' },
      liveTime: 1.2,
      attemptedRuns: 0,
    };
  }

  // ----- Bat on ball -----
  const liveBall = cloneState(contact);
  applyShotToBall(liveBall, shotResult.exitVel);
  const path = sampleBallPath(liveBall);

  // Edge behind: keeper/slip catch attempt before anything else.
  if (shotResult.quality === 'edge') {
    const keeper = ctx.fielders[0]; // convention: index 0 is the keeper
    const plan = planInterception(path, ctx.fielders);
    if (plan && plan.kind === 'catch') {
      const f = ctx.fielders[plan.fielderIndex];
      if (resolveCatch(f, vLen(liveBall.vel), plan.time, ctx.rng)) {
        return {
          contactState: contact,
          contactTime,
          quality: 'edge',
          path: path.filter((s) => s.t <= plan.time),
          outcome: {
            runs: 0,
            wicket: { how: 'caught', fielder: f.name },
            text: `Edged and taken by ${f.name === keeper.name ? 'the keeper' : f.name}!`,
          },
          intercept: plan,
          liveTime: plan.time + 1,
          attemptedRuns: 0,
        };
      }
    }
  }

  // Boundary check (before any fielder cuts it off).
  const intercept = planInterception(path, ctx.fielders);
  const boundary = boundaryOutcome(path, intercept?.time ?? Infinity);
  if (boundary) {
    return {
      contactState: contact,
      contactTime,
      quality: shotResult.quality,
      path: path.filter((s) => s.t <= boundary.time + 0.3),
      outcome:
        boundary.runs === 6
          ? { runs: 6, boundary: 6, text: 'SIX! Into the crowd!' }
          : { runs: 4, boundary: 4, text: 'FOUR! Races to the rope!' },
      liveTime: boundary.time + 1,
      attemptedRuns: 0,
    };
  }

  // Fielder catch on a lofted shot.
  if (intercept && intercept.kind === 'catch') {
    const f = ctx.fielders[intercept.fielderIndex];
    if (resolveCatch(f, vLen(liveBall.vel), intercept.time, ctx.rng)) {
      return {
        contactState: contact,
        contactTime,
        quality: shotResult.quality,
        path: path.filter((s) => s.t <= intercept.time),
        outcome: { runs: 0, wicket: { how: 'caught', fielder: f.name }, text: `Caught by ${f.name}!` },
        intercept,
        liveTime: intercept.time + 1,
        attemptedRuns: 0,
      };
    }
  }

  // Ground fielding + running.
  const spr = secondsPerRun(ctx.runningSkill);
  const plan = { secondsPerRun: spr };
  let ballBack: number;
  let throwFrom: Vec3;
  let fielderSkill = 60;
  if (intercept) {
    const f = ctx.fielders[intercept.fielderIndex];
    throwFrom = intercept.point;
    fielderSkill = f.skill;
    ballBack = intercept.time + throwTime(throwFrom, v3(0, 0, 0), f.skill);
  } else {
    // Nobody reached it but it didn't cross the rope: ball dies in the outfield.
    const last = path[path.length - 1];
    throwFrom = last.pos;
    ballBack = last.t + throwTime(last.pos, v3(0, 0, 0), 60) + 1.2;
  }

  let runs = safeRuns(plan, ballBack);
  let attemptedRuns = runs;
  let runOut: ResolvedBall['outcome']['wicket'];

  const aggression = ctx.runAggression ?? 0.25;
  const wantExtra = ctx.forcedExtraRun || (runs < 3 && ctx.rng.chance(aggression * 0.4));
  if (wantExtra && runs < 4) {
    attemptedRuns = runs + 1;
    // Throw accuracy roll: skilled fielders hit the stumps more often.
    const throwArrival = ballBack + ctx.rng.range(-0.25, 0.45);
    const direct = ctx.rng.chance(0.1 + fielderSkill / 500);
    if (direct && isRunOut(plan, attemptedRuns, throwArrival)) {
      runOut = { how: 'runout', fielder: intercept ? ctx.fielders[intercept.fielderIndex].name : undefined };
      runs = attemptedRuns - 1; // completed runs before being out
    } else {
      runs = attemptedRuns;
    }
  }

  const text = runOut
    ? 'RUN OUT!'
    : runs === 0
      ? 'No run'
      : runs === 1
        ? '1 run'
        : `${runs} runs`;

  return {
    contactState: contact,
    contactTime,
    quality: shotResult.quality,
    path,
    outcome: { runs, wicket: runOut, text },
    intercept: intercept ?? undefined,
    liveTime: Math.min(9, Math.max(ballBack, attemptedRuns * spr) + 0.6),
    attemptedRuns,
  };
}

function missedResult(
  contact: BallState,
  contactTime: number,
  how: 'bowled' | 'lbw',
  shot: ShotInput,
  ctx: ResolveContext,
): ResolvedBall {
  return {
    contactState: contact,
    contactTime,
    quality: 'missed',
    path: [],
    outcome: {
      runs: 0,
      wicket: { how },
      text: how === 'bowled' ? 'BOWLED HIM!' : 'LBW! That looked plumb!',
    },
    liveTime: 1.6,
    attemptedRuns: 0,
  };
}

function cloneState(b: BallState): BallState {
  return { pos: vClone(b.pos), vel: vClone(b.vel), bounced: b.bounced, live: true, rolling: b.rolling, t: b.t };
}
