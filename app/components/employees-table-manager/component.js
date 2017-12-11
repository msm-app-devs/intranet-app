import Ember from 'ember';
import notifyUser from '../../mixins/notify-user';

export default Ember.Component.extend(notifyUser, {
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
        const data = this.get('data').toArray();
        this.set('rowIndexToShowDetail', rowIndex);
        this.set('firstName', data[rowIndex].data.firstName);
        this.set('lastName', data[rowIndex].data.lastName);
        this.set('position', data[rowIndex].data.position);
        this.set('team', data[rowIndex].data.team);
        this.set('birthday', data[rowIndex].data.birthday);
      }
    },

    onnickupdate(value, event) {
      this.set(event.target.name, value);
    },


    deleteChanges(item) {
      item.row.deleteRecord();
      item.row.get('isDeleted');
      item.row.save();

      this.notifyUser('A member is deleted successfully', "success");
      this.discardDetail();
    },

    discardChanges() {
      this.discardDetail();
      this.notifyUser('All changes have not been saved', "warning");
    },

    saveChanges(item) {
      if (this.get('firstName')) {
        item.row.set('firstName', this.get('firstName'));
      }

      if (this.get('lastName')) {
        item.row.set('lastName', this.get('lastName'));
      }

      if (this.get('position')) {
        item.row.set('position', this.get('position'));
      }

      if (this.get('team')) {
        item.row.set('team', this.get('team'));
      }

      if (this.get('birthday')) {
        item.row.set('birthday', this.get('birthday'));
      }

      item.row.save();

      this.notifyUser('A member is saved successfully', "success");
      this.discardDetail();
    }
  }
});
