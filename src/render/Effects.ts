import * as THREE from 'three';
import { PITCH } from '../sim/types';

interface Fragment {
  mesh: THREE.Object3D;
  vel: THREE.Vector3;
  angVel: THREE.Vector3;
}

/** Stump explosion on bowled + pitch-bounce marker. */
export class Effects {
  private fragments: Fragment[] = [];
  private markers: { mesh: THREE.Mesh; age: number }[] = [];
  private markerGeo = new THREE.CircleGeometry(0.09, 12);
  private markerMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.85 });

  constructor(private scene: THREE.Scene) {}

  private ledFlash: THREE.MeshStandardMaterial[] = [];

  /** Send stumps & bails flying from a ball impact, LED flash included. */
  explodeStumps(stumps: THREE.Group, ballVel: THREE.Vector3): void {
    stumps.traverse((o) => {
      if (o instanceof THREE.Mesh && o.material instanceof THREE.MeshStandardMaterial) {
        o.material.emissiveIntensity = 6;
        if (!this.ledFlash.includes(o.material)) this.ledFlash.push(o.material);
      }
    });
    for (const child of [...stumps.children]) {
      if (this.fragments.some((f) => f.mesh === child)) continue;
      const isBail = child.name === 'bail';
      if (!isBail && Math.random() > 0.7) continue; // not every stump goes
      const world = new THREE.Vector3();
      child.getWorldPosition(world);
      this.scene.attach(child);
      this.fragments.push({
        mesh: child,
        vel: new THREE.Vector3(
          ballVel.x * 0.12 + (Math.random() - 0.5) * 2,
          2.2 + Math.random() * 2.2,
          ballVel.z * 0.12 - Math.random() * 1.5,
        ),
        angVel: new THREE.Vector3((Math.random() - 0.5) * 14, (Math.random() - 0.5) * 14, (Math.random() - 0.5) * 14),
      });
    }
  }

  /** Restore stump fragments to their parent group. */
  resetStumps(stumps: THREE.Group, origin: THREE.Vector3): void {
    for (const f of this.fragments) {
      this.scene.remove(f.mesh);
    }
    this.fragments.length = 0;
    // Rebuild is simpler than restoring transforms.
    stumps.clear();
    const rebuilt = FieldStumpsFactory();
    for (const c of [...rebuilt.children]) stumps.add(c);
    stumps.position.copy(origin);
    stumps.rotation.set(0, 0, 0);
  }

  /** White decal where the delivery pitched. */
  addPitchMarker(x: number, z: number): void {
    const m = new THREE.Mesh(this.markerGeo, this.markerMat.clone());
    m.rotation.x = -Math.PI / 2;
    m.position.set(x, 0.02, z);
    this.scene.add(m);
    this.markers.push({ mesh: m, age: 0 });
  }

  update(dt: number): void {
    for (let i = this.ledFlash.length - 1; i >= 0; i--) {
      const m = this.ledFlash[i];
      m.emissiveIntensity = Math.max(0.75, m.emissiveIntensity - dt * 6);
      // Strobe while hot
      if (m.emissiveIntensity > 1) m.emissiveIntensity *= 0.8 + 0.4 * Math.random();
      if (m.emissiveIntensity <= 0.76) this.ledFlash.splice(i, 1);
    }
    for (const f of this.fragments) {
      f.vel.y -= 9.81 * dt;
      f.mesh.position.addScaledVector(f.vel, dt);
      f.mesh.rotation.x += f.angVel.x * dt;
      f.mesh.rotation.y += f.angVel.y * dt;
      f.mesh.rotation.z += f.angVel.z * dt;
      if (f.mesh.position.y < 0.03) {
        f.mesh.position.y = 0.03;
        f.vel.y = -f.vel.y * 0.3;
        f.vel.x *= 0.7;
        f.vel.z *= 0.7;
        f.angVel.multiplyScalar(0.6);
      }
    }
    for (let i = this.markers.length - 1; i >= 0; i--) {
      const m = this.markers[i];
      m.age += dt;
      (m.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.85 - m.age * 0.12);
      if (m.age > 7) {
        this.scene.remove(m.mesh);
        this.markers.splice(i, 1);
      }
    }
  }
}

// Local stump factory to avoid a circular import with Field.
import { Field } from './Field';
function FieldStumpsFactory(): THREE.Group {
  return Field.makeStumps();
}
