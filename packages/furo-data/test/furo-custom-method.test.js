import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';

import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/testhelper/initEnv.js';

describe('furo-custom-method', () => {
  let customMethod;
  let dataObject;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-custom-method ƒ-bind-request-data="--doReady(*.data)"></furo-custom-method>
          <furo-data-object @-object-ready="--doReady"></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, customMethod, dataObject] = testbind.parentNode.children;
    await host.updateComplete;
    await customMethod.updateComplete;
    await dataObject.updateComplete;
  });

  it('should be a furo-custom-method', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(customMethod.nodeName.toLowerCase(), 'furo-custom-method');
    assert.equal(dataObject.nodeName.toLowerCase(), 'furo-data-object');
    done();
  });

  it('should request a custom method', done => {
    customMethod.setAttribute('service', 'ExperimentService');
    customMethod.setAttribute('method', 'release');

    customMethod.addEventListener('response', e => {
      assert.equal(e.detail.url, 'https://httpbin.org/anything');
      done();
    });
    customMethod.htsIn([
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'release',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
    ]);
    customMethod.trigger();
  });

  it('should request a custom method with body', done => {
    customMethod.setAttribute('service', 'ExperimentService');
    customMethod.setAttribute('method', 'release');
    dataObject.setAttribute('type', 'experiment.ExperimentEntity');

    customMethod.addEventListener('response', e => {
      assert.equal(e.detail.url, 'https://httpbin.org/anything');
      done();
    });
    customMethod.htsIn([
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'release',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'cancel',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
    ]);
    dataObject.addEventListener('object-ready', () => {
      dataObject.data.data.description._value = 'updated desc';

      customMethod.triggerWithBody(dataObject.data.value.data);
    });
  });

  it('trigger should request a custom method with body if dataObject is set', done => {
    customMethod.setAttribute('service', 'ExperimentService');
    customMethod.setAttribute('method', 'release');
    dataObject.setAttribute('type', 'experiment.ExperimentEntity');

    customMethod.addEventListener('response', e => {
      assert.equal(e.detail.url, 'https://httpbin.org/anything');
      done();
    });
    customMethod.htsIn([
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'release',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'cancel',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
    ]);
    dataObject.addEventListener('object-ready', () => {
      dataObject.data.data.description._value = 'updated desc';

      customMethod.trigger();
    });
  });

  it('should cancel a pending request if a new request is started', done => {
    customMethod.setAttribute('service', 'ExperimentService');
    customMethod.setAttribute('method', 'release');
    dataObject.setAttribute('type', 'experiment.ExperimentEntity');

    customMethod.addEventListener('response', () => {
      done();
    });
    customMethod.htsIn([
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'release',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'cancel',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
    ]);
    dataObject.addEventListener('object-ready', () => {
      dataObject.data.data.description._value = 'updated desc';

      customMethod.triggerWithBody(dataObject.data.value.data);
      customMethod.triggerWithBody(dataObject.data.value.data);
      customMethod.triggerWithBody(dataObject.data.value.data);
      customMethod.triggerWithBody(dataObject.data.value.data);
      customMethod.triggerWithBody(dataObject.data.value.data);
      customMethod.triggerWithBody(dataObject.data.value.data);
    });
  });

  it('should fire event if hts is not available', done => {
    customMethod.setAttribute('service', 'ExperimentService');
    customMethod.setAttribute('method', 'release');

    customMethod.addEventListener('missing-hts-release', () => {
      done();
    });
    customMethod.htsIn([
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'suspend',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
      {
        href: 'https://httpbin.org/anything',
        method: 'Post',
        rel: 'cancel',
        type: 'experiment.ExperimentEntity',
        service: 'ExperimentService',
      },
    ]);

    customMethod.trigger();
  });
});
