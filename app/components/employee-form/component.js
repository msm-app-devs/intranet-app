import Ember from 'ember';

export default Ember.Component.extend({
  data: {},

  init() {
    this._super(...arguments);
    this.set('data', {});
  },


  actions: {
          clearEmpForm(){
              const data = this.get('data');
              // this.send('createNews',data);
              // console.log(data);
              this.set('data.avatar',null);
              this.set('data.birthday',null);
              this.set('data.book',null);
              this.set('data.dateStart',null);
              this.set('data.education',null);
              this.set('data.email',null);
              this.set('data.expertise',null);
              this.set('data.firstName',null);
              this.set('data.hobbies',null);
              this.set('data.image',null);
              this.set('data.languages',null);
              this.set('data.lastName',null);
              this.set('data.photo',null);
              this.set('data.position',null);
              this.set('data.skype',null);
              this.set('data.song',null);
              this.set('data.team',null);
              this.set('data.thought',null);
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
