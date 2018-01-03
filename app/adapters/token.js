import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  // namespace: 'api',
  host: 'http://q1q1.eu/admin'
  // host: 'http://localhost:80/intranet-api/admin'
});