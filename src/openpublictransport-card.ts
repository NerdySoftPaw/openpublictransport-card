import { LitElement, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { cardStyles } from "./styles";
import { CardConfig, Departure, TripData, HomeAssistant } from "./types";
import { CARD_VERSION, DEFAULT_CONFIG } from "./const";

import "./layouts/table";
import "./layouts/compact";
import "./layouts/trip";
import "./editor";

console.info(
  `%c OPENPUBLICTRANSPORT-CARD %c v${CARD_VERSION} `,
  "color: #ffd700; background: #1a1a1a; font-weight: bold; padding: 2px 4px;",
  "color: #1a1a1a; background: #ffd700; font-weight: bold; padding: 2px 4px;"
);

@customElement("openpublictransport-card")
export class OpenpublictransportCard extends LitElement {
  static styles = cardStyles;

  @property({ attribute: false }) hass!: HomeAssistant;
  @state() private _config!: CardConfig;
  @state() private _timeInterval?: ReturnType<typeof setInterval>;

  public static getConfigElement(): HTMLElement {
    return document.createElement("openpublictransport-card-editor");
  }

  public static getStubConfig(): Partial<CardConfig> {
    return {
      entity: "",
      ...DEFAULT_CONFIG,
    };
  }

  public setConfig(config: Partial<CardConfig>): void {
    if (!config.entity) {
      throw new Error("Please define an entity");
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
      case "table":
      default:
        return Math.min(2 + (this._config.max_departures || 10), 12);
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    // Update every 30 seconds for the clock and countdown
    this._timeInterval = setInterval(() => {
      this.requestUpdate();
    }, 30000);
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

    return departures as Departure[];
  }

  private _getTripData(): TripData | null {
    if (!this.hass || !this._config) return null;

    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return null;

    const trip = stateObj.attributes["trip"];
    if (!trip) return null;

    return trip as TripData;
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
      return this._renderError("Entity is unavailable");
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
}

const windowWithCards = window as unknown as { customCards: CustomCardEntry[] };
windowWithCards.customCards = windowWithCards.customCards || [];
windowWithCards.customCards.push({
  type: "openpublictransport-card",
  name: "Public Transport Departures",
  description: "Display public transport departures in table, compact, or trip layout",
  preview: true,
});

declare global {
  interface HTMLElementTagNameMap {
    "openpublictransport-card": OpenpublictransportCard;
  }
}
