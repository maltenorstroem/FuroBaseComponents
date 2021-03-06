import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/src/theme.js"
import {FBP} from "@furo/fbp";
import "../components/footer-bar"
import '@furo/app/src/furo-app-bar-top'
import '@furo/layout/src/furo-vertical-flex'

/**
 * `view-home`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/view-home.html
 * @appliesMixin FBP
 */
class ViewHome extends FBP(LitElement) {

    constructor() {
        super();
    }

    /**
     * @private
     * @return {Object}
     */
    static get properties() {
        return {
            /**
             * Description
             */
            myBool: {type: Boolean}
        };
    }

    /**
     * flow is ready lifecycle method
     */
    _FBPReady() {
        super._FBPReady();
        //this._FBPTraceWires()
    }

    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('ViewHome') || css`
            :host {
                display: block;
                height: 100%;
                overflow: hidden;
                box-sizing: border-box;
                background-color: var(--surface, white);
                color: var(--on-surface, black);
            }

            :host([hidden]) {
                display: none;
            }

            .hero-title {
                font-size: 196px;
                font-weight: 300;

                margin: 100px 0 20px 130px;
            }

            .hero-caption {
                max-width: 640px;
                padding-right: 10%;
                line-height: 38px;
                font-size: 28px;
                font-weight: 400;
            }

            .hero-link {
                text-transform: uppercase;
                text-decoration: none;
                line-height: 26px;
                vertical-align: unset;
                
                align-content: start;
                font-weight: 500;
                color: var(--accent);
            }

            h1 {
                font-size: 40px;
                line-height: 48px;
                font-weight: normal;
            }

            h1.title {
                max-width: 560px;
                margin-bottom: 20px;
            }

            h2.description {
                margin-top: 20px;
                margin-bottom: 24px;
                max-width: 600px;
                color: var(--accent, var(--on-surface));
                font-weight: normal;
            }

            h1.title:after {
                content: "";
                background-color: var(--on-background);
                height: 1px;
                width: var(--spacing-l);
                display: block;
                margin-top: 8px;
            }

            .caption {
                margin-bottom: -8px;
                max-width: 360px;
                font-weight: normal;
            }

            furo-horizontal-flex[padded] > div {
                padding-right: var(--spacing);
                max-width: 350px;

            }

            .content {
                padding: var(--spacing);
                
            }

            .panel {
                background-color: var(--surface, white);
                color: var(--on-surface, black);
                padding: var(--spacing, 24px);
                margin-right: var(--spacing, 24px);
                margin-bottom: var(--spacing, 24px);
                border-radius: 4px;
            }

            h2.with-footnote {
                margin-bottom: 0;
            }

            a {
                color: var(--accent);
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
            <furo-app-bar-top drawer="home">
                <header-toolbar></header-toolbar>
            </furo-app-bar-top>
            <div scroll flex class="content">
                <p class="hero-title">フロー</p>
                <p class="hero-caption">Version 1.x.x</p>
                <p class="hero-caption">An enterprise grade "framework" for creating fast, lightweight web apps
                    with web components</p>
                <a class="hero-link" href="/guide/md/overview/">Get Started</a>

                <h1 class="title">Why use furo?</h1>
                <furo-horizontal-flex padded>
                    <div class="panel" flex>

                        <h2 class="caption">Fully declarative</h2>
                        <p>Express your UI declaratively, as a function of state. No need to learn a custom templating
                            language –
                            you
                            can use the full power of web-components. </p>

                    </div>
                    <div class="panel" flex>

                        <h2 class="caption">Themable</h2>
                        <p>Furo Base Components are themeable. <strong>Material</strong> theme is set as default. You
                            can apply the
                            <strong>Carbon</strong>
                            <small>(comming soon)</small>
                            themeset or even your own.
                        </p>

                    </div>
                    <div class="panel" flex>

                        <h2 class="caption">Styleable</h2>
                        <p>Styling is not the same like themeing. Apply your style set to the theme you use. Styling is
                            done with
                            <strong>--style-vars</strong>. Maybe you want switch your app to <i>dark</i>?</p>

                    </div>
                </furo-horizontal-flex>
                <furo-horizontal-flex padded>
                    <div class="panel" flex>
                        <h2 class="caption">Standards</h2>
                        <p>Furo Base Components rely hardly on web standards as much as possible. This gives you speed,
                            robustness
                            and compatibility</p>
                        <p>You are free to add <strong>shims</strong> or <strong>polyfills</strong> to your application.
                            But do not
                            forget to <strong> "Use the Platform" </strong></p>
                    </div>
                    <div class="panel" flex>
                        <h2 class="caption">Tool Chain</h2>
                        <p>Furo itself uses the <a href="https://open-wc.org/">open-wc</a>
                            toolchain by default. </p>
                        <p>If you like <a href="https://webpack.js.org/">webpack</a> more,
                            feel free to change it.</p>
                    </div>
                  <div class="panel" flex>
                        <h2 class="caption">Dont Like Frameworks?</h2>
                        <p>You can use the furo base components standalone.</p>
                        <p>You can also use the <strong><a href="https://furo.pro/guide/md/overview/">fbp</a></strong> without having the base components</p>
                        
                    </div>

                </furo-horizontal-flex>

                <h1 class="title">APIs and generators</h1>
                <h2 class="description">Furo comes with a strong data API specification</h2>
                <furo-horizontal-flex padded>
                    <div class="panel" flex>
                        <h2 class="caption">Generators</h2>

                        <p>The default generator works fine with <strong>grpc</strong>.</p>
                        <p>Generate the <strong>protos</strong> with the delivered generators and use the backend
                            language you want,
                            like <strong><i>=GO</i></strong> or so. </p>
                    </div>

                    <div class="panel" class="flex">
                        <h2 class="caption">Open Api</h2>
                        <p>You can also generate a swagger documentation if you want.</p>
                        <p>And from there you can generate much more...</p>
                    </div>
                    <div class="panel" class="flex">
                        <h2 class="caption">Data agents</h2>
                        <p>The data fetching agents are working with REST APIs.</p>
                        <p>Swap the existing data fetching agents to one that fits your needs better.</p>
                    </div>
                </furo-horizontal-flex>

                <h1 class="title">Flow Based Programming</h1>
                <h2 class="description">With Furo-fbp, components can be written fully declarative and
                    without any Javascript.</h2>
                <furo-horizontal-flex padded>
                    <div class="panel" flex>
                        <h2 class="caption">Declarative</h2>
                        <p>Furo comes with furo-fbp, a <a href="http://jpaulmorrison.com/fbp/"><strong>F</strong>low
                            <strong>B</strong>ased <strong>P</strong>rogramming</a>
                            language created by <a href="http://jpaulmorrison.com/">J. Paul Rodker Morrison</a>.
                            Components can be
                            written fully declarative and without any code.</p>
                    </div>
                    <div class="panel" flex>
                        <h2 class="caption">Visual</h2>
                        <p></p>
                    </div>
                    <div class="panel" flex>
                        <h2 class="caption">Testable</h2>
                        <p>Components built with furo are easy to test. Trigger the wires or add a hook to an existing wire
                        and inspect the data.
                        </p>
                    </div>
                </furo-horizontal-flex>


                <h1 class="title">General Compatibility </h1>

                <h2 class="description with-footnote">Furo-fbp has no dependencies and works with LitElement, native
                    web-components or
                    Polymer,...</h2>
                <small>*1</small>

                <h1 class="title">Browser Compatibility</h1>
                <h2 class="description">Furo works in all major browsers (Chrome, Firefox, Edge, Safari, and
                    Opera). </h2>
                <hr>
                <small>[1] furo-fbp has no dependencies, furoBaseComponets relies mostly on LitElement</small>

                <footer-bar></footer-bar>
            </div>
            
                
            </furo-vertical-flex>
        `;
    }
}

window.customElements.define('view-home', ViewHome);
