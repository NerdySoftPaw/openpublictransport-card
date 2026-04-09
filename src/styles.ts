import { css } from "lit";

export const cardStyles = css`
  :host {
    --opt-bg: var(--ha-card-background, var(--card-background-color, #1a1a1a));
    --opt-text: var(--primary-text-color, #ffd700);
    --opt-text-secondary: var(--secondary-text-color, #cccccc);
    --opt-delay-red: #e53935;
    --opt-delay-green: #43a047;
    --opt-delay-yellow: #fdd835;
    --opt-border: var(--divider-color, rgba(255, 255, 255, 0.12));
    --opt-header-bg: rgba(0, 0, 0, 0.2);
    --opt-row-hover: rgba(255, 255, 255, 0.05);
    --opt-accent: var(--accent-color, #ffd700);
  }

  /* Dark theme */
  :host([data-theme="dark"]) {
    --opt-bg: #0a0a0a;
    --opt-text: #ffd700;
    --opt-text-secondary: #cccccc;
    --opt-header-bg: rgba(0, 0, 0, 0.4);
    --opt-row-hover: rgba(255, 215, 0, 0.05);
    --opt-border: rgba(255, 215, 0, 0.15);
  }

  /* Light theme */
  :host([data-theme="light"]) {
    --opt-bg: #ffffff;
    --opt-text: #1a1a1a;
    --opt-text-secondary: #666666;
    --opt-header-bg: #f5f5f5;
    --opt-row-hover: rgba(0, 0, 0, 0.03);
    --opt-border: rgba(0, 0, 0, 0.12);
  }

  ha-card {
    background: var(--opt-bg);
    color: var(--opt-text);
    overflow: hidden;
    font-family: "Roboto Mono", "Courier New", monospace;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background: var(--opt-header-bg);
    border-bottom: 1px solid var(--opt-border);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .card-header .station-name {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .card-header .current-time {
    font-variant-numeric: tabular-nums;
    opacity: 0.8;
    margin-left: 12px;
    flex-shrink: 0;
  }

  .card-content {
    padding: 0;
  }

  /* Disruption banner */
  .disruption-banner {
    background: var(--opt-delay-red);
    color: #ffffff;
    padding: 8px 16px;
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .disruption-banner ha-icon {
    --mdc-icon-size: 16px;
  }

  /* Table layout */
  .departure-table {
    width: 100%;
    border-collapse: collapse;
  }

  .departure-table thead th {
    padding: 8px 12px;
    text-align: left;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.6;
    border-bottom: 1px solid var(--opt-border);
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
    padding: 10px 12px;
    font-size: 14px;
    vertical-align: middle;
  }

  /* Time column */
  .time-cell {
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }

  .time-planned {
    font-weight: 600;
  }

  .time-countdown {
    display: block;
    font-size: 11px;
    opacity: 0.7;
    margin-top: 2px;
  }

  /* Line cell */
  .line-cell {
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
    font-size: 13px;
    background: var(--opt-accent);
    color: #000000;
  }

  /* Destination */
  .destination-cell {
    font-weight: 500;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Platform */
  .platform-cell {
    text-align: center;
    font-weight: 600;
  }

  .platform-changed {
    text-decoration: line-through;
    opacity: 0.5;
    margin-right: 4px;
  }

  .platform-new {
    color: var(--opt-delay-red);
    font-weight: 700;
  }

  /* Notices */
  .notice-icon {
    --mdc-icon-size: 16px;
    color: var(--opt-delay-yellow);
    cursor: help;
  }

  /* Compact layout */
  .compact-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 12px;
  }

  .compact-chip {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 8px;
    border: 2px solid var(--opt-border);
    background: var(--opt-bg);
    font-size: 13px;
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
    opacity: 0.8;
  }

  .compact-chip .chip-countdown {
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }

  .compact-chip ha-icon {
    --mdc-icon-size: 18px;
  }

  /* Trip layout */
  .trip-container {
    padding: 16px;
  }

  .trip-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 700;
  }

  .trip-header .trip-arrow {
    opacity: 0.5;
  }

  .trip-header .trip-duration {
    margin-left: auto;
    font-size: 13px;
    font-weight: 400;
    opacity: 0.7;
  }

  .trip-meta {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
    font-size: 12px;
  }

  .trip-meta-item {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    border-radius: 4px;
    background: var(--opt-header-bg);
  }

  .trip-meta-item ha-icon {
    --mdc-icon-size: 14px;
  }

  /* Transfer risk badges */
  .risk-low {
    color: var(--opt-delay-green);
  }

  .risk-medium {
    color: var(--opt-delay-yellow);
  }

  .risk-high {
    color: var(--opt-delay-red);
  }

  /* Timeline */
  .trip-timeline {
    position: relative;
    padding-left: 24px;
  }

  .trip-leg {
    position: relative;
    padding-bottom: 16px;
    padding-left: 16px;
    border-left: 2px solid var(--opt-border);
    margin-left: 6px;
  }

  .trip-leg:last-child {
    border-left-color: transparent;
  }

  .trip-leg::before {
    content: "";
    position: absolute;
    left: -7px;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--opt-accent);
    border: 2px solid var(--opt-bg);
  }

  .trip-leg.transfer::before {
    background: var(--opt-delay-yellow);
  }

  .leg-station {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 4px;
  }

  .leg-details {
    font-size: 12px;
    opacity: 0.7;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .leg-details ha-icon {
    --mdc-icon-size: 14px;
  }

  .leg-time {
    font-variant-numeric: tabular-nums;
    font-weight: 500;
  }

  .leg-transfer-info {
    font-size: 11px;
    color: var(--opt-delay-yellow);
    margin-top: 4px;
    font-style: italic;
  }

  /* Alternative journeys */
  .alt-journeys {
    margin-top: 16px;
    border-top: 1px solid var(--opt-border);
    padding-top: 12px;
  }

  .alt-journeys-title {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.6;
    margin-bottom: 8px;
  }

  .alt-journey {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 6px 0;
    font-size: 13px;
    border-bottom: 1px solid var(--opt-border);
  }

  .alt-journey:last-child {
    border-bottom: none;
  }

  /* Error / Empty states */
  .card-error,
  .card-empty {
    padding: 24px 16px;
    text-align: center;
    font-size: 14px;
    opacity: 0.7;
  }

  .card-error {
    color: var(--opt-delay-red);
  }

  .card-error ha-icon {
    --mdc-icon-size: 40px;
    display: block;
    margin: 0 auto 12px;
  }

  /* Delay badge */
  .delay-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1px 5px;
    border-radius: 3px;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.4;
  }

  .delay-badge.delayed {
    background: var(--opt-delay-red);
    color: #ffffff;
  }

  .delay-badge.on-time {
    background: var(--opt-delay-green);
    color: #ffffff;
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
