import Ember from 'ember';
import SessionService from 'ember-simple-auth/services/session';

export default Ember.Component.extend({
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
    selector: 'textarea',
    height: 500,
    theme: 'modern',
    plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help',
    toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | image | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
    image_advtab: true,
    // without images_upload_url set, Upload tab won't show up
    images_upload_url: 'http://localhost:80/employees/imageupload',
    images_upload_credentials: false,
    // enable title field in the Image dialog
    image_title: true,
      images_upload_handler: function (blobInfo, success, failure) {
          var xhr, formData;
          xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.open('POST', 'http://localhost:80/employees/imageupload');
          xhr.setRequestHeader("Authorization",  "");
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
      }
    // enable automatic uploads of images represented by blob or data URIs
    // automatic_uploads: true,
    // file_picker_types: 'image',
    // init_instance_callback: function (ed) {
    //   ed.execCommand('mceImage');
    // }
  },


  actions : {
    /**
      Send createNews action and clear employee form data.
      @method createNews
    */
    createNews(){
      const data = this.get('data');
      this.sendAction('createNews', data);
      this.set('data', {});
    },
  }
});
