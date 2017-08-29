import Mirage from 'ember-cli-mirage';

export default function() {
  this.namespace = '/api';

  this.get('/employees', function() {
    return {
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
  });

  this.post('/employees', function(schema, request) {
    const employee = JSON.parse(request.requestBody);
    const data = {
      "employee": [
        {
          "id": Math.floor(Math.random() * 1000),
          "externalId": Math.floor(Math.random() * 1000),
          "firstName": employee.firstName,
          "lastName": employee.lastName,
          "position": employee.position,
          "team": employee.team,
          "startDate": employee.startDate,
          "birthDay": employee.birthDay,
          }
        ]
    };

    return new Mirage.Response(200, {}, data);
  });

  this.put('/employees/:id', function(schema, request) {
    const employee = JSON.parse(request.requestBody);
    // const employeeId = Math.floor(Math.random() * 1000);
    const data = {
      "employee": [
        {
          // "id": employeeId,
          // "externalId": employeeId,
          "firstName": employee.firstName,
          "lastName": employee.lastName,
          "position": employee.position,
          "team": employee.team,
          "startDate": employee.startDate,
          "birthDay": employee.birthDay,
          }
        ]
    };

    return new Mirage.Response(200, {}, data);
  });

  this.delete('/employees/:id', function(schema, request) {
    var id = request.id;
    schema.db.employees.remove({ "id": id });

    return {};
  });
}
