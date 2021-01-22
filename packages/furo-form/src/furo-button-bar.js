import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import '@furo/layout/src/furo-horizontal-flex';

/**
 * `furo-button-bar`
 *
 * Tags: form
 * @summary automatic button bar
 * @customElement
 * @demo demo-furo-button-bar Demo button bar
 */
class FuroButtonBar extends LitElement {
  constructor() {
    super();
    this._entity = {};

    // default attribute values for hidden
    this.hideNoRel = true;
    this.hideNotValid = false;
    this.hidePristine = false;

    // default attribute values for disabled
    this.disableNoRel = false;
    this.disableNotValid = true;
    this.disablePristine = true;
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Hides element if condition is true
       * Only available with bindEntity
       */
      hideNoRel: { type: String, attribute: 'hide-no-rel' },
      hideNotValid: { type: String, attribute: 'hide-not-valid' },
      hidePristine: { type: String, attribute: 'hide-pristine' },

      /**
       * Disables element if condition is true
       * Only available with bindEntity
       */
      disableNoRel: { type: String, attribute: 'disable-no-rel' },
      disableNotValid: { type: String, attribute: 'disable-not-valid' },
      disablePristine: { type: String, attribute: 'disable-pristine' },
    };
  }

  /**
   * Entity bind to control elements inside the bar.
   *
   * @param entity
   */
  bindEntity(entity) {
    if (entity && entity.data) {
      this._entity = entity;
      this._entity.addEventListener('this-branch-value-changed', () => {
        this._updateElements(this._entity);
      });
      this._entity.addEventListener('data-object-became-valid', () => {
        this._updateElements(this._entity);
      });
      this._entity.addEventListener('data-object-became-invalid', () => {
        this._updateElements(this._entity);
      });
      this._entity.addEventListener('field-value-changed', () => {
        this._updateElements(this._entity);
      });
      this._entity.addEventListener('data-injected', () => {
        this._updateElements(this._entity);
      });
    } else {
      // eslint-disable-next-line no-console
      console.warn('Invalid binding ', entity, this);
    }
  }

  /**
   * Disable all elements inside
   * Can be used to disable during pending requests
   * e.g. furo-entity-agent @-request-started until @-response or @-response-error
   */
  disableAll() {
    const elems = this.querySelectorAll('*');
    elems.forEach(item => {
      item.setAttribute('disabled', '');
    });
  }

  /**
   * Enables all elements inside if check is true
   * Can be used to enable after a request
   */
  enableAll() {
    if (this._entity && this._entity.data) {
      this._updateElements(this._entity);
    } else {
      const elems = this.querySelectorAll('*');
      elems.forEach(item => {
        item.removeAttribute('disabled');
      });
    }
  }

  /**
   * Enables all elements inside
   * IMPORTANT: all checks are disabled
   */
  enableAllNoChecks() {
    const elems = this.querySelectorAll('*');
    elems.forEach(item => {
      item.removeAttribute('disabled');
    });
  }

  /**
   * Set the default value if any hide/disable attribute  or
   * rel="" attribute is set
   * @param changedProperties
   * @private
   */
  firstUpdated() {
    const nodes = this.querySelectorAll('*');
    nodes.forEach(item => {
      if (
        (item.getAttribute('rel') !== null && item.getAttribute('hide-no-rel') !== null) ||
        item.getAttribute('hide-not-valid') !== null ||
        item.getAttribute('hide-pristine') !== null
      ) {
        item.setAttribute('hidden', '');
      } else if (
        (item.getAttribute('rel') !== null && item.getAttribute('disable-no-rel') !== null) ||
        item.getAttribute('disable-not-valid') !== null ||
        item.getAttribute('disable-pristine') !== null
      ) {
        item.setAttribute('disabled', '');
      }
    });
  }

  /**
   *
   * @param entity
   * @private
   */
  _updateElements(entity) {
    const rels = [];
    entity.links.__childNodes.forEach(item => {
      rels.push(item._value.rel);
    });

    const nodes = this.querySelectorAll('*');
    nodes.forEach(item => {
      // hidden path
      if (
        item.getAttribute('rel') !== null &&
        item.getAttribute('rel').length > 0 &&
        rels.indexOf(item.getAttribute('rel')) === -1 &&
        item.getAttribute('hide-no-rel') !== null
      ) {
        item.setAttribute('hidden', '');
      }
      // not valid
      else if (item.getAttribute('hide-not-valid') !== null && !entity._isValid) {
        item.setAttribute('hidden', '');
      }
      // pristine
      else if (item.getAttribute('hide-pristine') !== null && entity._pristine) {
        item.setAttribute('hidden', '');
      } else {
        item.removeAttribute('hidden');
      }

      // disable path
      if (
        item.getAttribute('rel') !== null &&
        item.getAttribute('rel').length > 0 &&
        rels.indexOf(item.getAttribute('rel')) === -1 &&
        item.getAttribute('disable-no-rel') !== null
      ) {
        item.setAttribute('disabled', '');
      } else if (item.getAttribute('disable-not-valid') !== null && !entity._isValid) {
        item.setAttribute('disabled', '');
      } else if (item.getAttribute('disable-pristine') !== null && entity._pristine) {
        item.setAttribute('disabled', '');
      } else {
        item.removeAttribute('disabled');
      }
    });
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroButtonBar') ||
      css`
        :host {
          display: block;
        }

        ::slotted(*) {
          margin: var(--spacing-xs, 8px) var(--spacing-xs, 8px) var(--spacing-xs, 8px) 0;
        }

        furo-horizontal-flex {
          flex-wrap: wrap;
        }
      `
    );
  }

  /**
   *
   * @returns {TemplateResult|TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <furo-horizontal-flex>
        <slot></slot>
      </furo-horizontal-flex>
    `;
  }
}

window.customElements.define('furo-button-bar', FuroButtonBar);
