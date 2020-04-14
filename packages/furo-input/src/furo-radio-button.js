import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import '@furo/layout/src/furo-ripple';
/**
 * `furo-radio-button`
 *
 * radiobutton input element which uses a native `<input type="radio">` tag.
 *
 * lements of type radio are generally used in radio groups—collections of radio buttons describing a set of related options.
 * Only one radio button in a given group can be selected at the same time. Radio buttons are typically rendered as small circles, which are filled or highlighted when selected.
 *
 * ### Sample
 *  <furo-demo-snippet>
 *   <template>
 *    <furo-radio-button></furo-radio-button>
 *   </template>
 *  </furo-demo-snippet>
 *
 * ### Styling
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default  | Fallback
 * ----------------|-------------|----------|----------
 * `--input-radiobutton-unselected-bg-color` | background color of the unchecked radiobutton | `--surface` | #ffffff
 * `--input-radiobutton-unselected-border-color` | border color of the unchecked radiobutton | `--separator` | #7E7E7E
 * `--input-radiobutton-unselected-hover-bg-color` | background color of the unchecked radiobutton by hovering | `--surface-light` | #F5F5F5
 * `--input-radiobutton-unselected-focus-bg-color` | background color of the unchecked radiobutton by focusing | `--surface-dark` | #DDDDDD
 * `--input-radiobutton-unselected-active-bg-color` | background color of the unchecked radiobutton by pressing | `--surface-dark` | #C0C0C0
 * `--input-radiobutton-selected-bg-color` | background color of the checked radiobutton | `--accent` | #6200FD
 * `--input-radiobutton-selected-hover-bg-color` | background color of the checked radiobutton by hovering | `--on-accent` | #D5C6E9
 * `--input-radiobutton-selected-focus-bg-color` | background color of the checked radiobutton by focusing | `--accent` | #6200FD
 * `--input-radiobutton-disabled-selected-bg-color` | background color of the checked disabled radiobutton | `--disable` | #B9B9B9
 * `--input-radiobutton-disabled-selected-border-color` | border color of the checked disabled radiobutton | `--disable` | #B9B9B9
 * `--input-radiobutton-disabled-unselected-bg-color` | background color of the unchecked disabled radiobutton | `--surface` | #ffffff
 * `--input-radiobutton-disabled-unselected-border-color` | border color of the unchecked disabled radiobutton | `--surface` | #aaaaaa
 * `--input-radiobutton-disabled-hover-bg-color` | background color of the unchecked disabled radiobutton by hovering| `--surface` | #ffffff
 *
 *
 * @summary radiobutton input
 * @customElement
 * @demo demo-furo-radio-button Basic demo
 * @appliesMixin FBP
 */
class FuroRadioButton extends FBP(LitElement) {
  _FBPReady() {
    super._FBPReady();
    this._FBPAddWireHook('--inputInput', e => {
      const input = e.composedPath()[0];

      this.checked = input.checked;
      this.value = input.checked;
    });

    this._FBPAddWireHook('--focusReceived', () => {
      this.focused = true;
    });

    this._FBPAddWireHook('--focusOutReceived', () => {
      this.focused = false;
    });
  }

  /**
   * Sets the focus on the radiobutton.
   */
  focus() {
    this._FBPTriggerWire('--focus');
  }

  /**
   * check the radiobutton
   */
  check() {
    this.checked = true;
    this.value = true;
  }

  /**
   * uncheck the radiobutton
   */
  uncheck() {
    this.checked = false;
    this.value = false;
  }

  /**
   * toggle the radio-button
   */
  toggle() {
    this.shadowRoot.getElementById('input').click();
  }

  /**
   * Sets the value for the radio-button
   * The value of radio-button with true (checked) or false (unchecked). Changes will be notified with the `@-value-changed` event
   * This is different from the native attribute `value` of the input radio-button
   * @param {boolean} v
   */
  setValue(v) {
    this.checked = !!v;
    this.value = !!v;
  }

  set value(v) {
    this._value = !!v;

    /**
     * @event value-changed
     * Fired when value has changed from inside the component
     * detail payload: {String} the text value
     */
    const customEvent = new Event('value-changed', { composed: true, bubbles: true });
    customEvent.detail = this.value;
    this.dispatchEvent(customEvent);

    if (this.checked) {
      /**
       * @event checked
       * Fired when the radio-button is checked
       * detail payload: {String} the text value
       */
      const checkedEvent = new Event('checked', { composed: true, bubbles: true });
      checkedEvent.detail = this.value;
      this.dispatchEvent(checkedEvent);
    } else {
      /**
       * @event unchecked
       * Fired when the radio-button is unchecked
       * detail payload: {String} the text value
       */
      const uncheckedEvent = new Event('unchecked', { composed: true, bubbles: true });
      uncheckedEvent.detail = this.value;
      this.dispatchEvent(uncheckedEvent);
    }
  }

  get value() {
    return this._value;
  }

