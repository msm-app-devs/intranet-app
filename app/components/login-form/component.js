import Ember from 'ember';
import NotifyUser from '../../mixins/notify-user';
import ErrorHandler from '../../mixins/handle-errors';

export default Ember.Component.extend(NotifyUser, ErrorHandler, {
  data: {},

  /**
   * Session service injection
   *
   * @property session
   * @type SessionService
   */
  session: Ember.inject.service('session'),

  actions: {
    /**
      Authenicate to the API.
      @method authenticate
      @param {Object} data
      @return {DS.PromiseManyArray}
    */
    authenticate(data) {
      const identification = data.identification;
      const password = data.password;

      this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
        this.notifyUser(reason.errors.title, "error");
        // this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
