// Chronos — FABLE's sense of when.
// The cosmos is lit differently at dawn than at midnight; winter skies
// run colder than summer ones. Long-term visitors watch the universe
// change with the clock and the calendar.

export function epoch(date = new Date()) {
  const h = date.getHours()
  if (h >= 5 && h < 9) return 'dawn'
  if (h >= 9 && h < 17) return 'day'
  if (h >= 17 && h < 21) return 'dusk'
  return 'night'
}

export function season(date = new Date()) {
  const m = date.getMonth()
  if (m >= 2 && m <= 4) return 'spring'
  if (m >= 5 && m <= 7) return 'summer'
  if (m >= 8 && m <= 10) return 'autumn'
  return 'winter'
}

// Each epoch tints the void and the prose.
export const EPOCH_LIGHT = {
  dawn:  { tint: '#2a1f3d', star: '#ffd9b8', fogDensity: 0.9, word: 'first light' },
  day:   { tint: '#101a33', star: '#ffffff', fogDensity: 0.6, word: 'broad daylight' },
  dusk:  { tint: '#33152a', star: '#ffb8c9', fogDensity: 1.0, word: 'the hour of long shadows' },
  night: { tint: '#05060e', star: '#bcd2ff', fogDensity: 1.2, word: 'deep night' },
}

export const SEASON_DRIFT = {
  spring: { driftSpeed: 1.15, bloom: 1.2, word: 'a season of beginnings' },
  summer: { driftSpeed: 1.3,  bloom: 1.35, word: 'the long bright season' },
  autumn: { driftSpeed: 0.9,  bloom: 1.0, word: 'the season of letting go' },
  winter: { driftSpeed: 0.7,  bloom: 0.8, word: 'the still cold season' },
}

export function isWeekend(date = new Date()) {
  const d = date.getDay()
  return d === 0 || d === 6
}
