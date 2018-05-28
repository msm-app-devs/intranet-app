import Ember from 'ember';

export default Ember.Component.extend({
  data: {
    message: ''
  },

  options: {
    selector: 'textarea',
    height: 500,
    theme: 'modern',
    plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help',
    toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | image | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
    image_advtab: true,
    // without images_upload_url set, Upload tab won't show up
    images_upload_url: 'http://q1q1.eu/employees/webroot/testimagenews.php',
    // enable title field in the Image dialog
    image_title: true,
    // enable automatic uploads of images represented by blob or data URIs
    automatic_uploads: true,
    file_picker_types: 'image',
    init_instance_callback: function (ed) {
      ed.execCommand('mceImage');
    }
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
