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

    onnickupdate(value, event) {
      this.set(event.target.name, value);
    },

    discardChanges() {
      this.discardDetail();
    },

    saveChanges(item) {
      const employeeId = parseInt(item.row.id);
      const record = this.get('store').peekRecord('employee', employeeId);

      if (this.get('firstName')) {
        record.set('firstName', this.get('firstName'));
      }

      if (this.get('lastName')) {
        record.set('lastName', this.get('lastName'));
      }

      if (this.get('position')) {
        record.set('position', this.get('position'));
      }

      if (this.get('team')) {
        record.set('team', this.get('team'));
      }

      if (this.get('birthday')) {
        record.set('birthday', this.get('birthday'));
      }

      record.save();

      this.discardDetail();
    }
  }
});