  static get properties() {
    return {
      /**
       * The value of radio-button with true (checked) or false (unchecked). Changes will be notified with the `@-value-changed` event
       * This is different from the native attribute `value` of the input radiob-utton
       */
      value: {
        type: Boolean,
      },

      /**
       * Set this attribute to autofocus the input field.
       */
      autofocus: {
        type: Boolean,
      },

      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      disabled: {
        type: Boolean,
      },

      /**
       * A Boolean attribute which, if present, means this radio-button is checked.
       */
      checked: {
        type: Boolean,
        reflect: true,
      },

      /**
       * A Boolean attribute which, if present, means this is focused.
       */
      focused: {
        type: Boolean,
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
    return (
      Theme.getThemeForComponent('FuroRadioButton') ||
      css`
        /* https://material.io/design/components/text-fields.html#theming */
        :host {
          display: inline-block;
          position: relative;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none;
        }

        /* The wrapper */
        .wrapper {
          display: block;
          position: relative;
          cursor: pointer;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          height: 40px;
          width: 40px;
          border-radius: 50%;
          box-sizing: border-box;
        }

        input[type='radiobutton' i] {
          margin: 0;
        }

        /* input radiobutton*/
        .wrapper input {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          cursor: pointer;
          height: 36px;
          width: 36px;
          z-index: 1;
          box-sizing: border-box;
        }

        .radiobutton-background {
          position: absolute;
          top: 10px;
          left: 10px;
          height: 20px;
          width: 20px;
          background-color: var(--input-radiobutton-unselected-bg-color, var(--surface, #ffffff));
          border: solid 2px;
          border-color: var(--input-radiobutton-unselected-border-color, var(--separator, #7e7e7e));
          box-sizing: border-box;
          border-radius: 50%;
        }

        /* unselected radiobutton when hovering */
        .wrapper:hover {
          background-color: var(
            --input-radiobutton-unselected-hover-bg-color,
            var(--surface-light, #f5f5f5)
          );
        }

        .wrapper:hover input ~ .radiobutton-background {
          background-color: var(
            --input-radiobutton-unselected-hover-bg-color,
            var(--surface-light, #f5f5f5)
          );
        }

        /* unselected radiobutton when focusing */
        .wrapper[focused] {
          background-color: var(
            --input-radiobutton-unselected-focus-bg-color,
            var(--surface-dark, #dddddd)
          );
        }

        /* unselected radiobutton when pressing */
        .wrapper:active {
          background-color: var(
            --input-radiobutton-unselected-active-bg-color,
            var(--surface-dark, #c0c0c0)
          );
        }

        .wrapper:active input ~ .radiobutton-background {
          background-color: var(
            --input-radiobutton-unselected-active-bg-color,
            var(--surface-dark, #c0c0c0)
          );
        }

        /* selected radiobutton  */
        .wrapper[checked] input ~ .radiobutton-background {
          background-color: var(
            --input-radiobutton-selected-bg-color,
            var(--primary-light, #6200fd)
          );
          border-color: var(--input-radiobutton-selected-bg-color, var(--primary-light, #6200fd));
        }

        /* selected radiobutton when focusing */
        .wrapper[checked][focused] {
          background-color: var(
            --input-radiobutton-selected-hover-bg-color,
            var(--primary-variant, #d5c6e9)
          );
        }

        .wrapper[checked][focused] input ~ .radiobutton-background {
          background-color: var(
            --input-radiobutton-selected-focus-bg-color,
            var(--primary-light, #6200fd)
          );
        }

        /* selected radiobutton when hovering */
        .wrapper[checked]:hover {
          background-color: var(
            --input-radiobutton-selected-hover-bg-color,
            var(--primary-variant, #e4dbe6)
          );
        }

        /* disabled radiobutton selected */
        .wrapper[checked][disabled] input:disabled:checked ~ .radiobutton-background {
          background-color: var(
            --input-radiobutton-disabled-selected-bg-color,
            var(--disable, #b9b9b9)
          );
          border-color: var(
            --input-radiobutton-disabled-selected-border-color,
            var(--disable, #b9b9b9)
          );
        }

        /* disabled radiobutton unselected */
        .wrapper input:disabled ~ .radiobutton-background {
          background-color: var(
            --input-radiobutton-disabled-unselected-bg-color,
            var(--surface, #ffffff)
          );
          border-color: var(
            --input-radiobutton-disabled-unselected-border-color,
            var(--surface, #aaaaaa)
          );
        }

        .radiobutton-background:after {
          content: '';
          position: absolute;
          display: none;
        }

        input:disabled {
          cursor: default;
        }

        /* disabled radiobutton when hovering */
        .wrapper[disabled]:hover {
          background-color: var(
            --input-radiobutton-disabled-hover-bg-color,
            var(--surface, #ffffff)
          );
          background: transparent;
        }

        .wrapper[checked] .radiobutton-background:after {
          display: block;
        }

        .wrapper .radiobutton-background:after {
          width: 12px;
          height: 12px;
          border: solid white;
          border-width: 2px;
          border-radius: 50%;
        }

        :host([condensed]) .wrapper,
        :host([condensed]) .wrapper input {
          width: 32px;
          height: 32px;
        }

        :host([condensed]) .radiobutton-background {
          top: 6px;
          left: 6px;
        }

        furo-ripple {
          border-radius: 50%;
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <div
        id="wrapper"
        class="wrapper"
        ?focused=${this.focused}
        ?checked=${this.checked}
        ?disabled=${this.disabled}
      >
        <input
          id="input"
          type="radio"
          ?checked=${this.checked}
          ?autofocus=${this.autofocus}
          ?disabled=${this.disabled}
          ƒ-focus="--focus"
          @-input="--inputInput(*)"
          @-focusout="--focusOutReceived"
          @-focus="--focusReceived"
          @-blur="-^blur"
        />
        <span class="radiobutton-background"></span>
        <furo-ripple></furo-ripple>
      </div>
    `;
  }
}

customElements.define('furo-radio-button', FuroRadioButton);
