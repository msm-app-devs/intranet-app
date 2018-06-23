import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('newsletter-controls', 'Integration | Component | newsletter controls', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{newsletter-controls}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#newsletter-controls}}
      template block text
    {{/newsletter-controls}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
