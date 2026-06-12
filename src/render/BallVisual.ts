import * as THREE from 'three';

/** Red cricket ball with seam and a fading motion trail. */
export class BallVisual {
  readonly mesh: THREE.Group;
  private trail: THREE.Line;
  private trailPts: THREE.Vector3[] = [];
  private maxTrail = 36;

  constructor(scene: THREE.Scene) {
    this.mesh = new THREE.Group();
    const ball = new THREE.Mesh(
      new THREE.SphereGeometry(0.036, 16, 12),
      new THREE.MeshStandardMaterial({ color: 0xb31b1b, roughness: 0.45 }),
    );
    ball.castShadow = true;
    this.mesh.add(ball);
    const seam = new THREE.Mesh(
      new THREE.TorusGeometry(0.036, 0.004, 6, 24),
      new THREE.MeshStandardMaterial({ color: 0xf0e6d2, roughness: 0.6 }),
    );
    this.mesh.add(seam);
    scene.add(this.mesh);

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(this.maxTrail * 3), 3));
    this.trail = new THREE.Line(
      geo,
      new THREE.LineBasicMaterial({ color: 0xff6655, transparent: true, opacity: 0.55 }),
    );
    this.trail.frustumCulled = false;
    scene.add(this.trail);
  }

  setPosition(x: number, y: number, z: number, addTrail = true): void {
    this.mesh.position.set(x, y, z);
    this.mesh.rotation.x += 0.4;
    if (addTrail) {
      this.trailPts.push(new THREE.Vector3(x, y, z));
      if (this.trailPts.length > this.maxTrail) this.trailPts.shift();
      const attr = this.trail.geometry.getAttribute('position') as THREE.BufferAttribute;
      for (let i = 0; i < this.maxTrail; i++) {
        const p = this.trailPts[Math.min(i, this.trailPts.length - 1)] ?? new THREE.Vector3();
        attr.setXYZ(i, p.x, p.y, p.z);
      }
      attr.needsUpdate = true;
      this.trail.geometry.setDrawRange(0, this.trailPts.length);
    }
  }

  clearTrail(): void {
    this.trailPts.length = 0;
    this.trail.geometry.setDrawRange(0, 0);
  }

  set visible(v: boolean) {
    this.mesh.visible = v;
    this.trail.visible = v;
  }
}
