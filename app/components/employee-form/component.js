import Ember from 'ember';

export default Ember.Component.extend({
  data: {},

  init() {
    this._super(...arguments);
    this.set('data', {});
  },


  actions: {
    /**
      Send createEmployee action and clear employee form data.
      @method createEmployee
    */
   createEmployee(){
      const data = this.get('data');

      this.sendAction('createEmployee', data);
      this.set('data', {});
    },

    /**
      Gather image data and pass it to the update method.
      @method setPhoto
      @param {Object} data
      @param {String} imgName
      @param {Object} file
    */
    setPhoto (data, imgName, file) {
      this.set('data.photo', file);
      file.readAsDataURL().then(url => {
        this.set('data.photo.url', url);
      });
    },

    /**
      Gather image data and pass it to the update method.
      @method setImage
      @param {Object} data
      @param {String} imgName
      @param {Object} file
    */
    setImage (data, imgName, file) {
      this.set('data.image', file);
      file.readAsDataURL().then(url => {
        this.set('data.image.url', url);
      });
    },

    /**
      Gather image data and pass it to the update method.
      @method setAvatar
      @param {Object} data
      @param {String} imgName
      @param {Object} file
    */
    setAvatar (data,  imgName, file) {
      this.set('data.avatar', file);
      file.readAsDataURL().then(url => {
        this.set('data.avatar.url', url);
      });
    }
  }
});
