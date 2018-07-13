import Ember from 'ember';

// import RSVP from 'rsvp';
export default Ember.Component.extend({
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
    showModalDialog(action) {
      this.sendAction('showModalDialog', this.get('data'), action);
    }
  }
});

