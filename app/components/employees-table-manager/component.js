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
     *  Delete employee.
     *
     * @method deleteEmployee
     * @param {Object} item
     */
    deleteEmployee(item) {
      item.deleteRecord();

      item.save()
      .then(() => {
        this.notifyUser('The employee has been deleted successfully', "warning");
        this._discardDetail(item);
      })
      .catch((error) => {
        this.handleErrors(error);
        this._discardDetail(item);
      });
    },

  /**
   *  Discard all changes.
   *
   * @method discardChanges
   */
    discardChanges(item) {
      this.notifyUser('All changes have not been saved', "error");
      this._discardDetail(item);
    },

  /**
   *  Save all changes.
   *
   * @method saveChanges
   * @param {Object} item
   */
    saveChanges(item) {
      const data = Object.keys(item.data);

      data.forEach(property => {
        if (property === "company") {
          item.set(property, this.get(property).toLowerCase());
        }
        else if (property === 'photo' || property === 'image' || property === 'avatar') {
          return;
        }
        else {
          item.set(property, this.get(property));
        }
      });

      item.save()
      .then(() => {
        this.notifyUser('Member has been saved successfully', "success");
        this._discardDetail(item);
      })
      .catch((error) => {
        this.handleErrors(error);
        this._discardDetail(item);
      });
    }
  }
});
