---
title: "2014 Q38 — 2PS3 PZR Spray Valve Demand Fails to 50% — Effect"
category: exams
status: draft
aliases:
  - 2014 Q38
  - 2014-Q38
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q38 — 2PS3 PZR Spray Valve Demand Fails to 50% — Effect</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">010000 K3.01 (RO 3.8 / SRO 3.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
With both PZR Spray Valves 2PS1 and 2PS3 in AUTO, which of the following describes the effect, if any, of 2PS3 PZR Spray Valve demand failing to 50% demand?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> No effect as the 2PS1 would close and transfer normal spray capability to 2PS3.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> All PZR Backup heaters in auto will energize when PZR pressure lowers to 2210 psig.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> All PZR Backup heaters in auto will energize when PZR pressure lowers to 2218 psig.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> PZR pressure will initially lower, and the Control Group heaters will fire full time to restore pressure w/o auto B/U heaters required.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> Normal PZR spray demand is ~13% on each PZR spray valve, as Salem runs with one set of B/U heaters in MANUAL ON. The failure to 50% effectively doubles the actual spray flow. The 2PS1 WILL shut, but more spray than needed is now present especially since 2PS3 is the dominant spray flow. PZR B/U heaters in auto will energize at 2210 psig, they turn off at 2218 psig.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> 2PS1 WILL shut, but there is an effect: more spray than needed is now present (especially since 2PS3 is the dominant spray flow), so PZR pressure lowers and backup heaters energize — it is not a no-effect transfer.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> 2218 psig is the value at which the PZR backup heaters TURN OFF, not energize; they energize at 2210 psig.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> The control group heaters are for fine pressure control and do not have the capability to maintain pressure with 50% spray demand; the backup heaters will be required and will energize at 2210 psig.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Pressurizer Pressure Malfunction (S2.OP-AB.PZR-0001, Rev 18); PZR Pressure and Level Control LP (NOS05PZRP&L-09, Rev 9) | LO: PZRP&LE008 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer Level & Press Control]]
- Related procedures: [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]]
- Related exam: [[2014 NRC Written Exam]]
