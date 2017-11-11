import Ember from 'ember';

export default Ember.Route.extend({
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

      this.get('session').authenticate('authenticator:custom', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
