import Ember from 'ember';

export default Ember.Controller.extend({
  attrs: {},

  /**
   * Session service injection
   *
   * @property session
   * @type SessionService
   */
  session: Ember.inject.service('session'),

  actions: {
    filterByAll(param) {
      if (param !== '') {
        const filterData = [];
        this.get('store').peekAll('employee').toArray().forEach(employee => {
          const fullDetails = employee.get('firstName').toLowerCase() + ' ' + employee.get('lastName').toLowerCase() + ' ' + employee.get('position').toLowerCase() + ' ' + employee.get('team').toLowerCase() + ' ' + employee.get('company').toLowerCase() + ' ' + employee.get('education').toLowerCase() + ' ' + employee.get('expertise').toLowerCase() + ' ' + employee.get('skills').toLowerCase() + ' ' + employee.get('languages').toLowerCase() + ' ' + employee.get('hobbies').toLowerCase();

          if (fullDetails.indexOf(param.toLowerCase()) !== -1) {
            filterData.push(employee);
          }
        });

        return filterData;
      } else {
        return this.get('store').peekAll('employee');
      }
    }
  }
});
