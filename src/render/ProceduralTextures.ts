import * as THREE from 'three';

function makeCanvas(size: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  return [c, c.getContext('2d')!];
}

/** Outfield grass: concentric mowing rings + noise, 30-yard circle painted in. */
export function grassTexture(size = 2048): THREE.CanvasTexture {
  const [c, g] = makeCanvas(size);
  const cx = size / 2;
  const cy = size / 2;
  // Texture maps onto a ground disc of radius PITCH.groundRadius (78m): px per meter
  const R = size / 2;
  const ppm = R / 78;

  // Concentric mowing rings
  const ringW = 5 * ppm;
  for (let r = R; r > 0; r -= ringW) {
    const band = Math.floor(r / ringW) % 2 === 0;
    g.fillStyle = band ? '#3d7a2f' : '#46893a';
    g.beginPath();
    g.arc(cx, cy, r, 0, Math.PI * 2);
    g.fill();
  }

  // Grass noise speckle
  const img = g.getImageData(0, 0, size, size);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * 22;
    d[i] += n;
    d[i + 1] += n;
    d[i + 2] += n * 0.6;
  }
  g.putImageData(img, 0, 0);

  // 30-yard circle (27.4m radius from pitch center)
  g.strokeStyle = 'rgba(255,255,255,0.85)';
  g.lineWidth = Math.max(2, 0.25 * ppm);
  g.setLineDash([10 * ppm * 0.12, 10 * ppm * 0.12]);
  g.beginPath();
  g.arc(cx, cy, 27.4 * ppm, 0, Math.PI * 2);
  g.stroke();
  g.setLineDash([]);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

/** The 22-yard pitch strip with creases, worn patches and footmarks. */
export function pitchTexture(w = 512, h = 2048): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d')!;

  // Base tan, slightly mottled
  g.fillStyle = '#c2a877';
  g.fillRect(0, 0, w, h);
  for (let i = 0; i < 5000; i++) {
    const x = Math.random() * w;
    const y = Math.random() * h;
    const a = Math.random() * 0.07;
    g.fillStyle = Math.random() > 0.5 ? `rgba(120,95,55,${a})` : `rgba(235,220,180,${a})`;
    g.fillRect(x, y, 3, 3);
  }

  // Worn patches on a good length at both ends (pitch maps z: 0..20.12 -> y: h..0)
  const mPerPx = 20.12 / h;
  const wear = (zMeters: number, intensity: number) => {
    const y = h - zMeters / mPerPx;
    const grad = g.createRadialGradient(w / 2, y, 0, w / 2, y, w * 0.45);
    grad.addColorStop(0, `rgba(140,110,70,${intensity})`);
    grad.addColorStop(1, 'rgba(140,110,70,0)');
    g.fillStyle = grad;
    g.fillRect(0, y - w, w, w * 2);
  };
  wear(6.5, 0.5);
  wear(13.5, 0.5);

  // Crease lines (white): popping + bowling creases at both ends.
  g.fillStyle = '#f4f4f0';
  const line = (zMeters: number, thickness = 0.05) => {
    const y = h - zMeters / mPerPx;
    g.fillRect(0, y - thickness / mPerPx / 2, w, thickness / mPerPx);
  };
  line(1.22);
  line(0.0);
  line(20.12);
  line(18.9);
  // Return creases
  g.fillRect(w * 0.08, h - 1.22 / mPerPx, w * 0.04, 1.22 / mPerPx);
  g.fillRect(w * 0.88, h - 1.22 / mPerPx, w * 0.04, 1.22 / mPerPx);
  g.fillRect(w * 0.08, h - 20.12 / mPerPx, w * 0.04, 1.22 / mPerPx);
  g.fillRect(w * 0.88, h - 20.12 / mPerPx, w * 0.04, 1.22 / mPerPx);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

/** Crowd tier texture: thousands of multicolored "people" dots on dark seating. */
export function crowdTexture(size = 1024): THREE.CanvasTexture {
  const [c, g] = makeCanvas(size);
  g.fillStyle = '#2a2d36';
  g.fillRect(0, 0, size, size);
  const palette = ['#e8c39e', '#c68642', '#8d5524', '#f1f1f1', '#d8334a', '#3a66d8', '#36a851', '#e8d44d', '#9b59b6', '#e67e22', '#1abc9c', '#34495e'];
  const cols = 90;
  const rows = 42;
  for (let r = 0; r < rows; r++) {
    for (let col = 0; col < cols; col++) {
      const x = (col + 0.5 + (Math.random() - 0.5) * 0.5) * (size / cols);
      const y = (r + 0.5) * (size / rows);
      const bodyC = palette[2 + Math.floor(Math.random() * (palette.length - 2))];
      const skinC = palette[Math.floor(Math.random() * 3)];
      // body
      g.fillStyle = bodyC;
      g.fillRect(x - 4, y - 2, 8, 9);
      // head
      g.fillStyle = skinC;
      g.beginPath();
      g.arc(x, y - 6, 3.4, 0, Math.PI * 2);
      g.fill();
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  return tex;
}

/** Ad-board texture ring around the boundary. */
export function adBoardTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = 2048;
  c.height = 128;
  const g = c.getContext('2d')!;
  const ads: Array<[string, string, string]> = [
    ['FABLE CRICKET', '#ffffff', '#d8334a'],
    ['DRINK HYDRO+', '#0a2a52', '#4dc3ff'],
    ['SKYJET AIRWAYS', '#ffffff', '#1860c4'],
    ['MAXFIELD TYRES', '#222222', '#e8d44d'],
    ['ORBIT TELECOM', '#ffffff', '#36a851'],
    ['PEAK FINANCE', '#ffffff', '#5b3a9b'],
  ];
  const segW = c.width / ads.length;
  ads.forEach(([text, fg, bg], i) => {
    g.fillStyle = bg;
    g.fillRect(i * segW, 0, segW, c.height);
    g.fillStyle = fg;
    g.font = 'bold 52px Arial';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText(text, i * segW + segW / 2, c.height / 2);
  });
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  return tex;
}
