import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Theme} from "@furo/framework/src/theme.js"
import {Styling} from "./styling";


import "./home/view-home";
import "./components/header-toolbar";
import "@furo/notification/src/furo-snackbar-display"

import '@furo/layout/src/furo-vertical-flex'
import '@furo/route/src/furo-location'
import '@furo/route/src/furo-pages'
import '@furo/route/src/furo-app-flow'
import '@furo/fbp/src/flow-bind'
import '@furo/app/src/furo-tooltip-display'


/**
 * `main-stage`
 *
 * @customElement
 * @appliesMixin FBP
 */
class MainStage extends FBP(LitElement) {

  constructor() {
    super();
  }

  _FBPReady() {
    super._FBPReady();
    /**
     * Register hook on wire --locationChanged to
     * Lazy load parts of the page
     */
    this._FBPAddWireHook("--locationChanged", (e) => {
      switch (e.pathSegments[0]) {
        case "guide":
          import ("./guide/view-guide");
          break;
       case "spec":
          import ("./spec/view-spec");
          break;

      }
    });
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {

    let theme = Theme.getThemeForComponent('MainStage');
    if (theme) {
      return [theme, Styling.theme]
    } else {
      // language=CSS
      return [css`
          :host {
              height: 100%;
              display: block;
              margin: 0;
              color: var(--on-primary, #212121);
              background-color: var(--background);
              font-family: "Roboto", "Noto", sans-serif;
              line-height: 1.5;
              overflow-x: hidden;
          }


          furo-pages {
              height: 100vh;
              overflow: hidden;
          }

      `, Styling.theme]
    }
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`

     
        <furo-pages flex ƒ-inject-location="--locationChanged" default="FuroBaseComponents">
          <view-home name="FuroBaseComponents"></view-home>
          <view-guide name="guide"></view-guide>
          <view-api name="api"></view-api>
          <view-spec name="spec"></view-spec>
        </furo-pages>

       
      <furo-location @-location-changed="--locationChanged"></furo-location>
        <furo-snackbar-display></furo-snackbar-display>
        <furo-tooltip-display></furo-tooltip-display>
    `;
  }

}

window.customElements.define('main-stage', MainStage);
