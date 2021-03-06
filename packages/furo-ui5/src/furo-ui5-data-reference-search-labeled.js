import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp/src/fbp.js';
import { Ui5LabelDataBinding } from './lib/Ui5LabelDataBinding.js';
import '@ui5/webcomponents/dist/Label.js';

import './furo-ui5-data-reference-search.js';
import './furo-ui5-form-field-container.js';

/**
 * `furo-ui5-data-reference-search-labeled`
 * The furo-ui5-data-reference-search-labeled is a composition to easily use a complete input field with label according
 * to the design specification of SAP Fiori Design System.
 *
 * @summary labeled input field
 * @customElement
 * @demo demo-furo-ui5-form-field-container Simple use
 * @appliesMixin FBP
 */
class FuroUi5DataReferenceSearchLabeled extends FBP(LitElement) {
  constructor(props) {
    super(props);
    this.label = '';

    this.subField = 'data';
    this.displayField = 'display_name';
    this.valueField = 'id';
    this.valueSubField = 'id';
    this.displaySubField = 'display_name';
  }

  /**
   * Focuses the underlying ui5 input element
   * @param e
   */
  focus(e) {
    this._FBPTriggerWire('--focus', e);
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
  }

  /**
   * inject list
   * @param arr
   */
  injectList(arr) {
    this._FBPTriggerWire('--injectList', arr);
  }

  /**
   * Inject the array of a collection
   * @param entities
   */
  injectEntities(entities) {
    this._FBPTriggerWire('--injectList', entities);
  }

  static get properties() {
    return {
      /**
       * the label for the data-reference-search
       */
      label: { type: String },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      disabled: {
        type: Boolean,
      },
      /**
       * A Boolean attribute which, if present, means this field is required and marked with *.
       */
      required: {
        type: Boolean,
      },
      /**
       * If you inject an array with complex objects, declare here the path where display_name and value_field are located.
       *
       * This is only needed if display_name and value_field are not located in the root of the object.
       * @property sub-field
       */
      subField: { type: String, attribute: 'sub-field', reflect: true },
      /**
       * The name of the field from the injected collection that contains the label for the dropdown array.
       * @property display-field
       */
      displayField: { type: String, attribute: 'display-field', reflect: true },
      /**
       * if you bind a complex type, declare here the field which gets updated of display_name by selecting an item.
       * If you bind a scalar, you dont need this attribute.
       * @property value-field
       */
      valueField: { type: String, attribute: 'value-field', reflect: true },
      /**
       * if you bind a complex type, declare here the field which gets updated of value by selecting an item.
       *
       * If you bind a scalar, you dont need this attribute.
       * @property value-sub-field
       */
      valueSubField: { type: String, attribute: 'value-sub-field', reflect: true },
      /**
       * if you bind a complex type, declare here the field which gets updated of display_name by selecting an item.
       *
       * If you bind a scalar, you dont need this attribute.
       * @property display-sub-field
       */
      displaySubField: { type: String, attribute: 'display-sub-field', reflect: true },
    };
  }

  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroUi5DataReferenceSearchLabeled') ||
      css`
        :host {
          display: block;
        }
        :host([hidden]) {
          display: none;
        }
      `
    );
  }

  /**
   * Orchestrates the data field connection to the inside
   * @param fieldNode
   */
  bindData(fieldNode) {
    Ui5LabelDataBinding.bindData(this, fieldNode);
  }

  /**
   * inject collection
   * @param arr
   */
  collectionIn(arr) {
    this._FBPTriggerWire('--collectionIn', arr);
  }

  /**
   * reset combobox
   */
  reset() {
    this._FBPTriggerWire('--reset');
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-ui5-form-field-container>
        <ui5-label label slot="label" for="Input" show-colon ?required=${this.required}
          >${this.label}</ui5-label
        >
        <furo-ui5-data-reference-search
          content
          id="Input"
          ?disabled=${this.disabled}
          sub-field="${this.subField}"
          display-field="${this.displayField}"
          value-field="${this.valueField}"
          value-sub-field="${this.valueSubField}"
          display-sub-field="${this.displaySubField}"
          ƒ-inject-list="--injectList"
          ƒ-bind-data="--data"
          ƒ-collection-in="--collectionIn"
          ƒ-reset="--reset"
          ƒ-focus="--focus"
        ></furo-ui5-data-reference-search>
      </furo-ui5-form-field-container>
    `;
  }
}

window.customElements.define(
  'furo-ui5-data-reference-search-labeled',
  FuroUi5DataReferenceSearchLabeled,
);
