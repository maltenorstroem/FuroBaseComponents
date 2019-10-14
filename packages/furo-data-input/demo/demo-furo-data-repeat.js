import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"
/**
 * `demo-furo-data-repeat`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataRepeat extends FBP(LitElement) {

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
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
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
      <furo-vertical-flex>
        <div>
          <h2>Demo for furo-data-repeat</h2>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-vertical-scroller style="padding: 10px">
              <produce-qp-data auto @-data="--qp" qp={"exp":1}></produce-qp-data>  <simulate-error ƒ-bind-data="--entity" error='{"field":"repstring.1","description":"something went wrong"}'></simulate-error>
            
              <hr>
              <furo-card title="furo-data-repeater demo" secondary-text="On this screen we have 2 repeated items. The one on the right uses furo-data-display">
              <furo-form-layouter two>
                  <furo-data-repeat ƒ-bind-data="--entity(*.repstring)" ƒ-add="--addFieldClicked(null)" repeated-component="furo-data-text-input">
                  </furo-data-repeat>
                  <furo-data-repeat four ƒ-bind-data="--entity(*.repstring)" repeated-component="furo-data-display">
                  </furo-data-repeat>
              </furo-form-layouter>
                <furo-horizontal-flex space slot="action"> <furo-button primary @-click="--addFieldClicked">add field</furo-button></furo-horizontal-flex>
              </furo-card>
              
              
              <furo-data-object type="experiment.Experiment" @-object-ready="--entity" ƒ-inject-raw="--response(*.data)"></furo-data-object>
              <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
              <furo-entity-agent service="ExperimentService"
                                 ƒ-hts-in="--hts"
                                 load-on-hts-in
                                 ƒ-bind-request-data="--entity"
                                 @-response="--response">
              </furo-entity-agent>
              
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-repeat', DemoFuroDataRepeat );
