/**
 * Copyright 2025 heydahsaad
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./ddd-card.js";

/**
 * `ddd-card-list`
 * 
 * @demo index.html
 * @element ddd-card-list
 */
export class DddCardList extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-card-list";
  }

  constructor() {
    super();
    this.title = "";
    this.image = "";
    this.description = "";

    // this.t = this.t || {};
    // this.t = {
    //   ...this.t,
    //   title: "",
    // };
    // this.registerLocalization({
    //   context: this,
    //   localesPath:
    //     new URL("./locales/ddd-card-list.ar.json", import.meta.url).href +
    //     "/../",
    //   locales: ["ar", "es", "hi", "zh"],
    // });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      image: { type: String },
      description: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`

      :host{
          display: block;
          gap: var(--ddd-spacing-3);
          border: 1px solid var(--ddd-border-color, green);
          padding: var(--ddd-spacing-3);
          border-radius: 4px;
          width: 100%;
          min-width: 800px;
      }

      .wrapper {
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
        gap: 2rem;
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        background-color: var(--ddd-theme-accent); //the whole background
        border-radius: 80px; //ini apa sia
        justify-items: center;
        align-items: center;
      }

      /* ::slotted(ddd-card) {
        flex: 0 1 350px; 
        margin: 0;
      } */
      

    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <slot></slot>
      </div>
      `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DddCardList.tag, DddCardList);