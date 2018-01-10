import Ember from 'ember';
import NotifyUser from '../mixins/notify-user';

export default Ember.Mixin.create(NotifyUser, {
  /**
   * Session service injection
   *
   * @property session
   * @type SessionService
   */
  session: Ember.inject.service('session'),

  handleErrors: function (error) {
    // dump an error object to see it's structure
    // console.log(error);
    if (error) {
      error.errors.forEach((error) => {
        if (error.title !== undefined && error.title !== '') {
          this.notifyUser('Your request has been rejected.' + error.title + '. Please try again.', "error");
        }
        
        // trigger invalide method if token is being expired
        if (error.invalidate) {
          this.get('session').invalidate();
        }
      });
    }
    // use if rename mixin to handle-request with params and success msg
    // else {
    //     this.notifyUser('Request has been processed successfully.', "success");
    // }
  }
});