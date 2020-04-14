import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import '@furo/fbp/src/flow-repeat';
import './furo-doc-events-item.js';

/**
 * `furo-doc-events`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class FuroDocEvents extends FBP(LitElement) {
  constructor() {
    super();
    // eslint-disable-next-line wc/no-constructor-attributes
    this.hidden = true;
  }

  /**
   * @private
   * @return {Object}
   */
  static get events() {
    return {
      /**
       * hide props if empty
       */
      hidden: { type: Boolean, reflect: true },
    };
  }

  data(data) {
    if (Array.isArray(data)) {
      this._FBPTriggerWire('--data', data);

      // eslint-disable-next-line no-param-reassign
      data = data.sort((a, b) => {
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        // eslint-disable-next-line no-nested-ternary
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });

      this.removeAttribute('hidden');
    } else {
      this.setAttribute('hidden', '');
    }
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroDocEvents') ||
      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }

        h2 {
          margin-top: 48px;
          font-size: 1.25rem;
          font-weight: 500;
          letter-spacing: 0.0125em;
          border-bottom: 1px solid rgba(0, 0, 0, 0.87);
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <h2>Events</h2>
      <template is="flow-repeat" ƒ-inject-items="--data">
        <furo-doc-events-item ƒ-data="--item"></furo-doc-events-item>
      </template>
    `;
  }
}

window.customElements.define('furo-doc-events', FuroDocEvents);
