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
  date: DS.attr('isodate'),

  /**
    @property formatedDate
    @type string
  */
  formatedDate: Ember.computed('date', function() {
    const date = this.get('date');
    const day = date.getDate();
    const month = parseInt(date.getMonth(), 10) + parseInt(1, 10);
    const year  = date.getFullYear();

    return day + '.' + month + '.' + year;
  }),

  /**
    @property body
    @type string
  */
  body: DS.attr('string'),

  /**
    @property author
    @type string
  */
  author: DS.attr('string')
});
