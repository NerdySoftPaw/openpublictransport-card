import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cardStyles } from "../styles";
import { Departure } from "../types";
import { localize } from "../localize";
import "./delay-badge";
import "./transport-icon";

@customElement("openpublictransport-departure-row")
export class DepartureRow extends LitElement {
  static styles = cardStyles;

  @property({ attribute: false }) departure!: Departure;
  @property({ type: String }) lang = "en";
  @property({ type: Boolean, attribute: "show-platform" }) showPlatform = true;
  @property({ type: Boolean, attribute: "show-delay" }) showDelay = true;
  @property({ type: Boolean, attribute: "show-realtime" }) showRealtime = true;

  private _formatTime(timeStr: string): string {
    // Time is already in HH:MM format from the integration
    return timeStr || "";
  }

  private _renderCountdown(): string {
    const mins = this.departure.minutes_until_departure;
    if (mins <= 0) return localize(this.lang, "now");
    if (mins === 1) return localize(this.lang, "in_1_min");
    return localize(this.lang, "in_min", { min: mins });
  }

  private _renderPlatform() {
    if (!this.showPlatform || !this.departure.platform) return nothing;

    if (this.departure.platform_changed && this.departure.planned_platform) {
      return html`
        <td class="platform-cell">
          <span class="platform-changed">${this.departure.planned_platform}</span>
          <span class="platform-new">${this.departure.platform}</span>
        </td>
      `;
    }

    return html`<td class="platform-cell">${this.departure.platform}</td>`;
  }

  private _renderNotices() {
    if (!this.departure.notices || this.departure.notices.length === 0) {
      return nothing;
    }
    return html`
      <ha-icon
        class="notice-icon"
        icon="mdi:alert-circle-outline"
        title=${this.departure.notices.join(", ")}
      ></ha-icon>
    `;
  }

  protected render() {
    const dep = this.departure;
    if (!dep) return nothing;

    return html`
      <tr>
        <td class="time-cell">
          <span class="time-planned">${this._formatTime(dep.planned_time)}</span>
          ${this.showDelay
            ? html`
                <openpublictransport-delay-badge
                  .delay=${dep.delay}
                  ?is-realtime=${dep.is_realtime}
                ></openpublictransport-delay-badge>
              `
            : nothing}
          <span class="time-countdown">${this._renderCountdown()}</span>
        </td>
        <td>
          <span class="line-cell">
            <openpublictransport-transport-icon
              transport-type=${dep.transportation_type}
            ></openpublictransport-transport-icon>
            <span class="line-badge">${dep.line}</span>
            ${this._renderNotices()}
          </span>
        </td>
        <td class="destination-cell">${dep.destination}</td>
        ${this._renderPlatform()}
      </tr>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "openpublictransport-departure-row": DepartureRow;
  }
}
