import * as THREE from 'three';

export interface RigColors {
  shirt: number;
  trousers: number;
  skin: number;
  hat?: number;
  helmet?: boolean;
}

export type JointName =
  | 'hips'
  | 'spine'
  | 'head'
  | 'shoulderL'
  | 'elbowL'
  | 'shoulderR'
  | 'elbowR'
  | 'hipL'
  | 'kneeL'
  | 'hipR'
  | 'kneeR';

/**
 * Procedural articulated player. Root group sits at the feet; joints are nested
 * groups whose Euler rotations are driven by the PoseAnimator.
 * Facing +Z when rotation.y = 0.
 */
export class HumanoidRig {
  readonly root = new THREE.Group();
  readonly joints: Record<JointName, THREE.Group>;
  /** Attachment for a bat (right wrist) or ball. */
  readonly rightHand: THREE.Group;
  readonly leftHand: THREE.Group;
  bat?: THREE.Group;

  private static geoCache = new Map<string, THREE.BufferGeometry>();

  private static geo(key: string, make: () => THREE.BufferGeometry): THREE.BufferGeometry {
    let g = this.geoCache.get(key);
    if (!g) {
      g = make();
      this.geoCache.set(key, g);
    }
    return g;
  }

  constructor(colors: RigColors) {
    const shirtMat = new THREE.MeshStandardMaterial({ color: colors.shirt, roughness: 0.85 });
    const trouserMat = new THREE.MeshStandardMaterial({ color: colors.trousers, roughness: 0.85 });
    const skinMat = new THREE.MeshStandardMaterial({ color: colors.skin, roughness: 0.7 });

    const J = (): THREE.Group => new THREE.Group();
    const hips = J();
    const spine = J();
    const head = J();
    const shoulderL = J();
    const elbowL = J();
    const shoulderR = J();
    const elbowR = J();
    const hipL = J();
    const kneeL = J();
    const hipR = J();
    const kneeR = J();
    this.joints = { hips, spine, head, shoulderL, elbowL, shoulderR, elbowR, hipL, kneeL, hipR, kneeR };

    hips.position.set(0, 0.96, 0);
    this.root.add(hips);

    // Pelvis block
    const pelvis = new THREE.Mesh(HumanoidRig.geo('pelvis', () => new THREE.BoxGeometry(0.3, 0.18, 0.2)), trouserMat);
    pelvis.position.y = 0.02;
    hips.add(pelvis);

    // Spine + torso
    spine.position.set(0, 0.1, 0);
    hips.add(spine);
    const torso = new THREE.Mesh(
      HumanoidRig.geo('torso', () => new THREE.CapsuleGeometry(0.17, 0.3, 4, 10)),
      shirtMat,
    );
    torso.position.y = 0.3;
    spine.add(torso);

    // Head + headgear
    head.position.set(0, 0.62, 0);
    spine.add(head);
    const skull = new THREE.Mesh(HumanoidRig.geo('skull', () => new THREE.SphereGeometry(0.11, 12, 10)), skinMat);
    skull.position.y = 0.05;
    head.add(skull);
    if (colors.helmet) {
      const helmetMat = new THREE.MeshStandardMaterial({ color: colors.hat ?? colors.shirt, roughness: 0.5 });
      const dome = new THREE.Mesh(
        HumanoidRig.geo('helmet', () => new THREE.SphereGeometry(0.125, 12, 8, 0, Math.PI * 2, 0, Math.PI / 1.8)),
        helmetMat,
      );
      dome.position.y = 0.06;
      head.add(dome);
      const grill = new THREE.Mesh(
        HumanoidRig.geo('grill', () => new THREE.BoxGeometry(0.16, 0.07, 0.02)),
        new THREE.MeshStandardMaterial({ color: 0x444444, metalness: 0.6, roughness: 0.4 }),
      );
      grill.position.set(0, 0.0, 0.12);
      head.add(grill);
    } else {
      const capMat = new THREE.MeshStandardMaterial({ color: colors.hat ?? colors.shirt, roughness: 0.7 });
      const cap = new THREE.Mesh(
        HumanoidRig.geo('cap', () => new THREE.SphereGeometry(0.115, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2.4)),
        capMat,
      );
      cap.position.y = 0.07;
      head.add(cap);
      const brim = new THREE.Mesh(HumanoidRig.geo('brim', () => new THREE.BoxGeometry(0.12, 0.015, 0.08)), capMat);
      brim.position.set(0, 0.075, 0.13);
      head.add(brim);
    }

    // Arms: shoulder joints on the torso; limbs hang down by default.
    const upperArmGeo = HumanoidRig.geo('upperArm', () => new THREE.CapsuleGeometry(0.05, 0.22, 4, 8));
    const forearmGeo = HumanoidRig.geo('forearm', () => new THREE.CapsuleGeometry(0.042, 0.2, 4, 8));
    const setupArm = (side: 1 | -1, shoulder: THREE.Group, elbow: THREE.Group): THREE.Group => {
      shoulder.position.set(0.23 * side, 0.5, 0);
      spine.add(shoulder);
      const upper = new THREE.Mesh(upperArmGeo, shirtMat);
      upper.position.y = -0.16;
      shoulder.add(upper);
      elbow.position.set(0, -0.32, 0);
      shoulder.add(elbow);
      const fore = new THREE.Mesh(forearmGeo, skinMat);
      fore.position.y = -0.14;
      elbow.add(fore);
      const hand = new THREE.Group();
      hand.position.set(0, -0.28, 0);
      elbow.add(hand);
      return hand;
    };
    this.leftHand = setupArm(-1, shoulderL, elbowL);
    this.rightHand = setupArm(1, shoulderR, elbowR);

    // Legs
    const thighGeo = HumanoidRig.geo('thigh', () => new THREE.CapsuleGeometry(0.07, 0.3, 4, 8));
    const shinGeo = HumanoidRig.geo('shin', () => new THREE.CapsuleGeometry(0.055, 0.3, 4, 8));
    const shoeGeo = HumanoidRig.geo('shoe', () => new THREE.BoxGeometry(0.1, 0.07, 0.22));
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.8 });
    const setupLeg = (side: 1 | -1, hip: THREE.Group, knee: THREE.Group): void => {
      hip.position.set(0.1 * side, -0.05, 0);
      hips.add(hip);
      const thigh = new THREE.Mesh(thighGeo, trouserMat);
      thigh.position.y = -0.21;
      hip.add(thigh);
      knee.position.set(0, -0.44, 0);
      hip.add(knee);
      const shin = new THREE.Mesh(shinGeo, trouserMat);
      shin.position.y = -0.2;
      knee.add(shin);
      const shoe = new THREE.Mesh(shoeGeo, shoeMat);
      shoe.position.set(0, -0.43, 0.05);
      knee.add(shoe);
    };
    setupLeg(-1, hipL, kneeL);
    setupLeg(1, hipR, kneeR);

    this.root.traverse((o) => {
      if (o instanceof THREE.Mesh) o.castShadow = true;
    });
  }

  /** Give this rig a cricket bat held in both hands (approximated at the right hand). */
  addBat(): void {
    const bat = new THREE.Group();
    const willow = new THREE.MeshStandardMaterial({ color: 0xdec88f, roughness: 0.65 });
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.105, 0.55, 0.04), willow);
    blade.position.y = -0.42;
    blade.castShadow = true;
    bat.add(blade);
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.3, 8), new THREE.MeshStandardMaterial({ color: 0x222222 }));
    handle.position.y = -0.08;
    bat.add(handle);
    this.rightHand.add(bat);
    this.bat = bat;
  }

  /** Batting pads on both shins. */
  addPads(color = 0xf5f5f0): void {
    const padMat = new THREE.MeshStandardMaterial({ color, roughness: 0.9 });
    for (const knee of [this.joints.kneeL, this.joints.kneeR]) {
      const pad = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.42, 0.06), padMat);
      pad.position.set(0, -0.18, 0.07);
      knee.add(pad);
    }
  }
}
