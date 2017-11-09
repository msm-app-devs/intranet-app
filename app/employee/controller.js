import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    /**
      Load previous employee in the store.
      @method prevEmloyee
      @param {Object} currentEmployee
    */
    prevEmployee(currentEmployee) {
      const data = this.store.peekAll('employee');
      const currentEmployeePosition = data.indexOf(currentEmployee);
      const prevEmployeePosition = data.toArray()[currentEmployeePosition - 1].get('id');

      // console.log(this.get('model'));
      // this.set('model.employee', prevEmployeePosition);
      this.transitionToRoute('employee', prevEmployeePosition);
    },

    /**
      Load next employee in the store.
      @method nextEmployee
      @param {Object} currentEmployee
    */
    nextEmployee(currentEmployee) {
      const data = this.store.peekAll('employee');
      const currentEmployeePosition = data.indexOf(currentEmployee);
      const nextEmployeeId = data.toArray()[currentEmployeePosition + 1].get('id');

      // console.log(this.get('model'));
      // this.set('model.employee', nextEmployeeId);
      this.transitionToRoute('employee', nextEmployeeId);
    }
  }
});
