---
title: "2012 JPM IP-k — Perform Actions for a Loss of All AC Power (Start the SBO Compressor)"
category: exams
status: draft
aliases:
  - 2012 JPM IP-k
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM IP-k — Perform Actions for a Loss of All AC Power (Start the SBO Compressor)</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">In-Plant | RO/SRO | G2.1.23 (RO 4.3 / SRO 4.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> In-Plant (SBO Compressor Building — normally unlocked, L-3 key if locked; valves 1CA1886 and 2CA584 near the entrance to the Service Building on the right side past the U2 mixing bottle)<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 12 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Both Salem Units have tripped due to a loss of off-site power. Equipment problems have resulted in NO Emergency Control Air Compressors (ECACs) running.<br><br>
<strong>Initiating Cue:</strong><br>
The Unit 2 CRS has directed you to start the Station Blackout Compressor (SBO) IAW SC.OP-SO.CA-0001, SBO Diesel Control Air Compressor, starting with Step 5.1.3. The Component Off Normal and Off Normal Tagged review has been performed SAT. It is NOT the summer operating period. The inspection covers have already been removed, Step 5.1.1 was performed SAT, and the inspection covers replaced IAW Step 5.1.2.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Operator performs SC.OP-SO.CA-0001, SBO Diesel Control Air Compressor, SECTION 5.1 in the correct sequence which would result in SBO Compressor running supplying air through 1CA1913 SBO COMPRESSOR DISCHARGE VALVE, and 1CA1886 BLACKOUT AIR COMPRESSOR ISOLATION, and 2CA584 YARD CONTROL AIR SUPPLY VALVE to Aux Building headers 1A and 2A.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps &amp; Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:70px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">P&amp;L 3.10</td>
<td style="padding:6px;color:#c8cdd5;">Ensure the Battery Tender has power by observing the Red and Green lamps on the front.</td>
<td style="padding:6px;color:#9ca3af;">Operator observes the battery Tender GREEN light is illuminated and the RED light is not illuminated (Green = float charge on the battery; Red = full charging current, present only after a discharge).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.3</td>
<td style="padding:6px;color:#c8cdd5;">OPEN both Engine intake louvers (located outside building on west wall).</td>
<td style="padding:6px;color:#9ca3af;">Cue: Engine intake louvers are open.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.4</td>
<td style="padding:6px;color:#c8cdd5;">OPEN 1CA1920, BLACKOUT AIR COMPRESSOR DRAIN VALVE, to drain any water accumulation, then CLOSE 1CA1920.</td>
<td style="padding:6px;color:#9ca3af;">Locates 1CA1920 and describes opening (drain cap must be removed). Cue: 1CA1920 has been cycled and no water came out of pipe.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.5</td>
<td style="padding:6px;color:#c8cdd5;">OPEN 2FZSB010, BATTERY CHARGER, breaker.</td>
<td style="padding:6px;color:#9ca3af;">Locates 2FZSB010 in Panel 2FZSBO, SBO Compressor Bldg Distribution Panel, and simulates opening. Cue: Breaker is open.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.6</td>
<td style="padding:6px;color:#c8cdd5;">PLACE SBO Control Air Dryer switch in ON position.</td>
<td style="padding:6px;color:#9ca3af;">Simulates turning switch to ON. Cue: SBO Control Air Dryer switch is ON, and Control Air On light is illuminated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.7</td>
<td style="padding:6px;color:#c8cdd5;">RECORD Engine Hourmeter reading on Attachment 1, Section 1.0, and in log book at SBO compressor.</td>
<td style="padding:6px;color:#9ca3af;">Locates Engine Hourmeter (1XA16993, Tachometer/Hourmeter) inside engine control panel and records reading; locates logbook on Panel 2FZSBO.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.8</td>
<td style="padding:6px;color:#c8cdd5;">PLACE UNLOADER VALVE selector switch in START position. (Note: normally in Start when engine is shutdown.)</td>
<td style="padding:6px;color:#9ca3af;">Ensures UNLOADER VALVE selector switch in START position.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.9 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PRESS AND HOLD BY-PASS VALVE pushbutton.</td>
<td style="padding:6px;color:#9ca3af;">Locates BY-PASS VALVE pushbutton in control panel and simulates depressing AND holding depressed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.10 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PLACE SBO-IGN-SWT, ENGINE IGNITION SWITCH in START position until engine starts, then <span class="hi-exam">RELEASE to RUN position.</span></td>
<td style="padding:6px;color:#9ca3af;">While keeping the Bypass Valve pushbutton depressed, simulates placing SBO-IGN-SWT in START. Cue: Engine has started. Operator releases SBO-IGN-SWT to RUN. <span class="hi-exam">Note: If operator also releases the BYPASS VALVE pushbutton at this point, without checking oil pressure &gt;15 psig, then CUE that the engine has stopped.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.11 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">When engine oil pressure is &gt;15 psig, RELEASE BY-PASS VALVE pushbutton.</span></td>
<td style="padding:6px;color:#9ca3af;">Identifies oil pressure reading on gauge labeled oil pressure gauge inside control panel. Cue: Oil pressure is 40 psig. Operator releases BY-PASS VALVE pushbutton.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.12</td>
<td style="padding:6px;color:#c8cdd5;">ALLOW engine to run for 5 minutes to warm up.</td>
<td style="padding:6px;color:#9ca3af;">Cue: 5 minutes has elapsed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.13 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 1CA1913 SBO COMPRESSOR DISCHARGE VALVE, to pressurize Control Air header.</td>
<td style="padding:6px;color:#9ca3af;">Locates and describes opening 1CA1913. Cue: 1CA1913 SBO COMPRESSOR DISCHARGE VALVE is open.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.14 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 1CA1886, BLACKOUT AIR COMPRESSOR ISOLATION. (Note: located near the entrance to Service Building on right side past the U2 mixing bottle.)</td>
<td style="padding:6px;color:#9ca3af;">Locates and describes opening 1CA1886. Cue: 1CA1886, BLACKOUT AIR COMPRESSOR ISOLATION is open.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.15 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 2CA584, YARD CONTROL AIR SUPPLY VALVE, to pressurize Aux. Building 1A and 2A Control Air headers. (Note: located near the entrance to Service Building on right side past the U2 mixing bottle.)</td>
<td style="padding:6px;color:#9ca3af;">Locates and describes opening 2CA584. Cue: 2CA584, YARD CONTROL AIR SUPPLY VALVE is open.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.16 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PLACE UNLOADER VALVE selector switch in RUN position.</td>
<td style="padding:6px;color:#9ca3af;">Operator returns to SBO Compressor Building, points out UNLOADER VALVE selector switch, describes placing it in RUN position. Cue: JPM is complete.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The discriminating steps are <strong>Steps 5.1.10 and 5.1.11</strong> — the engine start sequence. The applicant must keep the <strong>BY-PASS VALVE pushbutton pressed and held</strong> through engine start, release the ENGINE IGNITION SWITCH (SBO-IGN-SWT) from START to RUN once the engine starts, and only release the BY-PASS VALVE pushbutton <strong>after verifying engine oil pressure is &gt;15 psig</strong>. Releasing the BY-PASS VALVE pushbutton too early — before confirming &gt;15 psig oil pressure — stalls the engine (the JPM cue states the engine stops). After the warm-up run, the air path is established by opening, in sequence, <strong>1CA1913</strong> (SBO Compressor Discharge), <strong>1CA1886</strong> (Blackout Air Compressor Isolation), and <strong>2CA584</strong> (Yard Control Air Supply) to pressurize the Aux Building 1A and 2A headers, then returning the UNLOADER VALVE selector switch to RUN. Performing the air-path valves out of order, or failing to protect the start by holding the BY-PASS VALVE until oil pressure is confirmed, fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: SC.OP-SO.CA-0001 (Rev 14), SBO Diesel Control Air Compressor, Section 5.1; 2-EOP-LOPA-1 (Rev 27); S2.OP-AB.LOOP-1 (Rev 27); S2.OP-AB.CA-0001 (Rev 17) | Task: N1150140501 | K/A: G2.1.23 — Ability to perform specific system and integrated plant procedures during all modes of operation (4.3.4) | Source: New | <a href="/salem-study-system/exam-pdfs/2012-jpm-ip-k.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

<div class="callout callout-important">
<div class="callout-label">Cover Label Anomaly</div>
The printed cover page of this JPM lists the JPM Number as <strong>"11-01 NRC IP-j"</strong> — a duplicate of the preceding EDG JPM. It is recorded here as <strong>IP-k</strong> by position (3rd in-plant JPM of the 11-01 ILOT operating test). The cover also titles the system "Control Air" and the task "Perform Actions for a Loss of All AC Power (Start the SBO Compressor)."
</div>

## Connections

- Related systems: [[Control Air]], [[EDGs]]
- Related procedures: [[SC.OP-SO.CA-0001 — SBO Diesel Control Air Compressor]], [[EOP-LOPA-1 — Loss of All AC Power]], [[AB.LOOP-0001 — Loss of All Offsite Power]], [[AB.CA-0001 — Loss of Control Air]]
- Related exam: [[2012 NRC Operating Exam]]
