import Ember from 'ember';

export default Ember.Component.extend({
  data: {},

  actions : {
    /**
      Send createNews action and clear employee form data.
      @method createNews
    */
    createNews(){
      const data = this.get('data');

      this.sendAction('createNews', data);
      this.set('data', {});
    },
  }
});
