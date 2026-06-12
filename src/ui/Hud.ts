import { MatchState } from '../match/MatchState';
import { DeliveryType, ShotDirection } from '../sim/types';
import { UI_CSS } from './styles';

/** All DOM UI: score bug, banners, scorecard, bowling controls, overlays, menus. */
export class Hud {
  private root: HTMLElement;
  private scorebug: HTMLElement;
  private banner: HTMLElement;
  private toast: HTMLElement;
  private hint: HTMLElement;
  private ballInfo: HTMLElement;
  private runPrompt: HTMLElement;
  private overlay?: HTMLElement;
  private bowlControls: HTMLElement;
  private meterWrap: HTMLElement;
  private meterBar: HTMLElement;
  private meterZone: HTMLElement;
  private compass: HTMLElement;
  private compassDots = new Map<string, HTMLElement>();
  private bannerTimer?: number;
  private toastTimer?: number;

  constructor() {
    const style = document.createElement('style');
    style.textContent = UI_CSS;
    document.head.appendChild(style);
    this.root = document.getElementById('ui-root')!;

    this.scorebug = this.el('div', 'scorebug');
    this.banner = this.el('div', 'event-banner');
    this.toast = this.el('div', 'timing-toast');
    this.hint = this.el('div', 'controls-hint');
    this.ballInfo = this.el('div', 'ball-info');
    this.runPrompt = this.el('div', 'run-prompt');
    this.bowlControls = this.el('div', 'bowl-controls');
    this.bowlControls.style.display = 'none';

    this.meterWrap = document.createElement('div');
    this.meterWrap.id = 'meter-wrap';
    this.meterZone = document.createElement('div');
    this.meterZone.id = 'meter-zone';
    this.meterBar = document.createElement('div');
    this.meterBar.id = 'meter-bar';
    this.meterWrap.append(this.meterZone, this.meterBar);

    this.compass = this.el('div', 'shot-compass');
    this.buildCompass();
    this.compass.style.display = 'none';
  }

  private el(tag: string, id: string): HTMLElement {
    const e = document.createElement(tag);
    e.id = id;
    this.root.appendChild(e);
    return e;
  }

  // ---------- Score bug / ball info ----------

  updateScore(m: MatchState): void {
    const inn = m.inn;
    const team = m.battingTeam;
    let chase = '';
    if (inn.target !== undefined) {
      const need = inn.target - inn.runs;
      const balls = m.ballsRemaining;
      chase = need > 0 && balls > 0 ? `Need ${need} off ${balls} • RRR ${((need / balls) * 6).toFixed(2)}` : '';
    }
    const sCard = inn.cards[inn.strikerCard];
    const nsCard = inn.cards[inn.nonStrikerCard];
    const sName = team.players[sCard.playerIndex].name;
    const nsName = team.players[nsCard.playerIndex].name;
    this.scorebug.innerHTML = `
      <div class="team">${team.shortName} <span style="color:#fff">${m.userIsBatting ? '(YOU)' : ''}</span></div>
      <div class="score">${inn.runs}/${inn.wickets} <span class="meta">(${m.oversText()} ov)</span></div>
      <div class="meta">${sName}* ${sCard.runs}(${sCard.balls}) &nbsp;|&nbsp; ${nsName} ${nsCard.runs}(${nsCard.balls})</div>
      ${chase ? `<div class="meta" style="color:#ffd84d">${chase}</div>` : ''}
    `;
  }

  updateBallInfo(m: MatchState, overBalls: string[]): void {
    const bowlerName = m.inn.currentBowler >= 0 ? m.bowler.name : '—';
    this.ballInfo.innerHTML = `
      <div class="bowler">${bowlerName} ${m.userIsBatting ? '' : '(YOU)'}</div>
      <div class="meta dim">bowling</div>
      <div class="balls">${overBalls.map((b) => `<span>${b}</span>`).join(' ')}</div>
    `;
    this.ballInfo.style.display = 'block';
  }

  hideBallInfo(): void {
    this.ballInfo.style.display = 'none';
    this.scorebug.style.display = 'none';
  }
  showGameHud(): void {
    this.ballInfo.style.display = 'block';
    this.scorebug.style.display = 'block';
  }

