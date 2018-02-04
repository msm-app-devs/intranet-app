import Ember from 'ember';
import RSVP from 'rsvp';
import shuffleArray from '../mixins/shuffle-array';
import notifyUser from '../mixins/notify-user';

export default Ember.Route.extend(shuffleArray, notifyUser, {
  /**
    Fetches all `employee` from the store.
    @method model
    @return {DS.PromiseManyArray}
  */
  model() {
    return RSVP.hash({
      employees: this.store.findAll('employee'),
      news: this.store.findAll('news')
    });
  },

  /**
    Set locations for display, and default to picking the first
    @method setupController
    @param {LocationsController} controller
    @param {LocationModel[]} model
    @public
  */
  setupController(controller, model) {
    controller.setProperties({
      'attrs.lastFiveEmployees': this._findLastFiveRecords(model.employees),
      'attrs.randomFiveemployees': this._findRandomFiveRecords(model.employees),
      'attrs.isBirthdayShowingModal': this._birthdayChecker(model.employees),
      'attrs.lastFiveNews': this._findLastFiveRecords(model.news)
    });
  },

  /**
    Find and return the last 5 records into the model
    @method _findLastFiveEmployees
    @param {LocationModel[]} model
    @private
  */
  _findLastFiveRecords(model) {
    const modelArr = model.toArray();
    const modelLen = modelArr.length;
    let lastFiveRecords = [];

    lastFiveRecords =  modelLen > 5 ? modelArr.slice(modelLen-5, modelLen) : modelArr.slice(0, modelLen);

    return lastFiveRecords;
  },

  /**
    Find and return random 5 records into the model
    @method _findRandomFiveEmployees
    @param {LocationModel[]} model
    @private
  */
  _findRandomFiveRecords(model) {
    const modelArr = model.toArray();
    const modelLen = modelArr.length;
    let randomFiveRecords = [];

    randomFiveRecords = this.shuffleArray(modelArr.slice(0, modelLen-5)).slice(0, 5);

    return randomFiveRecords;
  },

    /**
    Return 'true' if find a member with birthday
    @method _birthdayChecker
    @param {LocationModel[]} model
    @private
  */
  _birthdayChecker(model) {
    const modelArr = model.toArray();
    const hadBirthday = modelArr.filterBy('birthday', '12/05/1980').length;

    this.controllerFor("application").set("birthdays", modelArr.slice(0,3));
  },

  actions: {
    /**
      Delete and save employee to the API.
      @method deleteEmployee
      @param {Object} employee
      @return {DS.PromiseManyArray}
    */
    deleteEmployee(employee) {
      employee.deleteRecord();
      employee.save();
      this.notifyUser('A member is deleted successfully', "success");
    },

    /**
      Update and save employee to the API.
      @method updateEmployee
      @param {Object} employee
      @return {DS.PromiseManyArray}
    */
    updateEmployee(employee) {
      employee.set('firstName', 'David');
      employee.set('lastName', 'James');
      employee.set('position', 'Senior UI Developer');
      employee.set('Team', 'Mobile');
      employee.save();
    },

    /**
      Navigate to specific employee route.
      @method visitEmployee
      @param {Object} employee
      @return {DS.PromiseManyArray}
    */
    visitEmployee(employee) {
      this.transitionTo('employees.employee', employee.id);
    }
  }
});
