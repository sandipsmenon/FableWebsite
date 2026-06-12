// Close-up rig inspection: captures the ?rigdebug=1 lineup at several moments.
// Usage: PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers node scripts/rigshot.mjs [outDir]
import { chromium } from 'playwright';
import { preview } from 'vite';
import { mkdirSync } from 'fs';

const outDir = process.argv[2] ?? 'shots-rig';
mkdirSync(outDir, { recursive: true });

const server = await preview({ preview: { port: 4175, host: '127.0.0.1' } });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
page.on('pageerror', (e) => console.log('PAGE EXCEPTION:', e.message));

await page.goto('http://127.0.0.1:4175/?rigdebug=1');
await page.waitForTimeout(2500);
for (let i = 0; i < 5; i++) {
  await page.screenshot({ path: `${outDir}/rig-${i}.png` });
  await page.waitForTimeout(550);
}
await browser.close();
await server.close();
console.log('done');
process.exit(0);
