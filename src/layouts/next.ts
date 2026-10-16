import { LitElement, html, nothing, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cardStyles } from "../styles";
import { Departure, CardConfig, HomeAssistant } from "../types";
import { localize } from "../localize";
import "../components/transport-icon";
import "../components/delay-badge";

@customElement("openpublictransport-next-layout")
export class NextLayout extends LitElement {
  /**
   * Sizes are steps of Home Assistant's type scale rather than rem. In a
   * dashboard rem is the page's 14px root, so 0.7rem, 1.1rem, 1.8rem and the
   * rest drew 9.8px, 15.4px, 25.2px — sizes between Home Assistant's steps, on
   * a scale of their own beside every other card. Each is now the nearest step,
   * or the card's label size for the two labels.
   */
  static styles = [
    cardStyles,
    css`
      .next-container {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      /* The station: one line, like the station name in the other layouts'
         header. Secondary text rather than a faded copy of it — at 80%
         opacity it measured 3.7:1 on the light board. */
      .next-station {
        font-size: var(--opt-font-size-label);
        text-transform: var(--opt-caps);
        letter-spacing: calc(var(--opt-tracking) * 0.08em);
        color: var(--opt-text-secondary);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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

      /* Text on the badge is the palette's text-on-accent; it was black on
         every theme, whatever the badge's colour. */
      .next-line-badge {
        font-size: var(--ha-font-size-m, 14px);
        font-weight: 700;
        background: var(--opt-accent);
        color: var(--opt-on-accent);
        padding: 3px 8px;
        border-radius: 4px;
        flex-shrink: 0;
        white-space: nowrap;
      }

      .next-destination {
        font-size: var(--ha-font-size-l, 16px);
        font-weight: var(--opt-font-weight-medium);
        flex: 1;
        min-width: 0;
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
        font-size: var(--ha-font-size-s, 12px);
        color: var(--opt-text-secondary);
        font-variant-numeric: tabular-nums;
      }

      .next-countdown {
        font-size: var(--ha-font-size-2xl, 24px);
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        line-height: 1;
      }

      .next-countdown.imminent {
        color: var(--opt-delay-red);
      }

      .next-platform {
        font-size: var(--opt-font-size-label);
        color: var(--opt-text-secondary);
        margin-left: auto;
        white-space: nowrap;
      }

      .next-empty {
        padding: 24px 16px;
        text-align: center;
        color: var(--opt-text-secondary);
        font-size: var(--ha-font-size-s, 12px);
      }
    `,
  ];

  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ attribute: false }) config!: CardConfig;
  @property({ attribute: false }) departures: Departure[] = [];
  @property({ type: String }) stationName = "";
  // A trip sensor with no connection is not "no departures".
  @property({ type: String }) emptyKey = "no_departures";

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
      return html`<div class="next-empty">${localize(lang, this.emptyKey)}</div>`;
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
          <span class="time-line">
            <span class="next-time">${dep.departure_time || dep.planned_time}</span>
            ${this.config.show_delay
              ? html`<openpublictransport-delay-badge
                  .delay=${dep.delay}
                  ?is-realtime=${dep.is_realtime}
                  .language=${lang}
                ></openpublictransport-delay-badge>`
              : nothing}
          </span>
          ${this.config.show_platform && dep.platform
            ? html`<span class="next-platform">${localize(lang, "platform")} ${dep.platform}</span>`
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
