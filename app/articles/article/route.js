import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
/**
   * Route lifecycle hook.
   *
   * @method beforeModel
   * @return {Promise}
   */
  beforeModel() {
    return this.store.peekAll('news').toArray().length ?  this.store.peekAll('news') : this.store.findAll('news');
  },

  /**
    Fetches all `articles` from the store.
    @method model
    @return {DS.PromiseManyArray}
  */
  model(params) {
    return RSVP.hash({
      article: this.get('store').findRecord('news', params.article_id)
    });
  },
  actions: {
    /**
      Visit home page.
      @method visitLastRoute
      @param {Object} data
      @param {String} imgName
      @param {Object} file
    */
   visitLastRoute () {
    this.transitionTo("home");
  }
}
  
});
