import Ember from 'ember';
import notifyUser from '../../mixins/notify-user';

export default Ember.Route.extend(notifyUser, {
  actions: {
    /**
      Create and save employee to the API.
      @method deleteEmployee
      @param {Object} employee
      @return {DS.PromiseManyArray}
    */
    createEmployee(data) {
      const employee = this.store.createRecord('employee', {
        firstName: data.firstName,
        lastName: data.lastName,
        position: data.position,
        team: data.team,
        startDate: data.startDate,
        birthday: data.birthday
      });
      employee.save();
      this.notifyUser('New member is saved successfully', "success");
    }
  }
});
