import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import '@furo/util/src/furo-markdown';
import './furo-doc/furo-doc-properties.js';
import './furo-doc/furo-doc-methods.js';
import './furo-doc/furo-doc-events.js';
import './furo-doc/furo-demo-link.js';

/**
 * `furo-doc-element`
 * Renders a analysis file
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class FuroDocElement extends FBP(LitElement) {
  constructor() {
    super();
    this.element = {};
  }

  hide() {
    this.setAttribute('hidden', '');
  }

  print(analysisElement) {
    this.element = analysisElement;
    this._FBPTriggerWire('--data', this.element);

    if (this.element.demos) {
      this.element.demos.forEach((d, i) => {
        // eslint-disable-next-line no-param-reassign
        d.docurl = `?t=demo-${this.element.name}-${i}`;
      });

      this._FBPTriggerWire('--demos', this.element.demos);
    }

    this.removeAttribute('hidden');
    this.requestUpdate();
    this.scrollTop = 0;
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
      Theme.getThemeForComponent('FuroDocElement') ||
      css`
        :host {
          display: block;
          font-weight: 400;
          font-size: 14px;
          max-width: 1024px;
        }

        :host([hidden]) {
          display: none;
        }

        h1 {
          font-size: 2.8rem;
          font-weight: 400;
          line-height: 3.5rem;
          margin-top: 0;
          letter-spacing: normal;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        h2.description {
          margin-top: 20px;
          margin-bottom: 24px;
          max-width: 600px;
          color: #999;
          border-bottom: none;
        }
        h2 {
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
      <h1>&lt; ${this.element.tagname} &gt;</h1>
      <h2 class="description">${this.element.summary}</h2>
      <h2>Description</h2>
      <furo-markdown unsafe ƒ-parse-markdown="--data(*.description)"></furo-markdown>
      <h2>Demos</h2>
      <template is="flow-repeat" ƒ-inject-items="--demos">
        <furo-demo-link ƒ-inject-data="--item"></furo-demo-link>
      </template>
      <furo-doc-properties ƒ-data="--data(*.properties)"></furo-doc-properties>
      <furo-doc-events ƒ-data="--data(*.events)"></furo-doc-events>
      <furo-doc-methods ƒ-data="--data(*.methods)"></furo-doc-methods>
    `;
  }
}

window.customElements.define('furo-doc-element', FuroDocElement);
