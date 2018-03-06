import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

// NB Change type of ADAPTER to be the same as in eployees adapter - RESTAdapter
// NB Delete findALl()
// NB Delete findRecord()
// export default DS.Adapter.extend({
export default DS.RESTAdapter.extend(DataAdapterMixin, {
  // namespace: 'api',
  authorizer: 'authorizer:oauth2',
  host: 'http://q1q1.eu/employees',
  // host: 'http://localhost:80/intranet-api'

  // findAll() {
  //   return [
  //     {
  //       id: '1',
  //       title: 'Benefit #1',
  //       description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. ',
  //       date: '10/10/2010',
  //       other: '',
  //       type: 'benefit',
  //       files: ['1', '2']
  //     },
  //     {
  //       id: '2',
  //       title: 'Benefit #2',
  //       description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. ',
  //       date: '10/10/2010',
  //       other: '',
  //       type: 'benefit',
  //       files: ['2']
  //     }
  //   ];
  // },
  //
  // findRecord() {
  //   return {
  //       id: '1',
  //       title: 'Benefit #1',
  //       description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. ',
  //       date: '10/10/2010',
  //       other: '',
  //       type: 'benefit',
  //       files: ['1', '2']
  //   };
  // }
});
