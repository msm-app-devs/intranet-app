import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  /**
    Fetches all `newsletter` from the store.
    @method model
    @return {DS.PromiseManyArray}
  */
  model(params) {
    return RSVP.hash({
      newsletter: this.get('store').findRecord('newsletter', params["pdf-viewer_id"])
    });
  }
});
