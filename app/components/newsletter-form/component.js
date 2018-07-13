import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
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

    showModalDialog(action) {
      this.sendAction('showModalDialog', this.get('data'), action);
    }
  }
});
