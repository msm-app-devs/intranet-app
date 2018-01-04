import Ember from 'ember';

export default Ember.Component.extend({
  /**
   * Session service injection
   *
   * @property session
   * @type SessionService
   */
  session: Ember.inject.service('session'),

  actions: {
    /**
     *  Invalidate user session.
     *
     * @method invalidateSession
     */
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
