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
  const employees = this.store.peekAll('employee');
  const genders = this.store.peekAll('gender');
  const companies = this.store.peekAll('company');
  const teams = this.store.peekAll('team');
  const positions = this.store.peekAll('position');

  return RSVP.hash({
      employees: employees || this.store.findAll('employee'),
      genders: genders|| this.store.findAll('gender'),
      companies: companies || this.store.findAll('company'),
      teams: teams || this.store.findAll('team'),
      positions: positions || this.store.findAll('position'),
      educations: this.store.findAll('education'),
      hobbies: this.store.findAll('hobby')
    });
  },
  
  _validateNewsBody(news) {
    // workaround validate if body is populated
    if (news.get('body') && news.get('body').length >= 62) {
      return true;
    } else {
      const error = { errors: [{ title: ' Article body must be populated'}]}
      this.handleErrors(error);
      return false ;
    }
  },

  /**
   * Setup modal diaog texts.
   *
   * @method _setModalText
   * @param {String} action
   * @private
   */
  _setModalText(action) {
    if (action == 'createNews') {
      this.controller.set('modalTitle', 'Save Article');
      this.controller.set('modalBody', 'Are you sure that you want to save new article and send notification?');
    }
    if (action == 'createEmployee') {
      this.controller.set('modalTitle', 'Save Employee');
      this.controller.set('modalBody', 'Are you sure that you want to save new employee and send notification?');
    }
    if (action == 'createNewsletter') {
      this.controller.set('modalTitle', 'Save Newsletter');
      this.controller.set('modalBody', 'Are you sure that you want to save new newsletter and send notification?');
    }
  },

  actions: {

    /**
     *  Show modal dialog. Setup modal action and action target.
     *
     * @method showModalDialog
     * @param {Object} data
     */
    showModalDialog(data, action) {
      this.set('data', data)
      this.set('action', action);
      this._setModalText(action);
      this.controller.set('showModal', true);
    },

    /**
     *  Close modal dialog.
     *
     * @method closeModalDialog
     */
    closeModalDialog() {
      this.controller.set('showModal', false);
    },

    /**
     *  Trigger modal dialog action.
     *
     * @method actionModalDialog
     */
    actionModalDialog() {
      this.send(this.get('action'));
      this.controller.set('showModal', false);
    },
  
    /**
      Create and save employee to the API.
      @method createEmployee
      @param {Object} employee
      @return {DS.PromiseManyArray}
    */
    createEmployee() {
      const employee = this.store.createRecord('employee', this.get('data')); 
        employee.save()
        .then(() => {
          this.notifyUser('Member has been saved successfully', "success");
          this.controller.set('data', {});
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
    createNews() {
      let data = this.get('data');

      const news = this.store.createRecord('news', data);

      // workaround to return valid error msg to the user
      // API is returning wrong error format
      const newsBodyIsValid = this._validateNewsBody(news);

      if (newsBodyIsValid) {
        news.save()
        .then(() => {
          this.notifyUser('Article has been saved successfully', "success");
          this.controller.set('data', {});
        })
        .catch((error) => {
          this.handleErrors(error);
        });
      }
    },

    /**
      Create and save newsletter to the API.
      @method createNews
      @param {Object} newsletter
      @return {DS.PromiseManyArray}
    */
    createNewsletter() {
      let data = this.get('data');
      data.categoryId = data.category.categoryId
      delete data.category;

      const newsletter = this.store.createRecord('newsletter', data);

      newsletter.save()
      .then(() => {
        this.notifyUser('Article has been saved successfully', "success");
        this.controller.set('data', {});
      })
      .catch((error) => {
        this.handleErrors(error); 
      });
    }
  }
});
