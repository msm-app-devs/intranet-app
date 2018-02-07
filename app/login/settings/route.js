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
      Gather image data and pass it to the update method.
      @method setPhoto
      @param {Object} data
      @param {Object} file
      @return {DS.PromiseManyArray}
    */
    setPhoto (data, file) {
      data.photo = file;
      file.readAsDataURL().then(url => {
        data.url = url;
        data.photo.url = url;
      });
    },

    /**
      Gather image data and pass it to the update method.
      @method setAvatar
      @param {Object} data
      @param {Object} file
      @return {DS.PromiseManyArray}
    */
    setAvatar (data, file) {
      data.avatar = file;
      file.readAsDataURL().then(url => {
        data.url = url;
        data.avatar.url = url;
      });
    },

    /**
      Gather image data and pass it to the update method.
      @method setImage
      @param {Object} data
      @param {Object} file
      @return {DS.PromiseManyArray}
    */
    setImage (data, file) {
      data.image = file;
      file.readAsDataURL().then(url => {
        data.url = url;
        data.image.url = url;
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
        education: data.education,
        expertise: data.expertise,
        languages: data.languages,
        hobbies: data.hobbies,
        song: data.song,
        thought: data.thought,
        book: data.book,
        skype: data.skype,
        email: data.email,
        dateStart: data.dateStart,
        birthday: data.birthday,
        image: data.image.url,
        photo: data.photo.url,
        avatar: data.avatar.url,
      });

      employee.save()
      .then(() => {
        this.notifyUser('Member has been saved successfully', "success");
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
      const news = this.store.createRecord('news', {
        title: data.title,
        author: data.author,
        date: data.date,
        body: data.message
      });

      news.save()
      .then(() => {
        this.notifyUser('Member has been saved successfully', "success");
      })
      .catch((error) => {
        this.handleErrors(error);
      });
    }
  }
});
