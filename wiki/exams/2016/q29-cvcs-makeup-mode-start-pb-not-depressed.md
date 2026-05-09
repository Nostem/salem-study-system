---
title: "2016 Q29 — CVCS Makeup with START PB not depressed (auto/lo-lo behavior)"
category: exams
status: draft
aliases:
  - 2016 Q29
  - 2016-Q29
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q29 — CVCS Makeup with START PB not depressed (auto/lo-lo behavior)</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">004000K404 K4.04 (3.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong> the following conditions:<br><br>
- Unit 1 is operating a 100% power.<br>
- After performing a normal dilution for RCS temperature control, the START pushbutton for CVCS Makeup Mode Select was NOT depressed when returning the CVCS Makeup System to automatic.<br><br>
Which of the following describes the effect this will have if VCT level were to continuously lower with <strong>NO</strong> operator action?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 1SJ1 and 1SJ2, RWST to Charging Pump Suction valves will open automatically when VCT level reaches the lo-lo level setpoint, and 1CV40 and 1CV41, VCT Outlet Isolation Valves, will shut automatically.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 1SJ1 and 1SJ2, RWST to Charging Pump Suction valves will open automatically when VCT level reaches the lo-lo level setpoint, and 1CV40 and 1CV41, VCT Outlet Isolation Valves will remain open.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> A dilution will occur when the Primary Water pumps start at 14% level with no boration flow aligned to the CVCS Blender.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> The VCT will empty and the charging pumps will lose suction.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> 55.41.b(7) The CVCS START PB must be depressed to align the CVCS M/U system to whichever mode was selected (BORATE, DILUTE, ALT DILUTE, AUTO). D is incorrect but plausible if it is thought the SJ1 auto open interlock is based on having the CVCS MU Mode Selector in AUTO and START. C is incorrect but plausible if it is thought that Primary Water pump operation would occur based on last position of CVCS MU system (dilute per stem) when the auto makeup setpoint would be reached at 14% lowering VCT level. The S11 and S12 open automatically on 2/2 level lo-lo in VCT level, and once they are open the CV40 and CV41 shut to transfer suction of charging pumps to RWST.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Source explanation does not separately address — see correct-answer block above (once SJ1/SJ2 open, CV40 and CV41 shut to transfer suction to RWST).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> C is incorrect but plausible if it is thought that Primary Water pump operation would occur based on last position of CVCS MU system (dilute per stem) when the auto makeup setpoint would be reached at 14% lowering VCT level.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> D is incorrect but plausible if it is thought the SJ1 auto open interlock is based on having the CVCS MU Mode Selector in AUTO and START.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: 1SJ1 Schematic 211577 Rev 3 | Chemical and Volume Control Lesson Plan NOS05VCCS00-16 p.43 Rev 16 | LO: CVCS00E006 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]], [[ECCS]]
- Related exam: [[2016 NRC Written Exam]]
