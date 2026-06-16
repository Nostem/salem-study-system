---
title: "EOP-FRHS-1 — Response to Loss of Secondary Heat Sink"
category: eops
status: draft
aliases:
  - EOP-FRHS-1
  - loss of secondary heat sink
---

# EOP-FRHS-1 — Response to Loss of Secondary Heat Sink

## Purpose

Provides operator actions for responding to a loss of secondary heat sink, including controlled depressurization of the secondary side.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q18</div>
If the depressurization rate is set too high, high steam flow coincident with Lo-Lo Tavg (P-12) actuates Main Steam Line Isolation (MSLI), which cannot be blocked. All MSIVs close and steam dumps become unavailable. Depressurization must continue via MS10 atmospheric dump valves.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 Sim-d</div>
Unisolable MSLB at the mixing bottle (all MSIVs failed open) with all SGs faulted and all AFW lost. Step 2: <span class="hi-exam">recognize ALL SGs are faulted → DO NOT FEED a faulted SG</span>. Step 4: <span class="hi-exam">neither 21 nor 22 charging pump available (21 CIT, 22 tripped) → GO TO Step 23</span> and establish bleed and feed using the <span class="hi-exam">SI pumps</span>. Steps 23-26.1 (CAUTION: steps 24 thru 29 must be performed quickly and without interruption): <span class="hi-exam">STOP ALL RCPs</span> (critical step 23) → INITIATE SI → verify Table B SI valves in Safeguards / both SI pumps running / Table C valves open → <span class="hi-exam">OPEN BOTH PZR PORVs</span> (step 26): <span class="hi-exam">2PR1 opens, 2PR2 will NOT open</span> (alternate path) → <span class="hi-exam">OPEN reactor head vents 2RC40 thru 2RC43</span> (key switches on 2RP3) as the alternate bleed path.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-d</div>
Steps 11-14 Bleed and Feed: actuate both trains SI → verify charging and SI pump flow → open all PZR PORVs. If <span class="hi-exam">2PR2 fails to open (Step 14)</span>, open <span class="hi-exam">reactor head vent valves 2RC40-2RC43</span> (key-locked on 2RP2 backpanel) as alternate bleed path.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 Sim-d</div>
Steps 21-25 Bleed and Feed: tripped at 90% due to elevated turbine vibrations (AB.TL-0001), loss of all MFW and AFW, RED Path Heat Sink CFST. Bleed and Feed criteria: <span class="hi-exam">3 SG WR levels &lt; 32%</span>. CAUTION — Steps 24-29 must be performed quickly. Stop all RCPs (already per Step 7). <span class="hi-exam">Initiate SI</span> on both trains. Verify charging and SI pump flow, BIT flow ~150-160 gpm. Open both PORV stop valves (2PR6, 2PR7). Open both PORVs in Manual — <span class="hi-exam">2PR2 fails to open</span> (alternate path). At 2RP2 backpanel, use four keys to <span class="hi-exam">open 2RC40-2RC43 reactor head vent valves</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 Sim-d</div>
Nearly identical to 2023 Sim-d. Steps 21-24 Bleed and Feed: CAUTION — Steps 24 thru 29 must be performed quickly and without interruption. Stop all RCPs (already stopped at Step 7). <span class="hi-exam">Initiate SI</span> on both trains. Verify charging and SI pump flow, BIT flow established (~235 gpm), Table C valves open. Open both PZR PORV stop valves (2PR6, 2PR7). Open both PORVs in Manual — <span class="hi-exam">2PR2 fails to open</span> (alternate path). At 2RP2 backpanel, use four keys to <span class="hi-exam">open 2RC40 through 2RC43 reactor head vent valves</span>. Bleed and Feed criteria: <span class="hi-exam">3 SG wide range levels < 20%</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-e</div>
Steps 7.2-7.5 condensate pump feed: select one SG (22 or 24 preferred — <span class="hi-exam">21 and 23 steamed LAST to preserve TD AFW pump steam supply</span>). Isolate all MS lines except selected SG. Depressurize below <span class="hi-exam">575 psig</span> using steam dumps. Bypass <span class="hi-exam">Tavg Low-Low</span> when reached. Establish condensate flow, verify WR level rising, then place steam dumps in auto.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q23</div>
Basis for the CAUTION before the bleed-and-feed steps ("TO ESTABLISH RCS HEAT REMOVAL BY RCS BLEED AND FEED, <span class="hi-exam">STEPS 24 THRU 29 MUST BE PERFORMED QUICKLY AND WITHOUT INTERRUPTION</span>"): per the FRHS Basis document, <span class="hi-exam">delay allows further degradation of cooling, followed by an RCS pressure rise, and core uncovery may be greater because ECCS flow is limited by (reduced by) RCS pressure</span>. <span class="hi-trap">Traps: (A) stopping RCPs does not terminate ALL heat removal — some cooling remains while water is left in the SGs; (B) there are no alternative steps; (D) ECCS flow is reduced (not increased) by the delay and the PZR will not go solid — the concern is reduced ECCS flow at higher RCS pressure, not PORV/code-safety-valve water-passage damage.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q64</div>
Step 23.2 bleed and feed ECCS prerequisite: the crew CAN proceed to establish the RCS Bleed Path with only <span class="hi-exam">1 Charging Pump AND 1 SI Pump running</span> — the crew continues attempts to start additional pumps while establishing the bleed path. Step 24 bleed path: crew will open <span class="hi-exam">BOTH PORVs ONLY</span>. <span class="hi-trap">Reactor Head Vents are NOT part of the standard bleed path — they are an alternate bleed path if a PORV fails to open. Also, the procedure does NOT require BOTH SI Pumps and BOTH Charging Pumps before proceeding — 1 of each is sufficient.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q64</div>
Step 23 bleed and feed prerequisite: the crew needs <span class="hi-exam">1 Charging Pump AND 1 SI Pump running</span> to proceed with establishing the RCS Bleed Path. With only 2 Charging Pumps and NO SI Pump, the crew <span class="hi-exam">can NOT proceed</span> — must continue attempts to start SI pump. Step 24 bleed path: <span class="hi-exam">opening BOTH PORVs ONLY</span> is an allowable RCS Bleed Path. <span class="hi-trap">Reactor Head Vents are NOT part of the standard bleed path in FRHS-1. The head vents are an alternate path if a PORV fails to open.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q81</div>
Step 6: Heat sink is established if feed flow is verified to at least one SG by either <span class="hi-exam">CETs lowering OR WR level rising in one SG</span>. NR level in at least one SG does NOT need to be > 9% to declare heat sink established — maintain flow to restore NR level to > 9% (15% adverse) and <span class="hi-exam">return to procedure in effect</span> (e.g., EOP-TRIP-2). <span class="hi-trap">Do not confuse: the 9% NR level is the MAINTAIN target, not the criterion for heat sink established or for returning to the base procedure.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #3</div>
Loss of all AFW flow during EOP-TRIP-1 (22 AFP trips on overcurrent, 23 AFP trips on overspeed, 21 AFP C/T). CFST Heat Sink Red Path triggers transition to EOP-FRHS-1. Both SGFPs tripped due to auto SI actuation following main turbine failure to trip. Condensate recovery: crew resets SI/Phase A/Phase B, opens <span class="hi-exam">CA330s</span>, selects one SG for depressurization to < <span class="hi-exam">575 psig</span> using MS10 atmospheric dump valve. Dispatches operator to open BF40 or BF19 at 120 ft TGA, opens BF13 and <span class="hi-exam">CN48 SGFP bypass valves</span>, closes <span class="hi-exam">CN32 SGFP suction valves</span>. <span class="hi-exam">CT#2 (CT-43): Establish feed flow to one SG before bleed and feed is required</span> — verified by SG WR level rising or CETs lowering.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q71</div>
SG feeding restrictions in FRHS-1 vs FRCC-2: EOP-FRHS-1 <span class="hi-exam">specifically FORBIDS feeding a FAULTED SG if an INTACT or RUPTURED SG is available</span>. <span class="hi-trap">EOP-FRCC-2 does NOT have this restriction — FRCC-2 allows feeding a FAULTED SG when no INTACT SG is available. Do not confuse the FRHS-1 restriction with FRCC-2 guidance.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q80</div>
Entry conditions per EOP-CFST-1: ALL SG NR Levels < 15% <span class="hi-exam">AND Total Feedwater Flow to SGs < 22E04 LB/HR</span> — BOTH conditions required (not just low NR levels alone). Step 19 — return to procedure in effect criteria (with Bleed and Feed NOT initiated and condensate aligned): crew returns when <span class="hi-exam">SG WR level starts to rise</span> in the fed SG. <span class="hi-trap">Trap: Step 19 also uses ANY SG NR > 15% (adverse) as an alternate return criterion. But with condensate just aligned and WR level rising, the WR level criterion is met first. Do not confuse: 15% adverse NR level is an alternate return criterion, not the ONLY one.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q10</div>
Secondary heat sink restoration with CETs lowering and SG WR levels at 7%: feed flow to <span class="hi-exam">ONE SG between <span class="val-normal">1E04 and 5E04 lbm/hr</span> (25-100 gpm plant-specific equivalent)</span> to prevent <span class="hi-exam">thermal shocking SG tubes</span>. Per bases: "With stable or decreasing RCS temperatures, the feedwater flow rate is limited to minimize the potential impact of excessive thermal stresses since a direct measure of the steam generator temperature is not available." <span class="hi-trap">If CETs are still RISING, the procedure requires feeding at maximum/desired rate (not limited). The flow limitation only applies when CETs are stable or lowering. The concern is SG tube thermal stress, NOT reactor vessel thermal shock.</span> Remaining dry SGs may have their levels recovered at the direction of TSC.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q18</div>
Step 3: "IS RCS PRESSURE GREATER THAN ANY INTACT OR RUPTURED SG PRESSURE?" — If <span class="hi-exam">NO, return to procedure in effect</span>. Per bases: for larger LOCA break sizes, the RCS depressurizes below intact SG pressures; SGs no longer function as a heat sink; core decay heat is removed by the <span class="hi-exam">RCS break flow</span>. Secondary heat sink is not required. <span class="hi-trap">Step 3.1 (place RHR in service if T-Hots < 350F) is only performed if Step 3 answer is YES, not NO.</span> <span class="hi-trap">Bleed and Feed is also not required — the LOCA itself provides the heat removal mechanism.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #5</div>
Entered from EOP-TRIP-1 when all AFW lost: no SG NR levels >9% (15% adverse), total AFW flow <22E4 lbm/hr. Bleed and feed criteria: <span class="hi-exam">3 SG wide range levels <20% (25% adverse)</span>. Recovery via condensate: close all GB4s, close all SS94s, stop all RCPs. Select ONE SG for depressurization to <span class="hi-exam"><575 psig</span>. Caution note: <span class="hi-exam">steam 21 and 23 SGs last to maximize 23 AFW pump steam supply availability</span>. Depressurize using steam dumps (MS Pressure Control) or MS10s. Locally open selected SG BF40 or BF19 (120 ft TGA). Open BF13, open CN48s (SGFP bypass valves), close CN32s (SGFP suction valves). <span class="hi-exam">CT-43: establish condensate feed flow before bleed and feed is required.</span> Condensate flow established when SG pressure ~600 psig. WR level rising confirms feed flow (took ~6 min in validation after condensate flow started at 5-6%).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q23</div>
Bleed and Feed with only <span class="hi-exam">one PORV open</span> (second PORV fails to open): per FRHS Bases, <span class="hi-exam">the RCS may not depressurize quickly enough to ensure sufficient SI flow to provide RCS heat removal, and other RCS openings may have to be established</span>. <span class="hi-trap">Traps: (1) Bleed and Feed is NOT terminated when only one PORV is open — operations continue. (2) The RCS Safety Limit (<span class="val-trip">2735 psig</span>) will NOT be violated with one PORV open. (3) Depressurizing all SGs to inject alternate feedwater is unrelated to a PORV failing to open in the bleed path.</span>
</div>


