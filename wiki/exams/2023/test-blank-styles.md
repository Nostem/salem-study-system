---
title: "Test — Fill-in-the-Blank Styling Options"
category: exams
status: draft
aliases: []
---

<style>
/* Option A: Cyan underline with subtle glow */
.blank-a {
  color: #67e8f9;
  border-bottom: 2px dashed rgba(103, 232, 249, 0.6);
  padding: 0 0.15rem;
  font-weight: 600;
}

/* Option B: Amber pill badge (like K/A tags) */
.blank-b {
  background: rgba(251, 191, 36, 0.15);
  color: #fde68a;
  padding: 0.1rem 0.4rem;
  border-radius: 3px;
  font-weight: 600;
  font-size: 0.95em;
}

/* Option C: Blue outline box */
.blank-c {
  border: 1.5px solid rgba(96, 165, 250, 0.5);
  background: rgba(96, 165, 250, 0.08);
  color: #93c5fd;
  padding: 0.1rem 0.35rem;
  border-radius: 3px;
  font-weight: 600;
}

/* Option D: Magenta/purple highlight (distinct from existing colors) */
.blank-d {
  background: rgba(192, 132, 252, 0.15);
  border-bottom: 2px solid rgba(192, 132, 252, 0.5);
  color: #d8b4fe;
  padding: 0.05rem 0.25rem;
  border-radius: 2px;
  font-weight: 600;
}

/* Option E: Monospace with green bracket markers */
.blank-e {
  font-family: ui-monospace, SFMono-Regular, monospace;
  color: #6ee7b7;
  font-weight: 600;
  letter-spacing: 0.02em;
}
</style>

## Current Style (no highlighting)

This is how `_(1)_` and `_(2)_` look today — easy to miss in gray text.

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q56 — Rod Position Indication (CURRENT)</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">T2G2 014A2.11 (3.0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
- Salem Unit 2 is at 100% power<br>
- Control Bank D rods are at 200 steps<br>
<strong>Then:</strong><br>
- The Group Demand Step Counter on 2CC2 console for Control Bank D Group 1 rods fails (blank screen)<br><br>
In accordance with S2.OP-DL.ZZ-0003, Control Room Logs, which of the following completes both statements?<br><br>
1. The Plant Computer displays the rod demand step position for Group(s) _(1)_.<br>
2. Based on the above condition, the Plant Computer _(2)_ be used to satisfy the Tech Spec requirements for the failed console group demand step counter.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> (1) 1 Only (2) can</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> (1) 1 and 2 (2) can NOT</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> (1) 1 and 2 (2) can</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> (1) 1 Only (2) can NOT</div>
</div>
</div>

---

## Option A — Cyan Dashed Underline

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q56 — Option A: Cyan Underline</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
- Salem Unit 2 is at 100% power<br>
- Control Bank D rods are at 200 steps<br>
<strong>Then:</strong><br>
- The Group Demand Step Counter on 2CC2 console for Control Bank D Group 1 rods fails (blank screen)<br><br>
In accordance with S2.OP-DL.ZZ-0003, Control Room Logs, which of the following completes both statements?<br><br>
1. The Plant Computer displays the rod demand step position for Group(s) <span class="blank-a">_(1)_</span>.<br>
2. Based on the above condition, the Plant Computer <span class="blank-a">_(2)_</span> be used to satisfy the Tech Spec requirements for the failed console group demand step counter.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> <span class="blank-a">(1)</span> 1 Only <span class="blank-a">(2)</span> can</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> <span class="blank-a">(1)</span> 1 and 2 <span class="blank-a">(2)</span> can NOT</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> <span class="blank-a">(1)</span> 1 and 2 <span class="blank-a">(2)</span> can</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> <span class="blank-a">(1)</span> 1 Only <span class="blank-a">(2)</span> can NOT</div>
</div>
</div>

---

## Option B — Amber Pill Badge

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q56 — Option B: Amber Badge</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
- Salem Unit 2 is at 100% power<br>
- Control Bank D rods are at 200 steps<br>
<strong>Then:</strong><br>
- The Group Demand Step Counter on 2CC2 console for Control Bank D Group 1 rods fails (blank screen)<br><br>
In accordance with S2.OP-DL.ZZ-0003, Control Room Logs, which of the following completes both statements?<br><br>
1. The Plant Computer displays the rod demand step position for Group(s) <span class="blank-b">_(1)_</span>.<br>
2. Based on the above condition, the Plant Computer <span class="blank-b">_(2)_</span> be used to satisfy the Tech Spec requirements for the failed console group demand step counter.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> <span class="blank-b">(1)</span> 1 Only <span class="blank-b">(2)</span> can</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> <span class="blank-b">(1)</span> 1 and 2 <span class="blank-b">(2)</span> can NOT</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> <span class="blank-b">(1)</span> 1 and 2 <span class="blank-b">(2)</span> can</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> <span class="blank-b">(1)</span> 1 Only <span class="blank-b">(2)</span> can NOT</div>
</div>
</div>

---

