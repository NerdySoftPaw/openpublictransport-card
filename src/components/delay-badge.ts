import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cardStyles } from "../styles";

@customElement("openpublictransport-delay-badge")
export class DelayBadge extends LitElement {
  static styles = cardStyles;

  @property({ type: Number }) delay = 0;
  @property({ type: Boolean, attribute: "is-realtime" }) isRealtime = false;

  protected render() {
    if (this.delay > 0) {
      return html`
        <span class="delay-badge delayed">+${this.delay}</span>
      `;
    }

    if (this.delay === 0 && this.isRealtime) {
      return html`
        <span class="delay-badge on-time">&check;</span>
      `;
    }

    return nothing;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "openpublictransport-delay-badge": DelayBadge;
  }
}
