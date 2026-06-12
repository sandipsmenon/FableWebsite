import * as THREE from 'three';
import { Team } from '../match/Teams';
import { PITCH, SHOT_ANGLES, ShotDirection } from '../sim/types';
import { SkinnedHuman } from './SkinnedHuman';
import { PoseAnimator } from './PoseAnimator';
import * as anim from './animations';

const SKIN_TONES = [0xe8c39e, 0xc68642, 0x8d5524, 0xf1d3b3];

interface MoveTask {
  from: THREE.Vector2;
  to: THREE.Vector2;
  duration: number;
  elapsed: number;
  onComplete?: () => void;
}

/** A player on the field: procedural skinned rig + animator + movement tasks. */
export class PlayerActor {
  readonly rig: SkinnedHuman;
  readonly animator: PoseAnimator;
  private move?: MoveTask;
  private shuttle?: { runs: number; spr: number; elapsed: number; startAtBowlerEnd: boolean };

  private constructor(rig: SkinnedHuman) {
    this.rig = rig;
    this.animator = new PoseAnimator(rig);
  }

  static batsman(scene: THREE.Scene, team: Team): PlayerActor {
    const rig = new SkinnedHuman({
      jersey: team.primaryColor,
      trim: team.secondaryColor,
      trousers: team.primaryColor,
      skin: SKIN_TONES[Math.floor(Math.random() * SKIN_TONES.length)],
      hatColor: team.secondaryColor,
      helmet: true,
    });
    rig.addBat();
    rig.addPads();
    scene.add(rig.root);
    return new PlayerActor(rig);
  }

  static fielder(scene: THREE.Scene, team: Team): PlayerActor {
    const rig = new SkinnedHuman({
      jersey: team.primaryColor,
      trim: team.secondaryColor,
      trousers: team.primaryColor,
      skin: SKIN_TONES[Math.floor(Math.random() * SKIN_TONES.length)],
      hatColor: team.secondaryColor,
    });
    scene.add(rig.root);
    return new PlayerActor(rig);
  }

  static keeper(scene: THREE.Scene, team: Team): PlayerActor {
    const a = PlayerActor.fielder(scene, team);
    return a;
  }

  static umpire(scene: THREE.Scene): PlayerActor {
    const rig = new SkinnedHuman({
      jersey: 0xf5f5f5,
      trim: 0x222428,
      trousers: 0x222428,
      skin: SKIN_TONES[Math.floor(Math.random() * SKIN_TONES.length)],
      hatColor: 0xf5f5f5,
    });
    scene.add(rig.root);
    return new PlayerActor(rig);
  }

  dispose(scene: THREE.Scene): void {
    scene.remove(this.rig.root);
  }

  setPosition(x: number, z: number): void {
    this.rig.root.position.set(x, 0, z);
  }

  faceToward(x: number, z: number): void {
    const dx = x - this.rig.root.position.x;
    const dz = z - this.rig.root.position.z;
    this.rig.root.rotation.y = Math.atan2(dx, dz);
  }

  // ---------- Animations ----------

  playIdle(): void {
    this.animator.play(anim.idleStand);
  }

  playStance(): void {
    this.animator.play(anim.battingStance);
    // Facing the bowler (+z), angled slightly toward the off side for a side-on look.
    this.rig.root.rotation.y = 0.5;
  }

  playSwing(direction: ShotDirection): void {
    // Rotate the body toward the shot, then swing through.
    const angle = SHOT_ANGLES[direction];
    this.rig.root.rotation.y = 0.2 + angle * 0.55;
    this.animator.play(anim.battingSwing);
    this.animator.onComplete = () => {
      this.animator.onComplete = undefined;
    };
  }

  playBlock(): void {
    this.animator.play(anim.defensiveBlock);
  }

  playCrouch(): void {
    this.animator.play(anim.keeperCrouch);
  }

  playCelebrate(): void {
    this.animator.play(anim.celebrate);
    window.setTimeout(() => {
      if (this.animator.currentName === 'celebrate') this.playIdle();
    }, 2400);
  }

  playUmpireSignal(kind: 'out' | 'wide' | 'four' | 'six'): void {
    const clip =
      kind === 'out' ? anim.umpireOut : kind === 'wide' ? anim.umpireWide : kind === 'four' ? anim.umpireFour : anim.umpireSix;
    this.animator.play(clip);
    this.animator.onComplete = () => {
      this.animator.onComplete = undefined;
      this.animator.play(anim.umpireIdle);
    };
  }

