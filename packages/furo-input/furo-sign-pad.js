import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import SignaturePad from "signature_pad/dist/signature_pad.m"


/**
 * `furo-sign-pad`
 * Describe your element
 *
 * @summary shortdescription
 * @customElement
 * @demo demo/furo-sign-pad
 * @appliesMixin FBP
 */
export class FuroSignPad extends FBP(LitElement) {

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();


    this.canvas = this.shadowRoot.querySelector("canvas");

    this.signaturePad = new SignaturePad(this.canvas, {
      onBegin: this._onBegin.bind(this),
      onEnd: this._onEnd.bind(this)
    });


    if (this.image) {
      this.signaturePad.fromDataURL(this.image);
    }
    this.resize();
    this.signaturePad.clear();
  }


  /**
   * clears the pad
   */
  clear() {
    this.signaturePad.clear();
  }

  resize() {
    if (this.canvas) {
      var ratio = 1;
      this.canvas.width = this.canvas.offsetWidth * ratio;
      this.canvas.height = this.canvas.offsetHeight * ratio;
      this.canvas.getContext("2d").scale(ratio, ratio);
    }
  }


  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
        box-sizing: border-box;
        height: 184px;
        width: 300px;
        cursor: pointer;
        position: relative;
        
      }

      canvas {
        width: 100%;
        height: 100%;
      }

      div.dots {
        position: absolute;
        top: 24px;
        bottom: 24px;
        left: 24px;
        right: 24px;
        pointer-events: none;
        border: 1px dashed black;
      }
    `
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <canvas></canvas>
      <div class="dots"></div>

    `;
  }


  attached() {
    this.signaturePad.on();
  }

  detached() {
    this.signaturePad.off();
  }

  _setEmpty(b) {
    this.empty = b;
  }

  _setActive(b) {
    this.active = b;
  }

  /**
   * Clears the image
   */
  clear() {
    this.signaturePad.clear();
    this.encodeImage();
  }

  setImage(encodedImage) {
    var img = new Image;
    img.src = encodedImage;
    let ctx = this.canvas.getContext('2d');

    img.onload = function () {
      ctx.drawImage(img, 0, 0); // Or at whatever offset you like
    };
    img.src = encodedImage;

  };

  /**
   * Encodes the image using the type and encodingOptions (quality) defined.
   * The encoded image is available in the `image` property.
   */
  encodeImage() {
    this.image = this.canvas.toDataURL(this.type, this.encodingOptions);
    this._setEmpty(this.signaturePad.isEmpty());
    /**
     * @event sign-updated
     * Fired when sign gets new painting
     * detail payload: base encoded image
     */
    let customEvent = new Event('sign-updated', {composed: true, bubbles: true});
    customEvent.detail = this.image;
    this.dispatchEvent(customEvent)
  }

  _onBegin(event) {
    this._setActive(true);
  }

  _onEnd(event) {
    this._setActive(false);
    this.encodeImage();
  }

  _dotSizeChanged(newValue, oldValue) {
    if (!this.signaturePad) return;
    this.signaturePad.dotSize = newValue;
  }

  _minWidthChanged(newValue, oldValue) {
    if (!this.signaturePad) return;
    this.signaturePad.minWidth = newValue;
  }

  _maxWidthChanged(newValue, oldValue) {
    if (!this.signaturePad) return;
    this.signaturePad.maxWidth = newValue;
  }

  _backgroundColorChanged(newValue, oldValue) {
    if (!this.signaturePad) return;
    this.signaturePad.backgroundColor = newValue;
  }

  _penColorChanged(newValue, oldValue) {
    if (!this.signaturePad) return;
    this.signaturePad.penColor = newValue;
  }

  _velocityFilterWeightChanged(newValue, oldValue) {
    if (!this.signaturePad) return;
    this.signaturePad.velocityFilterWeight = newValue;
  }

  _onEncodingChanged(type, encoderOptions) {
    if (this.signaturePad) {
      this.encodeImage();
    }
  }
}

window.customElements.define('furo-sign-pad', FuroSignPad);
