// Code generated by @furo/ui-builder. DO NOT EDIT.
// source: ../furo-specs/specs/tree/navigationnode.type.spec
import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Theme} from "@furo/framework/theme"
import {i18n} from "@furo/framework/i18n"


import "@furo/data-input";
import "@furo/layout";
import "@furo/form";

/**
 * `tree-navigationnode-create-widget`
 * Item of the navigationtree
 *
 * @customElement
 * @appliesMixin FBP
 */
export class TreeNavigationnodeCreateWidget extends FBP(LitElement) {
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
                </furo-form-layouter>
                

                <furo-horizontal-flex slot="action" space>
                    <furo-button rel="create" primary  label="${i18n.t('create')}" @-click="-^create-req"></furo-button>
                </furo-horizontal-flex>

            </furo-card>
        `;
    }

}

window.customElements.define('tree-navigationnode-create-widget', TreeNavigationnodeCreateWidget);
