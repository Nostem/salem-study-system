---
title: Chill Water
category: systems
status: draft
aliases:
  - chilled water
---

# Chill Water

## Function & Design Basis

The Auxiliary Building Chilled Water (AB CH) System is a closed-loop system that removes heat from various safety-related and non-safety-related equipment during all modes of operation, and rejects the heat to the ultimate heat sink via the Service Water (SW) System (UFSAR §9.2.5.1). There is <span class="hi">one loop for each Salem Unit</span> (UFSAR §9.2.5.1).

The sharing of the AB CH system between units (the cross-tie configuration described in UFSAR §9.2.5.3) ensures the ability to respond to an accident condition in one unit and an orderly shutdown and cooldown in the other unit (UFSAR §9.2.5.1).

## Key Components

The AB CH System includes <span class="hi">three packaged liquid chillers and two Chilled Water pumps</span> (UFSAR §9.2.5.2). Each pump circulates chilled water in a closed loop from the chillers to the heat loads and then back to the pump suction header. Each chiller evaporator removes heat from the returning chilled water and, in the chiller condenser, rejects the heat to the ultimate heat sink via the SW System. The chillers are designed to supply chilled water at <span class="val-normal">44°F</span> (UFSAR §9.2.5.2).

- **Chillers (3):** Packaged liquid chillers; compressor motors powered from separate 460 VAC Vital Buses (UFSAR §9.2.5.2). A sequence selector switch can be set in position 1, 2 or 3; the chillers sequence on and off as a function of chilled water return temperature and the sequence position in response to changing heat load conditions, with start/stop sequence setpoints that differ for each position such that the chillers sequence on or off one at a time (UFSAR §9.2.5.2).
- **Chilled Water pumps (2):** Powered from separate 230 VAC Vital Buses (UFSAR §9.2.5.2).
- **Expansion tank:** Installed at the suction of the pumps to accommodate chilled water inventory, thermal expansion, and to provide adequate net positive suction head (NPSH) for the pumps (UFSAR §9.2.5.2).
- **CAACS coil three-way control valve (CH74):** Located on the discharge side of the Control Area Air Conditioning System (CAACS) coils; originally designed to control flow through the coils, it is fixed in the full open position to allow full flow through the coils all the time to simplify system operation and improve reliability (UFSAR §9.2.5.2).
- **CREACS coil three-way control valve (CH168):** Located on the discharge side of the Control Room Emergency Air Conditioning System (CREACS) coil; fixed in the full open position for single failure concerns, allowing flow through the coil during all modes of operation (UFSAR §9.2.5.2).
- **ECAC automatic isolation valve:** Chilled water flow to the Emergency Control Air Compressor (ECAC) coolers is normally isolated and is aligned via an automatic isolation valve that opens when the ECAC compressor starts (UFSAR §9.2.5.2).
- **PACU redundant isolation valves (CH151 and CH30):** Automatically isolate the supply of chilled water to the Penetration Area Cooler Unit (PACU) cooling coils on a safety injection signal (UFSAR §9.2.5.2).
- **Miscellaneous room cooler isolation valves (Unit 2):** Redundant isolation valves that automatically isolate chilled water flow to the non-safety room cooling coils on a safety injection signal; three-way control valves modulate flow to each room cooler based on room temperature (UFSAR §9.2.5.2).

**Heat loads served by the AB CH System (per Salem Unit) (UFSAR §9.2.5.2):**

- Safety-related: Control Area Air Conditioning System (CAACS) cooling coils; Control Room Emergency Air Conditioning System (CREACS) cooling coil; Emergency Control Air Compressor (ECAC) coolers.
- Non-safety: Penetration Area Cooler Units (PACUs); Miscellaneous Room Coolers (Unit 2 only), including the primary lab room cooler, secondary lab room cooler, counting room cooler, and post-accident sampling room cooler.

The CAACS and CREACS are sub-systems of the Control Area Ventilation (CAV) System (UFSAR §9.2.5.2, see §9.4.1).

## Operation

### System Configurations

The AB CH System may be operated in one of three configurations, per Technical Specification 3.7.10 (UFSAR §9.2.5.3):

- **Configuration A (Normal):** All chillers and pumps required to be operable, with no system alignment restrictions; applicable for the entire year (UFSAR §9.2.5.3).
- **Configuration B (Two Chiller):** Only two chillers required operable, along with both pumps, with the third chiller isolated from the system. Applicable only from November 1 through April 30. Restrictions: CH flow is isolated to the ECAC on the associated unit; single CREACS filtration train alignment (Maintenance Mode, see §9.4.1) is limited to the opposite unit, which must be in Configuration A; for single filtration train alignment, non-essential loads are isolated on both units (UFSAR §9.2.5.3).
- **Configuration C (Cross-tie):** The two units' CH systems are cross-tied through the manual cross-tie valves <span class="hi">1CH63 and 1CH78</span>. Three chillers and two pumps are required operable on one unit only (a combination of both Units' chilled water pumps and chillers is not permitted), supplying CH flow to both units. Applicable only from November 1 through April 30. Restrictions: CH flow is isolated to the ECACs and non-essential loads on both units; single CREACS filtration train alignment is not permitted (UFSAR §9.2.5.3).

Maximum allowable SW temperature by configuration (UFSAR §9.2.5.3):

| Configuration | Max SW temperature |
|---------------|--------------------|
| A | <span class="val-normal">90°F</span> |
| B | <span class="val-normal">78.3°F</span> |
| C | <span class="val-normal">79.9°F</span> |

### System Operational Modes

