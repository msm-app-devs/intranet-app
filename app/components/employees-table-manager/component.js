import Ember from 'ember';
import NotifyUser from '../../mixins/notify-user';
import ErrorHandler from '../../mixins/handle-errors';

export default Ember.Component.extend(NotifyUser, ErrorHandler, {
  tableClassNames:'table table-striped table-bordered table-hover table-responsive table-condensed',

  showModal: '',

  /**
   * Reset all inputs when click 'Hide' button.
   *
   * @method _discardDetail
   * @param {Object} employee
   * @private
   */
  _discardDetail(employee) {
    if (employee.get('hasDirtyAttributes')) {
      employee.rollbackAttributes();
    }
    this.set('rowIndexToShowDetail', null);
    this.set('showModal', false);
  },

  /**
   * Setup modal diaog texts.
   *
   * @method _setModalText
   * @param {String} action
   * @private
   */
  _setModalText(action) {
    if (action == 'saveChanges') {
      this.set('modalTitle', 'Save all employee changes.');
      this.set('modalBody', 'All changes will be saved. Please confirm your action.');
    }
    if (action == 'discardChanges') {
      this.set('modalTitle', 'Unsaved changes detected.');
      this.set('modalBody', 'All changes will be discarded. Please confirm your action.');
    }
    if (action == 'deleteEmployee') {
      this.set('modalTitle', 'Delete employee.');
      this.set('modalBody', 'Employee will be deleted. Please confirm your action.');
    }
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
        this.set('rowIndexToShowDetail', rowIndex);
      }
    },

    /**
     *  Delete employee.
     *
     * @method deleteEmployee
     */
    deleteEmployee() {
      const employee = this.get('employee');
      employee.deleteRecord();

      employee.save()
      .then(() => {
        this.notifyUser('The employee has been deleted successfully', "success");
        this.set('rowIndexToShowDetail', null);
        
      })
      .catch((error) => {
        this.handleErrors(error);
        this.set('rowIndexToShowDetail', null);
      });
    },

  /**
   *  Discard all changes.
   *
   * @method discardChanges
   */
    discardChanges() {
      const employee = this.get('employee');
      this.notifyUser('All changes have not been saved', "error");
      this._discardDetail(employee);
    },

  /**
   *  Save all changes.
   *
   * @method saveChanges
   */
    saveChanges() {
      const employee = this.get('employee');
      employee.set('company', employee.get('company').toLowerCase())

      employee.save()
      .then(() => {
        this.notifyUser('Member has been saved successfully', "success");
        this._discardDetail(employee);
      })
      .catch((error) => {
        this.handleErrors(error);
        this._discardDetail(employee);
      });
    },

    /**
     *  Show modal dialog.
     *
     * @method showModalDialog
     * @param {Object} employee
     */
    showModalDialog(employee, action) {
      this.set('employee', employee)
      this.set('action', action);
      this._setModalText(action);
      this.set('showModal', true);
    },

    /**
     *  Close modal dialog.
     *
     * @method closeModalDialog
     */
    closeModalDialog() {
      this.set('employee', null)
      this.set('showModal', false);
    },

    /**
     *  Trigger modal dialog action.
     *
     * @method actionModalDialog
     */
    actionModalDialog() {
      this.send(this.get('action'));
      this.set('showModal', false);
    }
  }
});
