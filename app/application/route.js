import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

/**
  Initial entry point for the app after initialization. Renders the application
  template.
  @class ApplicationRoute
  @extends Ember.Route
  @module Application
*/
export default Ember.Route.extend(ApplicationRouteMixin, {
    /**
    Fetches all `employee` and 'news' from the store.

    @method model
    @return {DS.PromiseManyArray}
  */
  model() {
    return Ember.RSVP.hash({
      employees: this.store.findAll('employee').then(result => {
        return result.filterBy('hasBirthday', true);
      }),
      news: this.store.findAll('news')
    });
  },

  actions: {
    /**
      Navigate to specific route.
      TO DO: Add check if model is empty!
      @method visitRoute
      @param {Object} model
      @param {String} route
    */
    visitRoute(navToRoute, model) {
      this.transitionTo(navToRoute, model.get('id'));
    }
  }
});
