import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

// NB Change type of ADAPTER to be the same as in eployees adapter - RESTAdapter
// NB Delete findALl()
// NB Delete findRecord()
// export default DS.Adapter.extend({
export default DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:oauth2',
  host: 'http://apitest.q1q1.eu'
});