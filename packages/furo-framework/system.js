import {Env} from "./environment";
import {i18n} from "./i18n";

/**
 * The init class is used to init your *Env*, the API services and the API types.
 *
 * Use the init package in the init phase of your application
 *
 * ## example init
 *
 *
 * ```javascript
 * // -- initialize application env, theme, api
 * import  {Init,Iconset} from "@furo/framework/furo.js";
 * import {Services, Types} from "@furo/specs/build/data_environment.js"
 * Init.registerApiServices(Services);
 * Init.registerApiTypes(Types);
 * //Attention: Styling is defined in main-stage
 * import {FuroBaseIcons} from "@furo/icon/iconsets/baseIcons";
 * import {MapsIcons} from "@furo/icon/iconsets/mapsIcons";
 * import {PlacesIcons} from "@furo/icon/iconsets/placesIcons";
 * import {CommunicationIcons} from "@furo/icon/iconsets/communicationIcons";
 * import {NotificationIcons} from "@furo/icon/iconsets/notificationIcons";
 * import {FuroDocIcons} from "./assets/iconset";
 * import {AvIcons} from "@furo/icon/iconsets/avIcons";
 * import {DeviceIcons} from "@furo/icon/iconsets/deviceIcons";
 * import {EditorIcons} from "@furo/icon/iconsets/editorIcons";
 * import {SocialIcons} from "@furo/icon/iconsets/socialIcons";
 * import {HardwareIcons} from "@furo/icon/iconsets/hardwareIcons";
 * import {ImageIcons} from "@furo/icon/iconsets/imageIcons";
 *
 *
 * Iconset.registerIconset("furo", FuroDocIcons);
 * Iconset.registerIconset("default", FuroBaseIcons);
 * Iconset.registerIconset("av", AvIcons);
 * Iconset.registerIconset("communication", CommunicationIcons);
 * Iconset.registerIconset("device", DeviceIcons);
 * Iconset.registerIconset("editor", EditorIcons);
 * Iconset.registerIconset("social", SocialIcons);
 * Iconset.registerIconset("places", PlacesIcons);
 * Iconset.registerIconset("notification", NotificationIcons);
 * Iconset.registerIconset("map", MapsIcons);
 * Iconset.registerIconset("hardware", HardwareIcons);
 * Iconset.registerIconset("image", ImageIcons);

 * ```
 *
 */
export class Init {

    static registerEnv(section, data) {
        Env[section] = data;
    }

    static registerApiServices(services) {
        Env.api.services = services
    }

    static registerApiTypes(types) {
        Env.api.specs = types
    }

    /**
     *
     * @param locale
     */
    static translateStaticTypeMessages(locale) {
        // read from original spec to apply locale
        if (this._raw_spec) {
            Env.api.specs = JSON.parse(this._raw_spec);
        } else {
            this._raw_spec = JSON.stringify(Env.api.specs);
        }

        for (let type in Env.api.specs) {
            for (let field in Env.api.specs[type].fields) {
                // translate static meta messages
                if (Env.api.specs[type].fields[field].meta) {

                    // translate static label text
                    if (Env.api.specs[type].fields[field].meta.label) {
                        Env.api.specs[type].fields[field].meta.label = i18n.t(Env.api.specs[type].fields[field].meta.label);
                    }
                    // translate static hint text
                    if (Env.api.specs[type].fields[field].meta.hint) {
                        Env.api.specs[type].fields[field].meta.hint = i18n.t(Env.api.specs[type].fields[field].meta.hint);
                    }
                    // translate option list if set
                    if (Env.api.specs[type].fields[field].meta.options && Env.api.specs[type].fields[field].meta.options.list && Array.isArray(Env.api.specs[type].fields[field].meta.options.list)) {
                        let size = Env.api.specs[type].fields[field].meta.options.list.length;
                        while (size--) {
                            // additional check if list object has property display_name
                            if (Env.api.specs[type].fields[field].meta.options.list[size].display_name) {
                                Env.api.specs[type].fields[field].meta.options.list[size].display_name = i18n.t(Env.api.specs[type].fields[field].meta.options.list[size].display_name);
                            }
                        }
                    }

                }
                if (Env.api.specs[type].fields[field].constraints) {
                    for (let attr in Env.api.specs[type].fields[field].constraints) {
                        if (Env.api.specs[type].fields[field].constraints.hasOwnProperty(attr)) {
                            if (Env.api.specs[type].fields[field].constraints[attr].message) {
                                Env.api.specs[type].fields[field].constraints[attr].message = i18n.t(Env.api.specs[type].fields[field].constraints[attr].message);
                            }
                        }
                    }

                }

            }
        }

    }

}

/**
 * Sys allows you to set the locale
 *
 */
export class Sys {
    static setLocale(locale) {
        //todo: checks
        console.log("Set locale from", Env.locale);
        Env.locale = locale;
        Init.translateStaticTypeMessages(Env.locale);
        console.log("to", Env.locale)
    }
}
