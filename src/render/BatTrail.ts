import * as THREE from 'three';

const MAX_SAMPLES = 16;
const SAMPLE_LIFE = 0.22; // seconds a sample stays visible

/**
 * White swoosh ribbon behind the bat blade during a swing. Additive blending
 * with vertex colors fading to black = natural fade-out.
 */
export class BatTrail {
  readonly mesh: THREE.Mesh;
  private samples: { tip: THREE.Vector3; base: THREE.Vector3; age: number }[] = [];
  private activeFor = 0;

  constructor() {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(MAX_SAMPLES * 2 * 3), 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(new Float32Array(MAX_SAMPLES * 2 * 3), 3));
    const indices: number[] = [];
    for (let i = 0; i < MAX_SAMPLES - 1; i++) {
      const a = i * 2;
      indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
    geo.setIndex(indices);
    this.mesh = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    );
    this.mesh.frustumCulled = false;
    this.mesh.visible = false;
  }

  /** Begin sampling for `seconds`. */
  trigger(seconds = 0.5): void {
    this.activeFor = seconds;
    this.samples.length = 0;
    this.mesh.visible = true;
  }

  update(dt: number, batTipWorld: THREE.Vector3, batBaseWorld: THREE.Vector3): void {
    if (!this.mesh.visible) return;
    for (const s of this.samples) s.age += dt;
    this.samples = this.samples.filter((s) => s.age < SAMPLE_LIFE);

    if (this.activeFor > 0) {
      this.activeFor -= dt;
      this.samples.push({ tip: batTipWorld.clone(), base: batBaseWorld.clone(), age: 0 });
      if (this.samples.length > MAX_SAMPLES) this.samples.shift();
    } else if (this.samples.length === 0) {
      this.mesh.visible = false;
      return;
    }

    const pos = this.mesh.geometry.getAttribute('position') as THREE.BufferAttribute;
    const col = this.mesh.geometry.getAttribute('color') as THREE.BufferAttribute;
    for (let i = 0; i < MAX_SAMPLES; i++) {
      const s = this.samples[Math.min(i, Math.max(0, this.samples.length - 1))];
      if (!s) {
        pos.setXYZ(i * 2, 0, -10, 0);
        pos.setXYZ(i * 2 + 1, 0, -10, 0);
        continue;
      }
      pos.setXYZ(i * 2, s.base.x, s.base.y, s.base.z);
      pos.setXYZ(i * 2 + 1, s.tip.x, s.tip.y, s.tip.z);
      const fade = Math.max(0, 1 - s.age / SAMPLE_LIFE) * 0.55;
      col.setXYZ(i * 2, fade * 0.7, fade * 0.7, fade * 0.6);
      col.setXYZ(i * 2 + 1, fade, fade, fade * 0.9);
    }
    pos.needsUpdate = true;
    col.needsUpdate = true;
    this.mesh.geometry.setDrawRange(0, Math.max(0, (this.samples.length - 1) * 6));
  }
}
