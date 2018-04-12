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
      },
      {
        id: '2',
        title: 'Newsletter #2',
        description: 'Issue 2',
        date: '12/10/2010',
        fileName: 'Newsletter2',
        fileDate: '10/12/2017',
        fileType: 'pdf',
        fileSize: '100kb',
        filePath: 'http://q1q1.eu/employees/webroot/files/Newsletter2.pdf',
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
