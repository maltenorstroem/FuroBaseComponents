import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import '@furo/icon/src/furo-icon.js';
import './furo-radio-button.js';

/**
 * `furo-radio-button-input`
 *
 * radio-button input element which uses a custom `<furo-radio-button>` element. it has also hint, label and error message
 *
 * radio-button allow the user to select multiple options from a set.
 *
 * ### Sample
 *  <furo-demo-snippet>
 *   <template>
 *    <furo-radio-button-input label="This is the Label"></furo-radio-button-input>
 *   </template>
 *  </furo-demo-snippet>
 *
 * ### Styling
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default  | Fallback
 * ----------------|-------------|----------|----------
 * `--input-hint-color` | Color of hint text | #999999 | --
 * `--input-error-text-color` | Color of error text | `--error` | red
 * `--input-active-label-color` | Color of the label when active  | `--primary` | #3f51b5
 * `--input-activation-indicator-color` | Color of activation indicator when not selected| `--disabled` | #333333
 * `--input-error-activation-indicator-color` | Color of activation indicator in error state | `--error` | red
 * `--input-error-text-color` | Color of error text | `--error` | red
 * `--input-active-activation-indicator-color` | Color of factivation indicator in active  state   | `--primary` | #3f51b5
 *
 * @summary radio-button input
 * @customElement
 * @demo demo-furo-radio-button-input Basic demo
 * @appliesMixin FBP
 */
export class FuroRadioButtonInput extends FBP(LitElement) {
  /**
   * @event ALL_BUBBLING_EVENTS_FROM_furo-radio-button
   *
   * All bubbling events from [furo-radio-button](furo-radio-button) will be fired, because furo-radio-button-input uses furo-radio-button internally.
   *
   */

  constructor() {
    super();
    this.valid = true;
  }

  _FBPReady() {
    super._FBPReady();
    // init value , when undefined then false
    this._value = !!this.value;
    this._FBPAddWireHook('--labelClicked', () => {
      if (!this.disabled) {
        this.toggle();
      }
    });
  }

  set _value(v) {
    this._FBPTriggerWire('--value', v);
  }

  set checked(v) {
    if (v) {
      this.check();
    } else {
      this.uncheck();
    }
  }

