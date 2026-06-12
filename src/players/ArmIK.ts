import * as THREE from 'three';
import { SkinnedHuman } from './SkinnedHuman';

const UPPER = 0.3; // shoulder -> elbow
const FORE = 0.27; // elbow -> hand

const _target = new THREE.Vector3();
const _shoulderPos = new THREE.Vector3();
const _dir = new THREE.Vector3();
const _qAim = new THREE.Quaternion();
const _qHinge = new THREE.Quaternion();
const _down = new THREE.Vector3(0, -1, 0);
const _xAxis = new THREE.Vector3(1, 0, 0);
const _spineWorldInv = new THREE.Matrix4();

/**
 * Analytic two-bone IK for the LEFT arm: plants the left hand on a world-space
 * target (the bat handle). Overrides whatever the current clip posed for
 * shoulderL/elbowL — call after the animator update.
 */
export function solveLeftArmToTarget(rig: SkinnedHuman, targetWorld: THREE.Vector3): void {
  const spine = rig.joints.spine;
  const shoulder = rig.joints.shoulderL;
  const elbow = rig.joints.elbowL;

  // Work in the spine's local frame (the shoulder's parent).
  spine.updateWorldMatrix(true, false);
  _spineWorldInv.copy(spine.matrixWorld).invert();
  _target.copy(targetWorld).applyMatrix4(_spineWorldInv);
  _shoulderPos.copy(shoulder.position);
  _dir.copy(_target).sub(_shoulderPos);
  const d = THREE.MathUtils.clamp(_dir.length(), 0.05, UPPER + FORE - 0.01);
  _dir.normalize();

  // Elbow hinge: interior angle from the law of cosines.
  const interior = Math.acos(
    THREE.MathUtils.clamp((UPPER * UPPER + FORE * FORE - d * d) / (2 * UPPER * FORE), -1, 1),
  );
  elbow.rotation.set(-(Math.PI - interior), 0, 0);

  // Shoulder: aim the arm axis at the target, then swing back by alpha so the
  // bent forearm lands exactly on it (hinge axis = local X, elbow bends to +Z).
  const alpha = Math.acos(
    THREE.MathUtils.clamp((UPPER * UPPER + d * d - FORE * FORE) / (2 * UPPER * d), -1, 1),
  );
  _qAim.setFromUnitVectors(_down, _dir);
  _qHinge.setFromAxisAngle(_xAxis, alpha);
  shoulder.quaternion.copy(_qAim).multiply(_qHinge);
}
