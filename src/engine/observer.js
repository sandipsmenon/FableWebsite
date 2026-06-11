// The Observer — FABLE's sensory organ.
// It watches the way a visitor moves (never who they are) and condenses
// that motion into a temporary psychological sketch: an archetype and a
// live emotional weather reading. Everything is inferred client-side,
// nothing leaves the browser.

export const ARCHETYPES = {
  seeker: {
    name: 'Seeker',
    epithet: 'the one who moves toward what is hidden',
    palette: { sky: '#070b1a', ember: '#7fd4ff', accent: '#3a7bd5', ink: '#d9ecff', haze: '#10204a' },
    tone: 'curious',
  },
  dreamer: {
    name: 'Dreamer',
    epithet: 'the one who lingers where the light is soft',
    palette: { sky: '#0d0716', ember: '#d6a8ff', accent: '#8e5ad8', ink: '#f0e4ff', haze: '#2a1545' },
    tone: 'wistful',
  },
  architect: {
    name: 'Architect',
    epithet: 'the one who measures the dark before crossing it',
    palette: { sky: '#060d0d', ember: '#9affd6', accent: '#2bbf9a', ink: '#dcfff2', haze: '#0d2b26' },
    tone: 'precise',
  },
  wanderer: {
    name: 'Wanderer',
    epithet: 'the one who trusts the drift',
    palette: { sky: '#0e0a06', ember: '#ffc97f', accent: '#d58f3a', ink: '#ffeed9', haze: '#3a2410' },
    tone: 'warm',
  },
  guardian: {
    name: 'Guardian',
    epithet: 'the one who returns to what matters',
    palette: { sky: '#0a0810', ember: '#ff9fb2', accent: '#c85a78', ink: '#ffe4ea', haze: '#33121f' },
    tone: 'steady',
  },
  trickster: {
    name: 'Trickster',
    epithet: 'the one the map was not drawn for',
    palette: { sky: '#0b0612', ember: '#c8ff7f', accent: '#7fd53a', ink: '#f2ffd9', haze: '#1f3310' },
    tone: 'playful',
  },
}

export class Observer {
  constructor() {
    this.samples = []          // recent pointer samples {x, y, t}
    this.clicks = 0
    this.directionChanges = 0
    this.stillnessMs = 0       // accumulated time spent nearly motionless
    this.coverage = new Set()  // visited cells of a 12x8 screen grid
    this.totalDistance = 0
    this.startedAt = performance.now()
    this.lastSample = null
    this.lastHeading = null
    this._lastTick = performance.now()
    this.listeners = new Set()

    this._onMove = this._onMove.bind(this)
    this._onDown = this._onDown.bind(this)
    window.addEventListener('pointermove', this._onMove, { passive: true })
    window.addEventListener('pointerdown', this._onDown, { passive: true })
    this._interval = setInterval(() => this._tick(), 500)
  }

  destroy() {
    window.removeEventListener('pointermove', this._onMove)
    window.removeEventListener('pointerdown', this._onDown)
    clearInterval(this._interval)
  }

  _onMove(e) {
    const t = performance.now()
    const s = { x: e.clientX, y: e.clientY, t }
    if (this.lastSample) {
      const dx = s.x - this.lastSample.x
      const dy = s.y - this.lastSample.y
      const d = Math.hypot(dx, dy)
      this.totalDistance += d
      if (d > 2) {
        const heading = Math.atan2(dy, dx)
        if (this.lastHeading != null) {
          let diff = Math.abs(heading - this.lastHeading)
          if (diff > Math.PI) diff = 2 * Math.PI - diff
          if (diff > Math.PI / 2) this.directionChanges++
        }
        this.lastHeading = heading
      }
    }
    this.lastSample = s
    this.samples.push(s)
    if (this.samples.length > 240) this.samples.splice(0, this.samples.length - 240)
    const cx = Math.floor((s.x / window.innerWidth) * 12)
    const cy = Math.floor((s.y / window.innerHeight) * 8)
    this.coverage.add(cx + ':' + cy)
  }

  _onDown() {
    this.clicks++
  }

  _tick() {
    const now = performance.now()
    const dt = now - this._lastTick
    this._lastTick = now
    // motionless if no sample arrived in the last half-second
    if (!this.lastSample || now - this.lastSample.t > 450) this.stillnessMs += dt
    const reading = this.read()
    this.listeners.forEach((fn) => fn(reading))
  }

  onReading(fn) {
    this.listeners.add(fn)
    return () => this.listeners.delete(fn)
  }

  /** Average pointer speed (px/s) over the recent window. */
  recentSpeed() {
    if (this.samples.length < 2) return 0
    let dist = 0
    for (let i = 1; i < this.samples.length; i++) {
      dist += Math.hypot(
        this.samples[i].x - this.samples[i - 1].x,
        this.samples[i].y - this.samples[i - 1].y
      )
    }
    const span = (this.samples[this.samples.length - 1].t - this.samples[0].t) / 1000
    return span > 0 ? dist / span : 0
  }

  /** Live emotional weather: calm | curious | restless | overwhelmed */
  mood() {
    const speed = this.recentSpeed()
    const elapsed = (performance.now() - this.startedAt) / 1000
    const turnRate = this.directionChanges / Math.max(elapsed, 1)
    if (speed > 1400 || turnRate > 3.2) return 'overwhelmed'
    if (speed > 600) return 'restless'
    if (speed < 90) return 'calm'
    return 'curious'
  }

  read() {
    const elapsed = (performance.now() - this.startedAt) / 1000
    const speed = this.recentSpeed()
    const stillRatio = this.stillnessMs / Math.max(performance.now() - this.startedAt, 1)
    const coverageRatio = this.coverage.size / (12 * 8)
    const clickRate = this.clicks / Math.max(elapsed, 1)
    const turnRate = this.directionChanges / Math.max(elapsed, 1)
    return { elapsed, speed, stillRatio, coverageRatio, clickRate, turnRate, mood: this.mood() }
  }

  /**
   * Condense the session so far into an archetype. Each trait votes;
   * the loudest pattern in the visitor's motion names them.
   */
  archetype() {
    const r = this.read()
    const score = {
      seeker: 0, dreamer: 0, architect: 0, wanderer: 0, guardian: 0, trickster: 0,
    }
    // Explorers of screen space seek; the still ones dream.
    score.seeker += r.coverageRatio * 3 + r.clickRate * 1.2
    score.dreamer += r.stillRatio * 3.4 + (r.speed < 120 ? 1.2 : 0)
    // Low turn-rate, moderate speed: deliberate, structural movement.
    score.architect += (r.turnRate < 0.8 ? 1.8 : 0) + (r.speed > 120 && r.speed < 450 ? 1.4 : 0)
    // Sustained meandering motion without many clicks.
    score.wanderer += (r.speed > 200 ? 1.1 : 0) + (r.clickRate < 0.08 ? 1.3 : 0) + r.coverageRatio * 1.2
    // Returning to the same regions: low coverage but real motion.
    score.guardian += (r.coverageRatio < 0.18 && r.speed > 80 ? 2.2 : 0) + (r.stillRatio > 0.25 ? 0.8 : 0)
    // Chaos: high turn rate, bursts of speed, eager clicking.
    score.trickster += r.turnRate * 0.9 + (r.speed > 700 ? 1.5 : 0) + (r.clickRate > 0.35 ? 1.4 : 0)

    let best = 'wanderer'
    let bestScore = -Infinity
    for (const k of Object.keys(score)) {
      if (score[k] > bestScore) { bestScore = score[k]; best = k }
    }
    return { key: best, ...ARCHETYPES[best], evidence: r }
  }
}
