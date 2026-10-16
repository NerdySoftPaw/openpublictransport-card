import { LitElement, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { cardStyles, hostStyles } from "./styles";
import { CardConfig, Departure, TripData, HomeAssistant } from "./types";
import { CARD_VERSION, DEFAULT_CONFIG } from "./const";
import { localize } from "./localize";
import { isOptSensor, getOptEntities, detectModel, layoutForModel } from "./detect";

import "./layouts/table";
import "./layouts/compact";
import "./layouts/trip";
import "./layouts/next";
import "./editor";

console.info(
  `%c OPENPUBLICTRANSPORT-CARD %c v${CARD_VERSION} `,
  "color: #ffd700; background: #1a1a1a; font-weight: bold; padding: 2px 4px;",
  "color: #1a1a1a; background: #ffd700; font-weight: bold; padding: 2px 4px;"
);

@customElement("openpublictransport-card")
export class OpenpublictransportCard extends LitElement {
  static styles = [hostStyles, cardStyles];

  @property({ attribute: false }) hass!: HomeAssistant;
  @state() private _config!: CardConfig;
  @state() private _timeInterval?: ReturnType<typeof setInterval>;

  public static getConfigElement(): HTMLElement {
    return document.createElement("openpublictransport-card-editor");
  }

  public static getStubConfig(
    hass: HomeAssistant,
    entities: string[],
    entitiesFallback: string[]
  ): Partial<CardConfig> {
    // Prefer an unused entity, then fall back to one already on the dashboard.
    const pick =
      getOptEntities(hass, entities)[0] ??
      getOptEntities(hass, entitiesFallback)[0] ??
      "";
    const model = pick ? detectModel(hass, pick) : "unknown";
    // Spread defaults first so the model-derived layout wins over "table".
    return { ...DEFAULT_CONFIG, entity: pick, layout: layoutForModel(model) };
  }

  public setConfig(config: Partial<CardConfig>): void {
    if (!config.entity) {
      throw new Error(localize("en", "please_define_entity"));
    }
    this._config = { ...DEFAULT_CONFIG, ...config } as CardConfig;
  }

  public getCardSize(): number {
    if (!this._config) return 3;
    switch (this._config.layout) {
      case "compact":
        return 2;
      case "trip":
        return 5;
      case "next":
        return 2;
      case "table":
      default:
        return Math.min(2 + (this._config.max_departures || 10), 12);
    }
  }

  /**
   * The card is as tall as what it has to say — a journey with five legs and a
   * list of alternatives is taller than a direct one — so a section grid is
   * asked to measure it rather than told a row count in advance.
   *
   * It used to name a fixed number, which was true while the stylesheet made
   * the card fill its slot and scroll inside it. It no longer does, so a fixed
   * number was a promise the card could not keep: anything taller than the
   * rows it had claimed was drawn outside its own cell and over the card
   * below. A narrow column reaches that point readily, which is why it showed
   * on a phone first.
   *
   * `min_rows` still keeps a card that is waiting for data from collapsing to
   * nothing.
   */
  public getGridOptions() {
    return { rows: "auto", min_rows: 2, columns: 12 };
  }

  connectedCallback(): void {
    super.connectedCallback();
    // Update every 10 seconds for the clock and countdown
    this._timeInterval = setInterval(() => {
      this.requestUpdate();
    }, 10000);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._timeInterval) {
      clearInterval(this._timeInterval);
      this._timeInterval = undefined;
    }
  }

  protected updated(changedProps: PropertyValues): void {
    super.updated(changedProps);
    this._applyTheme();
  }

  private _applyTheme(): void {
    if (!this._config) return;

    let theme = this._config.theme;
    if (theme === "auto") {
      theme = this.hass?.themes?.darkMode ? "dark" : "light";
    }
    this.setAttribute("data-theme", theme);
  }

  private _getDepartures(): Departure[] {
    if (!this.hass || !this._config) return [];

    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return [];

    const departures = stateObj.attributes["departures"];
    if (!Array.isArray(departures)) return [];

    let deps = departures as Departure[];

    const filter = (this._config.line_filter || "").trim();
    if (filter) {
      const lines = filter.split(",").map((l) => l.trim().toLowerCase()).filter(Boolean);
      deps = deps.filter((d) => lines.some((l) => d.line.toLowerCase() === l));
    }

    const destFilter = (this._config.destination_filter || "").trim();
    if (destFilter) {
      const destinations = destFilter.split(",").map((d) => d.trim().toLowerCase()).filter(Boolean);
      deps = deps.filter((d) => destinations.some((dest) => (d.destination || "").toLowerCase().includes(dest)));
    }

    return deps;
  }

  private _getTripData(): TripData | null {
    if (!this.hass || !this._config) return null;

    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return null;

    const attrs = stateObj.attributes;
    // Trip sensor exposes data directly as attributes
    if (!attrs["departure"] || !attrs["legs"]) return null;

    return {
      departure: attrs["departure"] as string,
      arrival: attrs["arrival"] as string,
      departure_timestamp: attrs["departure_timestamp"] as string | null | undefined,
      arrival_timestamp: attrs["arrival_timestamp"] as string | null | undefined,
      in_minutes: attrs["in_minutes"] as number | null | undefined,
      destination: attrs["destination"] as string | undefined,
      duration_minutes: attrs["duration_minutes"] as number,
      transfers: attrs["transfers"] as number,
      connection_feasible: attrs["connection_feasible"] as boolean,
      transfer_risk: attrs["transfer_risk"] as string,
      min_transfer_time: attrs["min_transfer_time"] as number,
      legs: attrs["legs"] as any[],
      next_journeys: attrs["next_journeys"] as any[] | undefined,
    };
  }

  /**
   * Reduce a connection to the one departure the traveller has to catch.
   *
   * The "next" layout answers "when do I have to move?", which a trip sensor
   * can answer as well as a departure board — it just reports the whole journey
   * instead (issue #9). The vehicle shown is the first one that is not a walk,
   * the destination is where the trip ends rather than where that first vehicle
   * terminates, and the countdown runs to the start of the journey: with a
   * walking time configured that is when the traveller has to set off, which is
   * also what the sensor's own state counts down to.
   */
  private _tripAsDeparture(trip: TripData): Departure | null {
    const legs = trip.legs ?? [];
    const ride = legs.find((leg) => (leg.transport_type || "").toLowerCase() !== "walk") ?? legs[0];
    if (!ride) return null;

    const boarding = ride.departure_estimated || ride.departure_planned || trip.departure;
    const lastLeg = legs[legs.length - 1];

    return {
      line: ride.line,
      destination: trip.destination || lastLeg?.destination || "",
      departure_time: boarding,
      planned_time: boarding,
      delay: ride.delay ?? 0,
      platform: ride.platform || "",
      transportation_type: ride.transport_type || ride.product || "",
      // EFA only fills the estimated time when it has realtime data for the leg.
      is_realtime: Boolean(ride.departure_estimated),
      minutes_until_departure: this._minutesUntilTrip(trip),
    };
  }

  /**
   * Minutes until a journey starts.
   *
   * Preferred over the sensor's `in_minutes` attribute, which only moves when
   * the coordinator polls: this card re-renders every ten seconds, so counting
   * from the timestamp keeps the countdown honest between updates. Falls back
   * to the attribute for integrations too old to send a timestamp.
   */
  private _minutesUntilTrip(trip: TripData): number {
    if (trip.departure_timestamp) {
      const start = Date.parse(trip.departure_timestamp);
      if (!Number.isNaN(start)) {
        return Math.floor((start - Date.now()) / 60000);
      }
    }
    return trip.in_minutes ?? 0;
  }

  private _getStationName(): string {
    if (!this.hass || !this._config) return "";

    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return "";

    return (
      (stateObj.attributes["friendly_name"] as string) ||
      (stateObj.attributes["station_name"] as string) ||
      stateObj.entity_id
    );
  }

  private _renderError(message: string) {
    return html`
      <ha-card>
        <div class="card-error">
          <ha-icon icon="mdi:alert-circle"></ha-icon>
          <div>${message}</div>
        </div>
      </ha-card>
    `;
  }

  protected render() {
    if (!this._config || !this.hass) {
      return nothing;
    }

    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) {
      return this._renderError(
        `Entity not found: ${this._config.entity}`
      );
    }

    if (stateObj.state === "unavailable") {
      return this._renderError(localize(this.hass.language, "entity_unavailable"));
    }

    return html`
      <ha-card>
        ${this._renderLayout()}
      </ha-card>
    `;
  }

  private _renderLayout() {
    switch (this._config.layout) {
      case "compact":
        return html`
          <openpublictransport-compact-layout
            .hass=${this.hass}
            .config=${this._config}
            .departures=${this._getDepartures()}
            .stationName=${this._getStationName()}
          ></openpublictransport-compact-layout>
        `;

      case "trip":
        return html`
          <openpublictransport-trip-layout
            .hass=${this.hass}
            .config=${this._config}
            .trip=${this._getTripData()}
          ></openpublictransport-trip-layout>
        `;

      case "next": {
        // A trip entity has no departure board to read, so the next connection
        // stands in for the next departure (issue #9).
        const isTrip = detectModel(this.hass, this._config.entity) === "trip";
        const trip = isTrip ? this._getTripData() : null;
        const next = trip ? this._tripAsDeparture(trip) : null;
        return html`
          <openpublictransport-next-layout
            .hass=${this.hass}
            .config=${this._config}
            .departures=${isTrip ? (next ? [next] : []) : this._getDepartures()}
            .stationName=${this._getStationName()}
            .emptyKey=${isTrip ? "no_trip_data" : "no_departures"}
          ></openpublictransport-next-layout>
        `;
      }

      case "table":
      default:
        return html`
          <openpublictransport-table-layout
            .hass=${this.hass}
            .config=${this._config}
            .departures=${this._getDepartures()}
            .stationName=${this._getStationName()}
          ></openpublictransport-table-layout>
        `;
    }
  }
}