  static get properties() {
    return {
      /**
       * set this to true to indicate errors
       */
      error: { type: Boolean, reflect: true },

      /**
       * The value of radio-button with true (checked) or false (unchecked). Changes will be notified with the `@-value-changed` event
       * This is different from the native attribute `value` of the input radio-button
       */
      value: {
        type: Boolean,
      },

      /**
       * The label attribute is a string that provides a brief hint to the user as to what kind of information is expected in the field. It should be a word or short phrase that demonstrates the expected type of data, rather than an explanatory message. The text must not include carriage returns or line feeds.
       */
      label: {
        type: String,
        reflect: true,
      },

      /**
       * A Boolean attribute which, if present, means this radio-button is checked.
       */
      checked: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Set this attribute to autofocus the input field.
       */
      autofocus: {
        type: Boolean,
        reflect: true,
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      readonly: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The hint text for the field.
       */
      hint: {
        type: String,
        reflect: true,
      },
      /**
       * Text for errors
       */
      errortext: {
        type: String,
        reflect: true,
      },
      /**
       * html input validity
       */
      valid: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */
      condensed: {
        type: Boolean,
        reflect: true,
      },
      /**
       * error text
       */
      _errortext: {
        type: String,
      },
    };
  }

  /**
   * Sets the value for the checkbox.
   * @param {Boolean} v
   */
  setValue(v) {
    this.value = !!v;
    this._value = !!v;
  }

  /**
   * toggle the checkbox
   */
  toggle() {
    this._FBPTriggerWire('--toggle');
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
    if (typeof text === 'string') {
      this._errortext = text;
    }
    this.error = true;
  }

  /**
   * clears the error and restores the errortext.
   */
  clearError() {
    this.error = false;
    this._errortext = this.__initalErrorText;
  }

  /**
   * Sets the focus on the field.
   */
  focus() {
    this._FBPTriggerWire('--focus');
  }

  /**
   * Sets the field to readonly
   */
  disable() {
    this.readonly = true;
  }

  /**
   * Makes the field writable.
   */
  enable() {
    this.readonly = false;
  }

  /**
   * check the radio-button
   */
  check() {
    this._value = true;
  }

  /**
   * uncheck the radio-button
   */
  uncheck() {
    this._value = false;
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroRadioButtonInput') ||
      css`
        /* https://material.io/design/components/text-fields.html#theming */
        :host {
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          margin: 0;
          height: 56px;
          width: 300px;
          margin: 10px 0 15px 0;
        }

        :host([hidden]) {
          display: none;
        }

        :host([condensed]) {
          margin-top: 12px;
        }

        .wrapper {
          position: relative;
          padding: 0;
          box-sizing: border-box;
          height: 56px;
        }

        label {
          line-height: 56px;
        }

        .ripple-line {
          display: none;
          position: absolute;
          width: 100%;
          height: 1px;
          top: 54px;
          border: none;
          border-bottom: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
        }

        * {
          transition: all 200ms ease-out;
        }

        .hint,
        .errortext {
          position: absolute;
          bottom: -0;
          font-size: 12px;
          color: transparent;
          padding-left: 42px;
          white-space: nowrap;
          pointer-events: none;
        }

        :host(:focus-within) .hint {
          color: var(--input-hint-color, #999999);
          transition: all 550ms ease-in;
        }

        :host([error]) .errortext {
          display: block;
        }

        .errortext {
          color: var(--input-error-text-color, var(--error, red));
          display: none;
        }

        label {
          font-size: 16px;
          color: inherit;
          cursor: pointer;
        }

        :host(:focus-within) label,
        :host(:focus-within) label {
          color: var(--input-active-label-color, var(--primary, #3f51b5));
          border-color: var(--input-active-label-color, var(--primary, #3f51b5));
        }

        :host(:focus-within) .ripple-line {
          border-color: var(--input-active-activation-indicator-color, var(--primary, #3f51b5));
          border-width: 2px;
        }

        :host:focus-within) label {
          border-color: var(--input-active-activation-indicator-color, var(--primary, #3f51b5));
          border-width: 2px;
        }

        :host([error]:focus-within) label,
        :host([error]:focus-within) .ripple-line {
          border-color: var(--input-error-text-color, var(--error, red));
          border-width: 2px;
        }

        :host([error]:focus-within) label {
          color: var(--input-error-text-color, var(--error, red));
        }

        :host([error]:focus-within) .hint {
          display: none;
        }

        :host([error]) .ripple-line,
        :host([error]) label {
          border-color: var(--input-error-activation-indicator-color, var(--error, red));
        }

        :host(:focus-within:not([valid])) label {
          color: var(--input-error-text-color, var(--error, red));
        }

        :host([condensed]) label,
        :host([condensed]) label {
          line-height: 40px;
        }

        :host([condensed]) input {
          top: 12px;
        }

        :host([condensed]) .wrapper {
          height: 40px;
        }

        :host([condensed]) .ripple-line {
          top: 38px;
        }

        :host([condensed]) {
          height: 40px;
        }

        furo-radio-button {
          position: absolute;
          top: 8px;
        }

        label {
          position: absolute;
          top: 0px;
          left: 42px;
          right: 0;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }

        :host([condensed]) furo-radio-button {
          top: 3px;
        }
      `
    );
  }

  render() {
    // language=HTML
    return html`
      <div class="wrapper">
        <furo-radio-button
          type="radio-button"
          id="input"
          ?autofocus=${this.autofocus}
          ?disabled=${this.disabled || this.readonly}
          ?condensed=${this.condensed}
          ƒ-set-value="--value"
          ƒ-focus="--focus"
          ƒ-toggle="--toggle"
        ></furo-radio-button>
        <label for="input" @-click="--labelClicked,--focus">${this.label}</label>
      </div>

      <div class="ripple-line"></div>
      <div class="hint">${this.hint}</div>
      <div class="errortext">${this.errortext}</div>
    `;
  }
}

window.customElements.define('furo-radio-button-input', FuroRadioButtonInput);
