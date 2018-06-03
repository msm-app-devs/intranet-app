import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',

  classNames: ['image-upload', 'layout-column', 'layout-align-center-center', 'flex-33', 'flex-sm-100', 'flex-xs-100'],

  actions: {
    /**
      Gather image data and pass it to the update method.
      @method uploadPhoto
      @param {Object} data
      @param {String} imgName
      @param {Object} file
    */
   uploadPhoto (imgName, file) {
      file.readAsDataURL().then(url => {
        this.set(`data.${imgName}`, url);
      });
    }
  }
});

