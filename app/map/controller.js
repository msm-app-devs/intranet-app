import Ember from 'ember';
import notifyUser from '../mixins/notify-user';


export default Ember.Controller.extend(notifyUser, {
  attrs: {},

  actions: {
    /**
      Edit specific row cell.
      @method myEditAction
      @param {Object} row
    */
    editAction(item) {
      const employeeId = parseInt(item.row._id);
      const record = this.store.peekRecord('employee', employeeId);
      record.set(item.key, item.value);
      record.save();
      this.notifyUser('Successfully updated cell.', "success");
    },

    /**
      Load previous employee in the store.
      @method prevEmloyee
      @param {Object} currentEmployee
    */
    cancelAction(row) {
      console.log(row);
    },
  }
});
