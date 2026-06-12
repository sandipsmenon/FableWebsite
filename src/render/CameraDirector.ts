import * as THREE from 'three';
import { PITCH } from '../sim/types';

export type CameraMode = 'broadcast' | 'ballFollow' | 'bowlingAim' | 'boundary' | 'wicket' | 'orbit' | 'stumpCam';

/** Broadcast-style camera shots with smooth blends, cut delays and push-ins. */
export class CameraDirector {
  mode: CameraMode = 'broadcast';
  private targetPos = new THREE.Vector3();
  private targetLook = new THREE.Vector3();
  private look = new THREE.Vector3(0, 1, 10);
  private orbitAngle = 0;
  private pending?: { mode: CameraMode; in: number };
  /** 0..1: delivery tension drives the broadcast push-in + fov tightening. */
  private tension = 0;
  private tensionTarget = 0;
  private fov = 45;
  private targetFov = 45;
  private boundaryPos = new THREE.Vector3();
  /** What the ballFollow/boundary modes track (world position). */
  followTarget = new THREE.Vector3();

  constructor(private camera: THREE.PerspectiveCamera) {
    this.camera.position.set(0, 16, PITCH.bowlerStumpsZ + 34);
    this.snap('broadcast');
  }

  /** Switch shots, optionally after a delay (lets the stroke read before cutting away). */
  setMode(mode: CameraMode, delaySec = 0): void {
    if (delaySec > 0) {
      this.pending = { mode, in: delaySec };
      return;
    }
    this.pending = undefined;
    this.applyMode(mode);
  }

  private applyMode(mode: CameraMode): void {
    if (mode === 'boundary') {
      // Park on the rope along the hit direction, looking back at the action.
      const center = new THREE.Vector3(0, 0, PITCH.length / 2);
      const dir = new THREE.Vector3().copy(this.followTarget).sub(center);
      dir.y = 0;
      if (dir.lengthSq() < 1) dir.set(0, 0, -1);
      dir.normalize();
      this.boundaryPos.copy(center).addScaledVector(dir, PITCH.boundaryRadius + 6).setY(2.2);
    }
    this.mode = mode;
  }

  /** Delivery tension: 1 during run-up/flight (push-in), 0 otherwise. */
  setTension(t: number): void {
    this.tensionTarget = t;
  }

  /** Jump immediately to the mode's position (no blend). */
  snap(mode: CameraMode): void {
    this.applyMode(mode);
    this.computeTargets(0);
    this.camera.position.copy(this.targetPos);
    this.look.copy(this.targetLook);
    this.camera.lookAt(this.look);
  }

  private computeTargets(time: number): void {
    switch (this.mode) {
      case 'broadcast': {
        // High behind the bowler's arm; tension pushes in and drops slightly.
        const t = this.tension;
        this.targetPos.set(1.5, 13 - t * 2.2, PITCH.bowlerStumpsZ + 30 - t * 5);
        this.targetLook.set(0, 0.8, 2);
        this.targetFov = 45 - t * 6;
        break;
      }
      case 'stumpCam':
        // Ultra-low behind the striker's stumps facing the bowler.
        this.targetPos.set(0.25, 0.32, -1.4);
        this.targetLook.set(0, 1.6, 16);
        this.targetFov = 55;
        break;
      case 'bowlingAim':
        this.targetPos.set(-1.2, 4.5, -16);
        this.targetLook.set(0, 1.2, 14);
        this.targetFov = 45;
        break;
      case 'ballFollow': {
        const t = this.followTarget;
        const dir = new THREE.Vector3(t.x, 0, t.z - PITCH.length / 2);
        const len = Math.max(1, dir.length());
        dir.normalize();
        const dist = 14 + len * 0.12;
        this.targetPos.set(t.x - dir.x * dist, Math.max(3.4, t.y + 4.5), t.z - dir.z * dist);
        this.targetLook.copy(t);
        this.targetFov = 45;
        break;
      }
      case 'boundary':
        this.targetPos.copy(this.boundaryPos);
        this.targetLook.copy(this.followTarget).setY(Math.max(0.5, this.followTarget.y));
        this.targetFov = 40;
        break;
      case 'wicket':
        this.targetPos.set(3.2, 1.2, 6.5);
        this.targetLook.set(0, 0.6, 0.4);
        this.targetFov = 38;
        break;
      case 'orbit':
        this.orbitAngle += 0.002;
        this.targetPos.set(Math.sin(this.orbitAngle) * 90, 26, PITCH.length / 2 + Math.cos(this.orbitAngle) * 90);
        this.targetLook.set(0, 2, PITCH.length / 2);
        this.targetFov = 45;
        break;
    }
  }

  update(dt: number, time: number): void {
    if (this.pending) {
      this.pending.in -= dt;
      if (this.pending.in <= 0) {
        this.applyMode(this.pending.mode);
        this.pending = undefined;
      }
    }
    this.tension += (this.tensionTarget - this.tension) * Math.min(1, 1.6 * dt);
    this.computeTargets(time);

    // Split smoothing: position settles slowly, look tracks fast (keeps ball framed).
    const posK = this.mode === 'ballFollow' ? 3.2 : this.mode === 'boundary' ? 50 : 2.8;
    const lookK = this.mode === 'ballFollow' || this.mode === 'boundary' ? 9 : 4;
    this.camera.position.lerp(this.targetPos, 1 - Math.exp(-posK * dt));
    this.look.lerp(this.targetLook, 1 - Math.exp(-lookK * dt));
    this.camera.lookAt(this.look);

    this.fov += (this.targetFov - this.fov) * Math.min(1, 3 * dt);
    if (Math.abs(this.fov - this.camera.fov) > 0.05) {
      this.camera.fov = this.fov;
      this.camera.updateProjectionMatrix();
    }
  }
}