  playBowling(speed: number, onRelease: () => void): void {
    this.animator.play(anim.bowlingAction, speed);
    this.animator.onEvent = (e) => {
      if (e === 'release') onRelease();
    };
    this.animator.onComplete = () => {
      this.animator.onComplete = undefined;
      this.animator.onEvent = undefined;
    };
  }

  // ---------- Movement ----------

  /** Run from the mark to the crease, then hand over to the delivery action. */
  startRunUp(x: number, fromZ: number, toZ: number, speed: number, onArrive: () => void): void {
    this.setPosition(x, fromZ);
    this.faceToward(x, -10);
    const dist = Math.abs(toZ - fromZ);
    this.animator.play(anim.runCycle, 1.15);
    this.move = {
      from: new THREE.Vector2(x, fromZ),
      to: new THREE.Vector2(x, toZ),
      duration: dist / speed,
      elapsed: 0,
      onComplete: onArrive,
    };
  }

  runTo(x: number, z: number, duration: number, onArrive?: () => void): void {
    this.animator.play(anim.runCycle);
    this.faceToward(x, z);
    this.move = {
      from: new THREE.Vector2(this.rig.root.position.x, this.rig.root.position.z),
      to: new THREE.Vector2(x, z),
      duration: Math.max(0.1, duration),
      elapsed: 0,
      onComplete: () => {
        this.animator.play(anim.pickupThrow);
        this.animator.onComplete = () => {
          this.animator.onComplete = undefined;
          this.playIdle();
        };
        onArrive?.();
      },
    };
  }

  walkTo(x: number, z: number, duration: number): void {
    const dx = x - this.rig.root.position.x;
    const dz = z - this.rig.root.position.z;
    if (Math.hypot(dx, dz) < 0.3) return;
    this.animator.play(anim.runCycle, 0.55);
    this.faceToward(x, z);
    this.move = {
      from: new THREE.Vector2(this.rig.root.position.x, this.rig.root.position.z),
      to: new THREE.Vector2(x, z),
      duration: Math.max(0.1, duration),
      elapsed: 0,
      onComplete: () => this.playIdle(),
    };
  }

  /** Shuttle between the creases `runs` times. */
  runBetweenWickets(runs: number, secondsPerRun: number, startAtBowlerEnd = false): void {
    if (runs <= 0) return;
    this.shuttle = { runs, spr: secondsPerRun, elapsed: 0, startAtBowlerEnd };
    this.animator.play(anim.runCycle);
  }

  update(dt: number): void {
    this.animator.update(dt);

    if (this.move) {
      this.move.elapsed += dt;
      const f = Math.min(1, this.move.elapsed / this.move.duration);
      const x = THREE.MathUtils.lerp(this.move.from.x, this.move.to.x, f);
      const z = THREE.MathUtils.lerp(this.move.from.y, this.move.to.y, f);
      this.rig.root.position.set(x, 0, z);
      if (f >= 1) {
        const cb = this.move.onComplete;
        this.move = undefined;
        cb?.();
      }
    }

    if (this.shuttle) {
      const s = this.shuttle;
      s.elapsed += dt;
      const totalT = s.runs * s.spr;
      const t = Math.min(s.elapsed, totalT);
      const phase = t / s.spr; // which run we're on (fractional)
      const runIdx = Math.floor(phase);
      let frac = phase - runIdx;
      if (runIdx >= s.runs) frac = 1;
      // Even runs go away from the starting end.
      const fromEnd = (runIdx + (s.startAtBowlerEnd ? 1 : 0)) % 2 === 0;
      const zA = PITCH.strikerCreaseZ - 0.3;
      const zB = PITCH.bowlerCreaseZ + 0.3;
      const z = fromEnd ? THREE.MathUtils.lerp(zA, zB, frac) : THREE.MathUtils.lerp(zB, zA, frac);
      const x = this.rig.root.position.x === 0 ? 0.7 : this.rig.root.position.x;
      this.rig.root.position.set(Math.abs(x) > 1.4 ? 0.7 : x, 0, z);
      this.faceToward(this.rig.root.position.x, fromEnd ? zB : zA);
      if (s.elapsed >= totalT) {
        this.shuttle = undefined;
        this.playIdle();
      }
    }
  }
}
