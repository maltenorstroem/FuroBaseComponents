import {LitElement, html} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Env} from "@furo/framework"

/**
 * `deep-link`
 *
 * @customElement
 * @demo demo/form.html
 * @appliesMixin FBP
 */
class DeepLink extends FBP(LitElement) {

  constructor() {
    super();
    this._servicedefinitions = Env.api.services;
  }

  static get properties() {
    return {
      /**
       * @type {object|QueryParams} Query Params
       */
      qp: {type: Object},

      /**
       * Name des Services
       */
      service: {type: String, attribute: true}
    };
  }


  trigger() {
    if (this._qp && this._service) {
      this._buildHTS(this._qp, this._service)
    }
  }

  _buildHTS(qp, service) {
    this._hts = [];

    // loop services
    for (let serviceName in service.services) {
      let candidate = {
        "rel": service.services[serviceName].deeplink.rel,
        "href": service.services[serviceName].deeplink.href,
        "method": service.services[serviceName].deeplink.method
      };


      candidate.type = service.services[serviceName].request;

      for (let param in this._qp) {
        candidate.href = candidate.href.replace("{" + param + "}", this._qp[param]);
      }
      //wenn es keine {xx} mehr hat, ist es ein treffer
      if (candidate.href.indexOf("{") === -1) {
        //candidate.type = "application/" + candidate.type + "+json"
        this._hts.push(candidate);
      }
    }
    if (this._hts.length) {
      /**
       * @event hts-out
       * Fired when hateoas is available
       * detail payload: {[]Links} Array of hateoas links
       */
      let customEvent = new Event('hts-out', {composed: true, bubbles: true});
      customEvent.detail = this._hts;
      this.dispatchEvent(customEvent)
    }

  }

  set qp(qp) {
    // zwischenspeichern für einen ev. ƒ-trigger
    this._qp = qp;
    this.trigger();
  }

  /**
   * Inject a QueryParams (key value) Object
   * @param {object|QueryParams} qp
   */
  injectQueryParams(qp) {
    // zwischenspeichern für einen ev. ƒ-trigger
    this._qp = qp;
    this.trigger();
  }

  /**
   * Setze den Service
   * @param service
   */
  set service(service) {
    if (!this._servicedefinitions[service]) {
      console.error("service " + service + " does not exist", this, "Available Services:", this._servicedefinitions);
      return
    }
    this._service = this._servicedefinitions[service];

    if (this._service.general.lifecycle.deprecated) {
      console.warn("You are using a deprecated service (" + service + ") " + this._service.general.lifecycle.info);
    }
  }


}

window.customElements.define('deep-link', DeepLink);
