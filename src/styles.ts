import { css } from "lit";

/**
 * Rules for the card element alone: its size in the grid, and its palettes,
 * one per `theme`. The card carries the resolved theme as `data-theme` ("auto"
 * resolves to "dark" or "light" by the dashboard's mode), and the palettes set
 * the --opt-* variables there.
 *
 * They are kept out of cardStyles, which every layout and badge shares. Each of
 * those has its own shadow root, and a palette declared in the shared sheet was
 * declared again on every one of them — where no data-theme exists — so
 * everything inside a layout was painted from the base block whatever the
 * theme said. Declared once, on the card, the variables inherit into every
 * shadow root below it.
 */
export const hostStyles = css`
  /* The card fills the cell a section grid gives it, so that ha-card's
     max-height has a height to resolve against. With a fixed row count the
     layout's body then scrolls inside the cell instead of the card being drawn
     over the one below; with the row count on auto the cell is as tall as the
     card, and this changes nothing. */
  :host {
    height: 100%;
  }

  /* theme: ha, and the palette before a theme is applied. Everything is taken
     from the Home Assistant palette and type, so the card follows the
     dashboard's theme — light, dark or custom — instead of carrying colours of
     its own. */
  :host {
    --opt-bg: var(--ha-card-background, var(--card-background-color));
    --opt-text: var(--primary-text-color);
    --opt-text-secondary: var(--secondary-text-color);
    --opt-border: var(--divider-color);
    --opt-accent: var(--primary-color);
    /* Readable text on top of an accent-coloured surface (line badges). */
    --opt-on-accent: var(--text-primary-color);
    --opt-delay-red: var(--error-color);
    --opt-delay-green: var(--success-color);
    --opt-delay-yellow: var(--warning-color);
    /* Readable text on top of the delay colours (delay badges, the banner). */
    --opt-on-delay: var(--text-primary-color);
    /* Home Assistant's own heading: no band and no rule, no capitals, and the
       size and weight of its heading card's title. The entities card's 24px
       title outweighs a departure list below it. */
    --opt-header-bg: transparent;
    --opt-header-rule: transparent;
    --opt-header-font-size: var(--ha-font-size-l, 16px);
    --opt-header-font-weight: var(--ha-font-weight-normal, 400);
    --opt-header-line-height: var(--ha-line-height-normal, 1.6);
    /* Labels (column headings, the station line) in sentence case, untracked. */
    --opt-caps: none;
    --opt-tracking: 0;
    /* Small text on Home Assistant's scale: labels, countdowns, chips, badges. */
    --opt-font-size-label: var(--ha-font-size-s, 12px);
    --opt-font-size-badge: var(--ha-font-size-s, 12px);
    --opt-row-hover: color-mix(in srgb, var(--primary-text-color) 6%, transparent);
    --opt-font-family: var(--ha-font-family-body, Roboto, Noto, sans-serif);
    --opt-font-weight-medium: var(--ha-font-weight-medium, 500);
  }

  /* The departure board: gold on black, in a monospace face. */
  :host([data-theme="dark"]) {
    --opt-bg: #0a0a0a;
    --opt-text: #ffd700;
    --opt-text-secondary: #cccccc;
    --opt-border: rgba(255, 215, 0, 0.15);
    --opt-accent: var(--accent-color, #ffd700);
    --opt-on-accent: #000000;
    --opt-delay-red: #e53935;
    --opt-delay-green: #43a047;
    --opt-delay-yellow: #fdd835;
    /* Black, not white: white on this red measures 4.2:1 and on this green
       3.3:1, below the 4.5:1 a badge's small figures need. The red itself stays,
       since it is also text on the black card, where it measures 4.7:1. */
    --opt-on-delay: #000000;
    /* The board's header: a band under a rule, in tracked capitals. */
    --opt-header-bg: rgba(0, 0, 0, 0.4);
    --opt-header-rule: var(--opt-border);
    --opt-header-font-size: 14px;
    --opt-header-font-weight: 700;
    --opt-header-line-height: normal;
    --opt-caps: uppercase;
    --opt-tracking: 1;
    --opt-font-size-label: 11px;
    --opt-font-size-badge: 13px;
    --opt-row-hover: rgba(255, 215, 0, 0.05);
    --opt-font-family: "Roboto Mono", "Courier New", monospace;
    /* The faces this falls back to — Courier New, DejaVu Sans Mono — have no
       medium, so 500 would drop to regular and a station name would lose the
       bold it has always had here. */
    --opt-font-weight-medium: 600;
  }

  /* The same board on white. */
  :host([data-theme="light"]) {
    --opt-bg: #ffffff;
    --opt-text: #1a1a1a;
    --opt-text-secondary: #666666;
    --opt-border: rgba(0, 0, 0, 0.12);
    --opt-accent: var(--accent-color, #ffd700);
    --opt-on-accent: #000000;
    /* A shade darker than the dark board's red and green, which measure 4.2:1
       and 3.3:1 against white text and white paper; these measure 5.0:1 and
       5.1:1. */
    --opt-delay-red: #d32f2f;
    --opt-delay-green: #2e7d32;
    /* A dark amber: the dark board's yellow measures 1.4:1 on white, where it
       marks a departure's notices and a transfer's risk — invisible. This
       measures 3.6:1, above the 3:1 an icon needs. */
    --opt-delay-yellow: #b07d00;
    --opt-on-delay: #ffffff;
    --opt-header-bg: #f5f5f5;
    --opt-header-rule: var(--opt-border);
    --opt-header-font-size: 14px;
    --opt-header-font-weight: 700;
    --opt-header-line-height: normal;
    --opt-caps: uppercase;
    --opt-tracking: 1;
    --opt-font-size-label: 11px;
    --opt-font-size-badge: 13px;
    --opt-row-hover: rgba(0, 0, 0, 0.03);
    --opt-font-family: "Roboto Mono", "Courier New", monospace;
    --opt-font-weight-medium: 600;
  }
`;

