// Memory — FABLE remembers without accounts.
// A small ledger in localStorage lets the site develop a relationship
// with a returning visitor: it knows how many times they have come,
// who they were last time, and which secrets they have already found.

const KEY = 'fable.memory.v1'

const blank = () => ({
  visits: 0,
  firstVisit: null,
  lastVisit: null,
  lastArchetype: null,
  archetypeHistory: [],
  secrets: [],          // ids of discovered secrets
  chaptersRead: 0,
  worldSeed: Math.floor(Math.random() * 2 ** 31),
})

export function loadMemory() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return blank()
    return { ...blank(), ...JSON.parse(raw) }
  } catch {
    return blank()
  }
}

export function saveMemory(mem) {
  try {
    localStorage.setItem(KEY, JSON.stringify(mem))
  } catch {
    /* private mode — the site simply forgets, like a dream */
  }
}

/** Called once per session: increments the visit counter and evolves the world seed. */
export function beginVisit() {
  const mem = loadMemory()
  mem.visits += 1
  const now = Date.now()
  if (!mem.firstVisit) mem.firstVisit = now
  mem.previousVisit = mem.lastVisit
  mem.lastVisit = now
  // The world drifts a little between visits — same universe, new weather.
  mem.worldSeed = (mem.worldSeed * 1664525 + 1013904223) >>> 0
  saveMemory(mem)
  return mem
}

export function rememberArchetype(mem, key) {
  mem.lastArchetype = key
  mem.archetypeHistory = [...(mem.archetypeHistory || []), key].slice(-12)
  saveMemory(mem)
}

export function rememberSecret(mem, id) {
  if (!mem.secrets.includes(id)) {
    mem.secrets = [...mem.secrets, id]
    saveMemory(mem)
    return true // newly found
  }
  return false
}

export function rememberChapter(mem) {
  mem.chaptersRead = (mem.chaptersRead || 0) + 1
  saveMemory(mem)
}
