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
      benefits: this.store.findAll('benefit')
    });
  },

  actions: {
    /**
      Navigate to specific benefit route.
      @method visitEmployee
      @param {Object} employee
      @return {DS.PromiseManyArray}
    */
    visitBenefit(benefit) {
      this.transitionTo('benefits.benefit', benefit.id);
    }
  }
});
