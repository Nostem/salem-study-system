---
title: ECCS
category: systems
status: draft
aliases:
  - safety injection
  - SI
---

# ECCS

## Function

The ECCS provides borated water to cool the reactor core in the event of a loss-of-coolant accident (LOCA). It injects borated water into the RCS to: (1) terminate any reactivity increase, (2) provide initial core cooling and reflooding, and (3) replenish coolant lost from the primary system. The boron in the injected water combined with control rods ensures shutdown reactivity. (UFSAR 6.1, 6.3)

## Safety Injection Actuation Signals

| Signal | Coincidence | Source |
|--------|------------|--------|
| Low Pressurizer Pressure | 2/3 | UFSAR 6.3.2 |
| High Containment Pressure (Hi) | 2/3 | UFSAR 6.3.2 |
| High Steam Line Differential Pressure | 2/3 (between any two SGs) | UFSAR 6.3.2 |
| High Steam Line Flow | 1/2 per line in 2/4 lines, AND (Low-Low Tavg 2/4 OR Low Steam Line Pressure 2/4) | UFSAR 6.3.2 |
| Manual | 1/2 | UFSAR 6.3.2 |

The SI signal initiates: reactor trip, diesel generator start, safeguards sequence, and Phase A containment isolation. (UFSAR 6.3.2)

## ECCS Components

### Accumulators (Passive — Cold Leg Injection)

| Parameter | Value | Source |
|-----------|-------|--------|
| Number | 4 (one per cold leg) | UFSAR T6.3-2 |
| Type | Stainless steel clad/carbon steel | UFSAR T6.3-2 |
| Design Pressure | 700 psig | UFSAR T6.3-2 |
| Design Temperature | 300°F | UFSAR T6.3-2 |
| Normal Operating Pressure | 650 psig | UFSAR T6.3-2 |
| Minimum Operating Pressure | 595.5 psig | UFSAR T6.3-2 |
| Total Volume | 1350 ft³ | UFSAR T6.3-2 |
| Minimum Operating Water Volume | 831.9 ft³ | UFSAR T6.3-2 |
| N₂ Gas Volume | 500 ft³ | UFSAR T6.3-2 |
| Boron Concentration (nominal/min) | 2000 / 1900 ppm | UFSAR T6.3-2 |
| Code | ASME III Class C | UFSAR T6.3-2 |

Isolated from RCS by two check valves in series. Inject when RCS pressure falls below accumulator pressure. For a large LOCA, accumulators begin injecting ~10 seconds after the break. (UFSAR 6.3.2.2)

### Centrifugal Charging Pumps (High Head — Cold Leg Injection)

| Parameter | Value | Source |
|-----------|-------|--------|
| Number | 2 | UFSAR T6.3-5 |
| Type | Horizontal multi-stage centrifugal | UFSAR T6.3-5 |
| Design Pressure | 2800 psig | UFSAR T6.3-5 |
| Design Temperature | 300°F | UFSAR T6.3-5 |
| Design Flow Rate | 150 gpm | UFSAR T6.3-5 |
| Design Head | 5800 ft | UFSAR T6.3-5 |
| <span class="hi">Max Flow Rate</span> | <span class="hi">560 gpm</span> | UFSAR T6.3-5 |
| Head at Max Flow | 1300 ft | UFSAR T6.3-5 |
| <span class="hi">Shutoff Discharge Pressure</span> | <span class="hi">2670 psig</span> | UFSAR T6.3-5 |
| Motor HP | 600 | UFSAR T6.3-5 |
| Material | Stainless steel | UFSAR T6.3-5 |

### Safety Injection Pumps (Intermediate Head — Cold Leg Injection)

