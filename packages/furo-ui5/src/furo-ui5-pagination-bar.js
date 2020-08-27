import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';

import '@furo/layout';
import '@ui5/webcomponents/dist/Button.js';
import '@ui5/webcomponents-icons/dist/icons/sys-first-page.js';
import '@ui5/webcomponents-icons/dist/icons/sys-last-page.js';
import '@ui5/webcomponents-icons/dist/icons/sys-next-page.js';
import '@ui5/webcomponents-icons/dist/icons/sys-prev-page.js';

// eslint-disable-next-line no-unused-vars
import { i18n } from '@furo/framework/src/i18n.js';

/**
 * `furo-ui5-pagination-bar`
 * this pagination element loops the hts array and find out the pagination
 * information like prev, next, first and last
 *
 *
 * Tags: pagination
 * @summary Pagination Bar
 * @customElement
 * @demo demo-furo-ui5-pagination-bar Basic Usage
 * @mixes FBP
 */
class FuroUi5PaginationBar extends FBP(LitElement) {
  /**
   * @event pagination-first
   * Is fired if the pagination button 'sys_first_page' was clicked
   */

  /**
   * @event pagination-last
   * Is fired if the pagination button 'sys_last_page' was clicked
   */

  /** @event pagination-prev
   * Is fired if the pagination button 'sys_prev_page' was clicked
   */

  /**
   * @event pagination-next
   * Is fired if the pagination button 'sys_next_page' was clicked
   */

  constructor() {
    super();
    this.currentPage = 0;
  }

  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroUi5PaginationBar') ||
      css`
        :host {
          width: 100%;
          display: block;
          padding: var(--spacing-xs) 0 var(--spacing-xs) 0;
          background-color: var(
            --furo-ui5-pagination-bar-background-color,
            var(--surface-light, #fff)
          );
        }

        :host([hidden]) {
          display: none;
        }

        span {
          line-height: 36px;
        }
      `
    );
  }

  /**
   *@private
   */
  static get properties() {
    return {
      currentPage: {
        type: Number,
      },
      first: {
        type: Boolean,
      },
      prev: {
        type: Boolean,
      },
      next: {
        type: Boolean,
      },
      last: {
        type: Boolean,
      },
    };
  }

  /**
   * init pagination attributes
   * @param hts
   */
  inject(hts) {
    this._disableAll();
    const self = this;
    hts.forEach(link => {
      switch (link.rel) {
        case 'first':
          self.first = true;
          break;
        case 'prev':
          self.prev = true;
          break;
        case 'next':
          self.next = true;
          break;
        case 'last':
          self.last = true;
          break;
        case 'self':
          self.getCurrentPage(link.href);
          break;
        default:
          break;
      }
    });

    /**
     * @error hts-injected
     * Is fired if HATEOAS Array is successfully injected
     */
    this.dispatchEvent(
      new CustomEvent('hts-injected', {
        detail: hts,
        bubbles: true,
        composed: true,
      }),
    );
  }

  _disableAll() {
    this.first = false;
    this.prev = false;
    this.next = false;
    this.last = false;
  }

  /**
   * get current page number via self link: page=xx
   * @private
   * @param href
   */
  getCurrentPage(href) {
    if (href) {
      const regex = /page=[\d]*/;
      const page = href.match(regex);
      if (page && page.length > 0) {
        this.currentPage = page[0].substring(5);
      }
    }
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <furo-horizontal-flex>
        <furo-empty-spacer></furo-empty-spacer>
        <ui5-button
          title="${i18n.t('sys_first_page')}"
          design="Transparent"
          @-click="^^pagination-first"
          icon="sys-first-page"
          ?disabled="${!this.first}"
        ></ui5-button>
        <ui5-button
          title="${i18n.t('sys_prev_page')}"
          design="Transparent"
          @-click="^^pagination-prev"
          icon="sys-prev-page"
          ?disabled="${!this.prev}"
        ></ui5-button>
        ${this.currentPage
          ? html`
              <span>${this.currentPage}</span>
            `
          : html``}
        <ui5-button
          title="${i18n.t('sys_next_page')}"
          design="Transparent"
          @-click="^^pagination-next"
          icon="sys-next-page"
          ?disabled="${!this.next}"
        ></ui5-button>
        <ui5-button
          title="${i18n.t('sys_last_page')}"
          design="Transparent"
          @-click="^^pagination-last"
          icon="sys-last-page"
          ?disabled="${!this.last}"
        ></ui5-button>
      </furo-horizontal-flex>
    `;
  }
}

customElements.define('furo-ui5-pagination-bar', FuroUi5PaginationBar);
