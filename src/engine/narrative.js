// The Narrative Engine — FABLE's voice.
// A seeded procedural grammar composes a fable in real time, one chapter
// per ember the visitor dives into. The seed is woven from the visitor's
// behavior, the hour, the season, and the memory of past visits — so the
// story belongs to this person, in this moment, and can never recur.

export function mulberry32(seed) {
  let a = seed >>> 0
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const pick = (rng, arr) => arr[Math.floor(rng() * arr.length)]

// ——— word banks ————————————————————————————————————————————————

const PLACES = [
  'a sea that had forgotten its tides', 'the library at the bottom of the sky',
  'a city built from unsent letters', 'the orchard where echoes ripen',
  'a lighthouse that warned ships away from the past', 'the museum of almost',
  'a river running uphill out of stubbornness', 'the last station before the dark',
  'a garden grown entirely from maybes', 'the workshop where mornings are repaired',
  'a bridge held up by held breath', 'the valley where lost songs graze',
  'an observatory pointed inward', 'the harbor of postponed departures',
]

const BEINGS = [
  'a cartographer of feelings', 'the moth who kept the moon company',
  'a clockmaker who refused to count', 'the archivist of unfinished sentences',
  'a fox made of static and good intentions', 'the gardener of small bravery',
  'a lamplighter going from star to star', 'the keeper of borrowed time',
  'an old wind that remembered every name', 'the apprentice to silence',
]

const OBJECTS = [
  'a key that opened only questions', 'a compass that pointed at whoever was missing',
  'a jar of collected pauses', 'a map drawn on the inside of an eyelid',
  'a coin that always landed on its edge', 'a thread leading out of every maze and into another',
  'a bell that rang one second before it was needed', 'a mirror that showed you mid-becoming',
  'a lantern fueled by unspent courage', 'a book whose pages turned themselves at the good parts',
]

const TURNS = [
  'And for a long while, nothing happened — which was itself a kind of happening.',
  'The dark leaned closer, the way an audience does.',
  'Somewhere behind the stars, something old smiled and adjusted its grip on the scenery.',
  'It would have been easier to turn back. That is how all true doors are disguised.',
  'The silence said more than the telling ever could, so the telling stepped aside.',
  'What was lost did not want to be found. It wanted to be understood. There is a difference.',
]

const MORALS = {
  curious:  [
    'Not all who question are lost; some are taking inventory of the dark.',
    'The locked door and the curious hand were made in the same workshop.',
    'Every answer is just a question wearing its good clothes.',
  ],
  wistful:  [
    'What we long for longs back, in its own slow language.',
    'Some things are kept best by letting them keep themselves.',
    'The softest light travels furthest, having less to carry.',
  ],
  precise:  [
    'A careful step is a love letter to the ground.',
    'What is measured twice is feared half as much.',
    'Even the stars keep ledgers; we call them constellations.',
  ],
  warm:     [
    'The road knows you better than the destination ever will.',
    'Drift is only another word for trust with the hands open.',
    'You were never off the path. You are how the path moves.',
  ],
  steady:   [
    'What returns is never the same, and that is why it returns.',
    'Holding on and letting go use the same muscle. Practice both.',
    'The keeper is kept by the keeping.',
  ],
  playful:  [
    'The rules were written in pencil for a reason.',
    'Every maze secretly hopes someone will climb over the walls.',
    'Mischief is hope with its shoes off.',
  ],
}

const OPENERS = {
  dawn:  'In the hour when the sky was still deciding,',
  day:   'Under a sky wide awake and pretending not to watch,',
  dusk:  'As the light packed its things and lingered at the door,',
  night: 'Deep in the night, where stories go when no one is reading,',
}

const MOVE_STYLES = {
  seeker:   'someone arrived who looked at everything twice — once to see it, once to see behind it',
  dreamer:  'someone arrived so quietly that the dust kept dancing, unembarrassed',
  architect:'someone arrived counting their steps, not from fear, but from respect for distances',
  wanderer: 'someone arrived without a map and was therefore impossible to mislead',
  guardian: 'someone arrived and immediately checked that everything was where they had left it, though they had never been here',
  trickster:'someone arrived through the exit, grinning, which the doorway secretly admired',
}

// ——— composition ————————————————————————————————————————————————

export function weaveSeed({ behaviorSeed, worldSeed, date = new Date() }) {
  const t = date.getHours() * 7 + date.getMonth() * 131
  return ((behaviorSeed ^ worldSeed) + t * 2654435761) >>> 0
}

/** The opening of the visitor's fable, addressed to them. */
export function prologue(rng, { archetype, epochKey, visits }) {
  const opener = OPENERS[epochKey]
  const arrival = MOVE_STYLES[archetype.key]
  const lines = [`${opener} ${arrival}.`]
  if (visits <= 1) {
    lines.push('The stars had not been told to expect anyone. They rearranged themselves anyway.')
  } else if (visits === 2) {
    lines.push('The stars recognized the way you moved before they recognized you. "Again," they whispered, pleased.')
  } else {
    lines.push(`This is your ${ordinal(visits)} crossing. The dark has started leaving a light on for you.`)
  }
  lines.push(`They would come to be called ${archetype.name} — ${archetype.epithet}.`)
  return lines
}

/** One chapter, ignited from one ember. */
export function chapter(rng, { archetype, index }) {
  const place = pick(rng, PLACES)
  const being = pick(rng, BEINGS)
  const object = pick(rng, OBJECTS)
  const turn = pick(rng, TURNS)
  const moral = pick(rng, MORALS[archetype.tone])

  const openings = [
    `The ${archetype.name} came, in time, to ${place}.`,
    `Chapter by chapter the drift carried the ${archetype.name} to ${place}.`,
    `Past the edge of the charted dark waited ${place}.`,
  ]
  const meetings = [
    `There they met ${being}, who had been expecting someone else and was delighted to be wrong.`,
    `It was ${being} who found them first — for in such places, it is always the resident who discovers the traveler.`,
    `Living there, in the way a held note lives in a hall, was ${being}.`,
  ]
  const gifts = [
    `Before the parting, the ${archetype.name} was given ${object}. No reason was offered. None was needed.`,
    `In exchange for the visit — for visits are a currency there — they received ${object}.`,
    `Something changed hands without either of them moving: ${object}, which had decided whom it belonged to.`,
  ]

  return {
    index,
    title: chapterTitle(rng, index),
    paragraphs: [pick(rng, openings), pick(rng, meetings), turn, pick(rng, gifts)],
    moral,
  }
}

function chapterTitle(rng, index) {
  const a = ['The Hour', 'The Weight', 'The Color', 'The Shape', 'The Sound', 'The Cost', 'The Gift', 'The Edge']
  const b = ['of Unmaps', 'of Almost', 'of the Second Door', 'of Quiet Engines', 'of Borrowed Light',
             'of the Long Way', 'of Small Bravery', 'of What Returns', 'of the Unsent', 'of Open Hands']
  return `${index}. ${pick(rng, a)} ${pick(rng, b)}`
}

/** Closing words once enough chapters are gathered. */
export function epilogue(rng, { archetype, chaptersRead }) {
  return [
    `And so the fable of the ${archetype.name} pauses — not ends, for ${
      chaptersRead > 3 ? 'the deep travelers know' : 'even new travelers suspect'
    } that fables only pretend to end.`,
    'Close this sky and the story will keep walking without you for a while. It knows the way back to you now.',
    pick(rng, MORALS[archetype.tone]),
  ]
}

export function ordinal(n) {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}

// Whispers — ambient one-liners the cosmos murmurs while you drift.
const WHISPERS = {
  calm:        ['the stars slow down to match you', 'stillness is also a direction', 'you are easy to orbit'],
  curious:     ['something just moved behind that light', 'three of these stars are doors', 'closer. closer is correct'],
  restless:    ['the sky can keep up. take your time anyway', 'speed is a question the dark always answers with more dark'],
  overwhelmed: ['breathe. the universe will hold still for you', 'nothing here needs anything from you', 'rest. the story waits'],
}

export function whisper(rng, mood) {
  return pick(rng, WHISPERS[mood] || WHISPERS.curious)
}