| Parameter | Value | Source |
|-----------|-------|--------|
| Number | 2 | UFSAR T6.3-5 |
| Type | Horizontal multi-stage centrifugal | UFSAR T6.3-5 |
| Design Pressure | 1700 psig | UFSAR T6.3-5 |
| Design Temperature | 300°F | UFSAR T6.3-5 |
| Design Flow Rate | 425 gpm | UFSAR T6.3-5 |
| Design Head | 2500 ft | UFSAR T6.3-5 |
| Max Flow Rate | <span class="hi">675 gpm</span> | UFSAR T6.3-5 |
| Head at Max Flow | 1500 ft | UFSAR T6.3-5 |
| Shutoff Discharge Pressure | <span class="hi">1520 psig</span> | UFSAR T6.3-5 |
| Motor HP | 400 | UFSAR T6.3-5 |
| Material | Stainless steel | UFSAR T6.3-5 |

SI pump discharge is limited to <1500 psig to prevent lifting RCS safety valves. (UFSAR 6.3.2)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q16</div>
SI pump shutoff head is <span class="hi-exam">1520 psig</span>. If RCS pressure is above 1520 psig (e.g., 1700 psig) and SI flow is indicated, this confirms a <span class="hi-exam">cold leg discharge leak</span> (flow should be zero above shutoff head). Per EOP-LOCA-6 step 2, close <span class="hi-exam">2SJ135 (Cold Leg Discharge Valve)</span> to isolate SI pump cold leg leak. Note: 21/22 SJ49 valves isolate RHR cold legs, not SI cold legs.
</div>

### Residual Heat Removal Pumps (Low Head — Cold Leg Injection)

| Parameter | Value | Source |
|-----------|-------|--------|
| Number | 2 | UFSAR T6.3-5 |
| Type | Vertical single-stage centrifugal | UFSAR T6.3-5 |
| Design Pressure | 600 psig | UFSAR T6.3-5 |
| Design Temperature | 400°F | UFSAR T6.3-5 |
| Design Flow Rate | 3000 gpm | UFSAR T6.3-5 |
| Design Head | 350 ft | UFSAR T6.3-5 |
| Max Flow Rate | <span class="hi">4500 gpm</span> | UFSAR T6.3-5 |
| Shutoff Discharge Pressure | <span class="hi">170 psig</span> | UFSAR T6.3-5 |
| Motor HP | 400 | UFSAR T6.3-5 |

RHR pumps deliver when RCS depressurizes to ~170 psig. Inject via accumulator discharge lines to cold legs. (UFSAR 6.3.2)

### Refueling Water Storage Tank (RWST)

| Parameter | Value | Source |
|-----------|-------|--------|
| Number | 1 | UFSAR T6.3-4 |
| <span class="hi">Tank Capacity</span> | <span class="hi">400000 gal</span> | UFSAR T6.3-4 |
| <span class="hi">Minimum Volume</span> | <span class="hi">364500 gal</span> | UFSAR T6.3-4 |
| Operating Pressure | Atmospheric | UFSAR T6.3-4 |
| Operating Temperature | 40–100°F | UFSAR T6.3-4 |
| Design Temperature | 120°F | UFSAR T6.3-4 |
| Outside Diameter | ~38 ft | UFSAR T6.3-4 |
| Height (straight side) | 48 ft | UFSAR T6.3-4 |
| Material | ASTM A-240 Type 304L SS | UFSAR T6.3-4 |
| Boron Concentration (nom/min/max) | 2400 / 2300 / 2500 ppm | UFSAR T6.3-4 |
| Seismic Classification | Class I | UFSAR 6.3.2 |

Provides suction source for all ECCS pumps during injection phase. Minimum volume based on refueling canal fill requirement. (UFSAR 6.3.2)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q29</div>
Automatic swapover of charging pump suction from VCT to RWST requires <span class="hi-exam">2/2 coincidence (LT-112 AND LT-114) at low-low VCT level</span>. If LT-112 fails high, the 2/2 logic is not satisfied and no auto swapover occurs — the VCT drains and the charging pump loses suction. See [[CVCS]] for full VCT level control logic.
</div>

## ECCS Operation Phases

