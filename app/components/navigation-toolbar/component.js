import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggle(propName) {
       this.toggleProperty(propName);
    }
  }
});
