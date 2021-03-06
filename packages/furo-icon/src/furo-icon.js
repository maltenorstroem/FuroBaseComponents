import { LitElement, html, css } from 'lit-element';
import { Iconset } from '@furo/framework/src/furo.js';
import { FuroBaseIcons } from '../assets/iconsets/baseIcons.js';

// Autoregister default set with FuroBaseIcons if no iconset was registered
if (!Iconset.default) {
  Iconset.registerIconset('default', FuroBaseIcons);
}

/**
 * `furo-icon`
 *
 * to use furo icon you should
 * first import a svg set of icons and register it to @furo/framework/src/iconset
 *
 *
 *
 *```js
 * the set of icons can be defined in a iconSetName.js file which has content like this:
 *     export const iconSetName = {
 *          "iconName":"<g><path d='M12 xx.... z'></path></g>",
 *          "left-arrow":"<g><path d='M12 xx.... z'></path></g>"
 *          ...
 *     };
 * then import the iconset and register it
 * import {iconSetName} from "./iconSetName";
 * import {Iconset} from "@furo/framework/src/furo.js";
 * Iconset.registerIconset( "iconSetName", iconSetName);
 *```
 *
 * You can find some set in ./iconsets/...
 *
 * after registering you can use those icons in furo-icon in any other component
 *
 * ```html
 * <furo-icon icon="iconSetName:iconName"></furo-icon>
 * ```
 *
 * if you have imported an iconset with the name **default**, you can use the icon without set name:
 *
 * ```html
 * <furo-icon icon="iconName" ></furo-icon>
 *```
 *
 * use css variable '--furo-icon-width' and '--furo-icon-height' to define the size
 * use '--furo-icon-fill-color' and '--furo-icon-stroke-color'  to define the fill and stroke colors
 *
 * you can also define other properties lik viewport ,preserveAspectRatio...
 * @summary furo icon
 * @customElement
 * @demo demo-furo-icon-list list of the icons
 * @demo demo-furo-icon example usage
 */
class FuroIcon extends LitElement {
  constructor() {
    super();

    this.viewBox = '0 0 24 24';
    this.preserveAspectRatio = 'xMidYMid meet';
    this.focusable = 'false';
    this.svgstyle = 'pointer-events: none; display: block; width: 100%; height: 100%;';
  }

  /**
   * @private
   * @returns {CSSResult}
   *
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: inline-block;
        vertical-align: middle;
        fill: var(--furo-icon-fill-color, currentcolor);
        stroke: var(--furo-icon-stroke-color, none);
        width: var(--furo-icon-width, 24px);
        height: var(--furo-icon-height, 24px);

        position: relative;
        justify-content: center;
      }

      :host([hidden]) {
        display: none;
      }
    `;
  }

  /**
   *@private
   */
  static get properties() {
    return {
      icon: {
        type: String,
      },

      viewBox: {
        type: String,
        attribute: 'view-box',
      },

      focusable: {
        type: Boolean,
      },

      preserveAspectRatio: {
        type: String,
        attribute: 'preserve-aspect-ratio',
      },

      style: {
        type: String,
      },
    };
  }

  /**
   * @private
   */
  updated() {
    if (this.icon !== undefined) {
      const w = this.icon.split(':');

      // set iconset to default when no iconset name is given
      if (w[1] === undefined) {
        // eslint-disable-next-line prefer-destructuring
        w[1] = w[0];
        w[0] = 'default';
      }

      this.shadowRoot.getElementById('furo-icon-svg').innerHTML = Iconset.get(w[0], w[1]);
    }
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <svg
        id="furo-icon-svg"
        viewBox=${this.viewBox}
        preserveAspectRatio=${this.preserveAspectRatio}
        focusable=${this.focusable}
        style=${this.svgstyle}
      ></svg>
    `;
  }
}

customElements.define('furo-icon', FuroIcon);