### Injection Phase
1. SI signal actuates all ECCS pumps and opens injection valves
2. All pumps take suction from RWST
3. Accumulators inject passively when RCS pressure < accumulator pressure (~650 psig)
4. Charging pumps inject at high RCS pressures (highest head)
5. SI pumps inject when RCS < ~1500 psig
6. RHR pumps inject when RCS < ~170 psig
7. Time delay: ~25 seconds for active pumps to deliver flow

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q31</div>
During a SBLOCA, a <span class="hi-exam">cold leg break produces the highest peak clad temperature</span>. Because ECCS pumps inject into the cold legs, a cold leg break allows injected ECCS water to be <span class="hi-exam">lost directly out the break before reaching the core</span>, reducing the effectiveness of core cooling. Hot leg, CRDM housing, and PZR steam space breaks are analyzed scenarios but do not produce the worst PCT.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q33</div>
ECCS flow at <span class="val-normal">300 psig</span> RCS with 2C 4KV bus de-energized: 22 SI Pump (on 2C bus) unavailable. Remaining ECCS: <span class="hi-exam">21 Charging Pump at runout = 560 gpm + 21 SI Pump at runout = 675 gpm = <span class="hi-exam">1235 gpm total</span></span>. RHR pumps at shutoff head (><span class="hi-exam">170 psid</span>) — <span class="hi-exam">no RHR flow at 300 psig</span>. <span class="hi-trap">RHR pumps only deliver flow when RCS pressure < 170 psig during injection. 300 psig is below RHR initiation for shutdown cooling (~340 psig) but above RHR pump shutoff head for LOCA injection.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q14</div>
SEC Mode 2 (Blackout only) — load sequencer starts <span class="hi-exam">Charging Pumps ONLY</span>. <span class="hi-trap">SI and RHR pumps are NOT started without an SI accident signal.</span> SI pumps powered from <span class="hi-exam">2A and 2C 4KV Vital buses</span> (not 2B). SEC Modes: Mode 1 = Accident only, Mode 2 = Blackout only, Mode 3/4 = Accident plus Blackout.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q18</div>
SJ49s (Cold Leg Isolation Valves) are <span class="hi-exam">normally open and NOT Phase A valves</span>. To operate: only CMC switch on 2RP4 to VALVE OPERABLE (no Phase A reset needed). <span class="hi-exam">Monitor RCS pressure rise to determine if LOCA outside containment is isolated.</span>
</div>

### Changeover to Recirculation Phase
1. Containment sump level shows adequate submergence of sump strainer
2. RWST level low alarm alerts operator
3. Operator initiates switchover to cold leg recirculation
4. RHR pumps realigned from RWST to containment sump
5. SI and charging pumps take suction from RHR pump discharge (piggyback)

### Hot Leg Recirculation
<span class="hi-trap">Initiated at ~14.0 hours (Unit 1) or ~6.5 hours (Unit 2)</span> after switchover to cold leg recirculation to assure termination of boiling. Minimum one SI pump aligned for hot leg recirculation flow. (UFSAR 6.3.2)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q24</div>
EOP-FRCC-1 step 18 RCP start criteria: if CETs <span class="val-trip">>1200°F</span> and at least one SG NR level <span class="hi-exam">>9% (15% adverse containment)</span>, start one RCP at a time for each idle loop with SG NR >9%. If no SG meets criteria, <span class="hi-exam">reset Phase A, open both CA330s, open both PZR PORVs and Rx Head Vents</span>.
</div>

## Single Failure Criteria

- <span class="hi">During injection phase: tolerant of any single active failure</span>
- <span class="hi">During recirculation phase: tolerant of one active or one passive failure</span> (but not in addition to an injection phase failure)
- All active ECCS components located outside containment in Auxiliary Building
(UFSAR 6.1.1.4, 6.3.2)

## Tech Spec LCOs

