import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

// NB Change type of ADAPTER to be the same as in eployees adapter - RESTAdapter
// NB Delete findALl()
// NB Delete findRecord()
// export default DS.Adapter.extend({
export default DS.RESTAdapter.extend(DataAdapterMixin, {
// namespace: 'api',
authorizer: 'authorizer:oauth2',
host: 'http://apitest.q1q1.eu'
// host: 'http://localhost:80/intranet-api'
//
//   findAll() {
//     return [
//                 {
//                     id: '1',
//                     optionName: 'cQuest'
//                 },
//                 {
//                     id: '2',
//                     optionName: 'gemSeek'
//                 }
//
//             ]
//   },
//   findRecord() {
//     return {
//                   id: '1',
//                   optionName: "cQuest"
//               };
//   }
});