import { LitElement, html, nothing } from "lit";
import { customElement, property, state, query } from "lit/decorators.js";
import { cardStyles } from "../styles";
import { Departure, CardConfig, HomeAssistant } from "../types";
import { localize } from "../localize";
import { formatCountdown } from "../format";
import "../components/transport-icon";
import "../components/delay-badge";
import "../components/info-dialog";
import type { InfoDialog } from "../components/info-dialog";

@customElement("openpublictransport-table-layout")
export class TableLayout extends LitElement {
  static styles = cardStyles;

  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ attribute: false }) config!: CardConfig;
  @property({ attribute: false }) departures: Departure[] = [];
  @property({ type: String }) stationName = "";

  /** What the info dialog shows; set just before it opens. */
  @state() private _dialog: { heading: string; disruptions: string[]; notices: string[] } = {
    heading: "",
    disruptions: [],
    notices: [],
  };
  @query("openpublictransport-info-dialog") private _dialogEl!: InfoDialog;

  private _openDialog(heading: string, disruptions: string[], notices: string[]): void {
    this._dialog = { heading, disruptions, notices };
    this._dialogEl?.open();
  }

  private _getCurrentTime(): string {
    return new Date().toLocaleTimeString(this.hass?.language || "de-DE", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  /**
   * A departure's actual disruptions. Notices also carry routine information
   * ("behindertengerechtes Fahrzeug", "Bordrestaurant"), which does not belong
   * in a red warning; an integration older than 2026.10.5 does not tell them
   * apart, so there every notice still counts.
   */
  private _disruptions(dep: Departure): string[] {
    return dep.disruptions ?? dep.notices ?? [];
  }

  private _collectDisruptions(): string[] {
    const disruptions: string[] = [];
    for (const dep of this.departures) {
      for (const disruption of this._disruptions(dep)) {
        if (!disruptions.includes(disruption)) disruptions.push(disruption);
      }
    }
    return disruptions;
  }

  /**
   * The time the departure will actually happen: the provider's estimate when
   * it has one, the timetable otherwise. The countdown beside it already runs
   * to the estimate, so a row that showed the timetable said 14:40 over "in 4
   * min" at 14:38; the delay badge now explains the difference instead.
   *
   * Its element keeps the old class, time-planned, beside time-departure: the
   * README offered that class as a card-mod hook for the time's size, and a
   * rule written against it has to keep matching.
   */
  private _departureTime(dep: Departure): string {
    return dep.departure_time || dep.planned_time || "";
  }

  private _countdown(dep: Departure): string {
    return formatCountdown(this.hass.language, dep.minutes_until_departure);
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

  /**
   * The first disruption, and how many more there are. The whole banner is a
   * button that lists them all, so "(+2 more)" is something to open rather
   * than only a count (issue #19).
   */
  private _renderDisruptionBanner() {
    if (!this.config.show_disruption_banner) return nothing;
    const disruptions = this._collectDisruptions();
    if (disruptions.length === 0) return nothing;
    const lang = this.hass.language;
    const more = disruptions.length - 1;
    return html`
      <button
        class="disruption-banner"
        aria-haspopup="dialog"
        aria-label=${localize(lang, "show_all_disruptions")}
        @click=${() => this._openDialog(localize(lang, "disruptions"), disruptions, [])}
      >
        <ha-icon icon="mdi:alert"></ha-icon>
        <span class="disruption-text">${disruptions[0]}</span>
        ${more > 0
          ? html`<span class="disruption-more">${localize(lang, "more_count", { n: more })}</span>`
          : nothing}
      </button>
    `;
  }

  /**
   * The icon beside a destination with notices. It is a button: a tap opens
   * the departure's notices, disruptions first, which a hover tooltip never
   * did on a phone (issue #19). The tooltip stays for the mouse. Only a
   * disruption gets the warning mark.
   */
  private _renderNotices(dep: Departure) {
    if (!this.config.show_notices) return nothing;
    if (!dep.notices || dep.notices.length === 0) return nothing;
    const lang = this.hass.language;
    const disruptions = this._disruptions(dep);
    const routine = dep.notices.filter((n) => !disruptions.includes(n));
    const disrupted = disruptions.length > 0;
    const heading = localize(lang, "notices_for", { line: dep.line, destination: dep.destination });
    return html`
      <button
        class="notice-button"
        aria-haspopup="dialog"
        aria-label=${heading}
        title=${dep.notices.join(", ")}
        @click=${() => this._openDialog(heading, disruptions, routine)}
      >
        <ha-icon
          class="notice-icon ${disrupted ? "" : "notice-info"}"
          icon=${disrupted ? "mdi:alert-circle-outline" : "mdi:information-outline"}
        ></ha-icon>
      </button>
    `;
  }

  private _renderDialog() {
    return html`
      <openpublictransport-info-dialog
        .language=${this.hass.language}
        .heading=${this._dialog.heading}
        .disruptions=${this._dialog.disruptions}
        .notices=${this._dialog.notices}
      ></openpublictransport-info-dialog>
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
          <span class="time-line">
            <span class="time-departure time-planned">${this._departureTime(dep)}</span>
            ${this.config.show_delay
              ? html`
                  <openpublictransport-delay-badge
                    .delay=${dep.delay}
                    ?is-realtime=${dep.is_realtime}
                    .language=${this.hass.language}
                  ></openpublictransport-delay-badge>
                `
              : nothing}
          </span>
          <span class="time-countdown">${this._countdown(dep)}</span>
        </td>
        <td>
          <span class="line-cell">
            <openpublictransport-transport-icon
              transport-type=${dep.transportation_type}
            ></openpublictransport-transport-icon>
            <span class="line-badge" style=${badgeStyle}>${dep.line}</span>
          </span>
        </td>
        <td class="destination-cell">
          <span class="destination">
            <span class="destination-name">${dep.destination}</span>
            ${this._renderNotices(dep)}
          </span>
        </td>
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
                ? html`<th>
                    <span class="label-long">${localize(this.hass.language, "track")}</span>
                    <span class="label-short">${localize(this.hass.language, "platform")}</span>
                  </th>`
                : nothing}
            </tr>
          </thead>
          <tbody>
            ${displayDepartures.map((dep) => this._renderRow(dep))}
          </tbody>
        </table>
      </div>
      ${this._renderDialog()}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "openpublictransport-table-layout": TableLayout;
  }
}
