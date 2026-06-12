import { chromium } from 'playwright';
import { preview } from 'vite';
import { mkdirSync } from 'fs';
mkdirSync('shots-ball', { recursive: true });
const server = await preview({ preview: { port: 4176, host: '127.0.0.1' } });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 960, height: 540 } });
await page.goto('http://127.0.0.1:4176/?auto=bat&seed=42');
await page.waitForTimeout(2500);
await page.click('#start-btn');
await page.waitForTimeout(2000);
// run-up ~2.4s then release; snap frames through delivery + contact
await page.waitForTimeout(900);
for (let i = 0; i < 16; i++) {
  await page.screenshot({ path: `shots-ball/f-${String(i).padStart(2,'0')}.png` });
  await page.waitForTimeout(150);
}
await browser.close(); await server.close();
console.log('done');
process.exit(0);
