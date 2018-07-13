import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

// NB Change type of ADAPTER to be the same as in eployees adapter - RESTAdapter
// export default DS.Adapter.extend({
export default DS.RESTAdapter.extend(DataAdapterMixin, {
// namespace: 'api',
authorizer: 'authorizer:oauth2',
host: 'http://localhost:80/employees'

});