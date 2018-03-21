import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    const date = moment(serialized).format('DD MMMM YYYY');
  
    return date;
  },

  serialize(deserialized) {
    const date = moment(deserialized).format();

    return date;
  }
});
