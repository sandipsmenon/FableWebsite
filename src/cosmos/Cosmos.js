// The Cosmos — FABLE's body.
// A drifting field of stars and story-embers rendered with Three.js.
// There is no scroll and no menu: you drag the sky itself (or steer with
// arrow keys), and embers that cross your gaze ignite into chapters.

import * as THREE from 'three'
import { mulberry32 } from '../engine/narrative.js'

const EMBER_COUNT = 22
const STAR_COUNT = 1600

function glowTexture(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)') {
  const size = 128
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  g.addColorStop(0, inner)
  g.addColorStop(0.25, 'rgba(255,255,255,0.85)')
  g.addColorStop(0.55, 'rgba(255,255,255,0.25)')
  g.addColorStop(1, outer)
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export class Cosmos {
  constructor(canvas, opts) {
    this.opts = opts
    this.reducedMotion = opts.reducedMotion
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(62, 1, 0.1, 400)
    this.camera.position.set(0, 0, 0)

    this.yaw = 0
    this.pitch = 0
    this.yawVel = 0
    this.pitchVel = 0
    this.dragging = false
    this.dragMoved = 0
    this.hovered = null
    this.diving = null      // { ember, t, dir } during dive/surface animations
    this.moodFactor = 1     // global motion multiplier (emotion-responsive)
    this.driftSpeed = opts.seasonDrift?.driftSpeed ?? 1
    this.disposed = false

    this.bgColor = new THREE.Color(opts.epochLight?.tint ?? '#05060e')
    this.targetBg = this.bgColor.clone()
    this.scene.fog = new THREE.FogExp2(this.bgColor.clone(), 0.0035 * (opts.epochLight?.fogDensity ?? 1))
    this.renderer.setClearColor(this.bgColor)

    this._buildStars(opts.seed, opts.epochLight?.star ?? '#ffffff')
    this._buildEmbers(opts.seed)
    this.constellation = null

    this._pointer = new THREE.Vector2(-10, -10)
    this._tmpV = new THREE.Vector3()
    this._bindInput(canvas)
    this.resize()
    this._clock = new THREE.Clock()
    this._raf = requestAnimationFrame(() => this._loop())
  }

  _buildStars(seed, starColor) {
    const rng = mulberry32(seed ^ 0x5f3759df)
    const pos = new Float32Array(STAR_COUNT * 3)
    const col = new Float32Array(STAR_COUNT * 3)
    const base = new THREE.Color(starColor)
    for (let i = 0; i < STAR_COUNT; i++) {
      // points on a thick shell so the sky has depth in every direction
      const r = 120 + rng() * 220
      const theta = rng() * Math.PI * 2
      const phi = Math.acos(2 * rng() - 1)
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.cos(phi)
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
      const v = 0.35 + rng() * 0.65
      col[i * 3] = base.r * v
      col[i * 3 + 1] = base.g * v
      col[i * 3 + 2] = base.b * v
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3))
    const mat = new THREE.PointsMaterial({
      size: 1.6, vertexColors: true, sizeAttenuation: true,
      map: glowTexture(), transparent: true, depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    this.stars = new THREE.Points(geo, mat)
    this.scene.add(this.stars)
  }

  _buildEmbers(seed) {
    const rng = mulberry32(seed)
    this.embers = []
    this.emberTexture = glowTexture()
    for (let i = 0; i < EMBER_COUNT; i++) {
      const r = 38 + rng() * 55
      const theta = rng() * Math.PI * 2
      // bias embers toward the visitor's natural eyeline
      const phi = Math.PI / 2 + (rng() - 0.5) * 1.9
      const pos = new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      )
      const mat = new THREE.SpriteMaterial({
        map: this.emberTexture, transparent: true, depthWrite: false,
        blending: THREE.AdditiveBlending, color: new THREE.Color('#9aa6ff'),
        opacity: 0.95,
      })
      const sprite = new THREE.Sprite(mat)
      sprite.position.copy(pos)
      const baseScale = 2.6 + rng() * 1.8
      sprite.scale.setScalar(baseScale)
      this.scene.add(sprite)
      this.embers.push({
        id: i,
        seed: Math.floor(rng() * 2 ** 31),
        sprite,
        baseScale,
        phase: rng() * Math.PI * 2,
        ignited: false,
        screen: new THREE.Vector2(10, 10),
      })
    }
  }

  /** Smoothly retint embers + sky when the visitor's archetype is named. */
  setPalette(palette) {
    this.targetBg = new THREE.Color(palette.sky)
    this._targetEmber = new THREE.Color(palette.ember)
  }

  setEpoch(epochLight) {
    this.targetBg = new THREE.Color(epochLight.tint)
  }

  /** Emotion-responsive motion: overwhelmed → near-stillness, restless → lively. */
  setMood(mood) {
    this.moodFactor = { overwhelmed: 0.25, calm: 0.7, curious: 1, restless: 1.25 }[mood] ?? 1
  }

  /** Draw faint lines linking a handful of embers — a remembered constellation. */
  igniteConstellation(seed) {
    if (this.constellation) {
      this.scene.remove(this.constellation)
      this.constellation.geometry.dispose()
      this.constellation.material.dispose()
    }
    const rng = mulberry32(seed)
    const chain = [...this.embers].sort(() => rng() - 0.5).slice(0, 6)
    const pts = []
    for (let i = 0; i < chain.length - 1; i++) {
      pts.push(chain[i].sprite.position, chain[i + 1].sprite.position)
    }
    const geo = new THREE.BufferGeometry().setFromPoints(pts)
    const mat = new THREE.LineBasicMaterial({
      color: this._targetEmber ?? new THREE.Color('#9aa6ff'),
      transparent: true, opacity: 0.22,
    })
    this.constellation = new THREE.LineSegments(geo, mat)
    this.scene.add(this.constellation)
  }

  _bindInput(canvas) {
    this._onDown = (e) => {
      if (this.diving) return
      this.dragging = true
      this.dragMoved = 0
      this._lastX = e.clientX
      this._lastY = e.clientY
    }
    this._onMove = (e) => {
      this._pointer.set(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      )
      if (!this.dragging) return
      const dx = e.clientX - this._lastX
      const dy = e.clientY - this._lastY
      this._lastX = e.clientX
      this._lastY = e.clientY
      this.dragMoved += Math.abs(dx) + Math.abs(dy)
      this.yawVel = dx * 0.0022
      this.pitchVel = dy * 0.0022
      this.opts.onDrag?.()
    }
    this._onUp = () => {
      const wasTap = this.dragging && this.dragMoved < 8
      this.dragging = false
      if (wasTap && this.hovered && !this.diving) this.opts.onSelect?.(this.hovered)
    }
    canvas.addEventListener('pointerdown', this._onDown)
    window.addEventListener('pointermove', this._onMove, { passive: true })
    window.addEventListener('pointerup', this._onUp)

    this._onKey = (e) => {
      if (this.diving) return
      const step = 0.045
      if (e.key === 'ArrowLeft') this.yawVel = step
      else if (e.key === 'ArrowRight') this.yawVel = -step
      else if (e.key === 'ArrowUp') this.pitchVel = step
      else if (e.key === 'ArrowDown') this.pitchVel = -step
      else if (e.key === 'Enter' && this.hovered) this.opts.onSelect?.(this.hovered)
      else return
      e.preventDefault()
    }
    window.addEventListener('keydown', this._onKey)
  }

  /** Fly into an ember; resolves when fully inside the light. */
  diveInto(ember) {
    return new Promise((resolve) => {
      this.diving = { ember, t: 0, dir: 1, resolve }
      this.opts.onHover?.(null)
      this.hovered = null
    })
  }

  /** Return from a chapter back into the open drift. */
  surface() {
    return new Promise((resolve) => {
      if (!this.diving) return resolve()
      this.diving = { ember: this.diving.ember, t: 1, dir: -1, resolve }
    })
  }

  resize() {
    const w = window.innerWidth
    const h = window.innerHeight
    this.renderer.setSize(w, h, false)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
  }

  _loop() {
    if (this.disposed) return
    const dt = Math.min(this._clock.getDelta(), 0.05)
    const t = this._clock.elapsedTime
    const motion = this.reducedMotion ? 0.15 : this.moodFactor

    // inertia steering
    this.yaw += this.yawVel
    this.pitch = THREE.MathUtils.clamp(this.pitch + this.pitchVel, -1.25, 1.25)
    this.yawVel *= 0.93
    this.pitchVel *= 0.93
    // perpetual gentle drift so the sky never fully sleeps
    this.yaw += dt * 0.012 * this.driftSpeed * motion

    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ'))
    this.camera.quaternion.copy(q)

    // sky breathing
    this.stars.rotation.y += dt * 0.004 * this.driftSpeed * motion
    this.bgColor.lerp(this.targetBg, 0.02)
    this.renderer.setClearColor(this.bgColor)
    this.scene.fog.color.copy(this.bgColor)

    // embers breathe, retint, and report their screen positions
    let nearest = null
    let nearestDist = 0.16 // NDC radius within which an ember wakes
    for (const ember of this.embers) {
      const breath = 1 + Math.sin(t * 1.4 * motion + ember.phase) * 0.16 * motion
      let s = ember.baseScale * breath
      if (this._targetEmber) ember.sprite.material.color.lerp(this._targetEmber, 0.03)
      this._tmpV.copy(ember.sprite.position).project(this.camera)
      const inFront = this._tmpV.z < 1
      ember.screen.set(this._tmpV.x, this._tmpV.y)
      if (inFront && !this.diving) {
        const d = Math.hypot(this._tmpV.x - this._pointer.x, this._tmpV.y - this._pointer.y)
        const dCenter = Math.hypot(this._tmpV.x, this._tmpV.y)
        const dEff = Math.min(d, dCenter) // wakes near the cursor or near gaze center
        if (dEff < nearestDist) { nearestDist = dEff; nearest = ember }
      }
      if (ember === this.hovered) s *= 1.9
      if (ember.ignited) s *= 1.25
      ember.sprite.scale.setScalar(s)
    }
    if (nearest !== this.hovered && !this.diving) {
      this.hovered = nearest
      this.opts.onHover?.(nearest)
    }

    // dive / surface animation
    if (this.diving) {
      const d = this.diving
      d.t += dt * (this.reducedMotion ? 3 : 0.9) * d.dir
      const k = THREE.MathUtils.smoothstep(THREE.MathUtils.clamp(d.t, 0, 1), 0, 1)
      // swing gaze toward the ember and narrow the field of view
      const lookQ = new THREE.Quaternion().setFromRotationMatrix(
        new THREE.Matrix4().lookAt(
          new THREE.Vector3(), d.ember.sprite.position, new THREE.Vector3(0, 1, 0)
        )
      )
      this.camera.quaternion.slerp(lookQ, k * 0.2 + 0.02)
      this.camera.fov = 62 - 38 * k
      this.camera.updateProjectionMatrix()
      d.ember.sprite.scale.setScalar(d.ember.baseScale * (1 + k * 26))
      if (d.dir === 1 && d.t >= 1) {
        const resolve = d.resolve
        d.resolve = null
        d.t = 1
        if (resolve) resolve()
      }
      if (d.dir === -1 && d.t <= 0) {
        d.ember.ignited = true
        d.ember.sprite.scale.setScalar(d.ember.baseScale)
        this.camera.fov = 62
        this.camera.updateProjectionMatrix()
        const resolve = d.resolve
        this.diving = null
        if (resolve) resolve()
      }
    }

    this.renderer.render(this.scene, this.camera)
    this._raf = requestAnimationFrame(() => this._loop())
  }

  dispose() {
    this.disposed = true
    cancelAnimationFrame(this._raf)
    window.removeEventListener('pointermove', this._onMove)
    window.removeEventListener('pointerup', this._onUp)
    window.removeEventListener('keydown', this._onKey)
    this.renderer.dispose()
  }
}
