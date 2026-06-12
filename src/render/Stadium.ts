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
  private scoreboardCanvas: HTMLCanvasElement;
  private scoreboardTex: THREE.CanvasTexture;
  private cheer = 0;

  constructor() {
    const cz = PITCH.length / 2;
    const innerR = PITCH.groundRadius + 2;

    // ----- Ad boards ring around the boundary -----
    const adTex = adBoardTexture();
    adTex.repeat.set(8, 1);
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

    // ----- Stands: two sloped tiers all the way around -----
    const crowdTex = crowdTexture();
    const tierData = [
      { r0: innerR, r1: innerR + 16, y0: 1.2, y1: 9 },
      { r0: innerR + 17, r1: innerR + 34, y0: 10.5, y1: 21 },
    ];
    for (const t of tierData) {
      const tier = this.makeTier(t.r0, t.r1, t.y0, t.y1, crowdTex);
      tier.position.set(0, 0, cz);
      this.group.add(tier);
    }

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

  private makeTier(r0: number, r1: number, y0: number, y1: number, crowdTex: THREE.Texture): THREE.Mesh {
    // A sloped truncated cone ring of "crowd" texture.
    const segments = 96;
    const geo = new THREE.CylinderGeometry(r1, r0, y1 - y0, segments, 1, true);
    const tex = crowdTex.clone();
    tex.needsUpdate = true;
    tex.repeat.set(10, 1);
    tex.wrapS = THREE.RepeatWrapping;
    const mat = new THREE.MeshLambertMaterial({
      map: tex,
      side: THREE.BackSide,
      emissive: 0xffffff,
      emissiveMap: tex,
      emissiveIntensity: 0.4,
    });
    this.crowdMats.push(mat);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.y = (y0 + y1) / 2;
    return mesh;
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
    const lampMat = new THREE.MeshBasicMaterial({ color: 0xfff6d8 });
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
    const pulse = 1 + this.cheer * 0.18 * Math.sin(time * 14);
    for (const m of this.crowdMats) {
      m.color.setScalar(pulse);
    }
  }
}
