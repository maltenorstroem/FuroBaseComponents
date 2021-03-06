import { LitElement, html, css } from 'lit-element';
import { FBP } from '@furo/fbp';
import 'markdown-it/dist/markdown-it.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

/**
 * `furo-banner-display`
 * Lit element
 *
 *  furo-banner-display should be used together witch furo-banner. furo-banner-display listens the `open-furo-banner-requested`
 *  event on it's parent node. Which is sent via furo-banner. you can place those two components into different places.
 *  best place the furo-banner-display on the main site. then you only need one furo-banner-display. it can work with n furo-banner.
 *  you can also use more furo-banner-display for special needs. but You have to be sure the furo-banner-display can receive the event of the furo-banner.
 *
 *
 * ### When to use
 *
 * A banner displays an important, succinct message, and provides actions for users to address (or dismiss the banner). It requires a user action to be dismissed.
 * Banners should be displayed at the top of the screen, below a top app bar. They are persistent and nonmodal, allowing the user to either ignore them or interact with them at any time
 *
 * Component | Priority | User action
 * ----------------|------------------|----------
 * `furo-snackbar`  | Low priority |Optional: Snackbars disappear automatically
 * `furo-banner`    | Prominent, medium priority  |Optional: Banners remain until dismissed by the user, or if the state that caused the banner is resolved
 * `furo-dialog`    | Highest priority |Required: Dialogs block app usage until the user takes a dialog action or exits the dialog (if available)
 *
 * ### Styling
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default  | Fallback
 * ----------------|-------------|----------|----------
 * `--banner-background` | Color of background |`--surface` |  #FAFAFA
 * `--banner-on-background` | Color of background |`--on-surface` |  #333333
 * `--banner-button-text-color` | Color of button text | `--primary` | #3f83e3
 * `--banner-icon-margin-right` | right margin of icon | `--spacing` | 24px
 * `--banner-margin-bottom`     | bottom margin of the banner   | `--spacing-s`     | 16px

 * @summary helper component to show a banner
 * @customElement
 * @demo demo-furo-banner-display banner display demo
 * @demo demo-furo-banner-display-error banner display demo with error binding
 */
class FuroBannerDisplay extends FBP(LitElement) {
  constructor() {
    super();
    this._banner = {
      text: '',
      dismissButtonText: 'dismiss',
      confirmButtonText: '',
      icon: '',
      banner: {},
    };
    this._stack = [];
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    this.setAttribute('hidden', '');
    this.setAttribute('tabindex', '-1');
    super._FBPReady();

    this.parentNode.addEventListener('open-furo-banner-requested', e => {
      e.stopPropagation();
      this._show(e.detail);
    });

    this._FBPAddWireHook('--confirmClicked', () => {
      if (this._banner.banner) {
        this._banner.banner.confirm();
      }
      this._close();
    });

    this._FBPAddWireHook('--dismissClicked', () => {
      if (this._banner.banner) {
        this._banner.banner.dismiss();
      }
      this._close();
    });
  }

  /**
   * parse markdown string to html content
   * @param markdown
   * @return {TemplateResult | TemplateResult}
   */
  static _parseMarkdown(markdown) {
    const md = window.markdownit({
      html: false,
      linkify: true,
      typographer: true,
    });

    return html`
      ${unsafeHTML(md.render(markdown))}
    `;
  }

  /**
   *@private
   */
  static get properties() {
    return {
      _banner: {
        type: Object,
      },
      _stack: {
        type: Array,
      },
      _isOpen: {
        type: Boolean,
      },
      _timer: {
        type: Object,
      },
      /**
       * enable autofocus for dismiss button after slide in
       */
      autofocus: { type: Boolean },
    };
  }

  /**
   * show
   * @param b
   * @private
   */
  _show(b) {
    this._pushToStack(b);

    if (!this._isOpen) {
      this.__show();
    }
  }

  /**
   *
   * @param b {Object} banner
   * @private
   */
  _pushToStack(b) {
    const obj = {};
    obj.text = b.text;
    obj.multilineText = b.multilineText;
    obj.dismissButtonText = b.dismissButtonText;
    obj.confirmButtonText = b.confirmButtonText;
    obj.icon = b.icon;
    obj.banner = b;
    this._stack.push(obj);
  }

