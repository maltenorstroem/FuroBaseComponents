import * as TextArea from '@ui5/webcomponents/dist/TextArea.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder';

/**
 * The furo-ui5-data-textarea-input component provides large spaces for text entries in the
 * form of multiple rows. It has the functionality of the TextField with
 * the additional functionality for multiline texts.
 *
 * When empty, it can hold a placeholder similar to a furo-ui5-data-input.
 * You can define the rows of the ui5-textarea and also determine specific behavior when handling long texts.
 *
 * @summary data textarea input field
 * @customElement
 * @demo demo-furo-ui5-data-textarea-input Basic usage (scalar , fat, wrapper values)
 */
export class FuroUi5DataTextareaInput extends TextArea.default {
  /**
   * Fired when the input value changed.
   * the event detail is the value of the input field
   * @event value-changed
   */

  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   * @event change
   */

  /**
   * Fired when the value of the furo-ui5-data-textarea changes at each keystroke, and when a suggestion item has been selected.
   * @event input
   */

  /**
   * connectedCallback() method is called when an element is added to the DOM.
   * webcomponent lifecycle event
   */
  connectedCallback() {
    // initiate icon slot when it is undefined to avoid error in _tokenizeText
    if (this.value === undefined) {
      this.value = '';
    }
    this.attributeReadonly = this.readonly;

    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();
  }

  /**
   * overwrite to fix error
   * @returns {*|{}}
   */
  get valueStateMessage() {
    return super.valueStateMessage || {};
  }

  set _readonly(readonly) {
    if (!this.attributeReadonly) {
      this.readonly = readonly;
    }
  }

  /**
   * Fired when the input value changed.
   * the event detail is the value of the input field
   * @event value-changed
   */

  /**
   * constructor
   */
  constructor() {
    super();
    this._initBinder();
  }

  /**
   * inits the universalFieldNodeBinder.
   * Set the mapped attributes and labels.
   * @private
   */
  _initBinder() {
    this.binder = new UniversalFieldNodeBinder(this);

    this.applyBindingSet();
  }

  /**
   * apply the binding set to the universal field node binder
   */
  applyBindingSet() {
    // set the attribute mappings
    this.binder.attributeMappings = {
      label: 'label', // map label to placeholder
      rows: 'rows', // map rows
      placeholder: 'placeholder', // map placeholder to placeholder
      'value-state': '_valueState',
      errortext: '_errorMsg', // name errortext is for compatibility with spec
      'error-msg': '_errorMsg',
      'warning-msg': '_warningMsg',
      'success-msg': '_successMsg',
      'information-msg': '_informationMsg',
      pattern: 'pattern',
      name: 'name',
      maxlength: 'maxlength', // for the input element itself
    };

    // set the label mappings
    this.binder.labelMappings = {
      error: '_error',
      readonly: '_readonly',
      required: 'required',
      disabled: 'disabled',
      modified: 'modified',
      highlight: 'highlight',
    };

    // set attributes to constrains mapping for furo.fat types
    this.binder.fatAttributesToConstraintsMappings = {
      maxlength: 'value._constraints.max.is', // for the fieldnode constraint
      minlength: 'value._constraints.min.is', // for the fieldnode constraint
      pattern: 'value._constraints.pattern.is', // for the fieldnode constraint
      required: 'value._constraints.required.is', // for the fieldnode constraint
      'min-msg': 'value._constraints.min.message', // for the fieldnode constraint message
      'max-msg': 'value._constraints.max.message', // for the fieldnode constraint message
    };

    // set constrains to attributes mapping for furo.fat types
    this.binder.constraintsTofatAttributesMappings = {
      max: 'maxlength',
      min: 'minlength',
      pattern: 'pattern',
      required: 'required',
    };

    /**
     * check overrides from the used component, attributes set on the component itself overrides all
     */
    this.binder.checkLabelandAttributeOverrrides();

    // update the value on input changes
    this.addEventListener('input', val => {
      // update the value
      this.binder.fieldValue = val.target.value;

      /**
       * Fired when value changed
       * @type {Event}
       */
      const customEvent = new Event('value-changed', { composed: true, bubbles: true });
      customEvent.detail = val.target.value;
      this.dispatchEvent(customEvent);

      // set flag empty on empty strings (for fat types)
      if (val.target.value) {
        this.binder.deleteLabel('empty');
      } else {
        this.binder.addLabel('empty');
      }
      // if something was entered the field is not empty
      this.binder.addLabel('modified');
    });
  }

