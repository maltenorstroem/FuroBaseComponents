import { LitElement } from 'lit-element';

/**
 * `furo-put-clipboard`
 *  put content to the clipboard of the OS.
 *
 *```html
 *
 * <furo-put-clipboard json ƒ-trigger="--putDataToClipboard" @-content-putted="--contentInClipboard">
 * </furo-put-clipboard>
 *
 *```
 *
 * @summary write content to clipboard
 * @customElement
 */
class FuroPutClipboard extends LitElement {
  setData(data) {
    this.data = data;
  }

  trigger(data) {
    let ndata = data;
    if (this.data) {
      ndata = this.data;
    }
    let d;
    if (this.json) {
      d = JSON.stringify(ndata, '', 2);
    } else {
      d = ndata;
    }

    navigator.clipboard.writeText(d).then(() => {
      /**
       * @event content
       * Fired when clipboard content is received
       * detail payload: {*} content of the clipboard
       */
      const customEvent = new Event('content-putted', { composed: true, bubbles: true });
      customEvent.detail = d;
      this.dispatchEvent(customEvent);
    });
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Stringify JSON content. Set this to true to auto stringify your JSON object with a 2 indention.
       */
      json: { type: Boolean },
    };
  }
}

window.customElements.define('furo-put-clipboard', FuroPutClipboard);
