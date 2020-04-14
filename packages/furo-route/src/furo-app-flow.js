import { LitElement } from 'lit-element';

// to ensure that data is of type FuroAppFlow
function TypeAppFlow(name) {
  this.event = name;
  this.data = {};
}

/**
 * `furo-app-flow`
 *
 * @summary Application Flow => routing
 * @customElement
 * @appliesMixin FBP
 */
class FuroAppFlow extends LitElement {
  constructor() {
    super();
    // eslint-disable-next-line wc/no-constructor-attributes
    this.style.display = 'none';
  }

  static get properties() {
    return {
      /**
       * Name of your app-flow event object
       *
       * i.e. 'task-clicked', 'wizard-step1-completed',...
       */
      event: { type: String },
    };
  }

  setQp(qp) {
    this._qp = qp;
  }

  static set qp(qp) {
    this._qp = qp;
  }

  trigger() {
    this.emit(this._qp);
  }

  /**
   * fire the app-flow event
   * @param {object|QueryParams} QueryParam Object
   */
  emit(queryParams) {
    const data = new TypeAppFlow(this.event);

    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const param in queryParams) {
      data.data[param] = queryParams[param];
    }

    /**
     * @event app-flow
     *
     * App-flow event with app-flow object will be fired when you trigger the `emit` function.
     * detail payload: data
     */
    const customEvent = new Event('app-flow', { composed: true, bubbles: true });
    customEvent.detail = data;
    this.dispatchEvent(customEvent);
    return customEvent;
  }
}

window.customElements.define('furo-app-flow', FuroAppFlow);
