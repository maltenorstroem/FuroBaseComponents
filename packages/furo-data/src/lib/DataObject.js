import { EventTreeNode, NodeEvent } from '@furo/framework/src/EventTreeNode.js';
import { FieldNode } from './FieldNode.js';
import { RepeaterNode } from './RepeaterNode.js';
import { Helper } from './Helper.js';

/**
 * EntityNode is usually the root node of an eventTree
 */
export class DataObject extends EventTreeNode {
  constructor(parentNode, type, specs) {
    super(parentNode);

    this.__specdefinitions = specs;
    this._spec = this.__specdefinitions[type];
    this._type = type;

    this._initFieldsFromSpec(this, this._spec.fields);

    this._pristine = true;
    this._isValid = true;

    /**
     * Schaltet ein Feld auf valid, müssen wir alle Felder auf validity prüfen...
     */
    this.addEventListener('field-became-valid', () => {
      if (this.__childNodes.filter(f => !f._isValid).length === 0) {
        this._isValid = true;
        this.dispatchNodeEvent(new NodeEvent('data-object-became-valid', this));
      }
    });

    /**
     * Schaltet ein Feld auf invalid ist die Entity ebenfalls invalid
     */
    this.addEventListener('field-became-invalid', () => {
      this._isValid = false;
      this.dispatchNodeEvent(new NodeEvent('data-object-became-invalid', this));
    });

    /**
     * Wird ein Wert geändert gilt das form ebenfalls nicht mehr als jungfräulich
     */
    this.addEventListener('field-value-changed', () => {
      this._pristine = false;
    });

    this.addEventListener('repeated-fields-added', () => {
      this._pristine = false;
    });
  }

  validateAllFields() {
    // broadcast validation request to all fields
    this.broadcastEvent(new NodeEvent('validation-requested', this));
  }

  /**
   * Injecten eines raw models wie bspw body oder entity einer collection
   * @param rawEntity
   */
  injectRaw(rawEntity) {
    // this broadcast will disable validation during setting the values

    this.broadcastEvent(new NodeEvent('disable-validation', this));

    this._rawEntity = rawEntity;
    this._updateFieldValuesAndMetaFromRawEntity(this, rawEntity);
    this._pristine = true;
    this._isValid = true;

    /**
     * Broadcast Event
     * this will set all fields as pristine and end enable the validation
     */
    this.broadcastEvent(new NodeEvent('new-data-injected', this));

    /**
     * @event (data-injected)
     *
     * ✋ Internal Event from EntityNode which you can use in the targeted components!
     *
     * Fired when `ƒ-inject-raw` is completed and fresh data was injected. Only fired from EntityNode which is the root.
     *
     * This event **bubbles**.
     *
     * detail payload: **{NodeEvent}**
     */
    this.dispatchNodeEvent(new NodeEvent('data-injected', this, true));
  }

  /**
   * Resete zum letzten injected state zurück
   */
  reset() {
    if (this._rawEntity) {
      this.injectRaw(this._rawEntity);
    }
  }

  _hasAncestorOfType(type) {
    return this._type === type;
  }

  /**
   * Inits the EntityNode
   */
  init() {
    this.broadcastEvent(new NodeEvent('disable-validation', this));
    for (let i = this.__childNodes.length - 1; i >= 0; i -= 1) {
      this.__childNodes[i].reinit();
    }
    this._initFieldsFromSpec(this, this._spec.fields);
    this._pristine = true;
    this._isValid = true;
    this.broadcastEvent(new NodeEvent('enable-validation', this));
  }

  get rawEntity() {
    return this._rawEntity;
  }

  /**
   * Returns a json representation of your Data Object
   * @return {*}
   */
  get _value() {
    return this.getJson();
  }

  /**
   * Returns a json representation of your Data Object
   * @return {*}
   */
  get value() {
    return this.getJson();
  }

