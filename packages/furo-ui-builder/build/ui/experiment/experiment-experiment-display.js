// Code generated by @furo/ui-builder. DO NOT EDIT.
// source: ../furo-specs/specs/experiment/experiment.type.spec
import {html, css, LitElement} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Theme} from "@furo/framework/theme"
import {i18n} from "@furo/framework/i18n"


import "@furo/data-input";
import "@furo/form";

/**
 * `experiment-experiment-display`
 * experiment spec for testing
 *
 * @customElement
 * @appliesMixin FBP
 */
export class ExperimentExperimentDisplay extends FBP(LitElement) {
    static get styles() {
        // language=CSS
       return Theme.getThemeForComponent('DisplayBaseTheme') || css`
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
                <!-- Short experiment description  -->
                <furo-data-display condensed double noborder ƒ-bind-data="--data(*.description)"></furo-data-display>
                <!-- field for furo_data_checkbox_input for testing  -->
                <furo-data-display condensed double noborder ƒ-bind-data="--data(*.furo_data_checkbox_input)"></furo-data-display>
                <!-- field for furo_data_text_input for testing  -->
                <furo-data-display condensed double noborder ƒ-bind-data="--data(*.furo_data_text_input)"></furo-data-display>
                <!-- field for furo_data_textarea_input for testing  -->
                <furo-data-display condensed double noborder ƒ-bind-data="--data(*.furo_data_textarea_input)"></furo-data-display>
                <!-- field for furo-data-time-input for testing  -->
                <furo-data-display condensed double noborder ƒ-bind-data="--data(*.furo_data_time_input)"></furo-data-display>
                <!-- field for furo-data-range-input for testing  -->
                <furo-data-display condensed double noborder ƒ-bind-data="--data(*.furo_data_range_input)"></furo-data-display>
                <!-- field for furo-data-number-input for testing  -->
                <furo-data-display condensed double noborder ƒ-bind-data="--data(*.furo_data_number_input)"></furo-data-display>
                <!-- field for furo-data-color-input for testing  -->
                <furo-data-display condensed double noborder ƒ-bind-data="--data(*.furo_data_color_input)"></furo-data-display>
                <!-- field for furo-data-password-input for testing  -->
                <furo-data-display condensed double noborder ƒ-bind-data="--data(*.furo_data_password_input)"></furo-data-display>
                <!-- field for furo-search-input for testing  -->
                <furo-data-display condensed double noborder ƒ-bind-data="--data(*.furo_data_search_input)"></furo-data-display>
                <!-- field for furo-data-date-input for testing  -->
                <furo-data-display condensed double noborder ƒ-bind-data="--data(*.furo_data_date_input)"></furo-data-display>
                <!-- field for furo-data-bool-icon for testing  -->
                <furo-data-display condensed double noborder ƒ-bind-data="--data(*.furo_data_bool_icon)"></furo-data-display>
                <!-- field for testing any  -->
                <furo-data-display condensed double noborder ƒ-bind-data="--data(*.the_any_type)"></furo-data-display>
                <!-- field for testing static options  -->
                <furo-data-display condensed double noborder ƒ-bind-data="--data(*.type_with_options)"></furo-data-display>
                <!-- field for testing property  -->
                <furo-data-property-display condensed double noborder ƒ-bind-data="--data(*.type_property)"></furo-data-property-display>
                <!-- field for furo-data-date-input for testing  -->
                <furo-data-display condensed double noborder ƒ-bind-data="--data(*.furo_data_date_input_google)"></furo-data-display>
                <!-- field for testing property  -->
                <furo-data-property-display condensed double noborder ƒ-bind-data="--data(*.single_type_property)"></furo-data-property-display>
                <!-- repeated string  -->
                <furo-data-repeat condensed double noborder  repeated-component="furo-data-display" ƒ-bind-data="--data(*.repstring)"></furo-data-repeat>
                <!-- field for testing money type  -->
                <furo-data-display condensed double noborder ƒ-bind-data="--data(*.furo_data_money_input)"></furo-data-display>
            </furo-form-layouter>
            
        `;
    }
}

window.customElements.define('experiment-experiment-display', ExperimentExperimentDisplay);
