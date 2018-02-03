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
    this.set('firstName', null);
    this.set('lastName', null);
    this.set('position', null);
    this.set('team', null);
    this.set('dateStart', null);
    this.set('birthday', null);
    this.set('image', null);
  },

  actions: {
    /**
     *  Gather image data and pass it to the update method.
     *
     * @method setAvatar
     * @param {Object} data
     * @param {Object} file
     */
    setAvatar (data, file) {
      const event = { target: { name: 'image' }};
      data.avatar = file;
      file.readAsDataURL().then(url => {
        data.url = url;
        data.avatar.url = url;
        this.send('onValueUpdate', url, event);
      });
    },

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
        this.set('firstName', data[rowIndex].data.firstName);
        this.set('lastName', data[rowIndex].data.lastName);
        this.set('position', data[rowIndex].data.position);
        this.set('team', data[rowIndex].data.team);
        this.set('dateStart', data[rowIndex].data.dateStart);
        this.set('birthday', data[rowIndex].data.birthday);
        this.set('image', data[rowIndex].data.image);
      }
    },

    /**
     *  When fire key-up event update corresponding property by event target name.
     *
     * @method onValueUpdate
     * @param {String} value
     * @param {Object} event
     */
    onValueUpdate(value, event) {
      this.set(event.target.name, value);
    },

    /**
     *  When fire event update birthday property with the selected date.
     *
     * @method updateBirthday
     * @param {String} value
     */
    updateBirthday(value){
      this.set('birthday', value.toLocaleDateString());
    },

    /**
     *  When fire event update startDat property with the selected date.
     *
     * @method updateStartDate
     * @param {String} value
     */
    updateStartDate(value){
      this.set('dateStart', value.toLocaleDateString());
    },

    /**
     *  Delete employee.
     *
     * @method deleteEmployee
     * @param {Object} item
     */
    deleteEmployee(item) {
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
      if (this.get('firstName')) {
        item.row.set('firstName', this.get('firstName'));
      }

      if (this.get('lastName')) {
        item.row.set('lastName', this.get('lastName'));
      }

      if (this.get('position')) {
        item.row.set('position', this.get('position'));
      }

      if (this.get('team')) {
        item.row.set('team', this.get('team'));
      }

      if (this.get('dateStart')) {
        item.row.set('dateStart', this.get('dateStart'));
      }

      if (this.get('birthday')) {
        item.row.set('birthday', this.get('birthday'));
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
