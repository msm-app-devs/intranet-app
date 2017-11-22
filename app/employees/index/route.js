import Ember from 'ember';
import RSVP from 'rsvp';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
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
