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
      Gather image data and pass it to the update method.
      @method setPhoto
      @param {Object} data
      @param {Object} file
      @return {DS.PromiseManyArray}
    */
    setPhoto (data, file) {
      data.photo = file;
      file.readAsDataURL().then(url => {
        data.url = url;
        data.photo.url = url;
        this.send('onValueUpdate', 'photo', url);
      });
    },

    /**
      Gather image data and pass it to the update method.
      @method setAvatar
      @param {Object} data
      @param {Object} file
      @return {DS.PromiseManyArray}
    */
    setAvatar (data, file) {
      data.avatar = file;
      file.readAsDataURL().then(url => {
        data.url = url;
        data.avatar.url = url;
        this.send('onValueUpdate', 'avatar', url);
      });
    },

    /**
      Gather image data and pass it to the update method.
      @method setImage
      @param {Object} data
      @param {Object} file
      @return {DS.PromiseManyArray}
    */
    setImage (data, file) {
      data.image = file;
      file.readAsDataURL().then(url => {
        data.url = url;
        data.image.url = url;
        this.send('onValueUpdate', 'image', url);
      });
    },

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
      item.row.deleteRecord();

      item.row.save()
      .then(() => {
        this.notifyUser('Member has been saved successfully', "success");
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
      this.notifyUser('All changes have not been saved', "warning");
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