export const cardStyles = css`
  :host {
    display: block;
  }

  ha-card {
    background: var(--opt-bg);
    color: var(--opt-text);
    overflow: hidden;
    font-family: var(--opt-font-family);
    display: flex;
    flex-direction: column;
    /* The card takes the height its content needs, up to the height of the
       cell it is given (see hostStyles). With a fixed row count that is less
       than a long journey needs, and the layout's body scrolls; with the row
       count on auto the cell grows with the card. */
    max-height: 100%;
  }

  /* The layouts take the height their content needs; the card grows with them,
     so a journey with more legs is not cut off by a fixed card height. */
  openpublictransport-table-layout,
  openpublictransport-next-layout,
  openpublictransport-compact-layout,
  openpublictransport-trip-layout {
    display: flex;
    flex-direction: column;
    min-height: 0;
  }

  .card-header,
  .disruption-banner {
    flex-shrink: 0;
  }

  /* Each layout's body is what scrolls when the card is given less height than
     it needs — the header and a disruption banner stay put. Only the table's
     body used to: the others were clipped at the cell's edge, so a trip card
     at its default five rows lost its alternatives with no way to reach them. */
  .card-content,
  .trip-container,
  .compact-container,
  .next-container {
    min-height: 0;
    overflow-y: auto;
  }

  /* Icon sizing fallback: keeps legacy mdc variable and explicit dimensions in sync.
     The flex box is not cosmetic: an ha-icon holds an inline-flex ha-svg-icon,
     so as a block it puts that child on a text baseline and the glyph lands
     about 2px below the middle of the icon's own box — enough to read as
     misaligned beside a label. Laying the child out as a flex item centres the
     glyph in its box, which is what makes Home Assistant's own headings line
     up, and removes any need to nudge icons by hand. */
  ha-icon {
    --mdc-icon-size: var(--opt-icon-size, 24px);
    width: var(--opt-icon-size, 24px);
    height: var(--opt-icon-size, 24px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* The header is the one place the themes part ways in shape rather than
     colour: the board's band of tracked capitals under a rule, or Home
     Assistant's own heading. Each theme's palette says which. */
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 12px 16px;
    background: var(--opt-header-bg);
    border-bottom: 1px solid var(--opt-header-rule);
    font-size: var(--opt-header-font-size);
    font-weight: var(--opt-header-font-weight);
    line-height: var(--opt-header-line-height);
    text-transform: var(--opt-caps);
    letter-spacing: calc(var(--opt-tracking) * 1px);
  }

  .card-header .station-name {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* The clock is secondary to the station, and keeps the body size under a
     title that is larger than it. */
  .card-header .current-time {
    font-size: var(--ha-font-size-m, 14px);
    font-variant-numeric: tabular-nums;
    color: var(--opt-text-secondary);
    margin-left: 12px;
    flex-shrink: 0;
  }

  /* The table's own box, so its columns can answer to the card's width (see
     the container query below). */
  .card-content {
    container-type: inline-size;
    /* The last row's own padding and this make Home Assistant's 16px below the
       content. */
    padding: 0 0 8px;
  }

  /* Disruption banner */
  .disruption-banner {
    background: var(--opt-delay-red);
    color: var(--opt-on-delay);
    padding: 8px 16px;
    font-size: var(--ha-font-size-s, 12px);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .disruption-banner ha-icon {
    --opt-icon-size: 16px;
  }

  /* Table layout. The table is as wide as the card and never wider: the
     destination takes whatever the other columns leave and gives way first. */
  .departure-table {
    width: 100%;
    border-collapse: collapse;
  }

  /* 12px between columns, and Home Assistant's 16px inset at either edge, so
     the first column starts on the header's text and on the dashboard's own
     column. Twelve pixels a side on every cell spent 96px of a 384px card on
     padding and pushed the platform column off it. */
  .departure-table th,
  .departure-table td {
    padding: 8px 6px;
  }

  .departure-table th:first-child,
  .departure-table td:first-child {
    padding-left: 16px;
  }

  .departure-table th:last-child,
  .departure-table td:last-child {
    padding-right: 16px;
  }

  .departure-table thead th {
    text-align: left;
    font-size: var(--opt-font-size-label);
    font-weight: var(--opt-font-weight-medium);
    text-transform: var(--opt-caps);
    letter-spacing: calc(var(--opt-tracking) * 0.5px);
    white-space: nowrap;
    color: var(--opt-text-secondary);
    /* keep the header row pinned at the top of the scrolling list */
    position: sticky;
    top: 0;
    z-index: 2;
    background: var(--opt-bg);
    /* divider that stays attached to the cell (border-bottom can detach with collapse) */
    box-shadow: inset 0 -1px 0 var(--opt-border);
  }

  .departure-table tbody tr {
    border-bottom: 1px solid var(--opt-border);
    transition: background-color 0.15s ease;
  }

  .departure-table tbody tr:hover {
    background: var(--opt-row-hover);
  }

  .departure-table tbody tr:last-child {
    border-bottom: none;
  }

  .departure-table td {
    font-size: var(--ha-font-size-m, 14px);
    vertical-align: middle;
  }

  /* Time column: the time that will actually happen, the delay that explains
     it, and the countdown under both. */
  .time-cell {
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }

  .time-departure {
    font-weight: var(--opt-font-weight-medium);
  }

  /* A time and the delay badge beside it, the badge centred on the time. Set on
     the time's baseline, the badge's figures lined up but its pill did not:
     they carry no descenders, so the pill's leading and descent all hang below
     them — 4.4px under the time's digits against 1.4px above. Centring the two
     boxes puts the pill's middle on the digits' middle, within 0.3px, in
     whatever face the theme draws them. */
  .time-line {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .time-countdown {
    display: block;
    font-size: var(--opt-font-size-label);
    color: var(--opt-text-secondary);
    margin-top: 2px;
  }

  /* Line cell. The vehicle icon is the card's 16px, not ha-icon's 24px
     default: the line badge is what identifies the service, and the vehicle
     beside it only qualifies it. */
  .line-cell {
    --opt-icon-size: 16px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .line-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: 700;
    font-size: var(--opt-font-size-badge);
    background: var(--opt-accent);
    color: var(--opt-on-accent);
  }

  /* Destination: the rest of the row. A zero max-width lets a table cell
     shrink below its text, so the name ellipsises instead of widening the
     table past the card; the 100% width hands it every pixel the other
     columns do not need. */
  .destination-cell {
    width: 100%;
    max-width: 0;
    font-weight: 500;
  }

  /* A departure's notice mark follows its destination. In the line column it
     widened that column for every row, notice or not. */
  .destination {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .destination-name {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Platform */
  .platform-cell {
    text-align: center;
    font-weight: var(--opt-font-weight-medium);
    white-space: nowrap;
  }

  /* The platform the timetable named, struck through. Secondary text, not a
     faded copy of the primary: at half opacity it measured 3.3:1 on the light
     board and 4.1:1 on the dark one. */
  .platform-changed {
    text-decoration: line-through;
    color: var(--opt-text-secondary);
    margin-right: 4px;
  }

  .platform-new {
    color: var(--opt-delay-red);
    font-weight: 700;
  }

  /* The short platform label is for narrow cards only. */
  .label-short {
    display: none;
  }

  /* A card in a narrow column — a phone, a dashboard of four — keeps every
     column rather than losing the last one off its edge: the vehicle icon
     goes, since the line badge already names the service, and the platform
     heading takes its short form. */
  @container (max-width: 340px) {
    .line-cell openpublictransport-transport-icon {
      display: none;
    }

    .label-long {
      display: none;
    }

    .label-short {
      display: inline;
    }
  }

  /* Notices */
  .notice-icon {
    --opt-icon-size: 16px;
    flex-shrink: 0;
    color: var(--opt-delay-yellow);
    cursor: help;
  }

  /* Compact layout. The chips start on Home Assistant's 16px inset, where the
     header's text starts. */
  .compact-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 12px 16px;
  }

  /* The icon is a transport-icon element, not an ha-icon, so it is sized by
     the variable it reads: the ha-icon rule this replaces never matched, and
     the chips drew ha-icon's 24px default. */
  .compact-chip {
    --opt-icon-size: 16px;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 8px;
    border: 2px solid var(--opt-border);
    background: var(--opt-bg);
    font-size: var(--opt-font-size-badge);
    transition: border-color 0.2s ease;
  }

  .compact-chip.on-time {
    border-color: var(--opt-delay-green);
  }

  .compact-chip.delayed {
    border-color: var(--opt-delay-red);
  }

  .compact-chip .chip-line {
    font-weight: 700;
  }

  .compact-chip .chip-destination {
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--opt-text-secondary);
  }

  .compact-chip .chip-countdown {
    font-weight: var(--opt-font-weight-medium);
    font-variant-numeric: tabular-nums;
  }

  /* Trip layout */
  .trip-container {
    /* The card's content keeps Home Assistant's own 16px inset, so it starts on
       the same column as every other card on the dashboard. The timeline's rail
       and dots live inside that inset rather than pushing the content right. */
    padding: 12px 16px;
  }

  .trip-header {
    display: flex;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 8px;
    font-size: var(--ha-font-size-l, 16px);
    font-weight: var(--ha-font-weight-bold, 700);
    font-variant-numeric: tabular-nums;
  }

  .trip-arrow {
    color: var(--opt-text-secondary);
    /* The mark is drawn, so it is its own box that has to be placed: centred on
       the line rather than sat on a text baseline it does not share. */
    align-self: center;
    display: flex;
    flex-shrink: 0;
  }

  /* Sized in em so it scales with whatever text it joins, and stroked in
     currentColor so it inherits that text's colour. See the ARROW constant in
     layouts/trip.ts for why it is drawn and not typed. */
  .trip-arrow svg {
    display: block;
    width: 1.05em;
    height: 1.05em;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* The header is bold, so its arrow carries the same weight. */
  .trip-header .trip-arrow svg {
    stroke-width: 2.6;
  }

  /* An arrow joins the two things on either side of it, so it keeps their
     company rather than the row's — in a row's own gap it read as another
     column separator, with as much air around it as unrelated values have. */
  .time-span {
    display: inline-flex;
    align-items: baseline;
    gap: 5px;
  }

  /* The journey's total reads at the same size as the times it belongs to; only
     its weight and colour set it back. */
  .trip-header .trip-duration {
    margin-left: auto;
    font-weight: var(--ha-font-weight-normal, 400);
    color: var(--opt-text-secondary);
  }

  /* One quiet line of facts rather than a row of filled boxes, the way Home
     Assistant renders a card's secondary information. */
  .trip-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2px 12px;
    margin-bottom: 12px;
    font-size: var(--ha-font-size-s, 12px);
    color: var(--opt-text-secondary);
  }

  .trip-meta-item {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    cursor: default;
  }

  .trip-meta-item ha-icon {
    --opt-icon-size: 16px;
    color: var(--opt-text-secondary);
  }

  /* Transfer risk. The colour rides on the icon so the label keeps the body
     text's contrast — painted in the warning hue it was unreadable on a light
     theme. A connection actually at risk is the one case loud enough to colour
     the text as well. */
  .risk-low ha-icon {
    color: var(--opt-delay-green);
  }

  .risk-medium ha-icon {
    color: var(--opt-delay-yellow);
  }

  .risk-high,
  .risk-high ha-icon {
    color: var(--opt-delay-red);
  }

  /* Timeline. Everything is placed from the four sizes below, so the rail, the
     dots and the text keep their relationship whatever those sizes become. */
  .trip-timeline {
    --opt-line-width: 2px;
    --opt-dot-size: 6px;
    --opt-dot-ring: 2px;
    /* the hollow marker's stroke: thinner than the outer ring, so a dot this
       small keeps a visible centre */
    --opt-dot-stroke: 1.5px;
    --opt-station-line: 20px;
    /* Gap between the dots and the text they mark. */
    --opt-dot-gap: 5px;
    /* From the legs' text back to the centre of the rail. */
    --opt-rail-offset: calc(
      var(--opt-dot-gap) + (var(--opt-dot-size) + 2 * var(--opt-dot-ring)) / 2
    );

    position: relative;
    /* Indenting the legs by exactly that offset puts the rail on the same
       column as the header, the facts and the alternatives — it reads as one
       vertical rule through the card's content — while the dots, being wider
       than the rule, straddle that column and sit a little into the padding. */
    padding-left: var(--opt-rail-offset);
  }

  .trip-leg {
    position: relative;
    padding-bottom: 16px;
  }

  /* The rail runs from this leg's dot to the next one, so it meets both centres
     and never leaves a gap at a leg boundary. */
  .trip-leg::after {
    content: "";
    position: absolute;
    left: calc(-1 * var(--opt-rail-offset) - var(--opt-line-width) / 2);
    top: calc(var(--opt-station-line) / 2);
    bottom: calc(-1 * var(--opt-station-line) / 2);
    width: var(--opt-line-width);
    background: var(--opt-border);
  }

  .trip-leg:last-child {
    padding-bottom: 0;
  }

  .trip-leg:last-child::after {
    display: none;
  }

  .trip-leg::before {
    content: "";
    position: absolute;
    /* the dot, ring included, centred on the rail */
    left: calc(-1 * var(--opt-rail-offset) - var(--opt-dot-size) / 2 - var(--opt-dot-ring));
    /* and on the middle of the station's first line */
    top: calc((var(--opt-station-line) - var(--opt-dot-size)) / 2 - var(--opt-dot-ring));
    width: var(--opt-dot-size);
    height: var(--opt-dot-size);
    border-radius: 50%;
    background: var(--opt-accent);
    border: var(--opt-dot-ring) solid var(--opt-bg);
  }

  /* A transfer is a hollow dot: a change of vehicle, not another colour. */
  .trip-leg.transfer::before {
    background: var(--opt-bg);
    box-shadow: inset 0 0 0 var(--opt-dot-stroke) var(--opt-accent);
  }

  /* Station and duration share the leg's first line, so the durations line up
     with the station names rather than floating beside the smaller detail row. */
  .leg-head {
    display: flex;
    align-items: baseline;
    gap: 12px;
  }

  .leg-station {
    font-size: var(--ha-font-size-m, 14px);
    font-weight: var(--opt-font-weight-medium);
    line-height: var(--opt-station-line);
  }

  .leg-details {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: var(--ha-font-size-s, 12px);
    color: var(--opt-text-secondary);
  }

  .leg-details ha-icon,
  .leg-details openpublictransport-transport-icon {
    --opt-icon-size: 16px;
  }

  .leg-time {
    font-variant-numeric: tabular-nums;
    font-weight: var(--opt-font-weight-medium);
  }

  .leg-line {
    font-weight: var(--opt-font-weight-medium);
  }

  /* The line and where it is headed: one phrase, so the arrow between them sits
     closer than the gap separating them from the ride's length. */
  .leg-service {
    display: inline-flex;
    align-items: baseline;
    gap: 5px;
    min-width: 0;
    overflow: hidden;
  }

  /* Where the vehicle is headed. It can be long, so it yields before the
     duration does. */
  .leg-direction {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
  }

  /* A station's own time sits at the right edge of its line, so the journey's
     four times read down one column like a timetable. */
  /* The delay and the time it qualifies travel together at the right edge. */
  .leg-head-time {
    margin-left: auto;
    display: flex;
    align-items: baseline;
    gap: 6px;
    flex-shrink: 0;
  }

  /* The badge's figures carry no descenders, so its ink rides high inside the
     pill and the pill hangs below the digits it annotates — measured, 4.1px
     under them against 1.7px above. No box alignment fixes that: the asymmetry
     is inside the pill, not in how it is placed, and reshaping the box moves
     both of its edges equally while the figures stay put. Two pixels up brings
     the two sets of figures onto the same optical line. */
  .leg-head-time openpublictransport-delay-badge {
    transform: translateY(-2px);
  }

  .leg-departure {
    flex-shrink: 0;
    font-size: var(--ha-font-size-m, 14px);
    font-weight: var(--opt-font-weight-medium);
    line-height: var(--opt-station-line);
    color: var(--opt-text);
  }

  /* The ride's length belongs to the vehicle that does it, so it follows the
     line and its direction directly rather than being pushed to the far edge:
     it reads as part of that sentence, and the right edge stays the times'. */
  .leg-duration {
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
  }

  /* When this leg gets in, under the time it left. Set back, because the pair
     that matters at a change is this arrival and the next leg's departure
     directly below it — which is what makes the wait between them visible. */
  .leg-arrival {
    margin-left: auto;
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
    color: var(--opt-text-secondary);
  }

  .leg-transfer-info {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: var(--ha-font-size-s, 12px);
    color: var(--opt-text-secondary);
    margin-top: 2px;
  }

  .leg-transfer-info ha-icon {
    --opt-icon-size: 16px;
  }

  /* Alternative journeys. No rule above the heading: the heading and the space
     before it already say a new section starts, and the rows below carry rules
     of their own — a third line here would compete with both. */
  .alt-journeys {
    margin-top: 16px;
  }

  /* The heading belongs to the list under it, so it sits close to it — the air
     that separates the two goes above the heading, not between them. */
  .alt-journeys-title {
    font-size: var(--ha-font-size-m, 14px);
    font-weight: var(--opt-font-weight-medium);
    color: var(--opt-text-secondary);
    margin-bottom: 2px;
  }

  .alt-journey {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 6px 0;
    font-size: var(--ha-font-size-s, 12px);
    font-variant-numeric: tabular-nums;
    color: var(--opt-text-secondary);
    border-bottom: 1px solid var(--opt-border);
  }

  .alt-journey .leg-time {
    color: var(--opt-text);
  }

  .alt-journey .alt-risk {
    margin-left: auto;
    display: inline-flex;
  }

  .alt-journey:last-child {
    border-bottom: none;
  }

  /* Error / Empty states, set back by colour rather than opacity: the error's
     red at 70% measured 3.2:1 on the light board and 2.8:1 on the dark one. */
  .card-error,
  .card-empty {
    padding: 24px 16px;
    text-align: center;
    font-size: var(--ha-font-size-m, 14px);
  }

  .card-empty {
    color: var(--opt-text-secondary);
  }

  .card-error {
    color: var(--opt-delay-red);
  }

  .card-error ha-icon {
    --opt-icon-size: 40px;
    display: block;
    margin: 0 auto 12px;
  }

  /* Delay badge. A filled chip reads at a glance, which is what a delay wants —
     but at its old size it outweighed the journey's own times. Now that a leg
     reports the time that will actually happen, the badge only explains why
     that time differs from the timetable, so it is sized as the annotation it
     is rather than as a headline. */
  .delay-badge {
    display: inline-flex;
    align-items: center;
    padding: 0 4px;
    border-radius: 4px;
    font-size: var(--ha-font-size-xs, 10px);
    font-weight: var(--opt-font-weight-medium);
    font-variant-numeric: tabular-nums;
    line-height: 1.6;
  }

  .delay-badge.delayed {
    background: var(--opt-delay-red);
    color: var(--opt-on-delay);
  }

  .delay-badge.on-time {
    background: var(--opt-delay-green);
    color: var(--opt-on-delay);
  }

  /* The drawn mark: as tall as the pill's line, so an on-time badge is the
     height of a delayed one, and stroked about as heavy as the figures. */
  .delay-badge .check {
    display: block;
    width: 1.2em;
    height: 1.6em;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.6;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* Editor styles */
  .card-config {
    padding: 16px;
  }

  .card-config .config-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
  }

  .card-config .config-row label {
    font-weight: 500;
  }

  .card-config ha-entity-picker,
  .card-config ha-select,
  .card-config ha-textfield {
    width: 100%;
  }

  .config-section {
    margin-bottom: 16px;
  }

  .config-section-title {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.6;
    margin-bottom: 8px;
  }
`;
