import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-get-clipboard', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-get-clipboard></furo-get-clipboard>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
    navigator.clipboard.readText = () =>
      new Promise(resolve => {
        resolve('SUCCESS');
      });
  });

  it('should be a furo-get-clipboard', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-get-clipboard');
    done();
  });

  // axeReport a11y tests
  it('a11y', () => axeReport(element));

  it('should return the clipboard content on content event', done => {
    element.addEventListener('content', d => {
      assert.equal(d.detail, 'SUCCESS');
      done();
    });

    element.trigger();
  });

  it('should be a furo-get-clipboard', done => {
    assert.equal(element.nodeName.toLowerCase(), 'furo-get-clipboard');
    done();
  });
});