- **[[TS 3/4.5 — ECCS]]** — ECCS subsystem operability
- **[[TS 3/4.5 — ECCS|TS 3/4.5.1]]** — Accumulators (Modes 1, 2, 3 with pressurizer pressure ≥1000 psig)
- **[[TS 3/4.5 — ECCS|TS 3/4.5.2]]** — ECCS Subsystems (Tavg ≥350°F)
- **[[TS 3/4.5 — ECCS|TS 3/4.5.3]]** — ECCS Subsystems (Tavg <350°F)
- **[[TS 3/4.5 — ECCS|TS 3/4.5.4]]** — RWST

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q65</div>
SI indication on one train failure: <span class="hi-exam">"SI & FW ISOL" Red lamp on 2RP4 FLASHES when SSPS trains disagree</span> (one train actuated, one did not). LIT solid means both trains actuated. The "SI RESET" Green bezel light is LIT on the train that FAILED to actuate, and extinguished on the train that DID actuate.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q76</div>
ECCS injection at <span class="hi-exam">1450 psig</span>: both <span class="hi-exam">charging pumps (shutoff head 2670 psig) AND SI pumps (shutoff head 1520 psig) are injecting</span>. RHR pumps (shutoff head 170 psig) are NOT injecting at this pressure. <span class="hi-trap">Common trap: believing only charging pumps inject at 1450 psig because it is "close" to SI pump shutoff head — 1450 psig is below 1520 psig, so SI pumps deliver flow.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q87</div>
EOP-TRIP-4 CAS directs <span class="hi-exam">SI actuation</span> when PZR level cannot be maintained > 4% (or subcooling reaches 0 degrees F). With charging maxed out (2CV55 and 2CV71 fully open) and PZR level still lowering at 10%, the CAS criterion is met — actuate SI and return to EOP-TRIP-1. <span class="hi-trap">Trap: TRIP-4 does NOT direct transition to EOP-LOCA-1 — it directs SI actuation and return to TRIP-1.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 SRO-A1.a</div>
EOP-LOCA-5 Step 16.1: minimum ECCS injection flow from Figure 1 at <span class="hi-exam">100 minutes post-trip is 290 gpm</span> (280-320 gpm acceptable). With one SI pump at 160 gpm and one charging pump at 220 gpm, neither alone meets 290 gpm — <span class="hi-exam">NONE can be stopped</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-b</div>
EOP-LOCA-4 hot leg recirculation: realign 21 SI pump from cold leg to hot leg injection — <span class="hi-exam">STOP pump → CLOSE 21SJ134 (cold leg discharge) → OPEN 21SJ40 (hot leg discharge, key-locked) → START pump</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-c</div>
EOP-LOCA-1 Step 14 accumulator isolation: when at least two RCS T-Hots < <span class="hi-exam">405F</span>, remove lockout and close 21-24 SJ54. If <span class="hi-exam">24SJ54 fails to close</span> (alternate path), vent the unisolated accumulator: open <span class="hi-exam">2NT35 (N2 HDR Valve)</span> and <span class="hi-exam">24SJ93 (N2 Supply Valve)</span> to depressurize the accumulator to zero.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #1</div>
LBLOCA with <span class="hi-exam">auto SI failure on both trains</span> (CT#1, CT-2): RO must manually actuate SI before transition out of TRIP-1. FSAR analyses assume at least one train of safeguards actuates. Additionally, <span class="hi-exam">22 RHR pump (low-head ECCS) fails to start on SEC signal</span> (CT#2, CT-5) — RO must manually start 22 RHR before transition out of TRIP-1. FSAR LBLOCA analysis requires minimum pumped injection from one each high-head, intermediate-head, and low-head pump. In EOP-LOCA-5, crew reduces ECCS to one train (CT#3): stops all but one charging pump, runs only one SI pump.
</div>

## Connections

- Related EOPs: [[EOP-LOCA Series]], [[EOP-LOCA-4 — Transfer to Hot Leg Recirculation]]
- Related procedures: [[EOP-TRIP-4 — Natural Circulation]]
- Related exam questions: [[2023 Q16]], [[2023 Q29]], [[2023 Q31]], [[2023 Q65]], [[2023 Q76]], [[2023 Q87]], [[2022 Q14]], [[2022 Q18]], [[2022 Q24]], [[2022 Q33]], [[2022 Q61]]
- Related JPMs: [[2023 JPM SRO-A1.a]], [[2023 JPM Sim-b]], [[2022 JPM Sim-c]]
- Related scenarios: [[2022 Scenario 1 — Load Reduction / LBLOCA]]
- Related exam: [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]]
