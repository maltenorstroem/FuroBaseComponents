import { LitElement, html, css } from 'lit-element';
import { FBP } from '@furo/fbp';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@ui5/webcomponents/dist/Card.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@ui5/webcomponents/dist/Icon.js';

/**
 * `furo-ui5-card`
 * Lit element
 *
 * @customElement
 * @demo demo-furo-ui5-card Basic Usage
 * @demo demo-furo-ui5-card-binding With data binding
 */
class FuroUi5Card extends FBP(LitElement) {
  constructor() {
    super();
    this.icon = '';
    this.heading = '';
    this.subheading = '';
    this.headerInteractive = false;
  }


  /**
   * Bind any **scalar** field to set the title of the panel.
   * @param fieldNode
   */
  bindHeading(fieldNode) {
    if (fieldNode === undefined) {
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }
    this.heading = fieldNode._value;
    fieldNode.addEventListener("field-value-changed", () => {
      this.heading = fieldNode._value;
    })
  }

  /**
   * Bind any **scalar** field to set the title of the panel.
   * Do not forget to import the icon you will use in your component.
   * @param fieldNode
   */
  bindIcon(fieldNode) {
    if (fieldNode === undefined) {
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }
    this.icon = fieldNode._value;
    fieldNode.addEventListener("field-value-changed", () => {
      this.icon = fieldNode._value;
    })
  }

  /**
   * Bind any **scalar** field to set the subtitle of the panel.
   * @param fieldNode
   */
  bindSubheading(fieldNode) {
    if (fieldNode === undefined) {
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }
    this.subheading = fieldNode._value;
    fieldNode.addEventListener("field-value-changed", () => {
      this.subheading = fieldNode._value;
    })
  }

  /**
   * bind a tree.Navigationnode field
   * @param fieldNode
   */
  bindNavNode(fieldNode) {

    if (fieldNode === undefined || fieldNode.display_name === undefined) {
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }

    this._field = fieldNode;
    this._field.addEventListener('this-branch-value-changed', () => {
      this._setNavNodeSignatureValues();
    });

    this._setNavNodeSignatureValues();
  }

  /**
   * update attributes according to the value of tree.Navigationnode signature
   * @private
   */
  _setNavNodeSignatureValues() {
    this.heading = this._field.display_name._value;
    if(this._field.secondary_text !== undefined){
      this.subheading = this._field.secondary_text._value;
    }
    if(this._field.icon !== undefined && this._field.icon._value !== undefined) {
      this.icon = this._field.icon._value;
    }
  }

  /**
   * @private
   * @returns {CSSResult}
   */
  static get styles() {
    return css`
      :host {
        display: block;
        opacity: 1;
        transition: opacity ease-in-out 120ms;
      }

      :host([hidden]) {
        display: none;
      }

      :host([transparent]) {
        opacity: 0;
      }

      ui5-card {
        height: 100%;
      }

      :host([design='Positive']) ui5-icon {
        background-color: var(--sapPositiveColor);
      }

      :host([design='Negative']) ui5-icon {
        background-color: var(--sapNegativeColor);
      }

      :host([design='Critical']) ui5-icon {
        background-color: var(--sapCriticalColor);
      }

      :host([design='Neutral']) ui5-icon {
        background-color: var(--sapNeutralColor);
      }


      ui5-icon {
        width: 3rem;
        height: 2rem;
        padding: var(--spacing-xs);
        border-radius: 4px;
        color: var(--sapBaseColor);
        background-color: var(--sapShellColor);
      }

      ::slotted([slot=content]) {
        padding: var(--_ui5_card_content_padding) ;
      }

    `;
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Defines the title displayed in the ui5-card header.
       */
      heading: {type: String},
      /**
       * Defines the subheading displayed in the ui5-card header.
       */
      subheading: {type: String},
      /**
       * Defines the visual representation in the header of the card. Supports images and icons.
       * https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html
       */
      icon: {type: String, reflect: true, attribute: 'icon'},
      /**
       * Defines if the ui5-card header would be interactive, e.g gets hover effect, gets focused and header-click event is fired, when it is pressed.
       * @event header-click
       */
      headerInteractive: {type: Boolean, reflect: true, attribute: 'header-interactive'},
    };
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <ui5-card
        heading="${this.heading}"
        subheading="${this.subheading}"
        ?header-interactive="${this.headerInteractive}"
      >
        ${this.icon.length ? html`<ui5-icon name="${this.icon}" slot="avatar"></ui5-icon>` : html``}

        <div slot="action">
          <slot name="action"></slot>
        </div>

          <slot name="content"></slot>

      </ui5-card>
    `;
  }
}

customElements.define('furo-ui5-card', FuroUi5Card);
