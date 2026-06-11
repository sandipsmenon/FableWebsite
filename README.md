# FABLE — the website that writes you

**Live: https://sandipsmenon.github.io/FableWebsite/**

You do not read this website. It reads you.

For its first twelve seconds, FABLE silently studies the way you move —
velocity, stillness, wandering, hesitation — and names you one of six
archetypes. The colors, the prose, the sky itself become yours. Then you are
set adrift in a cosmos with no menu and no scroll: drag the sky, drift toward
a breathing light, and dive into it — a chapter of your personal fable is
written on the spot, seeded by your motion, the hour, the season, and the
memory of every visit you've made before.

Everything is inferred on-device. Nothing leaves your browser.

- 🜂 Six motion-inferred archetypes, each owning its own palette and voice
- 🜁 Gaze-drift navigation — attention is the interface
- 🜃 A procedural narrative engine: unrepeatable, second-person chapters
- 🜄 Time-of-day skies, seasonal drift, accountless memory across visits
- ✦ Seven hidden secrets (be still; touch the margin; draw a circle; type the
  oldest opening word there is…)
- ◉ A generative pentatonic score, panned to where you dive — opt-in

Full design rationale, feature list, and architecture: [DESIGN.md](DESIGN.md)

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Pushes to the deploy branches trigger `.github/workflows/deploy.yml`, which
builds the static bundle and publishes it to GitHub Pages.
