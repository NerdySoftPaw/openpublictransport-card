import { LitElement, html, nothing, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cardStyles } from "../styles";
import { Departure, CardConfig, HomeAssistant } from "../types";
import { localize } from "../localize";
import "../components/transport-icon";
import "../components/delay-badge";

@customElement("openpublictransport-next-layout")
export class NextLayout extends LitElement {
  static styles = [
    cardStyles,
    css`
      .next-container {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .next-station {
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--opt-text-secondary);
        opacity: 0.8;
      }

      .next-main {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .next-icon {
        --opt-icon-size: 36px;
        flex-shrink: 0;
        opacity: 0.85;
      }

      .next-line-badge {
        font-size: 1rem;
        font-weight: bold;
        background: var(--opt-accent, #ffd700);
        color: #000;
        padding: 3px 8px;
        border-radius: 4px;
        flex-shrink: 0;
        white-space: nowrap;
      }

      .next-destination {
        font-size: 1.1rem;
        font-weight: 600;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .next-bottom {
        display: flex;
        align-items: baseline;
        gap: 10px;
        margin-top: 4px;
      }

      .next-time {
        font-size: 0.85rem;
        color: var(--opt-text-secondary);
        font-variant-numeric: tabular-nums;
      }

      .next-countdown {
        font-size: 1.8rem;
        font-weight: bold;
        font-variant-numeric: tabular-nums;
        line-height: 1;
      }

      .next-countdown.imminent {
        color: var(--opt-delay-red, #e53935);
      }

      .next-platform {
        font-size: 0.75rem;
        color: var(--opt-text-secondary);
        margin-left: auto;
        white-space: nowrap;
      }

      .next-empty {
        padding: 24px 16px;
        text-align: center;
        color: var(--opt-text-secondary);
        font-size: 0.85rem;
      }
    `,
  ];

  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ attribute: false }) config!: CardConfig;
  @property({ attribute: false }) departures: Departure[] = [];
  @property({ type: String }) stationName = "";

  private _renderCountdown(mins: number): string {
    const lang = this.hass?.language || "en";
    if (mins <= 0) return localize(lang, "now");
    if (mins === 1) return localize(lang, "in_1_min");
    return localize(lang, "in_min", { min: mins });
  }

  protected render() {
    const lang = this.hass?.language || "en";
    const dep: Departure | undefined = this.departures[0];

    if (!dep) {
      return html`<div class="next-empty">${localize(lang, "no_departures")}</div>`;
    }

    const badgeStyle = dep.line_color
      ? `background:${dep.line_color};color:${dep.line_text_color || "#000"}`
      : "";

    const mins = dep.minutes_until_departure;
    const countdownClass = mins <= 2 ? "next-countdown imminent" : "next-countdown";

    return html`
      <div class="next-container">
        ${this.config.show_header && this.stationName
          ? html`<div class="next-station">${this.stationName}</div>`
          : nothing}

        <div class="next-main">
          <openpublictransport-transport-icon
            class="next-icon"
            transport-type=${dep.transportation_type}
          ></openpublictransport-transport-icon>
          <span class="next-line-badge" style=${badgeStyle}>${dep.line}</span>
          <span class="next-destination">${dep.destination}</span>
        </div>

        <div class="next-bottom">
          <span class=${countdownClass}>${this._renderCountdown(mins)}</span>
          <span class="next-time">${dep.planned_time}</span>
          ${this.config.show_delay
            ? html`<openpublictransport-delay-badge
                .delay=${dep.delay}
                ?is-realtime=${dep.is_realtime}
              ></openpublictransport-delay-badge>`
            : nothing}
          ${this.config.show_platform && dep.platform
            ? html`<span class="next-platform">Gl. ${dep.platform}</span>`
            : nothing}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "openpublictransport-next-layout": NextLayout;
  }
}
