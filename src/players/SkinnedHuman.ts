import * as THREE from 'three';
import { kitTexture } from '../render/ProceduralTextures';

export type JointName =
  | 'hips'
  | 'spine'
  | 'neck'
  | 'head'
  | 'shoulderL'
  | 'elbowL'
  | 'shoulderR'
  | 'elbowR'
  | 'hipL'
  | 'kneeL'
  | 'hipR'
  | 'kneeR';

/** Minimal rig surface the animator needs (bones are Object3Ds). */
export interface AnimRig {
  joints: Record<JointName, THREE.Object3D>;
}

export interface HumanOptions {
  jersey: number;
  trim: number;
  trousers: number;
  skin: number;
  helmet?: boolean;
  hatColor?: number;
}

// Bone order must match skinIndex values used by the geometry builder.
const B = {
  hips: 0,
  spine: 1,
  neck: 2,
  head: 3,
  shoulderL: 4,
  elbowL: 5,
  handL: 6,
  shoulderR: 7,
  elbowR: 8,
  handR: 9,
  hipL: 10,
  kneeL: 11,
  ankleL: 12,
  hipR: 13,
  kneeR: 14,
  ankleR: 15,
} as const;

// UV v-band base per region (each band is 0.25 tall in the kit atlas).
const REGION_V: Record<string, number> = { jersey: 0, trousers: 0.25, skin: 0.5, shoes: 0.75 };

interface Ring {
  /** Ring center in bind-pose body space. */
  c: [number, number, number];
  /** Ellipse radii. Axis 'y' tubes: rx along x, rz along z. Axis 'z' tubes: rx along x, rz along y. */
  rx: number;
  rz: number;
  bones: [number, number];
  w: number; // weight of second bone
  region: keyof typeof REGION_V;
  v: number; // 0..1 within the region band
}

/**
 * A procedurally generated skinned human: one continuous mesh deforming over a
 * real bone skeleton, so elbows/knees/spine bend smoothly. Geometry is shared
 * across all instances; each player gets its own skeleton + kit material.
 */
export class SkinnedHuman {
  readonly root = new THREE.Group();
  readonly joints: Record<JointName, THREE.Object3D>;
  readonly rightHand: THREE.Object3D;
  readonly leftHand: THREE.Object3D;
  readonly mesh: THREE.SkinnedMesh;
  bat?: THREE.Group;

  private static sharedGeo?: THREE.BufferGeometry;

  constructor(opts: HumanOptions) {
    const bones = SkinnedHuman.buildSkeleton();
    const material = new THREE.MeshStandardMaterial({
      map: kitTexture({ jersey: opts.jersey, trim: opts.trim, trousers: opts.trousers, skin: opts.skin }),
      roughness: 0.82,
      metalness: 0.0,
    });
    this.mesh = new THREE.SkinnedMesh(SkinnedHuman.geometry(), material);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = false;
    this.mesh.add(bones[B.hips]);
    this.root.add(this.mesh);
    this.mesh.updateMatrixWorld(true);
    this.mesh.bind(new THREE.Skeleton(bones));

    this.joints = {
      hips: bones[B.hips],
      spine: bones[B.spine],
      neck: bones[B.neck],
      head: bones[B.head],
      shoulderL: bones[B.shoulderL],
      elbowL: bones[B.elbowL],
      shoulderR: bones[B.shoulderR],
      elbowR: bones[B.elbowR],
      hipL: bones[B.hipL],
      kneeL: bones[B.kneeL],
      hipR: bones[B.hipR],
      kneeR: bones[B.kneeR],
    };
    this.rightHand = bones[B.handR];
    this.leftHand = bones[B.handL];

    this.addHeadgear(opts);
  }

  // ---------- Skeleton ----------

  private static buildSkeleton(): THREE.Bone[] {
    const bones: THREE.Bone[] = [];
    const mk = (idx: number, parent: THREE.Bone | null, x: number, y: number, z: number): THREE.Bone => {
      const b = new THREE.Bone();
      b.position.set(x, y, z);
      if (parent) parent.add(b);
      bones[idx] = b;
      return b;
    };
    const hips = mk(B.hips, null, 0, 0.96, 0);
    const spine = mk(B.spine, hips, 0, 0.1, 0);
    const neck = mk(B.neck, spine, 0, 0.52, 0);
    mk(B.head, neck, 0, 0.1, 0);
    const shL = mk(B.shoulderL, spine, -0.21, 0.46, 0);
    const elL = mk(B.elbowL, shL, 0, -0.3, 0);
    mk(B.handL, elL, 0, -0.27, 0);
    const shR = mk(B.shoulderR, spine, 0.21, 0.46, 0);
    const elR = mk(B.elbowR, shR, 0, -0.3, 0);
    mk(B.handR, elR, 0, -0.27, 0);
    const hipL = mk(B.hipL, hips, -0.1, -0.05, 0);
    const knL = mk(B.kneeL, hipL, 0, -0.44, 0);
    mk(B.ankleL, knL, 0, -0.42, 0);
    const hipR = mk(B.hipR, hips, 0.1, -0.05, 0);
    const knR = mk(B.kneeR, hipR, 0, -0.44, 0);
    mk(B.ankleR, knR, 0, -0.42, 0);
    return bones;
  }

