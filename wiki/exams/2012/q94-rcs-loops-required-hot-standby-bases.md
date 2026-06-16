---
title: "2012 Q94 — RCS Loops Required in Hot Standby and Bases"
category: exams
status: draft
aliases:
  - 2012 Q94
  - 2012-Q94
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q94 — RCS Loops Required in Hot Standby and Bases</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">194001G132 / 2.1.32 (RO 3.8 / SRO 4.0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is in MODE 3 preparing for a startup.<br>
- 21 RDMG set motor AND generator breakers are closed, and BOTH Reactor Trip Breakers A and B are shut for rod control testing.<br><br>
Which of the following identifies how many Reactor Coolant loops are REQUIRED to be in operation IAW Salem Tech Spec 3.4.1.2.c, Reactor Coolant System, Hot Standby, and correctly reflects its Bases?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Four, because single failure considerations require all loops in operation when rod control is energized.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> One, because it is sufficient to provide positive pressure control of the RCS with a bubble established in the PZR.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Four, because it ensures DNB criteria are satisfied for any conditions under which control rods are not fully inserted.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> One, because it provides adequate flow to ensure mixing, prevent stratification, and produce gradual reactivity changes during boron concentration reductions in the Reactor Coolant System.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> All of the choices have their reasons pulled from the Bases section of Tech Spec for RCP operation. The conditions in the stem indicate that Rod Control is energized. With rod control energized, 4 RCPs must be in operation. As per the Bases on page B3/4 4-1, it is for single failure criteria. B is incorrect because 4 loops are required. C is incorrect because DNB is not a bases for Mode 3 RCP operation, it is a Mode 1 and 2 bases. D is incorrect because it is one RCP, but has the correct bases for when only one RCP is required.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> B is incorrect because 4 loops are required with rod control energized; the single PZR pressure control bases is not the governing requirement here.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> C is incorrect because DNB is not a bases for Mode 3 RCP operation; it is a Mode 1 and 2 bases.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> D is incorrect because it is one RCP, but has the correct bases for when only one RCP is required (not the four-loop requirement with rod control energized).</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Salem Tech Specs 3/4.1.2 (page 3/4 4-2, Rev 44); Salem Tech Specs Bases 3/4.4.1 (page B3/4 4-1, Rev 197) | LO: RCPUMPE010 | Source: Facility Exam Bank (Significantly Modified — Vision Q27905, candidate must determine rod control energized then how many RCPs required) | Cognitive: Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Reactor Coolant Pumps]], [[RCS]], [[Control Rod Drive]]
- Related tech specs: [[TS 3/4.4 — Reactor Coolant System]]
- Related exam: [[2012 NRC Written Exam]]