The alignments below are based on the CH system being in Configuration A; for Configurations B and C the CH system responds as discussed but some CH loads are pre-isolated per §9.2.5.3 (UFSAR §9.2.5.4).

- **Normal Operation:** The AB CH System in each unit provides chilled water to the CAAC coils and PACUs. In addition, the Unit 2 AB CH System supplies chilled water to the miscellaneous room coolers. Chilled water is also supplied to the CREACS coils due to the fixed-open CH168 control valves, though CREACS itself is not operating. The ECAC is normally in standby with cooling flow through the ECAC isolated; when the ECAC is operated for testing or when the Station Air Compressors are not available or not operating, the AB CH System provides chilled water to the ECAC coolers (UFSAR §9.2.5.4.1).
- **Accident Safety Injection (SI):** The CAV System is automatically switched to the accident pressurized mode, which starts the CREACS fans. The CAACS coils continue to receive chilled water and the ECAC is assumed to be operating (chilled water flow to the ECAC coolers) due to a loss of power or loss of station air compressors. <span class="hi-exam">On an SI signal, redundant isolation valves automatically isolate chilled water flow to the PACUs and the miscellaneous room coolers</span> (UFSAR §9.2.5.4.2).
- **Accident High Radiation (RMS):** The CAV System is automatically switched to the accident pressurized mode, which starts the CREACS fans. The CAACS coils continue to receive chilled water and the ECAC is assumed to be operating. <span class="hi-trap">The PACUs and miscellaneous room coolers are NOT automatically isolated by the RMS signal, and continue to receive chilled water flow until manually isolated by procedure</span> (UFSAR §9.2.5.4.3).
- **Loss of Offsite Power (LOOP):** Chilled water flow is maintained to Units 1 and 2 CAACS coils to provide cooling to the CRE and their respective Relay and Electrical Equipment Rooms. Chilled water is also supplied to the CREACS coils due to the fixed-open CH168 control valves. Each Unit's ECAC is started and chilled water is supplied to the ECAC coolers. The PACUs and miscellaneous room coolers are isolated (UFSAR §9.2.5.4.4).
- **Fire Outside Control Room Area (Recirculation):** The CAV System is manually switched to the full recirculation configuration, initiating the CREACS fans. The CAACS coils continue to receive chilled water. The PACUs and miscellaneous room coolers are manually isolated (UFSAR §9.2.5.4.5).

In all accident modes, both the Unit 1 and Unit 2 CREACS coils provide cooling to the common Control Room Envelope (CRE), and each Unit's CAACS coils provide cooling to their respective Relay and Electrical Equipment Rooms (UFSAR §9.2.5.4).

### Non-Essential Heat-Load Isolation (Both Chillers Tripped)

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 SRO-A1-1</div>
Same heat-load isolation task with the conservative-decision twist: highest inlet water temp 73.5°F + 1.5°F = <span class="hi-exam">75.0°F</span>, exactly at a Table A category boundary. Because outside air temperature is rising (81°F → 99°F during the watch), the Att 2 NOTE requires using the next-higher inlet-temperature category (&gt; 75°F), giving <span class="hi-exam">999.1 kBTU/hr</span> required isolation. Both chillers tripped on freeze protection, TS 3.7.10.a Action b.1 in effect.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 SRO-A1</div>
Non-essential heat load isolation per S2.OP-SO.CH-0001 Attachment 2 (identical scenario tested again in 2022): both chillers tripped, T/S 3.7.10 action 'b' entered, inlet water temp 85.1°F (83.6°F + 1.5°F uncertainty), EACS out of service, Maintenance Mode. <span class="hi-exam">Table A yields 902.8 kBTU/HR</span>. ECAC NOT isolated per SM direction (spool pieces missing for SW alignment). Selected loads total <span class="hi-exam">906.6 kBTU/HR</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 SRO-A1</div>
Non-essential heat load isolation per S2.OP-SO.CH-0001 Attachment 2: with both chillers inoperable, inlet water temp 85.1°F (highest CW temp + 1.5°F instrument uncertainty), EACS out of service, and Maintenance Mode — <span class="hi-exam">Table A yields 902.8 kBTU/HR required isolation</span>. Selected loads (21/22/23 PACU, Secondary Lab, Primary Lab, Counting Room, PASS) total <span class="hi-exam">906.6 kBTU/HR</span>. ECAC kept available per SM direction. TS 3.7.10 action 'b' drives the isolation.
</div>

## Tech Spec LCOs

- **TS 3.7.10** — Chilled Water System (Auxiliary Building Subsystem): the Auxiliary Building chilled water loop serving safety-related loads shall be OPERABLE in one of three configurations — three chillers/two pumps (Config A), two chillers/two pumps during November–April with additional restrictions (Config B), or a cross-tied configuration with three chillers/two pumps from either unit (Config C). With both required chillers inoperable in Modes 1–4, TS 3.7.10.a Action b.1 requires removing non-essential heat loads within <span class="val-trip">4 hrs</span> (TS 3.7.10, Amend 297). See [[TS 3.7 — Plant Systems]] for the full action table and bases.

## Connections

- Related procedures: [[S2.OP-SO.CH-0001 — Chilled Water System Operation]]
- Related tech specs: [[TS 3.7 — Plant Systems]]
- Related JPMs: [[2016 JPM SRO-A1-2]], [[2018 JPM SRO-A1]], [[2022 JPM SRO-A1]], [[2014 JPM SRO-A1-1]]
- Related exam: [[2016 NRC Operating Exam]], [[2018 NRC Operating Exam]], [[2022 NRC Operating Exam]], [[2014 NRC Operating Exam]]
