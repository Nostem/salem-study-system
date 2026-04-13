---
title: "2020 Q19 — Dropped Rod Step Counter Reset"
category: exams
status: draft
aliases:
  - 2020 Q19
  - 2020-Q19
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q19 — Dropped Rod Step Counter Reset</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">APE03AK3.04 (3.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
&bull; Unit 2 reactor power was reduced to 74% Power.<br>
&bull; A dropped Control Bank D Group 1 rod is being recovered in accordance with S2.OP-AB.ROD-0002, Dropped Rod.<br>
<br>
Shortly before the crew starts withdrawing the dropped rod, S2.OP-AB.ROD-0002 directs the crew to reset the control bank D group 1 step counter to zero.<br>
<br>
Why does the affected group step counter need to be reset to zero?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> This prevents OHA E-8 RIL LO and E-16 RIL LO-LO alarms from coming in during rod recovery.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> This prevents a OHA E-40 ROD BANK URGENT FAILURE alarm from coming in during rod recovery.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> This ensures that the step counter matches actual rod position and the rod is withdrawn to the proper height.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> This ensures that the P/A converter will send the proper rod height data to the RIL circuitry.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; C. Correct.</strong> The group step counter is reset to zero IAW AB.ROD-2 to ensure that the step counter matches actual rod position and that the recovered dropped rod position is at the proper height before the event.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; A.</strong> Since this is a control bank group 1 rod, the P/A converter will be reset to zero IAW AB.ROD-2. After the P/A converter is reset to zero, OHAs E-8 RIL LO and E-16 RIL LO-LO will annunciate.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; B.</strong> OHA E-40 will annunciate following rod withdrawal due to a Power Cabinet Regulation failure for the affected bank with the lift coil disconnect switches in OFF position.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; D.</strong> Control bank D group 1 rods will need the P/A converter reset to zero IAW AB.ROD-2 which is performed locally at the RPI-2 cabinet. The group step counter does not input into the P/A converter. Input to the P/A converter is from the Group 1 Data Logging card. Resetting the P/A converter ensures bank overlap is maintained.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AB.ROD-0002(Q), Dropped Rod and Bases | LO: N/A | Source: Modified Bank - Salem Vision Database | Cognitive: Fundamental</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Control Rod Drive]]
- Related procedures: [[AB.ROD-0002 — Dropped Rod]], [[S2.OP-AR.ZZ-0005 — Overhead Annunciators Window E]]
- Related exam: [[2020 NRC Written Exam]]
