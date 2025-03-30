/**
 * Copyright 2025 heydahsaad
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card-list`
 * 
 * @demo index.html
 * @element ddd-card-list
 */
export class DddCard extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.img = "";
    this.link ="";
    this.desc="";
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/ddd-card-list.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      link: {type: String},
      image: {type:String},
      description: {type:String}
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
        .host{
            display: flex;
            flex-wrap: wrap;
        }

        img {
        display: flex;
        padding: 16px;
        max-width: 200px;
        height: auto;
        }

        .wrapper{
          display: grid;
          place-items: center;
          padding: 6px;
          margin: 10px;
          border: 5px solid;
          border-radius: 10px;
          border-color: white;
        }

        .title{
          align-content: center;
          padding:6px;
        }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <h2>What campus is this</h2>
        <img src=${this.image}>
        <h2 class="title">${this.title}</h2>
        <p>${this.desc}</p>
        <p>${this.link}</p>
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

globalThis.customElements.define(DddCard.tag, DddCard);