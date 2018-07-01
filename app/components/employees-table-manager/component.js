import Ember from 'ember';
import NotifyUser from '../../mixins/notify-user';
import ErrorHandler from '../../mixins/handle-errors';

export default Ember.Component.extend(NotifyUser, ErrorHandler, {
  tableClassNames:'table table-striped table-bordered table-hover table-responsive table-condensed',
  
  emailValidation: [{
    message: 'Please provide email in a valid format',
    validate: (inputValue) => {
      let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(inputValue);
    }
  }],

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
      this.set('modalTitle', 'Save Employee');
      this.set('modalBody', 'Are you sure that you want to save all employee changes?');
    }
    if (action == 'discardChanges') {
      this.set('modalTitle', 'Unsaved Changes');
      this.set('modalBody', 'Are you sure that you want to discard all employee changes?');
    }
    if (action == 'deleteEmployee') {
      this.set('modalTitle', 'Delete Employee');
      this.set('modalBody', 'Are you sure that you want to permanently delete that employee?');
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
     *  Show modal dialog. Setup modal action and action target.
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
