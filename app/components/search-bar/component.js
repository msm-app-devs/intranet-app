import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  value: '',
  switchAll: true,
  switchNames: false,
  switchEducations: false,
  switchHobbies: false,

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
      let filterSwitches = [this.get('switchAll'), this.get('switchNames'), this.get('switchEducations'), this.get('switchHobbies')]

      this.set('results', filterAction(filterInputValue, filterSwitches));
    }
  }
});
