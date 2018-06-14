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

  /**
   * Reset all inputs when click 'Hide' button.
   *
   * @method _discardDetail
   * @param {Object} item
   * @private
   */
  _discardDetail(item) {
    item.rollbackAttributes();
    this.set('rowIndexToShowDetail', null);
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
     * @param {Object} item
     */
    deleteEmployee(item) {
      item.deleteRecord();

      item.save()
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
   * @param {Object} item
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
      item.set('gender', item.get('gender.id'));
      item.set('company', item.get('company.id'));
      item.set('team', item.get('team.id'));
      item.set('position', item.get('position.id'));
      
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
