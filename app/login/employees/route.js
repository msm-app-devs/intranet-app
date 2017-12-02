import Ember from 'ember';
import RSVP from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  /**
    Fetches all `employee` from API.
    @method model
    @return {DS.PromiseManyArray}
  */
  model() {
    return this.store.findAll('employee');
  }
});
