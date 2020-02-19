import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/layout/furo-ripple";
/**
 * `furo-chip`
 *
 * Chips are compact elements that allow users to enter information, select a choice, filter content, or trigger an action.
 *
 *
 * ### Sample
 *  <furo-demo-snippet>
 *   <template>
 *    <furo-chip  selected condensed text="selected"  ></furo-chip>
 *    <furo-chip  condensed text="selected"  ></furo-chip>
 *    <br/>
 *    <br/>
 *    <br/>
 *    <furo-chip selected outlined  leading-icon="schedule" trailing-icon="close" text="hallo world" ></furo-chip>
 *    <furo-chip  outlined  leading-icon="schedule" trailing-icon="close" text="hallo world" ></furo-chip>
 *
 *   </template>
 *  </furo-demo-snippet>
 *
 * ### Styling
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default  | Fallback
 * ----------------|-------------|----------|----------
 * `--input-chip-unselected--bg-color` | background color of the unselected chip | `--background` | hex: #eeeeee
 * `--input-chip-outlined-unselected--bg-color` | background color of the unselected outlined chip |  | hex: #ffffff
 * `--input-chip-selected-bg-color` | background color of the selected chip | `--primary` | hex: #4caf4f
 * `--input-chip-selected-color` |  color of the selected chip | `--on-primary` | hex: #ffffff
 * `--input-chip-outlined-selected-bg-color-rgb` | rgba color of the background of the selected chip |  `--primary-rgb` with `--state-active` opacity | rgba: 76, 175, 80, 0.10
 * `--input-chip-outlined-selected-text-color` |  color of the text of the outlined selected chip |  `--primary`  | hex: #4caf50
 * `--input-chip-outlined-selected-border-color` | border color of the outlined selected chip |  `--on-background`  | hex: #000000
 * `--input-chip-outlined-selected-hover-bg-color-rgb` | rgba color of the background of the outlined selected chip by hovering|  `--on-background-rgb` with opacity `--state-hover` | rgba:  33, 33, 33, 0.04
 * `--input-chip-unselected-hover-bg-color-rgb` | rgba color of the background of the unselected chip by hovering|  `--on-background-rgb` with opacity `--state-hover` | rgba:  33, 33, 33, 0.04
 * `--input-chip-unselected-active-bg-color-rgb` | rgba color of the background of the unselected chip by clicking|  `--on-background-rgb` with opacity `--state-active` | rgba:  33, 33, 33, 0.10
 * `--input-chip-unselected-focus-bg-color-rgb` | rgba color of the background of the unselected chip by focusing|  `--on-background-rgb` with opacity `--state-focus` | rgba:  33, 33, 33, 0.12
 * `--input-chip-selected-active-bg-color-rgb` | rgba color of the background of the selected chip by clicking|  `--primary-rgb` with opacity `--state-active` | rgba:  76, 175, 80, 0.10
 * `--input-chip-selected-focus-bg-color-rgb` | rgba color of the background of the selected chip by focusing|  `--primary-rgb` with opacity `--state-focus` | rgba:  76, 175, 80, 0.12
 * `--input-chip-disabled-selected-bg-color-rgb` | rgba color of the background of the selected disabled chip|  `--on-background-rgb` with opacity `--state-disabled` | rgba:  33, 33, 33, 0.38
 * `--input-chip-outlined-disabled-selected-bg-color-rgb` | rgba color of the background of the outlined selected disabled chip|  `--on-background-rgb` with opacity `--state-disabled` | rgba:  33, 33, 33, 0.38
 *
 * @summary chips
 * @customElement
 * @demo demo-furo-chip Basic demo
 * @appliesMixin FBP
 */
class FuroChip extends FBP(LitElement) {


  constructor() {
    super();
  }

  _FBPReady() {
    super._FBPReady();
    this._FBPAddWireHook("--inputInput", (e) => {

      let input = e.composedPath()[0];

      this.selected = input.checked;
      this.value = input.checked;
    });

    this.addEventListener("click", (e)=>{
      e.stopPropagation();
      this.toggle();
    });

    this._FBPAddWireHook("--focusReceived", (e) => {
      this.focused = true;
    });

    this._FBPAddWireHook("--focusOutReceived", (e) => {
      this.focused = false;
    });

  }

