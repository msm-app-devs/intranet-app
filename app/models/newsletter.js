import DS from 'ember-data';

export default DS.Model.extend({
  /**
    @property categoryId
    @type string
  */
  categoryId: DS.attr('number'),

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
  date: DS.attr('isodate'),

  /**
    @property attachment
    @type string
  */
  attachment: DS.attr('file'),

  /**
    @property url
    @type string
  */
  url: DS.attr('string'),

  /**
    @property fileType
    @type string
  */
  fileType: DS.attr('string'),

  /**
    @property fileSize
    @type string
  */
  fileSize: DS.attr('string')
});
