export const UI_CSS = `
#ui-root { color: #fff; user-select: none; }
.panel {
  background: linear-gradient(160deg, rgba(10,18,32,0.92), rgba(16,32,56,0.92));
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.5);
  padding: 24px;
}
.btn {
  display: inline-block;
  background: linear-gradient(180deg, #2f7fe0, #1b5cb8);
  border: 1px solid rgba(255,255,255,0.25);
  color: #fff; font-weight: 700; font-size: 16px;
  padding: 12px 26px; border-radius: 8px; cursor: pointer;
  letter-spacing: 0.5px;
}
.btn:hover { filter: brightness(1.15); }
.btn.secondary { background: linear-gradient(180deg, #4a5568, #2d3748); }
.btn.selected { outline: 3px solid #ffd84d; }

#scorebug {
  position: absolute; top: 16px; left: 16px;
  background: linear-gradient(90deg, rgba(8,12,24,0.92), rgba(8,12,24,0.75));
  border-left: 4px solid #ffd84d;
  border-radius: 6px; padding: 10px 18px;
  font-size: 15px; line-height: 1.5; min-width: 230px;
}
#scorebug .team { font-weight: 800; font-size: 18px; color: #ffd84d; letter-spacing: 1px; }
#scorebug .score { font-weight: 800; font-size: 26px; }
#scorebug .meta { color: #9fb6d4; font-size: 13px; }

#event-banner {
  position: absolute; top: 22%; left: 50%; transform: translate(-50%,-50%) scale(0.8);
  font-size: 64px; font-weight: 900; letter-spacing: 3px;
  color: #ffd84d; text-shadow: 0 4px 24px rgba(0,0,0,0.8), 0 0 60px rgba(255,216,77,0.35);
  opacity: 0; transition: opacity 0.25s, transform 0.25s; pointer-events: none;
  text-align: center; white-space: nowrap;
}
#event-banner.show { opacity: 1; transform: translate(-50%,-50%) scale(1); }
#event-banner.wicket { color: #ff5252; }

#timing-toast {
  position: absolute; top: 34%; left: 50%; transform: translateX(-50%);
  font-size: 22px; font-weight: 800; opacity: 0; transition: opacity 0.2s; pointer-events: none;
  text-shadow: 0 2px 8px #000;
}

#controls-hint {
  position: absolute; bottom: 14px; left: 50%; transform: translateX(-50%);
  background: rgba(8,12,24,0.78); border-radius: 8px; padding: 8px 18px;
  font-size: 13px; color: #cdd9ea; white-space: nowrap;
}
#controls-hint b { color: #ffd84d; }

#ball-info {
  position: absolute; top: 16px; right: 16px; text-align: right;
  background: rgba(8,12,24,0.78); border-right: 4px solid #2f7fe0;
  border-radius: 6px; padding: 10px 16px; font-size: 14px; line-height: 1.5;
}
#ball-info .bowler { font-weight: 700; font-size: 16px; }
#ball-info .balls { letter-spacing: 3px; font-size: 17px; color: #ffd84d; }

#run-prompt {
  position: absolute; bottom: 70px; left: 50%; transform: translateX(-50%);
  background: rgba(20,80,30,0.9); border: 1px solid #6f6;
  border-radius: 8px; padding: 10px 20px; font-size: 17px; font-weight: 700;
  display: none;
}

.center-overlay {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(2,6,14,0.55); backdrop-filter: blur(3px);
}
.center-overlay .panel { min-width: 460px; max-width: 720px; text-align: center; }
.center-overlay h1 { font-size: 42px; margin-bottom: 6px; letter-spacing: 2px; color: #ffd84d; }
.center-overlay h2 { font-size: 26px; margin-bottom: 14px; }
.center-overlay p { color: #b9c8dc; margin: 8px 0 18px; }
.option-row { display: flex; gap: 12px; justify-content: center; margin: 14px 0; flex-wrap: wrap; }

table.scorecard { border-collapse: collapse; width: 100%; font-size: 14px; margin-top: 10px; }
table.scorecard th { text-align: left; color: #8fb3dd; font-weight: 600; padding: 4px 10px; border-bottom: 1px solid rgba(255,255,255,0.18); }
table.scorecard td { padding: 4px 10px; border-bottom: 1px solid rgba(255,255,255,0.07); }
table.scorecard td.num { text-align: right; font-variant-numeric: tabular-nums; }
table.scorecard tr.striker td { color: #ffd84d; font-weight: 700; }
.dim { color: #8294ab; }

#bowl-controls {
  position: absolute; bottom: 16px; left: 16px;
  background: rgba(8,12,24,0.85); border-radius: 10px; padding: 14px 18px; font-size: 14px;
  min-width: 240px;
}
#bowl-controls .title { color: #ffd84d; font-weight: 800; margin-bottom: 8px; }
#bowl-controls .opt { padding: 4px 8px; border-radius: 5px; margin: 2px 0; }
#bowl-controls .opt.sel { background: #2f7fe0; font-weight: 700; }
#meter-wrap { margin-top: 10px; height: 18px; background: #1a2436; border-radius: 9px; position: relative; overflow: hidden; display:none; }
#meter-zone { position: absolute; top:0; bottom:0; background: rgba(85,220,110,0.45); }
#meter-bar { position: absolute; top: 0; bottom: 0; width: 5px; background: #ffd84d; }

#shot-compass {
  position: absolute; bottom: 16px; right: 16px; width: 130px; height: 130px;
  background: rgba(8,12,24,0.8); border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.18);
}
#shot-compass .dir {
  position: absolute; width: 12px; height: 12px; border-radius: 50%;
  background: #44598a; transform: translate(-50%,-50%);
}
#shot-compass .dir.active { background: #ffd84d; box-shadow: 0 0 12px #ffd84d; }
#shot-compass .label { position:absolute; width:100%; text-align:center; top:50%; transform:translateY(-50%); font-size:11px; color:#9fb6d4; }
`;
