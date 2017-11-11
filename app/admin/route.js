import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    /**
      Update and save data to the API.
      @method deleteEmployee
      @param {Object} data
      @return {DS.PromiseManyArray}
    */
    login(data) {
      data.set('firstName', 'David');
      data.set('lastName', 'James');
      data.set('position', 'Senior UI Developer');
      data.set('Team', 'Mobile');
      data.save();
    }
  }
});
