import * as THREE from 'three';
import { AudioManager } from '../audio/AudioManager';
import { TEAMS } from '../data/teams';
import { aiPickBowler, buildFielders, pressureOf } from '../match/AutoSim';
import { FORMATS, Format } from '../match/Formats';
import { MatchState } from '../match/MatchState';
import { Team } from '../match/Teams';
import { aiSelectShot } from '../sim/BatterAI';
import {
  ResolvedBall,
  idealContactTime,
  isWide,
  resolveBall,
  simulateToContact,
} from '../sim/BallResolver';
import { createDeliveryBall, stepBall } from '../sim/BallPhysics';
import { baseDelivery, generateAiDelivery } from '../sim/DeliveryGenerator';
import { FielderState } from '../sim/FielderSim';
import { isRunOut, secondsPerRun } from '../sim/RunningSim';
import {
  BallState,
  Delivery,
  DeliveryType,
  PACE_DELIVERIES,
  PITCH,
  SPIN_DELIVERIES,
  ShotDirection,
  ShotInput,
} from '../sim/types';
import { BallVisual } from '../render/BallVisual';
import { CameraDirector } from '../render/CameraDirector';
import { Effects } from '../render/Effects';
import { Field } from '../render/Field';
import { SceneManager } from '../render/SceneManager';
import { Stadium } from '../render/Stadium';
import { PlayerActor } from '../players/PlayerActor';
import { runCycle as runCycleClip } from '../players/animations';
import { scorecardHtml } from '../ui/ScorecardView';
import { Hud } from '../ui/Hud';
import { Input } from './Input';
import { Rng } from './Rng';

type Phase =
  | 'menu'
  | 'toss'
  | 'bowlerSelect'
  | 'bowlSelect'
  | 'bowlAim'
  | 'bowlMeter'
  | 'preBall'
  | 'runUp'
  | 'ballInFlight'
  | 'ballLive'
  | 'ballDead'
  | 'inningsBreak'
  | 'result';

function newRngFromUrl(): Rng {
  const seed = new URLSearchParams(location.search).get('seed');
  return seed ? new Rng(Number(seed)) : new Rng();
}

export class Game {
  private sm: SceneManager;
  private cam: CameraDirector;
  private field: Field;
  private stadium: Stadium;
  private ballVis: BallVisual;
  private effects: Effects;
  private hud = new Hud();
  private input = new Input();
  private audio = new AudioManager();
  private rng = newRngFromUrl();

  private match!: MatchState;
  private phase: Phase = 'menu';
  private phaseTime = 0;
  private time = 0;

  // Menu state
  private selFormat = 1;
  private selTeam: 0 | 1 = 0;
  private autoplay = new URLSearchParams(location.search).has('autoplay');
  /** Test hook: time-scale multiplier for headless verification. */
  private turbo = Math.max(1, Number(new URLSearchParams(location.search).get('turbo') ?? 1));

  // Actors
  private striker!: PlayerActor;
  private nonStriker!: PlayerActor;
  private bowlerActor!: PlayerActor;
  private keeperActor!: PlayerActor;
  private umpire!: PlayerActor;
  private fielderActors: PlayerActor[] = [];
  private fielders: FielderState[] = [];

  // Per-ball state
  private delivery?: Delivery;
  private liveBall?: BallState;
  private idealT = 0;
  private releaseTime = 0;
  private shotTaken = false;
  private resolved?: ResolvedBall;
  private pathTime = 0;
  private pendingNoBall = false;
  private pendingSwing?: { at: number; shot: ShotInput; variant: 'low' | 'mid' | 'high'; speed: number };
  private extraRunRequested = false;
  private extraRunDone = false;
  private overSymbols: string[] = [];
  private overStartBalls = 0;
  private deadHandled = false;

  // User bowling input state
  private bowlOptions: DeliveryType[] = [];
  private bowlSel = 0;
  private aimMarker: THREE.Mesh;
  private meterValue = 0;
  private meterDir = 1;

