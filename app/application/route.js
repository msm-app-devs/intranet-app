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
    /**
    Fetches all `employee` and 'news' from the store.

    @method model
    @return {DS.PromiseManyArray}
  */
  model() {
    return Ember.RSVP.hash({
      employees: this.store.findAll('employee'),
      news: this.store.findAll('news')
    });
  },

  /**
    Set birthdays for display.

    @method setupController
    @param {Controller} controller
    @param {Model} model
    @public
  */
  setupController(controller, model) {
    controller.setProperties({
      'birthdays': this._birthdayChecker(model.employees)
    });
  },

  /**
    Return array of birthdays if find a member with birthday.

    @method _birthdayChecker
    @private
  */
  _birthdayChecker(model) {
    const employees = model.toArray();
    const nextDaysMatrix = this._birthdayMatrixGenratorInDays(6);
    const employeesBirthdayList = [];

    employees.forEach(employee => {
      const date = new Date(employee.get('birthday'));
      const birthday = date.getDate();

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
      matrix.push(day.getDate() + i);
    }

    return matrix;
  },

  actions: {
    /**
      Navigate to specific route.
      TO DO: Add check if model is empty!
      @method visitRoute
      @param {Object} model
      @param {String} route
    */
    visitRoute(navToRoute, model) {
      this.transitionTo(navToRoute, model.get('id'));
    }
  }
});
