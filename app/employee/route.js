import Ember from 'ember';

export default Ember.Route.extend({
  /**
    Fetches all `employee` from the store.
    @method model
    @return {DS.PromiseManyArray}
  */
  model(params) {
    return this.get('store').findRecord('employee', params.employee_id);
  },

  actions: {
    /**
      Load previous employee in the store.
      @method prevEmloyee
      @param {Object} currentModel
    */
    prevEmployee(currentModel) {
      console.log(currentModel);
    },

    /**
      Load next employee in the store.
      @method nextEmployee
      @param {Object} currentModel
    */
    nextEmployee(currentModel) {
      console.log(currentModel);
    }
  }
});
