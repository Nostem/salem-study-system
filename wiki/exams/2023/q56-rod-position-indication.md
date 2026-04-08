---
title: "2023 Q56 — Rod Position Indication / Group Demand Step Counter"
category: exams
status: draft
aliases:
  - 2023 Q56
  - 2023-Q56
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q56 — Rod Position Indication / Group Demand Step Counter</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">T2G2 014A2.11 (3.0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
- Salem Unit 2 is at 100% power<br>
- Control Bank D rods are at 200 steps<br>
<strong>Then:</strong><br>
- The Group Demand Step Counter on 2CC2 console for Control Bank D Group 1 rods fails (blank screen)<br>
<br>
In accordance with S2.OP-DL.ZZ-0003, Control Room Logs, which of the following completes both statements?<br>
<br>
1. The Plant Computer displays the rod demand step position for Group(s) _(1)_.<br>
2. Based on the above condition, the Plant Computer _(2)_ be used to satisfy the Tech Spec requirements for the failed console group demand step counter.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> (1) 1 Only (2) can</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> (1) 1 and 2 (2) can NOT</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> (1) 1 and 2 (2) can</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> (1) 1 Only (2) can NOT</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> Only the Group 1 Demand Steps input into the Plant Computer. Per S2.OP-DL.ZZ-0003 for Control Rod Counter channel checks, either the Group Demand Counter or Plant Computer will satisfy the surveillance for Group 1 only. Only the Group 1 Demand Steps input into the Plant Computer. TS 3.1.3.2.1.b, bases states in part, "...either the control console group 1 demand step counter or the plant computer 'bank step' display is sufficient to comply with this specification for group 1 rod position."</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Part 1 is incorrect. Plausible because the operator may believe that both groups are also displayed on the plant computer. Part 2 is incorrect. Plausible because the operator may believe that the Plant Computer cannot satisfy the surveillance requirement. Incorrect in that per S2.OP-DL.ZZ-0003, the Plant Computer Group Demand for Group 1 only will satisfy the surveillance and also that only group 1 demand is displayed on the plant computer.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Part 1 is incorrect. Plausible because the operator may believe that both groups are also displayed on the plant computer. Part 2 is correct.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Part 1 is correct. Plausible because the operator may believe that the failed step counter will generate E-24. Incorrect in that E-24 does not use input directly from the console step counters. Part 2 is incorrect. Plausible because the operator may believe that the Plant Computer cannot satisfy the surveillance requirement. Incorrect in that per S2.OP-DL.ZZ-0003, the Plant Computer Group Demand for Group 1 only will satisfy the surveillance.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-DL.ZZ-0003 (R126), TS 3.1.3.2.1 bases | LO: NOS05RODS00-14, Objective 6 — Describe the function of the following components and how their normal and abnormal operations affects the Rod Control and Position Indication Systems: Rod Insertion Limit Comparator | Source: New | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Instrumentation and Controls]]
- Related procedures: [[S2.OP-DL.ZZ-0003 — Control Room Logs]]
- Related tech specs: [[TS 3/4.1.3 — Movable Control Assemblies]]
- Related exam: [[2023 NRC Written Exam]]
