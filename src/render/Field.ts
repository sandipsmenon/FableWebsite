import * as THREE from 'three';
import { PITCH } from '../sim/types';
import { grassTexture, pitchTexture } from './ProceduralTextures';

/** The playing surface: outfield disc, pitch strip, creases, stumps, boundary rope. */
export class Field {
  readonly group = new THREE.Group();
  readonly strikerStumps: THREE.Group;
  readonly bowlerStumps: THREE.Group;
  /** Center of the ground (pitch midpoint). */
  static readonly CENTER = new THREE.Vector3(0, 0, PITCH.length / 2);

  constructor() {
    // Outfield
    const grass = grassTexture();
    const ground = new THREE.Mesh(
      new THREE.CircleGeometry(PITCH.groundRadius, 96),
      new THREE.MeshLambertMaterial({ map: grass }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(0, 0, PITCH.length / 2);
    ground.receiveShadow = true;
    this.group.add(ground);

    // Pitch strip
    const pitch = new THREE.Mesh(
      new THREE.PlaneGeometry(PITCH.width, PITCH.length + 2.44),
      new THREE.MeshLambertMaterial({ map: pitchTexture() }),
    );
    pitch.rotation.x = -Math.PI / 2;
    pitch.position.set(0, 0.012, PITCH.length / 2);
    pitch.receiveShadow = true;
    this.group.add(pitch);

    // Stumps at both ends
    this.strikerStumps = Field.makeStumps();
    this.strikerStumps.position.set(0, 0, PITCH.strikerStumpsZ);
    this.group.add(this.strikerStumps);
    this.bowlerStumps = Field.makeStumps();
    this.bowlerStumps.position.set(0, 0, PITCH.bowlerStumpsZ);
    this.group.add(this.bowlerStumps);

    // Boundary rope
    const ropeCurve = new THREE.EllipseCurve(0, 0, PITCH.boundaryRadius, PITCH.boundaryRadius, 0, Math.PI * 2);
    const pts = ropeCurve.getPoints(128).map((p) => new THREE.Vector3(p.x, 0.14, p.y + PITCH.length / 2));
    const rope = new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, true), 256, 0.14, 8, true),
      new THREE.MeshLambertMaterial({ color: 0xf5f5f0 }),
    );
    rope.castShadow = false;
    this.group.add(rope);
  }

  static makeStumps(): THREE.Group {
    const g = new THREE.Group();
    // Modern LED stumps: dark body with a cool glow that flashes when broken.
    const mat = new THREE.MeshStandardMaterial({
      color: 0x141c28,
      emissive: 0x35c4ff,
      emissiveIntensity: 0.75,
      roughness: 0.35,
    });
    const stumpGeo = new THREE.CylinderGeometry(0.022, 0.022, PITCH.stumpHeight, 8);
    for (const x of [-PITCH.stumpHalfWidth, 0, PITCH.stumpHalfWidth]) {
      const s = new THREE.Mesh(stumpGeo, mat);
      s.position.set(x, PITCH.stumpHeight / 2, 0);
      s.castShadow = true;
      s.name = 'stump';
      g.add(s);
    }
    const bailGeo = new THREE.CylinderGeometry(0.012, 0.012, PITCH.stumpHalfWidth, 6);
    for (const x of [-PITCH.stumpHalfWidth / 2, PITCH.stumpHalfWidth / 2]) {
      const b = new THREE.Mesh(bailGeo, mat);
      b.rotation.z = Math.PI / 2;
      b.position.set(x, PITCH.stumpHeight + 0.02, 0);
      b.castShadow = true;
      b.name = 'bail';
      g.add(b);
    }
    return g;
  }
}
