import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByName(param) {
      if (param !== '') {
        const filterData = [];
        this.get('store').peekAll('employee').toArray().forEach(employee => {
          const fullName = employee.get('firstName').toLowerCase() + ' ' + employee.get('lastName').toLowerCase();

          if (fullName.indexOf(param.toLowerCase()) !== -1) {
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
