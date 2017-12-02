import DS from 'ember-data';

export default DS.Model.extend({
  /**
    @property title
    @type string
  */
  title: DS.attr('string'),

  /**
    @property date
    @type string
  */
  date: DS.attr('string'),

  /**
    @property body
    @type string
  */
  body: DS.attr('string'),

  /**
    @property author
    @type string
  */
  author: DS.attr('string'),

  /**
    @property image
    @type string
  */
  image: DS.attr('string')
});