  // ---------- Banners / toasts / hints ----------

  showBanner(text: string, wicket = false, ms = 2200): void {
    this.banner.textContent = text;
    this.banner.classList.toggle('wicket', wicket);
    this.banner.classList.add('show');
    if (this.bannerTimer) clearTimeout(this.bannerTimer);
    this.bannerTimer = window.setTimeout(() => this.banner.classList.remove('show'), ms);
  }

  showToast(text: string, color = '#fff', ms = 1400): void {
    this.toast.textContent = text;
    this.toast.style.color = color;
    this.toast.style.opacity = '1';
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = window.setTimeout(() => (this.toast.style.opacity = '0'), ms);
  }

  setHint(html: string): void {
    this.hint.innerHTML = html;
    this.hint.style.display = html ? 'block' : 'none';
  }

  showRunPrompt(show: boolean, text = ''): void {
    this.runPrompt.style.display = show ? 'block' : 'none';
    if (text) this.runPrompt.textContent = text;
  }

  // ---------- Shot compass (batting) ----------

  private buildCompass(): void {
    const dirs: Array<[ShotDirection | 'def', number, number]> = [
      ['straight', 50, 8], ['offDrive', 80, 18], ['coverDrive', 105, 42],
      ['cut', 115, 70], ['lateCut', 100, 100], ['onDrive', 20, 18],
      ['flick', -5, 42], ['pull', -15, 70], ['glance', 0, 100],
    ];
    for (const [name, x, y] of dirs) {
      const dot = document.createElement('div');
      dot.className = 'dir';
      dot.style.left = `${x + 15}px`;
      dot.style.top = `${y + 12}px`;
      this.compass.appendChild(dot);
      this.compassDots.set(name, dot);
    }
    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = 'SHOT';
    this.compass.appendChild(label);
  }

  showCompass(show: boolean): void {
    this.compass.style.display = show ? 'block' : 'none';
  }

  setCompassActive(dir: ShotDirection | null): void {
    for (const [name, dot] of this.compassDots) {
      dot.classList.toggle('active', name === dir);
    }
  }

  // ---------- Bowling controls ----------

  showBowlOptions(options: DeliveryType[], selected: number): void {
    this.bowlControls.style.display = 'block';
    const names: Record<string, string> = {
      outswing: 'Outswinger', inswing: 'Inswinger', straight: 'Straight/Stock',
      bouncer: 'Bouncer', yorker: 'Yorker', offspin: 'Off Spin', legspin: 'Leg Spin', googly: 'Googly',
    };
    this.bowlControls.innerHTML = `<div class="title">SELECT DELIVERY (↑↓, Enter)</div>` +
      options.map((o, i) => `<div class="opt ${i === selected ? 'sel' : ''}">${i + 1}. ${names[o]}</div>`).join('');
  }

  showAimHint(): void {
    this.bowlControls.style.display = 'block';
    this.bowlControls.innerHTML = `<div class="title">AIM (arrow keys)</div><div>Move the marker, <b>Enter</b> to lock</div>`;
  }

  showMeter(zoneStart: number, zoneWidth: number): void {
    this.bowlControls.style.display = 'block';
    this.bowlControls.innerHTML = `<div class="title">POWER (Space to stop)</div>`;
    this.bowlControls.appendChild(this.meterWrap);
    this.meterWrap.style.display = 'block';
    this.meterZone.style.left = `${zoneStart * 100}%`;
    this.meterZone.style.width = `${zoneWidth * 100}%`;
  }

  setMeter(v: number): void {
    this.meterBar.style.left = `${v * 100}%`;
  }

  hideBowlControls(): void {
    this.bowlControls.style.display = 'none';
  }

  // ---------- Generic overlays ----------

  showOverlay(html: string): HTMLElement {
    this.clearOverlay();
    this.overlay = document.createElement('div');
    this.overlay.className = 'center-overlay';
    const panel = document.createElement('div');
    panel.className = 'panel';
    panel.innerHTML = html;
    this.overlay.appendChild(panel);
    this.root.appendChild(this.overlay);
    return panel;
  }

  clearOverlay(): void {
    this.overlay?.remove();
    this.overlay = undefined;
  }
}
