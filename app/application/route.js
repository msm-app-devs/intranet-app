import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

/**
  Initial entry point for the app after initialization. Renders the application
  template.
  @class ApplicationRoute
  @extends Ember.Route
  @module Application
*/
export default Ember.Route.extend(ApplicationRouteMixin, {
  setupController(controller /*, model*/) {
    controller.setProperties({
      'birthdays': this._birthdayChecker()
    });
  },

  /**
    Return array of birthdays if find a member with birthday

    @method _birthdayChecker
    @private
  */
  _birthdayChecker() {
    // let today = moment();
    // let birthDate = moment(get(this, 'birthDate'));
    // let isBirthday = (today.month() === birthDate.month()) && 
    //   (today.day() === birthDate.day());

    const employees = this.store.peekAll('employee') ? this.store.peekAll('employee').toArray() : [];
    const nextDaysMatrix = this._birthdayMatrixGenratorInDays(6);
    const employeesBirthdayList = [];

    employees.forEach(employee => {
      let birthday = new Date(employee.get('birthday'));
      birthday.setFullYear(2000);
      birthday = birthday.valueOf();
        
      nextDaysMatrix.forEach(day => {
        if (day === birthday) {
          employeesBirthdayList.push(employee);
        }
      });
    });

    return employeesBirthdayList;
  },


  /**
    Generate dates as days by number passed as param.
    Return array of generated dates as values.

    @method _birthdayMatrixGenratorInDays
    @param {Number} days
    @private
  */
  _birthdayMatrixGenratorInDays(days) {
    const matrix = [];

    for (var i = 0; i <= days; i++) {
      var day = new Date();
      day.setDate(day.getDate() + i);
      day.setHours(0,0,0,0);
      day.setFullYear(2000);
      day = day.valueOf();
      matrix.push(day);
    }

    return matrix;
  },

  actions: {
    /**
      Navigate to specific route.

      @method visitRoute
      @param {Object} model
      @param {String} route
    */
    visitRoute(navToRoute, model) {
      this.transitionTo(navToRoute, model.get('id'));
    }
  }
});
