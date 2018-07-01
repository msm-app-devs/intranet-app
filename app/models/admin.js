import DS from 'ember-data';

export default DS.Model.extend({
  /**
    @property type
    @type string
  */
 access_token: DS.attr('string')
});