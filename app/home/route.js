import Ember from 'ember';
import shuffleArray from '../mixins/shuffle-array';
import notifyUser from '../mixins/notify-user';

export default Ember.Route.extend(shuffleArray, notifyUser, {
  /**
    Fetches all needed data.
    @method model
    @return {Object}
  */
  model() {
    return {
      employees: this.store.peekAll('employee'),
      news: this.store.peekAll('news'),
      feedback: this.store.peekAll('feedback')
    };
  },

  /**
    Set articles and employees for display
    @method setupController
    @param {LocationsController} controller
    @param {LocationModel[]} model
    @public
  */
  setupController(controller, model) {
    controller.setProperties({
      'randomEmployees': this._findRandomRecords(model.employees, 3),
      'lastEmployees': this._findLastRecords(model.employees, 3),
      'lastNews': this._findFirstRecords(model.news, 3)
    });
  },

  /**
    Find and return specific count of records
    @method _findLastRecords
    @param {Object} model
    @param {Integer} step
    @return {Array}
    @private
  */
  _findLastRecords(model, step) {
    const modelArr = model.toArray();
    const modelLen = modelArr.length;

    if (modelLen > step) {
      return modelArr.slice(modelLen - 3, modelLen);
    } else {
      return modelArr;
    }
  },

  /**
    Find and return specific count of records
    @method _findFirstRecords
    @param {Object} model
    @param {Integer} step
    @return {Array}
    @private
  */
  _findFirstRecords(model, step) {
    const modelArr = model.toArray();
    const modelLen = modelArr.length;

    return modelArr.slice(0, step);
  },

  /**
    Find and return specific count of random records
    @method _findRandomRecords
    @param {Object} model
    @param {Integer} step
    @return {Array}
    @private
  */
  _findRandomRecords(model, step) {
    const modelArr = model.toArray();
    const modelLen = modelArr.length;

    return this.shuffleArray(modelArr.slice(0, modelLen-step)).slice(0, step);
  },

  actions: {
      /**
      Send feedback to the API.
      @method sendFeedback
      @param {Object} data
    */
    sendFeedback(data) {
      const feedback = this.store.createRecord('feedback', {
        email: data.email,
        feedbackString: data.feedbackString
      });
      
      feedback.save()
      .then(() => {
        this.notifyUser('Feedback has been sent successfully', "success");
      })
      .catch(() => {
        this.handleErrors(error);
      });
    }
  }
});
