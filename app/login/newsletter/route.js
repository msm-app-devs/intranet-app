import Ember from 'ember';
import RSVP from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  /**
    Fetches all `benefit` from the store.
    @method model
    @return {DS.PromiseManyArray}
  */
  model() {
    return RSVP.hash({
      newsletters: this.store.findAll('newsletter'),
    });
  },

  actions: {
    /**
      Delete newsletter.
      @method deleteNewsletter
      @param {String} newsLetterId
    */
   deleteNewsletter(newsLetterId) {
    const newsletter = this.store.peekRecord('newsletter', newsLetterId);

    newsletter.deleteRecord();

    newsletter.save()
    .then(() => {
      this.notifyUser('The newsletter has been deleted successfully', "success");
      
    })
    .catch((error) => {
      this.handleErrors(error);
    });
  }
  }
});
