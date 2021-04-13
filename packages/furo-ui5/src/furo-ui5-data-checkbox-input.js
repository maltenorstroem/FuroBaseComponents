import * as CheckBox from '@ui5/webcomponents/dist/CheckBox.js';
import { css } from 'lit-element';

// eslint-disable-next-line import/no-extraneous-dependencies
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder';

/**
 * Allows the user to set a binary value, such as true/false or yes/no for an item.
 * The furo-ui5-data-checkbox-input component consists of a box and a label that describes its purpose. If it's checked,
 * an indicator is displayed inside the box. To check/uncheck the furo-ui5-data-checkbox-input, the user has to click or tap the square box or its label.
 *
 * The furo-ui5-data-checkbox-input component only has 2 states - checked and unchecked. Clicking or tapping toggles
 * the furo-ui5-data-checkbox-input between checked and unchecked state.
 *
 * Usage
 * You can manually set the width of the element containing the box and the label using the width property.
 * If the text exceeds the available width, it is truncated. The touchable area for toggling the
 * furo-ui5-data-checkbox-input ends where the text ends.
 *
 * You can disable the furo-ui5-data-checkbox-input by setting the disabled property to true, or use the
 * furo-ui5-data-checkbox-input in read-only mode by setting the readonly property to true.
 *
 * @summary data checkbox input field
 * @customElement
 * @demo demo-furo-ui5-data-checkbox-input Basic usage (scalar , fat, wrapper values)
 */
export class FuroUi5DataCheckboxInput extends CheckBox.default {
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   * @event change
   */

  /**
   * Fired when the checkbox value changed.
   * the event detail is the value of the checkbox
   * @event value-changed
   */

  /**
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this._initBinder();
  }

  /**
   * inits the universalFieldNodeBinder.
   * Set the mapped attributes and labels.
   * @private
   */
  _initBinder() {
    this.binder = new UniversalFieldNodeBinder(this);
    this.binder.targetValueField = 'checked';
    this.applyBindingSet();
  }

  /**
   * connectedCallback() method is called when an element is added to the DOM.
   * webcomponent lifecycle event
   */
  connectedCallback() {
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
   * apply the binding set to the binder
   * binding set can be customised here otherwise the standard set in the ui5-data-input will be used
   * @param fieldNode
   */
  applyBindingSet() {
    // set the attribute mappings
    this.binder.attributeMappings = {
      text: 'text', // text of checkbox
      label: 'text', // map label to text
      placeholder: 'placeholder', // map placeholder to placeholder
      'value-state': '_valueState',
      errortext: '_errorMsg', // name errortext is for compatibility with spec
      'error-msg': '_errorMsg',
      'warning-msg': '_warningMsg',
      'success-msg': '_successMsg',
      'information-msg': '_informationMsg',
      pattern: 'pattern',
      name: 'name',
    };

    // set the label mappings
    this.binder.labelMappings = {
      error: '_error',
      readonly: '_readonly',
      required: 'required',
      disabled: 'disabled',
      modified: 'modified',
      highlight: 'highlight',
      wrap: 'wrap',
    };

    // set attributes to constrains mapping for furo.fat types
    this.binder.fatAttributesToConstraintsMappings = {
      required: 'value._constraints.required.is', // for the fieldnode constraint
    };

    // set constrains to attributes mapping for furo.fat types
    this.binder.constraintsTofatAttributesMappings = {
      required: 'required',
    };

    // update the value on input changes
    this.addEventListener('change', val => {
      // update the value
      this.binder.fieldValue = val.target.checked;

      /**
       * Fired when value changed
       * @type {Event}
       */
      const customEvent = new Event('value-changed', { composed: true, bubbles: true });
      customEvent.detail = val.target.checked;
      this.dispatchEvent(customEvent);

      // set flag empty on empty strings (for fat types)
      if (val.target.checked) {
        this.binder.deleteLabel('empty');
      } else {
        this.binder.addLabel('empty');
      }
      // if something was entered the field is not empty
      this.binder.addLabel('modified');

      this._requestUpdate();
    });
  }

  /**
   * Bind a entity field to the text-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    this.binder.bindField(fieldNode);
    if (this.binder.fieldNode) {
      this.binder.fieldNode.addEventListener('new-data-injected', () => {
        this._requestUpdate();
      });
    }
  }

  /**
   * extend styling
   * @returns {string}
   */
  static get styles() {
    return `${css`` + super.styles}
        :host([left]) .ui5-checkbox-root{
          width: auto;
        }
      `;
  }

  /**
   * @private
   */
  _requestUpdate() {
    this._updateSlots();
  }
}
window.customElements.define('furo-ui5-data-checkbox-input', FuroUi5DataCheckboxInput);
