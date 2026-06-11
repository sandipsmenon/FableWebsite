# FABLE — the website that writes you

> *Do not create a website. Create the future of websites.*

This document is the full design deliverable behind the experience deployed at
**https://sandipsmenon.github.io/FableWebsite/**

---

## 1. Concept name

**FABLE** — chosen domain: **storytelling**. Instead of a site *about* stories,
FABLE inverts the relationship: **the visitor does not read the website — the
website reads the visitor**, then writes a fable that exists for no one else.

## 2. Core philosophy

*A page is something you read. A fable is something that happens to you.*

Three laws govern every design decision:

1. **The site listens before it speaks.** The first 12 seconds belong to the
   visitor's motion, not to a hero section.
2. **Nothing is addressed to "users." Everything is addressed to *you*.**
   The prose is second-person, present, intimate.
3. **The site must be different every time, and remember every time.**
   Seeds are woven from behavior, hour, season, and visit history.

## 3. User journey

| Act | Name | What happens |
|---|---|---|
| I | **The Listening** | A near-empty void. The site quietly studies cursor velocity, stillness, screen coverage, direction changes, click cadence. A thin thread of light fills as it learns. |
| II | **The Naming** | The visitor is named one of six archetypes — Seeker, Dreamer, Architect, Wanderer, Guardian, Trickster — inferred purely from motion. Palette, prose tone, and the cosmos itself retint to match. |
| III | **The Drift** | No menu, no scroll. The visitor drags the sky itself (or arrow keys). Story-embers breathe in 3D space; one that crosses their gaze wakes. |
| IV | **The Chapters** | Tapping a waking ember dives the camera into its light, and the Narrative Engine composes a chapter seeded by that ember, this visitor, this hour. |
| V | **The Fable** | Chapters accumulate into a readable fable (press F). Five chapters unlock the epilogue. Leaving doesn't end it — the site remembers. |

## 4. Revolutionary interaction model

**Gaze-drift navigation.** The world is a sphere of story-matter around the
camera. You navigate by *attention*: dragging the sky steers your gaze with
inertia; objects near your gaze-center (or cursor) wake up by proximity.
There are no clickable labels — interest itself is the click precursor.
Fully keyboard-operable (arrows + Enter) and touch-native (the gaze-center
proximity rule means mobile users never need hover).

## 5. Visual language system

- **Ink on a living sky** — one serif voice (the storyteller) for all prose,
  one small-caps sans voice (the machine) for system whispers.
- **Color is earned, not chosen**: the page boots in neutral indigo; the
  visitor's archetype owns the palette (six bespoke palettes), applied as CSS
  custom properties and lerped into the WebGL scene.
- **Light is the only ornament**: no borders, cards, or panels — meaning is
  carried by glow, blur, and breath.

## 6. Motion system

- Everything organic moves on **breath curves** (sine, 1.4–5 s periods).
- Story moments use a single signature ease: `cubic-bezier(0.16, 1, 0.3, 1)`
  with blur-to-focus "ink drying" reveals.
- Navigation uses **inertial physics** (velocity + damping), never tweens.
- `prefers-reduced-motion` collapses all breathing and slows nothing down for
  the reader: text appears in ≤0.6 s.

## 7. AI architecture

All inference is **client-side, private, and instant** (nothing leaves the
browser — stated to the visitor in the first sentence):

- **Observer** — behavioral telemetry → 6-way archetype classifier + live
  mood estimator (calm / curious / restless / overwhelmed).
- **Narrative Engine** — a seeded procedural grammar (word-banks × archetype
  tone × epoch × memory) so every chapter is reproducible *within* a session
  and unrepeatable *across* sessions.
- **Chronos** — time-of-day and season modulate light, fog, drift speed, prose.
- **Memory** — accountless localStorage ledger: visit count, archetype
  history, secrets found, evolving world seed.

## 8. Twenty features that don't exist elsewhere

