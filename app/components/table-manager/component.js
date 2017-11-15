import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  tableClassNames:'table table-striped table-bordered table-hover table-responsive table-condensed',

  discardDetail() {
    this.set('rowIndexToShowDetail', null);
    this.set('firstName', null);
    this.set('lastName', null);
    this.set('position', null);
    this.set('team', null);
    this.set('birthday', null);
  },

  actions: {
    toggleDetail(rowIndex) {
      if (this.get('rowIndexToShowDetail') === rowIndex) {
        this.discardDetail();
      } else {
        this.set('rowIndexToShowDetail', rowIndex);
        this.set('firstName', this.get('data')[rowIndex].data.firstName);
        this.set('lastName', this.get('data')[rowIndex].data.lastName);
        this.set('position', this.get('data')[rowIndex].data.position);
        this.set('team', this.get('data')[rowIndex].data.team);
        this.set('birthday', this.get('data')[rowIndex].data.birthday);
      }
    },

    onnickupdate(value) {
      this.set('firstName', value);
    },

    discardChanges() {
      this.discardDetail();
    },

    saveChanges(item) {
      const employeeId = parseInt(item.row.id);
      const record = this.get('store').peekRecord('employee', employeeId);
      record.set('firstName', this.get('firstName'));
      record.save();
      
      // Ember.set(this.get('data')[this.get('rowIndexToShowDetail')], 'nick', this.get('newNickToSet'));
      this.discardDetail();
    }
  }
});