  // ---------- Geometry (shared) ----------

  static geometry(): THREE.BufferGeometry {
    if (this.sharedGeo) return this.sharedGeo;

    const positions: number[] = [];
    const uvs: number[] = [];
    const skinIndices: number[] = [];
    const skinWeights: number[] = [];
    const indices: number[] = [];

    const pushVert = (x: number, y: number, z: number, ring: Ring, u: number): number => {
      positions.push(x, y, z);
      const vBase = REGION_V[ring.region];
      uvs.push(u, vBase + 0.02 + ring.v * 0.21);
      skinIndices.push(ring.bones[0], ring.bones[1], 0, 0);
      skinWeights.push(1 - ring.w, ring.w, 0, 0);
      return positions.length / 3 - 1;
    };

    /** Stack rings into a tube. axis 'y': rings in the XZ plane; axis 'z': rings in XY plane (feet). */
    const addTube = (rings: Ring[], segs: number, axis: 'y' | 'z' = 'y', capStart = false, capEnd = false): void => {
      const ringStarts: number[] = [];
      for (const ring of rings) {
        const start = positions.length / 3;
        ringStarts.push(start);
        for (let i = 0; i < segs; i++) {
          const th = (i / segs) * Math.PI * 2;
          const u = i / segs;
          if (axis === 'y') {
            pushVert(ring.c[0] + Math.cos(th) * ring.rx, ring.c[1], ring.c[2] + Math.sin(th) * ring.rz, ring, u);
          } else {
            pushVert(ring.c[0] + Math.cos(th) * ring.rx, ring.c[1] + Math.sin(th) * ring.rz, ring.c[2], ring, u);
          }
        }
      }
      for (let r = 0; r < rings.length - 1; r++) {
        const a0 = ringStarts[r];
        const b0 = ringStarts[r + 1];
        for (let i = 0; i < segs; i++) {
          const i2 = (i + 1) % segs;
          indices.push(a0 + i, b0 + i, b0 + i2, a0 + i, b0 + i2, a0 + i2);
        }
      }
      if (capStart) {
        const ring = rings[0];
        const ci = pushVert(ring.c[0], ring.c[1], ring.c[2], ring, 0.5);
        const s0 = ringStarts[0];
        for (let i = 0; i < segs; i++) indices.push(ci, s0 + i, s0 + ((i + 1) % segs));
      }
      if (capEnd) {
        const ring = rings[rings.length - 1];
        const ci = pushVert(ring.c[0], ring.c[1], ring.c[2], ring, 0.5);
        const s0 = ringStarts[ringStarts.length - 1];
        for (let i = 0; i < segs; i++) indices.push(ci, s0 + ((i + 1) % segs), s0 + i);
      }
    };

    const R = (
      c: [number, number, number],
      rx: number,
      rz: number,
      bones: [number, number],
      w: number,
      region: keyof typeof REGION_V,
      v: number,
    ): Ring => ({ c, rx, rz, bones, w, region, v });

    // ----- Torso + neck (16 segments) -----
    addTube(
      [
        R([0, 0.82, 0], 0.15, 0.105, [B.hips, B.hips], 0, 'trousers', 0.95),
        R([0, 0.88, 0], 0.165, 0.115, [B.hips, B.hips], 0, 'trousers', 0.98),
        R([0, 0.98, 0], 0.15, 0.108, [B.hips, B.spine], 0.35, 'jersey', 0.05),
        R([0, 1.1, 0], 0.136, 0.1, [B.hips, B.spine], 0.85, 'jersey', 0.2),
        R([0, 1.22, 0], 0.15, 0.108, [B.spine, B.spine], 0, 'jersey', 0.38),
        R([0, 1.32, 0], 0.165, 0.115, [B.spine, B.spine], 0, 'jersey', 0.55),
        R([0, 1.42, 0], 0.182, 0.115, [B.spine, B.spine], 0, 'jersey', 0.7),
        R([0, 1.5, 0], 0.196, 0.11, [B.spine, B.neck], 0.2, 'jersey', 0.85),
        R([0, 1.56, 0], 0.115, 0.088, [B.spine, B.neck], 0.55, 'jersey', 0.96),
        R([0, 1.6, 0], 0.062, 0.06, [B.neck, B.neck], 0, 'skin', 0.7),
        R([0, 1.66, 0], 0.054, 0.054, [B.neck, B.head], 0.6, 'skin', 0.75),
      ],
      16,
      'y',
      true,
      false,
    );

    // ----- Head (lathe-ish profile, all on head bone) -----
    addTube(
      [
        R([0, 1.66, 0], 0.054, 0.054, [B.neck, B.head], 0.6, 'skin', 0.75),
        R([0, 1.7, 0], 0.082, 0.085, [B.head, B.head], 0, 'skin', 0.55),
        R([0, 1.745, 0], 0.094, 0.098, [B.head, B.head], 0, 'skin', 0.45),
        R([0, 1.79, 0], 0.092, 0.094, [B.head, B.head], 0, 'skin', 0.4),
        R([0, 1.83, 0], 0.072, 0.075, [B.head, B.head], 0, 'skin', 0.35),
        R([0, 1.862, 0], 0.035, 0.038, [B.head, B.head], 0, 'skin', 0.3),
      ],
      12,
      'y',
      false,
      true,
    );

    // ----- Arms (10 segments each) -----
    for (const s of [-1, 1] as const) {
      const sh = s < 0 ? B.shoulderL : B.shoulderR;
      const el = s < 0 ? B.elbowL : B.elbowR;
      const hd = s < 0 ? B.handL : B.handR;
      const cx = s * 0.235;
      addTube(
        [
          R([cx, 1.55, 0], 0.067, 0.067, [sh, sh], 0, 'jersey', 0.85),
          R([cx, 1.48, 0], 0.061, 0.061, [sh, sh], 0, 'jersey', 0.78),
          R([cx, 1.4, 0], 0.054, 0.054, [sh, sh], 0, 'jersey', 0.72),
          R([cx, 1.36, 0], 0.05, 0.05, [sh, sh], 0, 'skin', 0.6),
          R([cx, 1.29, 0], 0.046, 0.046, [sh, el], 0.2, 'skin', 0.55),
          R([cx, 1.22, 0], 0.042, 0.042, [sh, el], 0.55, 'skin', 0.5),
          R([cx, 1.15, 0], 0.045, 0.045, [el, el], 0, 'skin', 0.45),
          R([cx, 1.05, 0], 0.041, 0.041, [el, el], 0, 'skin', 0.4),
          R([cx, 0.97, 0], 0.032, 0.032, [el, hd], 0.45, 'skin', 0.35),
          R([cx, 0.9, 0], 0.037, 0.034, [hd, hd], 0, 'skin', 0.3),
          R([cx, 0.835, 0], 0.024, 0.022, [hd, hd], 0, 'skin', 0.28),
        ],
        10,
        'y',
        true,
        true,
      );
    }

    // ----- Legs (10 segments each) + feet -----
    for (const s of [-1, 1] as const) {
      const hp = s < 0 ? B.hipL : B.hipR;
      const kn = s < 0 ? B.kneeL : B.kneeR;
      const an = s < 0 ? B.ankleL : B.ankleR;
      const cx = s * 0.1;
      addTube(
        [
          R([cx, 0.92, 0], 0.089, 0.095, [B.hips, hp], 0.6, 'trousers', 0.9),
          R([cx, 0.84, 0], 0.086, 0.09, [hp, hp], 0, 'trousers', 0.82),
          R([cx, 0.7, 0], 0.076, 0.08, [hp, hp], 0, 'trousers', 0.68),
          R([cx, 0.57, 0], 0.063, 0.066, [hp, kn], 0.25, 'trousers', 0.55),
          R([cx, 0.47, 0], 0.058, 0.06, [hp, kn], 0.55, 'trousers', 0.45),
          R([cx, 0.38, 0], 0.062, 0.064, [kn, kn], 0, 'trousers', 0.36),
          R([cx, 0.26, 0], 0.052, 0.054, [kn, kn], 0, 'trousers', 0.24),
          R([cx, 0.14, 0], 0.042, 0.044, [kn, kn], 0, 'trousers', 0.12),
          R([cx, 0.075, 0], 0.038, 0.038, [kn, an], 0.5, 'shoes', 0.85),
        ],
        10,
        'y',
        false,
        false,
      );
      // Foot: flattened tube pointing forward (+z) from the ankle.
      addTube(
        [
          R([cx, 0.05, -0.04], 0.042, 0.046, [an, an], 0, 'shoes', 0.8),
          R([cx, 0.045, 0.04], 0.046, 0.042, [an, an], 0, 'shoes', 0.6),
          R([cx, 0.04, 0.1], 0.045, 0.035, [an, an], 0, 'shoes', 0.4),
          R([cx, 0.035, 0.15], 0.038, 0.024, [an, an], 0, 'shoes', 0.3),
        ],
        8,
        'z',
        true,
        true,
      );
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geo.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
    geo.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 1, 0), 2.4);
    this.sharedGeo = geo;
    return geo;
  }

  // ---------- Attachments ----------

  private addHeadgear(opts: HumanOptions): void {
    const head = this.joints.head;
    // Head bone is at world y≈1.68; skull center ≈ 1.755 -> local +0.075.
    if (opts.helmet) {
      const helmetMat = new THREE.MeshStandardMaterial({ color: opts.hatColor ?? opts.jersey, roughness: 0.45 });
      const dome = new THREE.Mesh(
        new THREE.SphereGeometry(0.108, 14, 10, 0, Math.PI * 2, 0, Math.PI / 1.75),
        helmetMat,
      );
      dome.position.y = 0.085;
      dome.scale.set(1, 0.95, 1.08);
      dome.castShadow = true;
      head.add(dome);
      const peak = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.018, 0.09), helmetMat);
      peak.position.set(0, 0.075, 0.1);
      head.add(peak);
      const grillMat = new THREE.MeshStandardMaterial({ color: 0x3a3f46, metalness: 0.7, roughness: 0.35 });
      for (const gy of [0.0, 0.035]) {
        const bar = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.006, 6, 12, Math.PI), grillMat);
        bar.rotation.set(Math.PI / 2.4, 0, 0);
        bar.position.set(0, gy, 0.055);
        head.add(bar);
      }
    } else {
      const capMat = new THREE.MeshStandardMaterial({ color: opts.hatColor ?? opts.jersey, roughness: 0.7 });
      const cap = new THREE.Mesh(
        new THREE.SphereGeometry(0.099, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2.5),
        capMat,
      );
      cap.position.y = 0.092;
      cap.scale.set(1, 0.8, 1.06);
      head.add(cap);
      const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, 0.012, 12, 1, false, -Math.PI / 2.6, Math.PI / 1.35), capMat);
      brim.position.set(0, 0.075, 0.045);
      head.add(brim);
    }
  }

  /** Cricket bat held in the right hand; left hand is IK'd onto the handle. */
  addBat(): void {
    const bat = new THREE.Group();
    const willowMat = new THREE.MeshStandardMaterial({ color: 0xe3cd96, roughness: 0.55 });
    // Blade with a slight spine: two boxes
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.108, 0.5, 0.038), willowMat);
    blade.position.y = -0.45;
    blade.castShadow = true;
    bat.add(blade);
    const spine = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.42, 0.022), willowMat);
    spine.position.set(0, -0.44, -0.026);
    bat.add(spine);
    const edge = new THREE.Mesh(new THREE.BoxGeometry(0.108, 0.04, 0.04), willowMat);
    edge.position.set(0, -0.71, -0.004);
    bat.add(edge);
    const handle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.015, 0.017, 0.32, 8),
      new THREE.MeshStandardMaterial({ color: 0x1c1c20, roughness: 0.9 }),
    );
    handle.position.y = -0.06;
    bat.add(handle);
    bat.position.set(0, -0.02, 0.02);
    this.rightHand.add(bat);
    this.bat = bat;
  }

  /** Batting pads strapped over the shins. */
  addPads(color = 0xf2f2ec): void {
    const padMat = new THREE.MeshStandardMaterial({ color, roughness: 0.85 });
    for (const knee of [this.joints.kneeL, this.joints.kneeR]) {
      const pad = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.065, 0.46, 10, 1, true, -Math.PI / 2, Math.PI), padMat);
      pad.position.set(0, -0.18, 0.035);
      pad.castShadow = true;
      knee.add(pad);
      const kneeRoll = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.05, 10, 1, true, -Math.PI / 2, Math.PI), padMat);
      kneeRoll.position.set(0, 0.04, 0.035);
      knee.add(kneeRoll);
    }
  }
}