<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q76</div>
After Rx trip on Main Generator trip with all 3 AFW pumps unable to feed (11 failed to start, 12 with Pressure Override keeping 11AF21 / 12AF21 shut, 13 tripped, all SG NR off-scale low) and SPDS indicating Heat Sink Red Path: the FRHS-1 transition is INCORRECT — the crew remains in <span class="hi-exam">EOP-TRIP-2 step 3</span> to establish AFW flow &gt;22E4 lbm/hr (start 11–13 AFW pumps as necessary, including <span class="hi-trap">defeating the Pressure Override circuit</span>). FRHS-1 distractors are plausible only if CFST usage is misapplied after TRIP-1 exit. <span class="hi-trap">SPDS alone does not authorize FRP transition — primary 1E indications must be verified first.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2019 #4</div>
Loss of all AFW following Main Turbine trip: 21 AFW pump C/T, 22 AFW pump lost with <span class="hi-exam">2B 4KV Vital Bus</span>, 23 AFW pump trips on <span class="hi-exam">overspeed</span> shortly after manual start. Crew validates CFST RED path on Heat Sink (SG NR levels <9%, AFW flow <22E4 lbm/hr). In FRHS-1, crew performs <span class="hi-exam">Prompt SGFP Recovery</span> using 22 SGFP IAW S2.OP-SO.CN-0007: reset SGFP trips, relatch 22 SGFP, raise speed to 3960-3980 rpm, verify DP >50 psid, feed SGs via BF19/BF40. <span class="hi-exam">CT-43: Establish main feedwater flow to SGs before bleed and feed is required.</span> Scenario terminates when main feed flow established and SG WR levels rising.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-d</div>
MSLB at mixing bottle, Auto SI initiated, Main Turbine manually tripped (auto trip failed), MSLI failed (all MSIVs remain open), <span class="hi-exam">all AFW flow lost</span>, transition from EOP-TRIP-1 Step 20 to FRHS-1 Step 1. Step 4 entry to bleed-and-feed: <span class="hi-exam">at least 2 SG WR levels &lt;32% (37% adverse) → IMMEDIATELY GO TO STEP 21</span>. Step 21 caution: Steps 24 thru 29 must be performed quickly and without interruption. Step 23 (sequence-23, before SI initiate): <span class="hi-exam">STOP ALL RCPs</span> (all 21-24 RCPs). Step 22: INITIATE SI on at least one train. Step 23 (verify): Table B (BIT inlet/outlet, charging discharge, accumulator outlet, RWST suction) and Table C (SI alignment) checked in Safeguards position. Step 24: BOTH PZR PORV STOP VALVES OPEN, OPEN BOTH PZR PORVs in Manual. <span class="hi-exam">Alternate path: 2PR2 fails to open → open 2RC40 thru 2RC43 (REACTOR HEAD VENTS) at 2RP3 backpanel using four key-locked switches</span>.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #3</div>
While in EOP-LOSC-2 with all SGs faulted and RCS cooldown rate &gt;100°F/hr, <span class="hi-exam">STA reports RED path on Heat Sink CFST</span>; CRS transitions briefly to FRHS-1, verifies <span class="hi-exam">operator action (AFW throttling per CT#2 to ≥1.0E4 lbm/hr) was the cause of the RED path</span>, and returns to procedure in effect (LOSC-2). Demonstrates the FRHS-1 entry/exit pattern: when an FRP RED is reached because the operator is actively executing a CT to limit cooldown, the cause is verified and the crew returns to the procedure in effect rather than executing FRHS-1 actions.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q83</div>
FRHS-1 is entered on a RED path of <span class="hi-exam">no AFW flow and SG WR level &lt;9%</span>; feed-and-bleed is then <span class="hi-exam">initiated immediately</span> (bleed-and-feed criteria SG WR &lt;36% adverse, not 32% normal). FRHS-1 is a higher-priority RED path than FRTS-1 (thermal shock). See [[AFW]], [[EOP-FRTS-1 — Response to Imminent Pressurized Thermal Shock]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #3</div>
Loss of all AFW after Rx trip (21 AFW pump trips 4 min post-trip, 23 AFW pump overspeeds/trips, 22 AFW pump fails to start) with <span class="hi-exam">no centrifugal charging pumps available</span> → CFST Heat Sink <span class="hi-exam">RED path</span> (AFW flow &lt;22E4 lbm/hr, all SG NR &lt;9%) → FRHS-1. With no charging pumps, crew goes to <span class="hi-exam">Step 23 Bleed and Feed</span>: stop all RCPs, initiate SI, open BOTH PZR PORVs (<span class="hi-exam">CT#1 / CT-46</span> — depressurize RCS below high-head ECCS shutoff head). Only success path is Condensate recovery (SGFPs unavailable on no SW flow to TGA): depressurize the lowest-level SG, establish Condensate flow via CN48/CN32 alignment and steam dumps. At selected SG NR level 9% with CETs/Thots dropping, <span class="hi-exam">close both PZR PORVs (CT#2 / CT-47)</span> before end of scenario. Terminate when both PORVs shut.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q23</div>
Bleed-and-feed flowpath selection when a PORV block valve is unavailable: with <span class="hi-exam">2PR7 shut (closed to comply with TS 3.4.5 action a for the leaking 2PR2 PORV) and the 2B 4KV vital bus deenergized, neither PORV block valve can be opened</span> per Step 26.1 — so the bleed path is the <span class="hi-exam">reactor head vent valves</span> (the next step). For feed, Step 25.1 asks if EITHER charging pump is running, so a <span class="hi-exam">single charging pump supplies feed</span> (22 charging is available after SI initiation at Step 24). <span class="hi-trap">2PR1 is NOT the bleed path here (its block valve cannot be opened with B bus dead), and feed is via a charging pump, not an SI pump.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #2</div>
After a reactor trip with a stuck-open steam dump path, the crew suffers a <span class="hi-exam">loss of all AFW</span> — 22 AFW pump trips after the post-trip AFW flow reduction, 23 AFW pump trips ~5 min later, and 21 AFW pump has no power (2A vital bus lost). With less than <span class="hi-exam">22E4 lbm/hr</span> available and no AFW pumps running, CRS transitions out of TRIP-1 to FRHS-1. Because the SGFPs are also unavailable, the crew performs a <span class="hi-exam">Condensate pump recovery in FRHS-1</span> to establish SG feed flow before RCS Bleed and Feed is required (CT#2). Terminates when SG WR levels are rising in FRHS-1, or when Bleed and Feed is initiated.
</div>

## Connections

- Related systems: [[Main Steam]], [[AFW]], [[RCS]], [[RHR]], [[Feed & Condensate]], [[4KV]], [[Pressurizer & PRT]], [[ECCS]], [[CVCS]], [[RCPs]]
- Related EOPs: [[EOP-TRIP-2 — Reactor Trip Response]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-LOSC-2 — Uncontrolled Depressurization of All Steam Generators]]
- Related tech specs: [[TS 3/4.5 — ECCS]]
- Related exam questions: [[2015 Q23]], [[2016 Q23]], [[2016 Q76]], [[2018 Q64]], [[2018 Q71]], [[2018 Q80]], [[2019 Q46]], [[2019 Q64]], [[2020 Q10]], [[2020 Q18]], [[2020 Q100]], [[2022 Q81]], [[2023 Q18]], [[2015 Q83]], [[2014 Q23]], [[2014 Q74]]
- Related JPMs: [[2014 JPM Sim-d]], [[2018 JPM Sim-d]], [[2019 JPM Sim-d]], [[2023 JPM Sim-d]], [[2023 JPM Sim-e]], [[2016 JPM Sim-d]]
- Related scenarios: [[2016 Scenario 3]], [[2019 Scenario 4 — SGFP Trip / Loss of Heat Sink]], [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]], [[2020 Scenario 5 — Loss of Heat Sink / Condensate Recovery]], [[2015 Scenario 3]], [[2014 Scenario 1]], [[2014 Scenario 2 — Steam Dump Failure / Failure of Auto SI / Loss of All AFW]]
- Related exam: [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Operating Exam]], [[2016 NRC Operating Exam]]
