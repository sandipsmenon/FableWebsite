import { Clip, deg } from './PoseAnimator';

const d = deg;

/** Relaxed standing idle. */
export const idleStand: Clip = {
  name: 'idleStand',
  duration: 2.4,
  loop: true,
  keyframes: [
    { t: 0, pose: { spine: [d(2), 0, 0], shoulderL: [0, 0, d(-4)], shoulderR: [0, 0, d(4)], elbowL: [d(-8), 0, 0], elbowR: [d(-8), 0, 0] } },
    { t: 1.2, pose: { spine: [d(4), 0, 0], shoulderL: [0, 0, d(-6)], shoulderR: [0, 0, d(6)], elbowL: [d(-10), 0, 0], elbowR: [d(-10), 0, 0], hipsY: 0.95 } },
    { t: 2.4, pose: { spine: [d(2), 0, 0], shoulderL: [0, 0, d(-4)], shoulderR: [0, 0, d(4)], elbowL: [d(-8), 0, 0], elbowR: [d(-8), 0, 0] } },
  ],
};

/** Running cycle (legs/arms pump). */
export const runCycle: Clip = {
  name: 'runCycle',
  duration: 0.55,
  loop: true,
  keyframes: [
    {
      t: 0,
      pose: {
        spine: [d(14), 0, 0],
        hipL: [d(-50), 0, 0], kneeL: [d(30), 0, 0],
        hipR: [d(35), 0, 0], kneeR: [d(70), 0, 0],
        shoulderL: [d(40), 0, 0], elbowL: [d(-70), 0, 0],
        shoulderR: [d(-50), 0, 0], elbowR: [d(-70), 0, 0],
        hipsY: 0.93,
      },
    },
    {
      t: 0.275,
      pose: {
        spine: [d(14), 0, 0],
        hipL: [d(35), 0, 0], kneeL: [d(70), 0, 0],
        hipR: [d(-50), 0, 0], kneeR: [d(30), 0, 0],
        shoulderL: [d(-50), 0, 0], elbowL: [d(-70), 0, 0],
        shoulderR: [d(40), 0, 0], elbowR: [d(-70), 0, 0],
        hipsY: 0.99,
      },
    },
    {
      t: 0.55,
      pose: {
        spine: [d(14), 0, 0],
        hipL: [d(-50), 0, 0], kneeL: [d(30), 0, 0],
        hipR: [d(35), 0, 0], kneeR: [d(70), 0, 0],
        shoulderL: [d(40), 0, 0], elbowL: [d(-70), 0, 0],
        shoulderR: [d(-50), 0, 0], elbowR: [d(-70), 0, 0],
        hipsY: 0.93,
      },
    },
  ],
};

