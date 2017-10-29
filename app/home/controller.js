import Ember from 'ember';

export default Ember.Controller.extend({
  attrs: {  
    isBirthdayShowingModal: true
  },

  actions: {
    toggleModal: function() {
      this.toggleProperty('attrs.isBirthdayShowingModal');
    }
  }
});
