// Code generated by @furo/specs. DO NOT EDIT.
// source: ./ui_specs/actions/tree.tree.update.action.spec
import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Theme} from "@furo/framework/theme"
import {i18n} from "@furo/framework/i18n"
import '@furo/form';
import '@furo/input';
import '@furo/layout';


/**
 * service specs for the tree api
 * triggers the events for the entity-agent (TreeService) which is located in the parent panel
 *
 * @customElement
 * @appliesMixin FBP
 */
class treeTreeUpdateAction extends FBP(LitElement) {

    static get styles() {
        // language=CSS
         return Theme.getThemeForComponent('ActionBaseTheme') || css`
                :host {
                    display: block;
                }

                :host([hidden]) {
                    display: none;
                }

                furo-button-bar {
                    margin: var(--spacing);
                    padding-bottom: var(--spacing);
                }
            `
    }

    /**
     * Bind an entity data object. This will be forwarded to the furo-button-bar element inside this element.
     * The expected entity is of type tree.TreeEntity
     *
     * @param entity
     */
    bindEntity(entity){
        this._FBPTriggerWire("--entityObjectInjected",entity)
    }

    /**
     * @private
     * @returns {TemplateResult|TemplateResult}
     */
    render() {
        // language=HTML
        return html`
          <furo-button-bar ƒ-bind-entity="--entityObjectInjected">
           <furo-button rel="update" primary unelevated  label="${i18n.t('save')}" @-click="-^update-req"></furo-button>
           <furo-button rel="self" outline  label="${i18n.t('reload')}" @-click="-^self-req"></furo-button>
           <furo-empty-spacer ></furo-empty-spacer>
           <furo-button rel="reset" outline  label="${i18n.t('cancel')}" @-click="-^reset-req"></furo-button>
           <furo-button rel="delete" unelevated danger  label="${i18n.t('delete')}" @-click="-^delete-req"></furo-button>
          </furo-button-bar>
        `;
    }

}

window.customElements.define('tree-tree-update-action', treeTreeUpdateAction);
