---
title: "2012 JPM Sim-g — TCAF a Loss of Control Air"
category: exams
status: draft
aliases:
  - 2012 JPM Sim-g
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-g — TCAF a Loss of Control Air</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | 065 AA2.06 (3.6/4.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 8 minutes<br><br>
<strong>Initial Conditions:</strong><br>
• Unit 2 is operating at 100% power.<br>
• A WG release is in progress from 21 GDT.<br>
• #3 SAC is CIT for scheduled maintenance.<br>
• Unit 1 is operating at 100% power.<br><br>
<strong>Initiating Cue:</strong><br>
You are the Unit 2 Reactor Operator. Respond to all indications and alarms.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Isolate Letdown<br>2. Terminate Gaseous Release<br>3. Trip the Rx prior to auto trip on 10/10 SG NR level.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:70px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">Entry</td>
<td style="padding:6px;color:#c8cdd5;">Recognize #2 SAC trip and ECAC auto start; refer to S2.OP-AR.ZZ-0011, ARP for COMPR 2 TROUBLE.</td>
<td style="padding:6px;color:#9ca3af;">Determines #2 Station Air Compressor (SAC) has tripped, and the Unit 2 Emergency Control Air Compressor (ECAC) has automatically started. Refers to the S2.OP-AR.ZZ-0011 ARP for COMPR 2 TROUBLE.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">ARP 3.1</td>
<td style="padding:6px;color:#c8cdd5;">IF SAC 2 trips, THEN COORDINATE with Unit 1; ENSURE operating OR START at least one SAC IAW SC.OP-SO.SA-0001(Z), Station Air System Operation.</td>
<td style="padding:6px;color:#9ca3af;">Coordinates with Unit 1 to start at least one SAC. (Cue: Unit 1 will ensure #1 SAC is placed in service.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">ARP 3.2</td>
<td style="padding:6px;color:#c8cdd5;">IF AT ANY TIME Station Air pressure cannot be maintained ≥100 psig, THEN GO TO S2.OP-AB.CA-0001(Q), Loss of Control Air.</td>
<td style="padding:6px;color:#9ca3af;">Recognizes that no SACs are running (#1 SAC locks out 1:30 after the trip), and enters S2.OP-AB.CA-0001 when Station Air pressure lowers to 100 psig.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.CA 3.1</td>
<td style="padding:6px;color:#c8cdd5;">INITIATE Attachment 1, Continuous Action Summary.</td>
<td style="padding:6px;color:#9ca3af;">Initiates Attachment 1, Continuous Action Summary. (CRS refers to Attachment 2 for valve fail positions.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.2 – 3.9</td>
<td style="padding:6px;color:#c8cdd5;">Confirm all SACs stopped / Station Air Header &lt;100 psig; verify no Group Bus losses (1F/2F/1H); attempt to start Next-to-Load and remaining SAC; notify SM/CRS to evaluate temporary air compressors.</td>
<td style="padding:6px;color:#9ca3af;">Determines all SACs stopped and both Station Air Headers &lt;100 psig; no Group Bus losses; no SACs available or able to be started; CRS will evaluate temporary air compressors.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.10 – 3.18</td>
<td style="padding:6px;color:#c8cdd5;">Check 2A / 2B Control Air Header pressures (≤88 psig → ECAC service); dispatch operators to locate/isolate air leaks and investigate compressor trip; check &lt;80 psig conditions.</td>
<td style="padding:6px;color:#9ca3af;">Determines ECAC status by header pressure; dispatches operators; determines 2B Control Air Header is &lt;80 psig and goes to Step 3.55.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.56 *</span></td>
<td style="padding:6px;color:#c8cdd5;">ISOLATE Letdown by closing the following valves: 2CV3 (45 GPM ORIFICE), 2CV4 (75 GPM ORIFICE), 2CV5 (75 GPM ORIFICE), 2CV2, 2CV277, 2CV7.</td>
<td style="padding:6px;color:#9ca3af;">Isolates Letdown by closing 2CV3, 2CV4, 2CV5, 2CV2, 2CV277, and 2CV7.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.57 *</span></td>
<td style="padding:6px;color:#c8cdd5;">VERIFY any Liquid or Gaseous release is STOPPED by ensuring the following valves are closed: 2WL51 (TO CIRC WTR DISCHARGE); 2WG41 (GAS DECAY TK TO PLANT VENT).</td>
<td style="padding:6px;color:#9ca3af;">Determines 2WG41, GAS DECAY TK TO PLANT VENT is open, and shuts 2WG41. Verifies 2WL51 is shut.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">CAS *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">IF AT ANY TIME Station Air is lost, THEN INITIATE monitoring of 21-24BF19 operation; IF any BF19 goes CLOSED AND the applicable SG water level cannot be maintained, THEN TRIP the Reactor, CONTINUE with this procedure AND GO TO 2-EOP-TRIP-1.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Identifies all BF19 valves closing (~6.5 min) and trips the Reactor prior to the automatic trip on 10/10 SG NR level.</span></td>
</tr>
</table>

<div style="margin-top:8px;font-size:10px;color:#6b7280;">Approximate event timeline from the loss of the in-service SAC: 1 min — 1 SAC auto starts; 1 min 30 sec — 1 SAC trips; 3 min 50 sec — 2 ECAC begins loading; 4 min 10 sec — 2B Control Air header reaches 80 psig (SA low pressure alarm); 4 min 25 sec — CA low pressure alarm; 6.5 min — 21-24BF19 Feed Reg Valves begin closing; 7 min 10 sec — OHA G-15 ADFCS TRBL.</div>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">#2 SAC trips and the Unit 2 ECAC auto-starts; the cross-tied #1 SAC then locks out, so Station Air cannot be maintained ≥100 psig and the operator enters AB.CA-0001. As control air bleeds down, the air-operated components drift to their fail positions. The three discriminating Continuous-Action/critical results are: <strong>isolate Letdown</strong> (step 3.56 — close the letdown orifice and isolation valves before they cause a CVCS upset), <strong>terminate the in-progress gaseous release</strong> (step 3.57 — shut 2WG41 GAS DECAY TK TO PLANT VENT, which had been releasing from 21 GDT and is no longer controlled), and — the time-pressured action — <strong>tripping the reactor</strong> once the <strong>21-24BF19 Feed Reg Valves fail closed (~6.5 min)</strong> and SG level can no longer be maintained, <strong>before the automatic reactor trip on 10/10 SG NR (Lo-Lo) level</strong>. Failing to isolate letdown, leaving the gas release path open, or letting the plant ride to the automatic Lo-Lo SG level trip fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-AB.CA-0001 (Rev 17) / S2.OP-AR.ZZ-0011 (Rev 58) | Task: N1140070401 | K/A: APE 065 AA2.06 — Loss of Instrument Air: Ability to determine and interpret the loss of instrument air as it applies to the abnormal condition (3.6/4.2) | Source: Not specified in source | <a href="/salem-study-system/exam-pdfs/2012-jpm-sim-g.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Control Air]], [[CVCS]], [[Waste Gas]], [[Feed & Condensate]]
- Related procedures: [[AB.CA-0001 — Loss of Control Air]], [[S2.OP-AR.ZZ-0011 — Alarm Response (2CC1)]], [[SC.OP-SO.SA-0001 — Station Air System Operation]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2012 NRC Operating Exam]]
