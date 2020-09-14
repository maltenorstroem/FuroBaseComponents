import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks

describe('furo-ui5-notification', () => {
  let element;
  let notificationList;
  let notification;
  let host;
  const grpcMessage = {
    code: 400,
    message: 'Request had invalid credentials.',
    status: 'SOMETHING',
    details: [
      {
        '@type': 'type.googleapis.com/google.rpc.LocalizedMessage',
        message: 'Some localized message\n\nwith newline',
        locale: 'de-ch',
      },
      {
        '@type': 'type.googleapis.com/google.rpc.LocalizedMessage',
        message: 'Other localized message with newline',
        locale: 'de-ch',
      },
      {
        '@type': 'type.googleapis.com/google.rpc.BadRequest',
        message: 'This should not be visible',
        locale: 'de-ch',
        field_violations: [],
      },
    ],
  };
  const notificationsMessage = [
    {
      id: 1,
      display_name: '',
      heading: 'heading 1',
      message_priority: 'High',
      category: '',
      category_priority: '',
      actions: [
        {
          icon: 'accept',
          command: 'accept',
          text: 'accept',
        },
        {
          icon: 'message-error',
          command: 'reject',
          text: 'Reject',
        },
      ],
      message:
        'Markdown | Less | Pretty\n--- | --- | ---\n*Still* | `renders` | **nicely**\n1 | 2 | 3',
    },
    {
      id: 2,
      display_name: '',
      heading: 'heading 2',
      message_priority: 'High',
      category: '',
      category_priority: '',
      actions: [
        {
          icon: 'accept',
          command: 'accept',
          text: 'accept',
        },
        {
          icon: 'message-error',
          command: 'reject',
          text: 'Reject',
        },
      ],
      message:
        'Markdown | Less | Pretty\n--- | --- | ---\n*Still* | `renders` | **nicely**\n1 | 2 | 3',
    },
    {
      id: 3,
      display_name: '',
      heading: 'heading 3',
      message_priority: 'Low',
      category: '',
      category_priority: '',
      actions: [
        {
          icon: 'accept',
          command: 'accept',
          text: 'accept',
        },
        {
          icon: 'message-error',
          command: 'reject',
          text: 'Reject',
        },
      ],
      message:
        'Markdown | Less | Pretty\n--- | --- | ---\n*Still* | `renders` | **nicely**\n1 | 2 | 3',
    },
  ];

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-notification-list-display></furo-ui5-notification-list-display>
          <furo-ui5-notification></furo-ui5-notification>
          <div></div>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, notificationList, notification, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
    await notification.updateComplete;
    await notificationList.updateComplete;
  });

  it('should be a furo-ui5-notification', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(notification.nodeName.toLowerCase(), 'furo-ui5-notification');
    done();
  });

  // axeReport a11y tests
  it('a11y', () => axeReport(notification));

  it('should handle grpc error objects', done => {
    notification.parseGrpcStatus(grpcMessage);

    setTimeout(() => {
      const items = notificationList.shadowRoot.querySelectorAll('p');

      assert.equal(items[0].innerHTML, 'Some localized message');
      assert.equal(items[1].innerHTML, 'with newline');
      assert.equal(items[2].textContent, 'Other localized message with newline');
      assert.equal(items.length, 3);

      done();
    }, 0);
  });

  it('should handle notification messages ', done => {
    notification.injectNotificationCollection(notificationsMessage);

    setTimeout(() => {
      const items = notificationList.shadowRoot.querySelectorAll('table');
      assert.equal(items.length, 3);
      done();
    }, 0);
  });

  it('should send notification-closed event after clicking close button', done => {
    notification.parseGrpcStatus(grpcMessage);

    notification.addEventListener('notification-closed', () => {
      done();
    });

    setTimeout(() => {
      const items = notificationList.shadowRoot
        .querySelectorAll('ui5-li-notification')[0]
        .shadowRoot.querySelectorAll('ui5-button');
      items[0].click();
    }, 0);
  });

  it('should send notification-custom-action event after clicking custom action button', done => {
    notification.injectNotificationCollection(notificationsMessage);

    notification.addEventListener('notification-custom-action', () => {
      done();
    });

    setTimeout(() => {
      notificationList.target._customAction('reject');
    }, 0);
  });

  it('should send notification-custom-action-`commandName` event after clicking custom action button', done => {
    notification.injectNotificationCollection(notificationsMessage);

    notification.addEventListener('notification-custom-action-reject', () => {
      done();
    });

    setTimeout(() => {
      notificationList.target._customAction('reject');
    }, 0);
  });
});
