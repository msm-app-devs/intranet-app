import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    /**
     *  When click meny button will show or hide side nav.
     *
     * @method toggle
     * @param {String} propName
     */
    toggle(propName) {
       this.toggleProperty(propName);
    }
  }
});
