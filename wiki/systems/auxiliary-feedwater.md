---
title: AFW
category: systems
status: draft
aliases:
  - auxiliary feedwater system
  - AFW
---

# AFW

## Function

Provides feedwater to steam generators when the main feedwater system is unavailable. Ensures decay heat removal via the steam generators following reactor trip, loss of main feedwater, or loss of offsite power. Safety-related. (UFSAR 10.4.9)

## Pumps

| Parameter | Motor-Driven (2) | Turbine-Driven (1) |
|-----------|------------------|---------------------|
| Number | 2 | 1 |
| Power Source | Vital buses (EDG-backed) | Main steam (no AC required) |
| SG Supply | Each can supply 2 SGs | Can supply all 4 SGs |
| DC Control Power | Vital DC | Vital DC |

## Actuation Signals

| Pump | Actuation Signals | Source |
|------|------------------|--------|
| Turbine-Driven | 2/3 Lo-Lo level in any 2 SGs; OR RCP bus undervoltage (1/2 twice); OR manual (local and remote) | UFSAR T7.2-1 |
| Motor-Driven | 2/3 Lo-Lo level in any SG; OR trip of both main FW pumps; OR safeguards sequence signal; OR blackout sequence signal; OR manual (local and remote) | UFSAR T7.2-1 |

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q16</div>
AFW pump start behavior with controllers in LOCAL MANUAL: <span class="hi-exam">LOCAL MANUAL disables all automatic AFW starts EXCEPT those initiated by the SECs</span>. On SI (SEC Mode 1), the SECs send automatic start signals to <span class="hi-exam">ONLY 21 and 22 MDAFW pumps (not 23 TDAFW)</span>. Consequently, with all controllers in LOCAL MANUAL, a Reactor Trip + SI will start ONLY 21 and 22 AFW pumps. <span class="hi-trap">23 TDAFW does NOT receive an SEC start signal — it starts on 2/3 Lo-Lo level in 2/4 SGs, RCP bus undervoltage, or manual only.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q19</div>
MDAFW pump power supply and SEC Mode 2 start: <span class="hi-exam">22 AFW Pump is powered from 2B 4KV Vital Bus</span>. When 2B bus de-energizes and 2B SEC actuates in Mode 2 (blackout), the SEC starts 22 AFW Pump after bus restoration. At 15% power with 21 SGFP still running, SG levels drop but <span class="hi-exam">none reach the Lo-Lo 14% setpoint for automatic MDAFW start</span>. Only 22 AFW is running (from the SEC Mode 2 start on 2B bus). <span class="hi-trap">21 AFW Pump is powered from the A bus (NOT the B bus) — 21 AFW does NOT start because the 2A SEC has no blackout signal.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q20</div>
AFW Pressure Override Runout Protection: with PRESSURE OVERRIDE NORMAL light illuminated, runout protection is enabled. <span class="hi-exam">When 21 AFW Pump trips, discharge pressure goes to 0 psig → 23AF21 and 24AF21 AUTOMATICALLY close</span> (runout protection closes AF21 valves when discharge pressure < <span class="val-trip">1085 psig</span>). AFW flow to 23 and 24 SGs goes to 0 LBM/HR. <span class="hi-trap">If PRESSURE OVERRIDE DEFEAT had been selected, the AF21 valves would NOT have auto-closed — they would remain in position and AFW flow would still drop to zero (no pump running) but the valves would stay open.</span> Trip of a MDAFW pump does NOT cause automatic start of 23 TDAFW.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q44</div>
Trip of both SGFPs generates an automatic start of <span class="hi-exam">ONLY the MDAFW pumps</span>. The <span class="hi-exam">TDAFW pump does NOT start on trip of both SGFPs</span> — the TDAFW pump starts on <span class="hi-exam">2/3 Lo-Lo level in any 2/4 SGs (14% NR)</span>, RCP bus undervoltage, or manual actuation. <span class="hi-trap">Common trap: believing all AFW pumps start on both SGFPs trip, or that the TDAFW pump starts on 1/4 SGs at 14% — it requires 2/4 SGs at 14%.</span> Per S2.OP-SO.CN-0002, a removed-from-service SGFP is placed in the tripped condition, so the "trip of both SGFPs" interlock is already half-satisfied.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q31</div>
AMSAC AFW pump start mapping: <span class="hi-exam">AMSAC Train A starts 21 AFW pump (motor-driven). AMSAC Train B starts 22 AFW pump (motor-driven). Either train starts 23 AFW pump (turbine-driven).</span> A spurious actuation of ONLY Train A starts 21 and 23 AFW pumps. <span class="hi-trap">Trap: 22 AFW does NOT start on Train A — it only starts on Train B. The turbine-driven pump (23) starts on either train.</span>
</div>

