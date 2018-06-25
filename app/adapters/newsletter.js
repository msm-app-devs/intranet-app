import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import FormDataAdapterMixin from 'ember-cli-form-data/mixins/form-data-adapter';

export default DS.RESTAdapter.extend(DataAdapterMixin, FormDataAdapterMixin, {
  // namespace: 'api',
  authorizer: 'authorizer:oauth2',
  // host: 'http://q1q1.eu/employees',
  host: 'http://localhost:80/employees',
  // host: 'http://localhost:80/intranet-api'
});
