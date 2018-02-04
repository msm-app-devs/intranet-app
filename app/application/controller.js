import Ember from 'ember';

export default Ember.Controller.extend({
  birthdays: [],

  birthdayCounter: Ember.computed('birthdays.[]', function() {
    console.log('birthday', 'computed', this.get('birthdays').length);
    return this.get('birthdays').length;
  })
});
