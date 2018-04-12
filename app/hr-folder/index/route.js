import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  /**
    Fetches all `employee` from the store.
    @method model
    @return {DS.PromiseManyArray}
  */
  model() {
    // return RSVP.hash({
    //   employees: this.store.findAll('employee')
    // });
  },

  actions: {
 
  }
});
