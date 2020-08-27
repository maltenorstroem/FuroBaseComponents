import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-deep-link';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/demos/helper/produce-qp-data.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-entity-agent';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/demos/helper/simulate-error.js';
/**
 * `demo-furo-ui5-data-money-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataMoneyInput extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroUi5DataMoneyInput') ||
      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
          --furo-form-layouter-row-gap: var(--spacing-xs);
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
    // eslint-disable-next-line lit/attribute-value-entities
    return html`
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-ui5-data-money-input</h2>
          <p>
            Bind the field from furo-data-object with
            <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>. The labels, hints,
            defaults are coming from the furo-data-object specs.
          </p>
          <p>As you can see, the "data-binding" is done by the furo-data-object.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-form-layouter two>
              <furo-ui5-data-money-input
                options='{"list": [ {"id":"CHF","label":"Schweiz"},{"id":"EUR","label":"Europa"}]}'
                autofocus
                ƒ-bind-data="--entity(*.furo_data_money_input)"
              ></furo-ui5-data-money-input>
              <furo-ui5-data-money-input
                options='{"list": [ "CHF","EUR","USD" ]}'
                autofocus
                ƒ-bind-data="--entity(*.furo_data_money_input)"
              ></furo-ui5-data-money-input>

              <furo-ui5-data-money-input
                currencies="CHF,EUR,USD"
                autofocus
                ƒ-bind-data="--entity(*.furo_data_money_input)"
              ></furo-ui5-data-money-input>
              <produce-qp-data @-data="--qp" qpescaped="%7B%22exp%22%3A1%7D"></produce-qp-data>
            </furo-form-layouter>
            <furo-pretty-json
              ƒ-inject-data="--dataChanged(*.furo_data_money_input._value)"
            ></furo-pretty-json>

            <furo-data-object
              type="experiment.Experiment"
              @-object-ready="--entity"
              @-data-changed="--dataChanged"
              ƒ-inject-raw="--response(*.data)"
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

window.customElements.define('demo-furo-ui5-data-money-input', DemoFuroUi5DataMoneyInput);
