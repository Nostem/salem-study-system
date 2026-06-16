---
title: "2012 Q39 — Available PZR Heater Groups After Loss of 2A 4KV Vital Bus"
category: exams
status: draft
aliases:
  - 2012 Q39
  - 2012-Q39
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q39 — Available PZR Heater Groups After Loss of 2A 4KV Vital Bus</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">010000K201 / K2.01 (RO 3.0 / SRO 3.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Following a loss of offsite power, 2A 4KV Vital Bus fails to reenergize.<br><br>
Which of the following describes the PZR heater group(s) which are available, or will be made available, to maintain PZR pressure while responding IAW TRIP series EOPs?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Backup heater group 21 only.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Backup heater group 22 only.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Both backup heater groups only.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> All backup and control heater groups.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> 55.41.b(7) Control Group heaters are powered from 2G non vital bus, and does not have an emergency power supply. 21 Backup Heater Group is normally powered from 2G non vital bus, but has an emergency power supply from the 2C vital bus. 22 Backup Heater Group is normally powered from 2E non vital bus, but has an emergency power supply from the 2A vital bus.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Incorrect — 22 Backup Heater Group's emergency power supply is the 2A vital bus, which has failed to reenergize; 21 Backup Heater Group (emergency feed from 2C vital bus) is the available group.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect — only 21 Backup Heater Group is available; 22 Backup Heater Group's emergency supply (2A vital bus) is lost.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect — Control Group heaters (2G non vital bus) have no emergency power supply, and 22 Backup Heater Group's emergency supply (2A vital bus) is lost, so only 21 Backup Heater Group is available.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: 2EP 480V Pressurizer Heater Bus One-Line 601397 (Rev 15); 2GP 480V Pressurizer Heater Bus One-Line 601398 (Rev 12) | LO: PZRP&amp;LE005 | Source: Facility Exam Bank (Significantly Modified) | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer Level & Press Control]], [[4KV]]
- Related procedures: [[S2.OP-SO.PZR-0010 — Pressurizer Backup Heaters Power Supply Transfer]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2012 NRC Written Exam]]
