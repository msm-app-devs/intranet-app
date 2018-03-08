import Ember from 'ember';
import NotifyUser from '../../mixins/notify-user';
import ErrorHandler from '../../mixins/handle-errors';

export default Ember.Component.extend(NotifyUser, ErrorHandler, {
  tableClassNames:'table table-striped table-bordered table-hover table-responsive table-condensed',

  imgData: {
    image: '',
    photo: '',
    avatar: ''
  },

  /**
   * Reset all inputs when click 'Hide' button.
   *
   * @method _discardDetail
   * @private
   */
  _discardDetail(item) {
    const data = Object.keys(item.data);

    this.set('rowIndexToShowDetail', null);
    this.set('imgData', {});
    data.forEach(property => {
      this.set(property, null);
    });
  },

  actions: {
    /**
      Gather image data and pass it to the update method.
      @method setPhoto
      @param {Object} data
      @param {String} imgName
      @param {Object} file
    */
    setPhoto (imgData, imgName, file) {
      file.readAsDataURL().then(url => {
        this.set('imgData.photo', url);
        this.send('onValueUpdate', 'photo', url);
      });
    },

    /**
      Gather image data and pass it to the update method.
      @method setImage
      @param {Object} data
      @param {String} imgName
      @param {Object} file
    */
    setImage (imgData, imgName, file) {
      file.readAsDataURL().then(url => {
        this.set('imgData.image', url);
        this.send('onValueUpdate', 'image', url);
      });
    },

    /**
      Gather image data and pass it to the update method.
      @method setAvatar
      @param {Object} data
      @param {String} imgName
      @param {Object} file
    */
    setAvatar (imgData,  imgName, file) {
      file.readAsDataURL().then(url => {
        this.set('imgData.avatar', url);
        this.send('onValueUpdate', 'avatar', url);
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
        this.notifyUser('The employee has been deleted successfully', "warning");
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
      this.notifyUser('All changes have not been saved', "error");
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
