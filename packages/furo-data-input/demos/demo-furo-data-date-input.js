import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/src/furo-catalog.js';
import '@furo/data/src/furo-data-object.js';
import '@furo/data/src/furo-deep-link';
import './helper/produce-qp-data.js';
import '@furo/data/src/furo-entity-agent';

/**
 * `demo-furo-data-date-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataDateInput extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroDataDateInput') ||
      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
        }

        :host([hidden]) {
          display: none;
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
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-data-date-input</h2>
          <p>
            Bind the field from furo-data-object with
            <strong>ƒ-bind-data="--entityReady(*.data.fields.fieldname)"</strong>. The labels,
            hints, defaults are comming from the furo-data-object specs.
          </p>
          <p>As you can see, the "data-binding" is done by the furo-data-object.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-form-layouter four>
              <furo-data-date-input
                autofocus
                ƒ-bind-data="--entity(*.data.furo_data_date_input)"
                hint="Hint should come from spec and overflows"
              ></furo-data-date-input>
              <furo-data-date-input
                leading-icon="fingerprint"
                label="with step"
                required
                step="30"
                ƒ-bind-data="--entity(*.data.furo_data_date_input)"
                @-value-changed="--dateChanged"
                hint="but that should be ok"
              ></furo-data-date-input>
              <furo-data-date-input
                flex
                label="min max"
                min="2012-01-01"
                max="2025-12-08"
                ƒ-bind-data="--entity(*.data.furo_data_date_input)"
              ></furo-data-date-input>
              <furo-data-date-input
                disabled
                label="with step"
                step="7"
                ƒ-bind-data="--entity(*.data.furo_data_date_input)"
              ></furo-data-date-input>

              <furo-data-date-input
                ƒ-bind-data="--entity(*.data.furo_data_date_input_google)"
              ></furo-data-date-input>
              <furo-data-date-input
                step="any"
                min="0001-01-01"
                ƒ-bind-data="--entity(*.data.furo_data_date_input_google)"
              ></furo-data-date-input>
            </furo-form-layouter>

            <produce-qp-data @-data="--qp" qpescaped="%7B%22exp%22%3A1%7D"></produce-qp-data>

            <furo-data-object
              type="experiment.ExperimentEntity"
              @-object-ready="--entity"
              ƒ-inject-raw="--response"
            ></furo-data-object>
            <furo-deep-link
              service="ExperimentService"
              @-hts-out="--hts"
              ƒ-qp-in="--qp"
            ></furo-deep-link>
            <furo-entity-agent
              service="ExperimentService"
              ƒ-hts-in="--hts"
              ƒ-load="--hts"
              ƒ-bind-request-data="--entity"
              @-response="--response"
            >
            </furo-entity-agent>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-date-input', DemoFuroDataDateInput);
