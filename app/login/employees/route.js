import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  
  // /**
  //  * Session service injection
  //  *
  //  * @property session
  //  * @type SessionService
  //  */
  // session: Ember.inject.service('session'),

  // /**
  //   Verify if the session is expired.
  // */
  // beforeModel() {
  //   return this.store.findRecord('admin', 1)
  //   .then(() => {
  //   })
  //   .catch((error) => {
  //     this.get('session').invalidate();
  //   });
  // },
  
  /**
    Fetches all `employee` from API.
    @method model
    @return {DS.PromiseManyArray}
  */
  model() {
    return this.store.findAll('employee');
    // .then(result => {
    //   return result.toArray().reverse();
    // });
  },

  actions: {
    /**
     *  Gather image data and pass it to the update method.
     *
     * @method setAvatar
     * @param {Object} data
     * @param {Object} file
     */
    setAvatar (data, file) {
      data.avatar = file;
      file.readAsDataURL().then(url => {
        data.url = url;
        data.avatar.url = url;
      });
    }
  }
});
