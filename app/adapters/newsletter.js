import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  // namespace: 'api',
  authorizer: 'authorizer:oauth2',
  host: 'http://q1q1.eu/employees',
  // host: 'http://localhost:80/intranet-api'

  findAll() {
    return [
      {
        id: '1',
        title: 'Newsletter #1',
        description: 'Issue 1',
        date: '23/4/2018',
        fileName: 'Newsletter1',
        fileDate: '23/4/2018',
        fileType: 'pdf',
        fileSize: '100kb',
        filePath: 'http://q1q1.eu/employees/webroot/files/Newsletter1.pdf',
        type: 'newsletter',
        files: ['1', '2']
      },
      {
        id: '2',
        title: 'Newsletter #2',
        description: 'Issue 2',
        date: '23/4/2018',
        fileName: 'Newsletter2',
        fileDate: '23/4/2018',
        fileType: 'pdf',
        fileSize: '100kb',
        filePath: 'http://q1q1.eu/employees/webroot/files/Newsletter2.pdf',
        type: 'newsletter',
        files: ['2']
      },
      {
        id: '3',
        title: 'Newsletter #3',
        description: 'Issue 3',
        date: '23/4/2018',
        fileName: 'Newsletter3',
        fileDate: '23/4/2018',
        fileType: 'pdf',
        fileSize: '100kb',
        filePath: 'http://q1q1.eu/employees/webroot/files/Newsletter3.pdf',
        type: 'newsletter',
        files: ['2']
      }
    ];
  },
  
  findRecord() {
    return {
      id: '1',
      title: 'Newsletter #1',
      description: 'Issue 1',
      date: '10/10/2010',
      fileName: 'Newsletter1',
      fileDate: '10/12/2017',
      fileType: 'pdf',
      fileSize: '100kb',
      filePath: 'http://q1q1.eu/employees/webroot/files/Newsletter1.pdf',
      type: 'newsletter',
      files: ['1', '2']
    };
  }
});
