import { LitElement, html, css, nothing } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { localize } from "../localize";

/**
 * A modal that lists a departure's notices, or all of the board's disruptions,
 * so they can be read on a touch screen, where a `title` tooltip never shows
 * (issue #19).
 *
 * A native `<dialog>` with `showModal()` rather than Home Assistant's own
 * dialog elements: those are frontend internals that change on Home
 * Assistant's schedule, while this one brings focus trapping, Escape and a
 * backdrop by itself. It sits in the top layer, but still inherits from the
 * card in the DOM, so the card's theme variables colour it.
 */
@customElement("openpublictransport-info-dialog")
export class InfoDialog extends LitElement {
  static styles = css`
    dialog {
      box-sizing: border-box;
      width: min(440px, calc(100vw - 32px));
      max-height: calc(100vh - 64px);
      padding: 0;
      border: 1px solid var(--opt-border);
      border-radius: var(--ha-card-border-radius, 12px);
      background: var(--opt-bg);
      color: var(--opt-text);
      font-family: var(--opt-font-family);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
    }

    dialog::backdrop {
      background: rgba(0, 0, 0, 0.5);
    }

    .dialog-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 8px 12px 16px;
      border-bottom: 1px solid var(--opt-border);
      font-size: var(--ha-font-size-l, 16px);
      font-weight: var(--opt-font-weight-medium);
    }

    .dialog-title {
      flex: 1;
      min-width: 0;
    }

    .close {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      padding: 0;
      border: none;
      border-radius: 50%;
      background: transparent;
      color: var(--opt-text-secondary);
      cursor: pointer;
      --mdc-icon-size: 20px;
    }

    .close:focus-visible {
      outline: 2px solid var(--opt-accent);
    }

    .dialog-body {
      padding: 4px 16px 16px;
      overflow-y: auto;
    }

    h3 {
      margin: 12px 0 4px;
      font-size: var(--opt-font-size-label);
      font-weight: var(--opt-font-weight-medium);
      text-transform: var(--opt-caps);
      letter-spacing: calc(var(--opt-tracking) * 0.08em);
      color: var(--opt-text-secondary);
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      display: flex;
      gap: 8px;
      padding: 6px 0;
      font-size: var(--ha-font-size-m, 14px);
      line-height: 1.45;
      overflow-wrap: anywhere;
    }

    li ha-icon {
      flex-shrink: 0;
      --mdc-icon-size: 18px;
      width: 18px;
      height: 18px;
      margin-top: 1px;
    }

    .disruption ha-icon {
      color: var(--opt-delay-red);
    }

    .info ha-icon {
      color: var(--opt-text-secondary);
    }
  `;

  @property({ attribute: false }) language = "en";
  @property({ type: String }) heading = "";
  /** Messages reporting a real disruption, listed first under their own heading. */
  @property({ attribute: false }) disruptions: string[] = [];
  /** Routine information (bicycle rules, accessibility, on-board services). */
  @property({ attribute: false }) notices: string[] = [];

  @query("dialog") private _dialog!: HTMLDialogElement;

  /** The element that had focus before opening, to give it back on close. */
  private _opener: HTMLElement | null = null;

  public async open(): Promise<void> {
    this._opener = (this.getRootNode() as ShadowRoot | Document).activeElement as HTMLElement | null;
    await this.updateComplete;
    if (!this._dialog.open) this._dialog.showModal();
  }

  public close(): void {
    this._dialog?.close();
  }

  private _onClose = () => {
    this._opener?.focus?.();
    this._opener = null;
  };

  // A click on the backdrop lands on the dialog element itself.
  private _onClick = (ev: MouseEvent) => {
    if (ev.target === this._dialog) this.close();
  };

  private _renderList(items: string[], kind: "disruption" | "info") {
    const icon = kind === "disruption" ? "mdi:alert-circle-outline" : "mdi:information-outline";
    return html`<ul>
      ${items.map((text) => html`<li class=${kind}><ha-icon icon=${icon}></ha-icon><span>${text}</span></li>`)}
    </ul>`;
  }

  protected render() {
    const lang = this.language;
    const both = this.disruptions.length > 0 && this.notices.length > 0;
    return html`
      <dialog aria-labelledby="title" @close=${this._onClose} @click=${this._onClick}>
        <div class="dialog-header">
          <span class="dialog-title" id="title">${this.heading}</span>
          <button class="close" aria-label=${localize(lang, "close")} @click=${() => this.close()}>
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>
        <div class="dialog-body">
          ${this.disruptions.length
            ? html`${both ? html`<h3>${localize(lang, "disruptions")}</h3>` : nothing}
              ${this._renderList(this.disruptions, "disruption")}`
            : nothing}
          ${this.notices.length
            ? html`${both ? html`<h3>${localize(lang, "notices")}</h3>` : nothing}
              ${this._renderList(this.notices, "info")}`
            : nothing}
        </div>
      </dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "openpublictransport-info-dialog": InfoDialog;
  }
}
