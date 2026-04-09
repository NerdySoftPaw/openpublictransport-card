import { CardConfig } from "./types";

export const CARD_VERSION = "1.0.0";

export const DEFAULT_CONFIG: Omit<CardConfig, "entity"> = {
  layout: "table",
  max_departures: 10,
  show_header: true,
  show_platform: true,
  show_delay: true,
  show_realtime_indicator: true,
  theme: "auto",
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
  default: "mdi:transit-connection-variant",
};