## Water Sources

- **Primary:** Condensate storage tank
- **Backup:** Service water system (safety-related, unlimited supply from Delaware River)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q41</div>
23 AFW Turbine-Driven pump governor maintains <span class="hi-exam">constant turbine speed</span> as SG pressure lowers (designed to operate with SG pressures as low as 100 psig). As SG pressure decreases, the differential pressure across the feedpump discharge and the SG increases, so <span class="hi-exam">AFW flow RISES even though turbine speed remains constant</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q43</div>
Instrument air supply line rupture to <span class="hi-exam">2MS132 (23 AFW Turbine Steam Inlet Valve) causes the valve to fail OPEN</span>. This starts the 23 AFW pump, injecting cold feedwater into the SGs at power. <span class="hi-exam">Reactor power increases above 100% RTP</span> due to cooler feedwater (positive MTC). The digital FW system automatically adjusts MFW Reg Valves — no manual FW control needed. Operator should reduce reactor power per S2.OP-IO.ZZ-0004 (Power Operation). Maximum power level: 3459 MWt (100% RTP).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q44</div>
<span class="hi-exam">2DR6 (AFW Tank Makeup Valve) fails OPEN on loss of air</span>. This causes the AFW storage tank level to rise and potentially overflow. Per S2.OP-AB.CA-0001, Attachment 2, the <span class="hi-exam">2DR6 can be manually operated from the field</span> to control tank level.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q46</div>
2PA-3450 (AFW pump discharge pressure transmitter) fails to zero: runout protection circuit <span class="hi-exam">closes AF21 valves (flow control)</span> to protect pump from runout. To recover: place <span class="hi-exam">PRESS OVERRIDE DEFEAT switch to DEFEAT</span> to bypass the runout protection circuit and allow operator control of AF21s. <span class="hi-trap">LOCAL MANUAL is indication only in the control room (no auto-start signals) — it does NOT allow manual control of the AF21 valves. PRESS OVERRIDE DEFEAT is the correct recovery action.</span>
</div>

## Pump-to-SG Alignment

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q46</div>
<span class="hi-exam">21 AFW Pump (motor-driven) feeds 23 and 24 SGs.</span> 23 AFW Pump (turbine-driven) feeds all 4 SGs. Pressure override runout protection closes AF21 valves when discharge pressure is <span class="hi-exam">&lt; 1085 psig</span>, preventing pump runout. With pressure override active on 21 AFW and 23 AFW running, <span class="hi-exam">23 and 24 SG levels rise SLOWER</span> than 21 and 22 SG levels (only turbine-driven pump feeding them vs. turbine-driven feeding all 4). <span class="hi-trap">Common trap: believing 21 AFW feeds 21 and 22 SGs (pump number does NOT match SG number).</span> 23 AFW auto-starts on LOOP due to 4KV Group Bus Undervoltage.
</div>

## Key Design Points

- Turbine-driven pump is available during station blackout (no AC power required)
- Motor-driven pumps auto-start on lower SG level setpoint than turbine-driven pump
- Turbine-driven pump requires steam pressure >680 psig for IST testing

## Tech Spec LCOs

