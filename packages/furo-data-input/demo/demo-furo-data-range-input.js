import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"
import "@furo/data/furo-data-object";
import "@furo/data/furo-deep-link";
import "./helper/produce-qp-data";
import "@furo/data/furo-entity-agent";
import "@furo/input/furo-text-input";

/**
 * `demo-furo-data-range-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataRangeInput extends FBP(LitElement) {

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('DemoFuroDataRangeInput') || css`
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
        <div><h2>Demo furo-data-range-input</h2>
          <p>Bind the field from furo-data-object with <strong>ƒ-bind-data="--entityReady(*.fieldname)"</strong>.
            The labels, hints, defaults are comming from the furo-data-object specs.</p>
          <p>As you can see, the "data-binding" is done by the furo-data-object.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            
            <furo-horizontal-flex>
              <furo-data-range-input autofocus ƒ-bind-data="--entity(*.furo_data_range_input)"
                                      hint="min, max and step come from spec" @-value-changed="--numberChanged"></furo-data-range-input>
              <furo-data-range-input label="with custom step" step="0.5" ƒ-bind-data="--entity(*.furo_data_range_input)"
                                      hint="min and max come from spec, custom step 0.5"
                                      @-value-changed="--numberChanged"></furo-data-range-input>
              <furo-data-range-input flex label="min max" min="1" max="9" hint="min 1, max 9, step from sepc"
                                      ƒ-bind-data="--entity(*.furo_data_range_input)"></furo-data-range-input>
              <furo-data-range-input label="disabled" disabled label="with step" step="3"
                                      hint="min and max come from spec, custom step 3"
                                      ƒ-bind-data="--entity(*.furo_data_range_input)"></furo-data-range-input>
              <furo-data-range-input></furo-data-range-input>
              <furo-data-number-input label="range value" ƒ-bind-data="--entity(*.furo_data_range_input)"></furo-data-number-input>
            </furo-horizontal-flex>
              
            <produce-qp-data @-data="--qp" qp={"exp":1}></produce-qp-data>

            <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                              ƒ-inject-raw="--response(*.data)"></furo-data-object>
            <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
            <furo-entity-agent service="ExperimentService"
                               ƒ-hts-in="--hts"
                               ƒ-load="--hts"
                               ƒ-bind-request-data="--entity"
                               @-response="--response">
            </furo-entity-agent>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-range-input', DemoFuroDataRangeInput);
