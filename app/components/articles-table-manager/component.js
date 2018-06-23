import Ember from 'ember';
import NotifyUser from '../../mixins/notify-user';
import ErrorHandler from '../../mixins/handle-errors';

export default Ember.Component.extend(NotifyUser, ErrorHandler, {
  tableClassNames:'table table-striped table-bordered table-hover table-responsive table-condensed',

  options: {
    selector: 'textarea',
    height: 500,
    theme: 'modern',
    plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help',
    toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | image | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
    image_advtab: true,
    // without images_upload_url set, Upload tab won't show up
    images_upload_url: 'http://q1q1.eu/employees/webroot/testimagenews.php',
    images_upload_credentials: true,
    // enable title field in the Image dialog
    image_title: true,
    // enable automatic uploads of images represented by blob or data URIs
    automatic_uploads: true,
    file_picker_types: 'image',
    init_instance_callback: function (ed) {
      ed.execCommand('mceImage');
    }
  },
  
  showModal: '',

  /**
   * Reset all inputs when click 'Hide' button.
   *
   * @method _discardDetail
   * @param {Object} news
   * @private
   */
  _discardDetail(news) {
    if (news.get('hasDirtyAttributes')) {
      news.rollbackAttributes();
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
      this.set('modalTitle', 'Save News');
      this.set('modalBody', 'Are you sure that you want to save all news changes?');
    }
    if (action == 'discardChanges') {
      this.set('modalTitle', 'Unsaved Changes');
      this.set('modalBody', 'Are you sure that you want to discard all news changes?');
    }
    if (action == 'deleteNews') {
      this.set('modalTitle', 'Delete News');
      this.set('modalBody', 'Are you sure that you want to permanently delete that news?');
    }
  },

  actions: {
    /**
     *  When click 'Show' button will show or discard all news details.
     *
     * @method toggleDetail
     * @param {String} rowIndex
     */
    toggleDetail(rowIndex) {
      const allNews = this.get('data').toArray();
      const currentNews = allNews[rowIndex];

      if (this.get('rowIndexToShowDetail') === rowIndex) {
        this._discardDetail(currentNews);
      } else {
        const news = Object.keys(currentNews.data);

        this.set('rowIndexToShowDetail', rowIndex);
        news.forEach(property => {
          this.set(property, currentNews.data[property]);
        });
      }
    },
  
    /**
     *  Delete news.
     *
     * @method deleteNews
     */
    deleteNews() {
      const news = this.get('news');
      news.deleteRecord();

      news.save()
      .then(() => {
        this.notifyUser('The news has been deleted successfully', "success");
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
      const news = this.get('news');
      this.notifyUser('All changes have not been saved', "error");
      this._discardDetail(news);
    },

  /**
   *  Save all changes.
   *
   * @method saveChanges
   */
    saveChanges() {
      const news = this.get('news');

      news.save()
      .then(() => {
        this.notifyUser('Member has been saved successfully', "success");
        this._discardDetail(news);
      })
      .catch((error) => {
        this.handleErrors(error);
        this._discardDetail(news);
      });
    },

    /**
     *  Show modal dialog. Setup modal action and action target.
     *
     * @method showModalDialog
     * @param {Object} news
     */
    showModalDialog(news, action) {
      this.set('news', news)
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
      this.set('news', null)
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
