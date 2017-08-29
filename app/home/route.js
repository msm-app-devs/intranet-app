import Ember from 'ember';
// const {
//   Route,
//   RSVP,
//   RSVP: { hash },
//   inject: { service }
// } = Ember;

export default Ember.Route.extend({
  /**
    Fetches all `employee` from the store.
    @method model
    @return {DS.PromiseManyArray}
  */
  model() {
    return this.store.findAll('employee');
  },

  /**
    set locations for display, and default to picking the first
    @method setupController
    @param {LocationsController} controller
    @param {LocationModel[]} model
    @public
  */
  setupController(controller, model) {
    controller.setProperties({
      'attrs.employees': model
    });
  },

  actions: {
    /**
      Delete employee from the store.
      @method deleteEmployee
      @param {Object} employee
      @return {DS.PromiseManyArray}
    */
    deleteEmployee(employee) {
      employee.deleteRecord();
      employee.save();
    },
    /**
      Update employee from the store.
      @method deleteEmployee
      @param {Object} employee
      @return {DS.PromiseManyArray}
    */
    updateEmployee(employee) {
      employee.set('firstName', 'Ivan');
      employee.save();
    }
  }
});
