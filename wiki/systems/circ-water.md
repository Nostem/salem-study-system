---
title: Circ Water
category: systems
status: draft
aliases:
  - circulating water
---

# Circ Water

## Function & Design Basis

The Circulating Water System (CWS) furnishes the main steam condenser with cooling water drawn from the Delaware River (UFSAR §10.4.5). It is a siphon-recovery system that supplies <span class="hi">1110000 gpm</span> of river water to each unit's triple-shell condenser; the three condenser shells are single pass with divided waterbox circulation (UFSAR §10.4.5.1). The CWS is a separate, non-safety entity apart from the seismically designed Service Water System (covered in UFSAR §9.2) (UFSAR §10.4.5). The 500-foot offshore discharge is arranged to prevent recirculation while limiting the overall temperature rise of the river to <span class="hi">4°F</span> or less in the vicinity of the outlet (UFSAR §10.4.5.1).

The main condensers, which the CWS cools, consist of three single-pass rectangular shells per unit equipped with divided waterboxes and interconnected steam spaces for added flexibility of operation; each is of shell-and-tube design arranged within the circulating water circuit for single-pressure operation with the six-flow, tandem-compound turbine (UFSAR §10.4.1.1). Condenser design parameters: steam loading <span class="hi">7.636 x 10⁹ Btu/hr</span>, circulating water <span class="hi">1110100 gpm</span>, inlet water temperature <span class="hi">61.8°F</span>, condensing surface <span class="hi">800000 sq ft</span>, tube material Al 6x (Unit 2 condensers contain some AL6xN tubes), tube quantity <span class="hi">68001</span>, and design pressure <span class="val-normal">1.3 in. Hg abs.</span> (UFSAR §10.4.1.1). The condenser hotwell is designed for 5 minutes' storage capacity (approximately <span class="hi">120000 gallons</span> at maximum load) and to maintain 0.005 cc/l of dissolved oxygen in the effluent condensate (UFSAR §10.4.1.2).

## Key Components

- **Circulating water pumps (circulators):** Six per unit, of the pullout-type design, mounted in individual pump cells in the intake structure that is common to Units 1 and 2 (UFSAR §10.4.5.1). Each condenser shell half is rated <span class="hi">185000 gpm</span> at <span class="hi">27-foot</span> total dynamic head (TDH), driven by <span class="hi">2000 hp</span> induction motors (UFSAR §10.4.5.1). The pumps are designed to operate at the lowest recorded river elevation of <span class="hi">81.0 feet</span> (UFSAR §10.4.5.1).
- **Main condensers / waterboxes:** Triple-shell, single-pass condensers mounted beneath the low-pressure turbine exhausts; equipped with bolted, bonnet-type steel waterboxes that include Cathodic Protection (UFSAR §10.4.1.2). Both waterboxes and tubesheets are coated with a high-performance epoxy polymer; fiberglass ladders provide waterbox access, and safety grids shield the waterbox nozzle openings for personnel protection during inspection/maintenance (UFSAR §10.4.1.2). Four 10-inch diameter turbine bypass steam inlets per shell admit up to 40-percent instantaneous turbine load rejection without detrimental effects on the condenser internals (UFSAR §10.4.1.2).
- **Intake structure / traveling water screens:** The traveling water screens extend the full length and height of the 12-bay intake structure; the inlet velocity to the intake screen wall is 1 fps at mean low tide, compatible with local marine life, and the intake includes 2-foot wide fish escape passages immediately in front of the screens (UFSAR §10.4.5.1). A full-depth heavy-duty trash rack at the entrance to each pump cell protects the circulating pumps and traveling screens from large debris; two mobile mechanical rakes remove debris from the trash-rack face, and refuse pits with removable bins collect raked debris for offsite disposal (UFSAR §10.4.5.1). All electrical components associated with the intake are mounted above the highest recorded water elevation for flood protection, and an 8-foot high concrete wall protects the equipment from wave runup (UFSAR §10.4.5.1).
- **Traveling screen spray wash / lubrication supply:** Vertical, turbine-type auxiliary service pumps in the circulating water intake supply the traveling screen spray wash system — four pumps per unit, each with automatic strainers in their discharge line (UFSAR §10.4.5.1). Two bearing lubrication pumps and strainers provide river water to the circulating water pump bearing and motor coolers for each unit; a standby backup line from the screen wash header to the lubrication system is provided for use during emergency and/or maintenance situations (UFSAR §10.4.5.1).
- **System construction:** The system is constructed of pre-stressed concrete, embedded steel cylinder pipe; subaqueous piping is employed in the portion of the discharge piping submerged in the river (UFSAR §10.4.5.1).

## Power Supplies

The circulating water pumps are powered from their respective unit's 4160-V circulating water distribution system; remote control of all pumps is maintained by the operator in the respective unit's control room (UFSAR §10.4.5.1).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q93</div>
23 SPT powers the 23 CW bus ("A" circulators); 24 SPT powers the 24 CW bus ("B" circulators). <span class="hi-exam">Losing 23 SPT trips 2 more circulators (plus 21A C/T = 3 of 4 lost) — the reactor stays at power</span> (a CAS to trip the Rx applies only if 4 are O/S above P-9 / 49%). AB.CW-0001 directs manually establishing Low Pressure Turbine Hood Spray (normally secured &gt;15% power). See [[Main Turbine]], [[AB.CW-0001 — Circulating Water Malfunction]].
</div>

