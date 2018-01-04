import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  /**
    Fetches all `news` from the store.
    @method model
    @return {DS.PromiseManyArray}
  */
  model() {
    return RSVP.hash({
      news: this.store.findAll('news')
    });
  }
});
