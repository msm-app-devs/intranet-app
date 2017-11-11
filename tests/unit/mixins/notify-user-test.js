import Ember from 'ember';
import NotifyUserMixin from 'intranet-app/mixins/notify-user';
import { module, test } from 'qunit';

module('Unit | Mixin | notify user');

// Replace this with your real tests.
test('it works', function(assert) {
  let NotifyUserObject = Ember.Object.extend(NotifyUserMixin);
  let subject = NotifyUserObject.create();
  assert.ok(subject);
});
