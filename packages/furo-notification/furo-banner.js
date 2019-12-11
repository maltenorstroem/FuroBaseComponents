import {LitElement, html, css} from 'lit-element';

/**
 * `furo-banner`
 * Lit element
 *
 *  furo-banner should be used together witch furo-banner-display. you can place those two components into different places.
 *  best place the furo-banner-display on the main site. then you only need one furo-banner-display. it can work with n furo-banner.
 *
 * ### When to use
 *
 * A banner displays an important, succinct message, and provides actions for users to address (or dismiss the banner). It requires a user action to be dismissed.
 * Banners should be displayed at the top of the screen, below a top app bar. They are persistent and nonmodal, allowing the user to either ignore them or interact with them at any time
 *
 * Component | Priority | User action
 * ----------------|------------------|----------
 * `furo-snackbar`  | Low priority |Optional: Snackbars disappear automatically
 * `furo-banner`    | Prominent, medium priority  |Optional: Banners remain until dismissed by the user, or if the state that caused the banner is resolved
 * `furo-dialog`    | Highest priority |Required: Dialogs block app usage until the user takes a dialog action or exits the dialog (if available)
 *
 * @customElement
 * @demo demo-furo-banner-display banner display demo
 * @demo demo-furo-banner-display-error banner display demo with error binding
 */
class FuroBanner extends LitElement {


  constructor() {
    super();
    this.dismissButtonText = "dismiss";
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
  static get properties() {

    return {
      /**
       * banner text content. Use *word* to mark as strong. Use \n to insert a line break.
       *
       * *HTML tags will be stripped out.*
       */
      text: {
        type: String
      },
      /**
       * label text of dismiss button
       */
      dismissButtonText: {
        type: String,
        attribute: "dismiss-button-text"
      },
      /**
       * label text of confirm button
       */
      confirmButtonText: {
        type: String,
        attribute: "confirm-button-text"
      },
      /**
       * icon of the banner
       */
      icon: {
        type: String
      },
      /**
       * payload
       */
      payload: {
        type: Object
      },
      /**
       * set this flag to display the icon in --danger color
       */
      danger: {type: Boolean}
    };
  }

  /**
   * set icon of the snackbar
   * @param i
   */
  setIcon(i) {
    this.icon = i;
  }

  /**
   * set the
   * @param t
   */
  setText(t) {
    this.text = t;
  }

  /**
   * set label text of confirm button
   * @param t
   */
  setConfirmButtonText(t) {
    this.confirmButtonText = t;
  }

  /**
   * set label text of dismiss button
   * @param t
   */
  setDismissButtonText(t) {
    this.dismissButtonText = t;
  }

  /**
   * show banner
   * @param p {Object} payload
   */
  show(p) {

    this.payload = p;
    /**
     * @event open-furo-banner-requested
     * Fired when value open banner is requested
     * detail payload: {Object}  this
     */
    let customEvent = new Event("open-furo-banner-requested", {composed: true, bubbles: true});
    customEvent.detail = this;
    this.dispatchEvent(customEvent);
  }


  /**
   *  event `dismissed` will be sent with payload
   */
  dismiss() {

    /**
     * @event dismissed
     * Fired when dismiss button of banner is clicked
     * detail payload: {Object}  payload
     */
    let customEvent = new Event("dismissed", {composed: true, bubbles: true});
    customEvent.detail = this.payload;
    this.dispatchEvent(customEvent);

    this._close();
  }

  /**
   *  event `confirmed` will be sent with payload
   */
  confirm() {

    /**
     * @event confirmed
     * Fired when confirm button of banner is clicked
     * detail payload: {Object}  payload
     */
    let customEvent = new Event("confirmed", {composed: true, bubbles: true});
    customEvent.detail = this.payload;
    this.dispatchEvent(customEvent);

    this._close();
  }

  /**
   *  event `banner-closed` will be sent with payload which was set with show()
   */
  _close() {
    /**
     * @event banner-closed
     * Fired when banner is closed
     * detail payload: {Object}  payload
     */
    let customEvent = new Event("banner-closed", {composed: true, bubbles: true});
    customEvent.detail = this.payload;
    this.dispatchEvent(customEvent);
  }

  /**
   * parse grpc status object and set the label according to the LocalizedMessage in status
   * https://github.com/googleapis/googleapis/blob/master/google/rpc/status.proto
   * @param s
   */
  parseGrpcStatus(status) {
    // log developper message
    if (status.details && status.details.length > 0) {
      // fallback, if no localized message was given
      this.setText(status.message);
      this.multilineText = status.details
          .filter((det) => {
            return det["@type"].includes("LocalizedMessage");
          })
          .map((det) => {
            return det.message;
          });
      this.show(status);
    }
  }

  static get styles() {
    return css`:host {display:none}`
  }


}

customElements.define('furo-banner', FuroBanner);
