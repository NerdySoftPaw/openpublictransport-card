import { CardConfig } from "./types";

export const CARD_VERSION = "1.9.0";

export const DEFAULT_CONFIG: Omit<CardConfig, "entity"> = {
  layout: "table",
  max_departures: 10,
  show_header: true,
  show_platform: true,
  show_delay: true,
  show_realtime_indicator: true,
  theme: "auto",
  line_filter: "",
  destination_filter: "",
};

export const TRANSPORT_ICONS: Record<string, string> = {
  bus: "mdi:bus",
  tram: "mdi:tram",
  subway: "mdi:subway-variant",
  train: "mdi:train",
  ferry: "mdi:ferry",
  taxi: "mdi:taxi",
  "s-bahn": "mdi:train",
  "u-bahn": "mdi:subway-variant",
  regional: "mdi:train",
  express: "mdi:train",
  /* A journey can start or end on foot, and a leg then carries the unified type
     "walk" — or, when the integration has no type for it, the provider's own
     product name. Without these a footpath fell through to the default icon and
     the walk to the first stop looked like another vehicle. */
  walk: "mdi:walk",
  footpath: "mdi:walk",
  fussweg: "mdi:walk",
  "fußweg": "mdi:walk",
  bicycle: "mdi:bike",
  fahrrad: "mdi:bike",
  default: "mdi:transit-connection-variant",
};
