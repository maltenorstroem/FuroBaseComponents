import {LitElement,html,css} from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `furo-banner-display`
 * Lit element
 *
 *  furo-banner-display should be used together witch furo-banner. you can place those two components into different places.
 *  best place the furo-banner-display on the main site. then you only need one furo-banner-display. it can work with n furo-banner.
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

 *
 * @customElement
 * @demo demo-furo-banner-display banner display demo
 * @demo demo-furo-banner-display-error banner display demo with error binding
 */
class FuroBannerDisplay extends FBP(LitElement) {


  constructor(){
    super();
    this._banner = {"text":"", "dismissButtonText":"dismiss", "confirmButtonText":"" ,"icon":"", "banner": {}};
    this._stack=[];
    this.setAttribute("hidden", "");
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();

    window.addEventListener("open-furo-banner-requested", (e)=>{
      this._show(e.detail);
    });


    this._FBPAddWireHook('--confirmClicked', (e) => {

      if(this._banner.banner) {
        this._banner.banner.confirm();
      }
      this._close();
    });

    this._FBPAddWireHook('--dismissClicked', (e) => {

      if(this._banner.banner) {
        this._banner.banner.dismiss();
      }
      this._close();
    });
  }


  /**
   * @private
   * @returns {CSSResult}
   */
  static get styles() {
    return css`
            :host {
              width: 100%;
              background-color: var(--banner-background, var(--surface,#FAFAFA));
              color: var(--banner-on-background, var(--on-surface,#333333));             
              transition: all .5s ease-in-out;
              overflow:hidden;
            }
            :host([hidden]) {
              height: 0;
            }
            furo-icon {
              margin: auto var(--banner-icon-margin-right,var(--spacing, 24px)) auto 0;
              width: 40px;
              height: 40px;
              display: none;
            }
            .wrapper {
              width: 100%;
              box-sizing: border-box;
              padding: 12px 8px 8px 24px;
              display: flex;
              border-bottom: solid 1px #e0e0e0;
              margin-bottom: var(--banner-margin-bottom,var(--spacing-s, 16px));
            }
            
            .wrapper[icon] furo-icon{
              display: flex;
            }
            
            .wrapper[icon] {
              padding: 12px 8px 8px 16px;
            }
            
            furo-button {
              color: var(--banner-button-text-color, --primary, #3f83e3));
              --on-surface: var(--primary);
              margin-right: 8px;
            }
            
            .text {
              width: 100%;
              line-height: 20px;
              padding-bottom: 4px;
              padding-top: 12px;
            }
            
            .button {
              display: flex;
              margin-left: 90px;
              align-self: flex-end;
              justify-content:flex-end;
            }
            
            furo-button[hide] {
              display: none;
            }
        `;
  }

  /**
   *@private
   */
  static get properties(){

    return {
      _banner: {
        type: Object
      },
      _stack: {
        type: Array
      },
      _isOpen: {
        type: Boolean
      },
      _timer: {
        type: Object
      }
    };
  }

  /**
   * show
   * @param b
   * @private
   */
  _show(b) {

    this._pushToStack(b);

    if( !this._isOpen ) {

      this.__show();
    }
  }

  /**
   *
   * @param d {Object} banner
   * @private
   */
  _pushToStack(b) {

    let obj = {};
    obj.text = b.text;
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

      this._banner = this._stack[0];
      this.style.height = "0px";
      this.removeAttribute("hidden");
      let height = this.shadowRoot.querySelector(".wrapper").getBoundingClientRect().height;
      this.style.height = height + "px";
      this.requestUpdate();
      this._isOpen = true;
    }
  }

  /**
   * close the CURRENT banner
   */
  _close() {
    this.style.height = "0px";
    setTimeout(()=>{
      this.setAttribute("hidden", "");
    }, 500);

    if(this._stack.length >1) {


      this._stack.shift();
      if(this._stack.length  > 0 ) {
        let self = this;
        this._timer = setInterval(function () {
          clearInterval(self._timer);
          self.__show();

        }, 500);
      }else {
        this._isOpen = false;
      }
    }
    else {
      this._stack.shift();
      this._isOpen = false;
    }
  }



  /**
   * @private
   * @returns {TemplateResult}
   */
  render(){
    return html`
          <div class="wrapper" ?icon="${this._banner.icon}">
            <furo-icon icon="${this._banner.icon}"></furo-icon>
            <div class="text">${this._banner.text}</div>
            <div class="button">
              <furo-button label="${this._banner.dismissButtonText}" ?hide="${!this._banner.dismissButtonText}" @-click="--dismissClicked"></furo-button>          
              <furo-button label="${this._banner.confirmButtonText}" ?hide="${!this._banner.confirmButtonText}" @-click="--confirmClicked"></furo-button>   
            </div>
          </div>
        `;
  }

}

customElements.define('furo-banner-display', FuroBannerDisplay);
