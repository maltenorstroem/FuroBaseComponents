// Code generated by @furo/ui-builder. DO NOT EDIT.
// source: ../furo-specs/specs/projectfilter/projectfilter.type.spec
import {html, css, LitElement} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Theme} from "@furo/framework/theme"
import {i18n} from "@furo/framework/i18n"


import "@furo/data-input";
import "@furo/form";
import "../person/person-person-reference-search";

/**
 * `projectfilter-projectfilter-form`
 * Options for possible filter values
 *
 * @customElement
 * @appliesMixin FBP
 */
export class ProjectfilterProjectfilterForm extends FBP(LitElement) {
    static get styles() {
        // language=CSS
       return Theme.getThemeForComponent('FormBaseTheme') || css`
            :host {
                display: block;
            }
            :host([hidden]) {
                display: none;
            }
            h1 {
                font-size: 24px;
                line-height: 24px;
                letter-spacing: 0;
                margin: 0;
                font-weight: normal;
                margin-bottom: 4px;
            }
           .caption{
                font-size: 10px;
                text-transform: uppercase;
                line-height: 32px;
                letter-spacing: 1.5px;
                font-weight: 500;
            }
            .secondary{
                color: var(--secondary-color, var(--on-primary-light,#777777));
                line-height: 22px;
                font-size: 14px;
                letter-spacing: 0.1px;
            }
        `
    }
    /**
     * Bind here your furo-data-object event @-object-ready
     * @public
     * @param data
     */
    bindData(data) {
        this._FBPTriggerWire('--data', data);
        this.field = data;
        
    }

    /**
     * @private
     * @returns {TemplateResult|TemplateResult}
     */
    render() {
        // language=HTML
        return html`
        
            <!--   -->
            
            
            
            <furo-form-layouter four>
                <!-- Filter preset for field description from resource projects  -->
                <furo-data-text-input condensed double ƒ-bind-data="--data(*.description)"></furo-data-text-input>
                <!-- Start date of the project  -->
                <furo-data-date-input condensed double ƒ-bind-data="--data(*.start)"></furo-data-date-input>
                <!-- Prospective end date of the project  -->
                <furo-data-date-input condensed double ƒ-bind-data="--data(*.end)"></furo-data-date-input>
                <!-- List of possible project members  -->
                <person-person-reference-search condensed double ƒ-bind-data="--data(*.members)"></person-person-reference-search>
                <!-- Project cost limit  -->
                <furo-data-money-input condensed double ƒ-bind-data="--data(*.cost_limit)"></furo-data-money-input>
            </furo-form-layouter>
            
        `;
    }
}

window.customElements.define('projectfilter-projectfilter-form', ProjectfilterProjectfilterForm);
