# Public Transport Departures Card

A custom Home Assistant Lovelace card for displaying public transport departures. Works with the [openpublictransport](https://github.com/NerdySoftPaw/hacs-publictransport) integration.

![Screenshot placeholder](screenshot.png)

## Installation

### HACS (Recommended)

1. Open HACS in your Home Assistant instance.
2. Go to **Frontend** > **+ Explore & Download Repositories**.
3. Search for **Public Transport Departures Card**.
4. Click **Download**.
5. Restart Home Assistant.

### Manual

1. Download `openpublictransport-card.js` from the [latest release](https://github.com/NerdySoftPaw/openpublictransport-card/releases/latest).
2. Copy it to `config/www/openpublictransport-card.js`.
3. Add the resource in **Settings** > **Dashboards** > **Resources**:
   - URL: `/local/openpublictransport-card.js`
   - Type: JavaScript Module

## Configuration

### Table Layout (Abfahrtstafel)

```yaml
type: custom:openpublictransport-card
entity: sensor.dusseldorf_hbf_departures
layout: table
max_departures: 10
theme: dark
show_header: true
show_platform: true
show_delay: true
show_realtime_indicator: true
```

### Compact Layout (Chips)

```yaml
type: custom:openpublictransport-card
entity: sensor.dusseldorf_hbf_departures
layout: compact
max_departures: 6
theme: auto
```

### Trip Layout (Journey)

```yaml
type: custom:openpublictransport-card
entity: sensor.trip_home_to_work
layout: trip
theme: auto
show_header: true
```

## Options

| Option                   | Type    | Default | Description                              |
| ------------------------ | ------- | ------- | ---------------------------------------- |
| `entity`                 | string  | **required** | Entity ID of the transport sensor   |
| `layout`                 | string  | `table` | Card layout: `table`, `compact`, `trip`  |
| `max_departures`         | number  | `10`    | Maximum number of departures to display  |
| `show_header`            | boolean | `true`  | Show the card header with station name   |
| `show_platform`          | boolean | `true`  | Show platform/track column               |
| `show_delay`             | boolean | `true`  | Show delay badges                        |
| `show_realtime_indicator`| boolean | `true`  | Show green checkmark for on-time realtime|
| `theme`                  | string  | `auto`  | Theme: `dark`, `light`, `auto`           |

## Development

```bash
npm install
npm run build
# or for watch mode:
npm run dev
```

## License

MIT - Copyright (c) 2026 NerdySoftPaw
