import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"

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
        <div><h2>Demo furo-data-date-input</h2>
          <p>Bind the field from entity-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
            The labels, hints, defaults are comming from the entity-object specs.</p>
          <p>As you can see, the "data-binding" is done by the entity-object.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <entity-object type="task.Task" @-object-ready="--entity"></entity-object>
            <furo-horizontal-flex>
              <furo-data-date-input autofocus ƒ-bind-data="--entity(*.fields.id)"
                                      hint="Hint should come from spec and overflows"></furo-data-date-input>
              <furo-data-date-input leading-icon="fingerprint" label="with step" step="30" ƒ-bind-data="--entity(*.fields.id)"
                                      @-value-changed="--dateChanged"
                                      hint="but that should be ok"></furo-data-date-input>
              <furo-data-date-input flex label="min max" min="2012-01-01" max="2025-12-08"
                                      ƒ-bind-data="--entity(*.fields.id)"></furo-data-date-input>
              <furo-data-date-input label="disabled" disabled label="with step" step="7"
                                      ƒ-bind-data="--entity(*.fields.id)"></furo-data-date-input>
            </furo-horizontal-flex>
            <hr>
            <!-- --dateChanged only comes when data was typed in. -->
            <span ƒ-.inner-text="--dateChanged"></span>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-date-input', DemoFuroDataDateInput);
