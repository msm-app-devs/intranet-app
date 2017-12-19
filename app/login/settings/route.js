import Ember from 'ember';
import RSVP from 'rsvp';
import notifyUser from '../../mixins/notify-user';

export default Ember.Route.extend(notifyUser, {
  /**
    Fetches all `employee` from the store.
    @method model
    @return {DS.PromiseManyArray}
  */
  model() {
    return RSVP.hash({
      employees: this.store.findAll('employee'),
      // news: this.store.findAll('news')
    });
  },

  actions: {
    setAvatar (data, file) {
      data.avatar = file;
      file.readAsDataURL().then(url => {
        data.url = url;
        data.avatar.url = url;
      });
    },

    /**
      Create and save employee to the API.
      @method createEmployee
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
        birthday: data.birthday,
        image: data.url
      });
      employee.save();
      this.notifyUser('New member is saved successfully', "success");
    },

    /**
      Create and save news to the API.
      @method createNews
      @param {Object} news
      @return {DS.PromiseManyArray}
    */
    createNews(data) {
      const employee = this.store.createRecord('news', {
        title: data.title,
        author: data.author,
        date: data.date,
        body: data.body,
        image: data.url
      });
      employee.save();
      this.notifyUser('New member is saved successfully', "success");
    }
  }
});
