import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['employee-birthday'],

  click(event) {
    console.log(event);
  }
});
