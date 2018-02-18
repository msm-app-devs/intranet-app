import DS from 'ember-data';

export default DS.Model.extend({
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
    @property file
    @type string
  */
  file: DS.attr('string')
});