  /**
   * Sets the value for the field. This will update the fieldNode.
   * @param val
   */
  setValue(val) {
    this.binder.fieldValue = val;
  }

  /**
   * store the error message and update the value state message
   * @param msg
   * @private
   */
  set _errorMsg(msg) {
    this.__errorMsg = msg;
    this._updateVS();
  }

  /**
   * store the information message and update the value state message
   * @param msg
   * @private
   */
  set _informationMsg(msg) {
    this.__informationMsg = msg;
    this._updateVS();
  }

  /**
   * store the warning message and update the value state message
   * @param msg
   * @private
   */
  set _warningMsg(msg) {
    this.__warningMsg = msg;
    this._updateVS();
  }

  /**
   * store the success message and update the value state message
   * @param msg
   * @private
   */
  set _successMsg(msg) {
    this.__successMsg = msg;
    this._updateVS();
  }

  /**
   * Update the value state on change
   * @param state
   * @private
   */
  set _valueState(state) {
    this.valueState = state || 'None';
    this._updateVS();
  }

  /**
   * sets and remove the error state
   * @param err
   * @private
   */
  set _error(err) {
    if (err) {
      this._lastValueState = this.valueState;
      this.valueState = 'Error';
    } else if (this.valueState === 'Error') {
      this.valueState = this._lastValueState;
    }
  }

  _updateVS() {
    // set the correct valueStateMessage
    switch (this.valueState) {
      case 'Error':
        this._vsm = this._valueStateMessage || this.__errorMsg || this.__hint;
        this.removeAttribute('title');
        break;
      case 'Information':
        this._vsm = this._valueStateMessage || this.__informationMsg || this.__hint;
        this.removeAttribute('title');
        break;
      case 'Success':
        this._vsm = this._valueStateMessage || this.__successMsg || this.__hint;
        this.removeAttribute('title');
        break;
      case 'Warning':
        this._vsm = this._valueStateMessage || this.__warningMsg || this.__hint;
        this.removeAttribute('title');
        break;

      default:
        this._vsm = this._valueStateMessage || this.__hint;
        this.setAttribute('title', this._vsm);
    }
    this._setValueStateMessage(this._vsm);
  }

  /**
   * Updates the vs and creates the element in the slot on demand
   * @param msg
   * @private
   */
  _setValueStateMessage(msg) {
    // create element
    if (!this._valueStateElement) {
      this._valueStateElement = document.createElement('div');
      this._valueStateElement.slot = 'valueStateMessage';
    }
    this._valueStateElement.innerText = msg;
    if (msg) {
      this.appendChild(this._valueStateElement);
    } else {
      this._valueStateElement.remove();
    }
  }

  /**
   * Bind a entity field to the text-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    /**
     * Because of the UI5 TextArea Tokenizer we can not pass NULL as a value.
     * If the value is null, we pass an empty string
     * @type {string}
     * @private
     */
    // eslint-disable-next-line no-param-reassign
    fieldNode._value = fieldNode._value || '';

    this.binder.bindField(fieldNode);
    if (this.binder.fieldNode) {
      this.binder.fieldNode.addEventListener('new-data-injected', () => {
        this._requestUpdate();
      });

      this.binder.fieldNode.addEventListener('field-value-changed', () => {
        this._requestUpdate();
      });
    }
  }

  /**
   * @private
   */
  _requestUpdate() {
    this._updateSlots();
  }
}
window.customElements.define('furo-ui5-data-textarea-input', FuroUi5DataTextareaInput);
