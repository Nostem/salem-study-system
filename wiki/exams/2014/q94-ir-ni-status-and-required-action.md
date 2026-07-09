---
title: "2014 Q94 — IR NI Indication Status and Required Action"
category: exams
status: draft
aliases:
  - 2014 Q94
  - 2014-Q94
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q94 — IR NI Indication Status and Required Action</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">G2.1.20 (RO 4.6 / SRO 4.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 1 is performing a Rx startup.<br>
- Rx power is 3E4 cps.<br>
- SUR is .2 dpm.<br>
- During the refueling outage, BOTH IR NI detectors were replaced.<br>
- IR NI indication for both N35 and N36 is flashing at 1x10-11A.<br><br>
Which of the following describes the status of the IR instrumentation, and the required action(s) that will be performed?<br><br>
Both IR NI's...
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> should be reading ~1x10-10A. Declare BOTH NI's INOPERABLE and enter TS 3.0.3.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> should be reading ~1x10-10A. Declare BOTH NI's INOPERABLE and enter TSAS 3.3.1.1.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> are under compensated. Stabilize power, block SR Hi Flux trip, and correct compensating voltage problem for BOTH IR NI's prior to exceeding 5% Rx power.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> are overcompensated. Stabilize power &lt;P-6 and correct compensating voltage problem for at least ONE IR NI within the next 4 hours or open Rx Trip Breakers within the next 4 hours.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> There is at least a one decade overlap required between the SR and IR NI's when raising power (Step 5.2.33). With the SR indication at 30,000 counts, the decade of overlap should already be present, so the IR NI's should be reading ~1x10-10A. With the Hi Flux Trip at 100,000 counts, there can't be proper overlap. With no other information in the stem to provide inference of any other problems with the NI's EXCEPT that both IR detectors were replaced, the IR NI's should be declared INOPERABLE. With BOTH INOPERABLE, TS 3.0.3 is entered.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> B is incorrect because there is only an action in TSAS 3.3.1.1 for ONE INOPERABLE IR NI; with BOTH INOPERABLE, TS 3.0.3 is entered.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> C is incorrect because under compensation would cause a higher than expected reading, not the low reading observed.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> D is incorrect because even if the candidate thought they were reading low due to overcompensation, the P-6 block would not be manually performed without the power above the P-6 interlock to allow P-6 to be blocked.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S1.OP-IO.ZZ-0003, Hot Standby to Minimum Load, Page 24 (Rev 32); Salem Tech Specs | LO: EXCOREE009 | Source: Facility Exam Bank — Direct From Source (used on Salem 8/2008 NRC SRO Written exam) | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Incores]]
- Related procedures: [[S2.OP-IO.ZZ-0003 — Hot Standby to Minimum Load]]
- Related tech specs: [[TS 3.3 — Instrumentation]], [[TS 3.0 — Applicability]]
- Related exam: [[2014 NRC Written Exam]]
