import * as THREE from 'three';

function makeCanvas(size: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  return [c, c.getContext('2d')!];
}

const kitCache = new Map<string, THREE.CanvasTexture>();

/**
 * Kit atlas for SkinnedHuman bodies. Four horizontal bands (bottom -> top in UV v):
 * jersey [0.00-0.25], trousers [0.25-0.50], skin [0.50-0.75], shoes [0.75-1.00].
 * Canvas y axis is flipped relative to v (flipY), so band k paints at rows from the top.
 */
export function kitTexture(opts: {
  jersey: number;
  trim: number;
  trousers: number;
  skin: number;
}): THREE.CanvasTexture {
  const key = `${opts.jersey}-${opts.trim}-${opts.trousers}-${opts.skin}`;
  const cached = kitCache.get(key);
  if (cached) return cached;

  const size = 256;
  const [c, g] = makeCanvas(size);
  const band = size / 4;
  const hex = (n: number) => `#${n.toString(16).padStart(6, '0')}`;
  const shade = (n: number, f: number) => {
    const r = Math.min(255, ((n >> 16) & 255) * f);
    const gg = Math.min(255, ((n >> 8) & 255) * f);
    const b = Math.min(255, (n & 255) * f);
    return `rgb(${r | 0},${gg | 0},${b | 0})`;
  };

  // With flipY, v=0 maps to the BOTTOM canvas row. Band order bottom-up:
  // jersey (canvas rows 3*band..4*band), trousers (2..3), skin (1..2), shoes (0..1).
  const bandTop = (i: number) => size - (i + 1) * band; // i = band index in v space

  // Jersey: vertical gradient + chest stripe + hem trim. v within band maps along the body.
  const jy = bandTop(0);
  const grad = g.createLinearGradient(0, jy, 0, jy + band);
  grad.addColorStop(0, shade(opts.jersey, 1.12)); // shoulders slightly lighter
  grad.addColorStop(1, shade(opts.jersey, 0.82));
  g.fillStyle = grad;
  g.fillRect(0, jy, size, band);
  // Chest stripe (~62% up the jersey -> canvas y = jy + 0.38*band)
  g.fillStyle = hex(opts.trim);
  g.fillRect(0, jy + band * 0.34, size, band * 0.1);
  g.fillStyle = shade(opts.trim, 0.7);
  g.fillRect(0, jy + band * 0.44, size, band * 0.03);
  // Hem trim at the bottom of the shirt (v ~ 0 -> canvas bottom of band)
  g.fillStyle = hex(opts.trim);
  g.fillRect(0, jy + band - 8, size, 8);

  // Trousers: solid + subtle side shading
  const ty = bandTop(1);
  const tg = g.createLinearGradient(0, ty, 0, ty + band);
  tg.addColorStop(0, shade(opts.trousers, 1.05));
  tg.addColorStop(1, shade(opts.trousers, 0.78));
  g.fillStyle = tg;
  g.fillRect(0, ty, size, band);

  // Skin: flat tone, gentle vertical shading
  const sy = bandTop(2);
  const sg = g.createLinearGradient(0, sy, 0, sy + band);
  sg.addColorStop(0, shade(opts.skin, 1.05));
  sg.addColorStop(1, shade(opts.skin, 0.88));
  g.fillStyle = sg;
  g.fillRect(0, sy, size, band);

  // Shoes: white upper, dark sole at the very bottom of the band (v near 0.75)
  const hy = bandTop(3);
  g.fillStyle = '#e8e8e6';
  g.fillRect(0, hy, size, band);
  g.fillStyle = hex(opts.trim);
  g.fillRect(0, hy + band * 0.55, size, band * 0.18);
  g.fillStyle = '#22252a';
  g.fillRect(0, hy + band - 10, size, 10);

  // Subtle fabric noise over everything
  const img = g.getImageData(0, 0, size, size);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * 9;
    d[i] += n;
    d[i + 1] += n;
    d[i + 2] += n;
  }
  g.putImageData(img, 0, 0);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  kitCache.set(key, tex);
  return tex;
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
