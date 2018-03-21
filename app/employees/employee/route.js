import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
/**
   * Route lifecycle hook.
   *
   * @method beforeModel
   * @return {Promise}
   */
  beforeModel() {
    return this.store.peekAll('employee').toArray().length ?  this.store.peekAll('employee') : this.store.findAll('employee');
  },

  /**
    Fetches all `employees` from the store.
    @method model
    @return {DS.PromiseManyArray}
  */
  model(params) {
    return RSVP.hash({
      employee: this.get('store').findRecord('employee', params.employee_id)
    });
  }
});