/** Fast-bowler delivery action: gather -> leap -> arm-over. 'release' event at ball release. */
export const bowlingAction: Clip = {
  name: 'bowlingAction',
  duration: 1.25,
  keyframes: [
    // approach stride
    { t: 0, pose: { spine: [d(10), 0, 0], shoulderL: [d(20), 0, 0], shoulderR: [d(-30), 0, 0], elbowR: [d(-40), 0, 0] } },
    // gather: lean back, both arms up, front knee raised
    {
      t: 0.35,
      pose: {
        spine: [d(-18), 0, d(-6)],
        shoulderL: [d(-150), 0, d(-10)], elbowL: [d(-15), 0, 0],
        shoulderR: [d(30), 0, d(10)], elbowR: [d(-95), 0, 0],
        hipL: [d(-70), 0, 0], kneeL: [d(45), 0, 0],
        hipR: [d(10), 0, 0],
        hipsY: 1.04,
      },
    },
    // braced front leg, bowling arm windmilling behind
    {
      t: 0.62,
      pose: {
        spine: [d(-8), 0, d(-4)],
        shoulderL: [d(-90), 0, d(-20)], elbowL: [d(-20), 0, 0],
        shoulderR: [d(120), 0, d(8)], elbowR: [d(-10), 0, 0],
        hipL: [d(-35), 0, 0], kneeL: [d(8), 0, 0],
        hipR: [d(28), 0, 0], kneeR: [d(25), 0, 0],
        hipsY: 1.0,
      },
    },
    // arm vertical: release point
    {
      t: 0.82,
      event: 'release',
      pose: {
        spine: [d(18), 0, d(6)],
        shoulderL: [d(40), 0, d(-15)], elbowL: [d(-30), 0, 0],
        shoulderR: [d(-178), 0, d(6)], elbowR: [d(-5), 0, 0],
        hipL: [d(-20), 0, 0], kneeL: [d(5), 0, 0],
        hipR: [d(35), 0, 0], kneeR: [d(40), 0, 0],
        hipsY: 0.97,
      },
    },
    // follow-through: arm sweeps down across body, torso folds
    {
      t: 1.25,
      pose: {
        spine: [d(45), d(-12), d(8)],
        shoulderL: [d(35), 0, d(-25)], elbowL: [d(-25), 0, 0],
        shoulderR: [d(50), 0, d(20)], elbowR: [d(-15), 0, 0],
        hipL: [d(25), 0, 0], kneeL: [d(30), 0, 0],
        hipR: [d(-30), 0, 0], kneeR: [d(15), 0, 0],
        hipsY: 0.92,
      },
    },
  ],
};

/** Batting stance: side-on crouch, bat tapping. Batter faces bowler when root yaw = 0 (we yaw the root -90° so chest faces off side). */
export const battingStance: Clip = {
  name: 'battingStance',
  duration: 1.6,
  loop: true,
  keyframes: [
    {
      t: 0,
      pose: {
        spine: [d(24), d(18), 0],
        head: [d(-12), d(-30), 0],
        shoulderL: [d(-38), d(10), d(-22)], elbowL: [d(-55), 0, 0],
        shoulderR: [d(-30), 0, d(30)], elbowR: [d(-65), 0, 0],
        hipL: [d(-12), 0, d(-6)], kneeL: [d(16), 0, 0],
        hipR: [d(-12), 0, d(6)], kneeR: [d(16), 0, 0],
        hipsY: 0.9,
      },
    },
    {
      t: 0.8,
      pose: {
        spine: [d(26), d(18), 0],
        head: [d(-13), d(-30), 0],
        shoulderL: [d(-42), d(10), d(-22)], elbowL: [d(-58), 0, 0],
        shoulderR: [d(-34), 0, d(30)], elbowR: [d(-68), 0, 0],
        hipL: [d(-13), 0, d(-6)], kneeL: [d(18), 0, 0],
        hipR: [d(-13), 0, d(6)], kneeR: [d(18), 0, 0],
        hipsY: 0.89,
      },
    },
    {
      t: 1.6,
      pose: {
        spine: [d(24), d(18), 0],
        head: [d(-12), d(-30), 0],
        shoulderL: [d(-38), d(10), d(-22)], elbowL: [d(-55), 0, 0],
        shoulderR: [d(-30), 0, d(30)], elbowR: [d(-65), 0, 0],
        hipL: [d(-12), 0, d(-6)], kneeL: [d(16), 0, 0],
        hipR: [d(-12), 0, d(6)], kneeR: [d(16), 0, 0],
        hipsY: 0.9,
      },
    },
  ],
};

