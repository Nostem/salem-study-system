---
title: "2020 Q36 — PZR Pressure Channel Fails Low"
category: exams
status: draft
reference: no
aliases:
  - 2020 Q36
  - 2020-Q36
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q36 — PZR Pressure Channel Fails Low</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">010000A3.02 (3.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Unit 2 is in MODE 3.<br>
• Pressurizer (PZR) Pressure is 2235 psig.<br>
• RCS Temperature is 547 °F.<br>
• PZR Pressure Channel I (2PT-455) is selected for Control.<br>
• PZR Pressure Channel II (2PT-456) is selected for Alarm.<br>
<br>
If PZR Pressure Channel I fails LOW and with NO operator action, PZR pressure will rise until ______.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> PZR PORV 2PR1 opens.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> BOTH PZR PORVs, 2PR1 and 2PR2 open.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> BOTH PZR Spray Valves, 2PS1 and 2PS3 open.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> PZR PORV 2PR2 opens.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> Channel I failing low will block the AUTO operation of 2PR1. Additionally, 2PR2 is controlled by channels II & IV and therefore will operate as pressure rises to the open setpoint.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Plausible because the candidate may believe that Channels II & IV control 2PR1 and therefore it will open. Incorrect as Channel I failing low will block the AUTO operation of 2PR1.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Plausible because the candidate may believe that only a single channel is required to cause a PORV to open and therefore both would open. Incorrect as Channel I failing low will block the AUTO operation of 2PR1.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Plausible because the PZR Spray valves open in automatic prior to the PORV open setpoint and therefore would control pressure. Incorrect as the pressurizer spray valves will only function in AUTO via the controlling channel and it is failed low.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05PZRP&L-10, Pressurizer Pressure and Level Control | LO: N/A | Source: Bank — Salem Vision Database | Cognitive: Comprehension</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer Level & Press Control]], [[Pressurizer & PRT]]
- Related exam: [[2020 NRC Written Exam]]