  constructor(canvas: HTMLCanvasElement) {
    this.sm = new SceneManager(canvas);
    this.cam = new CameraDirector(this.sm.camera);
    this.field = new Field();
    this.sm.scene.add(this.field.group);
    this.stadium = new Stadium();
    this.sm.scene.add(this.stadium.group);
    this.ballVis = new BallVisual(this.sm.scene);
    this.ballVis.visible = false;
    this.effects = new Effects(this.sm.scene);

    this.aimMarker = new THREE.Mesh(
      new THREE.RingGeometry(0.12, 0.2, 24),
      new THREE.MeshBasicMaterial({ color: 0xffd84d, transparent: true, opacity: 0.95 }),
    );
    this.aimMarker.rotation.x = -Math.PI / 2;
    this.aimMarker.visible = false;
    this.sm.scene.add(this.aimMarker);

    window.addEventListener('pointerdown', () => this.audio.init(), { once: true });
    window.addEventListener('keydown', () => this.audio.init(), { once: true });

    if (new URLSearchParams(location.search).has('rigdebug')) {
      this.setupRigDebug();
    } else {
      this.showMenu();
      this.cam.snap('orbit');
    }

    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      this.update(dt * this.turbo);
      this.sm.render();
      this.input.flush();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  /** Test hook (?rigdebug=1): line up rigs close to a fixed camera to inspect bodies/poses. */
  private rigDebugActors: PlayerActor[] = [];
  private setupRigDebug(): void {
    this.phase = 'menu';
    const team0 = TEAMS[0];
    const team1 = TEAMS[1];
    const stance = PlayerActor.batsman(this.sm.scene, team0);
    stance.setPosition(-2.2, 8);
    stance.playStance();
    const swing = PlayerActor.batsman(this.sm.scene, team0);
    swing.setPosition(-0.8, 8);
    swing.playStance();
    window.setInterval(() => swing.playSwing('coverDrive'), 1600);
    const bowler = PlayerActor.fielder(this.sm.scene, team1);
    bowler.setPosition(0.6, 8);
    bowler.faceToward(0.6, -10);
    window.setInterval(() => bowler.playBowling(1, () => {}), 2200);
    const runner = PlayerActor.fielder(this.sm.scene, team1);
    runner.setPosition(2.0, 8);
    runner.faceToward(2.0, -10);
    runner.animator.play(runCycleClip);
    const ump = PlayerActor.umpire(this.sm.scene);
    ump.setPosition(3.4, 8);
    ump.faceToward(3.4, -10);
    window.setInterval(() => ump.playUmpireSignal('out'), 2600);
    this.rigDebugActors = [stance, swing, bowler, runner, ump];
    this.sm.camera.position.set(0.5, 1.5, 3.2);
    this.sm.camera.lookAt(0.5, 1.1, 8);
    this.cam.update = () => {}; // freeze the camera director
  }

  // =================== Menu / Toss ===================

  private showMenu(): void {
    this.phase = 'menu';
    const fmt = new URLSearchParams(location.search).get('fmt');
    if (fmt) {
      const i = FORMATS.findIndex((f) => f.id === fmt);
      if (i >= 0) this.selFormat = i;
    }
    this.hud.hideBallInfo();
    this.hud.setHint('');
    const panel = this.hud.showOverlay(`
      <h1>FABLE CRICKET</h1>
      <p>A full-match cricket experience. Bat AND bowl. Built for your browser.</p>
      <h2 style="font-size:18px;color:#8fb3dd">MATCH FORMAT</h2>
      <div class="option-row" id="fmt-row"></div>
      <h2 style="font-size:18px;color:#8fb3dd">YOUR TEAM</h2>
      <div class="option-row" id="team-row"></div>
      <div style="margin-top:18px"><span class="btn" id="start-btn">START MATCH</span></div>
      <p style="font-size:12px">Batting: hold a direction (arrows) + <b>Space</b> ground shot, <b>L</b> lofted, <b>K</b> block • Bowling: pick delivery, aim, power meter • <b>Tab</b> scorecard • <b>M</b> mute</p>
    `);
    const fmtRow = panel.querySelector('#fmt-row')!;
    FORMATS.forEach((f, i) => {
      const b = document.createElement('span');
      b.className = `btn secondary ${i === this.selFormat ? 'selected' : ''}`;
      b.textContent = f.name;
      b.onclick = () => {
        this.selFormat = i;
        fmtRow.querySelectorAll('.btn').forEach((e, j) => e.classList.toggle('selected', j === i));
      };
      fmtRow.appendChild(b);
    });
    const teamRow = panel.querySelector('#team-row')!;
    TEAMS.forEach((t, i) => {
      const b = document.createElement('span');
      b.className = `btn secondary ${i === this.selTeam ? 'selected' : ''}`;
      b.textContent = t.name;
      b.onclick = () => {
        this.selTeam = i as 0 | 1;
        teamRow.querySelectorAll('.btn').forEach((e, j) => e.classList.toggle('selected', j === i));
      };
      teamRow.appendChild(b);
    });
    (panel.querySelector('#start-btn') as HTMLElement).onclick = () => this.showToss();
  }

  private showToss(): void {
    this.phase = 'toss';
    // Test hook: ?auto=bat / ?auto=bowl skips the toss for scripted verification.
    const auto = new URLSearchParams(location.search).get('auto');
    if (auto === 'bat') return this.startMatch(this.selTeam);
    if (auto === 'bowl') return this.startMatch((1 - this.selTeam) as 0 | 1);
    const userWins = this.rng.chance(0.5);
    const panel = this.hud.showOverlay(`
      <h1>THE TOSS</h1>
      <h2>${userWins ? 'You won the toss!' : `${TEAMS[1 - this.selTeam].name} won the toss`}</h2>
      <div class="option-row" id="toss-row"></div>
    `);
    const row = panel.querySelector('#toss-row')!;
    if (userWins) {
      for (const choice of ['BAT FIRST', 'BOWL FIRST'] as const) {
        const b = document.createElement('span');
        b.className = 'btn';
        b.textContent = choice;
        b.onclick = () => this.startMatch(choice === 'BAT FIRST' ? this.selTeam : ((1 - this.selTeam) as 0 | 1));
        row.appendChild(b);
      }
    } else {
      const aiBats = this.rng.chance(0.55);
      const aiTeam = (1 - this.selTeam) as 0 | 1;
      const note = document.createElement('p');
      note.textContent = `They chose to ${aiBats ? 'bat' : 'bowl'} first.`;
      row.before(note);
      const b = document.createElement('span');
      b.className = 'btn';
      b.textContent = 'CONTINUE';
      b.onclick = () => this.startMatch(aiBats ? aiTeam : this.selTeam);
      row.appendChild(b);
    }
  }

  private startMatch(battingFirst: 0 | 1): void {
    const format: Format = FORMATS[this.selFormat];
    this.match = new MatchState([TEAMS[0], TEAMS[1]] as [Team, Team], format, battingFirst);
    this.match.userTeamIndex = this.selTeam;
    this.hud.clearOverlay();
    this.hud.showGameHud();
    this.setupInningsActors();
    this.overSymbols = [];
    this.cam.snap('broadcast');
    this.beginOver();
  }

  // =================== Actors ===================

  private setupInningsActors(): void {
    for (const a of [this.striker, this.nonStriker, this.bowlerActor, this.keeperActor, this.umpire, ...this.fielderActors]) {
      a?.dispose(this.sm.scene);
    }
    this.fielderActors = [];

    const batTeam = this.match.battingTeam;
    const bowlTeam = this.match.bowlingTeam;

    this.striker = PlayerActor.batsman(this.sm.scene, batTeam);
    this.nonStriker = PlayerActor.batsman(this.sm.scene, batTeam);
    this.bowlerActor = PlayerActor.fielder(this.sm.scene, bowlTeam);
    this.keeperActor = PlayerActor.keeper(this.sm.scene, bowlTeam);
    this.umpire = PlayerActor.umpire(this.sm.scene);

    this.fielders = buildFielders(bowlTeam);
    // fielders[0] is the keeper (handled by keeperActor visually)
    for (let i = 1; i < this.fielders.length; i++) {
      const fa = PlayerActor.fielder(this.sm.scene, bowlTeam);
      fa.setPosition(this.fielders[i].home.x, this.fielders[i].home.z);
      fa.faceToward(0, 0);
      fa.playIdle();
      this.fielderActors.push(fa);
    }

    this.striker.setPosition(-0.25, 0.75);
    this.striker.playStance();
    this.nonStriker.setPosition(0.9, PITCH.bowlerCreaseZ - 0.4);
    this.nonStriker.faceToward(0, 0);
    this.nonStriker.playIdle();
    this.keeperActor.setPosition(0, -7.5);
    this.keeperActor.faceToward(0, PITCH.bowlerStumpsZ);
    this.keeperActor.playCrouch();
    this.umpire.setPosition(0.6, PITCH.bowlerStumpsZ + 2.2);
    this.umpire.faceToward(0, 0);
    this.umpire.playIdle();
    this.resetBowlerToMark();
  }

  private resetBowlerToMark(): void {
    this.bowlerActor.setPosition(0.35, PITCH.bowlerCreaseZ + 9);
    this.bowlerActor.faceToward(0.35, 0);
    this.bowlerActor.playIdle();
  }

  private resetFieldersHome(): void {
    this.fielderActors.forEach((fa, i) => {
      const home = this.fielders[i + 1].home;
      fa.walkTo(home.x, home.z, 2.5);
      this.fielders[i + 1].pos = { ...home };
    });
  }

  // =================== Over / ball flow ===================

  private beginOver(): void {
    this.overSymbols = [];
    this.overStartBalls = this.match.inn.legalBalls;
    if (this.match.userIsBatting) {
      this.match.setBowler(aiPickBowler(this.match, this.rng));
      this.hud.showToast(`New bowler: ${this.match.bowler.name}`, '#9fd4ff', 2000);
      this.toPreBall();
    } else {
      this.showBowlerSelect();
    }
  }

  private showBowlerSelect(): void {
    this.phase = 'bowlerSelect';
    const eligible = this.match.eligibleBowlers();
    if (this.autoplay) {
      this.match.setBowler(eligible[0] ?? 0);
      this.toPreBall();
      return;
    }
    const team = this.match.bowlingTeam;
    const panel = this.hud.showOverlay(`
      <h2>Choose your bowler</h2>
      <div class="option-row" id="bowler-row" style="flex-direction:column"></div>
    `);
    const row = panel.querySelector('#bowler-row')!;
    eligible.forEach((idx) => {
      const p = team.players[idx];
      const card = this.match.inn.bowlerCards.get(idx);
      const overs = card ? `${Math.floor(card.legalBalls / 6)}-${card.runs}-${card.wickets}` : 'fresh';
      const b = document.createElement('span');
      b.className = 'btn secondary';
      b.innerHTML = `${p.name} <span class="dim">(${p.bowlStyle ?? 'pace'}, ${overs})</span>`;
      b.onclick = () => {
        this.match.setBowler(idx);
        this.hud.clearOverlay();
        this.toPreBall();
      };
      row.appendChild(b);
    });
  }

  private toPreBall(): void {
    this.phase = 'preBall';
    this.phaseTime = 0;
    this.shotTaken = false;
    this.resolved = undefined;
    this.delivery = undefined;
    this.liveBall = undefined;
    this.pendingNoBall = false;
    this.pendingSwing = undefined;
    this.extraRunRequested = false;
    this.extraRunDone = false;
    this.deadHandled = false;
    this.ballVis.visible = false;
    this.ballVis.clearTrail();
    this.aimMarker.visible = false;
    this.hud.updateScore(this.match);
    this.hud.updateBallInfo(this.match, this.overSymbols);
    this.hud.hideBowlControls();
    this.hud.showRunPrompt(false);
    this.striker.playStance();
    this.resetBowlerToMark();
    this.resetFieldersHome();
    this.cam.setMode('broadcast');

    if (this.match.userIsBatting) {
      this.hud.showCompass(true);
      this.hud.setHint('Hold <b>arrows</b> for direction • <b>Space</b> ground shot • <b>L</b> lofted • <b>K</b> block • nothing = leave');
    } else {
      this.hud.showCompass(false);
      this.startBowlSelect();
    }
  }

  private startBowlSelect(): void {
    this.phase = 'bowlSelect';
    const style = this.match.bowler.bowlStyle ?? 'pace';
    this.bowlOptions = style === 'pace' ? PACE_DELIVERIES : SPIN_DELIVERIES;
    this.bowlSel = 0;
    this.hud.showBowlOptions(this.bowlOptions, this.bowlSel);
    this.hud.setHint('<b>↑↓</b> choose delivery • <b>Enter</b> confirm');
    this.cam.setMode('bowlingAim');
  }

  private startAim(): void {
    this.phase = 'bowlAim';
    const type = this.bowlOptions[this.bowlSel];
    this.aimMarker.position.set(0, 0.03, type === 'bouncer' ? 10 : type === 'yorker' ? 1.2 : 6);
    this.aimMarker.visible = true;
    this.hud.showAimHint();
    this.hud.setHint('<b>Arrows</b> move the pitch marker • <b>Enter</b> lock in');
  }

  private startMeter(): void {
    this.phase = 'bowlMeter';
    this.meterValue = 0;
    this.meterDir = 1;
    this.hud.showMeter(0.6, 0.2);
    this.hud.setHint('<b>Space</b> to set power — land it in the green zone!');
  }

  /** Build the user's delivery and start the run-up. */
  private commitUserDelivery(): void {
    const bowler = this.match.bowler;
    const type = this.bowlOptions[this.bowlSel];
    const style = bowler.bowlStyle ?? 'pace';
    const d = baseDelivery(type, style, bowler.bowling, this.rng);
    // Aim from the user's marker, with accuracy noise from the meter.
    const zoneCenter = 0.7;
    const err = Math.abs(this.meterValue - zoneCenter);
    const scatter = err * 2.2;
    d.pitchTarget.x = this.aimMarker.position.x + this.rng.range(-scatter, scatter) * 0.5;
    d.pitchTarget.z = Math.max(0.4, this.aimMarker.position.z + this.rng.range(-scatter, scatter) * 2.5);
    d.speedKph *= 0.92 + this.meterValue * 0.18;
    this.pendingNoBall = this.meterValue > 0.88 && this.rng.chance(0.45);
    this.aimMarker.visible = false;
    this.hud.hideBowlControls();
    this.startRunUp(d);
  }

  private startAiDelivery(): void {
    const bowler = this.match.bowler;
    const d = generateAiDelivery(
      { skill: bowler.bowling, style: bowler.bowlStyle ?? 'pace' },
      this.match.inn.legalBalls % 6,
      this.rng,
    );
    this.startRunUp(d);
  }

  private startRunUp(d: Delivery): void {
    this.delivery = d;
    this.phase = 'runUp';
    this.phaseTime = 0;
    this.cam.setMode('broadcast');
    const isSpin = (this.match.bowler.bowlStyle ?? 'pace') === 'spin';
    this.bowlerActor.startRunUp(0.35, PITCH.bowlerCreaseZ + (isSpin ? 4 : 9), PITCH.bowlerCreaseZ + 0.3, isSpin ? 2.8 : 6.5, () => {
      // Delivery stride: play bowling action; release event launches the ball.
      this.bowlerActor.playBowling(isSpin ? 0.85 : 1, () => this.onBallRelease());
    });
  }

  private onBallRelease(): void {
    if (!this.delivery) return;
    this.phase = 'ballInFlight';
    this.phaseTime = 0;
    this.releaseTime = this.time;
    this.liveBall = createDeliveryBall(this.delivery);
    this.idealT = idealContactTime(this.delivery);
    this.ballVis.visible = true;
    this.ballVis.clearTrail();
    this.shotTaken = false;

    if (!this.match.userIsBatting) {
      // AI batter decides instantly; resolve now and play it out.
      const shot = aiSelectShot(this.delivery, {
        batterSkill: this.match.striker.batting,
        pressure: pressureOf(this.match),
        wicketsInHandFrac: (10 - this.match.inn.wickets) / 10,
        rng: this.rng,
      });
      this.resolveNow(shot);
    }
  }

  /** Resolve the rest of the ball (shot, fielding, outcome) and start playback. */
  private resolveNow(shot: ShotInput): void {
    if (!this.delivery || this.resolved) return;
    this.fielders.forEach((f) => {
      f.pos = { ...f.home };
    });
    this.resolved = resolveBall(this.delivery, shot, {
      batterSkill: this.match.striker.batting,
      runningSkill: this.match.striker.batting,
      fielders: this.fielders,
      keeperName: this.fielders[0].name,
      rng: this.rng,
      runAggression: this.match.userIsBatting ? 0 : pressureOf(this.match),
    });
    this.shotTaken = true;

    // Schedule the batter's swing so the clip's 'impact' keyframe lands exactly
    // at the sim's bat-contact instant (clips put impact ~0.2s in).
    if (shot.type !== 'leave') {
      const contactY = this.resolved.contactState.pos.y;
      const variant: 'low' | 'mid' | 'high' = contactY < 0.45 ? 'low' : contactY > 1.0 ? 'high' : 'mid';
      const impactOffset = shot.type === 'defensive' ? 0.2 : variant === 'high' ? 0.24 : variant === 'low' ? 0.2 : 0.22;
      const contactAbs = this.releaseTime + this.resolved.contactTime;
      const remaining = contactAbs - this.time;
      if (remaining >= impactOffset) {
        this.pendingSwing = { at: contactAbs - impactOffset, shot, variant, speed: 1 };
      } else {
        this.pendingSwing = { at: this.time, shot, variant, speed: impactOffset / Math.max(0.07, remaining) };
      }
    }
  }

  private firePendingSwing(): void {
    if (!this.pendingSwing || this.time < this.pendingSwing.at) return;
    const { shot, variant, speed } = this.pendingSwing;
    this.pendingSwing = undefined;
    if (shot.type === 'defensive') this.striker.playBlock(speed);
    else this.striker.playSwing(shot.direction, variant, speed);
  }

  // =================== Frame update ===================

  private update(dt: number): void {
    this.time += dt;
    this.phaseTime += dt;
    this.stadium.update(dt, this.time);
    this.effects.update(dt);
    this.cam.update(dt, this.time);

    for (const a of [this.striker, this.nonStriker, this.bowlerActor, this.keeperActor, this.umpire, ...this.fielderActors, ...this.rigDebugActors]) {
      a?.update(dt);
    }

    if (this.input.consumePress('KeyM')) {
      const muted = this.audio.toggleMute();
      this.hud.showToast(muted ? 'Muted' : 'Sound on', '#9fd4ff');
    }
    if (this.match && this.input.consumePress('Tab')) this.toggleScorecard();

    switch (this.phase) {
      case 'bowlSelect':
        this.updateBowlSelect();
        break;
      case 'bowlAim':
        this.updateBowlAim(dt);
        break;
      case 'bowlMeter':
        this.updateBowlMeter(dt);
        break;
      case 'preBall':
        if (this.match.userIsBatting && this.phaseTime > 0.9) this.startAiDelivery();
        break;
      case 'ballInFlight':
        this.updateBallInFlight(dt);
        break;
      case 'ballLive':
        this.updateBallLive(dt);
        break;
      case 'ballDead':
        if (this.phaseTime > 1.9) this.nextBallOrPhase();
        break;
      default:
        break;
    }
  }

  private scorecardOpen = false;
  private toggleScorecard(): void {
    if (this.scorecardOpen) {
      this.hud.clearOverlay();
      this.scorecardOpen = false;
      return;
    }
    if (!['preBall', 'ballDead', 'bowlSelect'].includes(this.phase)) return;
    const html = this.match.innings
      .map((_, i) => scorecardHtml(this.match, i))
      .join('<hr style="border-color:rgba(255,255,255,0.15);margin:14px 0">');
    this.hud.showOverlay(`${html}<p style="margin-top:10px"><b>Tab</b> to close</p>`);
    this.scorecardOpen = true;
  }

  // ----- user bowling input -----

  private updateBowlSelect(): void {
    if (this.autoplay) {
      this.bowlSel = Math.floor(this.rng.next() * this.bowlOptions.length);
      this.startAim();
      return;
    }
    if (this.input.consumePress('ArrowUp')) {
      this.bowlSel = (this.bowlSel + this.bowlOptions.length - 1) % this.bowlOptions.length;
      this.hud.showBowlOptions(this.bowlOptions, this.bowlSel);
      this.audio.uiTick();
    }
    if (this.input.consumePress('ArrowDown')) {
      this.bowlSel = (this.bowlSel + 1) % this.bowlOptions.length;
      this.hud.showBowlOptions(this.bowlOptions, this.bowlSel);
      this.audio.uiTick();
    }
    for (let i = 0; i < this.bowlOptions.length; i++) {
      if (this.input.consumePress(`Digit${i + 1}`)) {
        this.bowlSel = i;
        this.hud.showBowlOptions(this.bowlOptions, this.bowlSel);
      }
    }
    if (this.input.consumePress('Enter')) this.startAim();
  }

  private updateBowlAim(dt: number): void {
    if (this.autoplay) {
      this.startMeter();
      return;
    }
    const sp = 3.2 * dt;
    if (this.input.isDown('ArrowLeft')) this.aimMarker.position.x += sp; // screen-left = +x from this cam
    if (this.input.isDown('ArrowRight')) this.aimMarker.position.x -= sp;
    if (this.input.isDown('ArrowUp')) this.aimMarker.position.z -= sp * 2.4;
    if (this.input.isDown('ArrowDown')) this.aimMarker.position.z += sp * 2.4;
    this.aimMarker.position.x = THREE.MathUtils.clamp(this.aimMarker.position.x, -1.1, 1.1);
    this.aimMarker.position.z = THREE.MathUtils.clamp(this.aimMarker.position.z, 0.5, 12);
    if (this.input.consumePress('Enter')) this.startMeter();
  }

  private updateBowlMeter(dt: number): void {
    this.meterValue += this.meterDir * dt * 1.15;
    if (this.meterValue > 1) {
      this.meterValue = 1;
      this.meterDir = -1;
    }
    if (this.meterValue < 0) {
      this.meterValue = 0;
      this.meterDir = 1;
    }
    this.hud.setMeter(this.meterValue);
    if (this.autoplay && this.meterValue > 0.62 && this.meterValue < 0.78) {
      this.hud.setHint('');
      this.commitUserDelivery();
      return;
    }
    if (this.input.consumePress('Space')) {
      this.hud.setHint('');
      this.commitUserDelivery();
    }
  }

  // ----- ball in flight (delivery toward batter) -----

  private heldDirection(): ShotDirection {
    // Broadcast camera looks down the pitch from behind the bowler: screen-right = +x = off side.
    const up = this.input.isDown('ArrowUp') || this.input.isDown('KeyW');
    const down = this.input.isDown('ArrowDown') || this.input.isDown('KeyS');
    const right = this.input.isDown('ArrowRight') || this.input.isDown('KeyD'); // off side (+x)
    const left = this.input.isDown('ArrowLeft') || this.input.isDown('KeyA'); // leg side (-x)
    if (up && right) return 'offDrive';
    if (up && left) return 'onDrive';
    if (down && right) return 'cut';
    if (down && left) return 'pull';
    if (up) return 'straight';
    if (right) return 'coverDrive';
    if (left) return 'flick';
    if (down) return 'glance';
    return 'straight';
  }

  private updateBallInFlight(dt: number): void {
    if (!this.delivery || !this.liveBall) return;
    this.firePendingSwing();

    // Step the real ball for visuals until contact/result takes over.
    const before = this.liveBall.bounced;
    stepBall(this.liveBall, dt, this.delivery.swing, this.delivery.turn);
    if (!before && this.liveBall.bounced) {
      this.effects.addPitchMarker(this.liveBall.pos.x, this.liveBall.pos.z);
    }
    this.ballVis.setPosition(this.liveBall.pos.x, this.liveBall.pos.y, this.liveBall.pos.z);

    const elapsed = this.time - this.releaseTime;

    if (this.match.userIsBatting && !this.shotTaken && this.autoplay) {
      // Test hook (?autoplay=1): swing automatically with decent timing.
      if (elapsed >= this.idealT - 0.02) {
        const dirs: ShotDirection[] = ['straight', 'offDrive', 'coverDrive', 'onDrive', 'flick', 'pull'];
        this.resolveNow({
          direction: dirs[Math.floor(this.rng.next() * dirs.length)],
          type: this.rng.chance(0.3) ? 'lofted' : 'grounded',
          timingError: this.rng.range(-0.06, 0.06),
        });
      }
    } else if (this.match.userIsBatting && !this.shotTaken) {
      this.hud.setCompassActive(this.heldDirection());
      const timingError = elapsed - this.idealT;
      if (this.input.consumePress('Space')) {
        this.resolveNow({ direction: this.heldDirection(), type: 'grounded', timingError });
        this.feedbackTiming(timingError);
      } else if (this.input.consumePress('KeyL')) {
        this.resolveNow({ direction: this.heldDirection(), type: 'lofted', timingError });
        this.feedbackTiming(timingError);
      } else if (this.input.consumePress('KeyK')) {
        this.resolveNow({ direction: 'straight', type: 'defensive', timingError });
        this.feedbackTiming(timingError);
      } else if (elapsed > this.idealT + 0.18) {
        // No shot offered.
        this.resolveNow({ direction: 'straight', type: 'leave', timingError: 1 });
      }
    }

    // Hand over to outcome playback once the ball reaches the bat.
    if (this.resolved && elapsed >= this.resolved.contactTime) {
      this.beginBallLive();
    } else if (!this.resolved && this.liveBall.pos.z < -10) {
      // Safety net: ball somehow got past everything.
      this.beginDead({ runs: 0, text: 'Through to the keeper' });
    }
  }

  private feedbackTiming(err: number): void {
    const ms = Math.abs(err) * 1000;
    if (ms < 42) this.hud.showToast('PERFECT TIMING!', '#55ff7f');
    else if (ms < 95) this.hud.showToast('Good shot', '#cdf');
    else if (err < 0) this.hud.showToast('Too early!', '#ffb74d');
    else this.hud.showToast('Too late!', '#ffb74d');
  }

  // ----- ball live: play out the resolved outcome -----

  private beginBallLive(): void {
    if (!this.resolved) return;
    const r = this.resolved;
    this.phase = 'ballLive';
    this.phaseTime = 0;
    this.pathTime = 0;
    this.hud.setCompassActive(null);

    const out = r.outcome;
    const hitBall = r.path.length > 0;

    if (hitBall) {
      this.audio.batHit(r.quality === 'perfect' ? 1 : 0.6);
      this.cam.setMode('ballFollow');
      // Send the chosen fielder after the ball.
      if (r.intercept && r.intercept.fielderIndex > 0) {
        const fa = this.fielderActors[r.intercept.fielderIndex - 1];
        fa.runTo(r.intercept.point.x, r.intercept.point.z, Math.max(0.4, r.intercept.time));
      }
      // Batsmen run if there are runs to take.
      if (r.attemptedRuns > 0) {
        this.striker.runBetweenWickets(r.attemptedRuns, secondsPerRun(this.match.striker.batting));
        this.nonStriker.runBetweenWickets(r.attemptedRuns, secondsPerRun(this.match.striker.batting), true);
      }
      if (this.match.userIsBatting && !out.wicket && !out.boundary && r.attemptedRuns < 3) {
        this.hud.showRunPrompt(true, 'Press R: risk an extra run');
      }
    } else if (out.wicket && (out.wicket.how === 'bowled' || out.wicket.how === 'lbw')) {
      // Ball continues to the stumps; explosion handled in update.
    }
  }

  private updateBallLive(dt: number): void {
    if (!this.resolved || !this.liveBall || !this.delivery) return;
    this.firePendingSwing();
    const r = this.resolved;
    const out = r.outcome;

    if (r.path.length > 0) {
      // Follow the precomputed post-contact path.
      this.pathTime += dt;
      const sample = r.path.find((s) => s.t >= this.pathTime) ?? r.path[r.path.length - 1];
      this.ballVis.setPosition(sample.pos.x, sample.pos.y, sample.pos.z);
      this.cam.followTarget.set(sample.pos.x, sample.pos.y, sample.pos.z);

      // Extra-run request (user batting)
      if (this.match.userIsBatting && this.input.consumePress('KeyR') && !this.extraRunRequested && !out.wicket && !out.boundary) {
        this.extraRunRequested = true;
        this.hud.showRunPrompt(false);
        this.attemptExtraRun();
      }

      if (this.pathTime >= r.liveTime) this.finishBall();
    } else {
      // Missed/bowled/keeper: continue real physics to the stumps/keeper.
      stepBall(this.liveBall, dt, this.delivery.swing, this.delivery.turn);
      this.ballVis.setPosition(this.liveBall.pos.x, this.liveBall.pos.y, this.liveBall.pos.z);
      if (out.wicket?.how === 'bowled' && this.liveBall.pos.z <= 0.05 && !this.deadHandled) {
        this.deadHandled = true;
        this.effects.explodeStumps(this.field.strikerStumps, new THREE.Vector3(this.liveBall.vel.x, this.liveBall.vel.y, this.liveBall.vel.z));
        this.audio.stumpsHit();
        this.cam.setMode('wicket');
      }
      if (this.phaseTime > (out.wicket ? 1.6 : 1.1)) this.finishBall();
    }
  }

  private attemptExtraRun(): void {
    if (!this.resolved) return;
    const r = this.resolved;
    const spr = secondsPerRun(this.match.striker.batting);
    const extra = r.attemptedRuns + 1;
    // Time for the throw to arrive vs the runner: reuse the resolved ball-back estimate.
    const throwArrival = r.liveTime - 0.6 + this.rng.range(-0.2, 0.4);
    const direct = this.rng.chance(0.18 + (this.fielders[r.intercept?.fielderIndex ?? 0]?.skill ?? 60) / 400);
    this.striker.runBetweenWickets(extra, spr);
    this.nonStriker.runBetweenWickets(extra, spr, true);
    if (direct && isRunOut({ secondsPerRun: spr }, extra, throwArrival)) {
      r.outcome.wicket = { how: 'runout', fielder: r.intercept ? this.fielders[r.intercept.fielderIndex].name : undefined };
      r.outcome.runs = extra - 1;
      r.outcome.text = 'RUN OUT! The gamble fails!';
    } else {
      r.outcome.runs = extra;
      r.outcome.text = `${extra} run${extra > 1 ? 's' : ''} — good running!`;
    }
    r.liveTime = Math.max(r.liveTime, extra * spr + 0.4);
  }

  private finishBall(): void {
    if (!this.resolved) return;
    this.beginDead(this.resolved.outcome);
  }

  private beginDead(out: { runs: number; boundary?: 4 | 6; wicket?: { how: string; fielder?: string }; wide?: boolean; text: string }): void {
    this.phase = 'ballDead';
    this.phaseTime = 0;
    this.hud.showRunPrompt(false);

    const isWicket = !!out.wicket;
    const big = out.boundary !== undefined || isWicket;
    if (big) {
      this.hud.showBanner(
        isWicket ? (out.wicket!.how === 'runout' ? 'RUN OUT!' : out.wicket!.how === 'lbw' ? 'LBW!' : out.wicket!.how === 'caught' ? 'CAUGHT!' : 'BOWLED!') : out.boundary === 6 ? 'SIX!' : 'FOUR!',
        isWicket,
      );
      this.stadium.triggerCheer(1);
      this.audio.cheer(1);
      if (out.boundary) this.cam.setMode('crane');
      if (isWicket) {
        this.umpire.playUmpireSignal('out');
        this.hud.showToast(out.text, '#ffb0b0', 2200);
        // Nearby fielders celebrate
        this.fielderActors.slice(0, 3).forEach((f) => f.playCelebrate());
      } else {
        this.umpire.playUmpireSignal(out.boundary === 6 ? 'six' : 'four');
      }
    } else {
      if (out.wide) this.umpire.playUmpireSignal('wide');
      this.hud.showToast(out.text, '#fff', 1600);
      this.stadium.triggerCheer(out.runs > 0 ? 0.4 : 0.1);
      if (out.runs > 0) this.audio.cheer(0.3);
    }

    // Apply to match state
    const bowlerName = this.match.bowler.name;
    this.match.applyBall({
      runs: out.runs,
      extra: out.wide ? 'wide' : this.pendingNoBall ? 'noBall' : undefined,
      wicket: out.wicket ? { how: out.wicket.how as never, bowler: bowlerName, fielder: out.wicket.fielder } : undefined,
      boundary: out.boundary,
      text: out.text,
    });
    if (this.pendingNoBall) {
      this.hud.showBanner('NO BALL!', false, 1500);
      this.pendingNoBall = false;
      this.overSymbols.push('nb');
    } else {
      this.overSymbols.push(out.wide ? 'wd' : out.wicket ? 'W' : out.boundary ? String(out.boundary) : out.runs > 0 ? String(out.runs) : '•');
    }

    console.debug(`[ball] ${out.text} -> ${this.match.inn.runs}/${this.match.inn.wickets} (${this.match.oversText()})`);
    this.hud.updateScore(this.match);
    this.hud.updateBallInfo(this.match, this.overSymbols);
    const sb = this.match.inn;
    this.stadium.drawScoreboard(
      `${this.match.battingTeam.shortName} ${sb.runs}/${sb.wickets}`,
      `OVERS ${this.match.oversText()}`,
      sb.target !== undefined ? `TARGET ${sb.target}` : '',
    );
  }

  private nextBallOrPhase(): void {
    // Restore broken stumps
    this.effects.resetStumps(this.field.strikerStumps, new THREE.Vector3(0, 0, PITCH.strikerStumpsZ));

    if (this.match.isMatchOver) {
      this.showResult();
      return;
    }
    if (this.match.inn.closed) {
      this.showInningsBreak();
      return;
    }
    if (this.match.inn.legalBalls - this.overStartBalls >= 6) {
      this.hud.showToast('End of over', '#9fd4ff', 1500);
      this.beginOver();
      return;
    }
    this.toPreBall();
  }

  private showInningsBreak(): void {
    this.phase = 'inningsBreak';
    const html = scorecardHtml(this.match, 0);
    const target = this.match.innings[1]?.target ?? 0;
    const chasingTeam = this.match.teams[this.match.innings[1]!.battingTeamIndex];
    const panel = this.hud.showOverlay(`
      <h1>INNINGS BREAK</h1>
      ${html}
      <p style="font-size:18px"><b>${chasingTeam.name}</b> need <b style="color:#ffd84d">${target}</b> to win.</p>
      <span class="btn" id="cont-btn">START CHASE</span>
    `);
    const cont = () => {
      this.match.startSecondInnings();
      this.hud.clearOverlay();
      this.setupInningsActors();
      this.overSymbols = [];
      this.beginOver();
    };
    (panel.querySelector('#cont-btn') as HTMLElement).onclick = cont;
    if (this.autoplay) window.setTimeout(cont, 1200);
  }

  private showResult(): void {
    this.phase = 'result';
    this.cam.setMode('orbit');
    const result = this.match.result!;
    const userWon = result.winnerTeamIndex === this.match.userTeamIndex;
    const heading = result.winnerTeamIndex === null ? 'A TIE!' : userWon ? 'YOU WIN! 🏆' : 'DEFEAT';
    const cards = this.match.innings.map((_, i) => scorecardHtml(this.match, i)).join('<hr style="border-color:rgba(255,255,255,0.15);margin:12px 0">');
    const panel = this.hud.showOverlay(`
      <h1>${heading}</h1>
      <h2>${result.text}</h2>
      <div style="max-height:46vh;overflow-y:auto">${cards}</div>
      <div style="margin-top:14px"><span class="btn" id="again-btn">PLAY AGAIN</span></div>
    `);
    this.stadium.triggerCheer(1);
    this.audio.cheer(1);
    (panel.querySelector('#again-btn') as HTMLElement).onclick = () => this.showMenu();
  }
}
