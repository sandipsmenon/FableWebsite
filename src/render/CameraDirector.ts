import * as THREE from 'three';
import { PITCH } from '../sim/types';

export type CameraMode = 'broadcast' | 'ballFollow' | 'bowlingAim' | 'crane' | 'wicket' | 'orbit';

/** Broadcast-style camera shots with smooth blends. */
export class CameraDirector {
  mode: CameraMode = 'broadcast';
  private targetPos = new THREE.Vector3();
  private targetLook = new THREE.Vector3();
  private look = new THREE.Vector3(0, 1, 10);
  private orbitAngle = 0;
  /** What the ballFollow mode tracks (world position). */
  followTarget = new THREE.Vector3();

  constructor(private camera: THREE.PerspectiveCamera) {
    this.camera.position.set(0, 16, PITCH.bowlerStumpsZ + 34);
    this.snap('broadcast');
  }

  setMode(mode: CameraMode): void {
    this.mode = mode;
  }

  /** Jump immediately to the mode's position (no blend). */
  snap(mode: CameraMode): void {
    this.mode = mode;
    this.computeTargets(0);
    this.camera.position.copy(this.targetPos);
    this.look.copy(this.targetLook);
    this.camera.lookAt(this.look);
  }

  private computeTargets(time: number): void {
    switch (this.mode) {
      case 'broadcast':
        // High behind the bowler's arm, looking down the pitch.
        this.targetPos.set(1.5, 13, PITCH.bowlerStumpsZ + 30);
        this.targetLook.set(0, 0.8, 2);
        break;
      case 'bowlingAim':
        // Behind the batter/keeper looking back at the bowler.
        this.targetPos.set(-1.2, 4.5, -16);
        this.targetLook.set(0, 1.2, 14);
        break;
      case 'ballFollow': {
        const t = this.followTarget;
        // Chase from behind relative to ground center, raised.
        const dir = new THREE.Vector3(t.x, 0, t.z - PITCH.length / 2);
        const len = Math.max(1, dir.length());
        dir.normalize();
        const dist = 14 + len * 0.12;
        this.targetPos.set(t.x - dir.x * dist, Math.max(3.2, t.y + 4), t.z - dir.z * dist);
        this.targetLook.copy(t);
        break;
      }
      case 'crane':
        // Wide crane shot revealing the stadium bowl.
        this.targetPos.set(Math.sin(time * 0.08) * 55, 38, PITCH.length / 2 - Math.cos(time * 0.08) * 70);
        this.targetLook.set(0, 2, PITCH.length / 2);
        break;
      case 'wicket':
        // Close-up on the striker's stumps.
        this.targetPos.set(3.2, 1.4, 6.5);
        this.targetLook.set(0, 0.6, 0.4);
        break;
      case 'orbit':
        this.orbitAngle += 0.002;
        this.targetPos.set(Math.sin(this.orbitAngle) * 90, 26, PITCH.length / 2 + Math.cos(this.orbitAngle) * 90);
        this.targetLook.set(0, 2, PITCH.length / 2);
        break;
    }
  }

  update(dt: number, time: number): void {
    this.computeTargets(time);
    const k = this.mode === 'ballFollow' ? 5.5 : 2.8;
    const f = 1 - Math.exp(-k * dt);
    this.camera.position.lerp(this.targetPos, f);
    this.look.lerp(this.targetLook, f);
    this.camera.lookAt(this.look);
  }
}
