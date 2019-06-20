import { LitElement, html, css } from 'lit-element';
import {Iconset} from "@furo/framework/iconset";

/**
 * `furo-icon`
 * Lit element
 * to use furo icon you should
 * first import a svg set of icons and register it to @furo/framework/iconset
 *
 * the set of icons can be defined in a iconSetName.js file which has content like this:
 *     export const iconSetName = {
 *          "iconName":"<g><path d='M12 xx.... z'></path></g>",
 *          "left-arrow":"<g><path d='M12 xx.... z'></path></g>"
 *          ...
 *     };
 * then import the iconset and register it
 * import {iconSetName} from "./iconSetName";
 * import {Iconset} from "@furo/framework/furo.js";
 * Iconset.registerIconset( "iconSetName", iconSetName);
 *
 * after registering you can use those icons in furo-icon in any other component
 * <furo-icon icon="iconSetName:iconName"></furo-icon>
 *
 * use css variable '--furo-icon-width' and '--furo-icon-height' to define the size
 * use '--furo-icon-fill-color' and '--furo-icon-stroke-color'  to define the fill and stroke colors
 *
 * you can also define other properties lik viewport ,preserveAspectRatio...
 * @summary furo icon
 * @customElement
 * @demo demo/index.html
 */
class FuroIcon extends LitElement {


    constructor(){

      super();

      this.viewBox = '0 0 24 24';
      this.preserveAspectRatio = 'xMidYMid meet';
      this.focusable = 'false';
      this.style = 'pointer-events: none; display: block; width: 100%; height: 100%;';
    }


    /**
     * @private
     * @returns {CSSResult}
     */
    static get styles() {
        return css`
            :host {
                display: inline-block;
                vertical-align: middle;
                fill: var(--furo-icon-fill-color, black);
                stroke: var(--furo-icon-stroke-color, none);
                width: var(--furo-icon-width, 24px);
                height: var(--furo-icon-height, 24px);
            }
    
           :host([hidden]) {
                display: none;
            }
        `;
    }

    /**
     *@private
     */
    static get properties(){

        return {

            icon: {
                type: String
            },

            viewBox: {
                type: String,
                attribute: 'view-box'
            },

            focusable: {
                type: Boolean
            },

            preserveAspectRatio: {
                type: String,
                attribute: 'preserve-aspect-ratio'
            },

            style: {
                type: String
            }


        };
    }

    /**
     * @private
     * @param changedProperties
     */
    updated(changedProperties) {

        if(this.icon !== undefined) {

            let w = this.icon.split(":");
            this.shadowRoot.getElementById("furo-icon-svg").innerHTML = Iconset.get(w[0],w[1]);
        }
        else {
            console.warn("icon name is not defined.")
        }

    }


    /**
     * @private
     * @returns {TemplateResult}
     */
    render(){
        return html`<svg id="furo-icon-svg" viewBox=${this.viewBox} preserveAspectRatio=${this.preserveAspectRatio} focusable=${this.focusable} style=${this.style}></svg>`;
    }

}

customElements.define('furo-icon', FuroIcon);
