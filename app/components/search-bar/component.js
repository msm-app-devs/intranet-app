import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.set('results', this.get('filter')(''));
  },

  actions: {
    /**
     *  When fire key-up event get corresponding value and pass it to the filter.
     *
     * @method setAvatar
     */
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');

      this.set('results', filterAction(filterInputValue));
    }
  }
});
