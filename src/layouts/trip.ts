import { LitElement, html, nothing } from "lit";
import { customElement, property, state, query } from "lit/decorators.js";
import { cardStyles } from "../styles";
import { TripData, TripLeg, CardConfig, HomeAssistant, JourneysResponse } from "../types";
import { localize } from "../localize";
import { OPT_PLATFORM } from "../detect";
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

/** The action that hands out every connection the trip sensor is holding. */
const SERVICE_GET_JOURNEYS = "get_journeys";

@customElement("openpublictransport-trip-layout")
export class TripLayout extends LitElement {
  static styles = cardStyles;

  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ attribute: false }) config!: CardConfig;
  @property({ attribute: false }) trip: TripData | null = null;

  /* The connection the dialog is describing, held as two pieces: the summary
     from the row that was clicked, which is available at once and names the
     connection in the title, and the full journey, which arrives afterwards.

     Both are snapshots. The coordinator refreshes every couple of minutes and
     the card behind the dialog follows it, but these two references do not —
     so an open dialog goes on describing the connection it was opened for
     instead of quietly becoming a different one. */
  @state() private _openSummary: TripData | null = null;
  @state() private _openJourney: TripData | null = null;
  @state() private _openError = "";

  @query("dialog.journey-dialog") private _dialog?: HTMLDialogElement;

  /* The row that opened the dialog, so focus can go back to it on close, and a
     token that tells a late answer from the current one — a second row opened
     while the first was still loading must not be filled in with the first. */
  private _opener: HTMLElement | null = null;
  private _request = 0;

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
    return this._renderJourneyHeader(trip);
  }

  /**
   * When a journey leaves, when it gets in and how long it takes. The card
   * shows it for the connection it is watching; the dialog shows it for the
   * one that was picked, where it also names what the dialog is about — which
   * is why the markup lives here and not behind the card's header option.
   */
  private _renderJourneyHeader(journey: TripData, id?: string) {
    return html`
      <div class="trip-header" id=${id ?? nothing}>
        <span class="time-span">
          <span>${journey.departure}</span>
          <span class="trip-arrow">${ARROW}</span>
          <span>${journey.arrival}</span>
        </span>
        <span class="trip-duration">${this._formatDuration(this._journeyMinutes(journey))}</span>
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

  /**
   * The journey, leg by leg. It takes the legs rather than the trip sensor's
   * own connection, which is what lets the dialog draw a chosen alternative
   * with it: one renderer, so the card and the dialog cannot come to disagree
   * about what a journey looks like.
   */
  private _renderTimeline(legs: TripLeg[]) {
    const lastLeg = legs[legs.length - 1];

    return html`
      <div class="trip-timeline">
        ${legs.map((leg, i) => this._renderLeg(leg, legs[i + 1], legs[i - 1]))}
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

  /**
   * A journey's full detail: the facts that describe it, then its legs. The
   * card draws the connection it is watching with this; the dialog draws the
   * alternative somebody picked with the same call.
   */
  private _renderJourney(journey: TripData) {
    return html`
      ${this._renderMeta(journey)}
      ${this._renderTimeline(journey.legs || [])}
    `;
  }

  /**
   * Whether an alternative's detail can be had at all.
   *
   * An integration new enough to send the legs with the summary needs nothing
   * further. Otherwise the detail comes from the `get_journeys` action, and on
   * an integration that does not register it the rows are simply not
   * selectable — the card goes on reading exactly as it did before.
   */
  private _canOpen(alt: TripData): boolean {
    if (alt.legs && alt.legs.length > 0) return true;
    return !!this.hass?.callService && !!this.hass?.services?.[OPT_PLATFORM]?.[SERVICE_GET_JOURNEYS];
  }

  private _altSummary(alt: TripData, lang: string): string[] {
    return [
      `${this._formatTime(alt.departure)} \u2013 ${this._formatTime(alt.arrival)}`,
      this._formatDuration(this._journeyMinutes(alt)),
      `${alt.transfers} ${alt.transfers !== 1 ? localize(lang, "transfers") : localize(lang, "transfer")}`,
      this._riskLabel(alt.transfer_risk, lang),
    ];
  }

  private _renderAltRow(alt: TripData, lang: string) {
    return html`
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
    `;
  }

  private _renderAlternatives(trip: TripData) {
    if (!trip.next_journeys || trip.next_journeys.length === 0) return nothing;

    const lang = this.hass.language;
    return html`
      <div class="alt-journeys">
        <div class="alt-journeys-title">${localize(lang, "alternative_connections")}</div>
        ${trip.next_journeys.map((alt) =>
          this._canOpen(alt)
            ? /* A real button, so it takes focus, answers Enter and Space and
                 announces what it opens. A div with a click handler would do
                 none of that, and a dashboard is reached by keyboard as often
                 as by pointer. */
              html`
                <button
                  type="button"
                  class="alt-journey"
                  aria-haspopup="dialog"
                  aria-label=${`${localize(lang, "show_details")}: ${this._altSummary(alt, lang).join(", ")}`}
                  @click=${(ev: MouseEvent) => this._open(alt, ev.currentTarget as HTMLElement)}
                >
                  ${this._renderAltRow(alt, lang)}
                </button>
              `
            : html`<div class="alt-journey">${this._renderAltRow(alt, lang)}</div>`
        )}
      </div>
    `;
  }

  /* ── The chosen connection, in a dialog ──────────────────────────────────
     A dialog rather than a row that expands: the card's main home is a kiosk
     whose dashboard is tuned to fit without scrolling, and anything that
     changes the card's height reflows the section around it. This leaves the
     card's layout untouched, and it can be wider than the card — wide enough
     for a headsign the card has to cut short.

     The native element, not Home Assistant's: `ha-dialog` is mid-migration to
     `ha-md-dialog`, and a custom card that leans on frontend internals breaks
     on their schedule. `showModal()` brings focus trapping, Escape and a
     backdrop with it. */

  private _open(alt: TripData, opener: HTMLElement) {
    const token = ++this._request;
    this._opener = opener;
    this._openSummary = alt;
    this._openError = "";
    /* An integration that already sent the legs needs no asking. */
    this._openJourney = alt.legs && alt.legs.length > 0 ? alt : null;

    this._dialog?.showModal();

    if (!this._openJourney) this._fetch(alt, token);
  }

  /**
   * Whether an answer's journey is the one a summary row describes.
   *
   * Every fact the row carries has to agree, not just when it leaves. A live
   * VVS board made the reason plain: of seven connections, two left at 17:36,
   * two at 17:51 and two at 18:36, so matching on the departure alone returned
   * the earliest journey with that departure — for the first alternative, the
   * card's own main connection. The dialog was then titled "17:36 → 18:33,
   * 1 Umstieg" from the row while its body described 17:36 → 18:31 with three
   * changes and a high transfer risk. A wrong answer under a right heading.
   *
   * The timestamps are preferred because `HH:MM` cannot tell tonight from
   * tomorrow; where an older integration sends none, the clock times stand in.
   * Two connections that agree on all four of these are ones the row cannot
   * tell apart anyway.
   */
  private _isSameJourney(a: TripData, b: TripData): boolean {
    const leaves =
      a.departure_timestamp && b.departure_timestamp
        ? a.departure_timestamp === b.departure_timestamp
        : a.departure === b.departure;
    const arrives =
      a.arrival_timestamp && b.arrival_timestamp
        ? a.arrival_timestamp === b.arrival_timestamp
        : a.arrival === b.arrival;
    return (
      leaves && arrives && a.transfers === b.transfers && a.duration_minutes === b.duration_minutes
    );
  }

  /**
   * Ask the integration for the connection behind the row.
   *
   * The action answers with every journey the sensor is holding, so the right
   * one still has to be found — and a position in the list will not find it,
   * because the first connection rolls off as it departs. No match means the
   * connection is gone, which is said plainly rather than showing whatever
   * journey happened to be in its place.
   */
  private async _fetch(alt: TripData, token: number) {
    try {
      const result = await this.hass.callService!(
        OPT_PLATFORM,
        SERVICE_GET_JOURNEYS,
        { entity_id: this.config.entity },
        undefined,
        /* notifyOnError */ false,
        /* returnResponse */ true
      );
      if (token !== this._request) return;

      const journeys = (result?.response as JourneysResponse | undefined)?.journeys ?? [];
      const match = journeys.find((j) => this._isSameJourney(j, alt));

      if (match?.legs?.length) {
        this._openJourney = match;
      } else {
        this._openError = localize(this.hass.language, "connection_gone");
      }
    } catch (err) {
      if (token !== this._request) return;
      this._openError = localize(this.hass.language, "details_failed");
      // eslint-disable-next-line no-console
      console.error("openpublictransport-card: could not load connection detail", err);
    }
  }

  private _close() {
    this._dialog?.close();
  }

  /** A click that lands on the dialog itself came from the backdrop. */
  private _onDialogClick(ev: MouseEvent) {
    if (ev.target === ev.currentTarget) this._close();
  }

  private _onDialogClose() {
    /* The event is queued rather than delivered on the spot, so it can arrive
       after another row has opened the dialog again — measured: closing and
       reopening within one task emptied the dialog that was up and stranded
       the answer on its way to it, because the clearing below had by then
       invalidated the request it belonged to. An open dialog means this close
       belongs to a dialog that is no longer the current one. */
    if (this._dialog?.open) return;

    /* Nothing is in flight any more, and nothing arriving late may fill in a
       dialog that is no longer open. */
    this._request++;
    this._openSummary = null;
    this._openJourney = null;
    this._openError = "";
    /* Focus goes back to the row it came from. The browser restores it too,
       but only while that row is still in the document — after a refresh
       rebuilt the list it may not be. */
    if (this._opener?.isConnected) this._opener.focus();
    this._opener = null;
  }

  private _renderDialogBody() {
    if (this._openJourney) return this._renderJourney(this._openJourney);

    if (this._openError) {
      return html`
        <div class="journey-dialog-status is-error">
          <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
          <span>${this._openError}</span>
        </div>
      `;
    }

    return html`
      <div class="journey-dialog-status">
        <span class="journey-dialog-spinner" aria-hidden="true"></span>
        <span>${localize(this.hass.language, "loading_details")}</span>
      </div>
    `;
  }

  private _renderDialog() {
    const lang = this.hass.language;
    /* Always in the template, opened and closed through the element's own API.
       Rendering it only while open would hand Lit a different element each
       time, and the one in the top layer would be the one thrown away. */
    return html`
      <dialog
        class="journey-dialog"
        aria-labelledby="journey-dialog-title"
        @click=${this._onDialogClick}
        @close=${this._onDialogClose}
      >
        <div class="journey-dialog-head">
          ${this._openSummary
            ? this._renderJourneyHeader(this._openSummary, "journey-dialog-title")
            : html`<div class="trip-header" id="journey-dialog-title"></div>`}
          <button
            type="button"
            class="journey-dialog-close"
            aria-label=${localize(lang, "close")}
            @click=${this._close}
          >
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>
        <div class="journey-dialog-content">${this._renderDialogBody()}</div>
      </dialog>
    `;
  }

  protected render() {
    /* One template, with the empty state inside it rather than returned early:
       a poll that comes back with no connections then replaces the card's
       content without taking an open dialog down with it. The dialog is showing
       a snapshot, and it names the connection it is showing, so it can outlive
       the list it was opened from. */
    return html`
      ${this.trip
        ? html`
            <div class="trip-container">
              ${this._renderHeader(this.trip)}
              ${this._renderJourney(this.trip)}
              ${this._renderAlternatives(this.trip)}
            </div>
          `
        : html`<div class="card-empty">${localize(this.hass.language, "no_trip_data")}</div>`}
      ${this._renderDialog()}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "openpublictransport-trip-layout": TripLayout;
  }
}
