import Ember from 'ember';

export default Ember.Component.extend({
  attrs: {

  },

  actions: {
    visitEmployee(employee) {
      this.transitionTo('employees.employee', employee.id);
    }
  }
});
