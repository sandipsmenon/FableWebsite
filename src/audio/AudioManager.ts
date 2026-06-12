/** Procedural WebAudio: bat crack, crowd ambience and cheers. No audio assets needed. */
export class AudioManager {
  private ctx?: AudioContext;
  private crowdGain?: GainNode;
  private muted = false;

  /** Must be called from a user gesture (browser autoplay policy). */
  init(): void {
    if (this.ctx) return;
    this.ctx = new AudioContext();
    // Crowd ambience: looped filtered noise
    const len = this.ctx.sampleRate * 2;
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      // pink-ish noise via leaky integrator
      last = last * 0.97 + (Math.random() * 2 - 1) * 0.03;
      data[i] = last * 6;
    }
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 600;
    filter.Q.value = 0.4;
    this.crowdGain = this.ctx.createGain();
    this.crowdGain.gain.value = 0.05;
    src.connect(filter).connect(this.crowdGain).connect(this.ctx.destination);
    src.start();
  }

  toggleMute(): boolean {
    this.muted = !this.muted;
    if (this.ctx) {
      if (this.muted) void this.ctx.suspend();
      else void this.ctx.resume();
    }
    return this.muted;
  }

  /** Sharp bat crack. */
  batHit(power = 1): void {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    const noise = this.ctx.createBufferSource();
    const len = this.ctx.sampleRate * 0.08;
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (len * 0.12));
    noise.buffer = buf;
    const bp = this.ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 1800;
    bp.Q.value = 1.2;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.5 * power, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
    noise.connect(bp).connect(g).connect(this.ctx.destination);
    noise.start();
  }

  /** Crowd cheer swell; intensity 0..1. */
  cheer(intensity = 1): void {
    if (!this.ctx || !this.crowdGain || this.muted) return;
    const t = this.ctx.currentTime;
    const g = this.crowdGain.gain;
    g.cancelScheduledValues(t);
    g.setValueAtTime(g.value, t);
    g.linearRampToValueAtTime(0.05 + 0.3 * intensity, t + 0.25);
    g.exponentialRampToValueAtTime(0.05, t + 2.5 + intensity * 1.5);
  }

  /** Wooden clatter for broken stumps. */
  stumpsHit(): void {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    for (let i = 0; i < 3; i++) {
      const osc = this.ctx.createOscillator();
      osc.type = 'square';
      osc.frequency.value = 320 + Math.random() * 380;
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(0.12, t + i * 0.04);
      g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.04 + 0.09);
      osc.connect(g).connect(this.ctx.destination);
      osc.start(t + i * 0.04);
      osc.stop(t + i * 0.04 + 0.1);
    }
  }

  uiTick(): void {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.frequency.value = 880;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.05, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
    osc.connect(g).connect(this.ctx.destination);
    osc.start();
    osc.stop(t + 0.06);
  }
}
