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

  _getFullData(employee) {
    return employee.get('firstName').toLowerCase() + ' ' + employee.get('lastName').toLowerCase() + ' ' + employee.get('position.optionName').toLowerCase() + ' ' + employee.get('team.optionName').toLowerCase() + ' ' + employee.get('company.optionName').toLowerCase() + ' ' + employee.get('education').toLowerCase() + ' ' + employee.get('expertise').toLowerCase() + ' ' + employee.get('skills').toLowerCase() + ' ' + employee.get('languages').toLowerCase() + ' ' + employee.get('hobbies').toLowerCase();
  },

  _getDataByNames(employee) {
    return employee.get('firstName').toLowerCase() + ' ' + employee.get('lastName').toLowerCase();
  },

  _getDataByEducation(employee) {
    return employee.get('education').toLowerCase();
  },

  _getDataByHobbies(employee) {
    return employee.get('hobbies').toLowerCase();
  },

  actions: {
    filterByAll(data, filters) {
      const filteredData = [];
      let filterAll = null;
      let filterByName = null;
      let filterByEducation = null;
      let filterByHobbies = null;

      if (filters) {
        filterAll = filters[0];
        filterByName = filters[1];
        filterByEducation = filters[2];
        filterByHobbies = filters[3];
      }

      if (data !== '') {
        this.get('store').peekAll('employee').toArray().forEach(employee => {
          let fullData = '';

          if (filterAll) {
            fullData = fullData + this._getFullData(employee);
          }

          if (filterByName) {
            fullData = fullData + this._getDataByNames(employee);
          }

          if (filterByEducation) {
            fullData = fullData + this._getDataByEducation(employee);
          }

          if (filterByHobbies) {
            fullData = fullData + this._getDataByHobbies(employee);
          }

          if (fullData.indexOf(data.toLowerCase()) !== -1) {
            filteredData.push(employee);
          }
        });

        return filteredData;
      } else {
        return this.get('store').peekAll('employee');
      }
    }
  }
});
