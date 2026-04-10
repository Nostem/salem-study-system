---
title: 4KV
category: systems
status: draft
aliases:
  - 4KV vital buses
  - 4160V
  - vital buses
  - group buses
---

# 4KV

## Function

The 4160V AC distribution system is the backbone of plant AC power distribution. It supplies both non-safeguards Group Buses and safety-related Vital Buses, ensuring power to safeguards equipment during accident response. The Class 1E distribution system meets the intent of IEEE 308-1971. (UFSAR 8.3.1.2)

## Group Buses (Non-Safety)

- 4 sections
- Feed plant auxiliaries (non-safeguards loads)
- Powered from station power transformers (normal) or auxiliary power transformer (during operation)
- On unit trip, 4160V group buses automatically transfer from auxiliary transformer to station power transformer
(UFSAR 8.3.1.2)

## Vital Buses (Safety-Related)

- 3 sections per unit (A, B, C)
- Feed safeguards equipment (ECCS pumps, containment spray, etc.)
- Each vital bus fed from station power transformers (T13/T14 for Unit 1, T23/T24 for Unit 2)
- Two station power transformers per unit — each can supply vital buses
- In-feed breakers electrically interlocked to prevent paralleling through a vital bus
- Each vital bus backed by a dedicated diesel generator
(UFSAR 8.3.1.2)

## Safeguards Sequence

On SI signal with loss of offsite power:
1. Diesel generators auto-start
2. Vital bus loads shed
3. Diesel generators connect to vital buses
4. Safeguards loads sequenced on in prescribed order and time delays
5. Ensures diesel generators not overloaded during accident response
(UFSAR 7.3, 8.3)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q93</div>
CW bus loss scenario: when the 4KV infeed breaker to the 24 CW bus fails open, the bus auto-transfers to the 23 CW bus. However, <span class="hi-exam">all 'B' circulator breakers trip open on undervoltage during the transfer</span> and must be manually restarted. With one CW pump already C/T, this results in <span class="hi-exam">4 or more circulators out of service</span>. Per AB.CW-0001 Attachment 1, with 4+ circulators OOS at P-10 or above: <span class="hi-exam">trip the reactor and enter EOP-TRIP-1</span>.
</div>

## Tech Spec LCOs

- **[[TS 3/4.8 — Electrical]]** — TS 3.8.3.1 requires vital buses energized and OPERABLE

## Connections

- Related systems: [[500KV]], [[460/230V AC]], [[EDGs]], [[SECs]], [[TS 3/4.8 — Electrical]]
- Related procedures: [[AB.CW-0001 — Circulating Water Malfunction]]
- Related exam questions: [[2023 Q88]], [[2023 Q93]]
- Related exam: [[2023 NRC Written Exam]]
