import Ember from 'ember';

var eA = Ember.A;
// import RSVP from 'rsvp';
export default Ember.Component.extend({
  data: {},
  example1Attributes: eA([
    { value: '1st', label: 'First' },
    { value: '2nd', label: 'Second' },
    { value: '3rd', label: 'Third' },
    { value: '4th', label: 'Fourth' }
  ]),
  
  init() {
    this._super(...arguments);
    this.set('data', {});
  },
  emailValidation: [{
    message: 'Please provide email in a valid format',
    validate: (inputValue) => {
      let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(inputValue);
    }
  }],
  
  actions: {
    checkboxesListUpdate (fieldName, value) {
      this.set(fieldName, value.mapBy('value').join(', '));
    },
    /**
      Send createEmployee action and clear employee form data.
      @method createEmployee
    */
   createEmployee(){
      const data = this.get('data');

      this.sendAction('createEmployee', data);
      this.set('data', {});
    }
  }
});