  /**
   * Sets the focus on the chip.
   */
  focus() {
    this._FBPTriggerWire("--focus");
  }

  /**
   * select the chip
   */
  select() {
    this.selected = true;
    this.value = true;
  }

  /**
   * deselect the chip
   */
  deselect() {
    this.selected = false;
    this.value = false;
  }

  /**
   * toggle the chip
   */
  toggle() {
    this.shadowRoot.getElementById("input").click();
  }

  /**
   * Sets the value for the chip
   * The value of chip with true (selected) or false (unselected). Changes will be notified with the `@-value-changed` event
   * This is different from the native attribute `value` of the input chip
   * @param {boolean} v
   */
  setValue(v) {
    this.selected = !!v;
    this.value = !!v;
  }

  set value(v) {

    this._value = !!v;

    /**
     * @event value-changed
     * Fired when value has changed from inside the component
     * detail payload: {String} the text value
     */
    let customEvent = new Event('value-changed', {composed: true, bubbles: true});
    customEvent.detail = this.value;
    this.dispatchEvent(customEvent);

    if (this.selected) {

      /**
       * @event selected
       * Fired when the chip is selected
       * detail payload: {String} the text value
       */
      let customEvent = new Event('selected', {composed: true, bubbles: true});
      customEvent.detail = this.value;
      this.dispatchEvent(customEvent);
    }
    else {
      /**
       * @event unselected
       * Fired when the chip is unselected
       * detail payload: {String} the text value
       */
      let customEvent = new Event('unselected', {composed: true, bubbles: true});
      customEvent.detail = this.value;
      this.dispatchEvent(customEvent);
    }
  }

  get value() {
    return this._value;
  }

