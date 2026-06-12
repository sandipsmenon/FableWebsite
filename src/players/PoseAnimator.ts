import { AnimRig, JointName } from './SkinnedHuman';

/** Joint rotations in radians (x, y, z Euler) plus optional hip height offset. */
export type Pose = Partial<Record<JointName, [number, number, number]>> & {
  hipsY?: number;
};

export interface Keyframe {
  t: number;
  pose: Pose;
  /** Event name fired when playback crosses this keyframe. */
  event?: string;
}

export interface Clip {
  name: string;
  duration: number;
  keyframes: Keyframe[];
  loop?: boolean;
}

const DEFAULT_HIPS_Y = 0.96;

/** Plays keyframed poses on a HumanoidRig with linear interpolation + smoothing. */
export class PoseAnimator {
  private clip?: Clip;
  private time = 0;
  private speed = 1;
  private firedEvents = new Set<number>();
  onEvent?: (name: string) => void;
  onComplete?: () => void;

  constructor(private rig: AnimRig) {}

  play(clip: Clip, speed = 1): void {
    this.clip = clip;
    this.time = 0;
    this.speed = speed;
    this.firedEvents.clear();
  }

  get playing(): boolean {
    return this.clip !== undefined;
  }

  get currentName(): string | undefined {
    return this.clip?.name;
  }

  stop(): void {
    this.clip = undefined;
  }

  update(dt: number): void {
    if (!this.clip) return;
    this.time += dt * this.speed;
    const c = this.clip;

    // Fire crossed events
    c.keyframes.forEach((kf, i) => {
      if (kf.event && !this.firedEvents.has(i) && this.time >= kf.t) {
        this.firedEvents.add(i);
        this.onEvent?.(kf.event);
      }
    });

    let t = this.time;
    if (t >= c.duration) {
      if (c.loop) {
        t = t % c.duration;
        if (this.time >= c.duration) {
          this.time = t;
          this.firedEvents.clear();
        }
      } else {
        this.applyPose(c.keyframes[c.keyframes.length - 1].pose);
        this.clip = undefined;
        this.onComplete?.();
        return;
      }
    }

    // Find bracketing keyframes
    let a = c.keyframes[0];
    let b = c.keyframes[c.keyframes.length - 1];
    for (let i = 0; i < c.keyframes.length - 1; i++) {
      if (t >= c.keyframes[i].t && t <= c.keyframes[i + 1].t) {
        a = c.keyframes[i];
        b = c.keyframes[i + 1];
        break;
      }
    }
    const span = Math.max(1e-6, b.t - a.t);
    const f = smooth((t - a.t) / span);
    this.applyLerped(a.pose, b.pose, f);
  }

  private applyLerped(pa: Pose, pb: Pose, f: number): void {
    const joints = Object.keys(this.rig.joints) as JointName[];
    for (const j of joints) {
      const ra = pa[j] ?? [0, 0, 0];
      const rb = pb[j] ?? [0, 0, 0];
      const g = this.rig.joints[j];
      g.rotation.set(lerp(ra[0], rb[0], f), lerp(ra[1], rb[1], f), lerp(ra[2], rb[2], f));
    }
    const ya = pa.hipsY ?? DEFAULT_HIPS_Y;
    const yb = pb.hipsY ?? DEFAULT_HIPS_Y;
    this.rig.joints.hips.position.y = lerp(ya, yb, f);
  }

  applyPose(p: Pose): void {
    this.applyLerped(p, p, 0);
  }
}

function lerp(a: number, b: number, f: number): number {
  return a + (b - a) * f;
}

function smooth(f: number): number {
  return f * f * (3 - 2 * f);
}

export const deg = (d: number): number => (d * Math.PI) / 180;