  /**
   *
   * @private
   */
  __show() {
    if (this._stack.length > 0) {
      // this is array destructing
      [this._banner] = this._stack;
      // defensive copy, do not overwrite the reference (this._stack[0]);
      if (this._banner.multilineText && this._banner.multilineText.length > 0) {
        this._bannerText = FuroBannerDisplay._parseMarkdown(
          this._banner.multilineText.join('\n\n'),
        );
      } else if (this._banner.text) {
        this._bannerText = FuroBannerDisplay._parseMarkdown(this._banner.text);
      }

      this.requestUpdate();

      setTimeout(() => {
        this.style.height = '0px';
        this.removeAttribute('hidden');
        this.removeAttribute('tabindex');
        const { height } = this.shadowRoot.querySelector('.wrapper').getBoundingClientRect();
        this.style.height = `${height}px`;
        this._isOpen = true;
      }, 0);

      if (this.autofocus) {
        setTimeout(() => {
          // focus the dismiss after animation
          this._FBPTriggerWire('--focus');
        }, 500);
      }
    }
  }

  focus() {
    this._FBPTriggerWire('--focus');
  }

  /**
   * close the CURRENT banner
   */
  _close() {
    this.style.height = '0px';
    setTimeout(() => {
      this.setAttribute('hidden', '');
      this.setAttribute('tabindex', '-1');
    }, 500);

    if (this._stack.length > 1) {
      this._stack.shift();
      if (this._stack.length > 0) {
        const self = this;
        this._timer = setInterval(() => {
          clearInterval(self._timer);
          self.__show();
        }, 500);
      } else {
        this._isOpen = false;
      }
    } else {
      this._stack.shift();
      this._isOpen = false;
    }
  }

  /**
   * @private
   * @returns {CSSResult}
   */
  static get styles() {
    return css`
            :host {
              width: 100%;
              display:block;
              font-family: 'Roboto', 'Noto', sans-serif;        
              background-color: var(--banner-background, var(--surface,#FAFAFA));
              color: var(--banner-on-background, var(--on-surface,#333333));             
              transition: all .5s ease-in-out;
              overflow:hidden;
            }
            
            :host([hidden]) {
              height: 0;
            }
             .wrapper[icon] furo-icon{
              display:  inline-block;;
            }
                       
            furo-icon {
              margin:   var(--spacing-xs, 8px)  var(--banner-icon-margin-right,var(--spacing, 24px)) auto 0;
              width: 40px;
              height: 40px;
              display: none;
            }
            
            .wrapper {
              width: 100%;
              box-sizing: border-box;
              padding: 12px 8px 8px 24px;             
              border-bottom: solid 1px #e0e0e0;
              margin-bottom: var(--banner-margin-bottom,var(--spacing-s, 16px));             
            }
          
            
            .wrapper[icon] {
              padding: 12px 8px 8px 16px;
            }
            
            furo-button {
              color: var(--banner-button-text-color, --primary, #3f83e3));
              --on-surface: var(--primary);
              margin-right: 8px;
            }
            
            furo-markdown {             
              line-height: 20px;              
            }
            
            h1 {            
              letter-spacing: -1.5px;
              font-weight: 200;
            }
            h2 {            
              letter-spacing: -0.5px;
              font-weight: 400;
            }
                      
            h3 {        
              letter-spacing: 0;         
            }
            h4 {        
              letter-spacing: 0.25px;         
            }
                
            p {
              margin-bottom: var(--spacing-xs, 8px) ;
              margin-top: var(--spacing-xs, 8px) ;
            }

            .md *:first-child {
            margin-top: var(--spacing-xs, 8px) ;
            }

            
        `;
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <div class="wrapper" ?icon="${this._banner.icon}">
        <furo-horizontal-flex>
          <div>
            <furo-icon icon="${this._banner.icon}"></furo-icon>
          </div>
          <div flex class="md">${this._bannerText}</div>
        </furo-horizontal-flex>
        <furo-horizontal-flex>
          <furo-empty-spacer></furo-empty-spacer>
          <furo-button
            ƒ-focus="--focus"
            label="${this._banner.dismissButtonText}"
            ?hide="${!this._banner.dismissButtonText}"
            @-click="--dismissClicked"
          ></furo-button>
          <furo-button
            label="${this._banner.confirmButtonText}"
            ?hidden="${!this._banner.confirmButtonText}"
            @-click="--confirmClicked"
          ></furo-button>
        </furo-horizontal-flex>
      </div>
    `;
  }
}

customElements.define('furo-banner-display', FuroBannerDisplay);
