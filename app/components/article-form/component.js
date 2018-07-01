import Ember from 'ember';
import NotifyUser from '../../mixins/notify-user';
import ErrorHandler from '../../mixins/handle-errors';
import SessionService from 'ember-simple-auth/services/session';

export default Ember.Component.extend(NotifyUser, ErrorHandler,{
  data: {
    message: ''
  },

  /**
   * Session service injection
   *
   * @property session
   * @type SessionService
   */
  session: Ember.inject.service('session'),

  options: {
    token: '',
    selector: 'textarea',
    height: 500,
    theme: 'modern',
    plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help',
    toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | image | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
    image_advtab: true,
    // without images_upload_url set, Upload tab won't show up
    images_upload_url: 'http://localhost:80/employees/imageupload',
    images_upload_credentials: true,
    // enable title field in the Image dialog
    image_title: true,
    images_upload_handler: function (blobInfo, success, failure) {
          var xhr, formData;
          xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.open('POST', 'http://localhost:80/employees/imageupload');
          xhr.setRequestHeader("Authorization",  tinyMCE.settings.token);
          xhr.onload = function() {
              var json;
              if (xhr.status != 200) {
                  failure('HTTP Error: ' + xhr.status);
                  return;
              }
              json = JSON.parse(xhr.responseText);
              if (!json || typeof json.location != 'string') {
                  failure('Invalid JSON: ' + xhr.responseText);
                  return;
              }
              success(json.location);
          };
          formData = new FormData();
          formData.append('file', blobInfo.blob(), blobInfo.filename());
          xhr.send(formData);
      },
    // enable automatic uploads of images represented by blob or data URIs
    // automatic_uploads: true,
    // file_picker_types: 'image',
    // init_instance_callback: function (ed) {
    //   ed.execCommand('mceImage');
    // }
  },

  init() {
    this._super(...arguments);
    
    const token = this.get('session.session.content.authenticated.access_token');
    this.set('options.token', token);
  },

  actions : {
    /**
      Send createNews action and clear article form data.
      @method createNews
    */
    createNews(){
      const data = this.get('data');
      var articleBody = data.body.toString();
      var firstParagraph = articleBody.indexOf('<p>');
      var lastParagraph = articleBody.lastIndexOf('</p>');
      var articleText = articleBody.substring(firstParagraph + 3,lastParagraph).replace(/\W/g, '');
      
      if (articleText){
        if (data.date){
          this.sendAction('createNews', data);
          this.set('data', {});
        }
        else {
          this.set('data', {});
        }
      }
      else {
        this.set('data', {});
      }    
    },
  }
});
