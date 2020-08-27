import { LitElement } from 'lit-element';
import { FBP } from '@furo/fbp';

/**
 * `qp-changer`
 * updates the query params in the url
 *
 *
 *
 * @summary deep linking helper
 * @customElement
 * @demo demo-furo-panel-coordinator update qp from tree
 * @appliesMixin FBP
 */
class FuroQpChanger extends FBP(LitElement) {
  setQp(newQP) {
    // read current qp and update incomming qp

    const newQuery = window.location.search.slice(1);
    const queryObject = {};
    if (newQuery.length > 0) {
      newQuery.split('&').forEach(qstr => {
        const p = qstr.split('=');
        // eslint-disable-next-line prefer-destructuring
        queryObject[p[0]] = p[1];
      });
    }
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const param in newQP) {
      queryObject[param] = newQP[param];
    }

    const qp = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const segment in queryObject) {
      // eslint-disable-next-line no-prototype-builtins
      if (queryObject.hasOwnProperty(segment)) {
        qp.push(`${segment}=${queryObject[segment]}`);
      }
    }
    const location = `${window.location.pathname}?${qp.join('&')}${window.location.hash}`;
    if( this._lastLocation !== location){


    // notify furo location
    window.history.pushState(
      {},
      '',
      location,
    );

    const now = window.performance.now();
    const customEvent = new Event('__furoLocationChanged', { composed: true, bubbles: true });
    customEvent.detail = now;
    this.dispatchEvent(customEvent);
      this._lastLocation = location;
    }
  }
}

window.customElements.define('furo-qp-changer', FuroQpChanger);
