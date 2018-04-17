import Ember from 'ember';
import shuffleArray from '../mixins/shuffle-array';
import notifyUser from '../mixins/notify-user';

export default Ember.Route.extend(shuffleArray, notifyUser, {
  /**
    Fetches all data from Ember store.
    @method model
    @return {DS.PromiseManyArray}
  */
  model() {
    return {
      employees: this.store.peekAll('employee'),
      news: this.store.peekAll('news'),
      feedback: this.store.peekAll('feedback')
    };
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
      'lastFiveEmployees': this._findLastFiveRecords(model.employees),
      'randomFiveemployees': this._findRandomFiveRecords(model.employees),
      'lastFiveNews': this._findLastFiveRecords(model.news)
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

    lastFiveRecords =  modelLen > 3 ? modelArr.slice(modelLen - 3, modelLen) : modelArr.slice(0, modelLen);

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

    randomFiveRecords = this.shuffleArray(modelArr.slice(0, modelLen-3)).slice(0, 3);

    return randomFiveRecords;
  },

  
  actions: {
    sendFeedback(data) {
      const feedback = this.store.createRecord('feedback', {
        email: data.email,
        feedbackString: data.feedbackString
      });

      feedback.save()
      .then(() => {
        this.notifyUser('Feedback has been sent successfully', "success");
        this.set('data', {});
      })
      .catch((error) => {
        this.handleErrors(error);
      });
    }
  }
});
