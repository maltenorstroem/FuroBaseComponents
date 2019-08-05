import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"

import {FBP} from "@furo/fbp";
import {FuroInputBase} from "./FuroInputBase.js";

/**
 * `furo-input-date`
 * Simple date input element which uses a native `<input type="date">` tag
 *
 * Tags: input
 * @summary date input element
 * @customElement
 * @polymer
 * @mixes FBP
 * @mixes FuroInputBase
 */
class FuroDataDateInput extends FBP(FuroInputBase(LitElement)) {

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: inline-block;
            position: relative;
            font-size: 12px;
            box-sizing: border-box;
            margin: 0 0 14px 0;
            padding: 8px 0 2px 0;
            height: 28px;
            font-family: "Roboto", "Noto", sans-serif;
            line-height: 1.5;
        }

        :host([hidden]) {
            display: none;
        }

        :host([error]) .border {
            border-color: red;
            border-width: 1px;
        }


        input {
            border: none;
            background: 0 0;
            font-size: 12px;
            margin: 0;
            padding: 0;
            width: 100%;
            text-align: left;
            color: inherit;
            outline: none;
        }

        .border {
            position: absolute;
            width: 100%;
            height: 1px;
            top:29px;
            border: none;
            border-bottom: 1px solid rgba(0, 0, 0, .12);
         }

        label {
            position: absolute;
            pointer-events: none;
            display: block;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-align: left;
            color: var(--primary, #3f51b5);
            font-size: 10px;
            top: -4px;
            visibility: visible;
         }

       

        * {
            transition: all 150ms ease-out;
        }

        .hint {
            position: absolute;
            top: 30px;
            font-size: 10px;
            color: transparent;
            white-space: nowrap;
            pointer-events: none;
         }

        :host(:focus-within) .hint {
            color: var(--app-hint-color);
            transition: all 550ms ease-in;
        }

        :host([error]) .border {
            border-color: red;
            border-width: 1px;
        }

        :host(:focus-within) .border {
            border-color: var(--primary, #3f51b5);
            border-width: 1px;
        }
    `
  }

  render() {
    // language=HTML
    return html`     
      <input id="input" ?autofocus=${this.autofocus} ?disabled=${this.disabled} type="date" list="datalist" ƒ-.value="--value" @-input="--inputInput(*)"   ƒ-focus="--focusReceived">
      <div class="border"></div>
      <label for="input">${this._label}</label>  
      <div class="hint">${this.hint}</div>
 
    `;
  }

  constructor() {
    super();
  }

  _init() {
    super._init();
    this._float = true;
  }

  bindData(d) {

    // capture defaults
    // todo eow, eom, bow, bow, ...
    if (d._meta.default === "today") {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = today.getFullYear();

      today = yyyy + '-' + mm + '-' + dd ;
      d.value = today
    }

    super.bindData(d);


  }

}

customElements.define('furo-data-date-input', FuroDataDateInput);