## Automatic Features & Setpoints

Each circulating water pump is provided with a pump "READY TO START" circuit with associated pushbutton and indicating light; prior to a pump start the "READY TO START" pushbutton is depressed, the indicating light flashes while the pump permissives are being met, and goes solid when the pump is ready for starting (UFSAR §10.4.5.1). <span class="hi-exam">If the waterbox is under a vacuum of &gt; 2.5" Hg, the "READY TO START" circuit will open the pump's associated waterbox vacuum breakers, allowing the waterbox to fill with air and reduce the vacuum to &lt; 1" Hg</span> before the pump starts (UFSAR §10.4.5.1). After the pump is started and brought up to design speed, the valve in the condenser discharge line is opened, the pump bypass valve is then closed, and full circulating water flow is established (UFSAR §10.4.5.1).

The circulating water circuit can be primed after the circulating pumps are in operation, which eliminates the hydraulic surges encountered with conventional startup practices; any entrapped air is self-vented continuously through the water box bypass line, ensuring the water boxes are full and eliminating accumulated dissolved air released under siphon conditions (UFSAR §10.4.5.1). Each circulating water circuit is equipped with quick-opening vacuum-breaker valves designed to admit air into the circuit in the event of a circulator trip out (UFSAR §10.4.5.1).

## Interconnections & Loads

The triple-shell main condenser is the principal heat load on the CWS; the condenser steam spaces are interconnected to permit operation with less than the full complement of circulating water pumps (UFSAR §10.4.5.2). The condenser air removal (Main Condenser Evacuation) System maintains condenser vacuum: three of the eight rotary-type vacuum pumps per unit are used for condenser vacuum and one (No. 11/23) is used for waterbox priming-tank vacuum; the waterbox priming-tank vacuum pump is a single-stage pump that does not require an air ejector (UFSAR §10.4.2). Cooling water for the condenser vacuum pumps and their seal water coolers is furnished by the Turbine Auxiliaries Cooling System (UFSAR §10.4.2).

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 SRO-A4</div>
Liquid radwaste release path selection: CW system provides <span class="hi-exam">dilution flow (minimum 100000 gpm)</span> for CVCS Monitor Tank releases through CC Heat Exchangers. SRO must verify which CW pumps (circulators) are in service to ensure adequate dilution. With 12A Circulator C/T and Unit 2 circulators OOS, candidate selects <span class="hi-exam">21 CCHX to 12A AND/OR 12B CW Pumps</span>.
</div>

## Effects of Loss / Malfunction

All six circulating water pumps are normally in service (UFSAR §10.4.5.2). Because the condenser steam spaces are interconnected, the plant can operate with less than the full complement of circulating water pumps, but loss of circulators reduces available condenser cooling and degrades condenser vacuum (UFSAR §10.4.5.2). For performance monitoring, the CWS is equipped with test connections to evaluate flow conditions, and the discharge pressure of each pump is monitored at the intake structure (UFSAR §10.4.5.2). Loss of intake (e.g., debris, ice, or structural damage) threatens the supply of cooling water to all circulators; the trash racks, mobile rakes, fish escape passages, and the 8-foot wave-runup wall are the intake protective features (UFSAR §10.4.5.1).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q37</div>
CW intake structure damage with 4 circulators OOS and power at 25% (above P-10): per AB.CW-0001 CAS, <span class="hi-exam">trip the reactor</span>. The 4+ circulators OOS threshold with power >= P-10 requires immediate reactor trip — not rapid load reduction or turbine trip.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 RO-A1.a</div>
Adverse environmental conditions degrade the circulating water intake. The Circulating Water Degradation Index (CWDI, SC.OP-AB.ZZ-0001 Attachment 3) sums Detritus, Circulator, Wind Speed, and River Level points each hour. <span class="hi-exam">Wind Speed points accrue when sustained winds &gt;30 mph from sector 140 degrees (SE) to 240 degrees (WSW) are predicted within 8 hours.</span> A unit with a circulator out of service (e.g., 12A) tallies higher (1 circulator point/hour) and reaches a <span class="hi-exam">RED rating</span> sooner. A predicted RED rating requires placing the unit in <span class="hi-exam">at least MODE 2 a full 2 hours before</span> the RED time.
</div>

## Connections

- Related systems: [[Main Turbine]], [[Feed & Condensate]]
- Related procedures: [[AB.CW-0001 — Circulating Water Malfunction]], [[AB.LOAD-0001 — Rapid Load Reduction]], [[SC.OP-AB.ZZ-0001 — Adverse Environmental Conditions]]
- Related exam questions: [[2019 Q37]], [[2015 Q93]], [[2014 Q81]]
- Related JPMs: [[2020 JPM SRO-A4]], [[2015 JPM RO-A1-1]]
- Related scenarios: [[2012 Scenario 3]]
- Related exam: [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2015 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2014 NRC Written Exam]], [[2012 NRC Operating Exam]]
