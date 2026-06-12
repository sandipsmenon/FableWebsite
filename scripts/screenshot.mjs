// Headless visual verification: boots the built game and drives both the
// batting and bowling flows, capturing screenshots at key moments.
// Usage: PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers node scripts/screenshot.mjs [outDir]
import { chromium } from 'playwright';
import { preview } from 'vite';
import { mkdirSync } from 'fs';

const outDir = process.argv[2] ?? 'shots';
mkdirSync(outDir, { recursive: true });

const server = await preview({ preview: { port: 4173, host: '127.0.0.1' } });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
page.on('console', (m) => {
  if (m.type() === 'error') console.log('PAGE ERROR:', m.text());
});
page.on('pageerror', (e) => console.log('PAGE EXCEPTION:', e.message));
const shot = (name) => page.screenshot({ path: `${outDir}/${name}.png` });

// ---------- Batting flow ----------
await page.goto('http://127.0.0.1:4173/?auto=bat&seed=42');
await page.waitForTimeout(3000);
await shot('01-menu');
await page.click('#start-btn');
await page.waitForTimeout(2000);
await shot('02-bat-preball');

// Ball 1: leave (watch the bowler run-up + delivery)
await page.waitForTimeout(1800);
await shot('03-bat-runup');
await page.waitForTimeout(1400);
await shot('04-bat-delivery');
await page.waitForTimeout(2500);

// Balls 2-4: play straight-drive attempts with rough timing
for (let i = 0; i < 3; i++) {
  await page.waitForTimeout(2400); // run-up of next ball
  await page.keyboard.down('ArrowUp');
  await page.waitForTimeout(1350); // ball roughly arriving
  await page.keyboard.press('Space');
  await page.keyboard.up('ArrowUp');
  await page.waitForTimeout(400);
  await shot(`05-bat-shot-${i}`);
  await page.waitForTimeout(2600);
}
await shot('06-bat-after');
// Scorecard
await page.keyboard.press('Tab');
await page.waitForTimeout(400);
await shot('07-scorecard');
await page.keyboard.press('Tab');

// ---------- Bowling flow ----------
await page.goto('http://127.0.0.1:4173/?auto=bowl&seed=7');
await page.waitForTimeout(2500);
await page.click('#start-btn');
await page.waitForTimeout(1200);
await shot('08-bowler-select');
await page.locator('#bowler-row .btn').first().click();
await page.waitForTimeout(800);
await shot('09-delivery-select');
await page.keyboard.press('Enter'); // confirm delivery type
await page.waitForTimeout(500);
await shot('10-aim');
await page.keyboard.press('ArrowUp');
await page.keyboard.press('Enter'); // lock aim
await page.waitForTimeout(700);
await page.keyboard.press('Space'); // stop meter
await page.waitForTimeout(1600);
await shot('11-bowl-runup');
await page.waitForTimeout(1500);
await shot('12-bowl-delivery');
await page.waitForTimeout(3000);
await shot('13-bowl-after');

await browser.close();
await server.close();
console.log('Screenshots saved to', outDir);
process.exit(0);
