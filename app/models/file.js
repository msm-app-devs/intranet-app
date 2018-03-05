import DS from 'ember-data';

export default DS.Model.extend({
  /**
    @property type
    @type string
  */
  type: DS.attr('string'),

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
    filePath: DS.attr('string'),

  /**
    One to many relationship from `file` to `benefit`
    @property benefit
    @type DS.PromiseManyArray
  */
  benefit: DS.belongsTo('benefit', {async: true})
});
