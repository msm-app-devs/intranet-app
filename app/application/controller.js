import Ember from 'ember';

export default Ember.Controller.extend({
  birthdays: [],

  birthdayCounter: Ember.computed('birthdays.[]', function() {
    return this.get('birthdays').length;
  })
});
