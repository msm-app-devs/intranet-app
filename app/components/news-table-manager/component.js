import Ember from 'ember';
import NotifyUser from '../../mixins/notify-user';
import ErrorHandler from '../../mixins/handle-errors';

export default Ember.Component.extend(NotifyUser, ErrorHandler, {
  tableClassNames:'table table-striped table-bordered table-hover table-responsive table-condensed',

  /**
   * Reset all inputs when click 'Hide' button.
   *
   * @method _discardDetail
   * @private
   */
  _discardDetail(item) {
    const data = Object.keys(item.data);
    console.log(data);
    this.set('rowIndexToShowDetail', null);
    data.forEach(property => {
      this.set(property, null);
    });
  },

  actions: {
    /**
     *  When click 'Show' button will show or discard all employee details.
     *
     * @method toggleDetail
     * @param {String} rowIndex
     */
    toggleDetail(rowIndex) {
      const allEmployees = this.get('data').toArray();
      const currentEmployee = allEmployees[rowIndex];

      if (this.get('rowIndexToShowDetail') === rowIndex) {
        this._discardDetail(currentEmployee);
      } else {
        const employee = Object.keys(currentEmployee.data);

        this.set('rowIndexToShowDetail', rowIndex);
        employee.forEach(property => {
          this.set(property, currentEmployee.data[property]);
        });
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
      this.set(targetName, value);
    },

    /**
     *  Delete news.
     *
     * @method deleteNews
     * @param {Object} item
     */
    deleteNews(item) {
      item.row.deleteRecord();

      item.row.save()
      .then(() => {
        this.notifyUser('The news has been deleted successfully', "error");
        this._discardDetail(item.row);
      })
      .catch((error) => {
        this.handleErrors(error);
        this._discardDetail(item.row);
      });
    },

  /**
   *  Discard all changes.
   *
   * @method discardChanges
   */
    discardChanges(item) {
      this.notifyUser('The changes have not been saved', "warning");
      this._discardDetail(item.row);
    },

  /**
   *  Save all changes.
   *
   * @method saveChanges
   * @param {Object} item
   */
    saveChanges(item) {
      const data = Object.keys(item.row.data);

      data.forEach(property => {
        item.row.set(property, this.get(property));
      });

      item.row.save()
      .then(() => {
        this.notifyUser('Member has been saved successfully', "success");
        this._discardDetail(item.row);
      })
      .catch((error) => {
        this.handleErrors(error);
        this._discardDetail(item.row);
      });
    }
  }
});