/** Full swing (drives/pulls/cuts share this; root yaw aims it). 'impact' at contact. */
export const battingSwing: Clip = {
  name: 'battingSwing',
  duration: 0.55,
  keyframes: [
    // backlift
    {
      t: 0,
      pose: {
        spine: [d(22), d(24), 0],
        head: [d(-10), d(-32), 0],
        shoulderL: [d(-60), d(15), d(-30)], elbowL: [d(-70), 0, 0],
        shoulderR: [d(-55), 0, d(45)], elbowR: [d(-80), 0, 0],
        hipL: [d(-14), 0, d(-6)], kneeL: [d(16), 0, 0],
        hipR: [d(-10), 0, d(6)], kneeR: [d(14), 0, 0],
        hipsY: 0.9,
      },
    },
    // downswing into contact: front foot strides, bat sweeps through
    {
      t: 0.22,
      event: 'impact',
      pose: {
        spine: [d(18), d(-6), 0],
        head: [d(-8), d(-10), 0],
        shoulderL: [d(-78), d(-10), d(-5)], elbowL: [d(-15), 0, 0],
        shoulderR: [d(-72), 0, d(8)], elbowR: [d(-20), 0, 0],
        hipL: [d(-38), 0, d(-4)], kneeL: [d(10), 0, 0],
        hipR: [d(14), 0, d(6)], kneeR: [d(30), 0, 0],
        hipsY: 0.88,
      },
    },
    // follow through over the shoulder
    {
      t: 0.55,
      pose: {
        spine: [d(8), d(-35), 0],
        head: [d(-5), d(10), 0],
        shoulderL: [d(-120), d(-30), d(20)], elbowL: [d(-45), 0, 0],
        shoulderR: [d(-110), 0, d(-15)], elbowR: [d(-60), 0, 0],
        hipL: [d(-30), 0, d(-4)], kneeL: [d(8), 0, 0],
        hipR: [d(20), 0, d(6)], kneeR: [d(35), 0, 0],
        hipsY: 0.92,
      },
    },
  ],
};

/** Low swing: yorker/full-ball dig-out — bat sweeps close to the ground. */
export const battingSwingLow: Clip = {
  name: 'battingSwingLow',
  duration: 0.5,
  keyframes: [
    {
      t: 0,
      pose: {
        spine: [d(26), d(22), 0],
        head: [d(-14), d(-30), 0],
        shoulderL: [d(-50), d(12), d(-26)], elbowL: [d(-60), 0, 0],
        shoulderR: [d(-45), 0, d(40)], elbowR: [d(-70), 0, 0],
        hipL: [d(-14), 0, d(-6)], kneeL: [d(16), 0, 0],
        hipR: [d(-10), 0, d(6)], kneeR: [d(14), 0, 0],
        hipsY: 0.9,
      },
    },
    {
      t: 0.2,
      event: 'impact',
      pose: {
        spine: [d(42), d(-2), 0],
        head: [d(-22), d(-8), 0],
        shoulderL: [d(-30), d(-5), d(-8)], elbowL: [d(-12), 0, 0],
        shoulderR: [d(-26), 0, d(10)], elbowR: [d(-16), 0, 0],
        hipL: [d(-48), 0, d(-4)], kneeL: [d(12), 0, 0],
        hipR: [d(16), 0, d(6)], kneeR: [d(46), 0, 0],
        hipsY: 0.8,
      },
    },
    {
      t: 0.5,
      pose: {
        spine: [d(30), d(-18), 0],
        head: [d(-15), d(5), 0],
        shoulderL: [d(-65), d(-15), d(5)], elbowL: [d(-30), 0, 0],
        shoulderR: [d(-60), 0, d(0)], elbowR: [d(-40), 0, 0],
        hipL: [d(-35), 0, d(-4)], kneeL: [d(10), 0, 0],
        hipR: [d(18), 0, d(6)], kneeR: [d(40), 0, 0],
        hipsY: 0.86,
      },
    },
  ],
};

