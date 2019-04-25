import {LitElement, html} from 'lit-element';
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
class FuroDateInput extends FBP(FuroInputBase(LitElement)) {

  render() {
    // language=HTML
    return html`
<style>
${this._sharedStyle}
</style>
     
      
      <input id="input" ?autofocus=${this.autofocus} ?disabled=${this.disabled} type="date" list="datalist" ƒ-.value="--value" @-input="--inputInput(*.path.0)"   ƒ-focus="--focusReceived">
      <div class="borderBig"></div>
      <label float="true" for="input">${this._label}</label>  
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

customElements.define('furo-date-input', FuroDateInput);