- **[[TS 3/4.7 — Plant Systems]]** — TS 3.7.1.2 requires three independent AFW pumps OPERABLE in Modes 1, 2, and 3
- 1 pump inoperable: 72 hours to restore
- 2 pumps inoperable: Hot Standby in 6 hours
- 3 pumps inoperable: immediately restore at least one

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 SRO-A4</div>
ICMF during SGTR: TD AFW pump (23 AFW) takes steam from <span class="hi-exam">21 and 23 SGs</span>. With 23 SG ruptured and <span class="hi-exam">23MS45 not yet closed</span>, primary-to-secondary leakage exits through the TD AFW pump steam supply — constitutes an <span class="hi-exam">unmonitored release in progress</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q79</div>
2MS132 (23 AFP Turbine Steam Inlet Valve) air supply line rupture: valve <span class="hi-exam">fails OPEN on loss of air</span>, causing 23 AFW pump to start at power. Cold AFW injection causes <span class="hi-exam">reactor thermal overpower (exceeds 3459 MWt)</span>. Per S2.OP-IO.ZZ-0004 (Power Operation): <span class="hi-exam">reduce turbine load</span> to lower reactor power below the administrative limit. <span class="hi-trap">AB.CA-0001 Attachment 12 provides local control of 23 AFP governor and AF21s but does NOT direct shutting down 23 AFW pump. The overpower condition must be addressed first by reducing turbine load.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #3</div>
Loss of all AFW: 21 AFP C/T for oil bubbler replacement (initial condition). 23 AFP fails to auto start on SI — PO manually starts. <span class="hi-exam">22 AFP trips on overcurrent</span>. <span class="hi-exam">23 AFP trips on overspeed</span>. No SG NR levels > 9% (15% adverse), total AFW flow < 22E4 lbm/hr. CFST Heat Sink Red Path → transition to EOP-FRHS-1. <span class="hi-exam">CT#2 (CT-43): Establish feed flow to one SG before bleed and feed is required.</span> Recovery via condensate system (MS10 depressurization + BF40/BF19 bypass).
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #4</div>
At 2% power during startup, 21 SGFP trips — AFW pumps <span class="hi-exam">fail to auto-start</span> (both motor-driven AFW pump auto-start signals failed). PO manually starts 21 and 22 AFW pumps, sets 21-24 AF21 demands to 0% first, then throttles AF21s to maintain SG levels between +/-5% of program. PO throttles AFW flow to no less than <span class="hi-exam">22E4 lbm/hr</span> after reactor trip.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #5</div>
Complete loss of all AFW following reactor trip: <span class="hi-exam">21 AFP trips on overcurrent</span> (overcurrent relay flag up), <span class="hi-exam">22 MDAFW pump lost with 2B 4KV bus</span> (bus differential protection), <span class="hi-exam">23 AFP trips on overspeed</span>, <span class="hi-exam">MSPI AFW pump fails on overspeed</span>. No SG NR levels >9% (15% adverse), total AFW flow <22E4 lbm/hr → transition to EOP-FRHS-1. CT-43: establish condensate feed flow before bleed and feed required. Bleed and feed criteria: 3 WR levels <20% (25% adverse). Caution: steam 21 and 23 SGs last to maximize 23 AFW pump steam supply availability.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q18</div>
AFW backleakage (S2.OP-PT.AF-0002): monitoring required <span class="hi-exam">30 to 60 minutes</span> after an AFW Pump is shutdown in Modes 1-3 (P&L 3.1). Backleakage of hot feedwater can disable motor-driven AFW pumps by causing <span class="hi-exam">vapor binding (steam binding)</span> — per SOER 84-3. <span class="hi-trap">Trap: backward rotation is a concern for RCPs (which have anti-reverse-rotation devices), not AFW pumps. The AFW failure mode is steam/vapor binding from hot feedwater backing into the pump suction piping.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q66</div>
MDAFW pump power supply confirmation: <span class="hi-exam">11 AFW Pump is powered from 1A 4KV Vital Bus</span>. With 1A 4KV de-energized, 11 AFW is lost. Per EOP-LOSC-2 Step 1: if the 13 AFW Pump (TDAFW) is the <span class="hi-exam">ONLY source of AFW flow</span> (both MDAFWs unavailable), steam must NOT be isolated to the 13 AFW Pump. <span class="hi-trap">Must trace 4KV bus to AFW pump mapping: 1A 4KV → 11 AFP, 1B 4KV → 12 AFP. With both MDAFWs unavailable, the TDAFW pump is the only remaining source and must be preserved.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q15</div>
EOP-SGTR-1 Step 6 AFW control to ruptured SG: if ruptured SG NR level is &lt;9%, <span class="hi-exam">establish AFW flow until NR level &gt;9%, then isolate AFW and maintain &gt;9%</span>. Purpose is to keep tubes covered. <span class="hi-trap">19% is the EOP Rev 30 level for INTACT SG maintenance — not the ruptured SG.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q3</div>
After a manual main turbine trip (e.g., RTBs failed and operators tripped via the RDMG breakers), the SGs shrink and SG NR level lowers. The <span class="hi-exam">AFW pumps automatically start on SG lo-lo level</span> — no direct crew action is required. This is one of several automatic responses (group bus auto-transfer, generator output breaker auto-open) that continue to function even when the RTB-driven auto turbine trip is bypassed.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q20</div>
Loss of 2A 115VAC VIB AFW impact (no SI): <span class="hi-exam">23AF21 and 24AF21 fail closed</span> due to pressure override as power is lost to the AFW discharge pressure transmitter — power is also lost to the AF21 valve controllers. AB.115-0001 Step 13 dispatches an <span class="hi-exam">NEO to locally throttle 23AF21 and 24AF21</span>. <span class="hi-trap">Without an SEC actuation, 21 AFW Pump does NOT auto-start on a Rx trip alone — and manual start is not required by AB.115-0001 for this condition. PRESSURE OVERRIDE DEFEAT is NOT useful here because power is lost to the valve controllers themselves, not just the transmitter.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q51</div>
Trip of both SGFPs caused by FW Isolation: the trip-of-both-SGFPs MDAFW auto-start signal is <span class="hi-exam">inhibited when the SGFP trips are caused by a FW Isolation</span>. With 21 SGFP already manually tripped (per S2.OP-SO.CN-0002) and 24 SG NR &gt;<span class="val-trip">67%</span> driving FW Isolation, both SGFPs trip but no AFW pumps auto-start immediately. SG NR levels remain above the AFW pump auto-start setpoint of <span class="val-alarm">9%</span> at 35% initial power, so all AFW pumps would only auto-start if levels fall &lt;9%. EOP-TRIP-2 step 3 (NO path) directs operators to <span class="hi-exam">start 21–23 AFW pumps as necessary to establish &gt;<span class="val-normal">22E4 lbm/hr</span> total AFW flow</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q53</div>
<span class="hi-exam">21-23AF141 (AUX FDWTR PMP INLET AUTO VENT RLSE) valves</span> design purpose: <span class="hi-exam">to facilitate filling lines upon aligning alternate water sources to the suction header</span>. Alternate sources align through the <span class="hi-exam">normally jacked-closed AF52 Alternate Suction Valves</span> from <span class="hi-exam">Demin Water, Fresh Water / Fire Protection, and Service Water</span>. Per S2.OP-SO.AF-0001 Section 5.10 (Alternate Sources Alignment), operators ensure <span class="hi-exam">21-23AF140 Auto Vent Isolation Valves</span> are open, allowing the alternate suction line to fill and vent through the <span class="hi-exam">AF141 auto vents, which close when the line is vented</span>. Prevents AFW line voiding and water hammer prior to AFW pump start on alternate source.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q65</div>
SS94 (SG B/D Sample Valves) interaction with AFW auto-start circuit: <span class="hi-exam">SG lo-lo level closes the SS94s</span> as part of the AFW auto-start logic. The <span class="hi-exam">SGBD sample isolation bypass</span> bypasses ONLY the lo-lo level input into that circuit; <span class="hi-trap">it does NOT defeat Phase A — Phase A is a separate input that also keeps the SS94s closed. After lo-lo bypass is reset, Phase A reset is still required before SS94s can be reopened.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q83</div>
EOP-FRTS-1 PURPLE path AFW flow target (Step 3.5): <span class="hi-exam">maintain AFW flow &gt;22E4 lbm/hr until at least ONE intact SG NR level is &gt;15%</span>. With all SG NR levels &lt;9% (less than the 15% adverse threshold), the crew is directed to maintain &gt;22E4 lbm/hr. <span class="hi-trap">FRSM-1 (not FRSM-2) directs &gt;44E4 lbm/hr coupled with boration until IR SUR is negative — do not confuse the two flow targets.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q85</div>
EOP-LOSC-2 / LOSC-1 transition with AFW flow at <span class="hi-exam">1.0E4 lbm/hr to each SG</span>: a pressure rise in any SG after LOSC-2 Step 20 (post SI termination) directs GO TO EOP-LOSC-1 — AFW flow is maintained while transition occurs. The 1.0E4 lbm/hr per-SG target is the LOSC-2 reduced-flow band for cooldown control under faulted-SG conditions.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q54</div>
AFW Pressure Override circuit (runout protection) — pump-to-AF21 mapping: the Pressure Override circuit holds the AFW pump discharge AF21 valves <span class="hi-exam">SHUT until AFW pump discharge pressure rises above the runout setpoint</span>, then permits them to open. During normal standby, this keeps AF21s shut even though normal valve demand is set to <span class="val-normal">~98%</span>. With Pressure Override removed from a single pump, that pump's associated AF21s will <span class="hi-exam">open to current demand</span>. <span class="hi-exam">Salem Unit 1 mapping: 11 AFW pump feeds 13 and 14 AF21s only; 12 AFW pump feeds 11 and 12 AF21s</span> — pump number does NOT match AF21 number on the same SG.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q90</div>
Total loss of Control Air during power ascension at 7%, post manual trip: <span class="hi-exam">2MS132 (23 AFW Turbine Steam Inlet Valve) fails OPEN</span> on loss of CA, starting the <span class="hi-exam">23 AFW (TDAFW) pump operating at maximum speed</span>. Per AB.CA-0001, dispatch a Field Operator to <span class="hi-exam">locally establish manual speed control of 23 AFW pump</span> to prevent runout and SG overfill. Concurrent feed-flow loss: BF19s/40s fail SHUT on loss of CA, FW Interlock actuates with reactor tripped + Tavg low setpoint reached. <span class="hi-trap">At 7% during power ascension, Main Feed has already been established and AFW secured per the IOP — so &quot;MDAFW pumps previously in service&quot; distractors are wrong. Pressure Override does NOT preclude using 21/22 AFW as feed supply.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 IP-j</div>
<strong>AFW Backleakage Surveillance (S1.OP-PT.AF-0002):</strong> performed <span class="hi-exam">30–60 min after an AFW Pump shutdown</span> (per P&L 3.1) to detect hot-feedwater backleakage that can <span class="hi-exam">vapor (steam) bind</span> motor-driven AFW pumps. Read AFW line temperatures from <span class="hi-exam">1TA165551</span> (4 line readings, one per AFW supply line). Acceptance logic: SAT only when each line &lt; 120 °F AND ΔT (highest − average) ≤ 10 °F; vent required when any line ≥ 160 °F. Vent locations on 11 AFW Pump: <span class="hi-exam">11AF83 (AF PUMP VENT)</span> and <span class="hi-exam">11AF114 (AF PUMP DISCH VENT)</span> — slowly throttle open until a solid stream of water is observed, then close. Reference: SOER 84-3.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #2</div>
21 SG tube leak escalating to rupture. After 21 SG identified as the affected SG, CRS dispatches operator to <span class="hi-exam">shut 21MS45 — the steam supply to 23 AFW pump</span>; this renders 23 AFW inoperable and the CRS enters <span class="hi-exam">LCO 3.7.1.2 (less than 3 operable AFW pumps)</span>. After the manual trip and SI for the SGTR, <span class="hi-exam">21 AFW pump trips</span> (4-minute delay simulator trigger) — PO redistributes flow between 22 AFW pump (supplies 21/22 SGs) and 23 AFW pump (supplies all SGs). In EOP-SGTR-1, isolating feed flow to 21 SG is part of <span class="hi-exam">CT#1 (CT-18)</span>: PO closes <span class="hi-exam">21AF11 and 21AF21</span> (and later trips 23 AFW pump after 21 SG is fully isolated). Pump-to-SG mapping: 21 AFW pp → 23/24 SGs; 22 AFW pp → 21/22 SGs; 23 AFW pump → all SGs.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #1</div>
After manual reactor trip and SI for SBLOCA, <span class="hi-exam">21 and 22 AFW pumps fail to auto-start</span> because SEC loading on 2A and 2B vital buses does not complete; <span class="hi-exam">23 AFW pump starts but provides no AFW flow</span>. CT#1 (CT-4) recovery — establish at least <span class="hi-exam">22E4 lbm/hr AFW flow</span> (or &ge;9% NR level in at least one SG) before transition to FRHS-1 is required: crew blocks 2A/2B SECs, attempts reset, <span class="hi-trap">2A SEC will not reset</span>, dispatches operator to deenergize 2A SEC, then RO manually starts 22 AFW pump (and 21 AFW pump). PO subsequently maintains 19-33% SG NR level.
</div>

