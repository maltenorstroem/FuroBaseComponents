import {FuroSignPad} from "@furo/input/furo-sign-pad";

/**
 * `furo-data-sign-pad`
 * Describe your element
 *
 * @summary shortdescription
 * @customElement
 * @demo demo-furo-data-sign-pad
 * @appliesMixin FBP
 */
export class FuroDataSignPad extends FuroSignPad {


  bindData(entityField) {
    this.field = entityField;
    if (this.field._value) {
      this.setImage(this.field._value);
    }
    // update drawing on changes from outside
    this.field.addEventListener('this-field-value-changed', (e) => {
      this.signaturePad.clear();
      this.setImage(this.field._value);
    });
  }

  /**
   * update field._value  on new drawing
   */
  encodeImage(){
    this.field._value = super.encodeImage();
    return this.field._value;
  }


}

window.customElements.define('furo-data-sign-pad', FuroDataSignPad);
