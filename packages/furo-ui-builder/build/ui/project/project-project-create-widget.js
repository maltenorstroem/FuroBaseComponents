// Code generated by @furo/ui-builder. DO NOT EDIT.
// source: ../furo-specs/specs/project/project.type.spec
import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Theme} from "@furo/framework/theme"
import {i18n} from "@furo/framework/i18n"


import "@furo/data-input";
import "@furo/layout";
import "@furo/form";

/**
 * `project-project-create-widget`
 * Project description
 *
 * @customElement
 * @appliesMixin FBP
 */
export class ProjectProjectCreateWidget extends FBP(LitElement) {
    /**
     * flow is ready lifecycle method
     */
    _FBPReady() {
        super._FBPReady();
        //this._FBPTraceWires();
    }

    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('WidgetBaseTheme') || css`
            :host {
                display: block;
            }
            :host([hidden]) {
                display: none;
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
     }

    /**
     * @private
     * @returns {TemplateResult}
     */
    render() {
        // language=HTML
        return html`
            <furo-card>
                <!--   -->
                
                
                <furo-form-layouter>
                    <!-- Project cost limit  -->
                    <furo-data-money-input condensed double ƒ-bind-data="--data(*.cost_limit)"></furo-data-money-input>
                </furo-form-layouter>
                

                <furo-horizontal-flex slot="action" space>
                    <furo-button rel="create" primary  label="${i18n.t('create')}" @-click="-^create-req"></furo-button>
                </furo-horizontal-flex>

            </furo-card>
        `;
    }

}

window.customElements.define('project-project-create-widget', ProjectProjectCreateWidget);
