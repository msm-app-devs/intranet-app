import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  /**
    Fetches all `employees` from the store.
    @method model
    @return {DS.PromiseManyArray}
  */
  model(params) {
    return RSVP.hash({
      employees: this.store.findAll('employee'),
      employee: this.get('store').findRecord('employee', params.employee_id)
    });
  }
});
