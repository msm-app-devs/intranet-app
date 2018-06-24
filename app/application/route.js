import Ember from 'ember';
import RSVP from 'rsvp';
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
    return RSVP.hash({
      employees: this.store.findAll('employee').then(result => {
        return result.filterBy('hasBirthday', true);
      }),
      genders: this.store.findAll('gender'),
      companies: this.store.findAll('company'),
      teams: this.store.findAll('team'),
      positions: this.store.findAll('position'),
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
    },

    /**
      Navigate to PDF viewer.
      @method viewPdf
      @param {String} pdfID
      @param {Object} model
    */
    viewPdf(pdfID) {
      this.transitionTo("pdf-viewer", pdfID);
    }
  }
});