// Register the card with Home Assistant's custom card picker
interface CustomCardEntry {
  type: string;
  name: string;
  description: string;
  preview: boolean;
  getEntitySuggestion?: (
    hass: HomeAssistant,
    entityId: string
  ) => CustomCardSuggestion | CustomCardSuggestion[] | null;
}

interface CustomCardSuggestion {
  config: {
    type: string;
    entity: string;
    layout?: CardConfig["layout"];
    max_departures?: number;
  };
  label?: string;
}

function getEntitySuggestion(
  hass: HomeAssistant,
  entityId: string
): CustomCardSuggestion | CustomCardSuggestion[] | null {
  if (!isOptSensor(hass, entityId)) return null;

  const model = detectModel(hass, entityId);
  const suggestions: CustomCardSuggestion[] = [];

  if (model === "departures") {
    suggestions.push({
      label: "Table layout",
      config: {
        type: "custom:openpublictransport-card",
        entity: entityId,
        layout: "table",
      },
    });

    suggestions.push({
      label: "Compact layout",
      config: {
        type: "custom:openpublictransport-card",
        entity: entityId,
        layout: "compact",
        max_departures: 6,
      },
    });

    suggestions.push({
      label: "Next departure",
      config: {
        type: "custom:openpublictransport-card",
        entity: entityId,
        layout: "next",
      },
    });
  } else if (model === "trip") {
    suggestions.push({
      label: "Trip layout",
      config: {
        type: "custom:openpublictransport-card",
        entity: entityId,
        layout: "trip",
      },
    });
  } else {
    // Confirmed OPT sensor but shape not yet known (e.g. trip sensor with no
    // current connection) — offer a single sensible default.
    suggestions.push({
      label: "Table layout",
      config: {
        type: "custom:openpublictransport-card",
        entity: entityId,
        layout: layoutForModel(model),
      },
    });
  }

  return suggestions.length === 1 ? suggestions[0] : suggestions;
}

const windowWithCards = window as unknown as { customCards: CustomCardEntry[] };
windowWithCards.customCards = windowWithCards.customCards || [];
windowWithCards.customCards.push({
  type: "openpublictransport-card",
  name: "Public Transport Departures",
  description: "Display public transport departures in table, compact, or trip layout",
  preview: true,
  getEntitySuggestion,
});

declare global {
  interface HTMLElementTagNameMap {
    "openpublictransport-card": OpenpublictransportCard;
  }
}
