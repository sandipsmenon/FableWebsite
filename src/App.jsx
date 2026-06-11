// FABLE — the website that writes you.
// There is no landing page here, no nav bar, no scroll. A visitor is
// listened to, named, and set adrift in a cosmos that writes a fable
// about the way they move through it.

import { useEffect, useRef, useState, useCallback } from 'react'
import { Cosmos } from './cosmos/Cosmos.js'
import { Observer } from './engine/observer.js'
import {
  beginVisit, rememberArchetype, rememberSecret, rememberChapter, loadMemory,
} from './engine/memory.js'
import { epoch, season, EPOCH_LIGHT, SEASON_DRIFT, isWeekend } from './engine/chronos.js'
import {
  mulberry32, weaveSeed, prologue, chapter, epilogue, whisper, ordinal,
} from './engine/narrative.js'
import { Aether } from './engine/audio.js'

const LISTENING_SECONDS = 12

const SECRETS = {
  patience:  { id: 'patience',  title: 'The Patient One',      line: 'You did nothing for a long while, beautifully. The dark approves of those who can be still inside it.' },
  margin:    { id: 'margin',    title: 'The Margin Walker',    line: 'You found the corner of the page. Most readers never touch the margins, where the story keeps its spare parts.' },
  circle:    { id: 'circle',    title: 'The Orbit Drawn',      line: 'You drew a circle in the sky, and the sky drew one back. A constellation now remembers your hand.' },
  incant:    { id: 'incant',    title: 'The First Word',       line: 'You typed the oldest opening there is. Somewhere, every story that ever began with it turned to look at you.' },
  nightowl:  { id: 'nightowl',  title: 'Keeper of Late Hours', line: 'You came in deep night, when the site speaks more honestly. It will remember your hour.' },
  pilgrim:   { id: 'pilgrim',   title: 'The Pilgrim',          line: 'Five chapters deep. Few drift this far. The epilogue has unlocked itself for you.' },
  weekender: { id: 'weekender', title: 'The Unhurried',        line: 'A weekend traveler. The cosmos sets a slower table for those who arrive with nowhere else to be.' },
}

