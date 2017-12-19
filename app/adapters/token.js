import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  // namespace: 'api',
  // host: 'http://q1q1.eu/token'
  host: 'http://localhost:80/intranet-api/token'
});