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


    // this.t = this.t || {};
    // this.t = {
    //   ...this.t,
    //   title: "Title",
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
      link: { type: String },
      image: { type: String },
      desc: { type: String }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
        :host {
          display: inline-flex;
          flex-direction:column;
          /* background: white; */
          border-radius: 8px;
          box-shadow: 0 4px 18px rgba(0,0,0,0.6);
          overflow: hidden;
          max-width: 400px;
          min-width:300px;
        }

        .img {
          width: 100%;
          height: 200px;
          /* object-fit: cover; */
          margin: 0;
          padding: 0;
        }

        .title-bar {
          font-size: 1.5rem;
          font-weight: bold;
          padding: 1rem 1rem 0.5rem;
          color: #1E407C;
        }

        .description {
          padding: 0 1rem 1rem;
          color: black;
          line-height: 1.4;
        }

        .explore-button {
          display: block;
          background: blue; 
          color: white; /* Changed text color to white for better contrast */
          text-align: center;
          padding: 12px 16px 12px 24px;
          border-radius: 4px;
          font-weight: 5
          0;
        }

        .explore-button:hover {
          background: #15325F;
          color:white;
        }

        .below-img{
          padding:5px;
        }

    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <img src="${this.image}" alt="${this.title || "Campus image"}"/>
      <div style="padding:5px; background-color:#15325F;"></div>
      <div class="below-img">
        <div class="title-bar">${this.title}</div>
        <div class="description">${this.desc}</div>
        <a href="${this.link}" class="explore-button">Explore ></a>
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