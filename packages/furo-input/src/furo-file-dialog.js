import { LitElement, html, css } from 'lit-element';
import { FBP } from '@furo/fbp';
import { Helper } from './lib/helper.js';

/**
 * `furo-file-dialog`
 * Handy component to manage input type="file"
 * Let the user choose one or more files from their device storage
 *
 * @summary File input field
 * @customElement
 * @demo demo-furo-file-dialog Sample
 * @appliesMixin FBP
 */
class FuroFileDialog extends FBP(LitElement) {
  constructor() {
    super();
    this.multiple = false;
    this.capture = '';
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
  }

  static get properties() {
    return {
      /**
       * A FileList listing the chosen files
       * readonly
       */
      files: {
        type: Array,
      },
      /**
       * Hint for expected file type in file upload controls
       * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers
       * e.g. .doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document
       */
      accept: {
        type: String,
        attribute: true,
      },
      /**
       * Whether to allow multiple values
       */
      multiple: {
        type: Boolean,
        attribute: true,
        reflect: true,
      },
      /**
       * What source to use for capturing image or video data
       * The capture attribute value is a string that specifies which camera to use for capture of
       * image or video data, if the accept attribute indicates that the input should be of one of those types.
       * A value of user indicates that the user-facing camera and/or microphone should be used. A value of environment
       * specifies that the outward-facing camera and/or microphone should be used. If this attribute is missing,
       * the user agent is free to decide on its own what to do. If the requested facing mode isn't available,
       * the user agent may fall back to its preferred default mode.
       */
      capture: {
        type: String,
        attribute: true,
        reflect: true,
      },
    };
  }

  static get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none;
      }

      .inputfile {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
      }

      label {
        display: none;
      }
    `;
  }

  /**
   * Updater for the accept attr, the prop alone with accept="${this.accept}" wont work,
   * becaue it set "undefined" (as a Sting!)
   *
   * @param value
   */
  set accept(value) {
    Helper.UpdateInputAttribute(this, 'accept', value);
  }

  set multiple(value) {
    Helper.UpdateInputAttribute(this, 'multiple', value);
  }

  set capture(value) {
    Helper.UpdateInputAttribute(this, 'capture', value);
  }

  /**
   * Opens the file dialog
   */
  open() {
    this._FBPTriggerWire('--open', null);
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <input
        type="file"
        class="inputfile"
        tabindex="-1"
        ?accept=${this.accept}
        ?multiple=${this.multiple}
        ?capture="${this.capture}"
        id="input"
        name="input"
        @-change="^^input-changed(*.target)"
      />

      <label for="input" ƒ-click="--open"></label>
    `;
  }
}

window.customElements.define('furo-file-dialog', FuroFileDialog);
