import * as THREE from 'three';
import { PITCH } from '../sim/types';
import { adBoardTexture, crowdTexture } from './ProceduralTextures';

/**
 * Oval stadium bowl: tiered stands with crowd, ad boards, floodlight towers,
 * sightscreens and a big scoreboard whose texture is redrawn from match state.
 */
export class Stadium {
  readonly group = new THREE.Group();
  private crowdMats: THREE.MeshLambertMaterial[] = [];
  private crowdUniforms = { uTime: { value: 0 }, uCheer: { value: 0 } };
  private scoreboardCanvas: HTMLCanvasElement;
  private scoreboardTex: THREE.CanvasTexture;
  private cheer = 0;

  constructor() {
    const cz = PITCH.length / 2;
    const innerR = PITCH.groundRadius + 2;

    // ----- Ad boards ring around the boundary -----
    const adTex = adBoardTexture();
    adTex.repeat.set(-8, 1); // negative: counteract BackSide mirroring so text reads correctly
    const adRing = new THREE.Mesh(
      new THREE.CylinderGeometry(innerR - 8, innerR - 8, 0.9, 96, 1, true),
      new THREE.MeshLambertMaterial({
        map: adTex,
        side: THREE.BackSide,
        emissive: 0xffffff,
        emissiveMap: adTex,
        emissiveIntensity: 0.55,
      }),
    );
    adRing.position.set(0, 0.45, cz);
    this.group.add(adRing);

    // ----- Stands: instanced individual crowd (lower tier) + textured upper tier -----
    const crowdTex = crowdTexture();
    this.buildInstancedCrowd(innerR, innerR + 16, 1.2, 9, cz);
    // Dark seating slope behind the instanced people
    const slope = this.makeTier(innerR, innerR + 16, 1.2, 9, null);
    slope.position.set(0, 0, cz);
    this.group.add(slope);
    const upper = this.makeTier(innerR + 17, innerR + 34, 10.5, 21, crowdTex);
    upper.position.set(0, 0, cz);
    this.group.add(upper);

    // Concrete facade below tier 1 and between tiers
    const facadeMat = new THREE.MeshLambertMaterial({ color: 0x9aa0a8 });
    const facade1 = new THREE.Mesh(new THREE.CylinderGeometry(innerR, innerR, 1.4, 96, 1, true), facadeMat);
    facade1.position.set(0, 0.7, cz);
    (facade1.material as THREE.MeshLambertMaterial).side = THREE.DoubleSide;
    this.group.add(facade1);
    const facade2 = new THREE.Mesh(
      new THREE.CylinderGeometry(innerR + 17, innerR + 17, 2.4, 96, 1, true),
      facadeMat,
    );
    facade2.position.set(0, 9.6, cz);
    this.group.add(facade2);

    // ----- Roof ring over the top tier -----
    const roof = new THREE.Mesh(
      new THREE.RingGeometry(innerR + 12, innerR + 38, 96),
      new THREE.MeshStandardMaterial({ color: 0xdfe3e8, metalness: 0.35, roughness: 0.5, side: THREE.DoubleSide }),
    );
    roof.rotation.x = -Math.PI / 2;
    roof.position.set(0, 23.5, cz);
    this.group.add(roof);
    // Roof support columns
    const colGeo = new THREE.CylinderGeometry(0.35, 0.35, 23.5, 8);
    const colMat = new THREE.MeshLambertMaterial({ color: 0xb8bec6 });
    for (let i = 0; i < 24; i++) {
      const a = (i / 24) * Math.PI * 2;
      const col = new THREE.Mesh(colGeo, colMat);
      col.position.set(Math.cos(a) * (innerR + 33), 11.75, cz + Math.sin(a) * (innerR + 33));
      this.group.add(col);
    }

    // ----- Sightscreens behind both ends -----
    const screenMat = new THREE.MeshLambertMaterial({ color: 0xf2f2ee });
    for (const z of [-innerR + cz - 0.5, innerR + cz + 0.5]) {
      const screen = new THREE.Mesh(new THREE.BoxGeometry(14, 7, 0.5), screenMat);
      screen.position.set(0, 3.5, z + (z < cz ? 9 : -9));
      this.group.add(screen);
    }

    // ----- Floodlight towers -----
    for (const a of [Math.PI / 4, (3 * Math.PI) / 4, (5 * Math.PI) / 4, (7 * Math.PI) / 4]) {
      const tower = this.makeFloodlight();
      tower.position.set(Math.cos(a) * (innerR + 26), 0, cz + Math.sin(a) * (innerR + 26));
      tower.lookAt(0, 0, cz);
      this.group.add(tower);
    }

    // ----- Scoreboard -----
    this.scoreboardCanvas = document.createElement('canvas');
    this.scoreboardCanvas.width = 1024;
    this.scoreboardCanvas.height = 512;
    this.scoreboardTex = new THREE.CanvasTexture(this.scoreboardCanvas);
    this.scoreboardTex.colorSpace = THREE.SRGBColorSpace;
    const board = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 10),
      new THREE.MeshBasicMaterial({ map: this.scoreboardTex }),
    );
    board.position.set(-50, 15, cz - 62);
    board.lookAt(0, 1.5, cz * 0.4);
    this.group.add(board);
    this.drawScoreboard('FABLE CRICKET', '', '');
  }

  private makeTier(r0: number, r1: number, y0: number, y1: number, crowdTex: THREE.Texture | null): THREE.Mesh {
    // A sloped truncated cone ring: crowd texture, or dark seating if no texture.
    const segments = 96;
    const geo = new THREE.CylinderGeometry(r1, r0, y1 - y0, segments, 1, true);
    let mat: THREE.MeshLambertMaterial;
    if (crowdTex) {
      const tex = crowdTex.clone();
      tex.needsUpdate = true;
      tex.repeat.set(10, 1);
      tex.wrapS = THREE.RepeatWrapping;
      mat = new THREE.MeshLambertMaterial({
        map: tex,
        side: THREE.BackSide,
        emissive: 0xffffff,
        emissiveMap: tex,
        emissiveIntensity: 0.4,
      });
      this.crowdMats.push(mat);
    } else {
      mat = new THREE.MeshLambertMaterial({ color: 0x2c313c, side: THREE.BackSide });
    }
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.y = (y0 + y1) / 2;
    return mesh;
  }

  /** Individual spectators on the lower tier: one InstancedMesh, sway via shader. */
  private buildInstancedCrowd(r0: number, r1: number, y0: number, y1: number, cz: number): void {
    const COUNT = 2600;
    const geo = new THREE.PlaneGeometry(0.5, 0.72);
    const phases = new Float32Array(COUNT);
    const mat = new THREE.MeshLambertMaterial({ emissive: 0xffffff, emissiveIntensity: 0.32 });
    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = this.crowdUniforms.uTime;
      shader.uniforms.uCheer = this.crowdUniforms.uCheer;
      shader.vertexShader = shader.vertexShader
        .replace(
          '#include <common>',
          '#include <common>\nuniform float uTime;\nuniform float uCheer;\nattribute float aPhase;',
        )
        .replace(
          '#include <begin_vertex>',
          '#include <begin_vertex>\ntransformed.y += (0.04 + uCheer * 0.22) * sin(uTime * 8.0 + aPhase) * step(0.05, position.y);',
        );
    };
    const mesh = new THREE.InstancedMesh(geo, mat, COUNT);
    geo.setAttribute('aPhase', new THREE.InstancedBufferAttribute(phases, 1));
    const dummy = new THREE.Object3D();
    const palette = [0xd8334a, 0x3a66d8, 0x36a851, 0xe8d44d, 0x9b59b6, 0xe67e22, 0xf1f1f1, 0x4dc3ff, 0xc68642, 0x8d5524];
    const color = new THREE.Color();
    for (let i = 0; i < COUNT; i++) {
      const a = Math.random() * Math.PI * 2;
      const t = Math.random();
      const r = THREE.MathUtils.lerp(r0 + 1.2, r1 - 0.8, t);
      const y = THREE.MathUtils.lerp(y0 + 0.5, y1 - 0.3, t) + 0.36;
      dummy.position.set(Math.cos(a) * r, y, cz + Math.sin(a) * r);
      dummy.lookAt(0, y, cz);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      color.setHex(palette[Math.floor(Math.random() * palette.length)]);
      color.multiplyScalar(0.55 + Math.random() * 0.5);
      mesh.setColorAt(i, color);
      phases[i] = Math.random() * Math.PI * 2;
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    this.group.add(mesh);
  }

  private makeFloodlight(): THREE.Group {
    const g = new THREE.Group();
    const pylon = new THREE.Mesh(
      new THREE.CylinderGeometry(0.5, 0.9, 38, 8),
      new THREE.MeshLambertMaterial({ color: 0xc8cdd4 }),
    );
    pylon.position.y = 19;
    g.add(pylon);
    // Light head: grid of emissive discs on a dark panel
    const head = new THREE.Group();
    const panel = new THREE.Mesh(
      new THREE.BoxGeometry(7, 5, 0.5),
      new THREE.MeshLambertMaterial({ color: 0x30343a }),
    );
    head.add(panel);
    const lampGeo = new THREE.CircleGeometry(0.42, 12);
    // Over-bright so the bloom pass makes the heads glow like real floodlights.
    const lampMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(5, 4.6, 3.9) });
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 6; c++) {
        const lamp = new THREE.Mesh(lampGeo, lampMat);
        lamp.position.set(-2.75 + c * 1.1, -1.65 + r * 1.1, 0.27);
        head.add(lamp);
      }
    }
    head.position.y = 40;
    head.rotation.x = 0.35;
    g.add(head);
    return g;
  }

  /** Update the in-stadium scoreboard. */
  drawScoreboard(line1: string, line2: string, line3: string): void {
    const g = this.scoreboardCanvas.getContext('2d')!;
    const w = this.scoreboardCanvas.width;
    const h = this.scoreboardCanvas.height;
    g.fillStyle = '#101418';
    g.fillRect(0, 0, w, h);
    g.strokeStyle = '#3a4148';
    g.lineWidth = 12;
    g.strokeRect(6, 6, w - 12, h - 12);
    g.textAlign = 'center';
    g.fillStyle = '#ffd84d';
    g.font = 'bold 92px Arial';
    g.fillText(line1, w / 2, 150);
    g.fillStyle = '#ffffff';
    g.font = 'bold 76px Arial';
    g.fillText(line2, w / 2, 290);
    g.fillStyle = '#7fd0ff';
    g.font = '60px Arial';
    g.fillText(line3, w / 2, 420);
    this.scoreboardTex.needsUpdate = true;
  }

  /** Trigger a crowd cheer (brightens/sways the crowd briefly). */
  triggerCheer(intensity = 1): void {
    this.cheer = Math.max(this.cheer, intensity);
  }

  update(dt: number, time: number): void {
    this.cheer = Math.max(0, this.cheer - dt * 0.4);
    this.crowdUniforms.uTime.value = time;
    this.crowdUniforms.uCheer.value = this.cheer;
    const pulse = 1 + this.cheer * 0.18 * Math.sin(time * 14);
    for (const m of this.crowdMats) {
      m.color.setScalar(pulse);
    }
  }
}
