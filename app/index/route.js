import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({
  /**
    transitionTo the home page.

    @method afterModel
    @param {Object} locations Collection of `LocationModel`
  */
  afterModel() {
    this.transitionTo('home');
  }
});