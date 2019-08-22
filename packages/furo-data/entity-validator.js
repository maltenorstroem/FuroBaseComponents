import {LitElement, html} from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `entity-validator` validates a single field and sets the corresponding metas
 *
 * > This component is deprecated, use [furo-data-object](furo-data-object) instead
 * >
 * > This component will be removed in Q4 2019 (somewhere in Q4, not end of Q4).
 * > You should receive console deprecation messages with deprecation warnings since  **@furo/data#0.50.2** or **@furo/collection#0.20.20**.
 *
 * @customElement
 * @demo demo/index.html
 * @appliesMixin FBP
 */
class EntityValidator extends FBP(LitElement) {

  constructor() {
    super();
    this.checks = {};
    this._initChecks();

    console.warn("entity-validator is deprecated, use furo-entity-validator instead");
    console.warn("This component will be removed in Q4-2019",this);
  }

  _initChecks() {
    this.checks.string = {
      min: (field) => {
        let constraint = field._constraints.min;
        if (field.value.length < constraint.value) {
          if(constraint.message){
            return {"message": constraint.message, constraint: "min"}
          }
          return {"message": "Mindestens " + constraint.value + " Zeichen", constraint: "min"}
        }
        return null;
      },
      max: (field) => {
        let constraint = field._constraints.max;
        if (field.value.length > constraint.value) {
          if(constraint.message){
            return {"message": constraint.message, constraint: "max"}
          }
          return {"message": "Maximal " + constraint.value + " Zeichen", constraint: "max"}
        }
        return null;
      },
      mandatory: field => {
        let constraint = field._constraints.required;
        if (field.value.length === 0) {
          return {"message": "Eingabe erforderlich", constraint: "mandatory"}
        }
        return null;
      },
    };

    this.checks.int = {
      min: (field) => {
        let constraint = field._constraints.min;
        if (field.value < constraint.value) {
          return {"message": "Mindestens " + constraint.value + " Zeichen", constraint: "min"}
        }
        return null;
      },
      max: (field) => {
        let constraint = field._constraints.max;
        if (field.value > constraint.value) {
          if(constraint.message){
            return {"message": constraint.message, constraint: "max"}
          }
          return {"message": "Maximal " + constraint.value + " Zeichen", constraint: "max"}
        }
        return null;
      }
    };
  }


  bindData(fields) {
    let self = this;
    // this.validator ist hier wegen dem hoisting...
    this.validator = (e) => {

      let field = e.target;
      let type = field._spec.type;

      // nur prüfen wenn field constraints  und checker existieren
      if (field._constraints && this.checks[type]) {
        let err;
        for (let constraint in field._constraints) {
          if (this.checks[type][constraint]) {
            err = this.checks[type][constraint](field);
          }
          if (err) {
            field._setInvalid(err);
            // bei erstem fehler aufhören
            return
          } else {
            // nur zurücksetzen wenn das field ungültig war
            if (!field._isValid) {
              field._clearInvalidity();
            }
          }
        }


      }
    };

    fields.addEventListener('field-value-changed', this.validator);
    this._FBPTriggerWire('--dataInjected', fields);

    /** TODO: eventqueue wie in FBP aufbauen??
     setTimeout(()=>{
      //check all field on init
      fields.__childNodes.map(e=>{
        let field = {target:e};
        this.validator(field)
      });
    },16);
     */
  }


}

window.customElements.define('entity-validator', EntityValidator);
