export interface Departure {
  line: string;
  destination: string;
  departure_time: string;
  planned_time: string;
  delay: number;
  platform: string;
  transportation_type: string;
  is_realtime: boolean;
  minutes_until_departure: number;
  description?: string;
  notices?: string[];
  // The notices that report an actual disruption, without routine information
  // such as bicycle rules or accessibility; added by integration 2026.10.5.
  // Older versions only send `notices`.
  disruptions?: string[];
  planned_platform?: string;
  platform_changed?: boolean;
  line_color?: string;
  line_text_color?: string;
}

export interface TripLeg {
  origin: string;
  destination: string;
  line: string;
  product: string;
  // Unified type ("bus", "subway", "walk", …), added by integration 2026.9.1.
  // Older versions only send `product`, the provider's own name.
  transport_type?: string;
  departure_planned: string;
  departure_estimated: string;
  arrival_planned: string;
  arrival_estimated: string;
  delay: number;
  duration_minutes: number;
  platform: string;
  // Where the vehicle itself is headed (its headsign) — "Herrenberg" for an S1
  // that passes through. Sent by integrations new enough to expose it.
  direction?: string;
  // The provider's description of the change out of this leg ("Fussweg"), or
  // just a flag. Truthy means: change vehicles here.
  transfer?: boolean | string;
  // Minutes between this vehicle's arrival and the next one's departure — the
  // wait on the platform after this leg.
  transfer_minutes?: number;
}

export interface TripData {
  departure: string;
  arrival: string;
  // ISO timestamp of the journey start — the walk to the stop, when there is
  // one. Absent on integrations older than 2026.8.2.
  departure_timestamp?: string | null;
  // ISO timestamp of the journey end. Absent on integrations older than
  // 2026.8.2, like its departure counterpart.
  arrival_timestamp?: string | null;
  // Minutes until that start, as the sensor last computed it.
  in_minutes?: number | null;
  // Where the trip ends, e.g. "Reinoldikirche, Dortmund".
  destination?: string;
  // The provider's own total, which is not always arrival minus departure —
  // the trip layout shows the span instead and uses this only without it.
  duration_minutes: number;
  transfers: number;
  connection_feasible: boolean;
  transfer_risk: string;
  min_transfer_time: number;
  legs: TripLeg[];
  next_journeys?: TripData[];
}

/** The `get_journeys` response: every connection the trip sensor holds. */
export interface JourneysResponse {
  journeys?: TripData[];
}

export interface CardConfig {
  entity: string;
  layout: "table" | "compact" | "trip" | "next";
  max_departures: number;
  show_header: boolean;
  show_platform: boolean;
  show_delay: boolean;
  show_realtime_indicator: boolean;
  /**
   * The card's look. `dark` and `light` are the departure board, gold on
   * black or ink on white, in a monospace face; `auto` picks one of the two by
   * the dashboard's mode. `ha` takes colours and type from the Home Assistant
   * theme instead, so the card looks like the dashboard around it.
   */
  theme: "dark" | "light" | "auto" | "ha";
  line_filter?: string;
  destination_filter?: string;
}

// Home Assistant types (minimal declarations for type safety)
export interface EntityRegistryDisplayEntry {
  entity_id: string;
  platform?: string;
  translation_key?: string;
  name?: string;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  // Entity registry (optional: absent on older HA versions).
  entities?: Record<string, EntityRegistryDisplayEntry>;
  // The service registry, by domain and then service name. The card reads it to
  // find out whether the integration behind an entity can answer a question
  // before it asks — an older integration simply has no entry here.
  services?: Record<string, Record<string, unknown>>;
  themes: {
    darkMode: boolean;
  };
  localize: (key: string) => string;
  language: string;
  callService?: (
    domain: string,
    service: string,
    serviceData?: Record<string, unknown>,
    target?: Record<string, unknown>,
    notifyOnError?: boolean,
    returnResponse?: boolean
  ) => Promise<ServiceCallResponse>;
}

export interface ServiceCallResponse {
  response?: unknown;
}

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
  last_changed: string;
  last_updated: string;
}
