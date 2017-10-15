import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  // namespace: 'api',
  host: 'http://q1q1.eu/employees/employees/list'
});
