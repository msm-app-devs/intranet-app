import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
    // namespace: 'api',
    authorizer: 'authorizer:oauth2',
    host: 'http://apitest.q1q1.eu'
    // host: 'http://localhost:80/intranet-api'
});
