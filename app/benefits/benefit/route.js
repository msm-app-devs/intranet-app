import Ember from 'ember';
import RSVP from 'rsvp';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
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
