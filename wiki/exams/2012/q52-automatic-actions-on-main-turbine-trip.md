---
title: "2012 Q52 — Automatic Actions on a Unit 2 Main Turbine Trip"
category: exams
status: draft
aliases:
  - 2012 Q52
  - 2012-Q52
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q52 — Automatic Actions on a Unit 2 Main Turbine Trip</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">045000A311 / A3.11 (RO 2.6 / SRO 2.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Of the following, choose the choice which contains ONLY actions that automatically occur on a Unit 2 Main Turbine trip from 100% power, with NO operator action.<br><br>
I. Running EHC pumps trip<br>
II. 500KV breakers 1-9 and 9-10 open.<br>
III. Emergency Bearing Oil pumps start.<br>
IV. 4KV Vital buses swap power supplies.<br>
V. 4KV Group buses swap power supplies<br>
VI. Main Generator Exciter Field Breaker opens.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> I, II, III.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> I, IV, VI.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> II, V, VI.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> III, IV, V.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> 55.41.b(4) Running EHC pumps do not auto stop, but plausible because F-32 DEHC trip occurs on turbine trip. 1-9 and 9-10 are the Unit 2 Main Generator output breakers, and they open automatically on every turbine trip. Emergency bearing oil pumps do not start but plausible because aux bearing oil pump will start. 4 KV group buses are powered from APT when Main Generator is operating, an automatically swap to Station Power Transformers powered from off site power upon when the output breakers open. 4KV vital bus swap does not occur as vital buses are powered from off site source. Exciter Field breaker trips upon a Main Turbine trip. [Correct combination is II, V, VI.]</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Addressed by the combined explanation: I (running EHC pumps do not auto stop) and III (Emergency Bearing Oil pumps do not start — the aux bearing oil pump starts) are not automatic actions on a turbine trip.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Addressed by the combined explanation: I (running EHC pumps do not auto stop) and IV (4KV vital buses do not swap — they are already powered from off site) are not automatic.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Addressed by the combined explanation: III (Emergency Bearing Oil pumps do not start) and IV (4KV vital buses do not swap) are not automatic actions.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Overhead Annunciators Windows F,G,H — S2.OP-AR.ZZ-0006,7,8 (Rev 15,48,19); Generator Voltage regulator Exciter Field Break 601037 (Rev 6) | LO: MNTURBE006, EXCTR2E009 | Source: New | Cognitive: Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Main Turbine]], [[500KV]], [[4KV]]
- Related procedures: [[S2.OP-AR.ZZ-0006 — Overhead Annunciators Window F]], [[S1.OP-AR.ZZ-0007 — Overhead Annunciators Window G]], [[S2.OP-AR.ZZ-0008 — Overhead Annunciators Window H]]
- Related exam: [[2012 NRC Written Exam]]
