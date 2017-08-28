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
  }
});
