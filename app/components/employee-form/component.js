import Ember from 'ember';

// import RSVP from 'rsvp';
export default Ember.Component.extend({
  data: {},

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
    /**
      Send createEmployee action and clear employee form data.
      @method createEmployee
    */
   createEmployee(){
      const data = this.get('data');
      
      data.gender = data.gender.id;
      data.company = data.company.id;
      data.team = data.team.id;
      data.position = data.position.id;
      this.sendAction('createEmployee', data);
      this.set('data', {});
    }
  }
});

