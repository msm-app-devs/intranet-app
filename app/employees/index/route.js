import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  /**
    Fetches all `employee` from the store.
    @method model
    @return {DS.PromiseManyArray}
  */
  model() {
    return RSVP.hash({
      employees: this.store.findAll('employee')
    });
  },

  actions: {
    /**
      Navigate to specific employee route.
      @method visitEmployee
      @param {Object} employee
      @return {DS.PromiseManyArray}
    */
    visitEmployee(employee) {
      this.transitionTo('employees.employee', employee.id);
    }
  }
});
