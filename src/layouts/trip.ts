import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cardStyles } from "../styles";
import { TripData, TripLeg, CardConfig, HomeAssistant } from "../types";
import "../components/transport-icon";
import "../components/delay-badge";

@customElement("openpublictransport-trip-layout")
export class TripLayout extends LitElement {
  static styles = cardStyles;

  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ attribute: false }) config!: CardConfig;
  @property({ attribute: false }) trip: TripData | null = null;

  private _formatTime(timeStr: string): string {
    try {
      const date = new Date(timeStr);
      return date.toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return timeStr;
    }
  }

  private _getRiskClass(risk: string): string {
    switch (risk.toLowerCase()) {
      case "low":
        return "risk-low";
      case "medium":
        return "risk-medium";
      case "high":
        return "risk-high";
      default:
        return "";
    }
  }

  private _getRiskIcon(risk: string): string {
    switch (risk.toLowerCase()) {
      case "low":
        return "mdi:check-circle";
      case "medium":
        return "mdi:alert";
      case "high":
        return "mdi:alert-octagon";
      default:
        return "mdi:help-circle";
    }
  }

  private _renderHeader(trip: TripData) {
    if (!this.config.show_header) return nothing;

    return html`
      <div class="trip-header">
        <span>${trip.departure}</span>
        <span class="trip-arrow">&rarr;</span>
        <span>${trip.arrival}</span>
        <span class="trip-duration">${trip.duration_minutes} min</span>
      </div>
    `;
  }

  private _renderMeta(trip: TripData) {
    return html`
      <div class="trip-meta">
        <div class="trip-meta-item">
          <ha-icon icon="mdi:swap-horizontal"></ha-icon>
          <span>${trip.transfers} transfer${trip.transfers !== 1 ? "s" : ""}</span>
        </div>
        <div class="trip-meta-item ${this._getRiskClass(trip.transfer_risk)}">
          <ha-icon icon=${this._getRiskIcon(trip.transfer_risk)}></ha-icon>
          <span>${trip.transfer_risk} risk</span>
        </div>
        ${trip.min_transfer_time > 0
          ? html`
              <div class="trip-meta-item">
                <ha-icon icon="mdi:timer-outline"></ha-icon>
                <span>min ${trip.min_transfer_time} min</span>
              </div>
            `
          : nothing}
        ${!trip.connection_feasible
          ? html`
              <div class="trip-meta-item risk-high">
                <ha-icon icon="mdi:close-circle"></ha-icon>
                <span>Connection at risk</span>
              </div>
            `
          : nothing}
      </div>
    `;
  }

  private _renderLeg(leg: TripLeg) {
    const legClass = leg.transfer ? "trip-leg transfer" : "trip-leg";

    return html`
      <div class=${legClass}>
        <div class="leg-station">${leg.origin}</div>
        <div class="leg-details">
          <span class="leg-time">${this._formatTime(leg.departure_planned)}</span>
          ${leg.delay > 0
            ? html`
                <openpublictransport-delay-badge
                  .delay=${leg.delay}
                  is-realtime
                ></openpublictransport-delay-badge>
              `
            : nothing}
          <openpublictransport-transport-icon
            transport-type=${leg.product}
          ></openpublictransport-transport-icon>
          <span>${leg.line}</span>
          ${leg.platform
            ? html`<span>&middot; Gl. ${leg.platform}</span>`
            : nothing}
          <span>&middot; ${leg.duration_minutes} min</span>
        </div>
        ${leg.transfer
          ? html`<div class="leg-transfer-info">Transfer</div>`
          : nothing}
      </div>
    `;
  }

  private _renderTimeline(trip: TripData) {
    const lastLeg = trip.legs[trip.legs.length - 1];

    return html`
      <div class="trip-timeline">
        ${trip.legs.map((leg) => this._renderLeg(leg))}
        ${lastLeg
          ? html`
              <div class="trip-leg" style="border-left-color: transparent; padding-bottom: 0;">
                <div class="leg-station">${lastLeg.destination}</div>
                <div class="leg-details">
                  <span class="leg-time">${this._formatTime(lastLeg.arrival_planned)}</span>
                </div>
              </div>
            `
          : nothing}
      </div>
    `;
  }

  private _renderAlternatives(trip: TripData) {
    if (!trip.next_journeys || trip.next_journeys.length === 0) return nothing;

    return html`
      <div class="alt-journeys">
        <div class="alt-journeys-title">Alternative Connections</div>
        ${trip.next_journeys.map(
          (alt) => html`
            <div class="alt-journey">
              <span class="leg-time">${this._formatTime(alt.departure)}</span>
              <span class="trip-arrow">&rarr;</span>
              <span class="leg-time">${this._formatTime(alt.arrival)}</span>
              <span>${alt.duration_minutes} min</span>
              <span>${alt.transfers} transfer${alt.transfers !== 1 ? "s" : ""}</span>
              <span class=${this._getRiskClass(alt.transfer_risk)}>
                <ha-icon icon=${this._getRiskIcon(alt.transfer_risk)} style="--mdc-icon-size:14px;"></ha-icon>
              </span>
            </div>
          `
        )}
      </div>
    `;
  }

  protected render() {
    if (!this.trip) {
      return html`<div class="card-empty">No trip data available</div>`;
    }

    return html`
      <div class="trip-container">
        ${this._renderHeader(this.trip)}
        ${this._renderMeta(this.trip)}
        ${this._renderTimeline(this.trip)}
        ${this._renderAlternatives(this.trip)}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "openpublictransport-trip-layout": TripLayout;
  }
}
