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
  planned_platform?: string;
  platform_changed?: boolean;
}

export interface TripLeg {
  origin: string;
  destination: string;
  line: string;
  product: string;
  departure_planned: string;
  departure_estimated: string;
  arrival_planned: string;
  arrival_estimated: string;
  delay: number;
  duration_minutes: number;
  platform: string;
  transfer?: boolean;
}

export interface TripData {
  departure: string;
  arrival: string;
  duration_minutes: number;
  transfers: number;
  connection_feasible: boolean;
  transfer_risk: string;
  min_transfer_time: number;
  legs: TripLeg[];
  next_journeys?: TripData[];
}

export interface CardConfig {
  entity: string;
  layout: "table" | "compact" | "trip";
  max_departures: number;
  show_header: boolean;
  show_platform: boolean;
  show_delay: boolean;
  show_realtime_indicator: boolean;
  theme: "dark" | "light" | "auto";
}

// Home Assistant types (minimal declarations for type safety)
export interface HomeAssistant {
  states: Record<string, HassEntity>;
  themes: {
    darkMode: boolean;
  };
  localize: (key: string) => string;
  language: string;
}

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
  last_changed: string;
  last_updated: string;
}
