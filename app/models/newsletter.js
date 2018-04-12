import DS from 'ember-data';

export default DS.Model.extend({
  /**
    @property type
    @type string
  */
 type: DS.attr('string'),

  /**
    @property title
    @type string
  */
  title: DS.attr('string'),

  /**
    @property description
    @type string
  */
  description: DS.attr('string'),

  /**
    @property date
    @type string
  */
  date: DS.attr('string'),

  /**
    @property fileName
    @type string
  */
 fileName: DS.attr('string'),

 /**
    @property fileDate
    @type string
  */
 fileDate: DS.attr('string'),

 /**
    @property fileType
    @type string
  */
 fileType: DS.attr('string'),

 /**
    @property fileSize
    @type string
  */
 fileSize: DS.attr('string'),
 
 /**
    @property filePath
    @type string
  */
 filePath: DS.attr('string')

});
