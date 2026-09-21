import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TRANSPORT_ICONS } from "../const";

@customElement("openpublictransport-transport-icon")
export class TransportIcon extends LitElement {
  /**
   * The icon lives in this component's own shadow root, which the card's
   * `ha-icon` rule cannot reach — so it is sized here, from the same
   * `--opt-icon-size` the rest of the card sets. Without this the icon fell
   * back to the 24px default and stood a head taller than the text and the
   * icons beside it.
   */
  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--opt-icon-size, 24px);
      height: var(--opt-icon-size, 24px);
      flex-shrink: 0;
    }

    ha-icon {
      --mdc-icon-size: var(--opt-icon-size, 24px);
      width: var(--opt-icon-size, 24px);
      height: var(--opt-icon-size, 24px);
      /* flex, not block: see the icon rule in styles.ts — as a block the
         glyph sits about 2px low inside its own box. */
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

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
