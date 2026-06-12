// Long-running autoplay verification: lets the game bat by itself for a while,
// captures the outcome log and periodic screenshots.
// Usage: PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers node scripts/autoplay.mjs [seconds] [outDir]
import { chromium } from 'playwright';
import { preview } from 'vite';
import { mkdirSync } from 'fs';

const seconds = Number(process.argv[2] ?? 60);
const outDir = process.argv[3] ?? 'shots';
mkdirSync(outDir, { recursive: true });

const server = await preview({ preview: { port: 4174, host: '127.0.0.1' } });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 960, height: 540 } });
page.on('console', (m) => {
  const t = m.text();
  if (m.type() === 'error') console.log('PAGE ERROR:', t);
  if (t.startsWith('[ball]')) console.log(t);
});
page.on('pageerror', (e) => console.log('PAGE EXCEPTION:', e.message));

await page.goto('http://127.0.0.1:4174/?auto=bat&seed=99&autoplay=1&turbo=6&fmt=quick');
await page.waitForTimeout(2500);
await page.click('#start-btn');

const start = Date.now();
let i = 0;
while (Date.now() - start < seconds * 1000) {
  await page.waitForTimeout(5000);
  await page.screenshot({ path: `${outDir}/auto-${String(i++).padStart(2, '0')}.png` });
}

await browser.close();
await server.close();
console.log('done');
process.exit(0);
