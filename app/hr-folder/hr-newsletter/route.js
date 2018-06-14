import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  /**
    Fetches all `benefit` from the store.
    @method model
    @return {DS.PromiseManyArray}
  */
  model() {
    return RSVP.hash({
      newsletters: this.store.findAll('newsletter'),
      companies: this.store.findAll('company')
      // newsletterPDFs: this.store.findAll('newsletterPDF')
    });
  },

  actions: {
   
  }
});
