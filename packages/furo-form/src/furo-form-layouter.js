import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';

/**
 * `furo-form-layouter`
 *
 * Use furo-form-layouter to structure your forms.
 * It is based on a grid system with the following properties:
 * - full-width row (Standard)
 * - two columns
 * - four columns
 *
 * The required variant is set using an attribute.
 * e.g. two, four
 *
 * <furo-form-layouter></furo-form-layouter>
 *
 * To customize the slotted elements inside furo-form-layouter there are several attributes.
 * - double | stretches the element over two units
 * - full | stretches the element to full width
 * - newline | forces a new line
 *
 * ### Styling
 * The following custom properties are available for styling:
 *
 * Custom property | Description | Default  | Fallback
 * ----------------|-------------|----------|----------
 * `--furo-form-layouter-row-gap` | width of row gap | 0px | --
 * `--furo-form-layouter-column-gap` | width of column gap | 0px | --
 *
 * Tags: form
 * @summary Grid based form field row
 * @customElement
 * @demo demo-furo-form-layouter Basic forms
 * @demo demo-furo-form-layouter-complex Complex forms
 * @mixes FBP
 */
class FuroFormLayouter extends FBP(LitElement) {
  constructor() {
    super();
    this.narrow = false;
    this.narrower = false;
    this.breakpointBig = 810;
    this.breakpointSmall = 405;
  }

  _checkSize(width) {
    if (width > 0 && width < this.breakpointBig && width > this.breakpointSmall) {
      this.setAttribute('narrow', '');
      this.narrow = true;
      this.removeAttribute('narrower');
      this.narrower = false;
      this._fireResize();
    } else if (width > 0 && width <= this.breakpointSmall) {
      this.setAttribute('narrower', '');
      this.narrower = true;
      this.removeAttribute('narrow');
      this.narrow = false;
      this._fireResize();
    } else {
      this.removeAttribute('narrow');
      this.removeAttribute('narrower');
      this.narrower = false;
      this.narrow = this.narrower;
    }
  }

  _fireResize() {
    this.dispatchEvent(
      new CustomEvent('layout-changed', {
        detail: this,
        bubbles: true,
        composed: true,
      }),
    );
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()

    this.updateComplete.then(() => {
      if (window.ResizeObserver) {
        const ro = new ResizeObserver(entries => {
          window.requestAnimationFrame(() => {
            for (const entry of entries) {
              this._checkSize(entry.contentRect.width);
            }
          });
        });
        ro.observe(this);
      } else {
        // fallback, just listen to the resize event
        setTimeout(() => {
          const cr = this.getBoundingClientRect();
          this._checkSize(cr.width);
        }, 1);

        window.addEventListener('resize', () => {
          const cr = this.getBoundingClientRect();
          this._checkSize(cr.width);
        });
      }
    });
  }

  static get properties() {
    return {
      /**
       * Set custom breakpoints max. two values
       * Default: "810,405"
       */
      breakpointBig: { type: String, attribute: 'breakpoint-big', reflect: true },
      breakpointSmall: { type: String, attribute: 'breakpoint-small', reflect: true },
      /**
       * Set narrow-fix attribute to force
       * the layout analog to breakpoint big
       */
      narrowFix: {
        type: Boolean,
        attribute: 'narrow-fix',
        reflect: true,
      },
      /**
       * Set narrower-fix attribute to force
       * 1 column view (analog breakpoint small)
       */
      narrowerFix: {
        type: Boolean,
        attribute: 'narrower-fix',
        reflect: true,
      },
    };
  }

  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroFormLayouter') ||
      css`
        :host {
          display: grid;
          grid-row-gap: var(--furo-form-layouter-row-gap, 0px);
          grid-column-gap: var(--furo-form-layouter-column-gap, 0px);
          grid-template-columns: repeat(1, 1fr);
        }

        :host([hidden]) {
          display: none;
        }

        ::slotted(*) {
          width: 100%;
        }

        :host([two]) ::slotted(*[double]) {
          grid-column: span 2 / auto;
        }

        :host([two]) ::slotted(*[newline]) {
          grid-column-start: 1;
          grid-column-end: 2;
        }

        :host([two]) ::slotted(*[newline][double]) {
          grid-column: span 2 / auto;
        }

        :host([two]) ::slotted(*[full]) {
          grid-column: span 2 / auto;
        }

        :host([four]) ::slotted(*[double]) {
          grid-column: span 2 / auto;
        }

        :host([four]) ::slotted(*[newline]) {
          grid-column-start: 1;
          grid-column-end: 2;
        }

        :host([four]) ::slotted(*[newline][double]) {
          grid-column-start: 1;
          grid-column-end: 3;
        }

        :host([four]) ::slotted(*[full]) {
          grid-column: span 4 / auto;
        }

        :host([two]) {
          grid-template-columns: repeat(2, 1fr);
          grid-column-gap: var(--spacing);
        }

        :host([four]) {
          grid-template-columns: repeat(4, 1fr);
          grid-column-gap: var(--spacing);
        }

        :host([narrow]) {
          grid-template-columns: repeat(1, 1fr);
        }

        :host([narrow]) > ::slotted(*[full]) {
          grid-column: auto;
        }

        :host([four][narrow]) {
          grid-template-columns: repeat(1, 1fr);
        }

        :host([four][narrow]) > ::slotted(*[double]) {
          grid-column: auto;
        }

        :host([narrower]) {
          grid-template-columns: repeat(1, 1fr);
        }

        :host([narrower]) > ::slotted(*) {
          grid-column: auto;
        }

        :host([narrow-fix]) {
          grid-template-columns: repeat(1, 1fr);
        }

        :host([four][narrower]) > ::slotted(*) {
          grid-column: auto;
        }

        :host([four][narrow-fix]) {
          grid-template-columns: repeat(2, 1fr);
        }

        :host([four][narrower-fix]) {
          grid-template-columns: repeat(1, 1fr);
        }

        :host([narrower-fix]) {
          grid-template-columns: repeat(1, 1fr);
        }

        :host([narrower-fix]) > ::slotted(*) {
          grid-column: auto;
        }

        :host([card]) {
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
            0 3px 1px -2px rgba(0, 0, 0, 0.2);

          background: var(--furo-card-background, var(--surface, white));
          padding: var(--furo-card-padding, var(--spacing-xs, 8px));
          margin: var(--furo-card-margin, 0);

          border-radius: 4px;
          font-size: 14px;
          letter-spacing: 0.1px;
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult | TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <slot></slot>
    `;
  }
}

window.customElements.define('furo-form-layouter', FuroFormLayouter);
