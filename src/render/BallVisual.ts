import * as THREE from 'three';

const TRAIL_LEN = 24;

/**
 * Broadcast-visible cricket ball: oversized red ball + glow sprite + ribbon
 * comet trail + soft blob shadow on the grass.
 */
export class BallVisual {
  readonly mesh: THREE.Group;
  private trail: THREE.Mesh;
  private trailPts: THREE.Vector3[] = [];
  private glow: THREE.Sprite;
  private blob: THREE.Mesh;
  private camera?: THREE.Camera;

  constructor(scene: THREE.Scene) {
    this.mesh = new THREE.Group();
    const ball = new THREE.Mesh(
      new THREE.SphereGeometry(0.082, 18, 14),
      new THREE.MeshStandardMaterial({ color: 0xc41f1f, roughness: 0.4, emissive: 0x550000, emissiveIntensity: 0.5 }),
    );
    ball.castShadow = true;
    this.mesh.add(ball);
    const seam = new THREE.Mesh(
      new THREE.TorusGeometry(0.082, 0.007, 6, 24),
      new THREE.MeshStandardMaterial({ color: 0xf0e6d2, roughness: 0.6 }),
    );
    this.mesh.add(seam);

    // Glow sprite (feeds bloom)
    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = glowCanvas.height = 64;
    const g = glowCanvas.getContext('2d')!;
    const grad = g.createRadialGradient(32, 32, 2, 32, 32, 30);
    grad.addColorStop(0, 'rgba(255,120,90,0.85)');
    grad.addColorStop(0.4, 'rgba(255,60,40,0.32)');
    grad.addColorStop(1, 'rgba(255,40,30,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
    const glowTex = new THREE.CanvasTexture(glowCanvas);
    this.glow = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: glowTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }),
    );
    this.glow.scale.setScalar(0.55);
    this.mesh.add(this.glow);
    scene.add(this.mesh);

    // Comet trail ribbon (camera-facing strip, additive, fades along its length)
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(TRAIL_LEN * 2 * 3), 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(new Float32Array(TRAIL_LEN * 2 * 3), 3));
    const idx: number[] = [];
    for (let i = 0; i < TRAIL_LEN - 1; i++) {
      const a = i * 2;
      idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
    geo.setIndex(idx);
    this.trail = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    );
    this.trail.frustumCulled = false;
    scene.add(this.trail);

    // Blob shadow
    this.blob = new THREE.Mesh(
      new THREE.CircleGeometry(0.2, 16),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.35, depthWrite: false }),
    );
    this.blob.rotation.x = -Math.PI / 2;
    scene.add(this.blob);
  }

  /** The trail ribbon faces this camera. */
  attachCamera(cam: THREE.Camera): void {
    this.camera = cam;
  }

  setPosition(x: number, y: number, z: number, addTrail = true): void {
    this.mesh.position.set(x, y, z);
    this.mesh.rotation.x += 0.35;
    this.glow.rotation.z += 0.1;

    this.blob.position.set(x, 0.015, z);
    const op = THREE.MathUtils.clamp(0.42 - y * 0.045, 0.06, 0.42);
    (this.blob.material as THREE.MeshBasicMaterial).opacity = op;
    const s = 1 + y * 0.12;
    this.blob.scale.set(s, s, 1);

    if (!addTrail) return;
    this.trailPts.push(new THREE.Vector3(x, y, z));
    if (this.trailPts.length > TRAIL_LEN) this.trailPts.shift();
    this.rebuildTrail();
  }

  private rebuildTrail(): void {
    const pos = this.trail.geometry.getAttribute('position') as THREE.BufferAttribute;
    const col = this.trail.geometry.getAttribute('color') as THREE.BufferAttribute;
    const n = this.trailPts.length;
    const camPos = this.camera ? (this.camera as THREE.PerspectiveCamera).position : new THREE.Vector3(0, 10, 40);
    const side = new THREE.Vector3();
    const dir = new THREE.Vector3();
    const toCam = new THREE.Vector3();
    for (let i = 0; i < TRAIL_LEN; i++) {
      const p = this.trailPts[Math.min(i, Math.max(0, n - 1))];
      if (!p) {
        pos.setXYZ(i * 2, 0, -10, 0);
        pos.setXYZ(i * 2 + 1, 0, -10, 0);
        continue;
      }
      const prev = this.trailPts[Math.max(0, Math.min(i - 1, n - 1))];
      dir.copy(p).sub(prev);
      if (dir.lengthSq() < 1e-8) dir.set(0, 0, -1);
      toCam.copy(camPos).sub(p);
      side.copy(dir).cross(toCam).normalize();
      const age = (TRAIL_LEN - 1 - i) / (TRAIL_LEN - 1); // 1 = oldest
      const halfW = 0.085 * (1 - age * 0.85);
      pos.setXYZ(i * 2, p.x - side.x * halfW, p.y - side.y * halfW, p.z - side.z * halfW);
      pos.setXYZ(i * 2 + 1, p.x + side.x * halfW, p.y + side.y * halfW, p.z + side.z * halfW);
      // White-hot head -> deep red tail (additive: dark = transparent)
      const f = 1 - age;
      const r = 0.9 * f + 0.15;
      col.setXYZ(i * 2, r * f, 0.45 * f * f, 0.3 * f * f);
      col.setXYZ(i * 2 + 1, r * f, 0.45 * f * f, 0.3 * f * f);
    }
    pos.needsUpdate = true;
    col.needsUpdate = true;
    this.trail.geometry.setDrawRange(0, Math.max(0, (n - 1) * 6));
  }

  clearTrail(): void {
    this.trailPts.length = 0;
    this.trail.geometry.setDrawRange(0, 0);
  }

  set visible(v: boolean) {
    this.mesh.visible = v;
    this.trail.visible = v;
    this.blob.visible = v;
  }
}
