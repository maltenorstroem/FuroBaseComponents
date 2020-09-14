/**
 * Helper class for binding ui5 labeled elements
 */
export class Ui5LabelDataBinding {
  /**
   * bind data for labeled element
   * @param element
   * @param fieldNode
   */
  static bindData(element, fieldNode) {
    if (fieldNode === undefined) {
      // eslint-disable-next-line no-console
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }

    // eslint-disable-next-line no-param-reassign
    element._field = fieldNode;
    element._FBPTriggerWire('--data', fieldNode);

    if (this.isFatType(fieldNode)) {
      // eslint-disable-next-line no-param-reassign
      element.label = fieldNode.attributes.label || fieldNode._meta.label || element.label;
    } else {
      // eslint-disable-next-line no-param-reassign
      element.label = fieldNode._meta.label || element.label;
    }

    /**
     * Listener on fieldNode meta changes
     */
    element._field.addEventListener('this-metas-changed', meta => {
      // eslint-disable-next-line no-param-reassign
      element.label = meta.detail._meta.label || element.label;
      element.requestUpdate();
    });

    element.requestUpdate();
  }

  /**
   * check whether it is a fat type
   *
   * @param field
   * @returns {boolean}
   */
  static isFatType(field) {
    let isFatType = false;
    if (field && 'value' in field && 'labels' in field && 'attributes' in field) {
      this.fieldValue = field.value._value;
      isFatType = true;
    }
    return isFatType;
  }
}
