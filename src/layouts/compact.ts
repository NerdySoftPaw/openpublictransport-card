import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cardStyles } from "../styles";
import { Departure, CardConfig, HomeAssistant } from "../types";
import { localize } from "../localize";
import "../components/transport-icon";

@customElement("openpublictransport-compact-layout")
export class CompactLayout extends LitElement {
  static styles = cardStyles;

  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ attribute: false }) config!: CardConfig;
  @property({ attribute: false }) departures: Departure[] = [];
  @property({ type: String }) stationName = "";

  private _shortenDestination(dest: string): string {
    if (dest.length <= 15) return dest;
    // Try to shorten by taking first meaningful part
    const parts = dest.split(/[,\s-]+/);
    if (parts.length > 1) {
      return parts[0];
    }
    return dest.substring(0, 13) + "...";
  }

  private _renderCountdown(mins: number): string {
    if (mins <= 0) return localize(this.hass.language, "now");
    return `${mins}'`;
  }

  private _getChipClass(dep: Departure): string {
    if (dep.delay > 0) return "compact-chip delayed";
    if (dep.is_realtime && dep.delay === 0) return "compact-chip on-time";
    return "compact-chip";
  }

  private _renderHeader() {
    if (!this.config.show_header) return nothing;

    return html`
      <div class="card-header">
        <span class="station-name">${this.stationName || "Departures"}</span>
      </div>
    `;
  }

  protected render() {
    const displayDepartures = this.departures.slice(0, this.config.max_departures);

    if (displayDepartures.length === 0) {
      return html`
        ${this._renderHeader()}
        <div class="card-empty">${localize(this.hass.language, "no_departures")}</div>
      `;
    }

    return html`
      ${this._renderHeader()}
      <div class="compact-container">
        ${displayDepartures.map(
          (dep) => html`
            <div class=${this._getChipClass(dep)}>
              <openpublictransport-transport-icon
                transport-type=${dep.transportation_type}
              ></openpublictransport-transport-icon>
              <span class="chip-line">${dep.line}</span>
              <span class="chip-destination">${this._shortenDestination(dep.destination)}</span>
              <span class="chip-countdown">${this._renderCountdown(dep.minutes_until_departure)}</span>
            </div>
          `
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "openpublictransport-compact-layout": CompactLayout;
  }
}
