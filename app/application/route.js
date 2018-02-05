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
  setupController(controller /*, model*/) {
    controller.setProperties({
      'birthdays': this._birthdayChecker()
    });
  },

  /**
    Return array of birthdays if find a member with birthday

    @method _birthdayChecker
    @private
  */
  _birthdayChecker() {
    const birthdays = this.store.peekAll('employee') ? this.store.peekAll('employee').toArray() : [];

    return birthdays;
  },

  actions: {
    /**
      Navigate to specific route.

      @method visitRoute
      @param {Object} model
      @param {String} route
    */
    visitRoute(navToRoute, model) {
      this.transitionTo(navToRoute, model.get('id'));
    }
  }
});
