import DS from 'ember-data';

// NB Change type of ADAPTER to be the same as in eployees adapter - RESTAdapter
// NB Delete findALl()
// NB Delete findRecord()
export default DS.Adapter.extend({
  // namespace: 'api',
  authorizer: 'authorizer:oauth2',
  host: 'http://q1q1.eu/employees',
  // host: 'http://localhost:80/intranet-api'
  findAll() {
    return [
      {
        id: '1',
        title: 'Benefit #1',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. ',
        date: '10/10/2010',
        file: 'https://image.flaticon.com/icons/svg/306/306435.svg',
        other: ''
      },
      {
        id: '2',
        title: 'Benefit #2',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. ',
        date: '10/10/2010',
        file: 'https://image.flaticon.com/icons/svg/306/306435.svg',
        other: ''
      }
    ];
  },

  findRecord() {
    return {
        id: '1',
        title: 'Benefit #1',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. ',
        date: '10/10/2010',
        file: 'https://image.flaticon.com/icons/svg/306/306435.svg',
        other: ''
    };
  }
});
