// Headless smoke test: boots the built site, walks the full journey
// (listening → naming → drift → dive → chapter → fable), and fails on
// any console error or missing phase.
import puppeteer from 'puppeteer'
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, join } from 'node:path'

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' }
const server = createServer(async (req, res) => {
  let path = req.url.replace(/^\/FableWebsite/, '').split('?')[0]
  if (path === '/' || path === '') path = '/index.html'
  try {
    const data = await readFile(join('dist', path))
    res.writeHead(200, { 'content-type': MIME[extname(path)] || 'application/octet-stream' })
    res.end(data)
  } catch {
    res.writeHead(404); res.end()
  }
})
await new Promise((r) => server.listen(4173, r))

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--enable-unsafe-swiftshader'],
})
const page = await browser.newPage()
await page.setViewport({ width: 1280, height: 800 })
const errors = []
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message))
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()) })

await page.goto('http://localhost:4173/FableWebsite/', { waitUntil: 'domcontentloaded', timeout: 60000 })

// Act I: the listening
await page.waitForSelector('.listening', { timeout: 30000 })
console.log('✓ listening phase')

// wiggle the pointer so the Observer has something to read
for (let i = 0; i < 40; i++) {
  await page.mouse.move(200 + Math.sin(i / 3) * 300 + i * 8, 300 + Math.cos(i / 2) * 200)
  await new Promise((r) => setTimeout(r, 60))
}

// Act II: the naming (listening lasts 12 s)
await page.waitForSelector('.naming', { timeout: 20000 })
const name = await page.$eval('.archetype-name', (el) => el.textContent)
console.log('✓ naming phase — archetype:', name)
await page.screenshot({ path: 'scripts/naming.png' })

// Act III: the drift
await page.click('.ghost-btn')
await page.waitForSelector('.phase-drift', { timeout: 5000 })
console.log('✓ drift phase')

// drag the sky a little, then dive via keyboard (Enter on a woken ember)
await page.mouse.move(640, 400)
await page.mouse.down()
await page.mouse.move(900, 450, { steps: 20 })
await page.mouse.up()

// sweep the cursor until an ember wakes
let woke = false
for (let i = 0; i < 120 && !woke; i++) {
  await page.mouse.move(140 + (i * 37) % 1000, 150 + (i * 53) % 500)
  await new Promise((r) => setTimeout(r, 80))
  woke = (await page.$('.ember-call')) !== null
}
if (!woke) throw new Error('no ember woke under the cursor')
console.log('✓ ember woke')
await page.keyboard.press('Enter')

// Act IV: a chapter is written
await page.waitForSelector('.chapter', { timeout: 10000 })
const title = await page.$eval('.chapter h2', (el) => el.textContent)
console.log('✓ chapter phase —', title)
await page.screenshot({ path: 'scripts/chapter.png' })
await page.click('.chapter .ghost-btn')
await page.waitForSelector('.phase-drift', { timeout: 10000 })
console.log('✓ surfaced back to drift')

// Act V: the fable
await page.keyboard.press('f')
await page.waitForSelector('.fable-read', { timeout: 5000 })
console.log('✓ fable reader')
await page.screenshot({ path: 'scripts/fable.png' })

if (errors.length) {
  console.error('✗ console/page errors:\n' + errors.join('\n'))
  process.exit(1)
}
console.log('✓ no console errors — smoke test passed')
await browser.close()
server.close()
process.exit(0)