1. The site reads you for 12 seconds before showing anything.
2. Motion-inferred personality archetypes (6) that own the entire palette.
3. Second-person procedural fable with you as protagonist.
4. Gaze-drift navigation — attention is the cursor.
5. Embers that wake by proximity to your gaze, not hover targets.
6. Live mood detection; an overwhelmed visitor gets a simplified, slower UI.
7. A whisper channel that talks to your current mood.
8. Time-of-day lighting (dawn/day/dusk/night skies and prose).
9. Seasonal drift-speed and bloom (winter is slower and dimmer).
10. Weekend-aware greeting secret.
11. Accountless memory — the site greets your *n*-th crossing by ordinal.
12. World seed that mutates between visits: same universe, new weather.
13. Drawing a full circle in the sky ignites a permanent constellation.
14. Typing "once" (as in *once upon a time*) opens a secret.
15. 45 seconds of stillness is rewarded, not timed out.
16. The page margin (top-left corner) is itself a secret.
17. Five chapters unlock a self-writing epilogue.
18. Generative pentatonic score with ember chimes panned to where you dove.
19. Chapters are seeded by ember × visitor × hour — unrepeatable text.
20. Returning visitors find their constellation already burning.

## 9. Technical architecture

- **React 18** (UI state machine) + **Three.js** (WebGL cosmos) + **Vite**.
- Imperative `Cosmos` class owns the render loop; React owns story state;
  refs bridge them so no closure ever goes stale.
- WebAudio generative score (no audio assets; ~0 bytes of media shipped).
- Deployed as a fully static bundle via GitHub Actions → GitHub Pages.
- Performance: additive-blended point sprites (1,600 stars + 22 embers),
  pixel-ratio capped at 2, single RAF loop — 60 fps on mobile.

## 10. Component map

```
index.html (pre-paint void, noscript fable)
└─ src/main.jsx
   └─ App.jsx ............ phase machine: listening → naming → drift ⇄ chapter / fable
      ├─ cosmos/Cosmos.js  WebGL world: stars, embers, constellation, dive camera
      ├─ engine/observer.js telemetry → archetype + mood
      ├─ engine/narrative.js seeded grammar → prologue/chapters/epilogue/whispers
      ├─ engine/memory.js   accountless remembrance (localStorage)
      ├─ engine/chronos.js  epoch + season light tables
      └─ engine/audio.js    generative WebAudio score
```

## 11. Animation specifications

| Moment | Duration | Curve |
|---|---|---|
| Veil entrance | 1.6 s | ease |
| Archetype naming | 2.4 s | cubic-bezier(0.16,1,0.3,1), blur 8→0 px, tracking 0.5→0.18 em |
| Chapter lines | 1.8 s, staggered 0.9 s | "ink drying": blur 4→0, y 10→0 |
| Ember breath | 1.4 s sine, ±16 % scale | phase-offset per ember |
| Dive | ~1.1 s | smoothstep; FOV 62°→24°, ember scale ×27 |
| Whisper | 11 s loop | fade in 12 %, hold to 80 % |

## 12. Micro-interactions

Ember wake (×1.9 scale + call-line), grab/grabbing cursor on the sky,
sigil buttons that glow only when needed, chime panned to dive position,
toast that names each secret like a title earned.

## 13. Hidden discovery systems

Seven secrets (patience, margin, orbit, incantation, night, weekend,
pilgrimage), persisted across visits, with a quiet ✦ counter — designed so a
tenth visit can still surprise.

## 14. Viral mechanics

The fable itself is the share object: unrepeatable text people screenshot
("the website called me a Trickster and wrote this about me"), archetype
identity ("which one did you get?"), and secret-hunting folklore.

## 15. Awards strategy

Lead with the inversion (*the site reads you first*), demo the naming moment
in the first 15 seconds of the case study film, document the privacy-first
on-device inference, and let judges discover one secret on their own — the
jury becomes the testimonial.
