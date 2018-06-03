import Ember from 'ember';

export default Ember.Component.extend({
  data: {},

  init() {
    this._super(...arguments);
    this.set('data', {});
  },

  actions: {
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

