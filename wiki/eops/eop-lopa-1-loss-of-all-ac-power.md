---
title: "EOP-LOPA-1 — Loss of All AC Power"
category: eops
status: draft
aliases:
  - EOP-LOPA-1
---

# EOP-LOPA-1 — Loss of All AC Power

## Purpose

Provides operator actions for responding to a loss of all AC power, including cooldown using MS10 atmospheric relief valves.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q77</div>
Step 17.2: MS10 relief valves remain operable from the control room on loss of all control air because each MS10 has a <span class="hi-exam">bottle rack with four bottles of nitrogen (>= 2000 psig)</span> providing backup air for control and operation. Bottle rack capacity is designed for a minimum of <span class="hi-exam">72 hours</span> of MS10 operation. Maximum cooldown rate in EOP-LOPA-1 is <span class="hi-exam">100°F/hr</span>. <span class="hi-trap">Do not confuse with 50°F/hr used in EOP-TRIP-6 (Natural Circulation Without RVLIS). The MS10s do NOT need to be operated locally — nitrogen backup keeps them available from the control room.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #1</div>
Entry on all three 4KV Vital Buses de-energized (2A Bus Differential, 2B EDG overspeed, 2C EDG C/T). Immediate actions: trip reactor, trip turbine, close 2CV2 and 2CV277. De-energize all SECs. <span class="hi-exam">Stop 2A EDG — running with no SW pumps (will overheat)</span>. Stop all loads in Table A. Reset SI. After maintenance returns 2C EDG from C/T: start 2C EDG, close output breaker to energize bus <span class="hi-exam">(CT-24)</span>, start one SW pump for EDG cooling <span class="hi-exam">(CT-25)</span>. Step 26: "When at least one 4kV vital bus is energized, THEN go to step 43."
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 Sim-g</div>
EOP-LOPA-1 Step 13 CAUTION: 4KV VITAL BUS LOADING limits — DG <span class="hi-exam">2000-HR LIMIT 2750 KW</span>, 2-HR LIMIT 2860 KW, HALF-HR LIMIT 3100 KW. Step 14: start 2C EDG, verify FREQUENCY >= 60 Hz and VOLTS >= 4.15 KV, close output breaker via <span class="hi-exam">MIMIC PB for 2C DG 4KV BKR 2CDD</span> (verify Yellow indication on both MIMIC PB and BUS INTLK CLOSE SELECTION bezel), then close 2C BREAKER CLOSE PB. Start one SW pump (25 or 26) for EDG cooling, close <span class="hi-exam">23SW20</span>. Step 17: start C bus loads — 22 Charging Pump, 23 CCW Pump, #2 ECAC.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q59</div>
Vital Power Restoration Steps: prior to restoring AC power, <span class="hi-exam">ALL SECs must be de-energized</span> (not blocked and reset). Reason centrifugal charging pumps must not auto-start: <span class="hi-exam">preventing damage to the RCP seals</span>. After prolonged loss of seal injection, injecting cold charging water into hot seals can cause thermal shock and seal damage. <span class="hi-trap">Trap: "blocked and reset" is an action performed in other EOPs (e.g., EOP-TRIP-1), not in EOP-LOPA-1 power restoration steps. Also: candidates may think preventing seal damage is NOT a concern because seal injection is normally beneficial.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 IP-i</div>
Shed non-essential DC loads per Checkoff Sheet 3 (COS 3-1 thru 3-3), 125VDC LOAD SHED LIST. Operator locates distribution panels at <span class="hi-exam">64 ft elevation</span> (2A 125VDC Bus, 2ADC, 2B 125VDC Bus, 2DDC, 2CDC panels) and <span class="hi-exam">100 ft elevation switchgear room</span> (2AADC, 2BBDC, 2CCDC panels). Opens ONLY breakers designated on the checkoff sheet (not all breakers in each panel). Checkoff Sheet 3 sections may be performed in any order.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q18</div>
EOP-LOPA-1 Continuous Action Step for energizing a deenergized 4KV vital bus with an EDG comes <span class="hi-exam">AFTER the step to deenergize all SECs and depress the Stop PB for all SEC controlled safety related loads</span>. The Bases Document (page 15) states the dual reason: <span class="hi-exam">(1) prevent the bus from overloading</span> when power is restored, and <span class="hi-exam">(2) prevent the SI actuated valve realignment that will occur if an SI signal is sensed after power is restored</span>. <span class="hi-trap">SI is initiated at Step 21 NOT to prevent a charging pump from running, but to prevent the SI actuated valve realignment after power restoration. Non-essential DC loads are shed at Step 35 (extends battery capability — not required prior to bus energization). The SBO compressor is started as part of Blackout Coping Actions in Attachment 2 Part A of AB.LOOP-1 (required within 60 minutes of Blackout — not required prior to bus energization).</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-g</div>
<span class="hi-exam">EOP-LOPA-1 Step 16 transition</span>: with one EDG (2A) energizing 2A Vital Bus, second EDG (2B) energizing 2B Vital Bus, 23 AFW supplying all required AFW flow, and 2C Vital Bus deenergized/unavailable, when an SPT (24 SPT) is restored the CRS directs swapping the running EDG-fed bus to the SPT source per <span class="hi-exam">S2.OP-SO.DG-0001 §5.8 (EDG-to-SPT swap) followed by S2.OP-SO.4KV-0001 §5.3.6 (Mimic Bus close protocol)</span>. The swap requires placing redundant equipment in service first (e.g., 22 CCW pump), stopping all 2A vital bus loads via Attachment 1, opening the 2A EDG breaker, then arming the Mimic Bus close interlock and pressing-and-holding the 24ASD CLOSE pushbutton. After successful close, single-source voltage band is 4.330–4.417KV and OHA J-17 (2A 4KV VTL BUS UNDRVOLT) clears.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q74</div>
On a total loss of all AC power, EOP-LOPA-1 may be entered directly; its immediate actions <span class="hi-exam">trip the Rx then trip the Turbine — LOPA-1 does NOT confirm the Rx trip</span> (there is no power to act on it). See [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[OP-AA-101-111-1003 — Use of Procedures]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 IP-j</div>
<span class="hi-exam">EOP-LOPA-1 Sheet 2, Step 27</span> directs local isolation of RCP Seal Cooling during a loss of all AC power. The local actions close five valves: <span class="hi-exam">CV83, CV89 (SEAL WATER FILTER INLET), CV95 (SEAL WATER FILTER BYPASS), CV116 (SEAL WATER TO VCT), and CC131 (RCP THERMAL BARRIER VALVE)</span>. With seal injection and thermal-barrier CCW lost in the blackout, isolating these prevents diversion/backflow paths through the seal-cooling lines.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q99</div>
The EOP-LOPA-1 Bases document states this EOP is entered <span class="hi-exam">anytime, from anywhere, on the symptom of a loss of all AC power</span>. Therefore <span class="hi-exam">a loss of all three vital buses ALWAYS requires suspending any Functional Restoration Procedure (FRP) in use</span> — FRPs assume at least one 4KV vital bus is available for mitigative actions. <span class="hi-trap">Contrast: only a HIGHER RED or PURPLE CFST path than the one directing current FRP entry requires suspending (a new condition on a different status tree does not always); FRPs do NOT have a Continuous Action Summary like EOPs do; RWST lo level only directs LOCA-3 when so directed in the FRP in use — it does not automatically suspend any FRP.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q11</div>
After a loss of all AC power with 2B EDG locally started, the action REQUIRED prior to energizing the 2B 4KV Vital bus is to <span class="hi-exam">deenergize ALL SECs and depress the stop PBs for SEC-actuated components</span> — the Bases (p 15) gives the reason as <span class="hi-exam">preventing the bus from overloading</span>. The Continuous Action Step for energizing a deenergized vital bus with an EDG comes AFTER the deenergize-SECs step. <span class="hi-trap">Initiating/resetting SI (step 21) is to prevent SI-actuated valve realignment when power is restored, NOT to prevent a charging pump auto-start.</span> <span class="hi-trap">Shedding non-essential DC loads (step 35) and starting the SBO Compressor (within 60 min) are performed during the extended loss, but are NOT required prior to power restoration.</span> See [[AB.LOOP-0001 — Loss of All Offsite Power]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q35</div>
If all AC power remains lost for at least one day, the dominant consequence is <span class="hi-exam">loss of ECCS pumped injection capability plus continuing RCP seal leakage → core uncovery</span> (best-case time to core uncovery &lt;20 hours). Containment pressure rises only ~3 psig and temperature ~40°F as the RCS drains through the RCP seals; <span class="hi-trap">containment is not degraded (designed for full LBLOCA mass release).</span> See [[ECCS]], [[RCPs]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2012 IP-k</div>
A blackout coping action during a Loss of All AC Power is restoring Control Air with the SBO Diesel Control Air Compressor (SC.OP-SO.CA-0001) when no Emergency Control Air Compressors are running. The in-plant operator manually starts the SBO compressor and aligns it through <span class="hi-exam">1CA1913 → 1CA1886 → 2CA584</span> to the Aux Building 1A/2A headers. This is a local action driven by the loss-of-all-AC response (referenced as <span class="hi-exam">2-EOP-LOPA-1, Loss of All AC Power, Rev 27</span>) and AB.LOOP-1 blackout coping; it is NOT required prior to re-energizing a vital bus.
</div>

## Connections

- Related systems: [[Main Steam]], [[Control Air]], [[DC Power]], [[EDGs]], [[Service Water]], [[4KV]], [[SECs]], [[RCPs]], [[CVCS]], [[RHR]]
- Related EOPs: [[EOP-LOPA-2 — Loss of All AC Power Recovery / SI Not Required]], [[EOP-LOPA-4 — Extended Loss of All AC Power]]
- Related procedures: [[S2.OP-SO.DG-0001 — Diesel Generator Operation]], [[S2.OP-SO.4KV-0001 — 4KV Vital Bus Operation]], [[AB.CA-0001 — Loss of Control Air]], [[AB.LOOP-0001 — Loss of All Offsite Power]]
- Related exam questions: [[2014 Q6]], [[2015 Q13]], [[2016 Q18]], [[2018 Q59]], [[2022 Q77]], [[2015 Q74]], [[2014 Q16]], [[2014 Q99]], [[2012 Q11]], [[2012 Q35]]
- Related JPMs: [[2016 JPM Sim-g]], [[2018 JPM IP-i]], [[2019 JPM Sim-g]], [[2015 JPM IP-j]], [[2012 JPM IP-k]]
- Related scenarios: [[2020 Scenario 1 — Power Ascension / Station Blackout]]
- Related exam: [[2014 NRC Written Exam]], [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2020 NRC Operating Exam]], [[2019 NRC Operating Exam]], [[2016 NRC Operating Exam]], [[2015 NRC Operating Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
