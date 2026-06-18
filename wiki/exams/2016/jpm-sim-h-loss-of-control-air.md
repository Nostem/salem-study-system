---
title: "2016 JPM Sim-h — TCAF a Loss of Control Air"
category: exams
status: draft
aliases:
  - 2016 JPM Sim-h
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-h — TCAF a Loss of Control Air</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 065 AA2.06 (RO 0 / SRO 0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 8 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 is operating at 100% power.<br>
- A WG release is in progress from 21 GDT.<br>
- #3 SAC is C/T for scheduled maintenance.<br>
- Unit 1 is operating at 100% power.<br><br>
<strong>Initiating Cue:</strong><br>
You are the Unit 2 Reactor Operator. Respond to all indications and alarms.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Isolate Letdown. 2. Terminate Gaseous Release. 3. Trip the Rx prior to auto trip on lo lo SG NR level.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:80px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">Diagnosis</td>
<td style="padding:6px;color:#c8cdd5;">Recognize #2 SAC has tripped and Unit 2 ECAC has auto-started; refer to S2.OP-AR.ZZ-0011 ARP for COMPR 2 TROUBLE.</td>
<td style="padding:6px;color:#9ca3af;">Notes: All 3 SAC supply breakers open is an auto start signal for both ECACs. The Unit 2 ECAC will auto start (Unit 1 will not). By design, the ECAC will not load until its control air header pressure lowers to 85 psig. 2A control air header is supplied from #2 ECAC; 2B control air header is supplied from #1 ECAC. Next-to-load SAC requires Station Air header pressure to drop 5 psig below the 105 psig follow setpoint for ~5 seconds.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">ARP 3.1</td>
<td style="padding:6px;color:#c8cdd5;">IF SAC 2 trips, THEN: A. COORDINATE (as necessary) with Unit 1; B. ENSURE operating OR START at least one SAC IAW SC.OP-SO.SA-0001(Z), Station Air System Operation.</td>
<td style="padding:6px;color:#9ca3af;">Coordinates with Unit 1 to start at least one SAC. Cue when contacted as Unit 1: Unit 1 will ensure #1 SAC is placed in service.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">ARP 3.2</td>
<td style="padding:6px;color:#c8cdd5;">IF AT ANY TIME Station Air pressure cannot be maintained ≥100 psig, THEN GO TO S2.OP-AB.CA-0001(Q), Loss of Control Air.</td>
<td style="padding:6px;color:#9ca3af;">Goes to S2.OP-AB.CA-0001 when Station Air pressure lowers to 100 psig if AB not entered previously.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">SAC #1 trip cue</td>
<td style="padding:6px;color:#c8cdd5;">Simulator Operator: Ensure #1 SAC locks out 1:30 after insertion of RT-1, then announce twice on plant page: "#1 Station Air Compressor Trip."</td>
<td style="padding:6px;color:#9ca3af;">Recognizes that no SACs are running, and enters S2.OP-AB.CA-0001 if not entered previously.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.CA 3.1</td>
<td style="padding:6px;color:#c8cdd5;">INITIATE Attachment 1, Continuous Action Summary.</td>
<td style="padding:6px;color:#9ca3af;">Initiates Attachment 1, Continuous Action Summary. Note approximate event times from RT-1: 1 min — 1 SAC auto starts; 1:30 — 1 SAC trips; 3:50 — 2 ECAC begins loading; 4:10 — 2B Control Air header pressure reaches 80 PSIG and SA low pressure alarm; 4:25 — CA low pressure alarm; 6.5 min — 21–24BF19 Feed Reg Valves begin closing; 7:10 — G-15 OHA ADFCS TRBL.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.CA 3.2</td>
<td style="padding:6px;color:#c8cdd5;">EITHER of the following conditions exist? ALL Station Air Compressors stopped; EITHER Station Air Header &lt;100 psig.</td>
<td style="padding:6px;color:#9ca3af;">Determines all SACs are stopped or Station Air Header pressure is &lt;100 psig.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.CA 3.3–3.5</td>
<td style="padding:6px;color:#c8cdd5;">IF a loss of 1F/2F/1H Group Bus has occurred AND alternate available, THEN restore power to applicable SAC Auxiliary Oil pump per Attachment 14.</td>
<td style="padding:6px;color:#9ca3af;">Determines no Group Bus loss has occurred.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.CA 3.6</td>
<td style="padding:6px;color:#c8cdd5;">START or have Unit One Control Room START Next to Load Station Air Compressor.</td>
<td style="padding:6px;color:#9ca3af;">Determines no SACs are available. Cue: #3 SAC is tagged out and #1 SAC has tripped; an operator has been dispatched to the SACs.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.CA 3.7</td>
<td style="padding:6px;color:#c8cdd5;">Either Station Air Header indicating less than 100 psig?</td>
<td style="padding:6px;color:#9ca3af;">Determines both Station Air Headers are indicating less than 100 psig.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.CA 3.8</td>
<td style="padding:6px;color:#c8cdd5;">Attempt to START remaining Station Air Compressor.</td>
<td style="padding:6px;color:#9ca3af;">Determines no SACs can be started.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.CA 3.9</td>
<td style="padding:6px;color:#c8cdd5;">NOTIFY the CRS/SM to evaluate use of temporary air compressors.</td>
<td style="padding:6px;color:#9ca3af;">Cue: CRS will evaluate use of temporary air compressors.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.CA 3.10/3.11</td>
<td style="padding:6px;color:#c8cdd5;">2A Control Air Header less than or equal to 88 psig?</td>
<td style="padding:6px;color:#9ca3af;">Determines 2A control air header pressure is ≤88 psig and #2 ECAC is in service, OR &gt;88 psig.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.CA 3.12/3.13</td>
<td style="padding:6px;color:#c8cdd5;">2B Control Air Header less than or equal to 88 psig?</td>
<td style="padding:6px;color:#9ca3af;">Determines 2B control air header pressure is ≤88 psig; contacts Unit 1 to place #1 ECAC in service. Cue: "#1 ECAC has tripped."</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.CA 3.14–3.18</td>
<td style="padding:6px;color:#c8cdd5;">Send operators to locate and isolate air system leaks; investigate compressor trip/trouble; check SFP weir gate seals / SG nozzle dams; check cooling water; check excess flow check valves; both control air headers &lt;80 psig?</td>
<td style="padding:6px;color:#9ca3af;">Dispatches operators; determines no SFP weir/nozzle dams in service; cooling water not lost; no Excess Flow Check Valves closed; both Control Air Headers not &lt;80 psig.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">AB.CA 3.19</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">2B Control Air Header less than 80 psig?</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines 2B Control Air Header is &lt;80 psig. Alternate Path actions start here.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB.CA 3.58 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE the following valves: A. 2CV3, LTDWN ORIFICE ISOL VALVE; B. 2CV4, LTDWN ORIFICE ISOL VALVE; C. 2CV5, LTDWN ORIFICE ISOL VALVE; D. 2CV2, LETDOWN LINE ISOL VALVE; E. 2CV277, LTDWN LINE ISOL VALVE; F. 2CV7, LTDWN HX INLET VALVE.</td>
<td style="padding:6px;color:#9ca3af;">Closes 2CV3, 2CV4, 2CV5, 2CV2, 2CV277, and 2CV7 to isolate letdown.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB.CA 3.57 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">VERIFY ANY Liquid or Gaseous release is stopped by ensuring the following valves CLOSED: 2WL51, TO CIRC WTR DISCHARGE; 2WG41, GAS DECAY TK TO PLANT VENT.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines 2WG41, GAS DECAY TK TO PLANT VENT is open, and shuts 2WG41. Verifies 2WL51 is shut.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">CAS 6.0 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">IF AT ANY TIME Station Air is lost, THEN INITIATE monitoring of 21–24BF19 SG FW CONT VALVE operation. IF ANY BF19 SG FW CONT VALVE closes AND Applicable SG water level CANNOT be maintained, THEN: A. TRIP the Reactor; B. CONTINUE with this procedure; C. GO TO 2-EOP-TRIP-1, Reactor Trip Or Safety Injection.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Identifies all BF19 valves closing. Trips the Reactor.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">EOP-TRIP-1 IAs</td>
<td style="padding:6px;color:#c8cdd5;">Performs Immediate Actions of EOP-TRIP-1.</td>
<td style="padding:6px;color:#9ca3af;">Confirms the Rx trip; trips the Main turbine; checks at least 1 4KV vital bus energized; determines SI is not initiated or required. Cue: CRS and another operator continue performing EOPs; you continue in current procedure. Terminate JPM once Rx has been tripped, letdown isolated, and the WG release terminated.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Three discriminating elements drive this JPM. (1) <strong>Step 3.19 — alternate path entry:</strong> with #3 SAC already C/T, #2 SAC tripped, #1 SAC tripping ~1:30 later, and #1 ECAC also failed, only the 2 ECAC remains; 2B Control Air Header drops below 80 psig and the procedure transitions to the alternate path (Step 3.57+). (2) <strong>Step 3.58 — letdown isolation:</strong> letdown must be isolated (2CV3/4/5/2/277/7) on loss of control air to prevent excessive RCS letdown beyond control. (3) <strong>Step 3.57 — release termination:</strong> a WG release in progress from 21 GDT must be terminated by closing 2WG41 (GDT to plant vent); this is the discriminating recognition because the initial conditions specifically state a WG release is in progress, and 2WG41 must be manually closed because it is air-operated. (4) <strong>CAS Step 6.0 — manual trip:</strong> when the BF19 (SG FW Control) valves close from low control air and SG levels cannot be maintained, the operator must <strong>manually trip the reactor BEFORE the auto trip on lo-lo SG NR level</strong>. Per AB.CA-0001 bases, BF19s start to close at 80 psig control air header pressure.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-AB.CA-0001 (Rev. 21) / S2.OP-AR.ZZ-0011 (Rev. 60) | Task: N1140070401 | K/A: APE 065 AA2.06 — Loss of Instrument Air — Ability to determine and interpret: BF19/SG feed regulating valve response to loss of CA | Source: New | <a href="/salem-study-system/exam-pdfs/2016-jpm-sim-h.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Control Air]], [[CVCS]], [[Waste Gas]], [[Feed & Condensate]], [[Steam Generator & Blowdown]]
- Related procedures: [[AB.CA-0001 — Loss of Control Air]], [[S2.OP-AR.ZZ-0011 — Alarm Response (2CC1)]], [[SC.OP-SO.SA-0001 — Station Air System Operation]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2016 NRC Operating Exam]]
