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

**Exam & operating coverage:**

### SI Setpoints and Automatic Actuation

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q36</div>
Which valves block injection if they fail to reposition on an SI signal: <span class="hi-exam">1SJ12 AND 1SJ13 (BIT Outlet)</span> — together with BIT inlet 1SJ4/5, they are normally SHUT and receive an OPEN signal from SSPS on SI; failure to open blocks BIT injection. <span class="hi-trap">1CV40/41 (VCT Outlet) get a close signal but charging-pump suction auto-realigns to the RWST via 1SJ1/1SJ2; 11/12SJ49 (RHR Discharge to Cold Leg) are normally OPEN at power and do not reposition; 11/12SJ44 (Containment Sump Isolation) open in EOP-LOCA-3 for cold-leg recirc and provide NO injection flow.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q41</div>
On a return-to-service heatup, <span class="hi-exam">only a single centrifugal charging pump is allowed in service</span>; its ~550 gpm runout cannot keep RCS pressure from degrading against a large (2000 gpm) leak. The Low PZR Pressure SI is still blocked (&lt;P-11 / &lt;1915 psig), so ECCS auto-actuation comes from <span class="hi-exam">Containment High Pressure SI (≥4 psig)</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q27</div>
During a LOCA, <span class="hi-exam">Phase A isolation, Feedwater Isolation, and Containment Ventilation isolation all actuate on the SI signal</span> — Phase A would occur by 4 psig in containment if not sooner. By the time containment pressure reaches 12 psig these have already actuated, so the only new automatic action between 12 and 18 psig is Main Steamline Isolation at 15 psig. See [[Main Steam]], [[Containment]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q5</div>
Automatic SI actuation setpoints: <span class="hi-exam">PZR Pressure &lt; <span class="val-trip">1765 psig</span></span> (2/3 coincidence) OR <span class="hi-exam">Containment Pressure &gt; <span class="val-trip">4 psig</span></span> (2/3 coincidence). At 11:00 with Containment Pressure 4.1 psig, the Hi Containment Pressure SI setpoint is exceeded — this is the <span class="hi-exam">earliest SI signal</span> (PZR pressure at 1864 psig has not yet reached the 1765 psig setpoint). <span class="hi-trap">Trap: candidates may look only at PZR pressure and miss the Containment Pressure signal being satisfied first.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q65</div>
SI indication on one train failure: <span class="hi-exam">"SI & FW ISOL" Red lamp on 2RP4 FLASHES when SSPS trains disagree</span> (one train actuated, one did not). LIT solid means both trains actuated. The "SI RESET" Green bezel light is LIT on the train that FAILED to actuate, and extinguished on the train that DID actuate.
</div>

### SI Initiation — Manual and Failed Actuation

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-d</div>
EOP-FRHS-1 bleed-and-feed at Step 21 (entered from Step 4 when WR levels in at least two SGs are &lt;32% / 37% adverse). Step 21 caution: <span class="hi-exam">Steps 24 thru 29 must be performed quickly and without interruption</span>. Step 22 INITIATE SI: Safeguards key actuates Table B (2SJ4/5, 2SJ12/13 OPEN BIT inlet/outlet; 2CV68/69 CLOSED Charging Discharge; 21-24 SJ54 OPEN; 2SJ1/2 OPEN; 2CV40/41 CLOSED) and Table C (2SJ30, 21/22 SJ33, 2SJ135, 21/22 SJ134) for the SI pumps. Verify <span class="hi-exam">21 OR 22 Charging Pump running with BIT flow established</span>, ANY SI pump running with Table C valves open. <span class="hi-exam">Step 24 alternate path: 2PR2 PORV fails to open in MANUAL → open 2RC40 thru 2RC43 (Reactor Head Vents)</span> using four key-locked switches on 2RP3 backpanel as alternate bleed path.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #2</div>
With a single MSIV stuck open after the MSLI, 23 SG blows down and generates an automatic SI signal on steamline Delta-P — but the <span class="hi-exam">auto SI initiation is failed</span>. The crew must recognize the failed auto actuation of the ESF and <span class="hi-exam">manually actuate SI from the control room prior to completion of EOP-TRIP-1 step 5 (CT#1)</span> to avoid degraded ECCS capacity. Reinforces backing up an expected auto-SI and manually initiating it when automatic actuation fails.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #2</div>
A 2nd PZR pressure channel (PT457) fails low and causes an <span class="hi-exam">auto Inadvertent SI on Lo PZR pressure</span>. The crew backs up SI, verifies safeguards, then performs SI Termination (EOP-TRIP-3) — resetting SI/Phase A/Phase B, stopping all but one charging pump (CT#1), and stopping both SI and both RHR pumps with RCS pressure &gt; 1540 psig stable/rising.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #1</div>
After manual SI for 150 gpm SBLOCA, EOP-TRIP-1 Step 12 safeguard valve verification reveals <span class="hi-exam">2SJ12 and 2SJ13 (BIT isolation valves) failed to auto-open</span> on the SI signal — high-head ECCS injection has NOT been established. Crew recovery (CT#2 — CT-6): <span class="hi-exam">RO manually opens 2SJ12 and 2SJ13 to establish BIT flow before transitioning out of TRIP-1</span>. Acceptance: charging flow &ge;100 gpm on SI systems charging flow meter. Failure to manually start at least one charging/SI (high-head) pump under these conditions constitutes a violation of facility license condition per the ESG critical task basis.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q87</div>
EOP-TRIP-4 CAS directs <span class="hi-exam">SI actuation</span> when PZR level cannot be maintained > 4% (or subcooling reaches 0 degrees F). With charging maxed out (2CV55 and 2CV71 fully open) and PZR level still lowering at 10%, the CAS criterion is met — actuate SI and return to EOP-TRIP-1. <span class="hi-trap">Trap: TRIP-4 does NOT direct transition to EOP-LOCA-1 — it directs SI actuation and return to TRIP-1.</span>
</div>

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

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q18</div>
In EOP-FRCC-1 (inadequate core cooling), the intact SGs are depressurized at maximum rate to lower RCS pressure and <span class="hi-exam">inject the ECCS accumulators</span>. Before initiating that depressurization (Step 13), an adequate secondary heat sink must exist: <span class="hi-exam">SG NR level in at least one SG &gt; 9% OR total AFW flow &gt; <span class="val-normal">22E4 lbm/hr</span></span>. At 2 psig containment (below the 4 psig adverse threshold), the normal 9% value applies, <span class="hi-trap">not 15% adverse</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q84</div>
During degraded core cooling recovery (EOP-FRCC-2), after depressurizing to inject accumulators, a RED Thermal Shock path is <span class="hi-trap">NOT acted on immediately — stopping the cooldown would let the core boil away injected accumulator water and re-uncover</span>. See [[EOP-FRCC-2 — Response to Degraded Core Cooling]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2012 Sim-b</div>
The two series accumulator discharge check valves (xxSJ55 / xxSJ56) are forward-flow tested in MODE 6 per S2.OP-ST.SJ-0006: isolate the accumulator outlet valve (xxSJ54), then open it and time the blowdown to the RCS until accumulator pressure reaches <span class="hi-exam">35 psig</span>. Accumulator Blowdown Time = Stopwatch Reading − Disk Movement Time (<span class="hi-exam">1.15 s</span>). A blowdown time that is too long fails the check valves — the 22 Accumulator check valves are <span class="hi-exam">UNSAT when blowdown time &gt;27.79 seconds</span>. See [[S2.OP-ST.SJ-0006 — Inservice Testing Safety Injection Valves Mode 6]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-c</div>
Raising accumulator level and pressure per S2.OP-SO.SJ-0002: P&amp;L 3.1 requires <span class="hi-exam">level be adjusted before pressure</span>. Level is raised with a Safety Injection Pump (fill lineup: START 21 SI pump → OPEN 2SJ53 → OPEN 2SJ123 → OPEN the accumulator fill valve 24SJ20), closing the fill valve when level reaches the target on 2LI935D/2LI934D, then restoring the lineup. Pressure is raised with N2 (OPEN 2NT32 N2 SUPPLY, then 24SJ93 N2 SUPPLY) — <span class="hi-exam">accumulator pressure rises very rapidly</span>, so the N2 supply valve is closed promptly at the target pressure on 2PI936D/2PI937D. Step 5.2.2 N/As 21SJ134 because RCS pressure is &gt;2000 psig. See [[S2.OP-SO.SJ-0002 — Accumulator Operations]], [[TS 3/4.5 — ECCS]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-c</div>
EOP-TRIP-6 Step 12 SI Accumulator isolation at RCS pressure &lt;1000 psig: remove lockout from 21-24 SJ54 (Accumulator Outlet Valves) at 2RP4, depress CLOSE PB on 21-24 SJ54. Alternate path: <span class="hi-exam">24 SJ54 fails to close (CLOSE PB OFF override). Vent 24 Accumulator to atmospheric pressure via 2NT35 (N2 HDR VALVE) and 24 SJ93 (N2 SUPPLY VALVE)</span> after verifying RCS pressure &gt; accumulator nitrogen pressure. Close vent valves when 24 Accumulator pressure reaches zero.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 Sim-c</div>
EOP-TRIP-6 Step 12 — Isolate SI Accumulators: with RCS pressure &lt;1000 psig, remove lockout from 21-24 SJ54 Accumulator Outlet Valves at 2RP4 panel. Close all four SJ54s. <span class="hi-exam">24SJ54 fails at intermediate position</span> (alternate path) — consult TSC, then vent 24 Accumulator: verify RCS pressure > accumulator N2 pressure, open <span class="hi-exam">2NT35 (N2 HDR VALVE)</span> and <span class="hi-exam">24SJ93 (N2 SUPPLY VALVE)</span>, observe accumulator pressure lowering to zero, then close both vent valves.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-d</div>
SI Accumulator makeup using 21 SI Pump (S2.OP-SO.SJ-0002 Section 5.2): prerequisite <span class="hi-exam">ALL RCS Cold Leg Temps >312°F</span>. Start 21 SI Pump → open <span class="hi-exam">2SJ53 (discharge test line)</span> → open <span class="hi-exam">2SJ123 (test line to CVCS HUT)</span> → open <span class="hi-exam">21SJ20 (accumulator fill)</span>. Close 21SJ20 when level reaches <span class="hi-exam">60%</span>. CAUTION: do NOT cross-tie accumulators while OPERABILITY required. If RCS pressure &lt;2000 psig, must close <span class="hi-exam">21SJ134 (Cold Leg Discharge)</span> first — may require TSAS 3.5.2 entry.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-c</div>
EOP-LOCA-1 Step 14 accumulator isolation: when at least two RCS T-Hots < <span class="hi-exam">405F</span>, remove lockout and close 21-24 SJ54. If <span class="hi-exam">24SJ54 fails to close</span> (alternate path), vent the unisolated accumulator: open <span class="hi-exam">2NT35 (N2 HDR Valve)</span> and <span class="hi-exam">24SJ93 (N2 Supply Valve)</span> to depressurize the accumulator to zero.
</div>

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

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q34</div>
A small (1") RCS break is <span class="hi-exam">within the capability of the two high-pressure injection pumps (11 and 12 CVCS charging pumps)</span> to prevent a major PZR pressure drop. A loss of the 1A 4KV vital bus removes <span class="hi-exam">11 RHR, 11 CS, and 13 Charging pumps</span> (and 11 CFCU), but for this small break <span class="hi-trap">none of those would be injecting — RCS pressure does not drop to their shutoff heads, and containment pressure does not rise to the CS requirement</span>. So the containment pressure response is the SAME whether or not the 1C EDG was already running.
</div>

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

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q32</div>
SBLOCA in EOP-TRIP-1 with RCS pressure at <span class="val-normal">1600 psig</span> and 11 SI pump failed: starting 11 SI pump <span class="hi-exam">provides NO additional ECCS flow</span> because <span class="hi-exam">SI pump shutoff head is <span class="val-trip">1520 psid</span></span> (with suction from 41 ft of RWST level, RCS pressure exceeds the pump's shutoff capability). Total ECCS flow remains at 400 gpm. <span class="hi-trap">Trap: 800 gpm corresponds to SI pump flow at 1082 psid; 1000 gpm assumes ~full SI pump flow could be added — SI pumps deliver no flow above their 1520 psid shutoff head.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q16</div>
SI pump shutoff head is <span class="hi-exam">1520 psig</span>. If RCS pressure is above 1520 psig (e.g., 1700 psig) and SI flow is indicated, this confirms a <span class="hi-exam">cold leg discharge leak</span> (flow should be zero above shutoff head). Per EOP-LOCA-6 step 2, close <span class="hi-exam">2SJ135 (Cold Leg Discharge Valve)</span> to isolate SI pump cold leg leak. Note: 21/22 SJ49 valves isolate RHR cold legs, not SI cold legs.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 RO-A2</div>
Tagout boundary for repair of the 11 SI pump (Unit 1). The blocking-point set spans the SI pump suction/discharge/mini-flow isolation valves, the 4KV pump breaker, the SI cross-over isolation valves (11SJ113 / 12SJ113, or the manual cross-over valve 1SJ114), associated bezels, and vents/drains. Reinforces that isolating an ECCS train requires positive-isolation valves (not check valves) and at least one vent and one drain inside the boundary.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 SRO-A2</div>
Review of a tagging list for an instrument leak on 21 SI pump. <span class="hi-exam">Closing 2SJ30 (RWST to SI Pump Stop Valve) would render BOTH 21 and 22 SI pumps inoperable</span> — the proper boundary is 21SJ33. The 21 SI pump recirc line must be isolated with the isolation valve <span class="hi-exam">21SJ65</span> (a check valve, 21SJ64, is NOT relied upon for personnel protection), and the ECCS cross-connect (21/22SJ113, or 2SJ114) must also be tagged. Initial conditions: no other ECCS-related TS action statements are in effect.
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

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q42</div>
RWST level reference: <span class="hi-exam">20 ft = 190000 gallons</span>. With 2A Vital Bus lost (losing "A" bus loads), ECCS draw rate = 1100 gpm (both charging pumps) + 650 gpm (1 SI pump) + 2600 gpm (1 CS pump) = <span class="hi-exam">4350 gpm total</span>. After 6 minutes: 190000 - 26100 = <span class="hi-exam">163900 gallons (>16 ft, still above 15.24 ft)</span>. <span class="hi-trap">If "B" bus loads were lost instead, the higher draw rate would drop RWST to 147700 gallons in 6 minutes — below 15.24 ft. Knowing which bus powers which ECCS/CS pumps is critical for RWST depletion rate calculations.</span>
</div>

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

**Exam & operating coverage:**

### Pump Power Supply and SEC Sequencing

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q12</div>
ECCS pump power supply mapping: <span class="hi-exam">22 SI Pump is powered from 2C 4KV Vital Bus</span>; <span class="hi-exam">22 RHR Pump is powered from 2B 4KV Vital Bus</span>. During a Reactor Trip + SI coincident with LOOP and EDG 2C unavailable: 22 RHR Pump is running (2B bus powered by EDG 2B), but 22 SI Pump is stopped (2C bus de-energized). <span class="hi-trap">Pump number does NOT indicate bus assignment — 22 RHR is on B bus, 22 SI is on C bus.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q14</div>
SEC Mode 2 (Blackout only) — load sequencer starts <span class="hi-exam">Charging Pumps ONLY</span>. <span class="hi-trap">SI and RHR pumps are NOT started without an SI accident signal.</span> SI pumps powered from <span class="hi-exam">2A and 2C 4KV Vital buses</span> (not 2B). SEC Modes: Mode 1 = Accident only, Mode 2 = Blackout only, Mode 3/4 = Accident plus Blackout.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q19</div>
SI pump bus mapping: <span class="hi-exam">11/12 SI pumps are powered from 1A/1C 4KV Vital Buses</span> (corresponding 22 SI = 2C bus on Unit 2 — see [[ECCS]] 2019 Q12 callout). On a LOOP with NO SI signal, the SECs strip the 4KV vital bus breakers BEFORE sequencing on BLACKOUT loads, so <span class="hi-exam">neither SI pump runs</span> — including any SI pump previously running for IST (it trips with the bus strip and is not auto-restarted). SI pumps only restart in SEC Mode III (accident signal coupled with Blackout). <span class="hi-trap">Common trap: assuming a running pump's breaker remains shut through a LOOP/bus strip — it does not.</span>
</div>

### ECCS Flow vs. RCS Pressure and Shutoff Heads

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q23</div>
ECCS injection flow is <span class="hi-exam">limited by RCS pressure</span> — the higher the RCS pressure, the lower the high-head ECCS delivery. This is the basis for the EOP-FRHS-1 CAUTION that the bleed-and-feed steps be performed quickly: a delay lets cooling degrade and RCS pressure rise, which <span class="hi-exam">reduces ECCS flow</span> when bleed and feed is finally initiated. See [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]]. Related W/E evolution questions: [[2015 Q22]] (LOCA outside containment leak isolation via RHR/SI valves), [[2015 Q24]] (loss of emergency recirculation — recovery of recirc capability).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q3</div>
SBLOCA with 2A 4KV bus faulted and LOOP: <span class="hi-exam">only one SI pump available</span> (the SI pump on the remaining vital bus). With only 1 SI pump running and all RCPs stopped, EOP-LOCA-2 Table C adverse containment subcooling requirement is <span class="hi-exam">141°F</span> for charging pump reduction. At 1035 psig (1049.7 psia), T-Sat = 550.56°F → max CET for stopping one charging pump = <span class="hi-exam">409°F</span>. <span class="hi-trap">Trap: with 2 SI pumps running the subcooling requirement would be 135°F, not 141°F. Candidates must determine the number of available SI pumps based on 4KV bus alignment.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q33</div>
ECCS flow at <span class="val-normal">300 psig</span> RCS with 2C 4KV bus de-energized: 22 SI Pump (on 2C bus) unavailable. Remaining ECCS: <span class="hi-exam">21 Charging Pump at runout = 560 gpm + 21 SI Pump at runout = 675 gpm = <span class="hi-exam">1235 gpm total</span></span>. RHR pumps at shutoff head (><span class="hi-exam">170 psid</span>) — <span class="hi-exam">no RHR flow at 300 psig</span>. <span class="hi-trap">RHR pumps only deliver flow when RCS pressure < 170 psig during injection. 300 psig is below RHR initiation for shutdown cooling (~340 psig) but above RHR pump shutoff head for LOCA injection.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q31</div>
During a SBLOCA, a <span class="hi-exam">cold leg break produces the highest peak clad temperature</span>. Because ECCS pumps inject into the cold legs, a cold leg break allows injected ECCS water to be <span class="hi-exam">lost directly out the break before reaching the core</span>, reducing the effectiveness of core cooling. Hot leg, CRDM housing, and PZR steam space breaks are analyzed scenarios but do not produce the worst PCT.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q76</div>
ECCS injection at <span class="hi-exam">1450 psig</span>: both <span class="hi-exam">charging pumps (shutoff head 2670 psig) AND SI pumps (shutoff head 1520 psig) are injecting</span>. RHR pumps (shutoff head 170 psig) are NOT injecting at this pressure. <span class="hi-trap">Common trap: believing only charging pumps inject at 1450 psig because it is "close" to SI pump shutoff head — 1450 psig is below 1520 psig, so SI pumps deliver flow.</span>
</div>

### EOP-Directed ECCS Pump Management

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q35</div>
Expected vs unexpected overhead alarms during a LOCA: <span class="hi-exam">D-41 (BIT DISCH PRESS HI) setpoint <span class="val-alarm">2610 psig</span></span> is UNEXPECTED — charging-pump discharge pressure stays just above the LOCA-depressed RCS pressure, well below 2610 psig. EXPECTED alarms: <span class="hi-exam">C-12 (22 CFCU AIRFLO TRBL)</span> whenever a CFCU is in slow speed (which occurs on SI); <span class="hi-exam">C-10 (CNTMT SUMP OVERFLO)</span> as the sump fills after Phase A isolation; and <span class="hi-exam">D-48 (SUBCLG CH B MARGIN LO) at 10°F margin to saturation</span> since the LOCA loses subcooling.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q83</div>
EOP-FRTS-1 Step 12 ECCS pump reduction (PURPLE path, MSLB with multiple faulted SGs, ECCS contributing to overcooling): <span class="hi-exam">stop all ECCS pumps except 21 or 22 charging pump</span>. Companion AFW action (Step 3.5) maintains AFW flow &gt;22E4 lbm/hr until at least ONE intact SG NR level is &gt;15%.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q32</div>
Per EOP-FRTS-1 bases: <span class="hi-exam">ECCS flow may contribute to RCS cooldown or prevent subsequent reduction in RCS pressure</span> during a PTS condition. FRTS-1 directs SI termination to reduce cold ECCS injection, and RCP restart to <span class="hi-exam">mix cold incoming ECCS water with warm reactor coolant</span>, decreasing the likelihood of brittle fracture. <span class="hi-trap">SI termination is NOT because a "soak" requires it — some SBLOCA conditions prevent SI termination even in FRTS-1.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q18</div>
SJ49s (Cold Leg Isolation Valves) are <span class="hi-exam">normally open and NOT Phase A valves</span>. To operate: only CMC switch on 2RP4 to VALVE OPERABLE (no Phase A reset needed). <span class="hi-exam">Monitor RCS pressure rise to determine if LOCA outside containment is isolated.</span>
</div>

### Minimum ECCS Flow — LOCA-5

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 SRO-A1</div>
EOP-LOCA-5 Figure A — Minimum ECCS Flow Versus Time After Trip: at <span class="hi-exam">50 minutes</span> post-trip, minimum flow = <span class="hi-exam">390 gpm</span>. With 21 SI pump at 420 gpm and 22 Charging pump at 360 gpm: <span class="hi-exam">stop 22 Charging pump</span> (360 &lt; 390, cannot meet minimum alone), <span class="hi-exam">keep 21 SI pump</span> (420 &gt; 390, exceeds minimum alone). Contrast 2023 SRO-A1.a at 100 min (290 gpm minimum) where neither pump could be stopped.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 SRO-A1.a</div>
EOP-LOCA-5 Step 16.1: minimum ECCS injection flow from Figure 1 at <span class="hi-exam">100 minutes post-trip is 290 gpm</span> (280-320 gpm acceptable). With one SI pump at 160 gpm and one charging pump at 220 gpm, neither alone meets 290 gpm — <span class="hi-exam">NONE can be stopped</span>.
</div>

### LOCA Injection Scenarios

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q35</div>
Loss of all AC power for at least one day: the consequence is <span class="hi-exam">loss of ECCS pumped injection capability combined with RCP seal leakage leading to core uncovery</span> (best-case time to core uncovery &lt;20 hours per the Loss of All AC Power lesson plan). Containment pressure rises only to ~3 psig and temperature by ~40°F as the RCS drains through the RCP seals. <span class="hi-trap">Containment is NOT degraded — it is designed for a LBLOCA in which all RCS mass is released, so long-term recovery is not affected.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q82</div>
On an unisolable SBLOCA outside containment, EOP-LOCA-6 (LOCA Outside Containment) <span class="hi-exam">transitions to EOP-LOCA-5 (Loss of Emergency Coolant Recirculation)</span> — where the crew adds makeup to the RWST, initiates a cooldown, and minimizes injection flow. (Transition to LOCA-1 would apply only if the break were isolated.) See [[EOP-LOCA-6 — LOCA Outside Containment]], [[EOP-LOCA-5 — Loss of Emergency Coolant Recirculation]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #3</div>
On an SBLOCA with coincident LOOP, the <span class="hi-exam">first SI train attempted fails to initiate</span> — the crew initiates SI on the other train. High-head injection then fails because no charging pump is delivering (one CCP tripped earlier, the other fails to auto-start on the SEC). <span class="hi-exam">CT#2: establish flow from at least one high-head SI pump (manually start a charging pump) prior to transition out of TRIP-1</span> to avoid degraded ECCS capacity. See [[2014 Scenario 3]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #1</div>
LBLOCA (RCS loop 22 failure) with <span class="hi-exam">AUTO SI FAILURE</span> — crew manually initiates SI before transition out of [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]. Additionally, <span class="hi-exam">both 21 and 22 RHR pumps fail to start on the SEC signal</span> — crew blocks/resets 2A and 2B SECs and manually starts both RHR pumps. <span class="hi-exam">CT#1: manually start at least one low-head ECCS pump before transition out of TRIP-1.</span> Verify charging &ge;100 gpm, SI &ge;100 gpm, and RHR &ge;300 gpm on both 21/22SJ49s. Later at RWST lo level (15.2 ft), CT#2 transfers ECCS to cold leg recirculation per [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #3</div>
In a total loss of secondary heat sink with no centrifugal charging pumps available, the crew initiates <span class="hi-exam">RCS bleed and feed</span> (FRHS-1 Step 23): stop all RCPs, <span class="hi-exam">initiate SI</span>, and open both PZR PORVs. The bleed path depressurizes the RCS so that the <span class="hi-exam">high-head ECCS (SI) pumps</span> can inject — CT#1 (CT-46) is to initiate bleed and feed before the RCS saturates above the SI pump shutoff head, preventing sustained core uncovery. See [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #1</div>
LBLOCA with <span class="hi-exam">auto SI failure on both trains</span> (CT#1, CT-2): RO must manually actuate SI before transition out of TRIP-1. FSAR analyses assume at least one train of safeguards actuates. Additionally, <span class="hi-exam">22 RHR pump (low-head ECCS) fails to start on SEC signal</span> (CT#2, CT-5) — RO must manually start 22 RHR before transition out of TRIP-1. FSAR LBLOCA analysis requires minimum pumped injection from one each high-head, intermediate-head, and low-head pump. In EOP-LOCA-5, crew reduces ECCS to one train (CT#3): stops all but one charging pump, runs only one SI pump.
</div>

### Semi-Automatic Switchover (Unit 2)

At <span class="val-alarm">15.2 ft</span> RWST level (2/4 RWST level channels), the following automatic actions occur on Unit 2:

- <span class="hi">21 & 22 SJ113s (SI to Charging Pump Crossover Valves) OPEN automatically</span> — these valves are "armed" in the normal 100% power ECCS lineup for semi-automatic switchover
- SJ44s (RHR Pump Sump Suction Valves) do NOT open automatically — operator must manually "arm" them if sump level > 62%, then they will auto-open
- RH4s (RHR Pump Suction Valves) do NOT close automatically at this level
- CS36s (RHR Discharge to Containment Spray Header) are manipulated manually at LO-LO RWST level

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q10</div>
<span class="hi-exam">21 and 22CC16 (RHR HX CCW isolation valves) do NOT receive an automatic OPEN signal on SI</span>. They open only when the <span class="hi-exam">ARM PB is depressed AND RWST level reaches 15.2 ft</span> — manual alignment is required to place ECCS in cold leg recirc. Until then, the <span class="hi-exam">RHR pumps are cooled by either flow through the pump from RWST (LBLOCA) or recirc flow (SBLOCA until pp is S/D)</span> — not by CCW through the RHR HX. <span class="hi-trap">Trap: candidates may assume CC16s open automatically with SI for "long-term cooling" — they do not.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q33</div>
EOP-LOCA-3 Cold Leg Recirculation alignment with <span class="hi-exam">21SJ44 failed to open</span>: the procedure directs <span class="hi-exam">stopping 21 RHR pump</span>, and it remains stopped as long as 21SJ44 is shut (step 5.2). <span class="hi-exam">21SJ45 is interlocked with 21SJ44 such that it cannot be opened with 21SJ44 shut</span>. The 21CS36 interlock is with RH1 and RH2 (must be SHUT before CS36 can be OPENED). Final lineup: ALL containment sump recirculation flow through <span class="hi-exam">22SJ45 (to Charging/SI pump suctions) and 22CS36 (to spray headers)</span>. <span class="hi-trap">Trap: under ALL circumstances, when 22 RHR pump is running at RWST lo-lo level alarm, 22SJ49 (cold leg isolation) is shut — recirc flow does NOT go through 22SJ49.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q4</div>
RWST Level LO alarm triggers the start of cold leg recirculation transfer (IAW EOP-LOCA-1). <span class="hi-exam">21SJ44 and 22SJ44 (Containment Sump Suction Valves) each serve one RHR pump independently</span>. With 21SJ44 closed, <span class="hi-exam">ONLY 22 RHR pump</span> can draw suction from the containment sump. <span class="hi-trap">Trap: unlike some other ECCS suction arrangements (e.g., SJ1/SJ2 for CCPs where both can take suction from RWST if one fails), the containment sump suction valves are NOT cross-connected — each SJ44 serves only its associated RHR pump.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q41</div>
At <span class="hi-exam">RWST level < 15.2 ft on 2/4 channels</span>, Unit 2 semi-automatic switchover opens <span class="hi-exam">SJ113 valves (SI to Charging Pump Crossover)</span> automatically because they are "armed" in the normal 100% power ECCS lineup. <span class="hi-trap">SJ44s (RHR Pump Sump Suction) require manual arming by the operator first — they are NOT automatically armed at normal power. Unit 1 has an interlock requiring RH4 closed before SJ44 opens.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 Sim-b</div>
Manual transfer to cold leg recirculation (EOP-LOCA-3) on RWST lo level: depress the <span class="hi-exam">SUMP AUTO ARMED pushbuttons on the 21 and 22 SJ44 bezels</span> (containment sump >62% lights lit), then remove lockouts on 2SJ67 / 2SJ68 (SI Pumps Miniflow) and 2SJ69 (Common Suction) by rotating the 2RP4 lockout switches to VALVE OPERABLE. If a sump valve fails (here <span class="hi-exam">22 SJ44 will not open</span>), the affected RHR pump is left stopped and the crew runs a single-train recirculation alignment, finishing by opening 21SJ45 (RHR Discharge to SI pump valve). See [[RHR]], [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]].
</div>

### Changeover to Recirculation Phase
1. Containment sump level shows adequate submergence of sump strainer
2. RWST level low alarm alerts operator
3. Operator initiates switchover to cold leg recirculation
4. RHR pumps realigned from RWST to containment sump
5. SI and charging pumps take suction from RHR pump discharge (piggyback)

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q34</div>
In recirc the RHR (low-head) pumps feed suction to the high-head SI pumps; closing the RH19s prevents RHR pump runout with a single RHR pump operating, so <span class="hi-exam">a 22 RHR pump trip with both RHR pumps running does NOT cause SI or charging pump cavitation</span> — instead it removes the RHR-fed containment spray path (22CS36). See [[RHR]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-b</div>
APPX-7 ECCS pump-stopping order: <span class="hi-exam">downstream Charging and SI pumps must be stopped BEFORE the upstream RHR pump that supplies their suction</span>. Stopping RHR pumps with cavitating downstream ECCS pumps still drawing from RHR discharge is failure criteria. Final recirculation alignment after sump blockage clears: ONE RHR pump + ONE Charging or SI pump (single-pump per side) drawing from containment sump via 21/22 SJ44.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #1</div>
LBLOCA ~5 min after a false-SI reactor trip in which the <span class="hi-exam">low-head ECCS (RHR) pumps fail to auto actuate</span> — RO manually starts 22 charging pump and 21/22 RHR pumps. <span class="hi-exam">CT#1 (E-O-H): manually start at least one RHR pump before transitioning out of [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]</span> (low-head ECCS required for the LBLOCA). At RWST 15.2 ft the crew transfers to cold leg recirculation per [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]]; CT#3 (time-critical) windows from the RWST Lo level alarm: <span class="hi-exam">close 2SJ69 ≤ 3.7 min, stop a CS pump ≤ 5.5 min, complete switchover ≤ 11.2 min</span>. CT#4: trip 22 charging pump when it cavitates during the transfer (2SJ1/2SJ2 shut) before pump/piping damage causes a LOCA outside containment.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #2</div>
LBLOCA with both trains of auto SI failing. One SI keyswitch also fails to manually actuate — RO uses other train keyswitch to initiate SI on both trains <span class="hi-exam">(CT#1: CT-2)</span>. After SI, containment pressure >15 psig — Phase B and Spray auto-initiated. Cold leg recirculation transfer (CT#2: CT-36): at RWST lo level alarm (15.2 feet), crew performs EOP-LOCA-3. Time-critical steps: close <span class="hi-exam">2SJ69 within ~3.7 min</span>, stop 22 CS pump within ~5.5 min, complete recirc alignment (Step 15: close 2SJ67/2SJ68, open 21SJ45/22SJ45, close 2SJ30/2SJ1/2SJ2, place 21RH29/22RH29 in manual/closed) within <span class="hi-exam">~11.2 min</span>.
</div>

### Hot Leg Recirculation
<span class="hi-trap">Initiated at ~14.0 hours (Unit 1) or ~6.5 hours (Unit 2)</span> after switchover to cold leg recirculation to assure termination of boiling. Minimum one SI pump aligned for hot leg recirculation flow. (UFSAR 6.3.2)

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q4</div>
EOP-LOCA-4 (Transfer to Hot Leg Recirculation) is performed during a Large Break LOCA to <span class="hi-exam">ensure boron does not concentrate in the reactor vessel (due to boil off) to the point of solidification and blockage of coolant channels</span>. RHR and Intermediate Head SI pumps realign to the RCS hot legs <span class="hi-exam">~14 hr (Unit 1) / 6.5 hr (Unit 2)</span> after the LOCA (UFSAR §15); EOP-LOCA-1 step 28 directs the transfer.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q24</div>
EOP-FRCC-1 step 18 RCP start criteria: if CETs <span class="val-trip">>1200°F</span> and at least one SG NR level <span class="hi-exam">>9% (15% adverse containment)</span>, start one RCP at a time for each idle loop with SG NR >9%. If no SG meets criteria, <span class="hi-exam">reset Phase A, open both CA330s, open both PZR PORVs and Rx Head Vents</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 Sim-b</div>
EOP-LOCA-4 hot leg recirc with two alternate paths: (1) <span class="hi-exam">21SJ45 CLOSED for 21 RHR pump maintenance</span> — RHR-to-SI cross-connect unavailable; (2) <span class="hi-exam">22 SI pump tripped during LOCA-3</span> — must use 21 SI pump via Step 6.1. Starts in EOP-LOCA-1 Step 27: close 21/22 SJ40, remove lockouts, verify Valve Operable backlights. LOCA-4 alignment: CLOSE 22CS36 (RHR supply to CS) → OPEN 22SJ49 (cold leg isolation) → realign 21 SI pump for hot leg injection.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-b</div>
EOP-LOCA-4 hot leg recirculation: realign 21 SI pump from cold leg to hot leg injection — <span class="hi-exam">STOP pump → CLOSE 21SJ134 (cold leg discharge) → OPEN 21SJ40 (hot leg discharge, key-locked) → START pump</span>.
</div>

## Single Failure Criteria

- <span class="hi">During injection phase: tolerant of any single active failure</span>
- <span class="hi">During recirculation phase: tolerant of one active or one passive failure</span> (but not in addition to an injection phase failure)
- All active ECCS components located outside containment in Auxiliary Building
(UFSAR 6.1.1.4, 6.3.2)

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q43</div>
ECCS is the system ESFAS actuates; <span class="hi-exam">10 CFR 50.46(b)</span> (Salem FSAR §15.4.1.1) gives the LOCA acceptance criteria a failure to initiate ECCS could violate — the tested criterion is that <span class="hi-exam">cladding oxidation may exceed 17% of total clad thickness</span>. <span class="hi-trap">PCT criterion is 2200°F (not 1800°F); H2 generation criterion is 1% (not 10%); RV level lowering below the top of active fuel during LBLOCA blowdown is analyzed, not a failed criterion.</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.5 — ECCS]]** — ECCS subsystem operability
- **[[TS 3/4.5 — ECCS|TS 3/4.5.1]]** — Accumulators (Modes 1, 2, 3 with pressurizer pressure ≥1000 psig)
- **[[TS 3/4.5 — ECCS|TS 3/4.5.2]]** — ECCS Subsystems (Tavg ≥350°F)
- **[[TS 3/4.5 — ECCS|TS 3/4.5.3]]** — ECCS Subsystems (Tavg <350°F)
- **[[TS 3/4.5 — ECCS|TS 3/4.5.4]]** — RWST

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q35</div>
ECCS LCO <span class="hi-exam">TS 3.5.2 requires 2 complete trains of ECCS</span>; the <span class="hi-exam">22 charging pump (hi-head ECCS) is required for the B train</span>, so its trip makes TS 3.5.2 applicable. See [[TS 3/4.5 — ECCS]], [[CVCS]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q77</div>
A single inoperable charging pump (hi-head ECCS) in Modes 1-3 enters <span class="hi-exam">ONLY the ECCS LCO (TS 3.5.2.a)</span> — 72 hours to restore or be in Hot Shutdown within the next 12 hours. See [[CVCS]], [[TS 3/4.5 — ECCS]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q77</div>
ECCS subsystem composition: each of the two independent ECCS subsystems includes <span class="hi-exam">one centrifugal charging pump (high-head)</span>, one SI pump (intermediate-head), and one RHR pump + HX (low-head). <span class="hi-exam">The 23 Charging Pump (positive displacement) is NOT part of an ECCS subsystem</span> — it counts only toward TS 3.1.2.4 (Charging Pumps for reactivity control). Loss of one centrifugal charging pump = one ECCS subsystem inoperable → TS 3.5.2 applies (72 hours to restore, then Hot Shutdown in 12 hours).
</div>

## Connections

- Related EOPs: [[EOP-FRTS-1 — Response to Imminent Pressurized Thermal Shock]], [[EOP-LOCA Series]], [[EOP-LOCA-4 — Transfer to Hot Leg Recirculation]], [[EOP-APPX-7 — Containment Sump Blockage]], [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]], [[EOP-TRIP-6 — Natural Circulation Cooldown Without RVLIS]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-FRCC-1 — Response to Inadequate Core Cooling]]
- Related procedures: [[EOP-TRIP-4 — Natural Circulation]], [[S2.OP-SO.SJ-0002 — Accumulator Operations]], [[S2.OP-ST.SJ-0006 — Inservice Testing Safety Injection Valves Mode 6]], [[S1.OP-ST.SJ-0001 — 11 Safety Injection Pump Inservice Testing]], [[S1.OP-SO.SJ-0001 — Preparation of the Safety Injection System for Operation]]
- Related exam questions: [[2014 Q4]], [[2014 Q34]], [[2014 Q35]], [[2015 Q18]], [[2015 Q22]], [[2015 Q23]], [[2015 Q24]], [[2016 Q4]], [[2016 Q5]], [[2016 Q10]], [[2016 Q19]], [[2016 Q22]], [[2016 Q23]], [[2016 Q24]], [[2016 Q26]], [[2016 Q29]], [[2016 Q32]], [[2016 Q33]], [[2016 Q36]], [[2016 Q39]], [[2016 Q73]], [[2016 Q79]], [[2016 Q83]], [[2016 Q84]], [[2018 Q4]], [[2018 Q5]], [[2018 Q63]], [[2019 Q5]], [[2019 Q12]], [[2020 Q3]], [[2020 Q16]], [[2020 Q17]], [[2020 Q32]], [[2020 Q41]], [[2020 Q42]], [[2020 Q77]], [[2020 Q87]], [[2023 Q16]], [[2023 Q29]], [[2023 Q31]], [[2023 Q65]], [[2023 Q76]], [[2023 Q87]], [[2022 Q14]], [[2022 Q18]], [[2022 Q24]], [[2022 Q33]], [[2022 Q61]], [[2015 Q27]], [[2015 Q34]], [[2015 Q35]], [[2015 Q77]], [[2015 Q82]], [[2015 Q84]], [[2014 Q22]], [[2014 Q23]], [[2014 Q24]], [[2014 Q41]], [[2014 Q43]], [[2014 Q84]], [[2014 Q88]], [[2012 Q3]], [[2012 Q6]], [[2012 Q8]], [[2012 Q15]], [[2012 Q18]], [[2012 Q19]], [[2012 Q20]], [[2012 Q21]], [[2012 Q22]], [[2012 Q24]], [[2012 Q35]], [[2012 Q36]], [[2012 Q45]]
- Related JPMs: [[2014 JPM Sim-b]], [[2018 JPM Sim-c]], [[2019 JPM SRO-A1]], [[2019 JPM Sim-b]], [[2023 JPM SRO-A1.a]], [[2023 JPM Sim-b]], [[2022 JPM Sim-c]], [[2020 JPM Sim-d]], [[2020 JPM SRO-A5]], [[2016 JPM Sim-b]], [[2016 JPM Sim-c]], [[2016 JPM Sim-d]], [[2015 JPM Sim-c]], [[2014 JPM RO-A2]], [[2014 JPM SRO-A2]], [[2012 JPM Sim-b]]
- Related scenarios: [[2012 Scenario 1]], [[2012 Scenario 2]], [[2016 Scenario 1 — PZR Level Channel Failure / RCS Leak / SBLOCA / SBLOCA Escalation]], [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]], [[2018 Scenario 2]], [[2019 Scenario 1 — Power Ascension / LOCA Outside Containment]], [[2019 Scenario 3 — ATWS / Stuck-Open PORV]], [[2022 Scenario 1 — Load Reduction / LBLOCA]], [[2015 Scenario 1]], [[2015 Scenario 2]], [[2015 Scenario 3]], [[2015 Scenario 4]], [[2014 Scenario 2 — Steam Dump Failure / Failure of Auto SI / Loss of All AFW]], [[2014 Scenario 3]], [[2014 Scenario 4 — Steam Generator Tube Rupture without Pressurizer Pressure Control]]
- Related exam: [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2016 NRC Operating Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
