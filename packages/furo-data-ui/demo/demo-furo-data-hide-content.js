import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "@furo/data-input"
/**
 * `demo-furo-data-hide-content`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataHideContent extends FBP(LitElement) {

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('DemoFuroDataHideContent') || css`
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
        <div>
          <h2>Demo ...</h2>
          <p>Describe your demo</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-vertical-scroller>
              <h3>Data binding</h3>
              <furo-data-checkbox-input  label="hide" ƒ-bind-data="--entity(*.furo_data_checkbox_input)" hint=" "></furo-data-checkbox-input>
         
              
              <h3>Manual controls</h3>
              <furo-button @-click="--showBClicked">show</furo-button>
              <furo-button @-click="--hideBClicked">hide</furo-button>
              <furo-button @-click="--toggleBClicked">toggle</furo-button>
              
              <furo-data-hide-content  ƒ-bind-data="--entity(*.furo_data_checkbox_input)" ƒ-toggle="--toggleBClicked"  ƒ-hide="--hideBClicked" ƒ-show="--showBClicked">
                 <h1>This is the content</h1> 
              </furo-data-hide-content>
              
              
              
                                        
            </furo-vertical-scroller>
            
                                      
          

            <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
                              ƒ-inject-raw="--response(*.data)"></furo-data-object>
            
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-hide-content', DemoFuroDataHideContent );
