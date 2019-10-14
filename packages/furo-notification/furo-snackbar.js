import {LitElement,html,css} from 'lit-element';
import {FBP} from '@furo/fbp';

/**
 * `furo-snackbar`
 * Lit element
 *
 *  furo-snackbar should be used together witch furo-snackbar-display. you can place those two components into different places.
 *  best place the furo-snackbar-display on the main site. then you only need one furo-snackbar-display. it can work with n furo-snackbar.
 *
 * @customElement
 * @demo demo-furo-snackbar-display snackbar demo
 */
class FuroSnackbar extends FBP(LitElement) {


  constructor(){
    super();
    this.labelText = "label text";
    this.actionButtonText = "Undo";
    this.isOpen = false;
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
  }

  /**
   * @private
   * @returns {CSSResult}
   */
  static get styles() {
    return css`
            :host {
            }
        `;
  }

  /**
   *@private
   */
  static get properties(){

    return {

      /**
       * text of button
       */
      actionButtonText: {
        type: String,
        attribute: "action-button-text"
      },

      /**
       * label text
       */
      labelText: {
        type: String,
        attribute: "label-text"
      },

      timeoutInMs: {
        type: Number,
        attribute: "timeout-in-ms"
      },

      closeOnEscape: {
        type: Boolean,
        attribute: "close-on-escape"
      },

      icon: {
        type: String
      },

      /**
       * max size of snackbar
       */
      maxSize: {
        type: String,
        attribute: "max-size"
      },

      /**
       * size of the snackbar
       */
      size: {
        type: String,
        attribute: true
      },

      isOpen: {
        type: Boolean
      },

      positionLeft: {
        type: Boolean,
        attribute: "position-left"
      },

      positionRight: {
        type: Boolean,
        attribute: "position-right"
      },

      stacked: {
        type: Boolean
      },

      payload: {
        type: Object
      }

    };
  }

  /**
   * show slackbar
   * @param p {Object} payload
   */
  show(p) {

    this.payload = p;
    /**
     * @event open-furo-snackbar-requested
     * Fired when value open snackbar is requested
     * detail payload: {Object}  this
     */
    let customEvent = new Event("open-furo-snackbar-requested",{composed: true, bubbles: true});
    customEvent.detail = this;
    this.dispatchEvent(customEvent);
  }

  /**
   * trigger the action of snackbar. event `snackbar-action-clicked` will be sent with payload
   */
  action() {

    /**
     * @event snackbar-action-clicked
     * Fired when action button of snackbar is clicked
     * detail payload: {Object}  payload
     */
    let customEvent = new Event("snackbar-action-clicked",{composed: true, bubbles: true});
    customEvent.detail = this.payload;
    this.dispatchEvent(customEvent)
  }

  /**
   * close snackbar
   * event `close-furo-snackbar-requested` will be sent to furo-snackbar-display with payload this
   */
  close() {

    /**
     * @event close-furo-snackbar-requested
     * Fired when value open snackbar is requested
     * detail payload: {Object}  this
     */
    let customEvent = new Event("close-furo-snackbar-requested",{composed: true, bubbles: true});
    customEvent.detail = this;
    this.dispatchEvent(customEvent)
  }

  /**
   * snackbar closed. event `snackbar-closed` will be sent with payload
   */
  closed() {

    /**
     * @event snackbar-closed
     * Fired when snackbar is closed
     * detail payload: {Object}  payload
     */
    let customEvent = new Event("snackbar-closed",{composed: true, bubbles: true});
    customEvent.detail = this.payload;
    this.dispatchEvent(customEvent)
  }

  /**
   * snackbar opend.event `snackbar-opened` will be sent with payload
   */
  opened() {
    /**
     * @event snackbar-opened
     * Fired when snackbar is opened
     * detail payload: {Object}  this
     */
    let customEvent = new Event("snackbar-opened",{composed: true, bubbles: true});
    customEvent.detail = this;
    this.dispatchEvent(customEvent)
  }

  /**
   * set the label text o
   * @param t
   */
  setLabelText(t){
    this.labelText = t;
  }

  /**
   * set the action button text
   * @param t
   */
  setActionButtonText(t) {
    this.actionButtonText = t;
  }

  /**
   * parse grpc status object and set the label according to the message in status
   * @param s
   */
  parseGrpcStatus(s) {

    if (s.message) {
      this.setLabelText(s.message);
    }
  }


  /**
   * @private
   * @returns {TemplateResult}
   */
  render(){
    return html`
        `;
  }

}

customElements.define('furo-snackbar', FuroSnackbar);
