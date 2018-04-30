import Ember from 'ember';

export default Ember.Component.extend({
  data: {},

  init() {
    this._super(...arguments);
    this.set('data', {});
  },


  actions: {
        
    /* Dialog with parent */
    
    /* Prompt dialog */
    openPromptDialog(/* param, event */) {
      this.set('showPromptDialog', true);
    },

    closePromptDialog(result) {
      this.set('result', result);
      this.set('showPromptDialog', false);
      this.set('data', {});
    },

    toggleSourceCode() {
      this.toggleProperty('showSourceCode');
    },
        
    /**
      Send sendFeedback action and clear feedback form data.
      @method sendFeedback
    */
   sendFeedback(){
      const data = this.get('data');

      this.sendAction('sendFeedback', data);
      this.set('data', {});
    }
  }
});

