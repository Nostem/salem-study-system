---
title: "2014 Q55 — Spurious MSLI Effect on Feed to SGs"
category: exams
status: draft
aliases:
  - 2014 Q55
  - 2014-Q55
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q55 — Spurious MSLI Effect on Feed to SGs</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">059000 A4.03 (RO 2.9 / SRO 2.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 1 is in MODE 1.<br>
- Rx power is 8.1%.<br>
- Power is being raised slowly in preparation for rolling the Main Turbine.<br>
- 11 SGFP is in service supplying FW to SGs.<br>
- ALL AFW pumps are aligned for normal standby operation.<br>
- A spurious MSLI actuates.<br><br>
Which of the following describes the effect this will have on feed to the SGs with NO operator action?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> The MDAFW pumps and the TDAFW pump will start when SG level(s) drop(s) to the lo lo level setpoint.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> The MDAFW pumps will start when 11 SGFP trips. The TDAFW pump will start when SG levels shrink following the Rx trip.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> ALL AFW pumps will remain in standby. Sufficient steam will be supplied through the 11-14MS18s, MS STOP BYP VALVES to supply 11 SGFP.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> ALL AFW pumps will remain in standby. 11 SGFP will remain in service since at this power level it is being supplied with steam from the Heating Steam System.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> A is correct because the MDAFW pumps and TDAFW will start on lo lo level in SGs as the SGFP coasts down after losing its steam supply. The operating SGFP(s) will be placed on Main steam supply prior to exceeding 5% power (IOP-3, step 5.4.10), and will lose their steam supply when the MSLI signal closes the MSIVs AND the MS18 bypass valves.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> B is incorrect because the SGFP will not trip.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> C is incorrect because the MS18s shut on the MSLI also.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> D is incorrect because the operating SGFP(s) will be placed on Main steam supply prior to exceeding 5% power (IOP-3, step 5.4.10), and will lose their steam supply when the MSLI signal closes the MSIVs AND the MS18 bypass valves.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Hot Standby to Minimum load (S1.OP-IO.ZZ-0003, p 37, Rev 32) | LO: CN&amp;FDWE013 | Source: Facility Exam Bank (Q85462, Direct From Source) | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[AFW]], [[Feed & Condensate]], [[Main Steam]]
- Related procedures: [[S2.OP-IO.ZZ-0003 — Hot Standby to Minimum Load]]
- Related exam: [[2014 NRC Written Exam]]
