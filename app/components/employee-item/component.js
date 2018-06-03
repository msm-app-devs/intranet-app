import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  
  actions: {
    /**
     * Navigate to the selected employee.
     *
     * @method visitEmployee
     * @param {Object} employee
     */
    visitEmployee(employee) {
      this.transitionTo('employees.employee', employee.id);
    }
  }
});
