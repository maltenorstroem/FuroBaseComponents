import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/input/furo-textarea-input";

import {CheckMetaAndOverrides} from "./lib/CheckMetaAndOverrides";
import {Helper} from "./lib/helper";

/**
 * `furo-data-textarea-input`
 * Binds a entityObject field to a furo-textarea-input field
 *
 * <sample-furo-data-textarea-input></sample-furo-data-textarea-input>
 *
 * Tags: input
 * @summary Bind a entityObject.field to a textarea input
 * @customElement
 * @demo demo-furo-data-textarea-input Data binding
 * @mixes FBP
 */
class FuroDataTextareaInput extends FBP(LitElement) {

  /**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {String} the text value
   *
   * Comes from underlying component furo-textarea-input. **bubbles**
   */

  constructor() {
    super();
    this.error = false;
    this.disabled = false;

    this._FBPAddWireHook("--valueChanged", (val) => {
      // by valid input reset meta and constraints
      CheckMetaAndOverrides.CheckAttributeOverrides(this);

      if (this.field) {
        this.field.value = val;
      }
    });

    this._FBPAddWireHook("--inputInvalid", (val) => {
      // val is a ValidityState
      // https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
      if (val) {
        if (val.tooShort) {
          this._hint = this._minErrorMessage;
        }
        else if(val.tooLong)
        {
          this._hint = this._maxErrorMessage;
        }

        this.requestUpdate();
      }
    });
  }


  /**
   * Updater for the min => minlength attr
   * @param value
   */
  set _min(value) {
    Helper.UpdateInputAttribute(this, "min", value);
  }

  /**
   * Updater for the max attr
   * @param value
   */
  set _max(value) {
    Helper.UpdateInputAttribute(this, "max", value);
  }

  /**
   * Updater for the cols attr
   * @param value
   */
  set _cols(value) {
    Helper.UpdateInputAttribute(this, "cols", value);
  }

  /**
   * Updater for the rows attr*
   * @param value
   */
  set _rows(value) {
    Helper.UpdateInputAttribute(this, "rows", value);
  }

  /**
   * Updater for the label attr
   * @param value
   */
  set _label(value) {
    Helper.UpdateInputAttribute(this, "label", value);
  }

  /**
   * Updater for the hint attr
   * @param value
   */
  set _hint(value) {
    Helper.UpdateInputAttribute(this, "hint", value);
  }

  /**
   * Updater for the errortext attr
   * @param value
   */
  set errortext(value) {
    Helper.UpdateInputAttribute(this, "errortext", value);
  }


  /**
   * todo , add more attributes like cols, rows, spellcheck..
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
   */
  static get properties() {
    return {

      /**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      label: {
        type: String,
      },
      /**
       * Overrides the required value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      required: {
        type: Boolean
      },
      /**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      hint: {
        type: String,
      },
      /**
       * Overrides the min value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      min: {
        type: Number,
      },
      /**
       * Overrides the max value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      max: {
        type: Number,
      },
      /**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      readonly: {
        type: Boolean,
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      disabled: {
        type: Boolean, reflect: true
      },

      /**
       * Set this attribute to autofocus the input field.
       */
      autofocus: {
        type: Boolean
      },
      /**
       * html input validity
       */
      valid: {
        type: Boolean,
        reflect: true
      },
      /**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */
      condensed: {
        type: Boolean
      },
      /**
       * passes always float the label
       */
      float: {
        type: Boolean
      },
      /**
       * The number of visible text lines for the control.
       */
      rows: {
        type: Number
      },
      /**
       * The visible width of the text control
       */
      cols: {
        type: Number
      }
    }
  }

  /**
   * Bind a entity field to the textarea-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    Helper.BindData(this, fieldNode);
  }


  _updateField() {

    this.disabled = this.field._meta.readonly ? true : false;

    //mark incomming error
    if (!this.field._isValid) {
      this.error = true;
      this.errortext = this.field._validity.description;
    }
    this._FBPTriggerWire('--value', this.field.value);
    this.requestUpdate();
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
        }

        :host([hidden]) {
            display: none;
        }

        furo-textarea-input{
            width: 100%;
        }
    `
  }

  render() {
    // language=HTML
    return html` 
       <furo-textarea-input  id="input"
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly || this.disabled}                 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}"                         
          ?required=${this._required}    
          @-value-changed="--valueChanged"
          @-input-invalid="--inputInvalid"
          ƒ-set-value="--value"></furo-textarea-input>      
    `;
  }

}

customElements.define('furo-data-textarea-input', FuroDataTextareaInput);
