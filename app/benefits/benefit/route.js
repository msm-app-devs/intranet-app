import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
/**
  /**
    Fetches single `benefit` from the store.
    @method model
    @return {DS.PromiseManyArray}
  */
  model(params) {
    return RSVP.hash({
      benefit: this.get('store').findRecord('benefit', params.benefit_id)
    });
  }
});
