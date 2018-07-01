import Ember from 'ember';
import RSVP from 'rsvp';
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
    const employees = this.store.peekAll('employee');
    const genders = this.store.peekAll('gender');
    const companies = this.store.peekAll('company');
    const teams = this.store.peekAll('team');
    const positions = this.store.peekAll('position');

    return RSVP.hash({
      employees: employees || this.store.findAll('employee'),
      genders: genders || this.store.findAll('gender'),
      companies: companies || this.store.findAll('company'),
      teams: teams || this.store.findAll('team'),
      positions: positions || this.store.findAll('position')
    });
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
