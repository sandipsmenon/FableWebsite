import { InningsState, MatchState } from '../match/MatchState';

export function scorecardHtml(m: MatchState, inningsIndex: number): string {
  const inn = m.innings[inningsIndex];
  if (!inn) return '';
  const batTeam = m.teams[inn.battingTeamIndex];
  const bowlTeam = m.teams[1 - inn.battingTeamIndex];

  const batRows = inn.cards
    .map((c, i) => {
      const p = batTeam.players[c.playerIndex];
      const sr = c.balls > 0 ? ((c.runs / c.balls) * 100).toFixed(0) : '–';
      const how = c.out
        ? c.out.how === 'caught'
          ? `c ${c.out.fielder ?? '?'} b ${c.out.bowler ?? '?'}`
          : c.out.how === 'bowled'
            ? `b ${c.out.bowler ?? '?'}`
            : c.out.how === 'lbw'
              ? `lbw b ${c.out.bowler ?? '?'}`
              : `run out${c.out.fielder ? ` (${c.out.fielder})` : ''}`
        : !inn.closed && (i === inn.strikerCard || i === inn.nonStrikerCard)
          ? 'not out*'
          : 'not out';
      const strikerCls = !inn.closed && i === inn.strikerCard ? 'striker' : '';
      return `<tr class="${strikerCls}"><td>${p.name}</td><td class="dim">${how}</td><td class="num"><b>${c.runs}</b></td><td class="num">${c.balls}</td><td class="num">${c.fours}</td><td class="num">${c.sixes}</td><td class="num">${sr}</td></tr>`;
    })
    .join('');

  const bowlRows = [...inn.bowlerCards.values()]
    .filter((b) => b.legalBalls > 0)
    .map((b) => {
      const p = bowlTeam.players[b.playerIndex];
      const overs = `${Math.floor(b.legalBalls / 6)}.${b.legalBalls % 6}`;
      const econ = b.legalBalls > 0 ? ((b.runs / b.legalBalls) * 6).toFixed(1) : '–';
      return `<tr><td>${p.name}</td><td class="num">${overs}</td><td class="num">${b.runs}</td><td class="num"><b>${b.wickets}</b></td><td class="num">${econ}</td></tr>`;
    })
    .join('');

  const fow = inn.fow.map((f) => `${f.score}/${f.wicket} (${f.batterName}, ${f.overText})`).join(' • ');

  return `
    <h2 style="text-align:left">${batTeam.name} &nbsp;<span style="color:#ffd84d">${inn.runs}/${inn.wickets}</span> <span class="dim" style="font-size:16px">(${formatOvers(inn)} ov)</span></h2>
    <table class="scorecard">
      <tr><th>Batter</th><th></th><th style="text-align:right">R</th><th style="text-align:right">B</th><th style="text-align:right">4s</th><th style="text-align:right">6s</th><th style="text-align:right">SR</th></tr>
      ${batRows}
      <tr><td class="dim">Extras</td><td class="dim">(wd ${inn.extras.wides}, nb ${inn.extras.noBalls})</td><td class="num">${inn.extras.wides + inn.extras.noBalls}</td><td></td><td></td><td></td><td></td></tr>
    </table>
    ${fow ? `<p style="text-align:left;font-size:13px"><b class="dim">FOW:</b> ${fow}</p>` : ''}
    <table class="scorecard">
      <tr><th>Bowler</th><th style="text-align:right">O</th><th style="text-align:right">R</th><th style="text-align:right">W</th><th style="text-align:right">Econ</th></tr>
      ${bowlRows}
    </table>
  `;
}

function formatOvers(inn: InningsState): string {
  return `${Math.floor(inn.legalBalls / 6)}.${inn.legalBalls % 6}`;
}
