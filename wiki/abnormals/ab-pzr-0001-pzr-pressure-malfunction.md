---
title: "AB.PZR-0001 — Pressurizer Pressure Control Malfunction"
category: abnormals
status: draft
aliases:
  - AB.PZR-0001
  - pressurizer pressure malfunction
---

# AB.PZR-0001 — Pressurizer Pressure Control Malfunction

## Purpose

Provides operator actions for responding to malfunctions in the pressurizer pressure control system, including instrument failures and their effects on reactor protection.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q5</div>
When a PZR pressure channel fails high, actual RCS pressure lowers. This causes the OT Delta-T setpoint to lower. The OT Delta-T trip actuates first (before the low PZR pressure trip) because the OT Delta-T setpoint is moving toward the actual Delta-T value.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q9</div>
With PZR spray valve failed open and heaters energized but unable to maintain pressure: manual reactor trip directed at <span class="hi-exam">RCS pressure 2000 psig and lowering</span>. <span class="hi-trap">Basis: prevent challenging automatic reactor trip on OT&Delta;T — not the low PZR pressure trip at 1865 psig rate-compensated.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #4</div>
2PR2 PZR PORV seat leakage. Entry cue: OHA E-28 PZR HTR ON PRESS LO with rising PORV tailpipe temperature. Diagnostic method: close both block valves (2PR6, 2PR7), stabilize RCS pressure, then open each block valve individually — the one causing tailpipe temp to rise identifies the leaking PORV (<span class="hi-exam">2PR2 via 2PR7</span>). CRS enters <span class="hi-exam">TS 3.4.5 action a</span> (1 hour to close PORV block valve with power maintained) and evaluates TS 3.2.5.b if RCS pressure below <span class="hi-exam">2200 psia [2185 psig]</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q7</div>
PORV fails open, cannot close in manual: <span class="hi-exam">next required action is CLOSE the associated block valve</span>. <span class="hi-trap">Opening the control power breaker is only done if the block valve FAILS to close.</span> CAS: if RCS pressure drops to <span class="val-trip">2000 psig</span> and continues to drop, TRIP the reactor. Basis: simulator scenarios showed reactor tripped at <span class="hi-exam">1950 psig on OT&Delta;T</span>, so 2000 psig value was chosen to prevent automatic trip. <span class="hi-trap">1900 psig distractor: low pressure reactor trip setpoint is 1865 psig (rate-compensated) — 1900 psig is plausible but not the procedure value.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-a</div>
PZR pressure channel 1 fails high → MPC drives both spray valves fully open. Operator takes MPC to manual and lowers demand. <span class="hi-exam">Alternate path: 2PS1 fails to close when MPC demand zeroed</span>. Procedure path: Step 3.3 YES (controlling channel failed) → 3.5 MPC to MANUAL → 3.6 adjust per Attachment 2 → 3.17 spray valve(s) failed YES → <span class="hi-exam">3.18 place 2PS1 in MANUAL → 3.19 close 2PS1</span>. CAS: if RCS pressure drops to <span class="val-trip">2000 psig</span> and continues to drop → trip reactor and stop <span class="hi-exam">21 and 23 RCPs</span>.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2019 #1</div>
PZR Pressure Channel I fails high at 4% power (Event 2). RO places MPC in Manual, restores pressure by selecting Channel III, returns MPC to Auto. CRS enters TSAS for <span class="hi-exam">3.3.3.1 Action 6, 3.3.2.1 Action b.19, 3.4.5 Action b (1 hour), and 3.2.5.b (2 hour if RCS < 2200 psia)</span>. RO places 2PR1 in Manual and closes <span class="hi-exam">2PR6 Block Valve</span>. WCC removes control power to 2PR6.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2019 #4</div>
2PR2 PORV leaks at 88% power (Event 1). Crew recognizes from elevated PORV tailpipe temperatures. Isolates by opening both block valves sequentially: 2PR6 tailpipe temps stable, 2PR7 tailpipe temps rising → <span class="hi-exam">close 2PR7 to isolate 2PR2</span>. CRS enters TSAS <span class="hi-exam">3.4.5 Action a (1 hour LCO)</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q11</div>
With lowering PZR pressure, AB.PZR-0001 directs closing <span class="hi-exam">BOTH PZR PORV Stop valves</span> when attempting to determine if the PORVs are the source of the pressure reduction. Per drawing 203301, both PZR PORVs and Safeties discharge into a single line going to the PRT. The <span class="hi-exam">3 Safeties each have their own individual tailpipe temperature sensor, while the 2 PORVs share one sensor on a common discharge line</span> — so there is no way to distinguish which PORV is leaking from temperature alone. Closing both PORV Stops, then re-opening one (<span class="hi-exam">2PR8</span>), allows the leaking valve to be identified by tailpipe temperature response. <span class="hi-trap">Trap: Rx Head Vent leakage is NOT addressed in AB.PZR-0001 — head vent leaks are diagnosed as RCS leaks, not via the PORV/Safety discharge logic.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #1</div>
PZR Pressure Channel I fails high during startup at ~6% power. Both spray valves fully open, PZR heaters de-energize. RO places MPC in manual, lowers demand to close spray valves. Selects <span class="hi-exam">Channel III</span> for control, returns MPC to Auto. Closes <span class="hi-exam">2PR6</span>, places 2PR1 in Manual. WCC removes control power from 2PR6. PO removes failed channel IAW <span class="hi-exam">S2.OP-SO.RPS-0003</span>. Tech Specs: 3.3.1.1 Action 6, 3.3.2.1.b Action 19, <span class="hi-exam">3.4.5 Action b (1 hr LCO)</span>, 3.2.5 DNB (2 hr LCO).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q17</div>
After a 21 SGFP trip at 100% MOL (no operator action, no Rx trip), an UNEXPECTED RC PRESS DEVIATION hi Console Alarm directs entry into AB.PZR-0001. The <span class="hi-exam">RC PRESS DEVIATION setpoint is +75 psig deviation</span> — this corresponds to when the spray valves are full open. After the initial insurge from the load rejection and the subsequent large amount of inward rod motion, <span class="hi-exam">spray valves should be shut</span>; if pressure deviation persists, the condition is unexpected and AB.PZR-0001 is entered.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q36</div>
2PS1 PZR Spray Valve fails open at 4% power during a startup hold (cannot be shut). With NO operator action, RCS pressure decreases. Below P-10 the <span class="hi-exam">Low PZR Pressure reactor trip is BLOCKED</span> — the FIRST automatic protective action is <span class="hi-exam">SI on Low PZR Pressure</span>. Low PZR Pressure SI is reinstated during heatup/pressurization when RCS pressure was &gt;<span class="val-normal">1915 psig</span> (P-11). PZR level does not rise to the high-level Rx trip setpoint (the leak path depressurizes through the spray line). OT/DT trip would not initiate at 4% power.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2017 ESG-7</div>
2PR2 PZR PORV develops a leak (~30 gpm) during a 76%→89% power ascension. Crew identifies the leak from <span class="hi-exam">lowering PZR pressure / rising PORV tailpipe temp / rising charging flow / lower spray valve demand / PRT indications</span>. Diagnostic isolation: RO closes <span class="hi-exam">both PORV stop valves (2PR6 and 2PR7)</span>, then opens 2PR6 (tailpipe temps still lowering), then opens 2PR7 (tailpipe temps rising) — confirms <span class="hi-exam">2PR2 leaking</span>. RO closes 2PR7 to isolate. CRS enters <span class="hi-exam">TSAS 3.4.5 action a</span> (1-hour LCO).
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #3</div>
PZR Pressure Channel I (PT-455) fails HIGH during a 2% power ascension. PZR heaters de-energize, both PZR Spray valves drive fully open. RO places Master Pressure Controller in manual and lowers demand to close sprays. Selects <span class="hi-exam">Channel III</span> for control, matches MPC demand to current pressure, returns MPC to AUTO. Shuts <span class="hi-exam">2PR6</span> and dispatches WCC to remove power from 2PR6 within <span class="hi-exam">one hour of the channel failure IAW Tech Specs</span>. PO removes failed channel from service IAW <span class="hi-exam">S2.OP-SO.RPS-0003</span>. CRS enters TSAS <span class="hi-exam">3.3.1.1 Action 6, 3.3.2.1.b Action 19*, 3.4.5.b, and 3.2.5</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q87</div>
For a PORV (2PR1) failing open: MPC output lowers as PZR pressure drops; the PORV is isolated by shutting its Block Valve. <span class="hi-exam">A failed-open PORV isolated by its Block Valve requires a unit shutdown if not restored within 72 hours (TS 3.4.5.b)</span>; a leaking PORV isolated by its Block Valve (power maintained) does NOT require shutdown. See [[Pressurizer Level & Press Control]], [[TS 3/4.4 — Reactor Coolant System]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #2</div>
Entered on a controlling PZR Pressure channel (Channel I / PT455) failing low (<span class="hi-exam">OHAs D-16 RC PRESS LO, E-12 PZR PRESS LO, E-28 PZR HTR ON PRESS LOW</span>). Crew places Master Pressure Controller in MANUAL, adjusts demand per Attachment 2, <span class="hi-exam">selects PZR Pressure Channel III for control</span>, restores Master Controller to AUTO, then removes the failed channel from service. CRS enters TSAS <span class="hi-exam">3.3.1.1 Action 6, 3.3.2.1.b Action 19, and 3.4.5 Action b</span> and directs closing/de-energizing 2PR6 PORV block valve.
</div>

## Connections

- Related systems: [[Pressurizer & PRT]], [[Pressurizer Level & Press Control]], [[RPS/SSPS]], [[ECCS]]
- Related exam questions: [[2016 Q11]], [[2016 Q17]], [[2016 Q36]], [[2020 Q7]], [[2022 Q9]], [[2023 Q5]], [[2015 Q87]]
- Related JPMs: [[2020 JPM Sim-a]]
- Related scenarios: [[2016 Scenario 3]], [[2017 Scenario 7]], [[2018 Scenario 1]], [[2019 Scenario 1 — Power Ascension / LOCA Outside Containment]], [[2019 Scenario 4 — SGFP Trip / Loss of Heat Sink]], [[2022 Scenario 4]], [[2015 Scenario 2]]
- Related exam: [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2017 NRC Operating Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]]
