import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',

  classNames: ['intranet-notification'],

  actions: {
    /**
     * Navigate to route.
     *
     * @method navigateToRoute
     * @param model
     * @param route
     */
    navigateToRoute(navToRoute, model) {
      this.get('notificationAction')(navToRoute, model);
    }
  }
});
