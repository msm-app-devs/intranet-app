import Ember from 'ember';
import HandleErrorsMixin from 'intranet-app/mixins/handle-errors';
import { module, test } from 'qunit';

module('Unit | Mixin | handle errors');

// Replace this with your real tests.
test('it works', function(assert) {
  let HandleErrorsObject = Ember.Object.extend(HandleErrorsMixin);
  let subject = HandleErrorsObject.create();
  assert.ok(subject);
});
