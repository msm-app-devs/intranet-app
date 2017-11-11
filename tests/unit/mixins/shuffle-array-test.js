import Ember from 'ember';
import ShuffleArrayMixin from 'intranet-app/mixins/shuffle-array';
import { module, test } from 'qunit';

module('Unit | Mixin | shuffle array');

// Replace this with your real tests.
test('it works', function(assert) {
  let ShuffleArrayObject = Ember.Object.extend(ShuffleArrayMixin);
  let subject = ShuffleArrayObject.create();
  assert.ok(subject);
});
