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
    @property files
    @type DS.PromiseManyArray
  */
  files: DS.hasMany('file')
});