  static get properties() {
    return {

      /**
       * The value of chip with true (selected) or false (unselected). Changes will be notified with the `@-value-changed` event
       * This is different from the native attribute `value` of the input chip
       */
      value: {
        type: Boolean
      },

      /**
       * Set this attribute to autofocus the input field.
       */
      autofocus: {
        type: Boolean
      },

      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      disabled: {
        type: Boolean
      },

      /**
       * A Boolean attribute which, if present, means this chip is selected.
       */
      selected: {
        type: Boolean, reflect: true
      },

      /**
       * A Boolean attribute which, if present, means this is focused.
       */
      focused: {
        type: Boolean, reflect: true
      },

      /**
       * Text in chip.
       */
      text: {
        type: String
      },
      /**
       * A Boolean attribute which, if present, means the chip is outlined.
       */
      outlined: {
        type: Boolean
      },

      /**
       * the leading icon of the chip.
       */
      leadingIcon: {
        type: String,
        attribute: "leading-icon"
      },

      /**
       * the trailing icon of the chip.
       */
      trailingIcon: {
        type: String,
        attribute: "trailing-icon"
      },
    };
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('FuroChoiceChip') || css`
            /* https://material.io/components/chips/#choice-chips*/
            
            :host([hidden]) {
                display: none;
            }

            /* The wrapper */
            :host {
                width: auto;
                position: relative;
                box-sizing: border-box;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                height: 40px;
                border-radius: 20px;
                background-color: var(--input-chip-unselected--bg-color, var(--background, #eeeeee));
                padding: 8px;
                display: inline-block;

            }
            /* input chip*/
            :host input {
                z-index: -1;
                position: absolute;
                height: 0;
                width: 0;
            }

            :host([outlined]){
                background-color: var(--input-chip-outlined-unselected--bg-color, #ffffff);
                border: solid 1px;
            }

            /* selected choice chip  */
            :host([selected]){
                background-color: var(--input-chip-selected-bg-color, var(--primary, #4caf4f));
                color: var(--input-chip-selected-color, var(--on-primary, #ffffff));
            }

            :host([outlined][selected]){
                background-color: rgba( var(--input-chip-outlined-selected-bg-color-rgb, var(--primary-rgb, 76, 175, 80)), var(--state-active, 0.10) ) ;
                color: var(--input-chip-outlined-selected-text-color, var(--primary, #4caf50));
                border: solid 1px;
                border-color: var(--input-chip-outlined-selected-border-color, var(--on-background, #000000))
            }
            
            :host([outlined][selected]:hover) {
                background-color: rgba( var(--input-chip-outlined-selected-hover-bg-color-rgb, var(--on-background-rgb, 33, 33, 33)), var(--state-hover, 0.04) ) ;
            }
            
            /* outlined selected choice chip when hovering */
            :host([selected]:hover) {
                background-color: var(--input-chip-selected-hover-bg-color, var(--primary, #4caf4f));
            }
            
            /* hover */
            :host(:hover){
                background-color: rgba( var(--input-chip-unselected-hover-bg-color-rgb, var(--on-background-rgb, 33, 33, 33)), var(--state-hover, 0.04) ) ;
            }

            /* unselected chip when pressing */
            :host:active {
                background-color: rgba( var(--input-chip-unselected-active-bg-color-rgb, var(--on-background-rgb, 33, 33, 33)), var(--state-active, 0.10) ) ;
            }

            /* unselected chip when focusing */
            :host([focused]) {
                background-color: rgba( var(--input-chip-unselected-focus-bg-color-rgb, var(--on-background-rgb, 33, 33, 33)), var(--state-focus, 0.12) ) ;
            }

            /* unselected chip when pressing */
            :host([selected]):active {
                background-color: rgba( var(--input-chip-selected-active-bg-color-rgb, var(--primary-rgb, 76, 175, 80)), var(--state-active, 0.10) ) ;
            }

            /* selected chip when focusing */
            :host([selected][focused]) {
                background-color: rgba( var(--input-chip-selected-focus-bg-color-rgb, var(--primary-rgb, 76, 175, 80)), var(--state-focus, 0.12) ) ;
            }
            
            /* disabled chip selected */
            :host([selected][disabled]){
                color: var(--input-chip-selected-color, var(--on-primary, #ffffff));
                background-color: rgba( var(--input-chip-disabled-selected-bg-color-rgb, var(--on-background-rgb, 33, 33, 33)), var(--state-disabled, 0.38) ) ;
            }

            /* disabled chip selected */
            :host([outlined][selected][disabled]){
                color: var(--input-chip-selected-color, var(--on-primary, #ffffff));
                background-color: rgba( var(--input-chip-outlined-disabled-selected-bg-color-rgb, var(--on-background-rgb, 33, 33, 33)), var(--state-disabled, 0.38) ) ;
            }


            :host([disabled]) {
                cursor: default;
                background-color: rgba( var(--input-chip-disabled-selected-bg-color-rgb, var(--background-rgb, 33, 33, 33)), var(--state-disabled, 0.38) ) ;
            }
            /* disabled chip should have no ripple effect */
            :host([disabled]) furo-ripple{
               display: none;
            }

            /* disabled chip should have no hover effect */
            :host([selected][disabled]:hover){
                background-color: rgba( var(--input-chip-disabled-selected-bg-color-rgb, var(--on-background-rgb, 33, 33, 33)), var(--state-disabled, 0.38) ) ;
            }
            
            
            /* disabled chip should have no hover effect */
            :host([disabled]:hover){
                background-color: rgba( var(--input-chip-disabled-selected-bg-color-rgb, var(--background-rgb, 33, 33, 33)), var(--state-disabled, 0.38) ) ;
            }

            
            :host([condensed]) {
                height: 32px;
                padding: 4px;
                border-radius: 16px;

            }
            furo-ripple{
                border-radius: 20px;
            }
      
            span {
                margin: 0 8px;
                line-height: 24px;
            }
      
            furo-icon {
                margin-top:  -4px ;
            }
      
            .lead {
                margin-right: -4px;
            }

            .trail {
                margin-left: -4px;
            }
        `
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
          ${this.leadingIcon? html` <furo-icon class="lead" icon="${this.leadingIcon}"></furo-icon> `:html``}
          <input id="input" type="checkbox" ?checked=${this.selected}  ?autofocus=${this.autofocus} ?disabled=${this.disabled} 
                 ƒ-focus="--focus" @-input="--inputInput(*)" @-focusout="--focusOutReceived" @-focus="--focusReceived" @-blur="-^blur"  >
          <span>${this.text}</span>
          ${this.trailingIcon? html` <furo-icon class="trail" icon="${this.trailingIcon}"></furo-icon>`:html``}
          <furo-ripple></furo-ripple>
        `;
  }
}

customElements.define('furo-chip', FuroChip);
