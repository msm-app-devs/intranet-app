import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    /**
      Load previous employee in the store.
      @method prevEmloyee
      @param {Object} currentModel
    */
    prevEmployee(currentModel) {
      const data = this.store.peekAll('employee');
      const dataLen = this.store.peekAll('employee').length;
      const dataArr = data.toArray();
      const pos = dataArr.indexOf(currentModel.id);
      console.log(data);
      console.log(dataLen);
      console.log(dataArr);
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
