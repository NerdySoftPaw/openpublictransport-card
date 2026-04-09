import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cardStyles } from "../styles";
import { Departure, CardConfig, HomeAssistant } from "../types";
import { localize } from "../localize";
import "../components/departure-row";

@customElement("openpublictransport-table-layout")
export class TableLayout extends LitElement {
  static styles = cardStyles;

  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ attribute: false }) config!: CardConfig;
  @property({ attribute: false }) departures: Departure[] = [];
  @property({ type: String }) stationName = "";

  private _getCurrentTime(): string {
    return new Date().toLocaleTimeString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  private _collectNotices(): string[] {
    const notices: string[] = [];
    for (const dep of this.departures) {
      if (dep.notices) {
        for (const notice of dep.notices) {
          if (!notices.includes(notice)) {
            notices.push(notice);
          }
        }
      }
    }
    return notices;
  }

  private _renderHeader() {
    if (!this.config.show_header) return nothing;

    return html`
      <div class="card-header">
        <span class="station-name">${this.stationName || "Departures"}</span>
        <span class="current-time">${this._getCurrentTime()}</span>
      </div>
    `;
  }

  private _renderDisruptionBanner() {
    const notices = this._collectNotices();
    if (notices.length === 0) return nothing;

    return html`
      <div class="disruption-banner">
        <ha-icon icon="mdi:alert"></ha-icon>
        <span>${notices[0]}${notices.length > 1 ? ` (+${notices.length - 1} more)` : ""}</span>
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
      ${this._renderDisruptionBanner()}
      <div class="card-content">
        <table class="departure-table">
          <thead>
            <tr>
              <th>${localize(this.hass.language, "time")}</th>
              <th>${localize(this.hass.language, "line")}</th>
              <th>${localize(this.hass.language, "destination")}</th>
              ${this.config.show_platform ? html`<th>${localize(this.hass.language, "track")}</th>` : nothing}
            </tr>
          </thead>
          <tbody>
            ${displayDepartures.map(
              (dep) => html`
                <openpublictransport-departure-row
                  .departure=${dep}
                  .lang=${this.hass.language}
                  ?show-platform=${this.config.show_platform}
                  ?show-delay=${this.config.show_delay}
                  ?show-realtime=${this.config.show_realtime_indicator}
                ></openpublictransport-departure-row>
              `
            )}
          </tbody>
        </table>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "openpublictransport-table-layout": TableLayout;
  }
}