  /**
   * Returns a json representation of your Data Object
   * @return {*}
   */
  getJson() {
    const data = {};
    // nur reine Daten zurück geben
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const index in this.__childNodes) {
      const field = this.__childNodes[index];
      data[field._name] = field._value;
    }
    return data;
  }

  _updateFieldValuesAndMetaFromRawEntity(node, data) {
    let furoMetaDetected = false;
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const fieldName in data) {
      const fieldNode = node[fieldName];

      if (fieldNode === undefined) {
        // eslint-disable-next-line no-console
        console.warn('field not specified', fieldName);
        // eslint-disable-next-line no-continue
        continue;
      }
      if (fieldNode._spec.type === 'furo.Meta') {
        furoMetaDetected = data[fieldName];
      }
      if (!fieldNode) {
        // eslint-disable-next-line no-console
        console.warn('unspecified field', fieldName);
      } else if (fieldNode._isRepeater) {
        // const initialSize = fieldNode.repeats.length;

        // fieldNode.removeAllChildren();

        // update records
        data[fieldName].forEach((repdata, i) => {
          // create if record index do not exist
          if (!fieldNode.repeats[i]) {
            fieldNode._addSilent();
          }

          // Werte aktualisieren
          fieldNode.repeats[i]._value = repdata;
          fieldNode.repeats[i]._pristine = true;
          fieldNode.repeats[i].__index = i;
        });

        // entferne überzählige nodes
        const newSize = data[fieldName].length;
        if (newSize < fieldNode.repeats.length) {
          fieldNode.repeats.splice(newSize);
          fieldNode.__childNodes.splice(newSize);
        }

        fieldNode._pristine = true;
        fieldNode.dispatchNodeEvent(new NodeEvent('repeated-fields-changed', fieldNode, true));
        fieldNode.dispatchNodeEvent(new NodeEvent('this-repeated-field-changed', fieldNode, false));
      } else if (fieldNode) {
        fieldNode._clearInvalidity();

        // Werte aktualisieren
        fieldNode._value = data[fieldName];
        fieldNode._pristine = true;
      }
    }

    //  clear fields if it is not in the incomming data
    node.__childNodes.forEach(n => {
      // eslint-disable-next-line no-prototype-builtins
      if (data && !data.hasOwnProperty(n._name)) {
        if (n.__childNodes.length > 0) {
          if (n.repeats) {
            // eslint-disable-next-line no-param-reassign
            n._value = [];
          } else {
            // eslint-disable-next-line no-param-reassign
            n._value = {};
          }
        } else {
          // eslint-disable-next-line no-param-reassign
          n._value = Helper.defaultForType(n._spec.type);
        }
      }
    });

    if (furoMetaDetected) {
      this.__updateMetaAndConstraints(furoMetaDetected);
    }
  }

  __updateMetaAndConstraints(metaAndConstraints) {
    // on this layer you can only pass the constraint to the children
    // get the first part of the targeted field (data.members.0.id will give us data as targeted field) if we have
    // a field which is targeted we delegate the sub request to  this field
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const fieldname in metaAndConstraints.fields) {
      const mc = metaAndConstraints.fields[fieldname];
      const f = fieldname.split('.');
      const target = f[0];
      const subMetaAndConstraints = { fields: {} };
      subMetaAndConstraints.fields[f.slice(1).join('.')] = mc;
      this[target].__updateMetaAndConstraints(subMetaAndConstraints);
    }
  }

  _setInvalid(error) {
    // set field empty, if not defined
    // eslint-disable-next-line no-param-reassign
    error.field = error.field || '';
    const path = error.field.split('.');
    if (path.length > 0 && path[0] !== '') {
      // rest wieder in error reinwerfen
      // eslint-disable-next-line no-param-reassign
      error.field = path.slice(1).join('.');
      if (this[path[0]]) {
        this[path[0]]._setInvalid(error);
      } else {
        // eslint-disable-next-line no-console
        console.warn('Unknown field', path, this._name);
      }
    } else {
      this._isValid = false;
      this._validity = error;
      this.dispatchNodeEvent(new NodeEvent('field-became-invalid', this));
    }
  }

  /**
   * Baut die Felder aufgrund der spec auf
   * @param node
   * @param fieldSpec
   * @private
   */
  // eslint-disable-next-line class-methods-use-this
  _initFieldsFromSpec(node, fieldSpec) {
    // eslint-disable-next-line no-restricted-syntax
    for (const fieldName in fieldSpec) {
      if (fieldSpec[fieldName].meta && fieldSpec[fieldName].meta.repeated) {
        // eslint-disable-next-line no-param-reassign
        node[fieldName] = new RepeaterNode(node, fieldSpec[fieldName], fieldName);
      } else {
        // eslint-disable-next-line no-param-reassign
        node[fieldName] = new FieldNode(node, fieldSpec[fieldName], fieldName);
      }
    }
  }

  toString() {
    return this._spec.type;
  }
}
