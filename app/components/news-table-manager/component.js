import Ember from 'ember';
import notifyUser from '../../mixins/notify-user';

export default Ember.Component.extend(notifyUser, {
  tableClassNames:'table table-striped table-bordered table-hover table-responsive table-condensed',

  /**
   * Reset all inputs when click 'Hide' button.
   *
   * @method _discardDetail
   * @private
   */
  _discardDetail() {
    this.set('rowIndexToShowDetail', null);
    this.set('title', null);
    this.set('author', null);
    this.set('date', null);
    this.set('body', null);
  },

  actions: {
    /**
     *  When click 'Show' button will show or discard all employee details.
     *
     * @method toggleDetail
     * @param {String} rowIndex
     */
    toggleDetail(rowIndex) {
      if (this.get('rowIndexToShowDetail') === rowIndex) {
        this._discardDetail();
      } else {
        const data = this.get('data').toArray();
        this.set('rowIndexToShowDetail', rowIndex);
        this.set('title', data[rowIndex].data.title);
        this.set('author', data[rowIndex].data.author);
        this.set('date', data[rowIndex].data.date);
        this.set('body', data[rowIndex].data.body);
      }
    },

    /**
     *  When fire key-up event update corresponding property by event target name.
     *
     * @method onValueUpdate
     * @param {String} value
     * @param {Object} event
     */
    onValueUpdate(targetName, value) {
      if (targetName === 'date') {
        this.set('date', value);
      } else {
        this.set(targetName, value);
      }
    },

    /**
     *  Delete news.
     *
     * @method deleteNews
     * @param {Object} item
     */
    deleteNews(item) {
      item.row.deleteRecord();
      item.row.get('isDeleted');
      item.row.save();

      this.notifyUser('A member is deleted successfully', "success");
      this._discardDetail();
    },

  /**
   *  Discard all changes.
   *
   * @method discardChanges
   */
    discardChanges() {
      this.notifyUser('All changes have not been saved', "warning");
      this._discardDetail();
    },

  /**
   *  Save all changes.
   *
   * @method saveChanges
   * @param {Object} item
   */
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

      if (this.get('image')) {
        item.row.set('image', this.get('image'));
      }

      item.row.save();

      this.notifyUser('A member is saved successfully', "success");
      this._discardDetail();
    }
  }
});
