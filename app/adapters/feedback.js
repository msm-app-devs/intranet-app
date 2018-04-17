import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

// NB Change type of ADAPTER to be the same as in eployees adapter - RESTAdapter
// NB Delete findALl()
// NB Delete findRecord()
// export default DS.Adapter.extend({
export default DS.Adapter.extend(DataAdapterMixin, {
  // namespace: 'api',
  // authorizer: 'authorizer:oauth2',
  // host: 'http://q1q1.eu/employees',
  // host: 'http://localhost:80/intranet-api'

  findAll() {
    return [
      {
        email: 'mm@mm.mm',
        feedbackString: 'Feedback for this',
      }
    ];
  },
  
  findRecord() {
    return       {
      email: 'mm@mm.mm',
      feedbackString: 'Feedback for this',
    };
  }
});
