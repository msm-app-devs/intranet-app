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
      const prevEmployeePosition = data.toArray()[currentEmployeePosition - 1];

      // this.set('model.employee', prevEmployeePosition);
      this.transitionToRoute('employees.employee', prevEmployeePosition.id);
    },

    /**
      Load next employee in the store.
      @method nextEmployee
      @param {Object} currentEmployee
    */
    nextEmployee(currentEmployee) {
      const data = this.store.peekAll('employee');
      const currentEmployeePosition = data.indexOf(currentEmployee);
      const nextEmployeePosition = data.toArray()[currentEmployeePosition + 1];

      // this.set('model.employee', nextEmployeePosition);
      this.transitionToRoute('employees.employee', nextEmployeePosition.id);
    }
  }
});
