import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import '@furo/layout';
import '@furo/icon/demo/furo-icon-with-label';

/**
 * `i18n-basics`
 * Lit element
 *
 * @customElement
 * @demo demo/index.html
 */
class IconsDemo extends FBP(LitElement) {

    constructor() {
        super();
    }

    static get properties() {
        return {};
    }

    static get styles() {
        // language=CSS
        return [
            css`                
            `
        ];
    }


    render() {
        // language=HTML
        return html`
        <div>

            <furo-horizontal-flex">

                <furo-icon icon="3d-rotation"></furo-icon>
                <furo-icon icon="accessibility"></furo-icon>
                <furo-icon icon="accessible"></furo-icon>
                <furo-icon icon="account-balance"></furo-icon>
                <furo-icon icon="account-balance-wallet"></furo-icon>
                <furo-icon icon="account-box"></furo-icon>
                <furo-icon icon="account-circle"></furo-icon>
                <furo-icon icon="add"></furo-icon>
                <furo-icon icon="add-alert"></furo-icon>
                <furo-icon icon="add-box"></furo-icon>
                <furo-icon icon="add-circle"></furo-icon>
                <furo-icon icon="add-circle-outline"></furo-icon>
                <furo-icon icon="add-shopping-cart"></furo-icon>
                <furo-icon icon="alarm"></furo-icon>
                <furo-icon icon="alarm-add"></furo-icon>
                <furo-icon icon="alarm-off"></furo-icon>
                <furo-icon icon="alarm-on"></furo-icon>
                <furo-icon icon="all-out"></furo-icon>
                <furo-icon icon="android"></furo-icon>
                <furo-icon icon="announcement"></furo-icon>
                <furo-icon icon="apps"></furo-icon>
                <furo-icon icon="archive"></furo-icon>
                <furo-icon icon="arrow-back"></furo-icon>
                <furo-icon icon="arrow-downward"></furo-icon>
                <furo-icon icon="arrow-drop-down"></furo-icon>
                <furo-icon icon="arrow-drop-down-circle"></furo-icon>
                <furo-icon icon="arrow-drop-up"></furo-icon>
                <furo-icon icon="arrow-forward"></furo-icon>
                <furo-icon icon="arrow-upward"></furo-icon>
                <furo-icon icon="aspect-ratio"></furo-icon>
                <furo-icon icon="assessment"></furo-icon>
                <furo-icon icon="assignment"></furo-icon>
                <furo-icon icon="assignment-ind"></furo-icon>
                <furo-icon icon="assignment-late"></furo-icon>
                <furo-icon icon="assignment-return"></furo-icon>
                <furo-icon icon="assignment-returned"></furo-icon>
                <furo-icon icon="assignment-turned-in"></furo-icon>
                <furo-icon icon="attachment"></furo-icon>
                <furo-icon icon="autorenew"></furo-icon>
                <furo-icon icon="backspace"></furo-icon>
                <furo-icon icon="backup"></furo-icon>
                <furo-icon icon="block"></furo-icon>
                <furo-icon icon="book"></furo-icon>
                <furo-icon icon="bookmark"></furo-icon>
                <furo-icon icon="bookmark-border"></furo-icon>
                <furo-icon icon="bug-report"></furo-icon>
                <furo-icon icon="build"></furo-icon>
                <furo-icon icon="cached"></furo-icon>
                <furo-icon icon="camera-enhance"></furo-icon>
                <furo-icon icon="cancel"></furo-icon>
                <furo-icon icon="card-giftcard"></furo-icon>
                <furo-icon icon="card-membership"></furo-icon>
                <furo-icon icon="card-travel"></furo-icon>
                <furo-icon icon="change-history"></furo-icon>
                <furo-icon icon="check"></furo-icon>
                <furo-icon icon="check-box"></furo-icon>
                <furo-icon icon="check-box-outline-blank"></furo-icon>
                <furo-icon icon="check-circle"></furo-icon>
                <furo-icon icon="chevron-left"></furo-icon>
                <furo-icon icon="chevron-right"></furo-icon>
                <furo-icon icon="chrome-reader-mode"></furo-icon>
                <furo-icon icon="class"></furo-icon>
                <furo-icon icon="clear"></furo-icon>
                <furo-icon icon="close"></furo-icon>
                <furo-icon icon="cloud"></furo-icon>
                <furo-icon icon="cloud-circle"></furo-icon>
                <furo-icon icon="cloud-done"></furo-icon>
                <furo-icon icon="cloud-download"></furo-icon>
                <furo-icon icon="cloud-off"></furo-icon>
                <furo-icon icon="cloud-queue"></furo-icon>
                <furo-icon icon="cloud-upload"></furo-icon>
                <furo-icon icon="code"></furo-icon>
                <furo-icon icon="compare-arrows"></furo-icon>
                <furo-icon icon="content-copy"></furo-icon>
                <furo-icon icon="content-cut"></furo-icon>
                <furo-icon icon="content-paste"></furo-icon>
                <furo-icon icon="copyright"></furo-icon>
                <furo-icon icon="create"></furo-icon>
                <furo-icon icon="create-new-folder"></furo-icon>
                <furo-icon icon="credit-card"></furo-icon>
                <furo-icon icon="dashboard"></furo-icon>
                <furo-icon icon="date-range"></furo-icon>
                <furo-icon icon="delete"></furo-icon>
                <furo-icon icon="delete-forever"></furo-icon>
                <furo-icon icon="delete-sweep"></furo-icon>
                <furo-icon icon="description"></furo-icon>
                <furo-icon icon="dns"></furo-icon>
                <furo-icon icon="done"></furo-icon>
                <furo-icon icon="done-all"></furo-icon>
                <furo-icon icon="donut-large"></furo-icon>
                <furo-icon icon="donut-small"></furo-icon>
                <furo-icon icon="drafts"></furo-icon>
                <furo-icon icon="eject"></furo-icon>
                <furo-icon icon="error"></furo-icon>
                <furo-icon icon="error-outline"></furo-icon>
                <furo-icon icon="euro-symbol"></furo-icon>
                <furo-icon icon="event"></furo-icon>
                <furo-icon icon="event-seat"></furo-icon>
                <furo-icon icon="exit-to-app"></furo-icon>
                <furo-icon icon="expand-less"></furo-icon>
                <furo-icon icon="expand-more"></furo-icon>
                <furo-icon icon="explore"></furo-icon>
                <furo-icon icon="extension"></furo-icon>
                <furo-icon icon="face"></furo-icon>
                <furo-icon icon="favorite"></furo-icon>
                <furo-icon icon="favorite-border"></furo-icon>
                <furo-icon icon="feedback"></furo-icon>
                <furo-icon icon="file-download"></furo-icon>
                <furo-icon icon="file-upload"></furo-icon>
                <furo-icon icon="filter-list"></furo-icon>
                <furo-icon icon="find-in-page"></furo-icon>
                <furo-icon icon="find-replace"></furo-icon>
                <furo-icon icon="fingerprint"></furo-icon>
                <furo-icon icon="first-page"></furo-icon>
                <furo-icon icon="flag"></furo-icon>
                <furo-icon icon="flight-land"></furo-icon>
                <furo-icon icon="flight-takeoff"></furo-icon>
                <furo-icon icon="flip-to-back"></furo-icon>
                <furo-icon icon="flip-to-front"></furo-icon>
                <furo-icon icon="folder"></furo-icon>
                <furo-icon icon="folder-open"></furo-icon>
                <furo-icon icon="folder-shared"></furo-icon>
                <furo-icon icon="font-download"></furo-icon>
                <furo-icon icon="forward"></furo-icon>
                <furo-icon icon="fullscreen"></furo-icon>
                <furo-icon icon="fullscreen-exit"></furo-icon>
                <furo-icon icon="g-translate"></furo-icon>
                <furo-icon icon="gavel"></furo-icon>
                <furo-icon icon="gesture"></furo-icon>
                <furo-icon icon="get-app"></furo-icon>
                <furo-icon icon="gif"></furo-icon>
                <furo-icon icon="grade"></furo-icon>
                <furo-icon icon="group-work"></furo-icon>
                <furo-icon icon="help"></furo-icon>
                <furo-icon icon="help-outline"></furo-icon>
                <furo-icon icon="highlight-off"></furo-icon>
                <furo-icon icon="history"></furo-icon>
                <furo-icon icon="home"></furo-icon>
                <furo-icon icon="hourglass-empty"></furo-icon>
                <furo-icon icon="hourglass-full"></furo-icon>
                <furo-icon icon="http"></furo-icon>
                <furo-icon icon="https"></furo-icon>
                <furo-icon icon="important-devices"></furo-icon>
                <furo-icon icon="inbox"></furo-icon>
                <furo-icon icon="indeterminate-check-box"></furo-icon>
                <furo-icon icon="info"></furo-icon>
                <furo-icon icon="info-outline"></furo-icon>
                <furo-icon icon="input"></furo-icon>
                <furo-icon icon="invert-colors"></furo-icon>
                <furo-icon icon="label"></furo-icon>
                <furo-icon icon="label-outline"></furo-icon>
                <furo-icon icon="language"></furo-icon>
                <furo-icon icon="last-page"></furo-icon>
                <furo-icon icon="launch"></furo-icon>
                <furo-icon icon="lightbulb-outline"></furo-icon>
                <furo-icon icon="line-style"></furo-icon>
                <furo-icon icon="line-weight"></furo-icon>
                <furo-icon icon="link"></furo-icon>
                <furo-icon icon="list"></furo-icon>
                <furo-icon icon="lock"></furo-icon>
                <furo-icon icon="lock-open"></furo-icon>
                <furo-icon icon="lock-outline"></furo-icon>
                <furo-icon icon="low-priority"></furo-icon>
                <furo-icon icon="loyalty"></furo-icon>
                <furo-icon icon="mail"></furo-icon>
                <furo-icon icon="markunread"></furo-icon>
                <furo-icon icon="markunread-mailbox"></furo-icon>
                <furo-icon icon="menu"></furo-icon>
                <furo-icon icon="more-horiz"></furo-icon>
                <furo-icon icon="more-vert"></furo-icon>
                <furo-icon icon="motorcycle"></furo-icon>
                <furo-icon icon="move-to-inbox"></furo-icon>
                <furo-icon icon="next-week"></furo-icon>
                <furo-icon icon="note-add"></furo-icon>
                <furo-icon icon="offline-pin"></furo-icon>
                <furo-icon icon="opacity"></furo-icon>
                <furo-icon icon="open-in-browser"></furo-icon>
                <furo-icon icon="open-in-new"></furo-icon>
                <furo-icon icon="open-with"></furo-icon>
                <furo-icon icon="pageview"></furo-icon>
                <furo-icon icon="pan-tool"></furo-icon>
                <furo-icon icon="payment"></furo-icon>
                <furo-icon icon="perm-camera-mic"></furo-icon>
                <furo-icon icon="perm-contact-calendar"></furo-icon>
                <furo-icon icon="perm-data-setting"></furo-icon>
                <furo-icon icon="perm-device-information"></furo-icon>
                <furo-icon icon="perm-identity"></furo-icon>
                <furo-icon icon="perm-media"></furo-icon>
                <furo-icon icon="perm-phone-msg"></furo-icon>
                <furo-icon icon="perm-scan-wifi"></furo-icon>
                <furo-icon icon="pets"></furo-icon>
                <furo-icon icon="picture-in-picture"></furo-icon>
                <furo-icon icon="picture-in-picture-alt"></furo-icon>
                <furo-icon icon="play-for-work"></furo-icon>
                <furo-icon icon="polymer"></furo-icon>
                <furo-icon icon="power-settings-new"></furo-icon>
                <furo-icon icon="pregnant-woman"></furo-icon>
                <furo-icon icon="print"></furo-icon>
                <furo-icon icon="query-builder"></furo-icon>
                <furo-icon icon="question-answer"></furo-icon>
                <furo-icon icon="radio-button-checked"></furo-icon>
                <furo-icon icon="radio-button-unchecked"></furo-icon>
                <furo-icon icon="receipt"></furo-icon>
                <furo-icon icon="record-voice-over"></furo-icon>
                <furo-icon icon="redeem"></furo-icon>
                <furo-icon icon="redo"></furo-icon>
                <furo-icon icon="refresh"></furo-icon>
                <furo-icon icon="remove"></furo-icon>
                <furo-icon icon="remove-circle"></furo-icon>
                <furo-icon icon="remove-circle-outline"></furo-icon>
                <furo-icon icon="remove-shopping-cart"></furo-icon>
                <furo-icon icon="reorder"></furo-icon>
                <furo-icon icon="reply"></furo-icon>
                <furo-icon icon="reply-all"></furo-icon>
                <furo-icon icon="report"></furo-icon>
                <furo-icon icon="report-problem"></furo-icon>
                <furo-icon icon="restore"></furo-icon>
                <furo-icon icon="restore-page"></furo-icon>
                <furo-icon icon="room"></furo-icon>
                <furo-icon icon="rounded-corner"></furo-icon>
                <furo-icon icon="rowing"></furo-icon>
                <furo-icon icon="save"></furo-icon>
                <furo-icon icon="schedule"></furo-icon>
                <furo-icon icon="search"></furo-icon>
                <furo-icon icon="select-all"></furo-icon>
                <furo-icon icon="send"></furo-icon>
                <furo-icon icon="settings"></furo-icon>
                <furo-icon icon="settings-applications"></furo-icon>
                <furo-icon icon="settings-backup-restore"></furo-icon>
                <furo-icon icon="settings-bluetooth"></furo-icon>
                <furo-icon icon="settings-brightness"></furo-icon>
                <furo-icon icon="settings-cell"></furo-icon>
                <furo-icon icon="settings-ethernet"></furo-icon>
                <furo-icon icon="settings-input-antenna"></furo-icon>
                <furo-icon icon="settings-input-component"></furo-icon>
                <furo-icon icon="settings-input-composite"></furo-icon>
                <furo-icon icon="settings-input-hdmi"></furo-icon>
                <furo-icon icon="settings-input-svideo"></furo-icon>
                <furo-icon icon="settings-overscan"></furo-icon>
                <furo-icon icon="settings-phone"></furo-icon>
                <furo-icon icon="settings-power"></furo-icon>
                <furo-icon icon="settings-remote"></furo-icon>
                <furo-icon icon="settings-voice"></furo-icon>
                <furo-icon icon="shop"></furo-icon>
                <furo-icon icon="shop-two"></furo-icon>
                <furo-icon icon="shopping-basket"></furo-icon>
                <furo-icon icon="shopping-cart"></furo-icon>
                <furo-icon icon="sort"></furo-icon>
                <furo-icon icon="speaker-notes"></furo-icon>
                <furo-icon icon="speaker-notes-off"></furo-icon>
                <furo-icon icon="spellcheck"></furo-icon>
                <furo-icon icon="star"></furo-icon>
                <furo-icon icon="star-border"></furo-icon>
                <furo-icon icon="star-half"></furo-icon>
                <furo-icon icon="stars"></furo-icon>
                <furo-icon icon="store"></furo-icon>
                <furo-icon icon="subdirectory-arrow-left"></furo-icon>
                <furo-icon icon="subdirectory-arrow-right"></furo-icon>
                <furo-icon icon="subject"></furo-icon>
                <furo-icon icon="supervisor-account"></furo-icon>
                <furo-icon icon="swap-horiz"></furo-icon>
                <furo-icon icon="swap-vert"></furo-icon>
                <furo-icon icon="swap-vertical-circle"></furo-icon>
                <furo-icon icon="system-update-alt"></furo-icon>
                <furo-icon icon="tab"></furo-icon>
                <furo-icon icon="tab-unselected"></furo-icon>
                <furo-icon icon="text-format"></furo-icon>
                <furo-icon icon="theaters"></furo-icon>
                <furo-icon icon="thumb-down"></furo-icon>
                <furo-icon icon="thumb-up"></furo-icon>
                <furo-icon icon="thumbs-up-down"></furo-icon>
                <furo-icon icon="timeline"></furo-icon>
                <furo-icon icon="toc"></furo-icon>
                <furo-icon icon="today"></furo-icon>
                <furo-icon icon="toll"></furo-icon>
                <furo-icon icon="touch-app"></furo-icon>
                <furo-icon icon="track-changes"></furo-icon>
                <furo-icon icon="translate"></furo-icon>
                <furo-icon icon="trending-down"></furo-icon>
                <furo-icon icon="trending-flat"></furo-icon>
                <furo-icon icon="trending-up"></furo-icon>
                <furo-icon icon="turned-in"></furo-icon>
                <furo-icon icon="turned-in-not"></furo-icon>
                <furo-icon icon="unarchive"></furo-icon>
                <furo-icon icon="undo"></furo-icon>
                <furo-icon icon="unfold-less"></furo-icon>
                <furo-icon icon="unfold-more"></furo-icon>
                <furo-icon icon="update"></furo-icon>
                <furo-icon icon="verified-user"></furo-icon>
                <furo-icon icon="view-agenda"></furo-icon>
                <furo-icon icon="view-array"></furo-icon>
                <furo-icon icon="view-carousel"></furo-icon>
                <furo-icon icon="view-column"></furo-icon>
                <furo-icon icon="view-day"></furo-icon>
                <furo-icon icon="view-headline"></furo-icon>
                <furo-icon icon="view-list"></furo-icon>
                <furo-icon icon="view-module"></furo-icon>
                <furo-icon icon="view-quilt"></furo-icon>
                <furo-icon icon="view-stream"></furo-icon>
                <furo-icon icon="view-week"></furo-icon>
                <furo-icon icon="visibility"></furo-icon>
                <furo-icon icon="visibility-off"></furo-icon>
                <furo-icon icon="warning"></furo-icon>
                <furo-icon icon="watch-later"></furo-icon>
                <furo-icon icon="weekend"></furo-icon>
                <furo-icon icon="work"></furo-icon>
                <furo-icon icon="youtube-searched-for"></furo-icon>
                <furo-icon icon="zoom-in"></furo-icon>
                <furo-icon icon="zoom-out"></furo-icon>
            </furo-vertical-flex>
        </div>
    `;
    }

}

window.customElements.define('icons-demo', IconsDemo);
