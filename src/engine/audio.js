// Aether — FABLE's generative score.
// No audio files: a small WebAudio graph improvises an ambient drone in a
// pentatonic scale, seeded like everything else. Ember dives ring soft
// chimes panned to where the ember was. Strictly opt-in.

const PENTATONIC = [0, 3, 5, 7, 10] // minor pentatonic intervals

export class Aether {
  constructor() {
    this.ctx = null
    this.master = null
    this.running = false
    this.root = 110 // A2
    this._droneTimer = null
  }

  enable() {
    if (this.running) return
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return
    this.ctx = new AC()
    this.master = this.ctx.createGain()
    this.master.gain.value = 0
    this.master.connect(this.ctx.destination)
    this.master.gain.linearRampToValueAtTime(0.35, this.ctx.currentTime + 3)
    this.running = true
    this._breathe()
    this._droneTimer = setInterval(() => this._breathe(), 9000)
  }

  disable() {
    if (!this.running) return
    clearInterval(this._droneTimer)
    const t = this.ctx.currentTime
    this.master.gain.cancelScheduledValues(t)
    this.master.gain.setValueAtTime(this.master.gain.value, t)
    this.master.gain.linearRampToValueAtTime(0, t + 1.2)
    const ctx = this.ctx
    setTimeout(() => ctx.close().catch(() => {}), 1600)
    this.running = false
    this.ctx = null
  }

  _note(degree, octave = 0) {
    return this.root * Math.pow(2, (PENTATONIC[degree % 5] + 12 * octave) / 12)
  }

  /** A slow swelling drone chord — the breath of the cosmos. */
  _breathe() {
    if (!this.running) return
    const t = this.ctx.currentTime
    const degrees = [0, Math.floor(Math.random() * 5), Math.floor(Math.random() * 5)]
    degrees.forEach((deg, i) => {
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()
      osc.type = i === 0 ? 'sine' : 'triangle'
      osc.frequency.value = this._note(deg, i === 2 ? 1 : 0)
      osc.detune.value = (Math.random() - 0.5) * 12
      gain.gain.setValueAtTime(0, t)
      gain.gain.linearRampToValueAtTime(0.06 / (i + 1), t + 4)
      gain.gain.linearRampToValueAtTime(0, t + 11)
      osc.connect(gain).connect(this.master)
      osc.start(t)
      osc.stop(t + 12)
    })
  }

  /** Chime when an ember ignites; panned to its screen position (-1..1). */
  chime(pan = 0, brightness = 0) {
    if (!this.running) return
    const t = this.ctx.currentTime
    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()
    const panner = this.ctx.createStereoPanner
      ? this.ctx.createStereoPanner()
      : null
    osc.type = 'sine'
    osc.frequency.value = this._note(Math.floor(Math.random() * 5), 2 + (brightness > 0.5 ? 1 : 0))
    gain.gain.setValueAtTime(0, t)
    gain.gain.linearRampToValueAtTime(0.12, t + 0.02)
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 2.4)
    if (panner) {
      panner.pan.value = Math.max(-1, Math.min(1, pan))
      osc.connect(gain).connect(panner).connect(this.master)
    } else {
      osc.connect(gain).connect(this.master)
    }
    osc.start(t)
    osc.stop(t + 2.6)
  }
}
