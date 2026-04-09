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
    ha-textfield {
      width: 100%;
    }
    select {
      width: 100%;
      padding: 8px;
      border: 1px solid var(--divider-color, #ccc);
      border-radius: 4px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color, #333);
      font-size: 14px;
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

  private _entityChanged(ev: Event): void {
    const target = ev.target as HTMLSelectElement;
    if (!this._config || !target.value) return;
    this._config = { ...this._config, entity: target.value };
    this._fireConfigChanged();
  }

  private _getEntityOptions(): { id: string; name: string }[] {
    if (!this.hass) return [];
    // Show all sensors that have a "departures" or "legs" attribute (our integration)
    return Object.keys(this.hass.states)
      .filter((id) => {
        if (!id.startsWith("sensor.")) return false;
        const attrs = this.hass.states[id].attributes;
        return attrs["departures"] !== undefined || attrs["legs"] !== undefined;
      })
      .map((id) => ({
        id,
        name: this.hass.states[id].attributes.friendly_name || id,
      }));
  }

  private _layoutChanged(ev: Event): void {
    const target = ev.target as any;
    const value = target.value;
    if (!this._config || !value) return;
    this._config = { ...this._config, layout: value };
    this._fireConfigChanged();
  }

  private _themeChanged(ev: Event): void {
    const target = ev.target as any;
    const value = target.value;
    if (!this._config || !value) return;
    this._config = { ...this._config, theme: value };
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
          <select .value=${this._config.entity || ""} @change=${this._entityChanged}>
            <option value="">-- Select Entity --</option>
            ${this._getEntityOptions().map(
              (e) => html`<option value=${e.id} ?selected=${this._config.entity === e.id}>${e.name}</option>`
            )}
          </select>
        </div>

        <div class="config-row">
          <label>Layout</label>
          <select .value=${this._config.layout} @change=${this._layoutChanged}>
            <option value="table" ?selected=${this._config.layout === "table"}>Table (Abfahrtstafel)</option>
            <option value="compact" ?selected=${this._config.layout === "compact"}>Compact (Chips)</option>
            <option value="trip" ?selected=${this._config.layout === "trip"}>Trip (Journey)</option>
          </select>
        </div>

        <div class="config-row">
          <label>Theme</label>
          <select .value=${this._config.theme} @change=${this._themeChanged}>
            <option value="auto" ?selected=${this._config.theme === "auto"}>Auto</option>
            <option value="dark" ?selected=${this._config.theme === "dark"}>Dark</option>
            <option value="light" ?selected=${this._config.theme === "light"}>Light</option>
          </select>
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
