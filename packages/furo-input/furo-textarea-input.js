import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import  "@furo/layout/furo-icon";
import {Helper} from "./lib/helper";

/**
 * `furo-textarea-input`
 *
 *  <furo-textarea-input></furo-textarea-input>
 *
 * @summary Textarea input field
 * @customElement
 * @polymer
 * @demo demo-furo-textarea-input Input samples
 * @appliesMixin FBP
 */
class FuroTextareaInput extends FBP(LitElement) {
  constructor(){
    super();
    this.valid = true;
  }
  _FBPReady() {
    super._FBPReady();

    this._value = this.value || "";
    this._FBPAddWireHook("--inputInput", (e) => {
      let input = e.composedPath()[0];

      this.valid = input.validity.valid;
      this._float = !!input.value;

      if (input.validity.valid) {
        this.value = input.value;
        /**
         * @event value-changed
         * Fired when value has changed from inside the component
         * detail payload: {String} the text value
         */
        let customEvent = new Event('value-changed', {composed: true, bubbles: true});
        customEvent.detail = this.value;
        this.dispatchEvent(customEvent);
      }else {

        /**
         * @event input-invalid
         * Fired when input value is invalid
         * detail payload: {Object} the validity object of input
         */
        let customEvent = new Event('input-invalid', {composed: true, bubbles: false});
        customEvent.detail = input.validity;
        this.dispatchEvent(customEvent);
      }
    });
  }


  /**
   * Updater for the min => minlength attr
   * @param value
   */
  set min(value) {
    Helper.UpdateInputAttribute(this,"minlength", value);
  }

  /**
   * Updater for the max => maxlength attr
   * @param value
   */
  set max(value) {
    Helper.UpdateInputAttribute(this,"maxlength", value);
  }

  /**
   * Updater for the rows attr
   * @param value
   */
  set rows(value) {
    Helper.UpdateInputAttribute(this,"rows", value);
  }

  /**
   * Updater for the cols attr*
   * @param value
   */
  set cols(value) {
    Helper.UpdateInputAttribute(this,"cols", value);
  }


  set _value(v){
    this._float = !!v;
      this._FBPTriggerWire("--value",v)
  }

  static get properties() {
    return {
      /**
       * set this to true to indicate errors
       */
      error: {type: Boolean, reflect: true},
      /**
       * The start value. Changes will be notified with the `@-value-changed` event
       */
      value: {
        type: String
      },
      /**
       * The label attribute is a string that provides a brief hint to the user as to what kind of information is expected in the field. It should be a word or short phrase that demonstrates the expected type of data, rather than an explanatory message. The text must not include carriage returns or line feeds.
       */
      label: {
        type: String,
        attribute: true
      },
      /**
       * The maximum number of characters (as UTF-16 code units) the user can enter into the textarea input. This must be an integer value 0 or higher. If no maxlength is specified, or an invalid value is specified, the textarea input has no maximum length. This value must also be greater than or equal to the value of minlength.
       */
      max: {
        type: Number
      },
      /**
       * The minimum number of characters (as UTF-16 code units) the user can enter into the textarea input. This must be an non-negative integer value smaller than or equal to the value specified by maxlength. If no minlength is specified, or an invalid value is specified, the textarea input has no minimum length.
       */
      min: {
        type: Number
      },
      /**
       * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.
       *
       * If it is not specified, the default value is 20.
       */
      cols: {
        type: Number
      },
      /**
       * The number of visible text lines for the control.
       */
      rows: {
        type: Number
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
        type: Boolean, reflect: true
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      readonly: {
        type: Boolean, reflect: true
      },
      /**
       * helper for the label
       */
      _float: {
        type: Boolean
      },
      /**
       * Lets the placeholder always floating
       */
      float:{
        type:Boolean
      },
      /**
       * The hint text for the field.
       */
      hint: {
        type: String,
      },
      /**
       * Text for errors
       */
      errortext: {
        type: String,
      },
      /**
       * html input validity
       */
      valid:{
        type:Boolean,
        reflect:true
      },
      /**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */
      condensed: {
        type: Boolean
      },
      /**
       * Set this attribute to switch to filled layout. Filled is without the borders around the field.
       */
      filled: {
        type: Boolean
      }

    };
  }
  /**
   * Sets the value for the input field.
   * @param {String} string
   */
  setValue(string) {
    this._value = string;
    this.value = string;
  }



  /**
   * Setter method for errortext
   * @param {String} errortext
   * @private
   */
  set errortext(v) {
    this._errortext = v;
    this.__initalErrorText = v;
  }

  /**
   * Getter method for errortext
   * @private
   */
  get errortext() {
    return this._errortext;
  }

  /**
   * Set the field to error state
   *
   * @param [{String}] The new errortext
   */
  setError(text) {
    if (typeof text === "string") {
      this._errortext = text;
    }
    this.error = true;
  }

  /**
   * clears the error and restores the errortext.
   */
  clearError(){
    this.error = false;
    this._errortext = this.__initalErrorText;
  }

  /**
   * Sets the focus on the field.
   */
  focus() {
    this._FBPTriggerWire("--focus");
  }

  /**
   * Sets the field to readonly
   */
  disable(){
    this.readonly = true;
  }
  /**
   * Makes the field writable.
   */
  enable(){
    this.readonly = false;
  }
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
            margin: 0 0 10px 0;
            padding: 9px 0 0 0;
            font-family: "Roboto", "Noto", sans-serif;
            line-height: 1.5;
        }
       

        :host([hidden]) {
            display: none;
        }


        textarea {
            border: none;
            background: none;
            font-size: 12px;
            margin: 0;
            line-height: normal;
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
            bottom: -2px;
            border-bottom: 1px solid rgba(0, 0, 0, .12);
        }

        label {
            position: absolute;
            top: 12px;
            color: rgba(0, 0, 0, .26);
            font-size: 12px;
            pointer-events: none;
            display: block;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-align: left;
        }

     
        
        label[float="true"] {
            color: var(--on-background, #333333);
            font-size: 12px;
            top: -4px;
            visibility: visible;
        }

        * {
            transition: all 150ms ease-out;
        }

        .hint, .errortext {
            position: absolute;
            bottom: -17px;
            font-size: 12px;
            color: transparent;
            white-space: nowrap;
            pointer-events: none;
        }

        :host(:focus-within) .hint {
            color: var(--app-hint-color);
            transition: all 550ms ease-in;
        }

        
        :host([error]) .border {
            border-color: var(--error, red);
            border-width: 1px;
        }

        :host([error]) .errortext {
            display: block;
        }
        .errortext {
            color: var(--error, red);
            display: none;
        }


        :host(:focus-within)  .errortext{
            display: none;
        }
        
        :host(:focus-within) label[float="true"] {
            color: var(--accent, #333333);
        }
        
        :host(:focus-within) .border {
            border-color: var(--accent, #3f51b5);
            border-width: 1px;
        }
        :host([error]:focus-within) .border {
            border-color: var(--error, red);
            border-width: 1px;
        }
    `
  }

  /**
   *
   * @return {TemplateResult | TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html` 
      <textarea id="input" ?autofocus=${this.autofocus} ?readonly=${this.disabled || this.readonly} 
        ƒ-.value="--value"  @-input="--inputInput(*)"   ƒ-focus="--focus"></textarea>
      <div class="border"></div>
      <label float="${this._float}" for="input">${this.label}</label>  
      <div class="hint">${this.hint}</div>
      <div class="errortext">${this.errortext}</div>
    `;
  }

}

window.customElements.define('furo-textarea-input', FuroTextareaInput);
