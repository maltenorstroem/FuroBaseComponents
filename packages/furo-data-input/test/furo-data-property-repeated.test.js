import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';

import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-data-property-repeated', () => {
  let dataProperty;
  let host;
  let entityObject;
  let entityAgent;
  let deeplink;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <!-- single Property -->
          <furo-data-property ƒ-bind-data="--entity(*.type_property)"></furo-data-property>
          <furo-data-object
            type="experiment.Experiment"
            @-object-ready="--entity"
            ƒ-inject-raw="--response(*.data)"
          ></furo-data-object>
          <furo-deep-link service="ExperimentService" @-hts-out="--hts"></furo-deep-link>
          <furo-entity-agent
            service="ExperimentService"
            ƒ-hts-in="--hts"
            ƒ-load="--hts"
            @-response="--response"
          >
          </furo-entity-agent>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    if (testbind.parentNode.children.length === 5) {
      [, dataProperty, entityObject, deeplink, entityAgent] = testbind.parentNode.children;
    }

    if (testbind.parentNode.children.length === 6) {
      [, , dataProperty, entityObject, deeplink, entityAgent] = testbind.parentNode.children;
    }

    await host.updateComplete;

    await dataProperty.updateComplete;
    await entityAgent.updateComplete;
    await entityObject.updateComplete;
    await deeplink.updateComplete;
  });

  it('should be a furo-data-property', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataProperty.nodeName.toLowerCase(), 'furo-data-property');
    assert.equal(entityAgent.nodeName.toLowerCase(), 'furo-entity-agent');
    assert.equal(entityObject.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(deeplink.nodeName.toLowerCase(), 'furo-deep-link');
    done();
  });

  it('should bind data to repeated Property', done => {
    entityObject.addEventListener('data-injected', () => {
      setTimeout(() => {
        assert.equal(dataProperty.field.repeats[1].data.year._value, '2022');
        assert.equal(dataProperty.field.repeats[2].data.data._value, '34.23');
        done();
      }, 5);
    });
    deeplink.qpIn({ exp: 1 });
  });
});