/** High swing: pull/cut at chest height — flat horizontal bat, body pivots. */
export const battingSwingHigh: Clip = {
  name: 'battingSwingHigh',
  duration: 0.55,
  keyframes: [
    {
      t: 0,
      pose: {
        spine: [d(10), d(35), 0],
        head: [d(-6), d(-38), 0],
        shoulderL: [d(-95), d(20), d(-40)], elbowL: [d(-75), 0, 0],
        shoulderR: [d(-85), 0, d(55)], elbowR: [d(-85), 0, 0],
        hipL: [d(-10), 0, d(-8)], kneeL: [d(14), 0, 0],
        hipR: [d(-8), 0, d(8)], kneeR: [d(12), 0, 0],
        hipsY: 0.94,
      },
    },
    {
      t: 0.24,
      event: 'impact',
      pose: {
        spine: [d(4), d(-15), 0],
        head: [d(-2), d(0), 0],
        shoulderL: [d(-92), d(-18), d(0)], elbowL: [d(-10), 0, 0],
        shoulderR: [d(-88), 0, d(5)], elbowR: [d(-14), 0, 0],
        hipL: [d(-18), 0, d(-8)], kneeL: [d(12), 0, 0],
        hipR: [d(6), 0, d(8)], kneeR: [d(22), 0, 0],
        hipsY: 0.95,
      },
    },
    {
      t: 0.55,
      pose: {
        spine: [d(0), d(-55), 0],
        head: [d(0), d(20), 0],
        shoulderL: [d(-110), d(-40), d(25)], elbowL: [d(-50), 0, 0],
        shoulderR: [d(-105), 0, d(-20)], elbowR: [d(-55), 0, 0],
        hipL: [d(-22), 0, d(-8)], kneeL: [d(10), 0, 0],
        hipR: [d(10), 0, d(8)], kneeR: [d(28), 0, 0],
        hipsY: 0.97,
      },
    },
  ],
};

/** Compact defensive block. */
export const defensiveBlock: Clip = {
  name: 'defensiveBlock',
  duration: 0.45,
  keyframes: [
    {
      t: 0,
      pose: battingStance.keyframes[0].pose,
    },
    {
      t: 0.2,
      event: 'impact',
      pose: {
        spine: [d(34), d(8), 0],
        head: [d(-16), d(-14), 0],
        shoulderL: [d(-52), d(5), d(-12)], elbowL: [d(-35), 0, 0],
        shoulderR: [d(-45), 0, d(18)], elbowR: [d(-40), 0, 0],
        hipL: [d(-42), 0, d(-4)], kneeL: [d(15), 0, 0],
        hipR: [d(10), 0, d(6)], kneeR: [d(38), 0, 0],
        hipsY: 0.84,
      },
    },
    {
      t: 0.45,
      pose: battingStance.keyframes[0].pose,
    },
  ],
};

/** Wicketkeeper / close fielder crouch. */
export const keeperCrouch: Clip = {
  name: 'keeperCrouch',
  duration: 2,
  loop: true,
  keyframes: [
    {
      t: 0,
      pose: {
        spine: [d(38), 0, 0],
        head: [d(-30), 0, 0],
        shoulderL: [d(-35), 0, d(-25)], elbowL: [d(-50), 0, 0],
        shoulderR: [d(-35), 0, d(25)], elbowR: [d(-50), 0, 0],
        hipL: [d(-95), 0, d(-12)], kneeL: [d(105), 0, 0],
        hipR: [d(-95), 0, d(12)], kneeR: [d(105), 0, 0],
        hipsY: 0.55,
      },
    },
    {
      t: 1,
      pose: {
        spine: [d(36), 0, 0],
        head: [d(-28), 0, 0],
        shoulderL: [d(-33), 0, d(-24)], elbowL: [d(-48), 0, 0],
        shoulderR: [d(-33), 0, d(24)], elbowR: [d(-48), 0, 0],
        hipL: [d(-93), 0, d(-12)], kneeL: [d(103), 0, 0],
        hipR: [d(-93), 0, d(12)], kneeR: [d(103), 0, 0],
        hipsY: 0.57,
      },
    },
    {
      t: 2,
      pose: {
        spine: [d(38), 0, 0],
        head: [d(-30), 0, 0],
        shoulderL: [d(-35), 0, d(-25)], elbowL: [d(-50), 0, 0],
        shoulderR: [d(-35), 0, d(25)], elbowR: [d(-50), 0, 0],
        hipL: [d(-95), 0, d(-12)], kneeL: [d(105), 0, 0],
        hipR: [d(-95), 0, d(12)], kneeR: [d(105), 0, 0],
        hipsY: 0.55,
      },
    },
  ],
};

