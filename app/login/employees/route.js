import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  /**
    Fetches all `employee` from API.
    @method model
    @return {DS.PromiseManyArray}
  */
  model() {
    return this.store.findAll('employee');
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
