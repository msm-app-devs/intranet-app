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
      Delete and save employee to the API.
      @method deleteEmployee
      @param {Object} employee
      @return {DS.PromiseManyArray}
    */
    deleteEmployee(employee) {
      employee.deleteRecord();
      employee.save();
    },

    /**
      Update and save employee to the API.
      @method deleteEmployee
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
      Create and save employee to the API.
      @method deleteEmployee
      @param {Object} employee
      @return {DS.PromiseManyArray}
    */
    createEmployee(data) {
      console.log(data);
      debugger;
      // employee.set('firstName', 'David');
      // employee.set('lastName', 'James');
      // employee.set('position', 'Senior UI Developer');
      // employee.set('Team', 'Mobile');
      // employee.createRecord();
      // employee.save();
    }
  }
});
