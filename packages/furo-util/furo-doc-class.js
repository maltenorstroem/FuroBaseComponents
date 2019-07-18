import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "./furo-markdown"
import "./furo-doc/furo-doc-properties"
import "./furo-doc/furo-doc-class-methods"
import "./furo-doc/furo-doc-events"

/**
 * `furo-doc-element`
 * Renders a analysis file
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-doc-element.html
 * @appliesMixin FBP
 */
class FuroDocClass extends FBP(LitElement) {

  constructor() {
    super();
    this.class = {};


  }

  hide(){
    this.setAttribute("hidden","");

  }
  print(analysisElement) {
    this.class = analysisElement;
    this._FBPTriggerWire("--data", this.class);
    this.removeAttribute("hidden");
    this.requestUpdate();
  }


  /**
   * flow is ready lifecycle method
   */
  __fbpReady() {
    super.__fbpReady();
    //this._FBPTraceWires()

  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: block;
            font-weight: 400;
            font-size: 14px;
        }

        :host([hidden]) {
            display: none;
        }
        h1 {
            font-weight: 400;
            line-height: 28px;
            font-size: 20px;
            margin-top: 48px;
            margin: 16px 0;
        }
        h2 {
            font-weight: 400;
            line-height: 28px;
            font-size: 20px;
            margin-top: 48px;
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
      <h1>${this.class.name}</h1>
      <p>${this.class.summary}</p>
      <h2>Description</h2>
      <furo-markdown ƒ-parse-markdown="--data(*.description)"></furo-markdown>
      <furo-doc-properties ƒ-data="--data(*.properties)"></furo-doc-properties>     
      <furo-doc-class-methods ƒ-data="--data(*.methods)"></furo-doc-class-methods>
    `;
  }
}

window.customElements.define('furo-doc-class', FuroDocClass);