## Connections

- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-LOSC-2 — Uncontrolled Depressurization of All Steam Generators]]
- Related procedures: [[EP-SA-325 — Emergency Plan Implementing Procedures]], [[S2.OP-PT.AF-0002 — AFW Backleakage Testing]], [[AB.115-0001 — Loss of 115V Vital Instrument Bus]], [[S2.OP-SO.AF-0001 — Auxiliary Feedwater System Operation]], [[S2.OP-SO.CN-0002 — Steam Generator Feed Pump Operation]], [[AB.CA-0001 — Loss of Control Air]]
- Related exam questions: [[2016 Q3]], [[2016 Q15]], [[2016 Q20]], [[2016 Q51]], [[2016 Q53]], [[2016 Q54]], [[2016 Q65]], [[2016 Q76]], [[2016 Q78]], [[2016 Q83]], [[2016 Q85]], [[2016 Q90]], [[2018 Q18]], [[2018 Q66]], [[2019 Q16]], [[2019 Q19]], [[2019 Q20]], [[2019 Q31]], [[2019 Q71]], [[2020 Q10]], [[2020 Q18]], [[2020 Q44]], [[2020 Q46]], [[2020 Q100]], [[2023 Q41]], [[2023 Q43]], [[2023 Q44]], [[2022 Q46]], [[2022 Q79]]
- Related JPMs: [[2023 JPM SRO-A4]], [[2016 JPM IP-j]]
- Related scenarios: [[2016 Scenario 1 — PZR Level Channel Failure / RCS Leak / SBLOCA / SBLOCA Escalation]], [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]], [[2018 Scenario 1]], [[2018 Scenario 2]], [[2019 Scenario 1 — Power Ascension / LOCA Outside Containment]], [[2019 Scenario 3 — ATWS / Stuck-Open PORV]], [[2019 Scenario 4 — SGFP Trip / Loss of Heat Sink]], [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]], [[2020 Scenario 4 — SGTR / PORV Failure]], [[2020 Scenario 5 — Loss of Heat Sink / Condensate Recovery]]
- Related exam: [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]]
