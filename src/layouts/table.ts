import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cardStyles } from "../styles";
import { Departure, CardConfig, HomeAssistant } from "../types";
import { localize } from "../localize";
import "../components/transport-icon";
import "../components/delay-badge";

@customElement("openpublictransport-table-layout")
export class TableLayout extends LitElement {
  static styles = cardStyles;

  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ attribute: false }) config!: CardConfig;
  @property({ attribute: false }) departures: Departure[] = [];
  @property({ type: String }) stationName = "";

  private _getCurrentTime(): string {
    return new Date().toLocaleTimeString(this.hass?.language || "de-DE", {
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
          if (!notices.includes(notice)) notices.push(notice);
        }
      }
    }
    return notices;
  }

  private _countdown(dep: Departure): string {
    const mins = dep.minutes_until_departure;
    if (mins <= 0) return localize(this.hass.language, "now");
    if (mins === 1) return localize(this.hass.language, "in_1_min");
    return localize(this.hass.language, "in_min", { min: mins });
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

  private _renderNotices(dep: Departure) {
    if (!dep.notices || dep.notices.length === 0) return nothing;
    return html`
      <ha-icon
        class="notice-icon"
        icon="mdi:alert-circle-outline"
        title=${dep.notices.join(", ")}
      ></ha-icon>
    `;
  }

  private _renderPlatformCell(dep: Departure) {
    // When the column is shown, always emit a cell so every row has the same
    // column count and the body stays aligned with the header.
    if (!this.config.show_platform) return nothing;
    if (!dep.platform) return html`<td class="platform-cell"></td>`;
    if (dep.platform_changed && dep.planned_platform) {
      return html`
        <td class="platform-cell">
          <span class="platform-changed">${dep.planned_platform}</span>
          <span class="platform-new">${dep.platform}</span>
        </td>
      `;
    }
    return html`<td class="platform-cell">${dep.platform}</td>`;
  }

  private _renderRow(dep: Departure) {
    const badgeStyle = dep.line_color
      ? `background:${dep.line_color};color:${dep.line_text_color || "#000"}`
      : "";
    return html`
      <tr>
        <td class="time-cell">
          <span class="time-planned">${dep.planned_time || ""}</span>
          ${this.config.show_delay
            ? html`
                <openpublictransport-delay-badge
                  .delay=${dep.delay}
                  ?is-realtime=${dep.is_realtime}
                ></openpublictransport-delay-badge>
              `
            : nothing}
          <span class="time-countdown">${this._countdown(dep)}</span>
        </td>
        <td>
          <span class="line-cell">
            <openpublictransport-transport-icon
              transport-type=${dep.transportation_type}
            ></openpublictransport-transport-icon>
            <span class="line-badge" style=${badgeStyle}>${dep.line}</span>
            ${this._renderNotices(dep)}
          </span>
        </td>
        <td class="destination-cell">${dep.destination}</td>
        ${this._renderPlatformCell(dep)}
      </tr>
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
              ${this.config.show_platform
                ? html`<th>${localize(this.hass.language, "track")}</th>`
                : nothing}
            </tr>
          </thead>
          <tbody>
            ${displayDepartures.map((dep) => this._renderRow(dep))}
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
