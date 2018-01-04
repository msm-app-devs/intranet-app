import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({
  /**
   * TransitionTo the home page.
   *
   * @method afterModel
   */
  afterModel() {
    this.transitionTo('home');
  }
});