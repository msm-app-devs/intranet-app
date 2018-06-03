import Ember from 'ember';
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
    @property isNew
    @type Boolean
  */
  minsToRead: Ember.computed('body', function() {
    const html = this.get('body');
    var div = document.createElement("div");
    div.innerHTML = html;
    const htmlLen = div.innerText.split(' ').length;
    const wordsPerMin = 120;
    const approximately = Math.round(htmlLen / wordsPerMin);

    return approximately;
  }),
});
``