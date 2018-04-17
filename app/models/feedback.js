import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  /**
    @property email
    @type String
  */
  email: DS.attr('string'),

  /**
    @property feedbackString
    @type String
  */
  feedbackString: DS.attr('string'),

});
