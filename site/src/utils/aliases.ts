// Entity aliases from CLAUDE.md — maps alternate names to canonical article titles
// Update this when new aliases are discovered during ingestion

export const ENTITY_ALIASES: Record<string, string> = {
  'CVCS': 'Chemical and Volume Control System',
  'Boration Systems': 'Chemical and Volume Control System',
  'charging and letdown': 'Chemical and Volume Control System',
  'RCS': 'Reactor Coolant System',
  'ECCS': 'Emergency Core Cooling Systems',
  'safety injection': 'Emergency Core Cooling Systems',
  'CFCUs': 'Containment Fan Coil Units',
  'containment cooling': 'Containment Fan Coil Units',
  'RHR': 'Residual Heat Removal',
  'shutdown cooling': 'Residual Heat Removal',
  'CCW': 'Component Cooling Water',
  'SW': 'Service Water',
  'AFW': 'Auxiliary Feedwater',
  'PORVs': 'Power Operated Relief Valves',
};
