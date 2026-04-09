import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { CardConfig, HomeAssistant } from "./types";
import { DEFAULT_CONFIG } from "./const";

@customElement("openpublictransport-card-editor")
export class OpenpublictransportCardEditor extends LitElement {
  static styles = css`
    .card-config {
      padding: 16px;
    }
    .config-row {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
    }
    .config-row label {
      font-weight: 500;
      margin-bottom: 4px;
      font-size: 14px;
    }
    .toggle-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 0;
    }
    .toggle-row label {
      font-weight: 400;
    }
    ha-entity-picker,
    ha-select,
    ha-textfield {
      width: 100%;
    }
    .section-title {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      opacity: 0.6;
      margin: 16px 0 8px;
    }
  `;

  @property({ attribute: false }) hass!: HomeAssistant;
  @state() private _config!: CardConfig;

  public setConfig(config: CardConfig): void {
    this._config = { ...DEFAULT_CONFIG, ...config } as CardConfig;
  }

  private _fireConfigChanged(): void {
    const event = new CustomEvent("config-changed", {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  private _entityChanged(ev: CustomEvent): void {
    if (!this._config || !ev.detail.value) return;
    this._config = { ...this._config, entity: ev.detail.value };
    this._fireConfigChanged();
  }

  private _layoutChanged(ev: CustomEvent): void {
    if (!this._config || !ev.detail.value) return;
    this._config = { ...this._config, layout: ev.detail.value };
    this._fireConfigChanged();
  }

  private _themeChanged(ev: CustomEvent): void {
    if (!this._config || !ev.detail.value) return;
    this._config = { ...this._config, theme: ev.detail.value };
    this._fireConfigChanged();
  }

  private _maxDeparturesChanged(ev: Event): void {
    if (!this._config) return;
    const target = ev.target as HTMLInputElement;
    const value = parseInt(target.value, 10);
    if (isNaN(value) || value < 1) return;
    this._config = { ...this._config, max_departures: value };
    this._fireConfigChanged();
  }

  private _toggleChanged(configKey: keyof CardConfig): (ev: CustomEvent) => void {
    return (ev: CustomEvent) => {
      if (!this._config) return;
      this._config = {
        ...this._config,
        [configKey]: (ev.target as HTMLInputElement).checked,
      };
      this._fireConfigChanged();
    };
  }

  protected render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    return html`
      <div class="card-config">
        <div class="config-row">
          <label>Entity</label>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.entity || ""}
            .includeDomains=${["sensor"]}
            @value-changed=${this._entityChanged}
            allow-custom-entity
          ></ha-entity-picker>
        </div>

        <div class="config-row">
          <label>Layout</label>
          <ha-select
            .value=${this._config.layout}
            @selected=${this._layoutChanged}
            @closed=${(e: Event) => e.stopPropagation()}
          >
            <mwc-list-item value="table">Table (Abfahrtstafel)</mwc-list-item>
            <mwc-list-item value="compact">Compact (Chips)</mwc-list-item>
            <mwc-list-item value="trip">Trip (Journey)</mwc-list-item>
          </ha-select>
        </div>

        <div class="config-row">
          <label>Theme</label>
          <ha-select
            .value=${this._config.theme}
            @selected=${this._themeChanged}
            @closed=${(e: Event) => e.stopPropagation()}
          >
            <mwc-list-item value="auto">Auto</mwc-list-item>
            <mwc-list-item value="dark">Dark</mwc-list-item>
            <mwc-list-item value="light">Light</mwc-list-item>
          </ha-select>
        </div>

        <div class="config-row">
          <label>Max Departures</label>
          <ha-textfield
            type="number"
            .value=${String(this._config.max_departures)}
            min="1"
            max="50"
            @change=${this._maxDeparturesChanged}
          ></ha-textfield>
        </div>

        <div class="section-title">Display Options</div>

        <div class="toggle-row">
          <label>Show Header</label>
          <ha-switch
            .checked=${this._config.show_header}
            @change=${this._toggleChanged("show_header")}
          ></ha-switch>
        </div>

        <div class="toggle-row">
          <label>Show Platform</label>
          <ha-switch
            .checked=${this._config.show_platform}
            @change=${this._toggleChanged("show_platform")}
          ></ha-switch>
        </div>

        <div class="toggle-row">
          <label>Show Delay</label>
          <ha-switch
            .checked=${this._config.show_delay}
            @change=${this._toggleChanged("show_delay")}
          ></ha-switch>
        </div>

        <div class="toggle-row">
          <label>Show Realtime Indicator</label>
          <ha-switch
            .checked=${this._config.show_realtime_indicator}
            @change=${this._toggleChanged("show_realtime_indicator")}
          ></ha-switch>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "openpublictransport-card-editor": OpenpublictransportCardEditor;
  }
}
