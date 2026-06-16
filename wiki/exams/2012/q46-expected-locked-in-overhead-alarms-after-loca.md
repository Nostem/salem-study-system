---
title: "2012 Q46 — Expected Locked-In Overhead Alarm 25 Minutes After LOCA"
category: exams
status: draft
aliases:
  - 2012 Q46
  - 2012-Q46
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q46 — Expected Locked-In Overhead Alarm 25 Minutes After LOCA</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">026000G431 / 2.4.31 (RO 4.2 / SRO 4.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- A loss of reactor coolant has occurred which results in containment pressure rapidly rising to 18 psig.<br><br>
While walking down the control boards 25 minutes later to prepare for a crew brief, which of the following locked in Overhead alarms would be EXPECTED for these conditions?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> E-5, SR DET VOLT TRBL.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> D-43, SPRY ADD TK LVL LO.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> C-29, 24 CFCU WTRFLO TRBL.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> B-7, TURB AREA SW HDR PRESS HI.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> 55.41.b(8) Spray eductor flow is nominally 75 gpm. Normal level 75%. Administratively max level 90% (3900 gal as shown in SC.CH-AD.CS-0415). Alarm occurs at 67%. Normal level 3,400 gallons. Alarm at 3,050 gallons. D-43 will occur ~ 5 minutes into event.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Transition out of TRIP-1 ~ 15 minutes. E-5 is not expected to be in alarm 25 minutes after the trip because it is indication of the SR instruments being energized when they should not be with respect to turbine power above or below 15%. Source range automatically energize between 15-18 minutes following a trip.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> C-29 is not expected because it indicates CFCU SW valve alignment problem with the CFCU running. It is plausible because the CFCU Airflow Trouble alarm WILL be in alarm, as it occurs when the damper alignment is not correct for running in HIGH speed, and the CFCU will be running in LO speed following an accident.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> B-7 would not be in alarm as SW to the TGA is automatically isolated by the SECs.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Overhead Annunciators B,C,D,E — S2.OP-AR.ZZ-0002,3,4,5 (Rev 35,17,26); Tank Curves — S2.OP-TM.ZZ-0002 (Rev 8) | LO: CSPRAYE008 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Containment Spray]], [[Annunciators]]
- Related procedures: [[S2.OP-AR.ZZ-0002 — Overhead Annunciators Window B]], [[S2.OP-AR.ZZ-0003 — Overhead Annunciators Window C]], [[S2.OP-AR.ZZ-0004]], [[S2.OP-AR.ZZ-0005 — Overhead Annunciators Window E]], [[S2.OP-TM.ZZ-0002 — Tank Capacity Data]]
- Related exam: [[2012 NRC Written Exam]]
