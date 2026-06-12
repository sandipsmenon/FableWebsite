import * as THREE from 'three';
import { Vec3 } from '../sim/types';

/**
 * Hawk-eye style delivery visualization: records the ball's full flight and,
 * on demand, shows it as a glowing tube that fades out.
 */
export class BallTracker {
  private points: THREE.Vector3[] = [];
  private tube?: THREE.Mesh;
  private fade = 0;

  constructor(private scene: THREE.Scene) {}

  reset(): void {
    this.points.length = 0;
    this.disposeTube();
  }

  record(x: number, y: number, z: number): void {
    const last = this.points[this.points.length - 1];
    if (last && last.distanceToSquared(new THREE.Vector3(x, y, z)) < 0.04) return;
    this.points.push(new THREE.Vector3(x, y, z));
    if (this.points.length > 220) this.points.shift();
  }

  /** Append a precomputed post-contact path (sim samples). */
  appendPath(path: { pos: Vec3 }[], maxPoints = 80): void {
    const step = Math.max(1, Math.floor(path.length / maxPoints));
    for (let i = 0; i < path.length; i += step) {
      this.record(path[i].pos.x, path[i].pos.y, path[i].pos.z);
    }
  }

  /** Show the recorded flight as a glowing tube fading over `seconds`. */
  show(seconds = 1.8): void {
    if (this.points.length < 4) return;
    this.disposeTube();
    const curve = new THREE.CatmullRomCurve3(this.points);
    const geo = new THREE.TubeGeometry(curve, Math.min(128, this.points.length * 2), 0.05, 8, false);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x35d2ff,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });
    this.tube = new THREE.Mesh(geo, mat);
    this.tube.frustumCulled = false;
    this.scene.add(this.tube);
    this.fade = seconds;
  }

  update(dt: number): void {
    if (!this.tube) return;
    this.fade -= dt;
    const mat = this.tube.material as THREE.MeshBasicMaterial;
    mat.opacity = Math.max(0, Math.min(0.85, this.fade * 0.8));
    if (this.fade <= 0) this.disposeTube();
  }

  private disposeTube(): void {
    if (this.tube) {
      this.scene.remove(this.tube);
      this.tube.geometry.dispose();
      this.tube = undefined;
    }
  }
}
