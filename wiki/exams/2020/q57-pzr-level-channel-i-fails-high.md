---
title: "2020 Q57 — PZR Level Channel I Fails High"
category: exams
status: draft
reference: no
aliases:
  - 2020 Q57
  - 2020-Q57
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q57 — PZR Level Channel I Fails High</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">016000K3.02 (3.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
&bull; Unit 1 is operating at 100% Power.<br>
&bull; All systems are operating in AUTO.<br>
&bull; PZR Level Control System selected to Channel I for Control.<br>
&bull; PZR Level Control System selected to Channel II for Alarm.<br><br>
A failure causes the following sequential plant events. Assume NO operator actions are taken.<br><br>
&bull; Charging Flow reduces to minimum.<br>
&bull; Actual PZR level drops slowly.<br>
&bull; Letdown isolates and PZR heaters turn off.<br>
&bull; A Reactor Trip eventually occurs on high PZR level.<br><br>
Which ONE of the following failures would cause the above sequential events?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Auctioneered Tavg failed high.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> PZR Level Channel I failed low.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> PZR Level Channel I failed high.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> PZR Level Channel II failed low.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> A high failure of the controlling channel of PZR Level will result in a lowering of charging flow to minimum, actual level slowly dropping until 17% actual level is seen by the alarm channel which then results in letdown isolation and PZR heaters off. Now minimum charging flow with no letdown will eventually lead to a Rx Trip on high PZR Level as seen by channels II & III (2/3 @92%).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect. Plausible because the student may confuse this with the controlling channel failing high. Incorrect because PZR program level will only fail to approximately 59% and level will be maintained around that value.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect. Plausible because a failure of the controlling channel low will result in immediate letdown isolation and an eventual Rx Trip on high level with NO operator action, but not in the SEQUENTIAL order discussed in the question stem. Charging flow will actually rise due to the low failure of the controlling channel.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect. Plausible because the alarm channel failing low will result in immediate letdown isolation and an eventual Rx Trip on high level with NO operator action, but not in the SEQUENTIAL order discussed in the question stem.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05PZRP&L-10, Pressurizer Pressure and Level Control | LO: ELOs 4b, 15, and 16 | Source: Bank, Salem Vision Database | Cognitive: Comprehension</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer Level & Press Control]], [[CVCS]]
- Related exam: [[2020 NRC Written Exam]]
