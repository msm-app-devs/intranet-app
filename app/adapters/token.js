import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  // namespace: 'api',
  host: 'http://localhost:80/employees/admin'
  // host: 'http://localhost:80/intranet-api/admin'
});