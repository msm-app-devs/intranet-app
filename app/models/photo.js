import DS from 'ember-data';

export default DS.Model.extend({
    /**
      @property name
      @type string
    */
    filename: DS.attr('string'),
  
    /**
      @property size
      @type string
    */
    filesize: DS.attr('string'),

    /**
      @property url
      @type string
    */
    url: DS.attr('string'),
});
