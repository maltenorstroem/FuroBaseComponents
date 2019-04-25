import {LitElement, html} from 'lit-element';
import {FBP} from "@furo/fbp";
import {FuroInputBase} from "./FuroInputBase.js";

/**
 * `furo-input-number`
 * Simple number input element which uses a native `<input type="number">` tag
 *
 * Tags: input
 * @summary number input element
 * @customElement
 * @polymer
 * @mixes FBP
 * @mixes FuroInputBase
 */
class FuroNumberInput extends FBP(FuroInputBase(LitElement)) {
  static get properties() {
    return {
      max: {type: Number, attribute: true},
    };
  }

  render() {
    // language=HTML
    return html`
<style>
${this._sharedStyle}
</style>
     
      
      <input id="input" ?autofocus=${this.autofocus} ?disabled=${this.disabled}  type="number" list="datalist" ƒ-.value="--value" @-input="--inputInput(*.path.0)"   ƒ-focus="--focusReceived">
      <div class="border"></div>
      <label float="${this._float}" for="input">${this._label}</label>  
      <div class="hint">${this.hint}</div>
 
    `;
  }


}

customElements.define('furo-number-input', FuroNumberInput);
