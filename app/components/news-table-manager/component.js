import Ember from 'ember';
import notifyUser from '../../mixins/notify-user';

export default Ember.Component.extend(notifyUser, {
  store: Ember.inject.service(),

  tableClassNames:'table table-striped table-bordered table-hover table-responsive table-condensed',

  discardDetail() {
    this.set('rowIndexToShowDetail', null);
    this.set('title', null);
    this.set('author', null);
    this.set('date', null);
    this.set('body', null);
  },

  actions: {
    toggleDetail(rowIndex) {
      if (this.get('rowIndexToShowDetail') === rowIndex) {
        this.discardDetail();
      } else {
        const data = this.get('data').toArray();
        this.set('rowIndexToShowDetail', rowIndex);
        this.set('title', data[rowIndex].data.title);
        this.set('author', data[rowIndex].data.author);
        this.set('date', data[rowIndex].data.date);
        this.set('body', data[rowIndex].data.body);
      }
    },

    onnickupdate(value, event) {
      this.set(event.target.name, value);
    },

    updateDate(value){
      this.set('date', value.toLocaleDateString());
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
      if (this.get('title')) {
        item.row.set('title', this.get('title'));
      }

      if (this.get('author')) {
        item.row.set('author', this.get('author'));
      }

      if (this.get('date')) {
        item.row.set('date', this.get('date'));
      }

      if (this.get('body')) {
        item.row.set('body', this.get('body'));
      }

      item.row.save();

      this.notifyUser('A member is saved successfully', "success");
      this.discardDetail();
    }
  }
});