## Option C — Blue Outline Box

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q56 — Option C: Blue Outline</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
- Salem Unit 2 is at 100% power<br>
- Control Bank D rods are at 200 steps<br>
<strong>Then:</strong><br>
- The Group Demand Step Counter on 2CC2 console for Control Bank D Group 1 rods fails (blank screen)<br><br>
In accordance with S2.OP-DL.ZZ-0003, Control Room Logs, which of the following completes both statements?<br><br>
1. The Plant Computer displays the rod demand step position for Group(s) <span class="blank-c">_(1)_</span>.<br>
2. Based on the above condition, the Plant Computer <span class="blank-c">_(2)_</span> be used to satisfy the Tech Spec requirements for the failed console group demand step counter.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> <span class="blank-c">(1)</span> 1 Only <span class="blank-c">(2)</span> can</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> <span class="blank-c">(1)</span> 1 and 2 <span class="blank-c">(2)</span> can NOT</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> <span class="blank-c">(1)</span> 1 and 2 <span class="blank-c">(2)</span> can</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> <span class="blank-c">(1)</span> 1 Only <span class="blank-c">(2)</span> can NOT</div>
</div>
</div>

---

## Option D — Purple Highlight

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q56 — Option D: Purple Highlight</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
- Salem Unit 2 is at 100% power<br>
- Control Bank D rods are at 200 steps<br>
<strong>Then:</strong><br>
- The Group Demand Step Counter on 2CC2 console for Control Bank D Group 1 rods fails (blank screen)<br><br>
In accordance with S2.OP-DL.ZZ-0003, Control Room Logs, which of the following completes both statements?<br><br>
1. The Plant Computer displays the rod demand step position for Group(s) <span class="blank-d">_(1)_</span>.<br>
2. Based on the above condition, the Plant Computer <span class="blank-d">_(2)_</span> be used to satisfy the Tech Spec requirements for the failed console group demand step counter.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> <span class="blank-d">(1)</span> 1 Only <span class="blank-d">(2)</span> can</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> <span class="blank-d">(1)</span> 1 and 2 <span class="blank-d">(2)</span> can NOT</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> <span class="blank-d">(1)</span> 1 and 2 <span class="blank-d">(2)</span> can</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> <span class="blank-d">(1)</span> 1 Only <span class="blank-d">(2)</span> can NOT</div>
</div>
</div>

---

## Option E — Green Monospace

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q56 — Option E: Green Mono</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
- Salem Unit 2 is at 100% power<br>
- Control Bank D rods are at 200 steps<br>
<strong>Then:</strong><br>
- The Group Demand Step Counter on 2CC2 console for Control Bank D Group 1 rods fails (blank screen)<br><br>
In accordance with S2.OP-DL.ZZ-0003, Control Room Logs, which of the following completes both statements?<br><br>
1. The Plant Computer displays the rod demand step position for Group(s) <span class="blank-e">__(1)__</span>.<br>
2. Based on the above condition, the Plant Computer <span class="blank-e">__(2)__</span> be used to satisfy the Tech Spec requirements for the failed console group demand step counter.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> <span class="blank-e">(1)</span> 1 Only <span class="blank-e">(2)</span> can</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> <span class="blank-e">(1)</span> 1 and 2 <span class="blank-e">(2)</span> can NOT</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> <span class="blank-e">(1)</span> 1 and 2 <span class="blank-e">(2)</span> can</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> <span class="blank-e">(1)</span> 1 Only <span class="blank-e">(2)</span> can NOT</div>
</div>
</div>

---

## Bonus: Q64 three-part example (Option C vs Option D)

Longer stems with more blanks to test readability.

### Option C (Blue Outline)

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q64 — SGFP Trip (Option C)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
- Salem Unit 2 is at 100% power<br>
- All systems are in normal alignment and in Auto<br>
<strong>Then:</strong><br>
- 21 SGFP trips<br><br>
Which of the following indications is the expected response?<br><br>
1. The DEHC will automatically runback the turbine at <span class="blank-c">_(1)_</span> per minute.<br>
2. 2CN47, 23/24/25 Heater String Bypass valve, <span class="blank-c">_(2)_</span> immediately open when the feedpump trips.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> <span class="blank-c">(1)</span> 15% <span class="blank-c">(2)</span> will NOT</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> <span class="blank-c">(1)</span> 15% <span class="blank-c">(2)</span> will</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> <span class="blank-c">(1)</span> 200% <span class="blank-c">(2)</span> will</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> <span class="blank-c">(1)</span> 200% <span class="blank-c">(2)</span> will NOT</div>
</div>
</div>

### Option D (Purple Highlight)

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q64 — SGFP Trip (Option D)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
- Salem Unit 2 is at 100% power<br>
- All systems are in normal alignment and in Auto<br>
<strong>Then:</strong><br>
- 21 SGFP trips<br><br>
Which of the following indications is the expected response?<br><br>
1. The DEHC will automatically runback the turbine at <span class="blank-d">_(1)_</span> per minute.<br>
2. 2CN47, 23/24/25 Heater String Bypass valve, <span class="blank-d">_(2)_</span> immediately open when the feedpump trips.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> <span class="blank-d">(1)</span> 15% <span class="blank-d">(2)</span> will NOT</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> <span class="blank-d">(1)</span> 15% <span class="blank-d">(2)</span> will</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> <span class="blank-d">(1)</span> 200% <span class="blank-d">(2)</span> will</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> <span class="blank-d">(1)</span> 200% <span class="blank-d">(2)</span> will NOT</div>
</div>
</div>
