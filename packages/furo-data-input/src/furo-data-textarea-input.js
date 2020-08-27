import { FuroTextareaInput } from '@furo/input/src/furo-textarea-input.js';
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';

/**
 * `furo-data-textarea-input` is a extension of furo-textarea-input which enables you to
 *  bind a entityObject field.
 *
 * The field can be of type string, google.protobuf.StringValue, furo.fat.String or any type with the signature
 * of the google.protobuf.StringValue (string must be in field `value`). It is also possible to bind numeric values, but the
 * values will be handled as string.
 *
 * Setting the attributes on the component itself, will override the metas from spec, fat labels, fat attributes.
 *
 * <sample-furo-data-textarea-input></sample-furo-data-textarea-input>
 *
 * Tags: input
 * @summary Bind a entityObject.field to a textarea input
 * @customElement
 * @demo demo-furo-data-textarea-input Data binding
 * @mixes FBP
 */
export class FuroDataTextareaInput extends FuroTextareaInput {
  /**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {String} the textarea value
   *
   * Comes from underlying component furo-textarea-input. **bubbles**
   */

  /**
   * @event trailing-icon-clicked
   * Fired when the trailing icon was clicked
   *
   * detail payload: the value of the textarea input
   *
   * Comes from underlying component furo-textarea-input. **bubbles**
   */

  /**
   * @event leading-icon-clicked
   * Fired when the leading icon was clicked
   *
   * detail payload: the value of the textarea input
   *
   * Comes from underlying component furo-textarea-input. **bubbles**
   */

  constructor() {
    super();
    this.error = false;
    this.disabled = false;

    this._initBinder();
  }

  /**
   * inits the universalFieldNodeBinder.
   * Set the mapped attributes and labels.
   * @private
   */
  _initBinder() {
    this.binder = new UniversalFieldNodeBinder(this);

    // set the attribute mappings
    this.binder.attributeMappings = {
      label: 'label',
      hint: 'hint',
      errortext: 'errortext',
      'error-msg': 'errortext',
      min: 'min',
      max: 'max',
      rows: 'rows',
      cols: 'cols',
    };

    // set the label mappings
    this.binder.labelMappings = {
      error: 'error',
      readonly: 'readonly',
      required: 'required',
      disabled: 'disabled',
      condensed: 'condensed',
    };

    this.binder.fatAttributesToConstraintsMappings = {
      max: 'value._constraints.max.is', // for the fieldnode constraint
      min: 'value._constraints.min.is', // for the fieldnode constraint
      required: 'value._constraints.required.is', // for the fieldnode constraint
      'min-msg': 'value._constraints.min.message', // for the fieldnode constraint message
      'max-msg': 'value._constraints.max.message', // for the fieldnode constraint message
    };

    this.binder.constraintsTofatAttributesMappings = {
      min: 'min',
      max: 'max',
      required: 'required',
    };

    /**
     * check overrides from the used component, attributes set on the component itself overrides all
     */
    this.binder.checkLabelandAttributeOverrrides();

    // the extended furo-text-input component uses _value
    this.binder.targetValueField = '_value';

    // update the value on input changes
    this.addEventListener('value-changed', val => {
      // set flag empty on empty strings (for fat types)
      if (val.detail) {
        this.binder.deleteLabel('empty');
      } else {
        this.binder.addLabel('empty');
      }
      // if something was entered the field is not empty
      this.binder.deleteLabel('pristine');

      // update the value
      this.binder.fieldValue = val.detail;
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
   * Bind a entity field to the textarea-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    this.binder.bindField(fieldNode);
    if (this.binder.fieldNode) {
      /**
       * handle pristine
       *
       * Set to pristine label to the same _pristine from the fieldNode
       */
      if (this.binder.fieldNode._pristine) {
        this.binder.addLabel('pristine');
      } else {
        this.binder.deleteLabel('pristine');
      }
      // set pristine on new data
      this.binder.fieldNode.addEventListener('new-data-injected', () => {
        this.binder.addLabel('pristine');
      });
    }
  }

  // because we defined the property max, the setter from the parent needs to be updated
  set max(val) {
    super.max = val;
  }

  // because we defined the property min, the setter from the parent needs to be updated
  set min(val) {
    super.min = val;
  }

  // because we defined the property cols, the setter from the parent needs to be updated
  set cols(val) {
    super.cols = val;
  }

  // because we defined the property rows, the setter from the parent needs to be updated
  set rows(val) {
    super.rows = val;
  }

  /**
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
        reflect: true,
      },
      /**
       * Overrides the required value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      required: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      hint: {
        type: String,
        reflect: true,
      },
      /**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      readonly: {
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
       * Set this attribute to autofocus the input field.
       */
      autofocus: {
        type: Boolean,
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
       * passes always float the label
       */
      float: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The number of visible text lines for the control.
       */
      rows: {
        type: Number,
        reflect: true,
      },
      /**
       * The visible width of the text control
       */
      cols: {
        type: Number,
        reflect: true,
      },
    };
  }
}

customElements.define('furo-data-textarea-input', FuroDataTextareaInput);
