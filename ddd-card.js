/**
 * Copyright 2025 heydahsaad
 * @license Apache-2.0, see LICENSE for full text.
 */
import { html, css } from "lit";
import { DDDPulseEffectSuper, DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card-list`
 * 
 * @demo index.html
 * @element ddd-card-list
 */
export class DddCard extends DDDPulseEffectSuper(I18NMixin(DDD)) {

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
          //background: var(--ddd-theme-default-shrineLight); ;
          /* background-color: var(--ddd-theme-primary, #caccd0); */
          border-radius: 8px;
          box-shadow: 0 2px 9px rgba(0,0,0,0.4);
          overflow: hidden;
          max-width: 400px;
          min-width: 300px;
        }

        img{
          border-bottom: 8px solid var(--ddd-theme-primary); 
        }

        .title {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--ddd-theme-default-nittanyNavy);
        }

        .description {
          color: var(--ddd-theme-default-potential70);
          padding:10px 0px 10px 0px;
        }

        a.explore-button {
          display: block;
          text-align: center;
          padding: 12px 16px 12px 24px;
          border-radius: 4px;
          font-weight: 50px;
          background: var(--ddd-theme-default-beaverBlue);
          color: var(--ddd-theme-default-roarMaxlight);
        }

        .explore-button:hover {
          background: var(--ddd-theme-default-potential75);
          color:var(--ddd-theme-default-roarMaxlight);
          text-decoration: none;
        }

        .below-img{
          padding:16px 16px 20px;
          min-width:100px;
          min-height: 200px;
        }

        .card-wording{
          min-height:250px;
          /* align-content: center; */
        }

    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <img src="${this.image}" alt="${this.title || "Campus image"}"/>
      <div class="below-img">
        <div class="card-wording">
          <div class="title">${this.title}</div>
          <div class="description">${this.desc}</div>
        </div>
        <a href="${this.link}" class="explore-button">Explore ></a>
      </div>
    `;
  } 

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return {
      type: "element",
      canScale: true,

      canEditSource: true,
      gizmo: {
        title: "Call to action",
        description: "A simple button with a link to take action.",
        icon: "image:crop-16-9",
        color: "orange",
        tags: ["Layout", "marketing", "button", "link", "url", "design", "cta"],
        handles: [
          {
            type: "link",
            source: "link",
            title: "label",
          },
        ],
        meta: {
          author: "HAXTheWeb core team",
        },
      },
      settings: {
        configure: [
          {
            property: "label",
            title: "Label",
            description: "Link label",
            inputMethod: "textfield",
            required: true,
          },
          {
            property: "link",
            title: "Link",
            description: "Enter a link to any resource",
            inputMethod: "haxupload",
            noVoiceRecord: true,
            noCamera: true,
            required: true,
          },
          {
            property: "accentColor",
            title: "Accent Color",
            description: "An optional accent color.",
            inputMethod: "colorpicker",
            icon: "editor:format-color-fill",
          },
          {
            property: "hideIcon",
            title: "Hide icon",
            description: "Hide the icon used to accent text",
            inputMethod: "boolean",
          },
        ],
        advanced: [
          {
            property: "icon",
            title: "Icon",
            description: "Action link icon",
            inputMethod: "iconpicker",
          },
        ],
      },
      saveOptions: {
        unsetAttributes: ["colors", "element-visible"],
      },
      demoSchema: [
        {
          tag: "simple-cta",
          properties: {
            label: "Click to learn more",
            link: "https://haxtheweb.org/",
          },
          content: "",
        },
      ],
    };
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);