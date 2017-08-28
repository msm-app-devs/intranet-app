import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',

  /**
    Get all employees from API
    @method download
    @return {Promise} resolves to `RecordArray`
  */
  findAll() {
    const empArray = {
      "employee": [
        {
          "id": 1,
          "externalId": 1,
          "firstName": "John",
          "lastName": "Owen",
          "position": "UI Developer",
          "team": "Mobile Team",
          "startDate": "12.05.2016",
          "birthDay": "05.08.1986"
        },
        {
          "id": 2,
          "externalId": 2,
          "firstName": "Michael",
          "lastName": "Carrick",
          "position": "UI Developer",
          "team": "Mobile Team",
          "startDate": "12.05.2016",
          "birthDay": "05.08.1986"
        },
        {
          "id": 3,
          "externalId": 3,
          "firstName": "David",
          "lastName": "Bradley",
          "position": "UI Developer",
          "team": "Mobile Team",
          "startDate": "12.05.2016",
          "birthDay": "05.08.1986"
        }
      ]
    };

    return empArray;
  },

  // findAll() {
  //   const locationURL = this.buildURL();
  //   const url = `${locationURL}/employee`;

  //   return this.ajax('GET', url);
  // }
});