/** Crouch pickup then overarm throw. 'throw' event at ball release. */
export const pickupThrow: Clip = {
  name: 'pickupThrow',
  duration: 1.0,
  keyframes: [
    { t: 0, pose: { spine: [d(20), 0, 0] } },
    {
      t: 0.3,
      event: 'pickup',
      pose: {
        spine: [d(70), 0, 0],
        head: [d(-40), 0, 0],
        shoulderR: [d(-70), 0, d(10)], elbowR: [d(-20), 0, 0],
        shoulderL: [d(-20), 0, d(-10)],
        hipL: [d(-60), 0, 0], kneeL: [d(80), 0, 0],
        hipR: [d(-70), 0, 0], kneeR: [d(90), 0, 0],
        hipsY: 0.62,
      },
    },
    {
      t: 0.6,
      pose: {
        spine: [d(-15), d(20), 0],
        shoulderR: [d(140), 0, d(20)], elbowR: [d(-60), 0, 0],
        shoulderL: [d(-90), 0, d(-10)],
        hipL: [d(-25), 0, 0],
        hipsY: 1.0,
      },
    },
    {
      t: 0.78,
      event: 'throw',
      pose: {
        spine: [d(25), d(-15), 0],
        shoulderR: [d(-150), 0, d(10)], elbowR: [d(-10), 0, 0],
        shoulderL: [d(30), 0, d(-15)],
        hipL: [d(-30), 0, 0], kneeL: [d(10), 0, 0],
        hipR: [d(20), 0, 0],
        hipsY: 0.94,
      },
    },
    {
      t: 1.0,
      pose: {
        spine: [d(35), d(-20), 0],
        shoulderR: [d(40), 0, d(15)], elbowR: [d(-20), 0, 0],
        shoulderL: [d(20), 0, d(-15)],
        hipsY: 0.94,
      },
    },
  ],
};

/** Overhead catch. */
export const catchBall: Clip = {
  name: 'catchBall',
  duration: 0.7,
  keyframes: [
    { t: 0, pose: { spine: [d(5), 0, 0] } },
    {
      t: 0.35,
      event: 'catch',
      pose: {
        spine: [d(-12), 0, 0],
        head: [d(-25), 0, 0],
        shoulderL: [d(-155), 0, d(-12)], elbowL: [d(-20), 0, 0],
        shoulderR: [d(-155), 0, d(12)], elbowR: [d(-20), 0, 0],
        hipsY: 1.0,
      },
    },
    {
      t: 0.7,
      pose: {
        spine: [d(15), 0, 0],
        shoulderL: [d(-60), 0, d(-15)], elbowL: [d(-70), 0, 0],
        shoulderR: [d(-60), 0, d(15)], elbowR: [d(-70), 0, 0],
        hipsY: 0.93,
      },
    },
  ],
};

/** Arms-up celebration hop. */
export const celebrate: Clip = {
  name: 'celebrate',
  duration: 0.8,
  loop: true,
  keyframes: [
    {
      t: 0,
      pose: { shoulderL: [d(-170), 0, d(-15)], shoulderR: [d(-170), 0, d(15)], elbowL: [d(-20), 0, 0], elbowR: [d(-20), 0, 0], hipsY: 0.96 },
    },
    {
      t: 0.4,
      pose: { shoulderL: [d(-150), 0, d(-30)], shoulderR: [d(-150), 0, d(30)], elbowL: [d(-40), 0, 0], elbowR: [d(-40), 0, 0], spine: [d(-8), 0, 0], hipsY: 1.08 },
    },
    {
      t: 0.8,
      pose: { shoulderL: [d(-170), 0, d(-15)], shoulderR: [d(-170), 0, d(15)], elbowL: [d(-20), 0, 0], elbowR: [d(-20), 0, 0], hipsY: 0.96 },
    },
  ],
};

