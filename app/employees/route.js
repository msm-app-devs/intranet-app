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
      employees: this.store.findAll('employee'),
      // news: this.store.findAll('news')
    });
  },

  /**
    Set locations for display, and default to picking the first
    @method setupController
    @param {LocationsController} controller
    @param {LocationModel[]} model
    @public
  */
  setupController(controller, model) {
    controller.setProperties({
      'attrs.employees': model.employees
    });
  },

  actions: {
    /**
      Delete and save employee to the API.
      @method deleteEmployee
      @param {Object} employee
      @return {DS.PromiseManyArray}
    */
    deleteEmployee(employee) {
      employee.deleteRecord();
      employee.save();
      this.notifyUser('A member is deleted successfully', "success");
    },

    /**
      Update and save employee to the API.
      @method updateEmployee
      @param {Object} employee
      @return {DS.PromiseManyArray}
    */
    updateEmployee(employee) {
      employee.set('firstName', 'David');
      employee.set('lastName', 'James');
      employee.set('position', 'Senior UI Developer');
      employee.set('Team', 'Mobile');
      employee.save();
    },

    /**
      Navigate to specific employee route.
      @method visitEmployee
      @param {Object} employee
      @return {DS.PromiseManyArray}
    */
    visitEmployee(employee) {
      this.transitionTo('employee', employee);
    }
  }
});
