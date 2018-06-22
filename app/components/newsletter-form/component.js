import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  data: {},

  categories: Ember.A([
    { categoryId: 1, name: 'Newsletter' }
  ]),

  actions : {
    /**
      Send createNewsletter action and clear newsletter form data property.
      @method createNewsletter
    */
    setFileToDataProperty(){
      const file = Ember.$('#file-field').prop('files')[0];

      this.set('data.attachment', file)
    },

    /**
      Send createNewsletter action and clear newsletter form data property.
      @method createNewsletter
    */
    createNewsletter(){
      const data = this.get('data');

      this.sendAction('createNewsletter', data);
      this.set('data', {});
    }
  }
});
