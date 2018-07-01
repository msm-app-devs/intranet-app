import DS from 'ember-data';

export default DS.Model.extend({

  /**
    @property optionName
    @type string
  */
 optionName: DS.attr('string'),

 /**
    One to one relationship from `team` to `employee`
    @property employee
    @type DS.PromiseObject
  */
 employee: DS.belongsTo('employee')

});
		