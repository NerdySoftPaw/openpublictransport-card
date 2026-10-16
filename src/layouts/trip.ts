import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cardStyles } from "../styles";
import { TripData, TripLeg, CardConfig, HomeAssistant } from "../types";
import { localize } from "../localize";
import "../components/transport-icon";
import "../components/delay-badge";

/**
 * The arrow that joins two values. Drawn rather than typed: U+2192 is not in
 * Home Assistant's body font, so every platform renders it from a different
 * fallback font and places it wherever that font happens to put it. On Linux it
 * lands near the baseline as a hairline, well under the figures it sits
 * between, and no bold face exists for it, so it stays thin in the header. An
 * inline SVG is the same mark everywhere, takes the colour of the text around
 * it and can carry that text's weight.
 */
const ARROW = html`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M3.5 12h15M13.5 6.5 19 12l-5.5 5.5" />
</svg>`;

@customElement("openpublictransport-trip-layout")
export class TripLayout extends LitElement {
  static styles = cardStyles;

  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ attribute: false }) config!: CardConfig;
  @property({ attribute: false }) trip: TripData | null = null;

  private _formatTime(timeStr: string): string {
    return timeStr || "";
  }

  /**
   * The time a leg will actually happen: the provider's estimate when it has
   * one, the timetable otherwise. The journey's own header already reports the
   * estimate, so legs that reported the timetable disagreed with it by exactly
   * the delay — the card showed 09:42 under a header that said 09:46.
   */
  private _realTime(estimated?: string, planned?: string): string {
    return this._formatTime(estimated || planned || "");
  }

  /**
   * A duration in the viewer's own language: 83 minutes reads as "1h 23m" in
   * English and "1h, 23 Min." in German, instead of a bare minute count that
   * the reader has to divide by 60.
   *
   * `Intl.DurationFormat` carries the locale data for this (Chrome 129+,
   * Safari 18.4+). Where it is missing — an older kiosk browser, say — the
   * plain form is used, which is what the card showed before.
   */
  private _formatDuration(minutes: number): string {
    const total = Math.max(0, Math.round(minutes || 0));
    const hours = Math.floor(total / 60);
    const mins = total % 60;
    const durationFormat = (Intl as unknown as { DurationFormat?: new (...args: unknown[]) => { format: (d: unknown) => string } })
      .DurationFormat;

    if (durationFormat) {
      try {
        return new durationFormat(this.hass.language, { style: "narrow" }).format(
          hours ? { hours, minutes: mins } : { minutes: mins }
        );
      } catch {
        /* fall through to the plain form below */
      }
    }

    return hours ? `${hours} h ${mins} min` : `${mins} min`;
  }

  /**
   * How long a journey takes, as the two times beside the total say: arrival
   * minus departure. The integration's `duration_minutes` is not that span.
   * For EFA it adds up the legs' own durations, so the waits at the changes
   * drop out — a journey from 13:27 to 14:17 read 35 minutes instead of 50 —
   * and for OTP it is the itinerary's, which counts the walk to the first stop
   * that the departure shown leaves out.
   *
   * Both timestamps are cut to the minute first, as the HH:MM shown is, so a
   * journey leaving at 13:36:30 and arriving at 14:33 reads 57, not 56. They
   * are full timestamps, so a journey past midnight needs no special case. The
   * integration's figure is used only when a timestamp is missing or cannot be
   * read.
   */
  private _journeyMinutes(journey: TripData): number {
    const departure = Date.parse(journey.departure_timestamp || "");
    const arrival = Date.parse(journey.arrival_timestamp || "");
    if (Number.isNaN(departure) || Number.isNaN(arrival)) return journey.duration_minutes;
    return Math.floor(arrival / 60000) - Math.floor(departure / 60000);
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

  /**
   * Localized label for a transfer-risk level. Falls back to the old
   * value-plus-noun form when a translation has no label for the level, so an
   * unknown level still says something.
   */
  private _riskLabel(risk: string, lang: string): string {
    const key = `risk_${risk.toLowerCase()}`;
    const label = localize(lang, key);
    return label === key ? `${risk} ${localize(lang, "risk")}` : label;
  }

  private _getRiskIcon(risk: string): string {
    switch (risk.toLowerCase()) {
      case "low":
        return "mdi:check-circle-outline";
      case "medium":
        return "mdi:alert-outline";
      case "high":
        return "mdi:alert-octagon";
      default:
        return "mdi:help-circle-outline";
    }
  }

  private _renderHeader(trip: TripData) {
    if (!this.config.show_header) return nothing;

    return html`
      <div class="trip-header">
        <span class="time-span">
          <span>${trip.departure}</span>
          <span class="trip-arrow">${ARROW}</span>
          <span>${trip.arrival}</span>
        </span>
        <span class="trip-duration">${this._formatDuration(this._journeyMinutes(trip))}</span>
      </div>
    `;
  }

  private _renderMeta(trip: TripData) {
    const lang = this.hass.language;
    const transfers = `${trip.transfers} ${
      trip.transfers !== 1 ? localize(lang, "transfers") : localize(lang, "transfer")
    }`;
    const risk = this._riskLabel(trip.transfer_risk, lang);
    const minTransferValue = this._formatDuration(trip.min_transfer_time);
    const minTransfer = `${localize(lang, "min_transfer")} ${minTransferValue}`;

    /* A fact gets words where its value cannot speak for itself: a bare count
       and a risk state mean nothing without them, and a tooltip is no help on a
       wall display, where nobody hovers. The wait is the exception — a duration
       beside a timer, on a line that has already said "transfer" once. */
    return html`
      <div class="trip-meta">
        <div class="trip-meta-item" title=${transfers}>
          <ha-icon icon="mdi:transit-transfer"></ha-icon>
          <span>${transfers}</span>
        </div>
        <div class="trip-meta-item ${this._getRiskClass(trip.transfer_risk)}" title=${risk}>
          <ha-icon icon=${this._getRiskIcon(trip.transfer_risk)}></ha-icon>
          <span>${risk}</span>
        </div>
        ${trip.min_transfer_time > 0
          ? html`
              <div class="trip-meta-item" title=${minTransfer}>
                <ha-icon icon="mdi:timer-outline"></ha-icon>
                <span>${minTransferValue}</span>
              </div>
            `
          : nothing}
        ${!trip.connection_feasible
          ? html`
              <div class="trip-meta-item risk-high">
                <ha-icon icon="mdi:close-circle"></ha-icon>
                <span>${localize(lang, "connection_at_risk")}</span>
              </div>
            `
          : nothing}
      </div>
    `;
  }

  private _renderLeg(leg: TripLeg, next?: TripLeg, prev?: TripLeg) {
    /* The dot marks where this leg *starts*, so it is a change of vehicle when
       the leg before it ended in one. `transfer` and `transfer_minutes`
       describe the change out of the leg that carries them, which is the change
       into this one — reading them off this leg put the marker one station
       early, on the platform the traveller had just left rather than the one
       they change at. An access walk carries neither, so a journey that begins
       on foot does not mark its first stop. */
    const isChange =
      !!prev && (!!prev.transfer || typeof prev.transfer_minutes === "number");
    const legClass = isChange ? "trip-leg transfer" : "trip-leg";
    /* When this leg gets in, shown only where it tells the reader something:
       if the next leg leaves the moment this one arrives the number below
       already says it, and the last leg's arrival is the destination's own
       time on the row beneath. What is left is the arrivals that open a wait. */
    const arrival = this._realTime(leg.arrival_estimated, leg.arrival_planned);
    const showArrival =
      !!next && !!arrival && arrival !== this._realTime(next.departure_estimated, next.departure_planned);

    return html`
      <div class=${legClass}>
        <div class="leg-head">
          <div class="leg-station">${leg.origin}</div>
          <div class="leg-head-time">
            ${leg.delay > 0
              ? html`
                  <openpublictransport-delay-badge
                    .delay=${leg.delay}
                    is-realtime
                  ></openpublictransport-delay-badge>
                `
              : nothing}
            <div class="leg-time leg-departure">
              ${this._realTime(leg.departure_estimated, leg.departure_planned)}
            </div>
          </div>
        </div>
        <div class="leg-details">
          <openpublictransport-transport-icon
            transport-type=${leg.transport_type || leg.product}
          ></openpublictransport-transport-icon>
          ${leg.line || leg.direction
            ? html`
                <span class="leg-service">
                  ${leg.line ? html`<span class="leg-line">${leg.line}</span>` : nothing}
                  ${leg.direction
                    ? html`
                        <span class="trip-arrow">${ARROW}</span>
                        <span class="leg-direction">${leg.direction}</span>
                      `
                    : nothing}
                </span>
              `
            : nothing}
          ${leg.platform
            ? html`<span>${localize(this.hass.language, "platform")} ${leg.platform}</span>`
            : nothing}
          <span class="leg-duration">${this._formatDuration(leg.duration_minutes)}</span>
          ${showArrival ? html`<span class="leg-arrival">${arrival}</span>` : nothing}
        </div>
        ${this._renderTransferNote(leg)}
      </div>
    `;
  }

  /**
   * The change out of this leg, with the wait it costs. Standing on the
   * platform, how long the connection is matters more than that there is one,
   * and the journey's own minimum does not say at which change it falls.
   */
  private _renderTransferNote(leg: TripLeg) {
    const hasWait = typeof leg.transfer_minutes === "number";
    if (!leg.transfer && !hasWait) return nothing;

    const label = localize(this.hass.language, "transfer");
    return html`
      <div class="leg-transfer-info">
        <ha-icon icon="mdi:timer-outline"></ha-icon>
        <span>${hasWait ? `${label} · ${this._formatDuration(leg.transfer_minutes as number)}` : label}</span>
      </div>
    `;
  }

  private _renderTimeline(trip: TripData) {
    const lastLeg = trip.legs[trip.legs.length - 1];

    return html`
      <div class="trip-timeline">
        ${trip.legs.map((leg, i) => this._renderLeg(leg, trip.legs[i + 1], trip.legs[i - 1]))}
        ${lastLeg
          ? html`
              <div class="trip-leg" style="border-left-color: transparent; padding-bottom: 0;">
                <div class="leg-head">
                  <div class="leg-station">${lastLeg.destination}</div>
                  <div class="leg-head-time">
                    <div class="leg-time leg-departure">
                      ${this._realTime(lastLeg.arrival_estimated, lastLeg.arrival_planned)}
                    </div>
                  </div>
                </div>
              </div>
            `
          : nothing}
      </div>
    `;
  }

  private _renderAlternatives(trip: TripData) {
    if (!trip.next_journeys || trip.next_journeys.length === 0) return nothing;

    const lang = this.hass.language;
    return html`
      <div class="alt-journeys">
        <div class="alt-journeys-title">${localize(lang, "alternative_connections")}</div>
        ${trip.next_journeys.map(
          (alt) => html`
            <div class="alt-journey">
              <span class="time-span">
                <span class="leg-time">${this._formatTime(alt.departure)}</span>
                <span class="trip-arrow">${ARROW}</span>
                <span class="leg-time">${this._formatTime(alt.arrival)}</span>
              </span>
              <span>${this._formatDuration(this._journeyMinutes(alt))}</span>
              <span>${alt.transfers} ${alt.transfers !== 1 ? localize(lang, "transfers") : localize(lang, "transfer")}</span>
              <span class="alt-risk ${this._getRiskClass(alt.transfer_risk)}">
                <ha-icon
                  icon=${this._getRiskIcon(alt.transfer_risk)}
                  title=${this._riskLabel(alt.transfer_risk, lang)}
                  style="--opt-icon-size:16px;"
                ></ha-icon>
              </span>
            </div>
          `
        )}
      </div>
    `;
  }

  protected render() {
    if (!this.trip) {
      return html`<div class="card-empty">${localize(this.hass.language, "no_trip_data")}</div>`;
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
