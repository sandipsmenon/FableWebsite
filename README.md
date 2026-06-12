# Fable Cricket 🏏

A full-match 3D cricket game in the browser, inspired by EA Sports Cricket. Built with Three.js + TypeScript. You bat **and** bowl through complete two-innings matches with scorecards, a 3D stadium, animated players and broadcast cameras.

**Play it:** https://sandipsmenon.github.io/FableWebsite/cricket/

## Features

- **Formats:** Quick Bash (2 overs), Five5 (5 overs), Twenty20 — with bowler quotas and full match rules
- **Batting:** timing-based shots in 8 directions, grounded/lofted/defensive, edges, LBW, bowled, risky extra runs
- **Bowling:** pick your delivery (swing, bouncer, yorker, off/leg spin, googly), aim a pitch marker, hit the power meter; AI batters play pressure-aware shots
- **Fielding:** 9 fielders + keeper with interception, catches, throws, run-outs, boundary detection
- **Match sim:** two named squads with batting/bowling/fielding ratings, full scorecards, fall of wickets, toss, target chases
- **Visuals:** 3D stadium with tiered crowd stands, floodlights, ad boards, live in-stadium scoreboard, procedural grass/pitch textures, sky shader, dynamic shadows, ball trail, exploding stumps, broadcast camera direction
- **Audio:** procedural bat crack and crowd reactions (WebAudio, no assets)

## Controls

| Action | Keys |
|---|---|
| Shot direction (batting) | Arrow keys / WASD (hold) — right = off side |
| Ground shot / Lofted / Block | `Space` / `L` / `K` (timing matters!) |
| Risky extra run | `R` |
| Delivery select (bowling) | `↑` `↓` then `Enter` |
| Aim pitch marker | Arrow keys, `Enter` to lock |
| Power meter | `Space` |
| Scorecard | `Tab` |
| Mute | `M` |

## Development

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # physics + match-logic test suite (incl. full AI-vs-AI auto-sim)
npm run build      # production build to dist/
```

The simulation core (`src/sim`, `src/match`) is pure TypeScript with no DOM/Three.js dependencies, so the whole game logic runs headlessly in tests.

Deployment: pushes to the game branch run `.github/workflows/deploy.yml`, which tests, builds, and publishes `dist/` to the `cricket/` folder of the `gh-pages` branch.
