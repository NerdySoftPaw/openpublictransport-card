import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TRANSPORT_ICONS } from "../const";

@customElement("openpublictransport-transport-icon")
export class TransportIcon extends LitElement {
  @property({ type: String, attribute: "transport-type" }) transportType = "";

  private _getIcon(): string {
    const type = this.transportType.toLowerCase();
    return TRANSPORT_ICONS[type] || TRANSPORT_ICONS["default"];
  }

  protected render() {
    return html`<ha-icon .icon=${this._getIcon()}></ha-icon>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "openpublictransport-transport-icon": TransportIcon;
  }
}
