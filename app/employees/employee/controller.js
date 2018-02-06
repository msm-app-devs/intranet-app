import Ember from 'ember';

export default Ember.Controller.extend({
  chartOptions: {
    chart: {
      type: 'pie',

      // Explicitly tell the width and height of a chart
      width: 300,
      height: 300
    },
    title: {
      text: 'Days in company compared to the veterans'
    },
    plotOptions: {
      pie: {
          allowPointSelect: false,
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
              distance: -50,
              filter: {
                  property: 'percentage',
                  operator: '>',
                  value: 4
              }
          }
      }
  },
  series: [{
    name: 'Days in the company',
    data: [
        { name: 'Galin Radev', y: 36.33 },
        { name: 'Other', y: 63.67 }
    ]
  }]
  },

  chartData: [{
    name: 'Jane',
    data: [1, 0, 4]
  }, {
    name: 'John',
    data: [5, 7, 3]
  }],

  chartOptions2: {
    chart: {
      type: 'pie',

      // Explicitly tell the width and height of a chart
      width: 300,
      height: 300
    },
    title: {
      text: 'Days in the team compared to the team veterans'
    },
    plotOptions: {
      pie: {
          allowPointSelect: false,
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
              distance: -50,
              filter: {
                  property: 'percentage',
                  operator: '>',
                  value: 4
              }
          }
      }
  },
  series: [{
    name: 'Days in the company',
    data: [
        { name: 'Galin Radev', y: 56.33 },
        { name: 'Other', y: 43.67 }
    ]
  }]
  },

  chartData2: [{
    name: 'Jane',
    data: [1, 0, 4]
  }, {
    name: 'John',
    data: [5, 7, 3]
  }],

  actions: {
    /**
      Load previous employee in the store.
      @method prevEmloyee
      @param {Object} currentEmployee
    */
    prevEmployee(currentEmployee) {
      const data = this.store.peekAll('employee');
      const currentEmployeePosition = data.indexOf(currentEmployee);
      const prevEmployeePosition = data.toArray()[currentEmployeePosition - 1];

      if (prevEmployeePosition) {
        this.transitionToRoute('employees.employee', prevEmployeePosition.id);
      }
    },

    /**
      Load next employee in the store.
      @method nextEmployee
      @param {Object} currentEmployee
    */
    nextEmployee(currentEmployee) {
      const data = this.store.peekAll('employee');
      const currentEmployeePosition = data.indexOf(currentEmployee);
      const nextEmployeePosition = data.toArray()[currentEmployeePosition + 1];

      if (nextEmployeePosition) {
        this.transitionToRoute('employees.employee', nextEmployeePosition.id);
      }
    }
  }
});