// ---------- Umpire signals ----------

export const umpireIdle: Clip = {
  name: 'umpireIdle',
  duration: 3,
  loop: true,
  keyframes: [
    { t: 0, pose: { spine: [d(4), 0, 0], shoulderL: [d(-50), 0, d(-15)], elbowL: [d(-90), 0, 0], shoulderR: [d(-50), 0, d(15)], elbowR: [d(-90), 0, 0] } },
    { t: 1.5, pose: { spine: [d(5), 0, 0], shoulderL: [d(-52), 0, d(-15)], elbowL: [d(-92), 0, 0], shoulderR: [d(-52), 0, d(15)], elbowR: [d(-92), 0, 0] } },
    { t: 3, pose: { spine: [d(4), 0, 0], shoulderL: [d(-50), 0, d(-15)], elbowL: [d(-90), 0, 0], shoulderR: [d(-50), 0, d(15)], elbowR: [d(-90), 0, 0] } },
  ],
};

export const umpireOut: Clip = {
  name: 'umpireOut',
  duration: 1.8,
  keyframes: [
    { t: 0, pose: umpireIdle.keyframes[0].pose },
    { t: 0.5, pose: { spine: [d(2), 0, 0], shoulderR: [d(-145), 0, d(5)], elbowR: [d(-10), 0, 0], shoulderL: [d(-50), 0, d(-15)], elbowL: [d(-90), 0, 0] } },
    { t: 1.4, pose: { spine: [d(2), 0, 0], shoulderR: [d(-145), 0, d(5)], elbowR: [d(-10), 0, 0], shoulderL: [d(-50), 0, d(-15)], elbowL: [d(-90), 0, 0] } },
    { t: 1.8, pose: umpireIdle.keyframes[0].pose },
  ],
};

export const umpireWide: Clip = {
  name: 'umpireWide',
  duration: 1.6,
  keyframes: [
    { t: 0, pose: umpireIdle.keyframes[0].pose },
    { t: 0.5, pose: { shoulderL: [0, 0, d(-88)], shoulderR: [0, 0, d(88)], elbowL: [0, 0, 0], elbowR: [0, 0, 0] } },
    { t: 1.2, pose: { shoulderL: [0, 0, d(-88)], shoulderR: [0, 0, d(88)], elbowL: [0, 0, 0], elbowR: [0, 0, 0] } },
    { t: 1.6, pose: umpireIdle.keyframes[0].pose },
  ],
};

export const umpireFour: Clip = {
  name: 'umpireFour',
  duration: 1.8,
  keyframes: [
    { t: 0, pose: umpireIdle.keyframes[0].pose },
    { t: 0.4, pose: { shoulderR: [d(-95), 0, d(40)], elbowR: [d(-15), 0, 0] } },
    { t: 0.7, pose: { shoulderR: [d(-95), 0, d(-30)], elbowR: [d(-15), 0, 0] } },
    { t: 1.0, pose: { shoulderR: [d(-95), 0, d(40)], elbowR: [d(-15), 0, 0] } },
    { t: 1.3, pose: { shoulderR: [d(-95), 0, d(-30)], elbowR: [d(-15), 0, 0] } },
    { t: 1.8, pose: umpireIdle.keyframes[0].pose },
  ],
};

export const umpireSix: Clip = {
  name: 'umpireSix',
  duration: 1.8,
  keyframes: [
    { t: 0, pose: umpireIdle.keyframes[0].pose },
    { t: 0.5, pose: { shoulderL: [d(-175), 0, d(-5)], shoulderR: [d(-175), 0, d(5)], elbowL: [0, 0, 0], elbowR: [0, 0, 0] } },
    { t: 1.4, pose: { shoulderL: [d(-175), 0, d(-5)], shoulderR: [d(-175), 0, d(5)], elbowL: [0, 0, 0], elbowR: [0, 0, 0] } },
    { t: 1.8, pose: umpireIdle.keyframes[0].pose },
  ],
};
