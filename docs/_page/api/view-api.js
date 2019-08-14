define(["exports","../furo-shell.js"],function(_exports,_furoShell){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.panelRegistry=_exports.Types$1=_exports.Types=_exports.Services=_exports.RepeaterNode=_exports.NodeEvent=_exports.FuroTreeItem=_exports.FuroInputBase=_exports.FieldNode=_exports.EventTreeNode=_exports.EntityNode=_exports.CollectionNode=_exports.CollectionControls=_exports.$panelRegistry=_exports.$furoTreeItem=_exports.$apiConfig$1=_exports.$apiConfig=_exports.$RepeaterNode=_exports.$FuroInputBase=_exports.$FieldNode=_exports.$EventTreeNode=_exports.$EntityNode=_exports.$CollectionNode=_exports.$CollectionControls=void 0;class FetchAnalysis extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();fetch("/node_modules/@furo/data/analysis.json").then(res=>res.json()).then(analysis=>{/**
       * @event data
       * Fired when analysis loaded
       * detail payload: analysis
       */let customEvent=new Event("data",{composed:!0,bubbles:!0});customEvent.detail=analysis;this.dispatchEvent(customEvent)}).catch(err=>err)}}window.customElements.define("fetch-analysis",FetchAnalysis);class DemoFuroDemoSnippet extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */myBool:{type:Boolean}}}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
        }

        :host([hidden]) {
            display: none;
        }

      
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <p>Demo is flickering, because it gets completly re rendered on each change</p>
        <furo-demo-snippet flex demo>
          <template>
            <a href="/api/demo/util/demo-furo-demo-snippet/util/" @-park="((park)),((other))" @-event="^event,((other))"
               @-bubble="^^bubble,((other))" @-hostevent="-^hostevent">Package util</a>
            <a href="/api/demo/util/demo-furo-demo-snippet/data/">Package data</a>

            <furo-location url-space-regex="^/api/demo/util/demo-furo-demo-snippet"
                           @-location-changed="--pathChanged"></furo-location>
            <!-- load analysis based on --pathChanged.pathSegments[0] -->
            <furo-doc-fetch-analysis ƒ-fetch-location="--pathChanged" ƒ-activate="--pageActivated"
                                     @-data="--analysis"></furo-doc-fetch-analysis>
            <furo-split-view>

              <!-- the doc menu 
              Multiline comment
              on furo-doc-menu
              -->
              <furo-doc-menu slot="master" scroll ƒ-analysis="--analysis" @-element="--element"
                             @-class="--class"></furo-doc-menu>

              <furo-doc-element scroll ƒ-print="--element" ƒ-hide="--class"></furo-doc-element>
              <furo-doc-class scroll ƒ-print="--class" ƒ-hide="--element"></furo-doc-class>

            </furo-split-view>

            <dummy-element ƒ-remove="--class(*.path), --element, --analysis(*.path)" ƒ-.prop="--analysis"
                           @-done="((hostattribute)),notarget"></dummy-element>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-demo-snippet",DemoFuroDemoSnippet);class DemoFuroHorizontalFlex extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo furo-horizontal-flex</h2>
      <p>Arrange your components vertically. Add the flex attribute for the flexing part.</p>
      <furo-demo-snippet>
        <template>
          <furo-horizontal-flex>
            <div>small</div>
            <!-- A furo-empty-spacer will fill the available space. -->
            <furo-empty-spacer style="border: 1px dashed lightgray;"></furo-empty-spacer>
            <div>small</div>
          </furo-horizontal-flex>
        </template>
      </furo-demo-snippet>

      
    `}}window.customElements.define("demo-furo-horizontal-flex",DemoFuroHorizontalFlex);class DemoFuroVerticalFlex extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo furo-vertical-flex</h2>
      <p>Arrange your components vertically. Add the flex attribute for the flexing part.</p>
      <furo-demo-snippet >
        <template>
          <furo-vertical-flex style="height: 180px">
            <div>small</div>
            <furo-empty-spacer style="border: 1px dashed lightgray"></furo-empty-spacer>
            <div>small</div>
          </furo-vertical-flex>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-vertical-flex",DemoFuroVerticalFlex);class DemoFuroVerticalScroller extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
        <h2>Demo furo-vertical-scroller</h2>
        <p>Vertical scroller takes the height of his parent node and allows you to scroll its content.</p>
      <furo-demo-snippet >
        <template>
          <furo-vertical-scroller >
            <div style="height: 620px;background-image: linear-gradient(red, yellow);"></div>
          </furo-vertical-scroller>
        </template>
      </furo-demo-snippet>
        
    `}}window.customElements.define("demo-furo-vertical-scroller",DemoFuroVerticalScroller);class DemoFuroSplitView extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo furo-split-view</h2>
      <p>Splits your view in a master-detail view</p>
      <furo-demo-snippet>
        <template>
          <furo-split-view>
            <div slot="master" style="height: 100%; background-image: linear-gradient(blue, violet);">Master</div>
            <furo-vertical-scroller>
              <div style="height: 420px;background-image: linear-gradient(red, yellow);">
                Detail... <br> should be on flex side
              </div>
            </furo-vertical-scroller>
          </furo-split-view>
        </template>
      </furo-demo-snippet>

      <h2>Demo furo-split-view</h2>
      <p>Add the attribute reverse put the master on the other side</p>
      <furo-demo-snippet>
        <template>
          <furo-split-view reverse>
            <div slot="master" style="height: 100%; background-image: linear-gradient(blue, violet);">Master</div>
            <furo-vertical-scroller>
              <div style="height: 420px;background-image: linear-gradient(red, yellow);">
                Detail... <br> should be on flex side
              </div>
            </furo-vertical-scroller>
          </furo-split-view>
        </template>
      </furo-demo-snippet>


    `}}window.customElements.define("demo-furo-split-view",DemoFuroSplitView);// -- initialize application env, theme, api
_furoShell.Iconset.registerIconset("default",_furoShell.FuroBaseIcons);_furoShell.Iconset.registerIconset("av",_furoShell.AvIcons);_furoShell.Iconset.registerIconset("com",_furoShell.CommunicationIcons);_furoShell.Iconset.registerIconset("device",_furoShell.DeviceIcons);_furoShell.Iconset.registerIconset("editor",_furoShell.EditorIcons);_furoShell.Iconset.registerIconset("social",_furoShell.SocialIcons);_furoShell.Iconset.registerIconset("places",_furoShell.PlacesIcons);_furoShell.Iconset.registerIconset("notify",_furoShell.NotificationIcons);_furoShell.Iconset.registerIconset("map",_furoShell.MapsIcons);_furoShell.Iconset.registerIconset("hardware",_furoShell.HardwareIcons);_furoShell.Iconset.registerIconset("image",_furoShell.ImageIcons);class DemoFuroIcon extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo demo-furo-icon</h2>
      <p>Do not forgett to import the iconset</p>
      <furo-demo-snippet>
        <template>
          <furo-icon icon="mail"></furo-icon>
          <furo-icon icon="touch-app"></furo-icon>
          <furo-icon icon="av:airplay"></furo-icon>
          <furo-icon icon="com:contacts"></furo-icon>
          <furo-icon icon="device:bluetooth"></furo-icon>
          <furo-icon icon="editor:merge-type"></furo-icon>
          <furo-icon icon="hardware:phonelink"></furo-icon>
          <furo-icon icon="image:camera"></furo-icon>
          <furo-icon icon="maps:subway"></furo-icon>
          <furo-icon icon="notify:event-available"></furo-icon>
          <furo-icon icon="places:spa"></furo-icon>
          <furo-icon icon="social:public"></furo-icon>
        </template>
      </furo-demo-snippet>
      <h3>Import the needed icon sets somewhere in your init phase</h3>
      <pre>// -- initialize application env, theme, api

import {Init} from "@furo/framework/furo.js";
import {Iconset} from "@furo/framework/furo.js";
        
import {FuroBaseIcons} from "@furo/layout/iconsets/baseIcons";
Iconset.registerIconset("default", FuroBaseIcons);</pre>
    `}}window.customElements.define("demo-furo-icon",DemoFuroIcon);class DemoFuroCard extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo demo-furo-card</h2>
      <p>description</p>
      <furo-demo-snippet>
        <template>
          <style>furo-card {
            margin: 20px
          }</style>
          
          <furo-card>
            <div><furo-icon icon="mail"></furo-icon>
              <hr>
              Content</div>
            <div slot="action"><button>df</button></div>
          </furo-card>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-card",DemoFuroCard);class DemoFuroCollapsibleBox extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo demo-furo-collapsible-box</h2>
      <p>description</p>
      <furo-demo-snippet >
        <template>
          <furo-collapsible-box label="label" open>
            <div>flex content in default slot</div>
            <div slot="context">CTX on right side</div>
          </furo-collapsible-box>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-collapsible-box",DemoFuroCollapsibleBox);class DemoFuroFormLayouter extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet {
            height: 850px;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h3>Sample</h3>
      
      <furo-demo-snippet >
        <template>
            <h2>Simple form design</h2>
            <p>Please fill in the form and click save. You will be automatically redirected to the edit form.</p>
            <!-- Inside a furo-form-layouter the elements are always full-width -->
            <!-- Full width, one column layout-->
            <furo-form-layouter>
                <furo-date-input hint="Only possible in current year" max="2019-12-31" min="2019-01-01" label="valid from"></furo-date-input>
                <furo-select-input label="Mutation reason" value="New" list="New, mutation, remake"></furo-select-input>
                <p>Put your additional information here...</p>
            </furo-form-layouter>
            <!-- Full width, two column layout-->
            <furo-form-layouter two>
                <furo-text-input label="Owner"></furo-text-input>
                <furo-text-input label="Special hint"></furo-text-input>
                <furo-text-input label="Owner"></furo-text-input>
            </furo-form-layouter>

            <!-- Full width, four column layout with condensed input fields -->
            <furo-form-layouter>
                <p>Full width, four column layout with condensed input fields</p>
                <furo-select-input condensed label="Brand" value="Pepsi" list="RedBull, Coca-Cola, Pepsi, Sprite"></furo-select-input>
            </furo-form-layouter>
            <furo-form-layouter four>
                <furo-text-input condensed label="Owner"></furo-text-input>
                <furo-text-input condensed label="Special hint"></furo-text-input>
                <furo-text-input condensed label="Owner"></furo-text-input>
                <furo-text-input condensed label="Special hint"></furo-text-input>
                <furo-text-input condensed label="Special hint"></furo-text-input>
            </furo-form-layouter>

            <furo-form-layouter four>
                <furo-button label="Save" unelevated primary></furo-button>
                <furo-button label="Cancel" unelevated></furo-button>
            </furo-form-layouter>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-form-layouter",DemoFuroFormLayouter);class FuroDataPasswordInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {String} the text value
   *
   * Comes from underlying component furo-password-input. **bubbles**
   */constructor(){super();this.error=!1;this.disabled=!1;this.errortext="";this.hint="";this._FBPAddWireHook("--valueChanged",val=>{if(this.field){this.field.value=val}})}static get properties(){return{/**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */label:{type:String,attribute:!0},/**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */hint:{type:String},/**
       * Overrides the min value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */min:{type:Number},/**
       * Overrides the max value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */max:{type:Number},/**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */readonly:{type:Boolean},/**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */disabled:{type:Boolean,reflect:!0},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean},/**
       * Icon on the left side
       */leadingIcon:{type:String,attribute:"leading-icon"},/**
       * Icon on the right side
       */trailingIcon:{type:String,attribute:"trailing-icon"},/**
       * html input validity
       */valid:{type:Boolean,reflect:!0},/**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */condensed:{type:Boolean},/**
       * passes always float the label
       */float:{type:Boolean}}}/**
     * Sets the field to readonly
     */disable(){this._readonly=!0}/**
     * Makes the field writable.
     */enable(){this._readonly=!1}/**
     * Bind a entity field to the number-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `entity-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){if(fieldNode===void 0){console.warn("Invalid binding ");console.log(this);return}this.field=fieldNode;this._updateField();this.field.addEventListener("field-value-changed",e=>{this._updateField()});this.field.addEventListener("field-became-invalid",e=>{// updates wieder einspielen
this.error=!0;this.errortext=this.field._validity.message;this.requestUpdate()});this.field.addEventListener("field-became-valid",e=>{// updates wieder einspielen
this.error=!1;this.requestUpdate()})}_updateField(){// label auf attr ist höher gewichtet
if(!this.label){this._label=this.field._meta.label}else{this._label=this.label}// hint auf attr ist höher gewichtet
if(!this.hint){this._hint=this.field._meta.hint}else{this._hint=this.hint}this.disabled=this.field._meta.readonly?!0:!1;// min auf attr ist höher gewichtet
if(!this.min){this._min=this.field._meta.min}else{this._min=this.min}// max auf attr ist höher gewichtet
if(!this.max){this._max=this.field._meta.max}else{this._max=this.max}// readonly auf attr ist höher gewichtet
if(!this.readonly){this._readonly=this.field._meta.readonly}else{this._readonly=this.readonly}//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.message}this._FBPTriggerWire("--value",this.field.value);this.requestUpdate()}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            width: 190px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-password-input{
            width: 100%;
        }
    `}render(){// language=HTML
return _furoShell.html` 
       <furo-password-input 
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly||this.disabled} 
          label="${this._label}" 
          min="${this._min}" 
          max="${this._max}" 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}"          
          leading-icon="${this.leadingIcon}" 
          trailing-icon="${this.trailingIcon}" 
          errortext="${this.errortext}" 
          hint="${this.hint}" 
          @-value-changed="--valueChanged"
          ƒ-set-value="--value"></furo-password-input>      
    `}}customElements.define("furo-data-password-input",FuroDataPasswordInput);class FuroDataDateInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {Date} the date value
   *
   * Comes from underlying component furo-date-input. **bubbles**
   */constructor(){super();this.error=!1;this.disabled=!1;this.errortext="";this.hint="";this._FBPAddWireHook("--valueChanged",val=>{if(this.field){this.field.value=val}})}static get properties(){return{/**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */label:{type:String,attribute:!0},/**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */hint:{type:String},/**
       * Overrides the min value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */min:{type:Date},/**
       * Overrides the max value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */max:{type:Date},/**
       * Overrides the step value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */step:{type:String// string, because "any" is also a valid step
},/**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */readonly:{type:Boolean},/**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */disabled:{type:Boolean,reflect:!0},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean},/**
       * Icon on the left side
       */leadingIcon:{type:String,attribute:"leading-icon"},/**
       * Icon on the right side
       */trailingIcon:{type:String,attribute:"trailing-icon"},/**
       * html input validity
       */valid:{type:Boolean,reflect:!0},/**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */condensed:{type:Boolean},/**
       * passes always float the label
       */float:{type:Boolean}}}/**
     * Sets the field to readonly
     */disable(){this._readonly=!0}/**
     * Makes the field writable.
     */enable(){this._readonly=!1}/**
     * Bind a entity field to the date-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `entity-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){if(fieldNode===void 0){console.warn("Invalid binding ");console.log(this);return}this.field=fieldNode;this._updateField();this.field.addEventListener("field-value-changed",e=>{this._updateField()});this.field.addEventListener("field-became-invalid",e=>{// updates wieder einspielen
this.error=!0;this.errortext=this.field._validity.message;this.requestUpdate()});this.field.addEventListener("field-became-valid",e=>{// updates wieder einspielen
this.error=!1;this.requestUpdate()})}_updateField(){// label auf attr ist höher gewichtet
if(!this.label){this._label=this.field._meta.label}else{this._label=this.label}// hint auf attr ist höher gewichtet
if(!this.hint){this._hint=this.field._meta.hint}else{this._hint=this.hint}this.disabled=this.field._meta.readonly?!0:!1;// min auf attr ist höher gewichtet
if(!this.min){this._min=this.field._meta.min}else{this._min=this.min}// max auf attr ist höher gewichtet
if(!this.max){this._max=this.field._meta.max}else{this._max=this.max}// step auf attr ist höher gewichtet
if(!this.step){this._step=this.field._meta.step}else{this._step=this.step}// readonly auf attr ist höher gewichtet
if(!this.readonly){this._readonly=this.field._meta.readonly}else{this._readonly=this.readonly}//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.message}this._FBPTriggerWire("--value",this.field.value);this.requestUpdate()}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            width: 190px;
        }

        :host([hidden]) {
            display: none;
        }
        
        furo-date-input{
            width: 100%;
        }
    `}render(){// language=HTML
return _furoShell.html` 
       <furo-date-input 
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly||this.disabled} 
          label="${this._label}" 
          min="${this._min}" 
          max="${this._max}" 
          step="${this._step}" 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}"          
          leading-icon="${this.leadingIcon}" 
          trailing-icon="${this.trailingIcon}" 
          errortext="${this.errortext}" 
          hint="${this.hint}" 
          @-value-changed="--valueChanged"
          ƒ-set-value="--value"></furo-date-input>      
    `}}customElements.define("furo-data-date-input",FuroDataDateInput);class FuroDataTextInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {String} the text value
   *
   * Comes from underlying component furo-text-input. **bubbles**
   */constructor(){super();this.error=!1;this.disabled=!1;this.errortext="";this.hint="";this._FBPAddWireHook("--valueChanged",val=>{if(this.field){this.field.value=val}})}static get properties(){return{/**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */label:{type:String,attribute:!0},/**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */hint:{type:String},/**
       * Overrides the min value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */min:{type:Number},/**
       * Overrides the max value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */max:{type:Number},/**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */readonly:{type:Boolean},/**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */disabled:{type:Boolean,reflect:!0},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean},/**
       * Icon on the left side
       */leadingIcon:{type:String,attribute:"leading-icon"},/**
       * Icon on the right side
       */trailingIcon:{type:String,attribute:"trailing-icon"},/**
       * html input validity
       */valid:{type:Boolean,reflect:!0},/**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */condensed:{type:Boolean},/**
       * passes always float the label
       */float:{type:Boolean}}}/**
     * Sets the field to readonly
     */disable(){this._readonly=!0}/**
     * Makes the field writable.
     */enable(){this._readonly=!1}/**
     * Bind a entity field to the number-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `entity-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){if(fieldNode===void 0){console.warn("Invalid binding ");console.log(this);return}this.field=fieldNode;this._updateField();this.field.addEventListener("field-value-changed",e=>{this._updateField()});this.field.addEventListener("field-became-invalid",e=>{// updates wieder einspielen
this.error=!0;this.errortext=this.field._validity.message;this.requestUpdate()});this.field.addEventListener("field-became-valid",e=>{// updates wieder einspielen
this.error=!1;this.requestUpdate()})}_updateField(){// label auf attr ist höher gewichtet
if(!this.label){this._label=this.field._meta.label}else{this._label=this.label}// hint auf attr ist höher gewichtet
if(!this.hint){this._hint=this.field._meta.hint}else{this._hint=this.hint}this.disabled=this.field._meta.readonly?!0:!1;// min auf attr ist höher gewichtet
if(!this.min){this._min=this.field._meta.min}else{this._min=this.min}// max auf attr ist höher gewichtet
if(!this.max){this._max=this.field._meta.max}else{this._max=this.max}// readonly auf attr ist höher gewichtet
if(!this.readonly){this._readonly=this.field._meta.readonly}else{this._readonly=this.readonly}//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.message}this._FBPTriggerWire("--value",this.field.value);this.requestUpdate()}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            width: 190px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-text-input{
            width: 100%;
        }
    `}render(){// language=HTML
return _furoShell.html`
       <furo-text-input 
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly||this.disabled} 
          label="${this._label}" 
          min="${this._min}" 
          max="${this._max}" 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}"          
          leading-icon="${this.leadingIcon}" 
          trailing-icon="${this.trailingIcon}" 
          errortext="${this.errortext}" 
          hint="${this.hint}" 
          @-value-changed="--valueChanged"
          ƒ-set-value="--value"></furo-text-input>      
    `}}customElements.define("furo-data-text-input",FuroDataTextInput);class FuroDataTextareaInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {String} the text value
   *
   * Comes from underlying component furo-textarea-input. **bubbles**
   */constructor(){super();this.error=!1;this.disabled=!1;this.errortext="";this.hint="";this._FBPAddWireHook("--valueChanged",val=>{if(this.field){this.field.value=val}})}static get properties(){return{/**
       * Overrides the label text from the **specs**
       */label:{type:String,attribute:!0},/**
       * Overrides the hint text from the **specs**
       */hint:{type:String},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean}}}/**
     * Bind a entity field to the textarea-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `entity-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){if(fieldNode===void 0){console.warn("Invalid binding ");console.log(this);return}this.field=fieldNode;this._updateField();this.field.addEventListener("field-value-changed",e=>{this._updateField()});this.field.addEventListener("field-became-invalid",e=>{// updates wieder einspielen
this.error=!0;this.errortext=this.field._validity.message;this.requestUpdate()});this.field.addEventListener("field-became-valid",e=>{// updates wieder einspielen
this.error=!1;this.requestUpdate()})}_updateField(){// label auf attr ist höher gewichtet
if(!this.label){this._label=this.field._meta.label}else{this._label=this.label}// hint auf attr ist höher gewichtet
if(!this.hint){this._hint=this.field._meta.hint}else{this._hint=this.hint}this.disabled=this.field._meta.readonly?!0:!1;//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.message}this._FBPTriggerWire("--value",this.field.value);this.requestUpdate()}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
        }

        :host([hidden]) {
            display: none;
        }

        furo-textarea-input{
            width: 100%;
        }
    `}render(){// language=HTML
return _furoShell.html` 
       <furo-textarea-input 
          ?autofocus=${this.autofocus} 
          ?disabled=${this.disabled} 
          label="${this._label}" 
          ?error="${this.error}" 
          errortext="${this.errortext}" 
          hint="${this.hint}" 
          @-value-changed="--valueChanged"
          ƒ-set-value="--value"></furo-textarea-input>      
    `}}customElements.define("furo-data-textarea-input",FuroDataTextareaInput);class FuroDataSearchInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {String} the text value
   *
   * Comes from underlying component furo-search-input. **bubbles**
   */constructor(){super();this.error=!1;this.disabled=!1;this.errortext="";this.hint="";this._FBPAddWireHook("--valueChanged",val=>{if(this.field){this.field.value=val}})}static get properties(){return{/**
       * Overrides the label text from the **specs**
       */label:{type:String,attribute:!0},/**
       * Overrides the hint text from the **specs**
       */hint:{type:String},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean}}}/**
     * Bind a entity field to the search-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `entity-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){if(fieldNode===void 0){console.warn("Invalid binding ");console.log(this);return}this.field=fieldNode;this._updateField();this.field.addEventListener("field-value-changed",e=>{this._updateField()});this.field.addEventListener("field-became-invalid",e=>{// updates wieder einspielen
this.error=!0;this.errortext=this.field._validity.message;this.requestUpdate()});this.field.addEventListener("field-became-valid",e=>{// updates wieder einspielen
this.error=!1;this.requestUpdate()})}_updateField(){// label auf attr ist höher gewichtet
if(!this.label){this._label=this.field._meta.label}else{this._label=this.label}// hint auf attr ist höher gewichtet
if(!this.hint){this._hint=this.field._meta.hint}else{this._hint=this.hint}this.disabled=this.field._meta.readonly?!0:!1;//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.message}this._FBPTriggerWire("--value",this.field.value);this.requestUpdate()}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            width:190px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-search-input{
            width: 100%;
        }
    `}render(){// language=HTML
return _furoShell.html` 
       <furo-search-input 
          ?autofocus=${this.autofocus} 
          ?disabled=${this.disabled} 
          label="${this._label}" 
          ?error="${this.error}" 
          errortext="${this.errortext}" 
          hint="${this.hint}" 
          @-value-changed="--valueChanged"
          ƒ-set-value="--value"></furo-search-input>      
    `}}customElements.define("furo-data-search-input",FuroDataSearchInput);/**
                                                                       *
                                                                       * @mixinFunction FuroInputBase
                                                                       */const FuroInputBase=superClass=>{return class extends superClass{constructor(props){super(props);this._displayOnly=!1}static get properties(){return{noTypecheck:{type:Boolean,attribute:"no-typecheck"},error:{type:Boolean,reflect:!0},/**
         * Der eingegebene String
         */value:{type:String},/**
         * Label für das Feld
         */label:{type:String,attribute:!0},/**
         * Setze den Fokus automatisch auf dieses Feld
         */autofocus:{type:Boolean},/**
         * Setze disabled
         */disabled:{type:Boolean,reflect:!0},/**
         * helper für das label
         */_float:{type:Boolean},/**
         * hint
         * Hinweistext für das Feld
         */hint:{type:String},_displayOnly:{type:Boolean,attribute:"display-only"}}}attributeChangedCallback(name,oldval,newval){switch(name){case"label":this.label=newval;this._label=newval;break;case"autofocus":this.autofocus=null!==newval;break;case"disabled":this.disabled=null!==newval;break;case"display-only":this._displayOnly=null!==newval;break;default:break;}this.requestUpdate()}_init(){this._float=!!this._value;this.noTypecheck=!1;this._FBPAddWireHook("--inputInput",e=>{let input=e.composedPath()[0];if(this.field&&!this._displayOnly){this.field.value=input.value}this.value=input.value});// input changes for checkboxes
this._FBPAddWireHook("--inputCheckbox",e=>{let checkbox=e.composedPath()[0];if(this.field&&!this._displayOnly){this.field.value=checkbox.checked}this.value=checkbox.checked});if(this.value!=void 0){this._FBPTriggerWire("--value",this._value)}}set value(v){this._float=!!v;this._value=v;/**
                        * @event value-changed
                        * Fired when field value changed
                        * detail payload: value
                        */let customEvent=new Event("value-changed",{composed:!0,bubbles:!0});customEvent.detail=v;this.dispatchEvent(customEvent)}get value(){return this._value}firstUpdated(){super.firstUpdated();this._init()}bindData(d){if(d===void 0){console.warn("Invalid binding ");console.log(this);return}this.field=d;this.error=!1;// label auf attr ist höher gewichtet
if(!this.label){this._label=this.field._meta.label}else{this._label=this.label}this.disabled=this.field._meta.readonly;this.hint=this.field._meta.hint;this.value=this.field.value;this._FBPTriggerWire("--value",this.field.value);this._FBPTriggerWire("--field",this.field);//mark incomming error
if(!this.field._isValid){this.error=!0;this.hint=this.field._validity.message}this.field.addEventListener("field-value-changed",e=>{// updates wieder einspielen
this._FBPTriggerWire("--value",e.detail.value);// label auf attr ist höher gewichtet
if(!this.label){this._label=this.field._meta.label}else{this._label=this.label}this.disabled=this.field._meta.readonly;this.hint=this.field._meta.hint;this.value=this.field.value;this.requestUpdate()});this.field.addEventListener("field-became-invalid",e=>{// updates wieder einspielen
this.error=!0;this._oldhint=this.hint;this.hint=this.field._validity.message});this.field.addEventListener("field-became-valid",e=>{// updates wieder einspielen
this.error=!1;this.hint=this._oldhint});/**
           if (!this.noTypecheck && this.field._spec.type == "date") {
          console.warn("du solltest kein type input feld für datum verwenden, setze no-typecheck", this);
          }
           */}/**
       * Setze den Fokus auf dieses Element
       */focus(){this._FBPTriggerWire("--focusReceived")}}};_exports.FuroInputBase=FuroInputBase;var FuroInputBase$1={FuroInputBase:FuroInputBase};_exports.$FuroInputBase=FuroInputBase$1;class FuroDataColorInput extends(0,_furoShell.FBP)(FuroInputBase(_furoShell.LitElement)){/**
   *
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            position: relative;
            font-size: 12px;
            box-sizing: border-box;
            margin: 0 0 14px 0;
            padding: 8px 0 2px 0;
            height: 28px;
            font-family: "Roboto", "Noto", sans-serif;
            line-height: 1.5;
        }

        :host([hidden]) {
            display: none;
        }

        :host([error]) .border {
            border-color: red;
            border-width: 1px;
        }


        input {
            border: none;
            background: 0 0;
            font-size: 12px;
            margin: 0;
            padding: 0;
            width: 100%;
            text-align: left;
            color: inherit;
            outline: none;
            width:30px;
            height: 19px;
         }

        .border {
            position: absolute;
            width: 100%;
            height: 1px;
            top: 28px;
            border: none;
            border-bottom: 1px solid rgba(0, 0, 0, .12);
         }

        label {
            position: unset;
            top: unset;
            color: unset;
            pointer-events: unset;
            display: unset;
            width: unset;
            overflow: unset;
            padding-left: 12px;
        }
        

        * {
            transition: all 150ms ease-out;
        }

        .hint {
            position: absolute;
            top: 30px;
            font-size: 10px;
            color: transparent;
            white-space: nowrap;
            pointer-events: none;
         }

        :host(:focus-within) .hint {
            color: var(--app-hint-color);
            transition: all 550ms ease-in;
        }
        
        :host(:focus-within) .border {
            border-color: var(--primary, #3f51b5);
            border-width: 1px;
        }
    `}render(){// language=HTML
return _furoShell.html`      
      <input id="input" ?autofocus=${this.autofocus} ?disabled=${this.disabled}  type="color" ƒ-.value="--value" @-input="--inputInput(*)"   ƒ-focus="--focusReceived">
      <div class="border"></div>
      <label float="${this._float}" for="input">${this._label}</label>  
      <div class="hint">${this.hint}</div>
 
    `}constructor(){super()}_init(){super._init();this._float=!0}}customElements.define("furo-data-color-input",FuroDataColorInput);class FuroDataNumberInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {Number} the number value
   *
   * Comes from underlying component furo-number-input. **bubbles**
   */constructor(){super();this.error=!1;this.disabled=!1;this.errortext="";this.hint="";this._FBPAddWireHook("--valueChanged",val=>{if(this.field){this.field.value=val}})}static get properties(){return{/**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */label:{type:String,attribute:!0},/**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */hint:{type:String},/**
       * Overrides the min value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */min:{type:Number},/**
       * Overrides the max value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */max:{type:Number},/**
       * Overrides the step value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */step:{type:String// string, because "any" is also a valid step
},/**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */readonly:{type:Boolean},/**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */disabled:{type:Boolean,reflect:!0},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean},/**
       * Icon on the left side
       */leadingIcon:{type:String,attribute:"leading-icon"},/**
       * Icon on the right side
       */trailingIcon:{type:String,attribute:"trailing-icon"},/**
       * html input validity
       */valid:{type:Boolean,reflect:!0},/**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */condensed:{type:Boolean},/**
       * passes always float the label
       */float:{type:Boolean}}}/**
     * Sets the field to readonly
     */disable(){this._readonly=!0}/**
     * Makes the field writable.
     */enable(){this._readonly=!1}/**
     * Bind a entity field to the number-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `entity-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){if(fieldNode===void 0){console.warn("Invalid binding ");console.log(this);return}this.field=fieldNode;this._updateField();this.field.addEventListener("field-value-changed",e=>{this._updateField()});this.field.addEventListener("field-became-invalid",e=>{// updates wieder einspielen
this.error=!0;this.errortext=this.field._validity.message;this.requestUpdate()});this.field.addEventListener("field-became-valid",e=>{// updates wieder einspielen
this.error=!1;this.requestUpdate()})}_updateField(){// label auf attr ist höher gewichtet
if(!this.label){this._label=this.field._meta.label}else{this._label=this.label}// hint auf attr ist höher gewichtet
if(!this.hint){this._hint=this.field._meta.hint}else{this._hint=this.hint}this.disabled=this.field._meta.readonly?!0:!1;// min auf attr ist höher gewichtet
if(!this.min){this._min=this.field._meta.min}else{this._min=this.min}// max auf attr ist höher gewichtet
if(!this.max){this._max=this.field._meta.max}else{this._max=this.max}// step auf attr ist höher gewichtet
if(!this.step){this._step=this.field._meta.step}else{this._step=this.step}// readonly auf attr ist höher gewichtet
if(!this.readonly){this._readonly=this.field._meta.readonly}else{this._readonly=this.readonly}//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.message}this._FBPTriggerWire("--value",this.field.value);this.requestUpdate()}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            width: 190px;
        }

        :host([hidden]) {
            display: none;
        }
        furo-number-input{
            width: 100%;
        }
    `}render(){// language=HTML
return _furoShell.html` 
       <furo-number-input 
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly||this.disabled} 
          label="${this._label}" 
          min="${this._min}" 
          max="${this._max}" 
          step="${this._step}" 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}"          
          leading-icon="${this.leadingIcon}" 
          trailing-icon="${this.trailingIcon}" 
          errortext="${this.errortext}" 
          hint="${this.hint}" 
          @-value-changed="--valueChanged"
          ƒ-set-value="--value"></furo-number-input>      
    `}}customElements.define("furo-data-number-input",FuroDataNumberInput);class FuroDataRangeInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {Range} the range value
   *
   * Comes from underlying component furo-range-input. **bubbles**
   */constructor(){super();this.error=!1;this.disabled=!1;this.errortext="";this.hint="";this._FBPAddWireHook("--valueChanged",val=>{if(this.field){this.field.value=val}})}static get properties(){return{/**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */label:{type:String,attribute:!0},/**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */hint:{type:String},/**
       * Overrides the min value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */min:{type:Range},/**
       * Overrides the max value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */max:{type:Range},/**
       * Overrides the step value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */step:{type:String// string, because "any" is also a valid step
},/**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */readonly:{type:Boolean},/**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */disabled:{type:Boolean,reflect:!0},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean},/**
       * Icon on the left side
       */leadingIcon:{type:String,attribute:"leading-icon"},/**
       * Icon on the right side
       */trailingIcon:{type:String,attribute:"trailing-icon"},/**
       * html input validity
       */valid:{type:Boolean,reflect:!0},/**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */condensed:{type:Boolean},/**
       * passes always float the label
       */float:{type:Boolean}}}/**
     * Sets the field to readonly
     */disable(){this._readonly=!0}/**
     * Makes the field writable.
     */enable(){this._readonly=!1}/**
     * Bind a entity field to the range-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `entity-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){if(fieldNode===void 0){console.warn("Invalid binding ");console.log(this);return}this.field=fieldNode;this._updateField();this.field.addEventListener("field-value-changed",e=>{this._updateField()});this.field.addEventListener("field-became-invalid",e=>{// updates wieder einspielen
this.error=!0;this.errortext=this.field._validity.message;this.requestUpdate()});this.field.addEventListener("field-became-valid",e=>{// updates wieder einspielen
this.error=!1;this.requestUpdate()})}_updateField(){// label auf attr ist höher gewichtet
if(!this.label){this._label=this.field._meta.label}else{this._label=this.label}// hint auf attr ist höher gewichtet
if(!this.hint){this._hint=this.field._meta.hint}else{this._hint=this.hint}this.disabled=this.field._meta.readonly?!0:!1;// min auf attr ist höher gewichtet
if(!this.min){this._min=this.field._meta.min}else{this._min=this.min}// max auf attr ist höher gewichtet
if(!this.max){this._max=this.field._meta.max}else{this._max=this.max}// step auf attr ist höher gewichtet
if(!this.step){this._step=this.field._meta.step}else{this._step=this.step}// readonly auf attr ist höher gewichtet
if(!this.readonly){this._readonly=this.field._meta.readonly}else{this._readonly=this.readonly}//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.message}this._FBPTriggerWire("--value",this.field.value);this.requestUpdate()}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            width: 190px;
        }

        :host([hidden]) {
            display: none;
        }
        furo-range-input{
            width: 100%;
        }
    `}render(){// language=HTML
return _furoShell.html` 
       <furo-range-input 
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly||this.disabled} 
          label="${this._label}" 
          min="${this._min}" 
          max="${this._max}" 
          step="${this._step}" 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}"          
          leading-icon="${this.leadingIcon}" 
          trailing-icon="${this.trailingIcon}" 
          errortext="${this.errortext}" 
          hint="${this.hint}" 
          @-value-changed="--valueChanged"
          ƒ-set-value="--value"></furo-range-input>      
    `}}customElements.define("furo-data-range-input",FuroDataRangeInput);class FuroDataTimeInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {String} the time value
   *
   * Comes from underlying component furo-time-input. **bubbles**
   */constructor(){super();this.error=!1;this.disabled=!1;this.errortext="";this.hint="";this._FBPAddWireHook("--valueChanged",val=>{if(this.field){this.field.value=val}})}static get properties(){return{/**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */label:{type:String,attribute:!0},/**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */hint:{type:String},/**
       * Overrides the min value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */min:{type:Number},/**
       * Overrides the max value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */max:{type:Number},/**
       * Overrides the step value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */step:{type:String// string, because "any" is also a valid step
},/**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */readonly:{type:Boolean},/**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */disabled:{type:Boolean,reflect:!0},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean}}}/**
     * Sets the field to readonly
     */disable(){this._readonly=!0}/**
     * Makes the field writable.
     */enable(){this._readonly=!1}/**
     * Bind a entity field to the time-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `entity-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){if(fieldNode===void 0){console.warn("Invalid binding ");console.log(this);return}this.field=fieldNode;this._updateField();this.field.addEventListener("field-value-changed",e=>{this._updateField()});this.field.addEventListener("field-became-invalid",e=>{// updates wieder einspielen
this.error=!0;this.errortext=this.field._validity.message;this.requestUpdate()});this.field.addEventListener("field-became-valid",e=>{// updates wieder einspielen
this.error=!1;this.requestUpdate()})}_updateField(){// label auf attr ist höher gewichtet
if(!this.label){this._label=this.field._meta.label}else{this._label=this.label}// hint auf attr ist höher gewichtet
if(!this.hint){this._hint=this.field._meta.hint}else{this._hint=this.hint}// min auf attr ist höher gewichtet
if(!this.min){this._min=this.field._meta.min}else{this._min=this.min}// max auf attr ist höher gewichtet
if(!this.max){this._max=this.field._meta.max}else{this._max=this.max}// step auf attr ist höher gewichtet
if(!this.step){this._step=this.field._meta.step}else{this._step=this.step}// readonly auf attr ist höher gewichtet
if(!this.readonly){this._readonly=this.field._meta.readonly}else{this._readonly=this.readonly}//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.message}this._FBPTriggerWire("--value",this.field.value);this.requestUpdate()}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            width:104px;
        }

        :host([hidden]) {
            display: none;
        }
        furo-time-input{
            width: 100%;
        }
    `}render(){// language=HTML
return _furoShell.html` 
       <furo-time-input 
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly||this.disabled} 
          label="${this._label}" 
          min="${this._min}" 
          max="${this._max}" 
          step="${this._step}" 
          ?error="${this.error}" 
          errortext="${this.errortext}" 
          hint="${this.hint}" 
          @-value-changed="--valueChanged"
          ƒ-set-value="--value"></furo-time-input>      
    `}}customElements.define("furo-data-time-input",FuroDataTimeInput);class FuroDataCheckboxInput extends(0,_furoShell.FBP)(FuroInputBase(_furoShell.LitElement)){/**
   *
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            position: relative;
            box-sizing: border-box;
            margin: 0;
            padding: 8px 0 2px 0;
            height: 75px;
            line-height: 1.5;
            font-family: "Roboto", "Noto", sans-serif;
            font-kerning: auto;
            font-size: 16px;
            font-stretch: 100%;
            font-style: normal;
        }

        :host([error]) .border {
            border-color: red;
            border-width: 1px;
        }

        :host([hidden]) {
            display: none;
        }

        input {
            border: none;
            background: 0 0;
            font-size: 12px;
            margin: 0;
            padding: 0;
            width: unset;
            text-align: left;
            color: inherit;
            outline: none;
        }
        
        .border{
            position: absolute;
            width: 100%;
            height: 1px;
            top:28px;
            border: none;
            border-bottom: 1px solid rgba(0, 0, 0, .12);
        }

        :host(:focus-within) .border{
            border-color: var(--primary,#3f51b5);
            border-width: 1px;
        }
        
        label {
            position: unset;
            top: unset;
            color: unset;
            pointer-events: unset;
            display: unset;
            width: unset;
            overflow: unset;
            padding-left: 12px;
        }
        * {
            transition: all 150ms ease-out;
        }

        .hint{
            position: absolute;
            top: 30px;
            font-size: 10px;
            color:transparent;
            white-space: nowrap;
            pointer-events: none;
        }
        :host(:focus-within) .hint{
            color: var(--app-hint-color);
            transition: all 550ms ease-in;
        }
    `}render(){return _furoShell.html` 
      <input id="input"  aria-label="${this._label}" ?autofocus=${this.autofocus} ?disabled=${this.disabled}  type="checkbox" list="datalist" ƒ-.checked="--value" @-input="--inputCheckbox(*)"   ƒ-focus="--focusReceived">     
      <label for="input" class="text">${this._label}</label>
      
      <div class="border"></div>  
      <div class="hint">${this.hint}</div>
 
    `;// language=HTML
}constructor(){super();this._text=this.getAttribute("text")}static get properties(){return{text:{type:String,attribute:!0}}}}customElements.define("furo-data-checkbox-input",FuroDataCheckboxInput);class FuroDataCollectionDropdown extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {String} the text value
   *
   * Comes from underlying component furo-text-input. **bubbles**
   */constructor(){super();this.error=!1;this.disabled=!1;this.errortext="";this.hint="";this.displayField="display_name";this.valueField="id";this._FBPAddWireHook("--valueChanged",val=>{if(this.field){this.field.value=val}})}static get properties(){return{/**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */label:{type:String},/**
       * The name of the field from the injected collection that contains the label for the dropdown array.
       */displayField:{type:String,attribute:"display-field"},/**
       * The name of the field from the injected collection that contains the value you want to assign to the attribute value and the binded field.
       */valueField:{type:String,attribute:"value-field"},/**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */hint:{type:String},readonly:{type:Boolean},/**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */disabled:{type:Boolean,reflect:!0},/**
       * Set this attribute to autofocus the input field.
       */autofocus:{type:Boolean},/**
       * Icon on the left side
       */leadingIcon:{type:String,attribute:"leading-icon"},/**
       * Icon on the right side
       */trailingIcon:{type:String,attribute:"trailing-icon"},/**
       * html input validity
       */valid:{type:Boolean,reflect:!0},/**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */condensed:{type:Boolean}}}/**
     * Sets the field to readonly
     */disable(){this._readonly=!0}/**
     * Makes the field writable.
     */enable(){this._readonly=!1}/**
     * Bind a entity field to the number-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `entity-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */bindData(fieldNode){if(fieldNode===void 0){console.warn("Invalid binding ");console.log(this);return}this.field=fieldNode;this._updateField();this.field.addEventListener("field-value-changed",e=>{this._updateField()});this.field.addEventListener("field-became-invalid",e=>{// updates wieder einspielen
this.error=!0;this.errortext=this.field._validity.message;this.requestUpdate()});this.field.addEventListener("field-became-valid",e=>{// updates wieder einspielen
this.error=!1;this.requestUpdate()})}_updateField(){// label auf attr ist höher gewichtet
if(!this.label){this._label=this.field._meta.label}else{this._label=this.label}// hint auf attr ist höher gewichtet
if(!this.hint){this._hint=this.field._meta.hint}else{this._hint=this.hint}this.disabled=this.field._meta.readonly?!0:!1;// readonly auf attr ist höher gewichtet
if(!this.readonly){this._readonly=this.field._meta.readonly}else{this._readonly=this.readonly}//mark incomming error
if(!this.field._isValid){this.error=!0;this.errortext=this.field._validity.message}this._FBPTriggerWire("--value",this.field.value);this.requestUpdate()}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            width: 190px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-select-input {
            width: 100%;
        }
    `}render(){// language=HTML
return _furoShell.html`
       <furo-select-input 
          ?autofocus=${this.autofocus} 
          ?readonly=${this._readonly||this.disabled} 
          label="${this._label}" 
          min="${this._min}" 
          max="${this._max}" 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}"          
          leading-icon="${this.leadingIcon}" 
          trailing-icon="${this.trailingIcon}" 
          errortext="${this.errortext}" 
          hint="${this.hint}" 
          ƒ-set-options="--selection"
          @-value-changed="--valueChanged"
          ƒ-set-value="--value"></furo-select-input>      
    `}/**
     * Exposes --injectCollection
     * @param {collection} det
     */injectCollection(collection){// map
let arr=collection.data.map(e=>{return{id:e.data[this.valueField],label:e.data[this.displayField],selected:this.value==e.data[val]}});if(!this.value){this.field.value=arr[0].id}this._FBPTriggerWire("--selection",arr)}}customElements.define("furo-data-collection-dropdown",FuroDataCollectionDropdown);class ReferenceSearchItem extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this._item={}}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */myBool:{type:Boolean}}}injectItem(item){this._item=item;this.requestUpdate()}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.css`
        :host {
            display: block;

        }

        :host([hover]) div {
            background-color: lightgray;
        }

        :host(:hover) div {
            background-color: #f0f0f0;
        }

        div {
            border-bottom: 1px solid var(--primary);
            padding: 8px;
            cursor: pointer;
            box-sizing: border-box;
        }
    `}deselect(){this.removeAttribute("hover")}preselect(){this.setAttribute("hover","");this.scrollIntoView({block:"start",behavior:"smooth"})}select(){/**
     * @event item-selected
     * Fired when item is selected
     * detail payload: item
     */let customEvent=new Event("item-selected",{composed:!0,bubbles:!0});customEvent.detail=this._item;this.dispatchEvent(customEvent)}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
<div @-click="^^item-selected(_item)">
${this._item.data.display_name}
</div>           
`}}window.customElements.define("reference-search-item",ReferenceSearchItem);class FuroDataReferenceSearch extends(0,_furoShell.FBP)(FuroInputBase(_furoShell.LitElement)){constructor(){super();this.minTermLength=0;this.idField="id";this.displayField="display_name"}attributeChangedCallback(name,oldval,newval){switch(name){case"min-term-length":this.minTermLength=+newval;break;case"id-field":this.idField=newval;break;}}_init(){super._init();this.addEventListener("searchInput",e=>{this._searchTerm=e.detail;if(this._searchTerm.length>this.minTermLength){/**
         * @event search
         * Fired when term is entered and bigger then min-term-length
         * detail payload: {String} term
         */let customEvent=new Event("search",{composed:!0,bubbles:!0});customEvent.detail=this._searchTerm;this.dispatchEvent(customEvent)}});this._FBPAddWireHook("--itemSelected",item=>{this.field.id.value=item.data[this.idField];this.field.display_name.value=item.data.display_name;this._closeList()});/**
         * listen to keyboard events
         */this.addEventListener("keydown",event=>{let key=event.key||event.keyCode;if("Escape"===key||"Esc"===key||27===key){if(this._listIsOpen){// close list if open and  then clear search
event.preventDefault()}this._closeList();if(""===this._searchTerm){event.preventDefault();// re set display_name
}}// keyboard navigation
if(this._listIsOpen){if("Enter"===key){event.preventDefault();this._FBPTriggerWire("--enterPressed")}if("ArrowDown"===key){event.preventDefault();this._FBPTriggerWire("--arrowDownPressed")}if("ArrowUp"===key){event.preventDefault();this._FBPTriggerWire("--arrowUpPressed")}}else{if("ArrowDown"===key){this._showList()}}});// lock blur for slow clickers
this.addEventListener("mousedown",event=>{this._lockBlur=!0});// unlock after long click
this.addEventListener("mouseup",event=>{this._lockBlur=!1});// close list on blur
this._FBPAddWireHook("--blured",item=>{this._focused=!1;if(!this._lockBlur){this._closeList()}});// opens the list on focus
this._FBPAddWireHook("--focused",item=>{this._focused=!0;if(this._hasCollection){this._showList()}});this.requestUpdate()}_showList(){this._listIsOpen=!0;this.setAttribute("show-list","");this._FBPTriggerWire("--listOpened",0)}_closeList(){this._listIsOpen=!1;this.removeAttribute("show-list")}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * min-term-length before fire the search event
       */minTermLength:{type:Number,attribute:"min-term-length"},idField:{type:String,attribute:"id-field"}}}collectionIn(collection){this._FBPTriggerWire("--listItemsIjnected",collection.data);this._hasCollection=!0;if(this._focused){this._showList()}}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            position: relative;
        }

        .list {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            overflow: auto;
            max-height: 300px;
            background-color: white;
            z-index: 1;
            opacity: 0.9;
            display: none;
        }

        :host([show-list]) .list {
            display: block;
        }

        furo-data-text-input {
            width: 100%;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
    <furo-data-text-input trailing-icon="search" ?autofocus=${this.autofocus} ?disabled=${this.disabled} display-only 
    label="${this._label}" 
    ƒ-bind-data="--field(*.display_name)" @-value-changed="^^searchInput" @-blur="--blured" @-focus="--focused" ƒ-focus="--focusReceived"></furo-data-text-input>
    <div class="list" @-item-selected="--itemSelected"   >
       
        <template is="flow-repeat" ƒ-inject-items="--listItemsIjnected" ƒ-select="--listOpened" ƒ-select-next-index="--arrowDownPressed" ƒ-select-previous-index="--arrowUpPressed" ƒ-trigger-selected="--enterPressed">
          <reference-search-item ƒ-.index="--index" ƒ-deselect="--itemDeSelected" ƒ-select="--trigger" ƒ-preselect="--itemSelected" ƒ-inject-item="--item"></reference-search-item>
        </template>
             
    </div>                                
`}}window.customElements.define("furo-data-reference-search",FuroDataReferenceSearch);/**
                                                                                      * Custom event type for the AST
                                                                                      */class NodeEvent{constructor(type,detail,bubbles=!0){/**
     * Event type / name
     * @type {string}
     */this.type=type;this.path=[];/**
                     *
                     * @type {undefined}
                     */this.target=void 0;/**
                              * should the Event bubble
                              * @type {boolean}
                              */this.bubbles=bubbles;/**
                             * Event details
                             * @type {*}
                             */this.detail=detail;/**
                           * If you are in a parent element and set this to true it will not bubble
                           * @type {boolean}
                           */this.cancelBubble=!1;/**
                                * if you are in a child element and set this to true, the event will not broadcast downwards
                                * @type {boolean}
                                */this.cancelBroadcast=!1}stopPropagation(){this.cancelBubble=!0}stopBroadcast(){//todo: implement
this.cancelBroadcast=!0}}/**
   * Simulates a tree which can handle events and broadcast events to all nodes
   *
   */_exports.NodeEvent=NodeEvent;class EventTreeNode{constructor(parentNode){this.__parentNode=parentNode;this.__eventListener={};this.__childNodes=[];if(parentNode){parentNode.__childNodes.push(this)}}/**
     * shorthand function to add a property as child node
     * @param name
     * @returns {*}
     */addChildProperty(name,treeNode){this[name]=treeNode||new EventTreeNode(this);return this[name]}/**
     * Add a listener to a node
     * @param type
     * @param handler
     * @param options  for once,...
     */addEventListener(type,handler,options={}){if(!this.__eventListener[type]){this.__eventListener[type]=[]}this.__eventListener[type].push({cb:handler,options:options})}/**
     * Removes the listener from a node
     * @param type
     * @param handler
     */removeEventListener(type,handler){this.__eventListener[type]=this.__eventListener[type].filter((e,i)=>{if(e.cb===handler){return!1}})}/**
     * Dispatch an event
     * @param {NodeEvent} event
     * @returns {*}
     */dispatchNodeEvent(event){// simulate target and path
if(!event.target){event.target=this}event.path.push(this);// trigger the events on current node
this.__triggerNodeEvents(event);//trigger parent node
if(event.bubbles&&!event.cancelBubble&&this.__parentNode){this.__parentNode.dispatchNodeEvent(event)}return event}/**
     * Broadcast the event to node and all childNodes and their childNodes
     * Bubbling is ignored, but propagation can be stopped
     * @param event
     * @returns {*}
     */broadcastEvent(event){// trigger the events on current node
this.__triggerNodeEvents(event);//children
if(!event.cancelBroadcast){this.__childNodes.map(c=>{c.broadcastEvent(event)})}return event}__triggerNodeEvents(event){if(this.__eventListener[event.type]&&0<this.__eventListener[event.type].length){this.__eventListener[event.type].map((t,i,listenerArray)=>{t.cb(event);if(t.options.once){delete listenerArray[i]}})}}}_exports.EventTreeNode=EventTreeNode;var EventTreeNode$1={NodeEvent:NodeEvent,EventTreeNode:EventTreeNode};_exports.$EventTreeNode=EventTreeNode$1;class RepeaterNode extends EventTreeNode{constructor(parentNode,spec,fieldName){super(parentNode);this.__specdefinitions=parentNode.__specdefinitions;this._isRepeater=!0;this.repeats=[];this._spec=spec;this._name=fieldName;this._meta=spec.meta||{};this._pristine=!0;this._isValid=!0;if(Array.isArray(this._meta.initialValue)){this.value=this._meta.initialValue}/**
       * Schaltet ein Feld auf valid, müssen wir alle Felder auf validity prüfen...
       */this.addEventListener("field-became-valid",e=>{if(0===this.repeats.filter(f=>!f._isValid).length){this._isValid=!0;this.dispatchNodeEvent(new NodeEvent("repeat-became-valid",this))}});/**
         * Schaltet ein Feld auf invalid ist die Entity ebenfalls invalid
         */this.addEventListener("field-became-invalid",e=>{this._isValid=!1;this.dispatchNodeEvent(new NodeEvent("repeat-became-invalid",this))});/**
         * Wird ein Wert geändert gilt das form ebenfalls nicht mehr als jungfräulich
         */this.addEventListener("field-value-changed",e=>{this._pristine=!1})}removeAllChildren(){this.__childNodes=[];this.repeats=[];this.dispatchNodeEvent(new NodeEvent("repeated-fields-all-removed",this.repeats,!1))}set value(val){val.forEach((repdata,i)=>{if(!this.repeats[i]){this._addSilent()}// Werte aktualisieren
this.repeats[i].value=repdata;this.repeats[i]._pristine=!0});this.dispatchNodeEvent(new NodeEvent("repeated-fields-changed",this.repeats,!0))}get value(){return this.repeats.map(f=>{return f.value})}deleteChild(index){this.repeats.splice(index,1);this.dispatchNodeEvent(new NodeEvent("repeated-fields-changed",this.repeats,!0));this.dispatchNodeEvent(new NodeEvent("this-repeated-field-removed",this.repeats,!1));this.dispatchNodeEvent(new NodeEvent("repeated-fields-removed",this.repeats,!0))}_addSilent(){let fieldNode=new FieldNode(this,this._spec,this._name),index=this.repeats.push(fieldNode)-1;fieldNode.__index=index;// add function to remove field from list
fieldNode.deleteFromList=()=>{this.deleteChild(this.repeats.indexOf(fieldNode))};return index}_setInvalid(error){this._isValid=!1;let path=error.field.split(".");if(0<path.length){// rest wieder in error reinwerfen
error.field=path.slice(1).join(".")}this.repeats[path[0]]._setInvalid(error)}add(data){let index=this._addSilent();this._pristine=!1;// set data if given
if(data){let child=this.repeats[index];child.value=data}this.dispatchNodeEvent(new NodeEvent("repeated-fields-added",this.repeats[index],!0));this.__parentNode.dispatchNodeEvent(new NodeEvent("this-repeated-field-added",this.repeats[index],!1));this.dispatchNodeEvent(new NodeEvent("repeated-fields-changed",this.repeats,!0));// return field for chainabilty
return this.repeats[index]}}_exports.RepeaterNode=RepeaterNode;var RepeaterNode$1={RepeaterNode:RepeaterNode};_exports.$RepeaterNode=RepeaterNode$1;class FieldNode extends EventTreeNode{constructor(parentNode,fieldSpec,fieldName){super(parentNode);this.__specdefinitions=parentNode.__specdefinitions;this._spec=fieldSpec;this._meta=fieldSpec.meta||{};this._constraints=fieldSpec.constraints;this._options=fieldSpec.options;this._name=fieldName;this._value=null;this._pristine=!0;this._isValid=!0;// custom type fields aufbauen
if(this._spec.type.startsWith("vnd.")){this._createVendorType(this._spec.type)}// set default value from meta
if(this._meta&&this._meta.default){this.defaultvalue=this._meta.default;this._pristine=!1}/**
       * Schaltet ein Feld auf valid, müssen wir alle Kinder oder verästelungend des Felds auf validity prüfen...
       */this.addEventListener("field-became-valid",e=>{let v=this.__childNodes.filter(f=>!f._isValid);if(0===v.length){this._isValid=!0}});/**
         * Schaltet ein Feld auf invalid ist die Entity ebenfalls invalid
         */this.addEventListener("field-became-invalid",e=>{this._isValid=!1})}_createVendorType(type){if(this.__specdefinitions[type]){for(let fieldName in this.__specdefinitions[type].fields){if(this.__specdefinitions[type].fields[fieldName].meta&&this.__specdefinitions[type].fields[fieldName].meta.repeated){this[fieldName]=new RepeaterNode(this,this.__specdefinitions[type].fields[fieldName],fieldName)}else{this[fieldName]=new FieldNode(this,this.__specdefinitions[type].fields[fieldName],fieldName)}}}else{console.warn(type+" does not exist")}}set value(val){// type any
this._createAnyType(val);// map<string, something> typ
if(this._spec.type.startsWith("map<")){this._updateKeyValueMap(val,this._spec.type)}else{if(0<this.__childNodes.length){for(let index in this.__childNodes){let field=this.__childNodes[index];if(val.hasOwnProperty(field._name)){field.value=val[field._name]}}this.dispatchNodeEvent(new NodeEvent("branch-value-changed",this,!1))}else{// update the primitive type
this.oldvalue=this.value;this._value=val;this._pristine=!1;if(JSON.stringify(this.oldvalue)!==JSON.stringify(this._value)){this.dispatchNodeEvent(new NodeEvent("field-value-changed",this,!0))}}}}_createAnyType(val){// remove if type changes
if(this.__anyCreated&&this["@type"]!==val["@type"]){for(let i=this.__childNodes.length-1,field;0<=i;i--){field=this.__childNodes[i];if(!val[field._name]){field.deleteNode()}}this.__anyCreated=!1}if("any"===this._spec.type&&val["@type"]&&!this.__anyCreated){// create custom type if not exist
// any can only be a complex type
this._createVendorType(val["@type"]);this.__anyCreated=!0;this["@type"]=val["@type"]}}_updateKeyValueMap(val,spec){let vType=spec.match(/,\s*(.*)>/)[1],fieldSpec={type:vType};// create if not exist
for(let fieldName in val){if(this[fieldName]==void 0){this[fieldName]=new FieldNode(this,fieldSpec,fieldName)}//update data
this[fieldName].value=val[fieldName]}//remove unseted
for(let i=this.__childNodes.length-1,field;0<=i;i--){field=this.__childNodes[i];if(!val[field._name]){field.deleteNode()}}}/**
     * deletes the fieldnode
     */deleteNode(){let index=this.__parentNode.__childNodes.indexOf(this);this.__parentNode.__childNodes.splice(index,1);delete this.__parentNode[this._name];//notify
this.dispatchNodeEvent(new NodeEvent("this-node-field-deleted",this._name,!1));this.dispatchNodeEvent(new NodeEvent("node-field-deleted",this._name,!0))}set defaultvalue(val){// type any
this._createAnyType(val);if(0<this.__childNodes.length){for(let index in this.__childNodes){let field=this.__childNodes[index];field.defaultvalue=val[field._name]}}else{if(this._spec.type.startsWith("map<")){this._updateKeyValueMap(val,this._spec.type)}else{this.oldvalue=this.value;this._value=val;this._pristine=!0}}}get value(){if(0<this.__childNodes.length){this._value={};// nur reine Daten zurück geben
for(let index in this.__childNodes){let field=this.__childNodes[index];this._value[field._name]=field.value}}return this._value}_clearInvalidity(){if(!this._isValid){this._isValid=!0;this._validity={};this.dispatchNodeEvent(new NodeEvent("field-became-valid",this))}}_setInvalid(error){// set field empty, if not defined
error.field=error.field||"";let path=error.field.split(".");if(0<path.length&&""!==path[0]){// rest wieder in error reinwerfen
error.field=path.slice(1).join(".");if(this[path[0]]){this[path[0]]._setInvalid(error)}else{console.warn("Unknown field",path,this._name)}}else{this._isValid=!1;this._validity=error;this.dispatchNodeEvent(new NodeEvent("field-became-invalid",this))}}toString(){//todo parse format rules from _meta...
return this._value}}_exports.FieldNode=FieldNode;var FieldNode$1={FieldNode:FieldNode};_exports.$FieldNode=FieldNode$1;class FuroDataBoolIcon extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.addEventListener("click",()=>{this.toggle()});this.symboltrue="\u25BC";this.symbolfalse="\u25B6";this.field={};this._updateSymbol()}toggle(){this.field.value=!this.field.value}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */myBool:{type:Boolean},symboltrue:{type:String},symbolfalse:{type:String}}}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: inline-block;
            width: 16px;
        }

        :host([hidden]) {
            display: none;
        }
    `}bindData(d){if(d===void 0){return}if("bool"!==d._spec.type){console.warn("wrong type binded",this);return}this.field=d;// render on changed data
this.field.addEventListener("field-value-changed",e=>{this._updateSymbol()});this._updateSymbol()}_updateSymbol(){this._ocSymbol=this.field.value?this.symboltrue:this.symbolfalse;this.requestUpdate()}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      ${this._ocSymbol}
    `}}window.customElements.define("furo-data-bool-icon",FuroDataBoolIcon);class DemoFuroDataBoolIcon extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo demo-furo-data-bool-icon</h2>
      <p>description</p>
      <furo-demo-snippet >
        <template>
          <furo-data-bool-icon ></furo-data-bool-icon>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-data-bool-icon",DemoFuroDataBoolIcon);/**
                                                                                 * `api-fetch`
                                                                                 *
                                                                                 * api-fetch can be used for network requests via FETCH API with implemented fallback to XMLHttpRequest
                                                                                 *
                                                                                 * ```html
                                                                                 * <api-fetch ƒ-invoke-request="" ƒ-abort-request=""></api-fetch>
                                                                                 * ```
                                                                                 *
                                                                                 * @customElement
                                                                                 * @demo demo/api-fetch_demo.html
                                                                                 */class ApiFetch extends HTMLElement{/**
   * Fired when a request is sent.
   * Payload: request
   * @event request-started
   */ /**
       * Fired when a request was canceled.
       * Payload: request
       * @event request-aborted
       */ /**
           * Fired when a response is received.
           * Here you will get the raw response object
           * Payload: Raw response
           * @event response-raw
           */ /**
               * Fired when a response is received.
               * Here you will get the parsed response
               * Format depends on request header `content-type`
               * supported types:
               * - text/plain
               * - application/json
               * - image/jpeg (Blob)
               * - application/octet-stream (ArrayBuffer)
               * - application/pdf (Blob)
               *
               * Payload: parsed response
               * @event response
               */ /**
                   * Fired when an error has occoured.
                   * This is a general error event. The specific error events are fired additionally.
                   * @event response-error
                   */ /**
                       * Fired when an error has occoured.
                       * This is a specific error event.
                       * @event response-error-[status-code]
                       */constructor(){super();/**
              * LastRequest's response.
              *
              * Note that lastResponse is set when ongoing request finishes, so if loading is true,
              * then lastResponse will correspond to the result of the previous request.
              * @type {Object}
              */this.lastRequest={};/**
                            * True while request is in flight.
                            * @type boolean
                            */this.isLoading=!1;/**
                             * True if fetch API is not available
                             * @type {boolean}
                             */this.xhrFallback=!window.hasOwnProperty("fetch")}/**
     * Sends a HTTP request to the server
     * @param {Request} request (The Request interface of the Fetch API represents a resource request.) https://developer.mozilla.org/en-US/docs/Web/API/Request
     * @public
     */invokeRequest(request){this.lastRequest=request;this._executeRequest(request)}/**
     * Aborts a pending request
     * You have to submit an AbortController
     * @param {AbortController} controller (The AbortController interface represents a controller object that allows you to abort one or more DOM requests as and when desired.)
     * https://developer.mozilla.org/en-US/docs/Web/API/AbortController
     */abortRequest(controller){console.info("The request is about to be aborted",this);controller.abort()}/**
     * Requests are made via the Fetch API if possible.
     * Fallback XMLHttpRequest
     *
     * @event fatal-error(payload request object)
     * @param request
     */_executeRequest(request){/**
     * dispatches fatal-error
     * @param detail
     */let fatal=detail=>{this.dispatchEvent(new CustomEvent("fatal-error",{detail:detail,bubbles:!0,composed:!0}))};/**
        * Fallback, if Fetch API ist not available
        */if(this.xhrFallback){this._invokeXHR(request).then(response=>{this._reworkRequest(response)},function(error){fatal(error)})}else{/**
       * Default API fetch
       * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
       */this.isLoading=!0;this.dispatchEvent(new CustomEvent("request-started",{detail:request,bubbles:!0,composed:!0}));fetch(request).then(response=>{this._reworkRequest(response)}).catch(err=>{if("AbortError"===err.name){this.dispatchEvent(new CustomEvent("request-aborted",{detail:request,bubbles:!0,composed:!0}));console.error("RequestService fetch aborted: ",err)}else{console.error("RequestService fatal error",err)}fatal(request)})}}/**
     * Requests are made via fallback XMLHttpRequest
     * @param request
     * @private
     */_invokeXHR(request){console.info("Fetch API not available, fallback to XMLHttpRequest");this.isLoading=!0;return new Promise(function(resolve,reject){/**
       * map Request to XHR
       */let req=new XMLHttpRequest;req.open(request.method,request.url,!0);if(request.headers.get("content-type").includes("json")){req.responseType="json"}else{req.responseType="arraybuffer"}/**
         * Append headers from request object to XHR
         */for(var pair of request.headers.entries()){if(/[A-Z]/.test(pair[0])){console.error("Headers must be lower case, got",pair[0])}else{req.setRequestHeader(pair[0],pair[1])}}/**
         * XHR event handlers
         */req.onloadstart=()=>{this.dispatchEvent(new CustomEvent("request-started",{detail:req,bubbles:!0,composed:!0}))};req.onload=()=>{resolve(req)};req.onerror=err=>{console.error("XMLHttpRequest network error",err);reject(req)};req.ontimeout=err=>{console.warn("XMLHttpRequest timeout",err);reject(req)};// Do request
req.send()}.bind(this))}/**
     * Rework of Request
     * @param response
     */ /**
         * Succeeded is true if the request succeeded. The request succeeded if it
         * loaded without error, wasn't aborted, and the status code is ≥ 200, and
         * < 300, or if the status code is 0.
         */ /**
             * Errorhandling according to Google rest-api-v3 Status Codes
             * (https://developers.google.com/maps-booking/reference/rest-api-v3/status_codes)
             *
             * Dispatches event `response-error` and a specific error event with status code
             */_reworkRequest(response){/**
     * The status code 0 is accepted as a success because some schemes - e.g.
     * file:// - don't provide status codes.
     */this.isLoading=!1;let status=0|response.status;if(0===status||200<=status&&300>status){/**
       * Loaded without error, fires event `response` with full response object
       */this.lastResponse=response;this.dispatchEvent(new CustomEvent("response-raw",{detail:response,bubbles:!0,composed:!0}));/**
            * parses response object according to response heaader informationen `content-type`
            * you will find the supported content-types in the declaration area
            */this._parseResponse(response)}else{/**
       * Error detected
       */this.lastResponse=void 0;this.dispatchEvent(new CustomEvent("response-error-raw",{detail:response,bubbles:!0,composed:!0}));response.json().then(error=>{if(error){response.error=error.error;this.dispatchEvent(new CustomEvent("response-error-"+response.status,{detail:error,bubbles:!0,composed:!0}));this.dispatchEvent(new CustomEvent("response-error",{detail:error,bubbles:!0,composed:!0}));//console.error('Looks like there was a problem. Status Code: ', response.status);
}}).catch(()=>{this.dispatchEvent(new CustomEvent("parse-error",{detail:response,bubbles:!0,composed:!0}))})}}/**
     * parses response object according to lastRequest heaader informationen `content-type`
     * you will find the supported content-types in the declaration area
     * respone Fetch API response object [https://developer.mozilla.org/en-US/docs/Web/API/Response]
     * Default response handler is json!
     * @param response
     */_parseResponse(response){var _self=this;if(response){let contentType=this.lastRequest.headers.get("content-type"),responseHandler={"text/plain":r=>{r.text().then(function(text){_self.dispatchEvent(new CustomEvent("response",{detail:text,bubbles:!0,composed:!0}))})},"application/json":r=>{if(this.xhrFallback){this.dispatchEvent(new CustomEvent("response",{detail:r.response,bubbles:!0,composed:!0}))}else{r.json().then(function(json){_self.dispatchEvent(new CustomEvent("response",{detail:json,bubbles:!0,composed:!0}))})}},"application/octet-stream":r=>{if(this.xhrFallback){this.dispatchEvent(new CustomEvent("response",{detail:r.response,bubbles:!0,composed:!0}))}else{r.arrayBuffer().then(function(buffer){_self.dispatchEvent(new CustomEvent("response",{detail:buffer,bubbles:!0,composed:!0}))})}},"application/pdf":r=>{if(this.xhrFallback){let blob=new Blob([r.response],{type:"image/jpeg"}),fileReader=new FileReader;fileReader.onload=function(evt){var result=evt.target.result;_self.dispatchEvent(new CustomEvent("response",{detail:result,bubbles:!0,composed:!0}))};fileReader.readAsDataURL(blob)}else{r.blob().then(function(blob){_self.dispatchEvent(new CustomEvent("response",{detail:URL.createObjectURL(blob),bubbles:!0,composed:!0}))})}},"image/jpeg":r=>{if(this.xhrFallback){let blob=new Blob([r.response],{type:"image/jpeg"}),fileReader=new FileReader;fileReader.onload=function(evt){var result=evt.target.result;_self.dispatchEvent(new CustomEvent("response",{detail:result,bubbles:!0,composed:!0}))};fileReader.readAsDataURL(blob)}else{r.blob().then(function(blob){_self.dispatchEvent(new CustomEvent("response",{detail:URL.createObjectURL(blob),bubbles:!0,composed:!0}))})}},default:r=>{if(this.xhrFallback){this.dispatchEvent(new CustomEvent("response",{detail:JSON.parse(r.response),bubbles:!0,composed:!0}))}else{r.json().then(function(json){_self.dispatchEvent(new CustomEvent("response",{detail:json,bubbles:!0,composed:!0}))})}}},typeHandler=responseHandler[contentType]||responseHandler["default"];typeHandler(response)}}}customElements.define("api-fetch",ApiFetch);class CollectionControls extends EventTreeNode{constructor(collectionAgent,type,specs){super();this.collectionAgent=collectionAgent;this.paginaton={first:!1,next:!0,prev:!0,last:!1,currentPage:1,pageSize:this.pageSize,numOfRecords:23};this.filter={};this.order={};this.info={fields:this.collectionAgent.fields}}}_exports.CollectionControls=CollectionControls;var CollectionControls$1={CollectionControls:CollectionControls};_exports.$CollectionControls=CollectionControls$1;class collectionAgent extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this._servicedefinitions=_furoShell.Env.api.services;this._ApiEnvironment=_furoShell.Env.api;// HTS aus response anwenden
this._FBPAddWireHook("--responseParsed",r=>{if(this._updateInternalHTS(r.links)){/**
         * @event response-hts-updated
         * Fired when
         * detail payload: hts
         */let customEvent=new Event("response-hts-updated",{composed:!0,bubbles:!0});customEvent.detail=r.links;this.dispatchEvent(customEvent)}});this._singleElementQueue=[];//queue for calls, before hts is set
this._queryParams={}}static get properties(){return{/**
       * Name des Services
       */service:{type:String,attribute:!0},pageSize:{type:Number,attribute:"page-size"},fields:{type:String,attribute:!0},orderBy:{type:String,attribute:"order-by"},filter:{type:Array,attribute:!0},view:{type:String,attribute:!0},listOnHtsIn:{type:Boolean,attribute:"list-on-hts-in"}}}firstUpdated(){super.firstUpdated();/**
                           * @event collection-controls
                           * Fired when
                           * detail payload:
                           */let customEvent=new Event("collection-controls",{composed:!0,bubbles:!0});customEvent.detail=new CollectionControls(this,this.service,this._servicedefinitions);setTimeout(()=>{this.dispatchEvent(customEvent)},0)}/**
     * https://cloud.google.com/apis/design/design_patterns
     */ /**
         * Partielle Repräsentation
         * https://cloud.google.com/apis/design/design_patterns#partial_response
         *
         * etwas seltsam, aber google sieht hier $fields vor. Wird aber nicht so verwendet
         *
         */setFields(fields){this.fields=fields}/**
     * Sortierreihenfolge
     * https://cloud.google.com/apis/design/design_patterns#sorting_order
     *
     * To avoid sql injection errors we do not send sql like syntax!
     *
     * order-by="foo,-bar"  means foo asc and bar desc
     */setOrderBy(order){this.orderBy=order}/**
     * clear filter
     */clearFilter(){this._filter=void 0}// Filtern  [["user","eq","12345"], ["abgeschlossen","eq", true]]
setFilter(filterstring){if(Array.isArray(filterstring)){this.filter=filterstring}}set filter(f){this._filter=f;/**
                       * @event filter-updated
                       * Fired when filter was updated with ƒ-set-filter
                       * detail payload:
                       */let customEvent=new Event("filter-changed",{composed:!0,bubbles:!0});customEvent.detail=this;this.dispatchEvent(customEvent)}// Gewünschte Seite. Tipp: Folge dem HATEOAS
// Seitengrösse  page_size
// Meta für die Anzahl der Elemente der Resource
/**
   * contextbezogene Darstellung
   *
   * https://cloud.google.com/apis/design/design_patterns#resource_view
   *
   * view=smallcards
   *
   */ /**
       * Setze den Service
       * @param service
       */set service(service){if(!this._servicedefinitions[service]){console.error("service "+service+" does not exist",this,"Available Services:",this._servicedefinitions);return}this._service=this._servicedefinitions[service];if(this._service.general.lifecycle.deprecated){console.warn("You are using a deprecated service ("+service+") "+this._service.general.lifecycle.info)}// set pagination defaults
}bindRequestObject(entityTree){this._entityTree=entityTree}/**
     * Update query params
     * a qp like {"active":true} will just update the qp *active*
     *
     * If the current value of the qp is not the same like the injected value, a qp-changed event will be fired
     * @param {Object} key value pairs
     */updateQp(qp){let qpChanged=!1;for(let key in qp){if(qp.hasOwnProperty(key)){if(this._queryParams[key]!=qp[key]){qpChanged=!0}this._queryParams[key]=qp[key]}}if(qpChanged){/**
      * @event qp-changed
      * Fired when query params changed
      * detail payload: qp
      */let customEvent=new Event("qp-changed",{composed:!0,bubbles:!0});customEvent.detail=this._queryParams;this.dispatchEvent(customEvent)}}_makeRequest(link,body){let data;if(body){data=JSON.stringify(body)}// Daten
let headers=new Headers(this._ApiEnvironment.headers);headers.append("Content-Type","application/"+link.type+"+json");headers.append("Content-Type","application/json");let params={},r=link.href.split("?"),req=r[0];// add existing params from href
if(r[1]){r[1].split("&").forEach(p=>{let s=p.split("=");params[s[0]]=s[1]})}// append query params
// query params
for(let key in this._queryParams){if(this._queryParams.hasOwnProperty(key)){params[key]=this._queryParams[key]}}// Fields
if(this.fields){params.fields=this.fields.split(" ").join("")}// Sort
if(this.orderBy){params.order_by=this.orderBy.split(" ").join("")}// Filter
if(this._filter){params.filter=JSON.stringify(this._filter)}// rebuild req
let qp=[];for(let key in params){if(params.hasOwnProperty(key)){qp.push(key+"="+params[key])}}if(0<qp.length){req=req+"?"+qp.join("&")}return new Request(req,{method:link.method,headers:headers,body:data})}_checkServiceAndHateoasLinkError(rel,serviceName){// check Service Get
if(!this._service.services[serviceName]){// todo fehler werfen ???
console.warn("Restlet "+serviceName+" is not specified",this._service,this);return!0}//queue if no hts is set, queue it
if(!this._hts){this._singleElementQueue=[[rel,serviceName]];return!0}// check Hateoas
if(!this._hts[rel]){console.warn("No HATEOAS for rel self",this._hts,this);return!0}return!1}_followRelService(rel,serviceName){if(this._checkServiceAndHateoasLinkError(rel,serviceName)){return}this._FBPTriggerWire("--triggerLoad",this._makeRequest(this._hts[rel]))}/**
     * loads the entity if hts is available
     */list(){this._followRelService("list","List")}search(term){if(""!==term){this._queryParams.q=term;this.list()}else{delete this._queryParams.q}}/**
     * loads the entity if hts is available
     */first(){this._followRelService("first","List")}/**
     * loads the entity if hts is available
     */prev(){this._followRelService("prev","List")}/**
     * loads the entity if hts is available
     */next(){this._followRelService("next","List")}/**
     * loads the entity if hts is available
     */last(){this._followRelService("last","List")}_updateInternalHTS(hts){// convert link object to hts array
if(hts&&hts.rel&&hts.method&&hts.type&&hts.href){hts=[hts]}if(hts&&hts[0]&&hts[0].rel){this._hts={};hts.forEach(link=>{this._hts[link.rel]=link});/**
           * @event hts-updated
           * Fired when hateoas is updated from response
           * detail payload: {Array|HATEOAS}
           */let customEvent=new Event("hts-updated",{composed:!0,bubbles:!1});customEvent.detail=hts;this.dispatchEvent(customEvent);return!0}return!1}htsIn(hts){if(this._updateInternalHTS(hts)){/**
       * @event hts-updated
       * Fired when hateoas is updated
       * detail payload: Hateoas links
       */let customEvent=new Event("hts-injected",{composed:!0,bubbles:!1});customEvent.detail=hts;this.dispatchEvent(customEvent);if(this.listOnHtsIn){this.list()}// there was a list,last,next call before the hts was set
if(0<this._singleElementQueue.length){let q=this._singleElementQueue.pop();this._followRelService(q[0],q[1])}}}render(){// language=HTML
return _furoShell.html`
      <!-- Add a style block here -->
      <style>
        :host {
          display: none;
        }
      </style>
      <api-fetch
              ƒ-invoke-request="--triggerLoad"
              ƒ-abort-request="--abort-demanded"
              @-response="--responseParsed">
      </api-fetch>
    `}}customElements.define("collection-agent",collectionAgent);class CollectionNode extends EventTreeNode{constructor(parentNode,type,specs){super(parentNode);this.__specdefinitions=specs;this._spec=this.__specdefinitions[type];this.data=[]}injectRaw(rawResponse){//daten aktualisieren
this.data=rawResponse.data;this.dispatchNodeEvent(new NodeEvent("data-changed",this.data))}_templateMe(template,data){const pattern=/\{(.*?)\}/g;return template.replace(pattern,(match,token)=>data[token])}}_exports.CollectionNode=CollectionNode;var CollectionNode$1={CollectionNode:CollectionNode};_exports.$CollectionNode=CollectionNode$1;class CollectionObject extends _furoShell.LitElement{constructor(){super();this._specs=_furoShell.Env.api.specs}injectRaw(jsonObj){this.collection.injectRaw(jsonObj)}// make the collection Object empty
clear(){this.collection.injectRaw({data:[]})}set type(type){if(this._type){this._checkType(type)}this._type=type}_checkType(type){if(this._specs[type]===void 0){/**
       * @event spec-error
       * Fired when spec could not be loaded
       * detail payload: {string} spec name
       */let customEvent=new Event("spec-error",{composed:!0,bubbles:!0});customEvent.detail=type;setTimeout(()=>{this.dispatchEvent(customEvent)},0);return}this.collection=new CollectionNode(null,type,this._specs);this.collection.addEventListener("data-changed",e=>{/**
      * @event data-changed
      * Fired when data in collection has changed
      * detail payload: {Object|CollectionNode}
      */let customEvent=new Event("data-changed",{composed:!0,bubbles:!0});customEvent.detail=this.collection;this.dispatchEvent(customEvent)});/**
         * @event object-ready
         * Fired when
         * detail payload:
         */let customEvent=new Event("object-ready",{composed:!0,bubbles:!0});customEvent.detail=this.collection;setTimeout(()=>{this.dispatchEvent(customEvent)},0)}static get properties(){return{/**
       * Ein Entitätenbaum mit allen Feldern
       */collection:{type:Object},/**
       * Name der Spec
       */type:{type:String}}}firstUpdated(){super.firstUpdated();// queueing
if(this._type){this._checkType(this._type)}}}window.customElements.define("collection-object",CollectionObject);class CustomMethod extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this._servicedefinitions=_furoShell.Env.api.services;this._ApiEnvironment=_furoShell.Env.api}static get properties(){return{/**
       * Name des Services
       */service:{type:String,attribute:!0},/**
       * Name der Methode
       */method:{type:String,attribute:!0}}}/**
     * Setze den Service
     * @param service
     */set service(service){if(!this._servicedefinitions[service]){console.error("service "+service+" does not exist",this,"Available Services:",this._servicedefinitions);return}this._service=this._servicedefinitions[service];if(this._service.general.lifecycle.deprecated){console.warn("You are using a deprecated service ("+service+") "+this._service.general.lifecycle.info)}}bindRequestObject(entityTree){this._entityTree=entityTree}bindData(entityTree){this._entityTree=entityTree}_makeRequest(link,body){let data;if(body){data=JSON.stringify(body)}// Daten
let headers=new Headers(this._ApiEnvironment.headers);headers.append("Content-Type","application/"+link.type+"+json");headers.append("Content-Type","application/json");return new Request(link.href,{method:link.method,headers:headers,body:data})}_checkServiceAndHateoasLinkError(rel,serviceName){// check Service Get
let s=Object.keys(this._service.services).map(key=>{return key.toLowerCase()});if(-1===s.indexOf(serviceName.toLowerCase())){// todo fehler werfen ???
console.warn("Restlet "+serviceName+" is not specified",this._service,this);return!0}// check Hateoas
if(!this._hts[rel]){console.warn("No HATEOAS for rel self",this._hts,this);return!0}return!1}/**
     * trigger the method with respect for binded-requset-object
     */trigger(){if(this._entityTree){this.triggerWithBody(this._entityTree.rawData)}else{this.triggerEmpty()}}triggerEmpty(){if(this._checkServiceAndHateoasLinkError(this.method,this.method)){return}this._FBPTriggerWire("--triggerLoad",this._makeRequest(this._hts[this.method]))}/**
     * trigger the method with data
     */triggerWithBody(body){if(this._checkServiceAndHateoasLinkError(this.method,this.method)){return}this._FBPTriggerWire("--triggerLoad",this._makeRequest(this._hts[this.method],body))}htsIn(hts){if(hts&&hts[0]&&hts[0].rel){this._hts={};hts.forEach(link=>{this._hts[link.rel]=link});/**
          * @event hts-updated
          * Fired when
          * detail payload:
          */let customEvent=new Event("hts-updated",{composed:!0,bubbles:!0});customEvent.detail=hts;this.dispatchEvent(customEvent)}}render(){// language=HTML
return _furoShell.html`
      <!-- Add a style block here -->
      <style>
        :host {
          display: none;
        }
      </style>
      <api-fetch
              ƒ-invoke-request="--triggerLoad"
              ƒ-abort-request="--abort-demanded"
              @-response="--responseParsed">
      </api-fetch>
    `}}window.customElements.define("custom-method",CustomMethod);class DeepLink extends _furoShell.LitElement{constructor(){super();this._servicedefinitions=_furoShell.Env.api.services;this._qp={}}static get properties(){return{/**
       * @type {object|QueryParams} Query Params
       */qp:{type:Object},/**
       * Name des Services
       */service:{type:String,attribute:!0}}}/**
     * Evaluates hts. Use qpIn(qp) if you have a qp object in your event.detail
     */trigger(){if(this._qp&&this._service){this._buildHTS(this._qp,this._service)}}_buildHTS(qp,service){this._hts=[];// loop services
for(let serviceName in service.services){let candidate={rel:service.services[serviceName].deeplink.rel,href:service.services[serviceName].deeplink.href,method:service.services[serviceName].deeplink.method,type:service.services[serviceName].request};for(let param in this._qp){candidate.href=candidate.href.replace("{"+param+"}",this._qp[param])}//wenn es keine {xx} mehr hat, ist es ein treffer
if(-1===candidate.href.indexOf("{")){//candidate.type = "application/" + candidate.type + "+json"
this._hts.push(candidate)}}if(this._hts.length){/**
       * @event hts-out
       * Fired when hateoas is available
       * detail payload: {[]Links} Array of hateoas links
       */let customEvent=new Event("hts-out",{composed:!0,bubbles:!0});customEvent.detail=this._hts;this.dispatchEvent(customEvent)}}/**
     * set queryParams and evaluate for hateoas
     * @param queryParams
     */qpIn(queryParams){this._qp=queryParams;this.trigger()}/**
     * Deprecated
     *
     * Set QP via attribute (for polymer 3 compatibility), use ƒ-qp-in (qpIn) instead
     * @param qp
     */set qp(qp){// zwischenspeichern für einen ev. ƒ-trigger
console.warn("setting the qp via attribute is deprecated, use \u0192-qp-in instead");console.warn("This feature will be removed in Q3-2019",this);this._qp=qp;this.trigger()}/**
     * Deprecated
     *
     * use ƒ-qp-in instead
     *
     * Inject a QueryParams (key value) Object
     * @param {object|QueryParams} qp
     */injectQueryParams(qp){console.warn("injectQueryParams is deprecated, use \u0192-qp-in instead");console.warn("This feature will be removed in Q3-2019",this);// zwischenspeichern für einen ev. ƒ-trigger
this._qp=qp;this.trigger()}/**
     * Sets the service
     *
     * Services must be registered like:
     *
     * ```html
     * import {Services,Types} from "./apiConfig.js"
     * Init.registerApiServices(Services);
     * Init.registerApiTypes(Types);
     * ```
     * Usually this is done in your main-app.js
     *
     * @param serviceName
     */setService(serviceName){this.service=serviceName}/**
     * Setze den Service
     * @param service
     */set service(service){if(this._servicedefinitions[service]){this._service=this._servicedefinitions[service];if(this._service.general.lifecycle.deprecated){console.warn("You are using a deprecated service ("+service+") "+this._service.general.lifecycle.info)}}else{console.error("service "+service+" does not exist",this,"Available Services:",this._servicedefinitions)}}}window.customElements.define("deep-link",DeepLink);class ReverseDeepLink extends _furoShell.LitElement{constructor(){super();this.service="";this._services=_furoShell.Env.api.services}/**
     * converts the href of a LinkObject
     *
     * @param {object|linkObject} {object|rawEntity} {object|rawCollection} data
     * @return {object|QueryParams} Object with query params key value
     */convert(data){let qp={};if(this._services[this.service]===void 0){console.warn(this.service," service is not defined",this);return}this._serviceDef=this._services[this.service].services;let linkObject=data;// Entity or Collection
if(Array.isArray(data.links)){if(data&&Array.isArray(data.data)){// is collection
// default rel if not set
if(!this.rel){this.rel="list"}}else{// is entity
if(!this.rel){this.rel="self"}}linkObject=data.links.filter(e=>{return e.rel.toLowerCase()===this.rel.toLowerCase()})[0]}// Links Array
if(Array.isArray(data)){linkObject=data.filter(e=>{return e.rel===this.rel})[0]}if(linkObject){qp=this._convert(linkObject)}/**
       * @event converted
       * Fired when input was converted
       * detail payload: {object|QueryParams}
       */let customEvent=new Event("converted",{composed:!0,bubbles:!0});customEvent.detail=qp;this.dispatchEvent(customEvent);return qp}_convert(link){let linkObject={rel:link.rel,href:link.href,method:link.method,type:link.type};if("self"===linkObject.rel){linkObject.rel="Get"}linkObject.rel=linkObject.rel.charAt(0).toUpperCase()+linkObject.rel.slice(1);let pattern=this._serviceDef[linkObject.rel].deeplink.href,rgx=/{([^}]*)}/gi,keys=[],m;while(null!==(m=rgx.exec(pattern))){pattern=pattern.replace(m[0],"(.*)");keys.push(m[1])}let srgx=new RegExp(pattern+"$"),qp={},matches=srgx.exec(linkObject.href);if(matches){keys.forEach((e,i)=>{qp[e]=matches[i+1]})}return qp}static get properties(){return{/**
       * Name of service
       */service:{type:String},/**
       * Optional rel to convert.
       *
       * Not needed if you inject a link object.
       *
       * If you insert an entity rel self is taken. If you insert a collection, rel list is used.
       */rel:{type:String}}}}window.customElements.define("reverse-deep-link",ReverseDeepLink);class EntityNode extends EventTreeNode{constructor(parentNode,type,specs){super(parentNode);this.__specdefinitions=specs;this._spec=this.__specdefinitions[type];this.addChildProperty("fields");this.fields.__specdefinitions=this.__specdefinitions;this._initFieldsFromSpec(this.fields,this._spec.fields);this._pristine=!0;this._isValid=!0;/**
                           * Schaltet ein Feld auf valid, müssen wir alle Felder auf validity prüfen...
                           */this.addEventListener("field-became-valid",e=>{if(0===this.fields.__childNodes.filter(f=>!f._isValid).length){this._isValid=!0;this.dispatchNodeEvent(new NodeEvent("entity-became-valid",this))}});/**
         * Schaltet ein Feld auf invalid ist die Entity ebenfalls invalid
         */this.addEventListener("field-became-invalid",e=>{this._isValid=!1;this.dispatchNodeEvent(new NodeEvent("entity-became-invalid",this))});/**
         * Wird ein Wert geändert gilt das form ebenfalls nicht mehr als jungfräulich
         */this.addEventListener("field-value-changed",e=>{this._pristine=!1})}/**
     * Injecten eines raw models wie bspw body oder entity einer collection
     * @param rawEntity
     */injectRaw(rawEntity){this._rawEntity=rawEntity;let meta={};if(rawEntity.meta){meta=rawEntity.meta.fields}this._updateFieldValuesAndMetaFromRawEntity(this.fields,rawEntity.data,meta);this._pristine=!0;this._isValid=!0;if(rawEntity.error&&rawEntity.details){rawEntity.details.forEach(errorSet=>{if(errorSet.field_violations){this._handleErrorsFromRawEntity(this.fields,errorSet.field_violations)}})}this.dispatchNodeEvent(new NodeEvent("data-injected",this,!0))}/**
     * Resete zum letzten injectet state zurück
     */reset(){if(this._rawEntity){this.injectRaw(this._rawEntity)}}/**
     * Inits the EntityNode without breaking the reference
     */init(){this._initFieldsFromSpec(this.fields,this._spec.fields);this._pristine=!0;this._isValid=!0}get rawEntity(){return this._rawEntity}get rawData(){return this.getRawData()}getRawData(){let data={};// nur reine Daten zurück geben
for(let index in this.fields.__childNodes){let field=this.fields.__childNodes[index];data[field._name]=field.value}return data}_updateFieldValuesAndMetaFromRawEntity(node,data,dynamicFieldMeta){for(let fieldName in data){let fieldNode=node[fieldName];if(!fieldNode){console.warn("unspecified field",fieldName)}else{if(fieldNode._isRepeater){let initialSize=fieldNode.repeats.length;//fieldNode.removeAllChildren();
// update records
data[fieldName].forEach((repdata,i)=>{// create if record index do not exist
if(!fieldNode.repeats[i]){fieldNode._addSilent()}let repMeta={};if(dynamicFieldMeta[fieldName]){if(dynamicFieldMeta[fieldName].fields){repMeta=dynamicFieldMeta[fieldName].fields}}// Werte aktualisieren
fieldNode.repeats[i].value=repdata;fieldNode.repeats[i]._pristine=!0;fieldNode.repeats[i].__index=i});// entferne überzählige nodes
let newSize=data[fieldName].length;if(newSize<fieldNode.repeats.length){fieldNode.repeats.splice(newSize)}fieldNode._pristine=!0;fieldNode.dispatchNodeEvent(new NodeEvent("repeated-fields-changed",fieldNode.repeats,!0))}else{if(fieldNode){fieldNode._clearInvalidity();let meta={},submeta={};// Kommen neue metas von draussen rein
if(dynamicFieldMeta[fieldName]){meta=dynamicFieldMeta[fieldName];// setze node Meta wenn neue metas gekommen sind
// TODO @veith Metas mischen und nicht überklatschen, ev immer von spec meta aus und nicht von runtime meta
if(meta.constraints){for(let key in meta.constraints){fieldNode._constraints[key]=meta.constraints[key]}}if(meta.meta){for(let key in meta.meta){fieldNode._meta[key]=meta.meta[key]}}if(meta.options){for(let key in meta.options){fieldNode._options[key]=meta.options[key]}}// hat es meta für subfelder
if(meta.fields){submeta=meta.fields}}// Werte aktualisieren
fieldNode.value=data[fieldName];fieldNode._pristine=!0}}}}}_handleErrorsFromRawEntity(fields,fieldErrors){fieldErrors&&fieldErrors.map(error=>{if(error.description){error.message=error.description}let path=error.field.split(".");if(0<path.length){// rest wieder in error reinwerfen
error.field=path.slice(1).join(".");if(fields[path[0]]){fields[path[0]]._setInvalid(error)}else{console.warn("Unknown field",path)}}})}/**
     * Baut die Felder aufgrund der spec auf
     * @param node
     * @param fieldSpec
     * @private
     */_initFieldsFromSpec(node,fieldSpec){for(let fieldName in fieldSpec){if(fieldSpec[fieldName].meta&&fieldSpec[fieldName].meta.repeated){node[fieldName]=new RepeaterNode(node,fieldSpec[fieldName],fieldName)}else{node[fieldName]=new FieldNode(node,fieldSpec[fieldName],fieldName)}}}toString(){return this.spec.mimetype}}_exports.EntityNode=EntityNode;var EntityNode$1={EntityNode:EntityNode};_exports.$EntityNode=EntityNode$1;class EntityObject extends _furoShell.LitElement{constructor(){super();this._specs=_furoShell.Env.api.specs}static get properties(){return{/**
       * Name der Spec
       */type:{type:String}}}injectPlainData(data){this.injectRaw({data:data})}/**
     * inject a raw entity json {data:..,links:...,meta,..-}
     * @param jsonObj
     */injectRaw(jsonObj){// queue inject bis entity bereit ist
if(!this.entity){setTimeout(()=>{this.injectRaw(jsonObj)},0)}else{this.entity.injectRaw(jsonObj)}}set type(type){if(this._type){this._checkType(type)}this._type=type}_checkType(type){if(this._specs[type]===void 0){console.warn("Type does not exist.",type,this,this._specs);return}/**
       * create the entity node
       * @type {EntityNode}
       */this.entity=new EntityNode(null,type,this._specs);/**
                                                            * @event object-ready
                                                            * Fired when
                                                            * detail payload:
                                                            */let customEvent=new Event("object-ready",{composed:!0,bubbles:!0});customEvent.detail=this.entity;setTimeout(()=>{this.dispatchEvent(customEvent)},0);this.entity.addEventListener("data-injected",e=>{/**
      * @event data-injected
      * Fired when injected data was processed.
      * detail payload: {Object|EntityNode} reference to entity
      */let customEvent=new Event("data-injected",{composed:!0,bubbles:!0});customEvent.detail=e.detail;this.dispatchEvent(customEvent)});this.entity.addEventListener("field-value-changed",e=>{/**
       * @event data-changed
       * Fired when data in collection has changed
       * detail payload: {Object|CollectionNode}
       */let customEvent=new Event("data-changed",{composed:!0,bubbles:!0});customEvent.detail=this.entity.rawData;this.dispatchEvent(customEvent);/**
                                        * @event (field-value-changed)
                                        *
                                        * ✋ Internal Event!
                                        *
                                        * Fired when a value on a field node changes. This event **bubbles** by default. Can be used on any node.
                                        *
                                        * detail payload: **{NodeEvent}** with reference to the FieldNode
                                        */ /**
                                            * @event (this-field-value-changed)
                                            *
                                            * ✋ Internal Event!
                                            *
                                            * Fired when a value on a particular field node changes. This event **does not bubble**. Can be used on any node.
                                            *
                                            * detail payload: **{NodeEvent}** with reference to the FieldNode
                                            */ /**
                                                * @event (data-injected)
                                                *
                                                * ✋ Internal Event!
                                                *
                                                * Fired when `ƒ-inject-raw` is completed and fresh data was injected. Only fired from EntityNode which is the root.
                                                *
                                                * This event **bubbles**.
                                                *
                                                * detail payload: **{NodeEvent}**
                                                */})}/**
     * Inits internal entity
     * References will still be valid
     */init(){this.entity.init();let customEvent=new Event("object-ready",{composed:!0,bubbles:!0});customEvent.detail=this.entity;setTimeout(()=>{this.dispatchEvent(customEvent)},0)}firstUpdated(){super.firstUpdated();// queueing
if(this._type){this._checkType(this._type)}// data objects
this._entityFields=this.querySelectorAll("entity-field");// console.log("todo",this._entityFields);
}}window.customElements.define("entity-object",EntityObject);class EntityAgent extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this._servicedefinitions=_furoShell.Env.api.services;this._ApiEnvironment=_furoShell.Env.api;// HTS aus response anwenden
this._FBPAddWireHook("--responseParsed",r=>{if(this._updateInternalHTS(r.links)){/**
         * @event response-hts-updated
         * Fired when
         * detail payload: hts
         */let customEvent=new Event("response-hts-updated",{composed:!0,bubbles:!0});customEvent.detail=r.links;this.dispatchEvent(customEvent)}});this._singleElementQueue=[];//queue for calls, before hts is set
}static get properties(){return{/**
       * Name des Services
       */service:{type:String,attribute:!0}}}/**
     * Setze den Service
     * @param service
     */set service(service){if(!this._servicedefinitions[service]){console.error("service "+service+" does not exist",this,"Available Services:",this._servicedefinitions);return}this._service=this._servicedefinitions[service];if(this._service.general.lifecycle.deprecated){console.warn("You are using a deprecated service ("+service+") "+this._service.general.lifecycle.info)}}bindRequestObject(entityTree){this._entityTree=entityTree}_makeRequest(link,body){let data;if(body){data=JSON.stringify(body)}// Daten
let headers=new Headers(this._ApiEnvironment.headers);headers.append("Content-Type","application/"+link.type+"+json");if("put"!==link.method.toLowerCase()){headers.append("Content-Type","application/json")}return new Request(link.href,{method:link.method,headers:headers,body:data})}_checkServiceAndHateoasLinkError(rel,serviceName){// check Service Get
if(!this._service.services[serviceName]){console.warn("Restlet "+serviceName+" is not specified",this._service,this);return!0}//queue if no hts is set, queue it
if(!this._hts){this._singleElementQueue=[[rel,serviceName]];return!0}// check Hateoas
if(!this._hts[rel]){console.warn("No HATEOAS for rel self",this._hts,this);return!0}return!1}/**
     * @event load-success
     * Fired when load was successful
     * detail payload: response
     */ /**
         * @event load-failed
         * Fired when load was not successful
         * detail payload: response
         */ /**
             * loads the entity if hts is available
             */load(){if(this._checkServiceAndHateoasLinkError("self","Get")){return}this._attachListeners("load");this._FBPTriggerWire("--triggerLoad",this._makeRequest(this._hts.self))}/**
     * @event delete-success
     * Fired when load was successful
     * detail payload: response
     */ /**
         * @event delete-failed
         * Fired when load was not successful
         * detail payload: response
         */ /**
             * delete the entity if hts is available
             */delete(){if(this._checkServiceAndHateoasLinkError("delete","Delete")){return}this._attachListeners("delete");this._FBPTriggerWire("--triggerLoad",this._makeRequest(this._hts.delete))}/**
     * @event save-success
     * Fired when load was successful
     * detail payload: response
     */ /**
         * @event save-failed
         * Fired when load was not successful
         * detail payload: response
         */ /**
             * loads the entity if hts is available
             */save(){// wen kein rel self vorhanden ist, aber ein rel create existiert, verwendenn wir create
// rel self ist bewusst gewählt
if(!this._hts.self){this.create();return}if(this._checkServiceAndHateoasLinkError("update","Update")){return}this._attachListeners("save");// TODO nur delta senden
this._FBPTriggerWire("--triggerLoad",this._makeRequest(this._hts.update,this._entityTree.rawData))}/**
     * @event create-success
     * Fired when load was successful
     * detail payload: response
     */ /**
         * @event create-failed
         * Fired when load was not successful
         * detail payload: response
         */ /**
             * loads the entity if hts is available
             */create(){if(this._checkServiceAndHateoasLinkError("create","Create")){return}this._attachListeners("create");this._FBPTriggerWire("--triggerLoad",this._makeRequest(this._hts.create,this._entityTree.rawData))}/**
     * Attaches temporary listeners to fire load-success, load-fail, delete-success,...
     * @param eventPrefix
     * @private
     */_attachListeners(eventPrefix){let success=e=>{// we do not want req-success and req-failed outside of this component
e.stopPropagation();let customEvent=new Event(eventPrefix+"-success",{composed:!0,bubbles:!0});customEvent.detail=e.detail;this.dispatchEvent(customEvent);// remove listeners
this.removeEventListener("req-success",success,!0);this.removeEventListener("req-failed",failed,!0)},failed=e=>{// we do not want req-success and req-failed outside of this component
e.stopPropagation();let customEvent=new Event(eventPrefix+"-failed",{composed:!0,bubbles:!0});customEvent.detail=e.detail;this.dispatchEvent(customEvent);// remove listeners
this.removeEventListener("req-success",success,!0);this.removeEventListener("req-failed",failed,!0)};/**
        * do not add the listener directly to response, otherwise it kicks in before hts is updated
        * This extra "loop" is to guarante the order of handling the events
        */this.addEventListener("req-success",success,!0);this.addEventListener("req-failed",failed,!0)}_updateInternalHTS(hts){// convert link object to hts array
if(hts&&hts.rel&&hts.method&&hts.type&&hts.href){hts=[hts]}if(hts&&hts[0]&&hts[0].rel){this._hts={};hts.forEach(link=>{this._hts[link.rel]=link});/**
           * @event hts-updated
           * Fired when hateoas is updated from response
           * detail payload: {Array|HATEOAS}
           */let customEvent=new Event("hts-updated",{composed:!0,bubbles:!1});customEvent.detail=hts;this.dispatchEvent(customEvent);return!0}return!1}htsIn(hts){if(this._updateInternalHTS(hts)){/**
       * @event hts-injected
       * Fired when hateoas is updated
       * detail payload: Hateoas links
       */let customEvent=new Event("hts-injected",{composed:!0,bubbles:!1});customEvent.detail=hts;this.dispatchEvent(customEvent);// there was a list,last,next call before the hts was set
if(0<this._singleElementQueue.length){let q=this._singleElementQueue.pop();this._followRelService(q[0],q[1])}}}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.css`
              :host {
                  display: none;
              }
          `}/**
     * @private
     * @return {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`        
      <api-fetch
              ƒ-invoke-request="--triggerLoad"
              ƒ-abort-request="--abort-demanded"
              @-response="--responseParsed,^^req-success"
              @-response-error="^^req-failed">
      </api-fetch>
    `}}window.customElements.define("entity-agent",EntityAgent);class EntityValidator extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.checks={};this._initChecks()}_initChecks(){this.checks.string={min:field=>{let constraint=field._constraints.min;if(field.value.length<constraint.value){if(constraint.message){return{message:constraint.message,constraint:"min"}}return{message:"Mindestens "+constraint.value+" Zeichen",constraint:"min"}}return null},max:field=>{let constraint=field._constraints.max;if(field.value.length>constraint.value){if(constraint.message){return{message:constraint.message,constraint:"max"}}return{message:"Maximal "+constraint.value+" Zeichen",constraint:"max"}}return null},mandatory:field=>{let constraint=field._constraints.required;if(0===field.value.length){return{message:"Eingabe erforderlich",constraint:"mandatory"}}return null}};this.checks.int={min:field=>{let constraint=field._constraints.min;if(field.value<constraint.value){return{message:"Mindestens "+constraint.value+" Zeichen",constraint:"min"}}return null},max:field=>{let constraint=field._constraints.max;if(field.value>constraint.value){if(constraint.message){return{message:constraint.message,constraint:"max"}}return{message:"Maximal "+constraint.value+" Zeichen",constraint:"max"}}return null}}}bindData(fields){let self=this;// this.validator ist hier wegen dem hoisting...
this.validator=e=>{let field=e.target,type=field._spec.type;// nur prüfen wenn field constraints  und checker existieren
if(field._constraints&&this.checks[type]){let err;for(let constraint in field._constraints){if(this.checks[type][constraint]){err=this.checks[type][constraint](field)}if(err){field._setInvalid(err);// bei erstem fehler aufhören
return}else{// nur zurücksetzen wenn das field ungültig war
if(!field._isValid){field._clearInvalidity()}}}}};fields.addEventListener("field-value-changed",this.validator);this._FBPTriggerWire("--dataInjected",fields);/** TODO: eventqueue wie in FBP aufbauen??
                                                     setTimeout(()=>{
                                                      //check all field on init
                                                      fields.__childNodes.map(e=>{
                                                        let field = {target:e};
                                                        this.validator(field)
                                                      });
                                                    },16);
                                                     */}}window.customElements.define("entity-validator",EntityValidator);class EntityField extends _furoShell.LitElement{constructor(){super()}setValue(v){this.value=v}set value(v){this._value=v;this.field.value=v}get value(){return this._value}bindData(d){if(d===void 0){console.warn("Invalid binding ");console.log(this);return}this.field=d;this.field.addEventListener("field-value-changed",e=>{// updates wieder einspielen
/**
      * @event value-changed
      * Fired when
      * detail payload:
      */let customEvent=new Event("value-changed",{composed:!0,bubbles:!0});customEvent.detail=e.detail.value;this.dispatchEvent(customEvent)})}}customElements.define("entity-field",EntityField);class FuroFilterContainer extends(0,_furoShell.FBP)(HTMLElement){constructor(){super();this.style.display="none";this.type=this.getAttribute("type");// find .querySelectorAll("simple-filter-field")
let filterFields=this.querySelectorAll("simple-filter-field");if(null!=filterFields){filterFields.forEach(f=>{// set types to children
f.type=this.type})}// register changes
this.addEventListener("furo-filter-field-changed",e=>{// baum für filter aufbauen
let filter=[];this._scanfilterFields(this,filter);if(0<filter.length){// debounce filters for 16ms
clearTimeout(this._debounce);this._debounce=setTimeout(()=>{/**
           * @event filter-changed
           * Fired when filter changed
           * detail payload: filter
           */let customEvent=new Event("filter-changed",{composed:!0,bubbles:!0});customEvent.detail=filter;console.log(JSON.stringify(filter));this.dispatchEvent(customEvent)},16)}else{/**
         * @event filter-cleared
         * Fired when filter is empty
         * detail payload: none
         */let customEvent=new Event("filter-cleared",{composed:!0,bubbles:!0});this.dispatchEvent(customEvent)}},!0)}_appendAnd(node,filterArray){let andFilter=filterArray;for(let index=0,el;index<node.children.length;index++){el=node.children[index];if("FURO-FILTER-FIELD"===el.tagName){if(el._value){let f=[el._field,el._is,el._value];if(index+1<node.children.length){f.push([])}andFilter.push(f);andFilter=f[3]}}else{if("FURO-FILTER-AND"===el.tagName){// append to index3
this._appendAnd(el,andFilter)}if("FURO-FILTER-OR"===el.tagName){this._appendOr(el,andFilter)}}}}_appendOr(node,filterArray){for(let index=0,el;index<node.children.length;index++){el=node.children[index];if("FURO-FILTER-FIELD"===el.tagName){if(el._value){let f=[el._field,el._is,el._value];// oder reinpushen
filterArray.push(f)}}else{let sub=[];filterArray.push(sub);if("FURO-FILTER-AND"===el.tagName){// append to index3
this._appendAnd(el,sub)}if("FURO-FILTER-OR"===el.tagName){this._appendOr(el,sub)}}}}_scanfilterFields(node,filterArray){for(let index in node.children){let el=node.children[index];if("FURO-FILTER-AND"===el.tagName){// append to index3
this._appendAnd(el,filterArray)}if("FURO-FILTER-OR"===el.tagName){this._appendOr(el,filterArray)}}}}window.customElements.define("furo-filter-container",FuroFilterContainer);class FuroFilterField extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}/**
     * @private
     * @return {Object}
     */static get properties(){return{is:{type:String},field:{type:String},value:{type:String}}}set is(val){this._is=val;this._notifyChanges()}set field(val){this._field=val;this._notifyChanges()}set value(val){this._value=val;this._notifyChanges()}_notifyChanges(){if(this._field&&this._value!==void 0&&this._is){/**
       * @event furo-filter-changed
       * Fired when something changed
       * detail payload:
       */let customEvent=new Event("furo-filter-field-changed",{composed:!0,bubbles:!0});customEvent.detail=this;this.dispatchEvent(customEvent)}}/**
     *
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.css`
        :host {
            display: none;
        }
    `}}window.customElements.define("furo-filter-field",FuroFilterField);class RelExists extends _furoShell.LitElement{constructor(){super()}/**
     * Inject a HTS Link Array to receive a `rel-exist` or a `rel-dont-exist` event.
     *
     * inject returns true for existing links and false for non existing links.
     *
     * @param linkArray
     * @return {boolean}
     */inject(linkArray){let links=linkArray.filter(link=>{if(this.type){return link.rel===this.rel&&link.type===this.type}return link.rel===this.rel});if(0<links.length){/**
       * @event rel-exists
       * Fired when rel exists in linkArray
       * detail payload: {Object} Hateoas Link
       */let customEvent=new Event("rel-exists",{composed:!0,bubbles:!0});customEvent.detail=links[0];this.dispatchEvent(customEvent);return!0}/**
       * @event rel-dont-exist
       * Fired when rel does not exists in linkArray
       * detail payload: void
       */let customEvent=new Event("rel-dont-exist",{composed:!0,bubbles:!0});this.dispatchEvent(customEvent);return!1}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Name of the rel
       */rel:{type:String},/**
       * define the type if you want a specific check on the type also
       */type:{type:String}}}attributeChangedCallback(name,old,value){switch(name){case"rel":this.rel=value;break;case"type":this.type=value;break;}}}window.customElements.define("rel-exists",RelExists);const Services={tasks:{general:{name:"tasks",description:"Task Services",version:"1.0.0",lifecycle:{deprecated:!1,info:"This version is still valid"}},services:{Create:{description:"creates a new contract composite",data:{request:"vnd.com.acme.task",response:"vnd.com.acme.task"},query:[],deeplink:{rel:"create",method:"POST",href:"/api/v1/tasks"},caching:{"no-cache":!1,private:!0,"max-age":10,Expires:10,ETag:!0}},List:{description:"The List method takes a collection name and zero or more parameters as input, and returns a list of resources (response type definition) that match the input.",data:{request:null,response:"vnd.com.acme.task"},query:{parameters:{opt:{description:"Option des Taskes",value:"",type:"string"}}},deeplink:{rel:"list",method:"GET",href:"./api/v1/tasks/list.json"},options:{filter:{enabled:!0,fields:["taskId","title"]},sort:{enabled:!0,fields:["taskId","title"]},pagination:{enabled:!0,default:19,max:42}},caching:{"no-cache":!1,private:!0,"max-age":10,Expires:10,ETag:!0}},Update:{description:"The Update method takes a Body.",data:{request:"vnd.com.acme.task",response:"vnd.com.acme.task"},query:[],deeplink:{rel:"update",method:"PATCH",href:"./api/v1/tasks/{vtr}.json"},caching:{"no-cache":!1,private:!0,"max-age":10,Expires:10,ETag:!0}},Get:{description:"The Get method takes a resource name, zero or more parameters, and returns the specified resource (response type definition).",data:{request:null,response:"vnd.com.acme.task"},query:[],deeplink:{rel:"self",method:"GET",href:"./api/v1/tasks/{vtr}.json"},caching:{"no-cache":!1,private:!0,"max-age":10,Expires:10,ETag:!0}},Release:{description:"Releases the pending contract",data:{request:null,response:"vnd.com.acme.task"},query:[],deeplink:{rel:"release",method:"POST",href:"/api/v1/tasks/{vtr}:release"},caching:{"no-cache":!1,private:!0,"max-age":10,Expires:10,ETag:!0}}}},tasksDeprecated:{general:{name:"tasks",description:"Task Services",version:"1.0.0",lifecycle:{deprecated:!0,info:"Please change to service tasks until Q3-2033"}},services:{Create:{description:"creates a new contract composite",data:{request:"vnd.com.acme.task",response:"vnd.com.acme.task"},query:[],deeplink:{rel:"create",method:"POST",href:"/api/v1/tasks"},caching:{"no-cache":!1,private:!0,"max-age":10,Expires:10,ETag:!0}},List:{description:"The List method takes a collection name and zero or more parameters as input, and returns a list of resources (response type definition) that match the input.",data:{request:null,response:"vnd.com.acme.task"},query:{parameters:{opt:{description:"Option des Taskes",value:"",type:"string"}}},deeplink:{rel:"list",method:"GET",href:"./api/v1/tasks/list.json"},options:{filter:{enabled:!0,fields:["taskId","title"]},sort:{enabled:!0,fields:["taskId","title"]},pagination:{enabled:!0,default:19,max:42}},caching:{"no-cache":!1,private:!0,"max-age":10,Expires:10,ETag:!0}},Update:{description:"The Update method takes a Body.",data:{request:"vnd.com.acme.task",response:"vnd.com.acme.task"},query:[],deeplink:{rel:"update",method:"PATCH",href:"./api/v1/tasks/{vtr}.json"},caching:{"no-cache":!1,private:!0,"max-age":10,Expires:10,ETag:!0}},Get:{description:"The Get method takes a resource name, zero or more parameters, and returns the specified resource (response type definition).",data:{request:null,response:"vnd.com.acme.task"},query:[],deeplink:{rel:"self",method:"GET",href:"./api/v1/tasks/{vtr}.json"},caching:{"no-cache":!1,private:!0,"max-age":10,Expires:10,ETag:!0}},Release:{description:"Releases the pending contract",data:{request:null,response:"vnd.com.acme.task"},query:[],deeplink:{rel:"release",method:"POST",href:"/api/v1/tasks/{vtr}:release"},caching:{"no-cache":!1,private:!0,"max-age":10,Expires:10,ETag:!0}}}}};_exports.Services=Services;const Types={"vnd.acme.zeitunddatum":{description:"Task komposit",type:"vnd.acme.zeitunddatum",fields:{date:{description:"Beschreibung",type:"date",meta:{default:"",hint:"",label:"Datum"},constraints:{min:{value:"today",message:"max 129"},max:{value:"eom"},mandatory:{value:!1},readonly:{value:!1}},options:{},toString:{fields:["taskNummer"],fmt:"%1"}},repstring:{description:"repstring",type:"string",meta:{repeated:!0,default:"repeat in repeat"}},time:{description:"Beschreibung",type:"time",meta:{label:"Zeit",default:"",hint:""},constraints:{mandatory:{value:!1},readonly:{value:!1}},options:{},toString:{fields:["taskNummer"],fmt:"%1"}},anytype:{description:"kann alles sein, kommt als JSON",type:"any",meta:{default:{"@type":"vnd.com.acme.reference",display_name:"Any default ref",id:3223}}},keyvaluetype:{description:"key value map",type:"map<string, string>",meta:{default:{error:"invalid username",message:"invalid username"}}}}},"vnd.com.acme.reference":{name:"Reference",type:"vnd.com.acme.reference",description:"reference",fields:{display_name:{description:"String representation of the reference",type:"string",__proto:{number:1}},id:{description:"Value of the reference",type:"string",__proto:{number:2}},rel:{description:"the relationship",type:"string",__proto:{number:3}},method:{description:"method of curl GET, POST, PUT, PATCH, DELETE",type:"string",__proto:{number:4}},href:{description:"link",type:"string",__proto:{number:5}},type:{description:"mime type",type:"string",__proto:{number:6}}}},"vnd.com.acme.task":{name:"Task",type:"vnd.com.acme.task",mime:"application/vnd.com.acme.task+json",description:"Task komposit",fields:{ref:{description:"ref",type:"vnd.com.acme.reference",meta:{label:"REFsrch",default:{display_name:"Hampel",id:"0003",href:"./api/v1/tasks/list.json",rel:"list",method:"get",type:"vnd.com.acme.task"},hint:""}},id:{description:"ulid des Taskes",type:"int",meta:{label:"Task ID",default:443343,hint:""},constraints:{min:{value:3,message:"max 129"},max:{value:129},mandatory:{value:!1},readonly:{value:!1}}},display_name:{description:"Nummer des Taskes",type:"string",meta:{label:"TITEL",default:"Tit",hint:"dsfdfs",readonly:!0},constraints:{min:{value:3,message:"Drei Zeichen sind zwingend"},max:{value:9,message:"Neun Zeichen sind genug"},mandatory:{value:!1},readonly:{value:!1}},options:{},toString:{fields:["taskNummer"],fmt:"%1"}},description:{description:"Beschreibung",type:"string",meta:{label:"Beschreibung",default:"",hint:"short text"},constraints:{min:{value:3,message:"max 129"},max:{value:129},mandatory:{value:!1},readonly:{value:!1}},options:{},toString:{fields:["taskNummer"],fmt:"%1"}},descrWithDefault:{description:"To test default values",type:"string",meta:{label:"Beschreibung",default:"YES",hint:"short text"},constraints:{min:{value:3,message:"max 129"},max:{value:129},mandatory:{value:!1},readonly:{value:!1}},options:{},toString:{fields:["taskNummer"],fmt:"%1"}},repdate:{type:"vnd.acme.zeitunddatum",meta:{repeated:!0,default:{date:"2019-12-12",time:"11:44"}}},repstring:{type:"string",meta:{repeated:!0,initialValue:["aaaa","bbbbb","ccc"]},constraints:{min:{value:3,message:"Kleinster wert ist 3"},max:{value:9}}},zeitunddatum:{type:"vnd.acme.zeitunddatum"},produktId:{name:"produktId",description:"ProduktId des Taskes",type:"int",meta:{label:"Produktid",default:"",hint:"Wert zwischen 3 und 9"},constraints:{min:{value:3,message:"Kleinster wert ist 3"},max:{value:9},mandatory:{value:!1},readonly:{value:!1}},options:[],toString:{fields:["produktId"],fmt:"%1"}}}}};_exports.Types=Types;var apiConfig={Services:Services,Types:Types};// -- initialize application env, theme, api
_exports.$apiConfig=apiConfig;_furoShell.Init.registerApiServices(Services);_furoShell.Init.registerApiTypes(Types);class SampleFuroDataTextInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet {
            height: 230px;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h3>Sample</h3>
      
      <furo-demo-snippet >
        <template>
          <entity-object type="vnd.com.acme.task" @-object-ready="--entity"></entity-object>
          <furo-data-text-input autofocus ƒ-bind-data="--entity(*.fields.description)"></furo-data-text-input>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("sample-furo-data-text-input",SampleFuroDataTextInput);class SampleFuroDataPasswordInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet {
            height: 130px;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h3>Sample</h3>
      
      <furo-demo-snippet>
        <template>
          <furo-data-password-input hint="Hint text for password" label="Password"></furo-data-password-input>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("sample-furo-data-password-input",SampleFuroDataPasswordInput);class DemoFuroDataTextInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo furo-data-text-input</h2>
      <p>Bind the field from entity-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>. The labels, hints, defaults are comming from the entity-object specs.</p>
      <furo-demo-snippet >
        <template>
          <entity-object type="vnd.com.acme.task" @-object-ready="--entity"></entity-object>
          <furo-data-text-input trailing-icon="dashboard" ƒ-bind-data="--entity(*.fields.description)"></furo-data-text-input>
          <furo-data-text-input leading-icon="dashboard" float label="Always float" hint="Always float" ƒ-bind-data="--entity(*.fields.description)"></furo-data-text-input>
          <furo-data-text-input autofocus ƒ-bind-data="--entity(*.fields.description)" @-value-changed="--textChanged"></furo-data-text-input>
          <!-- --textChanged only comes when data was typed in. -->
          <span ƒ-.inner-text="--textChanged"></span>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-data-text-input",DemoFuroDataTextInput);class DemoFuroDataDateInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
        

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div><h2>Demo furo-data-date-input</h2>
          <p>Bind the field from entity-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
            The labels, hints, defaults are comming from the entity-object specs.</p>
          <p>As you can see, the "data-binding" is done by the entity-object.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <entity-object type="vnd.com.acme.task" @-object-ready="--entity"></entity-object>
            <furo-horizontal-flex>
              <furo-data-date-input autofocus ƒ-bind-data="--entity(*.fields.id)"
                                      hint="Hint should come from spec and overflows"></furo-data-date-input>
              <furo-data-date-input leading-icon="fingerprint" label="with step" step="30" ƒ-bind-data="--entity(*.fields.id)"
                                      @-value-changed="--dateChanged"
                                      hint="but that should be ok"></furo-data-date-input>
              <furo-data-date-input flex label="min max" min="2012-01-01" max="2025-12-08"
                                      ƒ-bind-data="--entity(*.fields.id)"></furo-data-date-input>
              <furo-data-date-input label="disabled" disabled label="with step" step="7"
                                      ƒ-bind-data="--entity(*.fields.id)"></furo-data-date-input>
            </furo-horizontal-flex>
            <hr>
            <!-- --dateChanged only comes when data was typed in. -->
            <span ƒ-.inner-text="--dateChanged"></span>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-date-input",DemoFuroDataDateInput);class DemoFuroDataTextareaInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo furo-data-textarea-input</h2>
      <p>Bind the field from entity-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>. The labels, hints, defaults are comming from the entity-object specs.</p>
      <furo-demo-snippet >
        <template>
          <entity-object type="vnd.com.acme.task" @-object-ready="--entity"></entity-object>
          <furo-data-textarea-input autofocus ƒ-bind-data="--entity(*.fields.description)"></furo-data-textarea-input>
          <furo-data-textarea-input autofocus ƒ-bind-data="--entity(*.fields.description)" @-value-changed="--textareaChanged"></furo-data-textarea-input>
          <!-- --textareaChanged only comes when data was typed in. -->
          <span ƒ-.inner-textarea="--textareaChanged"></span>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-data-textarea-input",DemoFuroDataTextareaInput);class SampleFuroDataNumberInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet {
            height: 230px;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h3>Sample</h3>
      
      <furo-demo-snippet >
        <template>
          <entity-object type="vnd.com.acme.task" @-object-ready="--entity"></entity-object>
          <furo-data-number-input autofocus ƒ-bind-data="--entity(*.fields.id)"></furo-data-number-input>
          <furo-data-number-input  hint="Type in a number" label="label" ƒ-bind-data="--entity(*.fields.id)"></furo-data-number-input>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("sample-furo-data-number-input",SampleFuroDataNumberInput);class DemoFuroDataNumberInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
        

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div><h2>Demo furo-data-number-input</h2>
          <p>Bind the field from entity-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
            The labels, hints, defaults are comming from the entity-object specs.</p>
          <p>As you can see, the "data-binding" is done by the entity-object.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <entity-object type="vnd.com.acme.task" @-object-ready="--entity"></entity-object>
            <furo-horizontal-flex>
              <furo-data-number-input autofocus ƒ-bind-data="--entity(*.fields.id)"
                                      hint="Hint should come from spec and overflows"></furo-data-number-input>
              <furo-data-number-input label="with step" step="0.5" ƒ-bind-data="--entity(*.fields.id)"
                                      @-value-changed="--numberChanged"
                                      hint="but that should be ok"></furo-data-number-input>
              <furo-data-number-input flex label="min max" min="1" max="9"
                                      ƒ-bind-data="--entity(*.fields.id)"></furo-data-number-input>
              <furo-data-number-input label="disabled" disabled label="with step" step="0.5"
                                      ƒ-bind-data="--entity(*.fields.id)"></furo-data-number-input>
            </furo-horizontal-flex>
            <hr>
            <!-- --numberChanged only comes when data was typed in. -->
            <span ƒ-.inner-text="--numberChanged"></span>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-number-input",DemoFuroDataNumberInput);class DemoFuroDataTimeInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div><h2>Demo furo-data-time-input</h2>
          <p>Bind the field from entity-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
            The labels, hints, defaults are comming from the entity-object specs.</p>
          <p>As you can see, the "data-binding" is done by the entity-object.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <entity-object type="vnd.com.acme.task" @-object-ready="--entity"></entity-object>
            <furo-horizontal-flex>
              <furo-data-time-input autofocus ƒ-bind-data="--entity(*.fields.id)"
                                      hint="Hint should come from spec and overflows"></furo-data-time-input>
              <furo-data-time-input label="with step" step="0.5" ƒ-bind-data="--entity(*.fields.id)"
                                      @-value-changed="--timeChanged"
                                      hint="but that should be ok"></furo-data-time-input>
              <furo-data-time-input flex label="min max" min="1" max="9"
                                      ƒ-bind-data="--entity(*.fields.id)"></furo-data-time-input>
              <furo-data-time-input label="disabled" disabled label="with step" step="0.5"
                                      ƒ-bind-data="--entity(*.fields.id)"></furo-data-time-input>
            </furo-horizontal-flex>
            <hr>
            <!-- --timeChanged only comes when data was typed in. -->
            <span ƒ-.inner-text="--timeChanged"></span>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-data-time-input",DemoFuroDataTimeInput);class SampleFuroDataCollectionDropdown extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet {
            height: 230px;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h3>Sample</h3>
      
      <furo-demo-snippet >
        <template>
          <collection-object type="vnd.com.acme.tree" @-response="--collection"></collection-object>
          <entity-object type="vnd.com.acme.treeitem" @-object-ready="--entity"></entity-object>
          <furo-data-collection-dropdown leading-icon="mail" trailing-icon="fingerprint"  label="Label" ƒ-inject-data="--collection" ƒ-bind-data="--entity(*.fields.description)"></furo-data-collection-dropdown>
          <furo-data-collection-dropdown condensed label="Label" leading-icon="mail" trailing-icon="fingerprint" ƒ-inject-data="--collection" ƒ-bind-data="--entity(*.fields.description)"></furo-data-collection-dropdown>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("sample-furo-data-collection-dropdown",SampleFuroDataCollectionDropdown);class FuroButtonPlayground extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||[_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);

        }

        :host([hidden]) {
            display: none;
        }

        .display {
            padding: 60px;
            background-color: var(--surface);
            margin: 8px;
        }

        furo-button {
            margin: 8px;
        }

        hr {
            width: 100%;
            color: #eeeeee;
        }

    `,_furoShell.Styling.theme]}constructor(){super();this.label="Label";this.icon="apps";this.primary=!1;this.secondary=!1;this.accent=!1;this.danger=!1;this.raised=!1;this.unelevated=!1;this.outline=!1;this.disabled=!1}_FBPReady(){super._FBPReady();this._FBPAddWireHook("--label",val=>{this.label=val;this.requestUpdate()});this._FBPAddWireHook("--icon",val=>{this.icon=val;this.requestUpdate()});this._FBPAddWireHook("--colorset",color=>{this.primary=!1;this.secondary=!1;this.accent=!1;this.danger=!1;this[color]=!0;this.requestUpdate()});this._FBPAddWireHook("--layout",layout=>{this.raised=!1;this.outline=!1;this.unelevated=!1;this[layout]=!0;this.requestUpdate()});this._FBPAddWireHook("--toggledisabled",()=>{this.disabled=!this.disabled;this.requestUpdate()});this._FBPAddWireHook("--enable",()=>{this.disabled=!1;this.requestUpdate()});this._FBPAddWireHook("--disable",()=>{this.disabled=!0;this.requestUpdate()})}/**
     * @private
     * @returns {TemplateResult}
     */render(){return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>furo-button playground</h2>
          <p>Try the button states</p>
        </div>
        <div class="flex">
          <furo-split-view>
            <furo-vertical-flex slot="master">          
              <furo-text-input autofocus label="Label" value="${this.label}" @-value-changed="--label"></furo-text-input>             
              <furo-select-input value="${this.icon}" label="Select icon" list="apps, fingerprint, mail, send, filter-list, alarm-on, alarm-on, undefied-icon"  @-value-changed="--icon"></furo-select-input>
              <furo-select-input label="Theme Color" list="none, primary, secondary, accent, danger"  @-value-changed="--colorset"></furo-select-input>
              <furo-select-input label="Border / Fill" list="none, raised, unelevated, outline"  @-value-changed="--layout"></furo-select-input>
              
              
              <hr>
              <furo-button raised label="disabled" ?primary="${this.disabled}" @-click="--toggledisabled"></furo-button>
              
              <div>
              <hr>
              Methods</div>
              
              <furo-button label="ƒ-focus" @-click="--focus"></furo-button>
              <furo-button label="ƒ-enable" @-click="--enable"></furo-button>
              <furo-button label="ƒ-disable" @-click="--disable"></furo-button>
              
            </furo-vertical-flex>
           <div class="display">
              <furo-button 
                 label="${this.label}"
                 ?primary="${this.primary}" 
                 ?secondary="${this.secondary}" 
                 ?accent="${this.accent}" 
                 ?raised="${this.raised}" 
                 ?unelevated="${this.unelevated}" 
                 ?disabled="${this.disabled}" 
                 ?outline="${this.outline}" 
                 ?danger="${this.danger}" 
                 ƒ-focus="--focus"
                 ƒ-enable="--enable"
                 ƒ-disable="--disable"
                 ></furo-button>
                 <furo-button 
                 icon="${this.icon}"
                 label="${this.label}"
                 ?primary="${this.primary}" 
                 ?secondary="${this.secondary}" 
                   ?unelevated="${this.unelevated}" 
                 ?accent="${this.accent}" 
                 ?raised="${this.raised}" 
                 ?disabled="${this.disabled}" 
                 ?outline="${this.outline}" 
                 ?danger="${this.danger}"                
                 ></furo-button> 
                 
                 <div style="background-color: white">
                  <furo-button 
                 label="${this.label}"
                 ?primary="${this.primary}" 
                 ?secondary="${this.secondary}" 
                 ?accent="${this.accent}" 
                 ?raised="${this.raised}" 
                 ?unelevated="${this.unelevated}" 
                 ?disabled="${this.disabled}" 
                 ?outline="${this.outline}" 
                 ?danger="${this.danger}" 
                 ƒ-focus="--focus"
                 ƒ-enable="--enable"
                 ƒ-disable="--disable"
                 ></furo-button>
                 <furo-button 
                 icon="${this.icon}"
                 label="${this.label}"
                 ?primary="${this.primary}" 
                 ?secondary="${this.secondary}" 
                   ?unelevated="${this.unelevated}" 
                 ?accent="${this.accent}" 
                 ?raised="${this.raised}" 
                 ?disabled="${this.disabled}" 
                 ?outline="${this.outline}" 
                 ?danger="${this.danger}"                
                 ></furo-button> 
                 
              </div>
           </div>
          
          
          </furo-split-view>
        </div>
        

      </furo-vertical-flex>

    `;// language=HTML
}}window.customElements.define("furo-button-playground",FuroButtonPlayground);class DemoFuroButton extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);

        }

        :host([hidden]) {
            display: none;
        }


    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-button</h2>
          <p>description</p>
        </div>

        <furo-demo-snippet flex>
          <template>
            <table>
              <tr>
              <th></th>
              <th>Default</th>
              <th>disabled</th>
              <th>raised</th>
              <th>raised disabled</th>
              </th>
              <tr>
                <td>Default</td>
                <td>
                  <furo-button autofocus label="default"></furo-button>
                </td>
                <td>
                  <furo-button disabled label="raised"></furo-button>
                </td> 
                <td>
                  <furo-button raised label="other"></furo-button>
                </td>
                <td>
                  <furo-button disabled raised label="raised"></furo-button>
                </td>
              </tr>
             
               <tr>
                <td>primary</td>
                <td>
                  <furo-button primary label="primary"></furo-button>
                </td>
                <td>
                  <furo-button primary disabled label="primary"></furo-button>
                </td> 
                <td>
                  <furo-button primary raised label="primary"></furo-button>
                </td>
                <td>
                  <furo-button primary disabled raised label="primary"></furo-button>
                </td>
              </tr>

              <tr>
                <td>secondary</td>
                <td>
                  <furo-button secondary label="secondary"></furo-button>
                </td>
                <td>
                  <furo-button secondary disabled label="secondary"></furo-button>
                </td>
                <td>
                  <furo-button secondary raised  label="secondary"></furo-button>
                </td>
                <td>
                  <furo-button secondary disabled raised label="secondary"></furo-button>
                </td>
              </tr>

              <tr>
                <td>accent</td>
                <td>
                  <furo-button accent label="accent"></furo-button>
                </td>
                <td>
                  <furo-button accent disabled label="accent"></furo-button>
                </td>
                <td>
                  <furo-button accent raised label="accent"></furo-button>
                </td>
                <td>
                  <furo-button accent disabled raised label="accent"></furo-button>
                </td>
              </tr>
              <tr>
                <td>danger</td>
                <td>
                  <furo-button danger label="danger"></furo-button>
                </td>
                <td>
                  <furo-button danger disabled label="danger"></furo-button>
                </td>
                <td>
                  <furo-button danger raised label="danger"></furo-button>
                </td>
                <td>
                  <furo-button danger disabled raised label="danger"></furo-button>
                </td>
              </tr>
            </table>
           
          </template>
        </furo-demo-snippet>

      </furo-vertical-flex>

    `}}window.customElements.define("demo-furo-button",DemoFuroButton);class DemoFuroNumberInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo furo-number-input</h2>
      <p>description</p>
      <furo-demo-snippet style="height: 600px">
        <template>
          <div style="background-color: #e5e5e5; padding: 30px">
            <furo-number-input min="5" leading-icon="send" label="Label" hint="Hint"></furo-number-input>
            <furo-number-input trailing-icon="send" filled label="Label" value="Val" hint="Hint"></furo-number-input>
            <furo-number-input trailing-icon="send" leading-icon="send"  error label="Label" errortext="errortext"></furo-number-input>
            <furo-number-input trailing-icon="send" leading-icon="send"  filled error label="Label" value="Val" errortext="errortext"></furo-number-input>
          </div>
          <div style="padding:30px">
            <furo-number-input label="Label" value="Val" hint="Hint jkfdjkdkjf"></furo-number-input>
            <furo-number-input filled label="Label" value="Val" hint="Hint"></furo-number-input>
            <furo-number-input error label="Label" value="Val" errortext="errortext"></furo-number-input>
            <furo-number-input trailing-icon="send" filled error label="Label" value="Val" errortext="errortext"></furo-number-input>
          </div>
          <div style="padding:30px">
            <furo-number-input disabled trailing-icon="fingerprint"  condensed label="Label" value="Val" hint="Hint"></furo-number-input>
            <furo-number-input trailing-icon="fingerprint"  condensed label="Label" value="Val" hint="Hint"></furo-number-input>
            <furo-number-input trailing-icon="fingerprint"  condensed filled label="Label" value="Val" hint="Hint"></furo-number-input>
          </div>

        </template>
      </furo-demo-snippet>
      
     
    `}}window.customElements.define("demo-furo-number-input",DemoFuroNumberInput);class DemoFuroRangeInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-range-input</h2>
          <p>description</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-range-input trailing-icon="dashboard" label="Range" step="0.25" value="11" min="10" max="20" hint="Slide for a number"
                              @-value-changed="--rval" ƒ-set-value="--nval"></furo-range-input>
            <furo-number-input  label="Number" hint="type in a number" ƒ-set-value="--rval"
                               @-value-changed="--nval"></furo-number-input>
            <furo-text-input label="Text" hint="type something like a number" ƒ-set-value="--rval"
                             @-value-changed="--rval,--nval"></furo-text-input>
            <hr>

            <furo-range-input  leading-icon="dashboard" label="Range" step="0.25"  min="10" max="20" hint="Slide for a number"></furo-range-input>
            <furo-range-input condensed leading-icon="dashboard" label="Range" step="0.25"  min="10" max="20" hint="Slide for a number"></furo-range-input>
            <furo-range-input filled leading-icon="dashboard" trailing-icon="dashboard" label="Range" step="0.25"  min="10" max="20" hint="Slide for a number"></furo-range-input>
            <furo-range-input filled condensed leading-icon="dashboard" label="Range" step="0.25"  min="10" max="20" hint="Slide for a number"></furo-range-input>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-range-input",DemoFuroRangeInput);class DemoFuroTextInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>


        <div>
          <h2>Demo furo-text-input</h2>
          <p>description</p>
        </div>
        <furo-horizontal-scroller flex>
          
            <div style="background-color: #e5e5e5; padding: 30px">
              <furo-text-input min="5" leading-icon="send" label="Label" hint="Hint"></furo-text-input>
              <furo-text-input trailing-icon="send" filled label="Label" value="Val" hint="Hint"></furo-text-input>
              <furo-text-input trailing-icon="send" leading-icon="send"  error label="Label" errortext="errortext"></furo-text-input>
              <furo-text-input trailing-icon="send" leading-icon="send"  filled error label="Label" value="Val" errortext="errortext"></furo-text-input>
            </div>
            <div style="padding:30px">
              <furo-text-input label="Label" value="Val" hint="Hint jkfdjkdkjf"></furo-text-input>
              <furo-text-input filled label="Label" value="Val" hint="Hint"></furo-text-input>
              <furo-text-input error label="Label" value="Val" hint="tex" errortext="errortext"></furo-text-input>
              <furo-text-input trailing-icon="send" filled error label="Label" value="Val" errortext="errortext"></furo-text-input>
            </div> 
            <div style="padding:30px">
              <furo-text-input disabled trailing-icon="fingerprint"  condensed label="Label" value="Val" hint="Hint"></furo-text-input>
              <furo-text-input trailing-icon="fingerprint"  condensed label="Label" value="Val" hint="Hint"></furo-text-input>
              <furo-text-input trailing-icon="fingerprint"  condensed filled label="Label" value="Val" hint="Hint"></furo-text-input>
              <furo-text-input trailing-icon="fingerprint"  condensed float label="Floating"  hint="Hint"></furo-text-input>
            </div>
          
        </furo-horizontal-scroller>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-text-input",DemoFuroTextInput);class SampleFuroButton extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        
        furo-demo-snippet {
            height: 200px;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h3>Sample</h3>
      <furo-demo-snippet>
        <template>
          <style>
            
            
            td{
              padding: 12px;
              text-align: center;
            }
          </style>
          <table>
            <tr>
              <th></th>
              <th>Default</th>
              <th>disabled</th>
              <th>raised</th>
              <th>raised disabled</th>
              </th>
            <tr>
              <td>Default</td>
              <td>
                <furo-button autofocus label="default" ƒ-focus="--primaryraisedClicked" @-click="--defautlClicked"></furo-button>
              </td>
              <td>
                <furo-button disabled label="raised"></furo-button>
              </td>
              <td>
                <furo-button raised icon="fingerprint" label="other" ƒ-focus="--defautlClicked" @-click="--raisedClicked"></furo-button>
              </td>
              <td>
                <furo-button disabled raised label="raised"></furo-button>
              </td>
            </tr>

            <tr>
              <td>primary</td>
              <td>
                <furo-button primary label="primary" ƒ-focus="--raisedClicked" @-click="--primaryClicked"></furo-button>
              </td>
              <td>
                <furo-button primary disabled label="primary"></furo-button>
              </td>
              <td>
                <furo-button primary raised label="primary" ƒ-focus="--primaryClicked" @-click="--primaryraisedClicked"></furo-button>
              </td>
              <td>
                <furo-button primary disabled raised label="primary"></furo-button>
              </td>
            </tr>
          </table>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("sample-furo-button",SampleFuroButton);class SampleFuroRangeInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet {
            height: 160px;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h3>Sample</h3>

      <furo-demo-snippet >
        <template>
          <furo-range-input ƒ-set-value="--number" autofocus value="123.25" step="0.25" hint="Steps 0.25" label="Range input field" @-value-changed="--number"></furo-range-input>
          <furo-range-input ƒ-set-value="--number" max="125" min="50" value="123" hint="Min max" label="Range input field" @-value-changed="--number"></furo-range-input>
          <furo-range-input error errortext="out of range" ƒ-set-value="--number" hint="Slide for some number" label="With error" @-value-changed="--number"></furo-range-input>
          <furo-range-input disabled ƒ-set-value="--number" value="23" hint="Slide for some number" label="Disabled" @-value-changed="--number"></furo-range-input>
        </template>
      </furo-demo-snippet>
      
    `}}window.customElements.define("sample-furo-range-input",SampleFuroRangeInput);class SampleFuroNumberInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet {
            height: 160px;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h3>Sample</h3>

      <furo-demo-snippet >
        <template>
          <furo-number-input ƒ-set-value="--number" autofocus value="123.25" step="0.25" hint="Steps 0.25" label="Number input field" @-value-changed="--number"></furo-number-input>
          <furo-number-input ƒ-set-value="--number" max="125" min="122" value="123" hint="Min max" label="Number input field" @-value-changed="--number"></furo-number-input>
          <furo-number-input error errortext="something went wrong" ƒ-set-value="--number" hint="Type in some number" label="With error" @-value-changed="--number"></furo-number-input>
          <furo-number-input disabled ƒ-set-value="--number" value="23" hint="Type in some number" label="Disabled" @-value-changed="--number"></furo-number-input>
        </template>
      </furo-demo-snippet>
      
    `}}window.customElements.define("sample-furo-number-input",SampleFuroNumberInput);class SampleFuroTextInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet {
            height: 160px;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h3>Sample</h3>

      <furo-demo-snippet >
        <template>
          <furo-text-input ƒ-set-value="--text" autofocus value="some text" hint="With autofocus" label="Text input field" @-value-changed="--text"></furo-text-input>
          <furo-text-input ƒ-set-value="--text" hint="Type in some text" label="Text input field" @-value-changed="--text"></furo-text-input>
          <furo-text-input error errortext="something went wrong" ƒ-set-value="--text" hint="Type in some text" label="With error" @-value-changed="--text"></furo-text-input>
          <furo-text-input disabled ƒ-set-value="--text" hint="Type in some text" label="With error" @-value-changed="--text"></furo-text-input>
        </template>
      </furo-demo-snippet>
      
    `}}window.customElements.define("sample-furo-text-input",SampleFuroTextInput);class DemoFuroPasswordInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
            --primary: blue;
        }

        :host([hidden]) {
            display: none;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>


        <div>
      <h2>Demo furo-password-input</h2>
      <p>description</p>
        
        
          <furo-password-input 
                  value="1234"
                  hint="under your keyboard or on postit below monitor"
                  label="super secret password"
                  ƒ-make-visible="--showPasswordClicked"
                  ƒ-make-invisible="--hidePasswordClicked"
          ></furo-password-input>
          <furo-button @-click="--showPasswordClicked" label="show password"></furo-button>
          <furo-button @-click="--hidePasswordClicked" label="hide password"></furo-button>
        </div>
      <furo-horizontal-scroller flex>

        <div style="background-color: #e5e5e5; padding: 30px">
          <furo-password-input min="5" leading-icon="send" label="Label" hint="Hint"></furo-password-input>
          <furo-password-input trailing-icon="send" filled label="Label" value="Val" hint="Hint"></furo-password-input>
          <furo-password-input trailing-icon="send" leading-icon="send"  error label="Label" errortext="errortext"></furo-password-input>
          <furo-password-input trailing-icon="send" leading-icon="send"  filled error label="Label" value="Val" errortext="errortext"></furo-password-input>
        </div>
        <div style="padding:30px">
          <furo-password-input label="Label" value="Val" hint="Hint jkfdjkdkjf"></furo-password-input>
          <furo-password-input filled label="Label" value="Val" hint="Hint"></furo-password-input>
          <furo-password-input error label="Label" value="Val" errortext="errortext"></furo-password-input>
          <furo-password-input trailing-icon="send" filled error label="Label" value="Val" errortext="errortext"></furo-password-input>
        </div>
        <div style="padding:30px">
          <furo-password-input disabled trailing-icon="fingerprint"  condensed label="Label" value="Val" hint="Hint"></furo-password-input>
          <furo-password-input trailing-icon="fingerprint"  condensed label="Label" value="Val" hint="Hint"></furo-password-input>
          <furo-password-input trailing-icon="fingerprint"  condensed filled label="Label" value="Val" hint="Hint"></furo-password-input>
        </div>

      </furo-horizontal-scroller>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-password-input",DemoFuroPasswordInput);class DemoFuroSearchInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo furo-search-input</h2>
      <p>Type some text and clear it with the Escape Key</p>
      <furo-demo-snippet >
        <template>
          <furo-search-input label="Search" ></furo-search-input>
          <furo-search-input label="With value" hint="search" value="start:"></furo-search-input>
          <furo-search-input label="With pattern" hint="3 letters" pattern="[A-Za-z]{3}"></furo-search-input>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-search-input",DemoFuroSearchInput);class DemoFuroTextareaInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-textarea-input</h2>
          <p>description</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-textarea-input rows="1" label="a lot of text" hint="just type" value="aa\nss\v"></furo-textarea-input>
            <furo-text-input label="compare" value="text" hint="hint"></furo-text-input>
            <hr>
            <furo-textarea-input label="a lot of text" hint="just type" value="aa\nss\v"></furo-textarea-input>
          </template>
        </furo-demo-snippet>
        <furo-split-view flex>
          <furo-textarea-input style="width: 100%" slot="master" rows="14" label="Markdown" hint="just type"
                               @-value-changed="--text"></furo-textarea-input>
          <furo-markdown  style="width: 100%"  ƒ-parse-markdown="--text" ></furo-markdown>
        </furo-split-view>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-textarea-input",DemoFuroTextareaInput);class DemoFuroTimeInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-time-input</h2>
          <p>If you type in a time outside the min max range or the step, an "error" will be indicated. But not the error text.</p>
          <p>You can also type in a time in a "furo-input-field" (the 3rd field). But when you feed "furo-time-input" with bad data, it displays "--:--"</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-time-input label="nothing "></furo-time-input>
            <furo-time-input ƒ-set-value="--time" autofocus value="01:00" step="900" hint="Step in 15 Minutes" label="Time input field" @-value-changed="--time"></furo-time-input>
            <furo-time-input ƒ-set-value="--time" max="19:00" min="13:00" value="18:00"  hint="Min max" label="Time input field" @-value-changed="--time"></furo-time-input>
            <furo-text-input ƒ-set-value="--time"  label="Input field" @-value-changed="--time"></furo-text-input>
            <furo-time-input error errortext="Useful error text" ƒ-set-value="--time" hint="Type in some time" label="With error" @-value-changed="--time"></furo-time-input>
            <furo-time-input disabled ƒ-set-value="--time" value="6000" hint="Is disabled" label="Disabled" @-value-changed="--time"></furo-time-input>
            
            <hr>

            <furo-time-input condensed label="nothing "></furo-time-input>
            <furo-time-input condensed ƒ-set-value="--time" autofocus value="01:00" step="900" hint="Step in 15 Minutes" label="Time input field" @-value-changed="--time"></furo-time-input>
            <furo-time-input condensed ƒ-set-value="--time" max="19:00" min="13:00" value="18:00"  hint="Min max" label="Time input field" @-value-changed="--time"></furo-time-input>
            <furo-text-input condensed ƒ-set-value="--time"  label="Input field" @-value-changed="--time"></furo-text-input>
            <furo-time-input condensed error errortext="Useful error text" ƒ-set-value="--time" hint="Type in some time" label="With error" @-value-changed="--time"></furo-time-input>
            <furo-time-input condensed disabled ƒ-set-value="--time" value="6000" hint="Is disabled" label="Disabled" @-value-changed="--time"></furo-time-input>
            <hr>
            
            <furo-time-input filled label="nothing "></furo-time-input>
            <furo-time-input filled ƒ-set-value="--time" autofocus value="01:00" step="900" hint="Step in 15 Minutes" label="Time input field" @-value-changed="--time"></furo-time-input>
            <furo-time-input filled ƒ-set-value="--time" max="19:00" min="13:00" value="18:00"  hint="Min max" label="Time input field" @-value-changed="--time"></furo-time-input>
            <furo-text-input filled ƒ-set-value="--time"  label="Input field" @-value-changed="--time"></furo-text-input>
            <furo-time-input filled error errortext="Useful error text" ƒ-set-value="--time" hint="Type in some time" label="With error" @-value-changed="--time"></furo-time-input>
            <furo-time-input filled disabled ƒ-set-value="--time" value="6000" hint="Is disabled" label="Disabled" @-value-changed="--time"></furo-time-input>
            
            <hr>

            <furo-time-input filled condensed label="nothing "></furo-time-input>
            <furo-time-input filled condensed ƒ-set-value="--time" autofocus value="01:00" step="900" hint="Step in 15 Minutes" label="Time input field" @-value-changed="--time"></furo-time-input>
            <furo-time-input filled condensed ƒ-set-value="--time" max="19:00" min="13:00" value="18:00"  hint="Min max" label="Time input field" @-value-changed="--time"></furo-time-input>
            <furo-text-input filled condensed ƒ-set-value="--time"  label="Input field" @-value-changed="--time"></furo-text-input>
            <furo-time-input filled condensed error errortext="Useful error text" ƒ-set-value="--time" hint="Type in some time" label="With error" @-value-changed="--time"></furo-time-input>
            <furo-time-input filled condensed disabled ƒ-set-value="--time" value="6000" hint="Is disabled" label="Disabled" @-value-changed="--time"></furo-time-input>
            <hr>
            
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-time-input",DemoFuroTimeInput);class DemoFuroDateInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-date-input</h2>
          <p>If you type in a date outside the min max range or the step, an "error" will be indicated. But not the error text.</p>
          <p>You can also type in a date in a "furo-input-field" (the 3rd field). But when you feed "furo-date-input" with bad data, it displays "--:--"</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-date-input ƒ-set-value="--date" autofocus value="1974-12-08" min="1974-12-08" step="7" hint="Step in 7 Days" label="Date input field" @-value-changed="--date"></furo-date-input>
            <furo-date-input ƒ-set-value="--date" max="2020-12-31" min="2020-01-01" value="2020-02-02"  hint="Min max in 2020 only" label="Date input field" @-value-changed="--date"></furo-date-input>
            <furo-text-input ƒ-set-value="--date"  label="Input field" @-value-changed="--date"></furo-text-input>
            <furo-date-input error errortext="Useful error text" ƒ-set-value="--date" hint="Type in some date" label="With error" @-value-changed="--date"></furo-date-input>
            <furo-date-input disabled ƒ-set-value="--date" value="2020-01-01" hint="Is disabled" label="Disabled" @-value-changed="--date"></furo-date-input>
            <hr>
            <furo-date-input condensed ƒ-set-value="--date" autofocus value="1974-12-08" min="1974-12-08" step="7" hint="Step in 7 Days" label="Date input field" @-value-changed="--date"></furo-date-input>
            <furo-date-input condensed ƒ-set-value="--date" max="2020-12-31" min="2020-01-01" value="2020-02-02"  hint="Min max in 2020 only" label="Date input field" @-value-changed="--date"></furo-date-input>
            <furo-text-input condensed ƒ-set-value="--date"  label="Input field" @-value-changed="--date"></furo-text-input>
            <furo-date-input condensed error errortext="Useful error text" ƒ-set-value="--date" hint="Type in some date" label="With error" @-value-changed="--date"></furo-date-input>
            <furo-date-input condensed disabled ƒ-set-value="--date" value="2020-01-01" hint="Is disabled" label="Disabled" @-value-changed="--date"></furo-date-input>
            <hr>
            <furo-date-input filled ƒ-set-value="--date" autofocus value="1974-12-08" min="1974-12-08" step="7" hint="Step in 7 Days" label="Date input field" @-value-changed="--date"></furo-date-input>
            <furo-date-input filled ƒ-set-value="--date" max="2020-12-31" min="2020-01-01" value="2020-02-02"  hint="Min max in 2020 only" label="Date input field" @-value-changed="--date"></furo-date-input>
            <furo-text-input filled ƒ-set-value="--date"  label="Input field" @-value-changed="--date"></furo-text-input>
            <furo-date-input filled error errortext="Useful error text" ƒ-set-value="--date" hint="Type in some date" label="With error" @-value-changed="--date"></furo-date-input>
            <furo-date-input filled disabled ƒ-set-value="--date" value="2020-01-01" hint="Is disabled" label="Disabled" @-value-changed="--date"></furo-date-input>
            <hr>
            <furo-date-input filled condensed ƒ-set-value="--date" autofocus value="1974-12-08" min="1974-12-08" step="7" hint="Step in 7 Days" label="Date input field" @-value-changed="--date"></furo-date-input>
            <furo-date-input filled condensed ƒ-set-value="--date" max="2020-12-31" min="2020-01-01" value="2020-02-02"  hint="Min max in 2020 only" label="Date input field" @-value-changed="--date"></furo-date-input>
            <furo-text-input filled condensed ƒ-set-value="--date"  label="Input field" @-value-changed="--date"></furo-text-input>
            <furo-date-input filled condensed error errortext="Useful error text" ƒ-set-value="--date" hint="Type in some date" label="With error" @-value-changed="--date"></furo-date-input>
            <furo-date-input filled condensed disabled ƒ-set-value="--date" value="2020-01-01" hint="Is disabled" label="Disabled" @-value-changed="--date"></furo-date-input>
            <hr>
            
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-date-input",DemoFuroDateInput);class DemoFuroInputTogether extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>Demo input items together</h2>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-card style="margin:8px;height:200px">
              <div ƒ-.inner-text="--fromTextarea">Do not forget to give the card <br> a height</div>
              <furo-horizontal-flex slot="action">
                <furo-button primary label="primary"></furo-button>
                <furo-button label="other"></furo-button>
                <furo-button accent label="accent"></furo-button>
                <furo-empty-spacer></furo-empty-spacer>
                <furo-button danger label="Danger"></furo-button>
              </furo-horizontal-flex>
            </furo-card>
            <br>
            <br>
            <furo-time-input ƒ-set-value="--time" value="01:00" step="900" hint="Step in 15 Minutes"
                             label="Time  field" @-value-changed="--time"></furo-time-input>
            <furo-range-input label="Range" step="0.25" value="11" min="10" max="20" hint="Slide for a number"
                              @-value-changed="--rval" ƒ-set-value="--nval"></furo-range-input>
           
            <furo-color-input label="Color" value="#FEA234"></furo-color-input>
            <furo-search-input label="Search"></furo-search-input>
            <furo-date-input ƒ-set-value="--date" max="2020-12-31" min="2020-01-01" value="2020-02-02"
                             hint="Min max in 2020 only" label="Date input field"
                             @-value-changed="--date"></furo-date-input>
            <furo-password-input
                    value="1234"
                    hint="under your keyboard or on postit below monitor"
                    label="super secret password"
                    ƒ-make-visible="--showPasswordClicked"
                    ƒ-make-invisible="--hidePasswordClicked"
            ></furo-password-input>

            <furo-text-input ƒ-set-value="--text" autofocus value="some text" hint="With autofocus"
                             label="Text input field" @-value-changed="--text"></furo-text-input>
            <furo-number-input ƒ-set-value="--number" value="123.25" step="0.25" hint="Steps 0.25"
                               label="Number input field" @-value-changed="--number"></furo-number-input>
            <furo-text-input style="width: 100%" ƒ-set-value="--time" label="Input field" @-value-changed="--time"></furo-text-input>
            
            <hr>
            <furo-textarea-input rows="4" label="a lot of text" hint="just type" value="aa\nss\v" @-value-changed="--fromTextarea"></furo-textarea-input>
            
            <furo-input-row label="row label">
              <furo-text-input ƒ-set-value="--text" autofocus value="some text" hint="With autofocus"
                               label="Text input field" @-value-changed="--text"></furo-text-input>
              <furo-number-input ƒ-set-value="--number" value="123.25" step="0.25" hint="Steps 0.25"
                                 label="Number input field" @-value-changed="--number"></furo-number-input>
            </furo-input-row>
            <furo-button-bar>
              <furo-button primary raised label="primary"></furo-button>
              <furo-button secondary raised label="secondary"></furo-button>
              <furo-empty-spacer></furo-empty-spacer>
              <furo-button danger raised label="danger"></furo-button>
            </furo-button-bar>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-input-together",DemoFuroInputTogether);class DemoFuroCheckboxInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo furo-checkbox-input</h2>
      
      <furo-demo-snippet >
        <template>
          <furo-checkbox-input label="The label" value="true" text="Click to check" @-checked="--aChecked" @-unchecked="--aUnchecked"></furo-checkbox-input>
          <furo-checkbox-input condensed label="The label" value="false" ƒ-uncheck="--aChecked" ƒ-check="--aUnchecked"></furo-checkbox-input>
          <furo-checkbox-input filled label="The label" value="false" ƒ-uncheck="--aChecked" ƒ-check="--aUnchecked"></furo-checkbox-input>
          <furo-checkbox-input filled condensed label="The label" value="false" ƒ-uncheck="--aChecked" ƒ-check="--aUnchecked"></furo-checkbox-input>
          <furo-checkbox-input disabled label="Disabled"   ƒ-uncheck="--aChecked" ƒ-check="--aUnchecked"></furo-checkbox-input>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-checkbox-input",DemoFuroCheckboxInput);class SampleFuroSelectInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

        furo-demo-snippet {
            height: 160px;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo sample-furo-select-input</h2>
     
      <furo-demo-snippet >
        <template>
          <furo-select-input leading-icon="fingerprint" trailing-icon="mail" @-value-changed="--val" label="please select" list="23, 44, more, items"  value="more"></furo-select-input>
          <furo-select-input   ƒ-set-value="--val" autofocus label="please select"  options='[{"id":23,"label":"AAA"},{"id":44,"label":"BBB"}]'></furo-select-input>
          <furo-select-input disabled hint="decide" label="please select" options='[{"id":23,"label":"AAA","selected":false},{"id":44,"label":"BBB","selected":true}]'></furo-select-input>
          
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("sample-furo-select-input",SampleFuroSelectInput);class DemoFuroSelectInput extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}constructor(){super();this.options=[{id:23,label:"AAA",selected:!0},{id:44,label:"BBB",selected:!1},{id:55,label:"CCC",selected:!1},{id:66,label:"DDA",selected:!1},{id:667,label:"DDB",selected:!1},{id:668,label:"DDC",selected:!1},{id:99,label:"Type to get me",selected:!1}]}_FBPReady(){super._FBPReady();// get the snippet
let demo=this.shadowRoot.querySelector("furo-demo-snippet");setTimeout(()=>{let l=demo.shadowRoot.querySelectorAll("furo-select-input");Array.from(l).forEach(input=>{input.setOptions(this.options)})},60)}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo furo-select-input</h2>

      <furo-demo-snippet style="height: 600px">
        <template>
          <div style="background-color: #e5e5e5; padding: 30px">
            <furo-select-input leading-icon="send" label="Label" hint="Hint"></furo-select-input>
            <furo-select-input trailing-icon="send" filled label="Label" value="Val" hint="Hint"></furo-select-input>
            <furo-select-input trailing-icon="send" leading-icon="send" error label="Label"
                               errortext="errortext"></furo-select-input>
            <furo-select-input trailing-icon="send" leading-icon="send" filled error label="Label" value="Val"
                               errortext="errortext"></furo-select-input>
          </div>
          <div style="padding:30px">
            <furo-select-input label="Label" value="Val" hint="Hint jkfdjkdkjf"></furo-select-input>
            <furo-select-input filled label="Label" value="Val" hint="Hint"></furo-select-input>
            <furo-select-input error label="Label" value="Val" errortext="errortext"></furo-select-input>
            <furo-select-input trailing-icon="send" filled error label="Label" value="Val"
                               errortext="errortext"></furo-select-input>
          </div>
          <div style="padding:30px">
            <furo-select-input disabled trailing-icon="fingerprint" condensed label="Label" value="Val"
                               hint="Hint"></furo-select-input>
            <furo-select-input trailing-icon="fingerprint" condensed label="Label" value="Val"
                               hint="Hint"></furo-select-input>
            <furo-select-input trailing-icon="fingerprint" condensed filled label="Label" value="Val"
                               hint="Hint"></furo-select-input>
          </div>

        </template>
      </furo-demo-snippet>


    `}}window.customElements.define("demo-furo-select-input",DemoFuroSelectInput);class FuroTreeItem extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.hidden=!0}search(event){if(!this.hidden){let term=event.term.toLowerCase();// do not search empty searchTerm
if(0===term.length){return}let searchTokens=term.split(" "),hasResults=!0;searchTokens.forEach(t=>{if(0<t.length){if(1===t.length){// single letter search first letter of word
t=t+".*$"}hasResults=hasResults&&this._searchTokens.has(t)}});if(hasResults){// append fieldnode to result set (used in furo-tree.js)
event.results.push(this.fieldNode)}}}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */hidden:{type:Boolean,reflect:!0},hovered:{type:Boolean,reflect:!0},searchmatch:{type:Boolean,reflect:!0},inedit:{type:Boolean,reflect:!0},haserror:{type:Boolean,reflect:!0},selected:{type:Boolean,reflect:!0},noicon:{type:Boolean}}}// re render, build search tokens
_updateItem(){this.requestUpdate();// build index later (50ms), a human user can not react earlyer
setTimeout(()=>{let tmpArr=[];this.fieldNode.__childNodes.filter(field=>{// maybe change to fields-to-index list
if("string"===typeof field._value){return!0}}).map(field=>{tmpArr=tmpArr.concat(field._value.toLowerCase().split(/\W+/))});let s=new Set(tmpArr);// tokenize
tmpArr=[];s.forEach(word=>{//first letter
tmpArr.push(word.substr(0,1)+".*$");let l;for(let tokenLength=2;tokenLength<word.length;tokenLength++){l=word.length-tokenLength+1;for(let i=0;i<l;i++){tmpArr.push(word.substr(i,tokenLength))}}});this._searchTokens=new Set(Array.from(s).concat(tmpArr))},50)}bindData(fieldNode){this.fieldNode=fieldNode;this.fieldNode._isHidden=!0;// reflect visible close state to attr
this.fieldNode.addEventListener("ancestor-invisible",e=>{this.hidden=!0;this.fieldNode._isHidden=!0});// reflect visible close state to attr
this.fieldNode.addEventListener("ancestor-visible",e=>{if(this.fieldNode.__parentNode.__parentNode.open.value){this.hidden=!1;this.fieldNode._isHidden=!1}});// for elements that are already ready
this._updateItem();this.fieldNode.addEventListener("branch-value-changed",e=>{// for elements that are updated later
if(e.detail.__parentNode===this.fieldNode){this._updateItem()}});this.fieldNode.addEventListener("modified",n=>{this.inedit=!0});this.fieldNode.addEventListener("has-error",n=>{this.haserror=!0});// listen to open close state
this.fieldNode.open.addEventListener("field-value-changed",e=>{e.cancelBubble=!0;if(!1===e.detail.value){e.detail.__parentNode.children.broadcastEvent(new NodeEvent("ancestor-invisible",e.detail.__parentNode))}else{e.detail.__parentNode.children.broadcastEvent(new NodeEvent("ancestor-visible",e.detail.__parentNode))}});// make first node visible
if(0===this.fieldNode.depth){this.hidden=!1;this.fieldNode._isHidden=!1}this._FBPTriggerWire("--fieldOpen",this.fieldNode.open)}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
this._FBPAddWireHook("--labelClicked",e=>{this.fieldNode.selectItem()});this.fieldNode.addEventListener("tree-node-unselection-requested",e=>{this.selected=!1;this.fieldNode._isSelected=!1});this.fieldNode.addEventListener("tree-node-blur-requested",e=>{this.hovered=!1});this.fieldNode.addEventListener("this-node-hovered",e=>{this.hovered=!0});this.fieldNode.addEventListener("this-node-selected",e=>{this.selected=!0;this.fieldNode._isSelected=!0});// This item is not or no more in the search results
this.fieldNode.addEventListener("search-didnt-match",e=>{this.searchmatch=!1});// This item is  in the search results
this.fieldNode.addEventListener("search-matched",e=>{this.searchmatch=!0})}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
            :host {
                display: block;
                line-height: 40px;
                cursor: pointer;
                user-select: none;
                padding-left: var(--spacing-xs, 16px);
                border-radius: 2px;
                position: relative;
            }

            :host([hidden]) {
                display: none;
            }

            :host([inedit]) {
                font-style: italic;
            }

            :host([haserror]) ,
            :host([selected][haserror]) {
                color: var(--error, red);
            }

            :host([haserror]) furo-icon {
                animation: error-pulse 3s infinite;
            }

            .label {
                white-space: nowrap;
                font-size: 0.875rem;
                letter-spacing: 0.2px;
                margin-left: 8px;
            }

            .desc {
                font-size: smaller;
                white-space: nowrap;
            }

            .oc {
                color: var(--separator-color, #b5b5b5);
                width: 12px;
                box-sizing: border-box;
                padding-left: 4px;
                font-size: 8px;
            }

            :host([selected]) .oc {
                color: var(--on-primary, white);
            }

            :host([searchmatch])::before {
                position: absolute;
                top: 8px;
                content: "🔍";
                right: 2px;
                font-size: 12px;
            }

            furo-icon[error] {
                animation: error-pulse 2s infinite;
            }

            :host([selected]) furo-icon {
                fill: var(--on-primary, white);;
            }


            furo-icon {

                transition: all 0.4s;
                width: 20px;
                height: 20px;
                margin-right: 4px;

            }

            @keyframes error-pulse {
                0% {
                    fill: var(--on-primary, #46150f);
                }
                12% {
                    fill: var(--error-color, #fc4d34);
                }
                24% {
                    fill: var(--on-primary, #46150f);
                }
                36% {
                    fill: var(--error-color, #fc4d34);
                }
                48% {
                    fill: var(--on-primary, #46150f);
                }

            }

        `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
<furo-horizontal-flex @-dblclick="--dblclicked" @mouseenter="${e=>this.fieldNode.triggerHover()}">
      <div style="width: ${8*this.fieldNode.depth}px"></div>
      <div class="oc"><furo-data-bool-icon ?hidden="${!this.fieldNode.children.repeats.length}" ƒ-toggle="--dblclicked" ƒ-bind-data="--fieldOpen"></furo-data-bool-icon></div>      
            
      <div flex class="label" @-click="--labelClicked" > <furo-icon ?hidden="${this.noicon}" icon="${this.fieldNode.icon}" ?error="${this.fieldNode.has_error.value}"></furo-icon> ${this.fieldNode.display_name} <span class="desc">${this.fieldNode.description}</span></div>
</furo-horizontal-flex>

    `}}_exports.FuroTreeItem=FuroTreeItem;window.customElements.define("furo-tree-item",FuroTreeItem);var furoTreeItem={FuroTreeItem:FuroTreeItem};_exports.$furoTreeItem=furoTreeItem;class FuroTree extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();/**
              * Flat list representation of the tree
              * @type {Array}
              * @private
              */this._flatTree=[];this.tabindex=0;this._searchTerm="";this._searchIsActive=!1;/**
                                   * If you want to use a custom component for the tree-item, set this attribute.
                                   * The default item component is **furo-tree-item**.
                                   *
                                   * @type {*|string|string}
                                   */this.treeItemComponent=this.getAttribute("tree-item-component")||"furo-tree-item";this._treeItemTepmplate=(0,_furoShell.html)([["<",this.treeItemComponent," \u0192-bind-data=\"--itemInjected(*.item)\" \u0192-search=\"--trigger\"></",this.treeItemComponent,">"].join("")]);// keyboard navigation on top node only
this.addEventListener("keydown",event=>{let key=event.key||event.keyCode;switch(key){case"Enter":event.preventDefault();// not reseting the search at this position is by intention.
if(this._hoveredField._isSelected){// openclose
this._hoveredField.toggleOpenClose()}else{// open the hovered field
this._hoveredField.selectItem()}break;case"ArrowDown":event.preventDefault();this._hoverNext();break;case"ArrowUp":event.preventDefault();this._hoverPrevious();break;case"ArrowLeft":event.preventDefault();this._resetSearch();// close when opened, parent when closed
if(!this._hoveredField.isBranch()&&this._hoveredField.open.value){this._hoveredField.toggleOpenClose()}else{this._hoverHome()}break;case"ArrowRight":event.preventDefault();this._resetSearch();// open when closed, next when opened
if(!this._hoveredField.isBranch()&&!this._hoveredField.open.value){this._hoveredField.toggleOpenClose()}else{this._hoverNext()}break;case"Escape":if(this._searchIsActive){event.stopPropagation();this._resetSearch()}break;case"Backspace":this._removeLastSymbofFromSearch();break;}});// keyboard navigation on top node only
this.addEventListener("keypress",event=>{let key=event.key||event.keyCode;if("Enter"===key){return}if(!event.ctrlKey){event.preventDefault();this._addSymbolToSearch(key)}else{switch(key){// expand recursive with ctrl-e
case"e":event.preventDefault();this._hoveredField.expandRecursive();break;}}})}_removeLastSymbofFromSearch(){this._searchTerm=this._searchTerm.substr(0,this._searchTerm.length-1);if(0===this._searchTerm.length){this._resetSearch()}else{this.searchOpenTree(this._searchTerm)}}_addSymbolToSearch(key){this._searchTerm+=key;this.searchOpenTree(this._searchTerm)}searchOpenTree(){this._searchIsActive=!0;let d={term:this._searchTerm,results:[]};this._foundSearchItems=d.results;this._FBPTriggerWire("--searchRequested",d);// select first result
if(0<d.results.length){d.results[0].triggerHover()}this._updateSearchmatchAttributesOnItems();this.requestUpdate()}_resetSearch(){this._searchIsActive=!1;this._searchTerm="";this._foundSearchItems=[];this._updateSearchmatchAttributesOnItems()}_updateSearchmatchAttributesOnItems(){this._rootNode.broadcastEvent(new NodeEvent("search-didnt-match",this._rootNode,!0));this._foundSearchItems.map(node=>{node.dispatchNodeEvent(new NodeEvent("search-matched",this._rootNode,!1))})}_hoverHome(){let parent=this._hoveredField.getParentElement();if(parent){parent.triggerHover()}}/**
     * hovers the previous item
     */_hoverPrevious(){let prev;if(this._searchIsActive){for(let i=0;i<this._foundSearchItems.length;i++){if(this._foundSearchItems[i].__flatTreeIndex>=this._hoveredField.__flatTreeIndex){prev=this._foundSearchItems[i-1];break}}// select last
if(!prev){prev=this._foundSearchItems[this._foundSearchItems.length-1]}}else{prev=this._hoveredField.getPrevElement()}if(prev){prev.triggerHover()}}/**
     * select the previous visible item
     */selectPrev(){this._hoveredField=this._selectedField||this._hoveredField;this._hoverPrevious();// open the hovered field
this._hoveredField.selectItem()}/**
     * expands the currently selected node recursive
     */expandNodeRecursive(){this._selectedField.expandRecursive()}expandAll(){this._flatTree[0].expandRecursive()}collapseAll(){this._flatTree[0].collapseRecursive()}/**
     * expands the currently selected node recursive
     */collapseNodeRecursive(){this._selectedField.collapseRecursive()}/**
     * toggles the currently selected node
     */toggle(){this._selectedField.toggleOpenClose()}addSubNode(rawNode){let newnode=this._selectedField.children.add();newnode.value=rawNode;this._buildFlatTree(this._rootNode);setTimeout(()=>{newnode.selectItem()},10)}deleteNode(){this._selectedField.__parentNode.deleteChild(this._selectedField.__index);this._buildFlatTree(this._rootNode)}/**
     * select the next visible item
     */selectNext(){this._hoveredField=this._selectedField||this._hoveredField;this._hoverNext();// open the hovered field
this._hoveredField.selectItem()}/**
     * hovers the next item
     */_hoverNext(){let next;if(this._searchIsActive){for(let i=this._foundSearchItems.length-1;0<=i;i--){if(this._foundSearchItems[i].__flatTreeIndex<=this._hoveredField.__flatTreeIndex){next=this._foundSearchItems[i+1];break}}// select first
if(!next){next=this._foundSearchItems[0]}}else{next=this._hoveredField.getNextVisibleElement()}if(next){next.triggerHover()}}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Maximal depth for the tree. Default is infinite.
       */depth:{type:Number},/**
       * Sets the tabindex
       */tabindex:{type:Number,reflect:!0},/**
       * indicator for searching. Maybe you want style your item depending on this attribute
       */_searchIsActive:{type:Boolean,attribute:"searching",reflect:!0}}}/**
     * focuses the element
     */focus(){super.focus()}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady()}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            box-sizing: border-box;

            outline: none;
            position: relative;
        }

        .tablewrapper {
            overflow: auto;
            height: 100%;
        }

        :host([hidden]) {
            display: none;
        }

        td {
            padding: 0;
        }

        table {
            border-spacing: 0;
            min-width: 100%;
        }


        :host(:not(:focus-within)) td > *[hovered] {
            background: unset;
        }

        :host(:focus-within) td > *[selected] {
            background: var(--primary, #429cff);
            color: var(--on-primary, white);
        }

        td > *[hovered] {
            background-color: var(--hover-color, #eeeeee);
        }

        td > *[selected], :host(:not(:focus-within)) td > *[selected] {
            background-color: var(--primary-variant-color, #429cff);
            color: var(--on-primary, #FFFFFF);
        }


        :host(:focus-within) td > *[selected]:hover {
            background: var(--primary, #57a9ff);
        }


        .srch {
            display: none;
            position: absolute;
            left: var(--spacing-xs, 8px);
            bottom: var(--spacing-xs, 8px);
            width: inherit;
            border: 1px solid var(--primary, #57a9ff);
            padding: 2px;
            font-size: 11px;
            z-index: 2;
            animation: border-pulsate 2s;
        }

        @keyframes border-pulsate {
            0% {
                border-color: var(--primary, #57a9ff);
            }
            50% {
                border-color: var(--surface, #999999);
            }
            100% {
                border-color: var(--primary, #57a9ff);
            }
        }

        :host([searching]:focus-within) .srch {
            display: block;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
    <div class="srch">🔍 ${this._searchTerm}</div>
      <div class="tablewrapper">
      <table>
        <template is="flow-repeat" ƒ-inject-items="--treeChanged" ƒ-trigger-all="--searchRequested">
          <tr>
            <td>
              ${this._treeItemTepmplate}
            </td>
          </tr>
        </template>
      </table>
      </div>
    `}bindData(treeNode){if(treeNode.fields===void 0){return}this._tree=treeNode.fields;this._rootNode=this._tree.root;treeNode.addEventListener("data-injected",e=>{this._init()});this._init()}_init(){this._buildFlatTree(this._rootNode);// set visible on root node
this._rootNode.children.broadcastEvent(new NodeEvent("ancestor-visible",this._rootNode));if(!this.__listenersInitialized){this._initHoverAndSelectEvents()}this.__listenersInitialized=!0;// initial hover on first element
this._hoveredField=this._flatTree[0];setTimeout(()=>{this._hoveredField.triggerHover()},0)}_initHoverAndSelectEvents(){// Internal Event, when a node gets hovered
this._rootNode.addEventListener("tree-node-hovered",e=>{// broadcast blur
this._rootNode.broadcastEvent(new NodeEvent("tree-node-blur-requested"));this._hoveredField=e.target;// only dispatch when the element contains a name
if(null!=this._hoveredField.display_name.value){/**
         * @event node-hovered
         * Fired when
         * detail payload:
         */let customEvent=new Event("node-hovered",{composed:!0,bubbles:!0});customEvent.detail=this._hoveredField;this.dispatchEvent(customEvent);if(this._hoveredField.isBranch()){/**
           * @event branch-hovered
           * Fired when
           * detail payload:
           */let customEvent=new Event("branch-hovered",{composed:!0,bubbles:!0});customEvent.detail=this._hoveredField;this.dispatchEvent(customEvent)}else{/**
           * @event leaf-hovered
           * Fired when
           * detail payload:
           */let customEvent=new Event("leaf-hovered",{composed:!0,bubbles:!0});customEvent.detail=this._hoveredField;this.dispatchEvent(customEvent)}}});// Internal Event, when a node gets selected
this._rootNode.addEventListener("tree-node-selected",e=>{// broadcast deselect
this._rootNode.broadcastEvent(new NodeEvent("tree-node-unselection-requested"));this._selectedField=e.target;/**
                                       * @event node-selected
                                       * Fired when
                                       * detail payload:
                                       */let customEvent=new Event("node-selected",{composed:!0,bubbles:!0});customEvent.detail=this._selectedField;this.dispatchEvent(customEvent);if(this._selectedField.isBranch()){/**
         * @event branch-selected
         * Fired when
         * detail payload:
         */let customEvent=new Event("branch-selected",{composed:!0,bubbles:!0});customEvent.detail=this._selectedField;this.dispatchEvent(customEvent)}else{/**
         * @event leaf-selected
         * Fired when
         * detail payload:
         */let customEvent=new Event("leaf-selected",{composed:!0,bubbles:!0});customEvent.detail=this._selectedField;this.dispatchEvent(customEvent)}})}_buildFlatTree(tree){this._flatTree=[tree];tree.__flatTreeIndex=0;this._parseTreeRecursive(tree,0,this.depth);for(let len=this._flatTree.length;0<len;len--){let index=len-1,node=this._flatTree[index];// open field if entity contains a field open with true
if(!node.open){node.addChildProperty("open",new FieldNode(node,{type:"bool"},"open"));node.open.value=!1}// Traverse the flat tree, it is simpler then the nested tree
// next active element
node.getNextVisibleElement=()=>{for(let i=index+1;i<this._flatTree.length;i++){if(!this._flatTree[i]._isHidden){return this._flatTree[i]}}return!1};// prev active element
node.getPrevElement=()=>{for(let i=index-1;0<=i;i--){if(!this._flatTree[i]._isHidden){return this._flatTree[i]}}return!1};// is branch
node.isBranch=()=>{return 0===node.children.repeats.length};// get Parent
node.getParentElement=()=>{return node.__parentNode.__parentNode};// add openclose method to treeNode
node.toggleOpenClose=()=>{node.open.value=!node.open.value};// hovers the current node
node.triggerHover=()=>{node.dispatchNodeEvent(new NodeEvent("tree-node-hovered",this,!0));node.dispatchNodeEvent(new NodeEvent("this-node-hovered",this,!1))};// selects the current item
node.selectItem=()=>{node.dispatchNodeEvent(new NodeEvent("tree-node-selected",node,!0));node.dispatchNodeEvent(new NodeEvent("this-node-selected",node,!1));// used to open the paths upwards from the selected node
node.__parentNode.dispatchNodeEvent(new NodeEvent("descendant-selected",this,!0));//node.triggerHover()
};// if a descendant was selected, we ensure to open the path
node.addEventListener("descendant-selected",e=>{node.open.value=!0});// expand recursive
node.expandRecursive=()=>{node.broadcastEvent(new NodeEvent("recursive-expand-requested",node))};node.addEventListener("recursive-expand-requested",e=>{node.open.value=!0});// collapse recursive
node.collapseRecursive=()=>{node.broadcastEvent(new NodeEvent("recursive-collapse-requested",node))};node.addEventListener("recursive-collapse-requested",e=>{node.open.value=!1})}// open the root ode
tree.open.value=!0;this._FBPTriggerWire("--treeChanged",this._flatTree)}_parseTreeRecursive(tree,level,maxdepth){if(0<maxdepth&&!(level<maxdepth)){return}tree.depth=level;level++;tree.children.repeats.forEach(node=>{node.depth=level;let i=this._flatTree.push(node);node.__flatTreeIndex=i-1;if(0<node.children.repeats.length){this._parseTreeRecursive(node,level,maxdepth)}})}}window.customElements.define("furo-tree",FuroTree);const Types$1={"vnd.com.acme.tree":{name:"Tree",type:"vnd.com.acme.tree",mime:"application/vnd.com.acme.tree+json",description:"Tree komposit",fields:{id:{description:"id",type:"int"},display_name:{description:"Label",type:"string"},panel:{description:"Label",type:"string"},description:{description:"description",type:"string"},open:{description:"open close",type:"bool",meta:{default:!1}},root:{descripion:"The root node",type:"vnd.com.acme.treeitem"}}},"vnd.com.acme.treeitem":{name:"Tree",type:"vnd.com.acme.tree",mime:"application/vnd.com.acme.tree+json",description:"Tree komposit",fields:{id:{description:"id",type:"int"},display_name:{description:"Label",type:"string"},subtitle:{description:"Label",type:"string"},icon:{description:"Label",type:"string"},description:{description:"description",type:"string"},key_words:{description:"description",type:"string"},has_error:{description:"description",type:"bool"},link:{description:"self Link",type:"vnd.furo.link"},open:{description:"open close",type:"bool",meta:{default:!1}},children:{descripion:"Child nodes",type:"vnd.com.acme.treeitem",meta:{repeated:!0}}}},"vnd.furo.link":{name:"Link",type:"vnd.furo.link",mime:"application/vnd.furo.link+json",description:"link",fields:{rel:{description:"the relationship",type:"string",__proto:{number:1}},method:{description:"method of curl",type:"string",__proto:{number:2}},href:{description:"link",type:"string",__proto:{number:3}},type:{description:"mime type",type:"string",__proto:{number:4}}}}};_exports.Types$1=Types$1;var apiConfig$1={Types:Types$1};// -- initialize application env, theme, api
_exports.$apiConfig$1=apiConfig$1;_furoShell.Init.registerApiTypes(Types$1);class ProduceData extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.data={data:{panel:"view",root:{id:1,display_name:"root",description:"root",icon:"mail",open:!0,link:{rel:"self",method:"GET",href:"./api/v1/tasks/12.json",type:"vnd.com.acme.task"},children:[{id:2,display_name:"A",description:"first with veery big title sub",link:{rel:"self",method:"GET",href:"./api/v1/tasks/A.json",type:"vnd.com.acme.task"},children:[{id:3,display_name:"C",description:"sub sirst with veery big titleub",link:{rel:"self",method:"GET",href:"./api/v1/tasks/c4.json",type:"vnd.com.acme.task"},children:[]}]},{id:4,display_name:"B",description:"second sirst with veery big titleub",open:!0,link:{rel:"self",method:"GET",href:"./api/v1/tasks/12.json",type:"vnd.com.acme.task-b"},children:[{id:5,display_name:"D",description:"sub suirst with veery big titleb",link:{rel:"self",method:"GET",href:"./api/v1/tasks/12.json",type:"vnd.com.acme.task"},children:[{id:6,display_name:"E",description:"sub suirst with veery big titleb",link:{rel:"self",method:"GET",href:"./api/v1/tasks/12.json",type:"vnd.com.acme.task"},children:[{id:7,display_name:"E",description:"sub sub",link:{rel:"self",method:"GET",href:"./api/v1/tasks/12.json",type:"vnd.com.acme.task"},children:[{id:8,display_name:"E",description:"sub sub",link:{rel:"self",method:"GET",href:"./api/v1/tasks/12.json",type:"vnd.com.acme.task"},children:[{id:455,display_name:"E",description:"Berlin",children:[]}]}]}]}]},{id:234,display_name:"E",description:"sub unknown type",link:{rel:"self",method:"GET",href:"./api/v1/tasks/12.json",type:"vnd.com.acme.unknown"},children:[]}]}]}}};this.addEventListener("click",this.produce)}_FBPReady(){super._FBPReady();if(this.auto){this.produce()}}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */auto:{type:Boolean}}}produce(){/**
     * @event data
     * Fired when
     * detail payload:
     */let customEvent=new Event("data",{composed:!0,bubbles:!0});customEvent.detail=this.data;this.dispatchEvent(customEvent)}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-button label="create tree data"></furo-button>
    `}}window.customElements.define("produce-data",ProduceData);class DemoFuroTree extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
            --split-master-width : 400px
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <h2>Demo demo-furo-tree</h2>
        <p>description</p>
        <furo-demo-snippet flex>
          <template>
            <style>furo-data-text-input, furo-data-textarea-input {width:100%}</style>
            
            <furo-button @-click="--focusClicked" label="focus"></furo-button>
            <furo-button @-click="--expandAll" label="expand all"></furo-button>
            <furo-button @-click="--collapseAll" label="collapse all"></furo-button>
            <entity-object type="vnd.com.acme.tree" ƒ-inject-raw="--data" @-object-ready="--entityObj"></entity-object>
            
            <furo-split-view style="height: 500px;">
              <furo-tree slot="master" ƒ-focus="--focusClicked" ƒ-bind-data="--entityObj" @-node-selected="--nodeSelected"
                         ƒ-select-next="--next"
                         ƒ-select-prev="--prev"
                         ƒ-add-sub-node="--addSub"
                         ƒ-expand-node-recursive="--expandNode"
                         ƒ-expand-all="--expandAll"
                         ƒ-collapse-all="--collapseAll"
                         ƒ-delete-node="--deleteNode"
                         @-node-hovered="--nodeHovered"></furo-tree>
              
              <furo-card style="width: 400px">
                <h4>Hovered</h4>
                
                
                  <furo-data-text-input label="title" ƒ-focus="--thcl" ƒ-bind-data="--nodeHovered(*.display_name)"></furo-data-text-input>
                  <furo-data-textarea-input  label="Text" rows="7" ƒ-bind-data="--nodeHovered(*.description)"></furo-data-textarea-input>
                

                <h4>Selected</h4>
                
                  <furo-data-text-input label="title" hint="The title is the first part in the tree" ƒ-bind-data="--nodeSelected(*.display_name)"></furo-data-text-input>
                
                  <furo-data-textarea-input  label="Text" ƒ-bind-data="--nodeSelected(*.description)"></furo-data-textarea-input>
                <hr>
                <furo-button outline @-click="--prev" label="prev"></furo-button>
                <furo-button outline @-click="--next" label="next"></furo-button>
                <furo-button outline @-click="--expandNode" label="expand"></furo-button>
                <hr>
                <furo-button outline @-click="--addSub" icon="add" label="add sub"></furo-button>
                <furo-button danger outline @-click="--deleteNode" label="delete Node"></furo-button>
              </furo-card>
            </furo-split-view>


            <produce-data auto @-data="--data"></produce-data>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `}}window.customElements.define("demo-furo-tree",DemoFuroTree);/**
                                                               *
                                                               * `furo-head-tail`
                                                               *  Splits an iterable (i.e. Array) in its head and tail part.
                                                               *
                                                               *```
                                                               *  <furo-head-tail ƒ-split="--arrayData" @-head="--firstElement" @-tail="--restOfArray"></furo-head-tail>
                                                               *```
                                                               *
                                                               * @summary split an array
                                                               * @customElement
                                                               */class FuroHeadTail extends HTMLElement{/**
   * Splits an iterable to its head (first item) and its tail (the rest) parts.
   *
   * ```
   * ["a", "b", "c", "d"]
   *  |_|  |___________|
   *   ^      ^
   *   |      |
   *   |     TAIL   => ["b", "c", "d"]
   *  HEAD          => "a"
   * ```
   *
   * @param iterable
   */split(iterable){if(!Array.isArray(iterable)){console.warn("input is not iterable",iterable);return}const[head,...tail]=iterable;/**
                                      * @event head
                                      * Fired when Array was splitted
                                      * detail payload: {Any} first element of array
                                      */let headEvent=new Event("head",{composed:!0,bubbles:!0});headEvent.detail=head;this.dispatchEvent(headEvent);/**
                                   * @event tail
                                   * Fired when Array was splitted
                                   * detail payload: {Array || Any} the tail from the injected array (e1 - 1n)
                                   */let tailEvent=new Event("tail",{composed:!0,bubbles:!0});tailEvent.detail=tail;this.dispatchEvent(tailEvent)}}window.customElements.define("furo-head-tail",FuroHeadTail);class FuroPrettyJson extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}static get properties(){return{}}static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
            :host {
                display: block;
                font-family: "Benton Sans", "Helvetica Neue", helvetica, arial, sans-serif;
                margin: var(--spacing);
                line-height: 1.5;
            }

            pre {
                background-color: var(--background);
                padding: 0;
            }

            .string {
                color: #080
            }

            .number {
                color: darkorange;
            }

            .boolean {
                color: blue;
            }

            .null {
                color: magenta;
            }

            .key {
                color: #606
            }

        `}/**
     * Inject JSON data
     * @param json
     */injectData(json){if(json){this.markedText=JSON.stringify(json,null,2);this.markedText=this._syntaxHighlight(this.markedText);this.shadowRoot.querySelector("#content").innerHTML=this.markedText}}_syntaxHighlight(json){if("string"!=typeof json){json=JSON.stringify(json,void 0,2)}json=json.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(match){var cls="number";if(/^"/.test(match)){if(/:$/.test(match)){cls="key"}else{cls="string"}}else if(/true|false/.test(match)){cls="boolean"}else if(/null/.test(match)){cls="null"}return"<span class=\""+cls+"\">"+match+"</span>"})}render(){// language=HTML
return _furoShell.html`
            <pre id="content"></pre>
        `}}window.customElements.define("furo-pretty-json",FuroPrettyJson);class DemoFuroMarkdown extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            overflow: auto;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo furo-markdown</h2>
      <p>If unsafe is not set, html will not be rendered</p>
      <furo-demo-snippet source>
        <template>
          <furo-markdown mdsrc="/_page/markdown/demo.md"></furo-markdown>
        </template>
      </furo-demo-snippet>     
      
      <h2>Demo furo-markdown unsafe</h2>
      <p>If unsafe is not set, html will not be rendered</p>
      <furo-demo-snippet source>
        <template>
          <furo-markdown unsafe mdsrc="/_page/markdown/demo.md"></furo-markdown>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-markdown",DemoFuroMarkdown);class DemoFuroPrettyJson extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet{
            height: 500px;
        }
       
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <h2>Demo demo-furo-pretty-json</h2>
      <p>description</p>
      <furo-demo-snippet >
        <template>
          <produce-data @-data="--data"></produce-data>
          <furo-vertical-scroller>
          <furo-pretty-json ƒ-inject-data="--data"></furo-pretty-json>
          </furo-vertical-scroller>
        </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-furo-pretty-json",DemoFuroPrettyJson);class FuroCaptureAudio extends _furoShell.LitElement{constructor(){super();this.constraints={audio:!0,video:!1}}stop(){this.tracks[0].stop()}start(){if(navigator.mediaDevices){navigator.mediaDevices.getUserMedia(this.constraints).then(stream=>{/**
         *
         * @type {MediaStream}
         */this.stream=stream;this.tracks=stream.getTracks();/**
                                           * the stream
                                           * @type {MediaStream}
                                           */ /**
                                               * @event stream
                                               * Fired when
                                               * detail payload:
                                               */let customEvent=new Event("stream",{composed:!0,bubbles:!0});customEvent.detail=this.stream;this.dispatchEvent(customEvent)}).catch(this._err)}else{let e=new Error("Works with https only");this._err(e)}}_err(e){console.error(e);/**
                       * @event error
                       * Fired when
                       * detail payload:
                       */let customEvent=new Event("error",{composed:!0,bubbles:!0});customEvent.detail=e;this.dispatchEvent(customEvent)}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */myBool:{type:Boolean}}}}window.customElements.define("furo-capture-audio",FuroCaptureAudio);class FuroCaptureVideo extends _furoShell.LitElement{constructor(){super();this.constraints={audio:!1,video:{width:{exact:320},height:{exact:240}}}}stop(){this.tracks[0].stop()}start(){if(navigator.mediaDevices){navigator.mediaDevices.getUserMedia(this.constraints).then(stream=>{/**
         *
         * @type {MediaStream}
         */this.stream=stream;this.tracks=stream.getTracks();/**
                                           * the stream
                                           * @type {MediaStream}
                                           */ /**
                                               * @event stream
                                               * Fired when
                                               * detail payload:
                                               */let customEvent=new Event("stream",{composed:!0,bubbles:!0});customEvent.detail=this.stream;this.dispatchEvent(customEvent)}).catch(this._err)}else{let e=new Error("Works with https only");this._err(e)}}_err(e){console.error(e);/**
                       * @event error
                       * Fired when
                       * detail payload:
                       */let customEvent=new Event("error",{composed:!0,bubbles:!0});customEvent.detail=e;this.dispatchEvent(customEvent)}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */myBool:{type:Boolean}}}}window.customElements.define("furo-capture-video",FuroCaptureVideo);class FuroSpeechRecognition extends _furoShell.LitElement{constructor(){super();window.SpeechRecognition=window.webkitSpeechRecognition||window.SpeechRecognition;this.recognition=new SpeechRecognition;this.recognition.interimResults=!1;this.recognition.onresult=event=>{const speechToText=event.results[0][0].transcript;console.log(event.results);/**
                                  * @event transcript
                                  * Fired when speechToText
                                  * detail payload: string
                                  */let customEvent=new Event("transcript",{composed:!0,bubbles:!0});customEvent.detail=speechToText;this.dispatchEvent(customEvent)}}start(){this.recognition.start()}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */myBool:{type:Boolean}}}}window.customElements.define("furo-speech-recognition",FuroSpeechRecognition);class DemoCaptureVideo extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-vertical-flex>
        <div>
          <h2>Demo demo-capture-video</h2>
          <p>description</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-button primary unevelated @-click="--start" label="start"> </furo-button>
            <furo-button danger unevelated @-click="--stop" label="stop"></furo-button>
            <hr>
            <furo-capture-video ƒ-start="--start" ƒ-stop="--stop" @-stream="--stream"></furo-capture-video>
            <video autoplay playsinline ƒ-.src-object="--stream"></video>
            <video autoplay playsinline ƒ-.src-object="--stream"></video>
            <video autoplay playsinline ƒ-.src-object="--stream"></video>
            <video autoplay playsinline ƒ-.src-object="--stream"></video>
            <video autoplay playsinline ƒ-.src-object="--stream"></video>
            <video autoplay playsinline ƒ-.src-object="--stream"></video>
      </furo-vertical-flex>
      </template>
      </furo-demo-snippet>
    `}}window.customElements.define("demo-capture-video",DemoCaptureVideo);class FuroDemoLoader extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}load(location){if(location.pathSegments[0]){let lastDemo=this.shadowRoot.querySelector("#demo");lastDemo.remove();this.demoComponent=location.pathSegments[0];// if the element is registered append the new
if(document.createElement(this.demoComponent).constructor!==HTMLElement){// append the demo element
let demo=document.createElement(this.demoComponent);demo.id="demo";this.shadowRoot.appendChild(demo)}else{let demo=document.createElement("div");demo.id="demo";demo.classList.add("error");demo.innerText="404  -  "+this.demoComponent+" is not imported, nothing to show here";this.shadowRoot.appendChild(demo)}this.requestUpdate()}}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            overflow: auto;
            position: relative;
        }

        :host([hidden]) {
            display: none;
        }

        .goback {
            position: absolute;
            right: var(--spacing);

        }
        .error{
            font-size: 48px;
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <a class="goback" href="../doc/">Back to package</a>
        <div id="demo"></div>
    `}}window.customElements.define("furo-demo-loader",FuroDemoLoader);class PanelDemo extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super()}/**
     * @private
     * @return {Object}
     */static get properties(){return{/**
       * Description
       */myBool:{type:Boolean}}}/**
    * flow is ready lifecycle method
    */_FBPReady(){super._FBPReady();// this._FBPTraceWires()
}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-left: var(--spacing-s);
            overflow: hidden;
            box-sizing: border-box;
            background-color: var(--background);
            --split-master-width: 212px;
        }

        :host([hidden]) {
            display: none;
        }
        
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      
      <furo-location url-space-regex="^/api/[^/]*/demo" @-location-changed="--pathChanged"></furo-location>
      <furo-demo-loader ƒ-load="--pathChanged"></furo-demo-loader>
    `}}window.customElements.define("panel-demo",PanelDemo);class PanelDoc extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            padding-top: var(--spacing);
            padding-left: var(--spacing-s);
            overflow: hidden;
            box-sizing: border-box;
            background-color: var(--background);
            --split-master-width: 212px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-doc-element, furo-doc-class {
            max-width: 960px;
            min-width: 500px;
            padding-left: var(--spacing);
        }

        /** the background of the bar itself. **/
        ::-webkit-scrollbar {
            width: 6px;
            background-color: var(--surface, white);
        }

        /** the directional buttons on the scrollbar. **/
        ::-webkit-scrollbar-button {
            background-color: var(--on-surface, black);
        }

        /** the empty space “below” the progress bar. **/
        ::-webkit-scrollbar-track {
        }

        /** the top-most layer of the the progress bar not covered by the thumb. **/
        ::-webkit-scrollbar-track-piece {
        }

        /** the draggable scrolling element resizes depending on the size of the scrollable element. **/
        ::-webkit-scrollbar-thumb {
            background-color: var(--on-surface, black);
            border-radius: 3px;
        }

        /** the bottom corner of the scrollable element, where two scrollbar meet. **/
        ::-webkit-scrollbar-corner {
        }

        /** the draggable resizing handle that appears above the scrollbar-corner at the bottom corner of some elements. **/
        ::-webkit-resizer {
        }
    `}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
this._FBPAddWireHook("--packageChanged",e=>{this._FBPTriggerWire("--src","../../../node_modules/@furo/"+e.pathSegments[0]+"/analysis.json")})}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`

      <!-- find the package -->
      <furo-location url-space-regex="^/api" @-location-changed="--packageChanged"></furo-location>
      <furo-location url-space-regex="^/api/[^/]*/doc" @-location-changed="--pathChanged"></furo-location>
      <furo-doc-fetch-analysis ƒ-fetch-src="--src" ƒ-check-subroute="--pathChanged"
                               @-data="--analysis"></furo-doc-fetch-analysis>

      <furo-split-view>

        <!-- the doc menu -->
        <furo-doc-menu slot="master" scroll ƒ-analysis="--analysis" @-element="--element"
                       @-class="--class" @-mixin="--class"></furo-doc-menu>

        
        <furo-doc-element scroll ƒ-print="--element" ƒ-hide="--class"></furo-doc-element>


        <furo-doc-class scroll ƒ-print="--class" ƒ-hide="--element"></furo-doc-class>

      </furo-split-view>
    `}}window.customElements.define("panel-doc",PanelDoc);class FuroAppFlowRouter extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this.style.display="none";/**
                                  * A regexp that defines the set of URLs that should be considered part
                                  * of this web app.
                                  *
                                  * Clicking on a link that matches this regex won't result in a full page
                                  * navigation, but will instead just update the URL state in place.
                                  *
                                  * This regexp is given everything after the origin in an absolute
                                  * URL. So to match just URLs that start with /app/ do:
                                  *     url-space-regex="^/app/"
                                  *
                                  * @type {string|RegExp}
                                  */this.urlSpaceRegex=this.getAttribute("url-space-regex")||"/"}/**
     * trigger a history back
     */back(){window.history.back()}/**
     * trigger a history forward
     */forward(){window.history.forward()}static get properties(){return{/**
       *Configuration Array
       *
       * | current   | flow-event-name      | target      | [mapping]          |
       * |:----------|:---------------------|:------------|:-------------------|
       * | view-main | form-complete        | detail-view | element => aufgabe |
       * | *         | menu-settings-click  | settings    |                    |
       *
       *
       *
       *  [['view-main', 'button-tap', 'detail-view',  'task => id]]
       *  if current is set to view-main and the app-flow-event with name 'button-tap' is triggered, current is set to detail-view and data.task from app-flow is mapped to data.id.
       *
       *  Special configurations:
       *
       *
       *  You can set a wildcard for "current". If you check the example: menu-settings-click can be triggered from any current. If there is a "current" with menu-settings-click configured and you are there, the wildcard is not used.
       */config:{type:Array}}}/**
     * Trigger the router
     * @param flowEvent
     * @return {boolean}
     */trigger(flowEvent){let currentPath=window.location.pathname.replace(new RegExp(this.urlSpaceRegex),""),match=window.location.pathname.match(new RegExp(this.urlSpaceRegex)),prefix=match[0]||"/",selection=this._configObject[currentPath+flowEvent.event]||this._configObject["*"+flowEvent.event];if(selection){let search="",sa=[];for(let k in flowEvent.data){sa.push(k+"="+flowEvent.data[k])}// todo: implement mapper
if(0<sa.length){search="?"+sa.join("&")}if("HISTORY-BACK"===selection.target){this.back()}else{window.history.pushState({},"",prefix+selection.target+search);/**
                                                                               * Internal notyfication
                                                                               * @private
                                                                               */let now=window.performance.now(),customEvent=new Event("__furoLocationChanged",{composed:!0,bubbles:!0});customEvent.detail=now;this.dispatchEvent(customEvent)}/**
         * @event view-changed
         * Fired when page was changed
         * detail payload: flowEvent
         */let customEvent=new Event("view-changed",{composed:!0,bubbles:!0});customEvent.detail=flowEvent;this.dispatchEvent(customEvent);return!0}/**
       * @event event-not-found
       * Fired when view not
       * detail payload: flowEvent
       */let customEvent=new Event("event-not-found",{composed:!0,bubbles:!0});customEvent.detail=flowEvent;this.dispatchEvent(customEvent);return!1}/**
     * build internal config for faster access
     */set config(configArray){this._configObject={};let self=this;// build config object for faster checks
configArray.forEach(config=>{this._configObject[config[0]+config[1]]={target:config[2],mapping:config[3]}})}}window.customElements.define("furo-app-flow-router",FuroAppFlowRouter);class panelRegistry{static registerType(type,panel){this._registry[type]=panel}static getPanelName(type,suffix){if(suffix){if(this._registry[type]){return this._registry[type][suffix]}else{console.warn("type is not registred:",type);return}}if(this._registry[type]){return this._registry[type]}else{console.warn("type is not registred:",type);return}}}_exports.panelRegistry=panelRegistry;panelRegistry._registry={};var panelRegistry$1={panelRegistry:panelRegistry};_exports.$panelRegistry=panelRegistry$1;class FuroPanelCoordinator extends(0,_furoShell.FBP)(_furoShell.LitElement){constructor(){super();this._openPanels=[];this._furoPage=this.parentNode;this._flatTree=[];/**
                          * the Query param you use for the active page. ap stands for active panel. If it conflicts with your naming, change this property
                          * @type {string}
                          */this.queryTag=this.getAttribute("query-tag")||"ap";/**
                                                             * A regexp that defines the set of URLs that should be considered part
                                                             * of this web app.
                                                             *
                                                             * Clicking on a link that matches this regex won't result in a full page
                                                             * navigation, but will instead just update the URL state in place.
                                                             *
                                                             * This regexp is given everything after the origin in an absolute
                                                             * URL. So to match just URLs that start with /app/ do:
                                                             *     url-space-regex="^/app/"
                                                             *
                                                             * @type {string|RegExp}
                                                             */this.urlSpaceRegex=this.getAttribute("url-space-regex")||"";this._FBPAddWireHook("--locationChanged",e=>{this._handleDeepLink(e)})}bindTreeEntity(entityNode){this._tree=entityNode;this._rootNode=entityNode.fields.root;// set view as default panel
if(this._tree.fields.panel&&this._tree.fields.panel.value){this._panel=this._tree.fields.panel.value}else{this._panel="view"}/**
       * set the query param for the active page.
       */this._rootNode.addEventListener("tree-node-selected",e=>{let nodeID=e.detail.id.value,newQuery=window.location.search.slice(1),queryObject={};if(0<newQuery.length){newQuery.split("&").forEach((qstr,i,a)=>{let p=qstr.split("=");queryObject[p[0]]=p[1]})}queryObject[this.queryTag]="P"+nodeID;let qp=[];for(let segment in queryObject){if(queryObject.hasOwnProperty(segment)){qp.push(segment+"="+queryObject[segment])}}// notify furo location
window.history.pushState({},"",window.location.pathname+"?"+qp.join("&")+window.location.hash);let now=window.performance.now(),customEvent=new Event("__furoLocationChanged",{composed:!0,bubbles:!0});customEvent.detail=now;this.dispatchEvent(customEvent)});this._tree.addEventListener("data-injected",e=>{this._initTree()});this._initTree()}_initTree(){this._flatTree=[this._rootNode];if(0<this._rootNode.children.repeats.length){this._parseTreeRecursive(this._rootNode);if(0<this._flatTree.length&&this._queueLocation){this._handleDeepLink(this._queueLocation);this._queueLocation=void 0}}}_parseTreeRecursive(tree){tree.children.repeats.forEach(node=>{this._flatTree.push(node);if(0<node.children.repeats.length){this._parseTreeRecursive(node)}})}_handleDeepLink(location){if(location.query[this.queryTag]){if(0<this._flatTree.length){let nodes=this._flatTree.filter(n=>{return"P"+n.id.value===location.query.ap});if(nodes[0].link){// Mark Tree node
setTimeout(()=>{let node=nodes[0];node.dispatchNodeEvent(new NodeEvent("this-node-selected",node,!1));// used to open the paths upwards from the selected node
node.__parentNode.dispatchNodeEvent(new NodeEvent("descendant-selected",this,!0));if(node.triggerHover){node.triggerHover()}},150);this._activatePanelForNode(nodes[0])}}else{this._queueLocation=location}}}/**
     * closes all open panels
     */closeAll(event){this._openPanels.forEach(panel=>{panel.dispatchNodeEvent(new NodeEvent("close-requested",this,!1))})}/**
     * removes a panel from the view
     * @param nodeName
     * @private
     */_removeNodeByName(nodeName){// remove from dom
let e=this._furoPage.querySelector("*[name="+nodeName+"]");e.remove();// remove from flat tree
this._openPanels=this._openPanels.filter((node,index)=>{return"P"+node.id.value!==nodeName});if(0<this._openPanels.length){// select item with same index
this._openPanels[this._openPanels.length-1].selectItem()}else{//enable default page
this._furoPage.activatePage("overview");// update query params by removing the queryTag
let newQuery=window.location.search.slice(1),queryObject={};if(0<newQuery.length){newQuery.split("&").forEach((qstr,i,a)=>{let p=qstr.split("=");queryObject[p[0]]=p[1]})}delete queryObject[this.queryTag];let qp=[];for(let segment in queryObject){if(queryObject.hasOwnProperty(segment)){qp.push(segment+"="+queryObject[segment])}}// notify furo location
window.history.pushState({},"",window.location.pathname+"?"+qp.join("&")+window.location.hash);let now=window.performance.now(),customEvent=new Event("__furoLocationChanged",{composed:!0,bubbles:!0});customEvent.detail=now;this.dispatchEvent(customEvent);// -- update query params
}/**
       * @event panel-changed
       * Fired when a panel was opened or is closed
       * detail payload: array with open panels
       */let customEvent=new Event("panel-changed",{composed:!0,bubbles:!1});customEvent.detail=this._openPanels;this.dispatchEvent(customEvent);/**
                                      * @event panel-opened
                                      * Fired when a panel was  closed
                                      * detail payload: array with open panels
                                      */let closedEvent=new Event("panel-closed",{composed:!0,bubbles:!1});closedEvent.detail=this._openPanels;this.dispatchEvent(closedEvent)}_activatePanelForNode(node){let name=node.id.value;// register node
if(-1===this._openPanels.indexOf(node)){let panelComponent=panelRegistry.getPanelName(node.link.type.value,this._panel);if(panelComponent){//create element and set name,...
let panel=document.createElement(panelComponent),panelName="P"+name;panel.setAttribute("name",panelName);panel._TreeNode=node;panel.removePanel=()=>{this._removeNodeByName(panelName)};this._openPanels.push(node);this._furoPage.appendChild(panel);/**
                                            * @event panel-changed
                                            * Fired when a panel was opened or is closed
                                            * detail payload: array with open panels
                                            */let customEvent=new Event("panel-changed",{composed:!0,bubbles:!1});customEvent.detail=this._openPanels;this.dispatchEvent(customEvent);/**
                                          * @event panel-opened
                                          * Fired when a panel was opened
                                          * detail payload: array with open panels
                                          */let openedEvent=new Event("panel-opened",{composed:!0,bubbles:!1});openedEvent.detail=this._openPanels;this.dispatchEvent(openedEvent)}else{console.warn(node.link.type.value,"is not in the registry",this)}}// microtask
setTimeout(()=>{let currentPanel=this._furoPage.activatePage("P"+name);if(currentPanel&&currentPanel._FBPTriggerWire!==void 0){if(!currentPanel.__panelInitSent){currentPanel._FBPTriggerWire("--panelInit",node.link.value);currentPanel._FBPTriggerWire("--treeNode",node);currentPanel.__panelInitSent=!0}currentPanel._FBPTriggerWire("--panelActivated",node.link.value)}},0)}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-location @-location-changed="--locationChanged"  url-space-regex="${this.urlSpaceRegex}"></furo-location>
    `}/**
     * flow is ready lifecycle method
     */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
}}window.customElements.define("furo-panel-coordinator",FuroPanelCoordinator);class ViewApi extends(0,_furoShell.FBP)(_furoShell.LitElement){/**
   * flow is ready lifecycle method
   */_FBPReady(){super._FBPReady();//this._FBPTraceWires()
this._FBPTriggerWire("--nav",_furoShell.nav)}/**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */static get styles(){// language=CSS
return _furoShell.Theme.getThemeForComponent(this.name)||_furoShell.css`
        :host {
            display: block;
            height: 100%;
            overflow: hidden;
            box-sizing: border-box;
            background-color: var(--background, white);
            color: var(--on-background, black);
            --split-master-width: 250px;
        }

        :host([hidden]) {
            display: none;
        }
        furo-pages{
            height: 100%;
        }

        /** the background of the bar itself. **/
        ::-webkit-scrollbar {
            width: 6px;
            background-color: var(--surface, white);
        }

        /** the directional buttons on the scrollbar. **/
        ::-webkit-scrollbar-button {
            background-color: var(--on-surface, black);
        }

        /** the empty space “below” the progress bar. **/
        ::-webkit-scrollbar-track {
        }

        /** the top-most layer of the the progress bar not covered by the thumb. **/
        ::-webkit-scrollbar-track-piece {
        }

        /** the draggable scrolling element resizes depending on the size of the scrollable element. **/
        ::-webkit-scrollbar-thumb {
            background-color: var(--on-surface, black);
            border-radius: 3px;
        }

        /** the bottom corner of the scrollable element, where two scrollbar meet. **/
        ::-webkit-scrollbar-corner {
        }

        /** the draggable resizing handle that appears above the scrollbar-corner at the bottom corner of some elements. **/
        ::-webkit-resizer {
        }
    `}/**
     * @private
     * @returns {TemplateResult}
     */render(){// language=HTML
return _furoShell.html`
      <furo-location url-space-regex="^/api/[^/]*" @-location-changed="--pathChanged"></furo-location>

      <furo-split-view>
        <div slot="master" scroll>
          <side-navigation ƒ-inject-nav-config="--nav" base-path="/api/"></side-navigation>
        </div>
        <furo-pages ƒ-inject-location="--pathChanged" default="default">
          <panel-doc name="doc"></panel-doc>
          <panel-demo name="demo"></panel-demo>
          <div name="default">404 ....</div>
        </furo-pages>
      </furo-split-view>
    `}}window.customElements.define("view-api",ViewApi)});