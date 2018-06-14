import Ember from 'ember';
import RSVP from 'rsvp';
import NotifyUser from '../../mixins/notify-user';
import ErrorHandler from '../../mixins/handle-errors';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(NotifyUser, ErrorHandler, AuthenticatedRouteMixin, {
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
    /**
      Create and save employee to the API.
      @method createEmployee
      @param {Object} employee
      @return {DS.PromiseManyArray}
    */
    createEmployee(data) {
      const employee = this.store.createRecord('employee', data); 
      employee.set('company', data.company.toLowerCase());

      employee.save()
      .then(() => {
        this.notifyUser('Member has been saved successfully', "success");
        // this.set('data', {});
      })
      .catch((error) => {
        this.handleErrors(error);
      });
    },

    /**
      Create and save news to the API.
      @method createNews
      @param {Object} news
      @return {DS.PromiseManyArray}
    */
    createNews(data) {
      const news = this.store.createRecord('news', data);

      news.save()
      .then(() => {
        this.notifyUser('Article has been saved successfully', "success");
        // this.set('data', {});
      })
      .catch((error) => {
        this.handleErrors(error);
      });
    },

    /**
      Create and save newsletter to the API.
      @method createNews
      @param {Object} newsletter
      @return {DS.PromiseManyArray}
    */
    createNewsletter(data) {
      data.categoryId = data.category.categoryId
      delete data.category;
      data.attachment = data.file
      delete data.file;

      const newsletter = this.store.createRecord('newsletter', data);

      newsletter.save()
      .then(() => {
        this.notifyUser('Article has been saved successfully', "success");
        // this.set('data', {});
      })
      .catch((error) => {
        this.handleErrors(error);
      });
    }
  }
});
