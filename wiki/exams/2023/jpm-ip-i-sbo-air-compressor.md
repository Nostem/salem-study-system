---
title: "2023 JPM IP-i — Start the SBO Air Compressor IAW AB.LOOP-1"
category: exams
status: draft
aliases:
  - 2023 JPM IP-i
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM IP-i — Start the SBO Air Compressor IAW AB.LOOP-1</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">In-Plant | RO/SRO | 056 AA1.37 (3.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> In-Plant — SBO Compressor Building (outside RCA, requires L-3 key)<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 15 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Both Salem Units have tripped due to a loss of off-site power. Equipment problems have resulted in NO Emergency Control Air Compressors (ECACs) running.<br><br>
<strong>Initiating Cue:</strong><br>
- The Unit 2 CRS has directed you to start the Station Blackout Compressor (SBO) IAW SC.OP-SO.CA-0001, SBO Diesel Control Air Compressor, starting with Step 5.1.3.<br>
- The Component Off Normal and Off Normal Tagged review has been performed SAT.<br>
- It is NOT the summer operating period.<br>
- The inspection covers have already been removed, Step 5.1.1 was performed SAT, and the inspection covers replaced IAW Step 5.1.2
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">The task is satisfactorily met when the applicant starts the SBO Diesel Control Air Compressor IAW step 5.1.10 of SC.OP-SO.CA-0001, aligns the discharge to the air headers IAW steps 5.1.13 thru 5.1.15 of SC.OP-SO.CA-0001, and loads the compressor IAW step 5.1.16 of SC.OP-SO.CA-0001.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:60px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.3</td>
<td style="padding:6px;color:#c8cdd5;">OPEN both Engine intake louvers (located outside building on west wall)</td>
<td style="padding:6px;color:#9ca3af;">Locates louvers and demonstrates how to open.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.4</td>
<td style="padding:6px;color:#c8cdd5;">OPEN 1CA1920, BLACKOUT AIR COMPRESSOR DRAIN VALVE, drain water, then CLOSE</td>
<td style="padding:6px;color:#9ca3af;">Locates 1CA1920 and describes how to open, including removing drain cap.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.5</td>
<td style="padding:6px;color:#c8cdd5;">OPEN 2FZSBO10, BATTERY CHARGER, breaker</td>
<td style="padding:6px;color:#9ca3af;">Locates 2FZSBO10 in Panel 2FZSBO, SBO Compressor Bldg Distribution Panel, and simulates opening.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.6</td>
<td style="padding:6px;color:#c8cdd5;">PLACE SBO Control Air Dryer switch in ON position</td>
<td style="padding:6px;color:#9ca3af;">Locates switch, simulates turning to ON. Control Air On light illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.7</td>
<td style="padding:6px;color:#c8cdd5;">RECORD Engine Hourmeter reading on Attachment 1 and in log book</td>
<td style="padding:6px;color:#9ca3af;">Locates Engine Hourmeter (1XA16993) inside engine control panel and logbook on side of panel 2FZSBO.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.8</td>
<td style="padding:6px;color:#c8cdd5;">PLACE UNLOADER VALVE selector switch in START position</td>
<td style="padding:6px;color:#9ca3af;">Locates switch and ensures in START position (normally in Start when engine is shutdown).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.9 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PRESS AND HOLD BY-PASS VALVE pushbutton</td>
<td style="padding:6px;color:#9ca3af;">Locates BY-PASS VALVE pushbutton in control panel and simulates depressing AND holding depressed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.10 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PLACE SBO-IGN-SWT, ENGINE IGNITION SWITCH in START until engine starts, then RELEASE to RUN</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">While keeping Bypass Valve pushbutton depressed, simulates placing SBO-IGN-SWT in START. After engine starts, releases to RUN. Must NOT release BY-PASS VALVE pushbutton until oil pressure is verified >15 psig in next step.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.11 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">When engine oil pressure is >15 psig, RELEASE BY-PASS VALVE pushbutton</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Identifies oil pressure reading on gauge inside control panel. After cue (40 psig), releases BY-PASS VALVE pushbutton. Releasing early (without checking oil pressure) causes the engine to stop.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.12</td>
<td style="padding:6px;color:#c8cdd5;">ALLOW engine to run for 5 minutes to warm up</td>
<td style="padding:6px;color:#9ca3af;">N/A — wait for warm-up period.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.13 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 1CA1913 SBO COMPRESSOR DISCHARGE VALVE</td>
<td style="padding:6px;color:#9ca3af;">Locates and describes opening 1CA1913 to pressurize Control Air header.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.14 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 1CA1886, BLACKOUT AIR COMPRESSOR ISOLATION</td>
<td style="padding:6px;color:#9ca3af;">Locates and describes opening 1CA1886 (near entrance to Service Building past U2 mixing bottle).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.15 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 2CA584, YARD CONTROL AIR SUPPLY VALVE</td>
<td style="padding:6px;color:#9ca3af;">Locates and describes opening 2CA584 to pressurize Aux. Building 1A and 2A Control Air headers (near entrance to Service Building past U2 mixing bottle).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.16 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PLACE UNLOADER VALVE selector switch in RUN position</td>
<td style="padding:6px;color:#9ca3af;">Returns to SBO Compressor Building and places UNLOADER VALVE selector switch in RUN to load the compressor.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Steps 5.1.10 and 5.1.11 are the discriminating steps — the applicant must keep the BY-PASS VALVE pushbutton depressed while starting the engine with SBO-IGN-SWT, then verify oil pressure >15 psig BEFORE releasing the bypass valve pushbutton. Releasing the bypass valve early (without checking oil pressure) will cause the engine to stop.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: SC.OP-SO.CA-0001 (R14) | Task: N1150140501 | K/A: 056 AA1.37 — Ability to operate and/or monitor the following as they apply to Loss of Offsite Power: Instrument Air | Source: Bank | <a href="/salem-study-system/exam-pdfs/2023-jpm-ip-i.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Radioactive Waste Management]], [[Electrical Power Systems]]
- Related procedures: [[AB.LOOP-0001 — Loss of All Offsite Power]]
- Related exam: [[2023 NRC Operating Exam]]
