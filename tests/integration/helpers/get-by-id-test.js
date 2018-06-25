
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('get-by-id', 'helper:get-by-id', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{get-by-id inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