export default function App() {
  const canvasRef = useRef(null)
  const cosmosRef = useRef(null)
  const observerRef = useRef(null)
  const aetherRef = useRef(null)
  const rngRef = useRef(null)
  const memRef = useRef(null)

  const [phase, setPhase] = useState('listening') // listening | naming | drift | chapter | fable
  const [archetype, setArchetype] = useState(null)
  const [whisperLine, setWhisperLine] = useState('')
  const [hoveredEmber, setHoveredEmber] = useState(null)
  const [activeChapter, setActiveChapter] = useState(null)
  const [chapters, setChapters] = useState([])
  const [prologueLines, setPrologueLines] = useState([])
  const [toast, setToast] = useState(null)
  const [audioOn, setAudioOn] = useState(false)
  const [visits, setVisits] = useState(1)
  const [secretCount, setSecretCount] = useState(0)
  const [simplified, setSimplified] = useState(false)
  const [listenProgress, setListenProgress] = useState(0)

  // refs mirror state so long-lived closures (the Cosmos) never go stale
  const phaseRef = useRef(phase)
  phaseRef.current = phase
  const chaptersRef = useRef(chapters)
  chaptersRef.current = chapters
  const selectEmberRef = useRef(null)

  const epochKey = useRef(epoch()).current
  const seasonKey = useRef(season()).current

  const foundSecret = useCallback((id) => {
    const mem = memRef.current
    const secret = SECRETS[id]
    if (!secret || !mem) return
    const isNew = rememberSecret(mem, id)
    if (isNew) {
      setSecretCount(mem.secrets.length)
      setToast(secret)
      setTimeout(() => setToast((t) => (t === secret ? null : t)), 7000)
      if (id === 'circle') cosmosRef.current?.igniteConstellation(mem.worldSeed ^ 0xc1c1e)
    }
  }, [])

  // ——— boot: memory, observer, cosmos ————————————————————————
  useEffect(() => {
    const mem = beginVisit()
    memRef.current = mem
    setVisits(mem.visits)
    setSecretCount(mem.secrets.length)

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const observer = new Observer()
    observerRef.current = observer
    aetherRef.current = new Aether()

    const cosmos = new Cosmos(canvasRef.current, {
      seed: mem.worldSeed,
      epochLight: EPOCH_LIGHT[epochKey],
      seasonDrift: SEASON_DRIFT[seasonKey],
      reducedMotion,
      onHover: (e) => setHoveredEmber(e),
      onSelect: (e) => selectEmberRef.current?.(e),
    })
    cosmosRef.current = cosmos
    const onResize = () => cosmos.resize()
    window.addEventListener('resize', onResize)

    // returning visitors find their constellation already burning
    if (mem.secrets.includes('circle')) cosmos.igniteConstellation(mem.worldSeed ^ 0xc1c1e)

    // mood feeds the cosmos and may simplify the interface
    const offReading = observer.onReading((r) => {
      cosmos.setMood(r.mood)
      setSimplified(r.mood === 'overwhelmed')
    })

    if (epochKey === 'night') foundSecret('nightowl')
    if (isWeekend()) foundSecret('weekender')

    return () => {
      window.removeEventListener('resize', onResize)
      offReading()
      observer.destroy()
      cosmos.dispose()
      aetherRef.current?.disable()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ——— the listening: 12 seconds of being read ————————————————
  useEffect(() => {
    if (phase !== 'listening') return
    const started = performance.now()
    const iv = setInterval(() => {
      const p = (performance.now() - started) / (LISTENING_SECONDS * 1000)
      setListenProgress(Math.min(p, 1))
      if (p >= 1) {
        clearInterval(iv)
        const a = observerRef.current.archetype()
        setArchetype(a)
        rememberArchetype(memRef.current, a.key)
        applyPalette(a.palette)
        cosmosRef.current?.setPalette(a.palette)

        const behaviorSeed = Math.floor(
          (a.evidence.speed * 31 + a.evidence.coverageRatio * 9973 + a.evidence.turnRate * 131071) * 1000
        ) >>> 0
        const rng = mulberry32(weaveSeed({ behaviorSeed, worldSeed: memRef.current.worldSeed }))
        rngRef.current = rng
        setPrologueLines(prologue(rng, { archetype: a, epochKey, visits: memRef.current.visits }))
        setPhase('naming')
      }
    }, 120)
    return () => clearInterval(iv)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  // ——— whispers while drifting ————————————————————————————————
  useEffect(() => {
    if (phase !== 'drift') return
    const speak = () => {
      const mood = observerRef.current?.mood() ?? 'curious'
      setWhisperLine(whisper(rngRef.current ?? Math.random, mood))
    }
    speak()
    const iv = setInterval(speak, 11000)
    return () => clearInterval(iv)
  }, [phase])

  // ——— hidden discovery layer ————————————————————————————————
  useEffect(() => {
    let lastActivity = performance.now()
    let cornerSince = null
    let typed = ''
    let dragAngle = 0
    let lastVec = null

    const onAnyActivity = () => { lastActivity = performance.now() }
    const onMove = (e) => {
      lastActivity = performance.now()
      // the margin: hold the very corner of the page
      if (e.clientX < 28 && e.clientY < 28) {
        if (!cornerSince) cornerSince = performance.now()
        else if (performance.now() - cornerSince > 1500) { foundSecret('margin'); cornerSince = null }
      } else cornerSince = null
      // the orbit: draw a full circle in one gesture
      if (e.buttons > 0) {
        const v = { x: e.movementX, y: e.movementY }
        if (Math.hypot(v.x, v.y) > 2) {
          if (lastVec) {
            const cross = lastVec.x * v.y - lastVec.y * v.x
            const dot = lastVec.x * v.x + lastVec.y * v.y
            dragAngle += Math.atan2(cross, dot)
            if (Math.abs(dragAngle) > Math.PI * 2.1) { foundSecret('circle'); dragAngle = 0 }
          }
          lastVec = v
        }
      } else { dragAngle = 0; lastVec = null }
    }
    const onKey = (e) => {
      lastActivity = performance.now()
      if (e.key.length === 1) {
        typed = (typed + e.key.toLowerCase()).slice(-4)
        if (typed === 'once') foundSecret('incant')
      }
    }
    const idleCheck = setInterval(() => {
      if (performance.now() - lastActivity > 45000) {
        foundSecret('patience')
        lastActivity = performance.now()
      }
    }, 5000)

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onAnyActivity, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => {
      clearInterval(idleCheck)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onAnyActivity)
      window.removeEventListener('keydown', onKey)
    }
  }, [foundSecret])

  // ——— ember dive → a chapter is written ——————————————————————
  const selectEmber = useCallback(async (ember) => {
    if (!cosmosRef.current || !rngRef.current) return
    if (phaseRef.current !== 'drift') return
    setPhase('diving')
    const mem = memRef.current
    const a = observerRef.current.archetype()
    aetherRef.current?.chime(ember.screen?.x ?? 0, Math.random())
    await cosmosRef.current.diveInto(ember)
    const index = chaptersRef.current.length + 1
    const ch = chapter(mulberry32(ember.seed ^ mem.worldSeed), { archetype: a, index })
    setActiveChapter(ch)
    setChapters((cs) => [...cs, ch])
    rememberChapter(mem)
    if (index >= 5) foundSecret('pilgrim')
    setPhase('chapter')
  }, [foundSecret])
  selectEmberRef.current = selectEmber

  const closeChapter = useCallback(async () => {
    setActiveChapter(null)
    setPhase('surfacing')
    await cosmosRef.current?.surface()
    setPhase('drift')
  }, [])

  const toggleAudio = useCallback(() => {
    setAudioOn((on) => {
      if (on) aetherRef.current?.disable()
      else aetherRef.current?.enable()
      return !on
    })
  }, [])

  // keyboard: F opens the fable, Escape closes overlays
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (phase === 'chapter') closeChapter()
        else if (phase === 'fable') setPhase('drift')
      }
      if ((e.key === 'f' || e.key === 'F') && phase === 'drift' && chapters.length > 0) {
        setPhase('fable')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [phase, chapters.length, closeChapter])

  const mem = memRef.current ?? loadMemory()

  return (
    <div className={`fable ${simplified ? 'simplified' : ''} phase-${phase}`}>
      <canvas
        ref={canvasRef}
        className="cosmos"
        role="application"
        aria-label="The Fable cosmos. Drag anywhere or use the arrow keys to drift through the sky. When a light brightens under your gaze, press Enter or tap it to open a chapter of your story."
      />

      {/* The Listening — the site reads you before you read it */}
      {phase === 'listening' && (
        <section className="veil listening" aria-live="polite">
          <h1 className="title">FABLE</h1>
          <p className="murmur">
            {visits > 1
              ? `Your ${ordinal(visits)} crossing. Move as you like — I remember how you move, but people change.`
              : 'Move as you like. I am learning the way you move — nothing more, and nothing leaves this page.'}
          </p>
          <div className="listen-track" aria-hidden="true">
            <div className="listen-fill" style={{ transform: `scaleX(${listenProgress})` }} />
          </div>
          <p className="fineprint">{EPOCH_LIGHT[epochKey].word} · {SEASON_DRIFT[seasonKey].word}</p>
        </section>
      )}

      {/* The Naming — the archetype is revealed */}
      {phase === 'naming' && archetype && (
        <section className="veil naming" aria-live="polite">
          <p className="murmur">You move like a</p>
          <h1 className="archetype-name">{archetype.name}</h1>
          <p className="epithet">{archetype.epithet}</p>
          <div className="prologue">
            {prologueLines.map((l, i) => <p key={i} style={{ animationDelay: `${1 + i * 1.4}s` }}>{l}</p>)}
          </div>
          <button className="ghost-btn" onClick={() => setPhase('drift')}>
            step into the sky
          </button>
        </section>
      )}

      {/* The Drift — ambient HUD, no chrome */}
      {(phase === 'drift' || phase === 'diving' || phase === 'surfacing') && (
        <>
          <p className="whisper" aria-live="polite">{whisperLine}</p>
          {!simplified && hoveredEmber && phase === 'drift' && (
            <p className="ember-call">an ember is listening — tap it, or press Enter</p>
          )}
          {!simplified && !hoveredEmber && phase === 'drift' && chapters.length === 0 && (
            <p className="hint">drag the sky · drift toward a light</p>
          )}
          {simplified && (
            <p className="hint calm-hint">breathe. nothing here is urgent.</p>
          )}
        </>
      )}

      {/* A Chapter — written for this dive alone */}
      {phase === 'chapter' && activeChapter && (
        <article className="veil chapter" aria-live="polite">
          <h2>{activeChapter.title}</h2>
          {activeChapter.paragraphs.map((p, i) => (
            <p key={i} style={{ animationDelay: `${0.4 + i * 0.9}s` }}>{p}</p>
          ))}
          <p className="moral" style={{ animationDelay: `${0.4 + activeChapter.paragraphs.length * 0.9}s` }}>
            {activeChapter.moral}
          </p>
          <button className="ghost-btn" onClick={closeChapter}>return to the drift</button>
        </article>
      )}

      {/* The Fable — everything written for you so far */}
      {phase === 'fable' && (
        <article className="veil fable-read">
          <h2>The Fable of the {archetype?.name}</h2>
          {prologueLines.map((l, i) => <p key={'p' + i}>{l}</p>)}
          {chapters.map((ch) => (
            <div key={ch.index}>
              <h3>{ch.title}</h3>
              {ch.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              <p className="moral">{ch.moral}</p>
            </div>
          ))}
          {mem.secrets.includes('pilgrim') && rngRef.current &&
            epilogue(rngRef.current, { archetype, chaptersRead: chapters.length }).map((l, i) => (
              <p key={'e' + i} className="moral">{l}</p>
            ))}
          <button className="ghost-btn" onClick={() => setPhase('drift')}>fold the page</button>
        </article>
      )}

      {/* Secret found */}
      {toast && (
        <aside className="toast" role="status">
          <strong>{toast.title}</strong>
          <span>{toast.line}</span>
        </aside>
      )}

      {/* The only persistent chrome: three quiet sigils */}
      {phase !== 'listening' && (
        <nav className="sigils" aria-label="Fable controls">
          <button className="sigil" onClick={toggleAudio} aria-pressed={audioOn}
            aria-label={audioOn ? 'Silence the cosmos' : 'Let the cosmos sing (generative audio)'}>
            {audioOn ? '◉' : '◎'}
          </button>
          {chapters.length > 0 && phase === 'drift' && (
            <button className="sigil" onClick={() => setPhase('fable')}
              aria-label={`Read your fable so far: ${chapters.length} chapter${chapters.length > 1 ? 's' : ''}`}>
              ❡<em>{chapters.length}</em>
            </button>
          )}
          {secretCount > 0 && (
            <span className="sigil counter" title={`${secretCount} of ${Object.keys(SECRETS).length} secrets found`}
              aria-label={`${secretCount} of ${Object.keys(SECRETS).length} secrets found`}>
              ✦<em>{secretCount}</em>
            </span>
          )}
        </nav>
      )}
    </div>
  )
}

function applyPalette(p) {
  const r = document.documentElement.style
  r.setProperty('--ink', p.ink)
  r.setProperty('--accent', p.accent)
  r.setProperty('--ember', p.ember)
  r.setProperty('--haze', p.haze)
}
