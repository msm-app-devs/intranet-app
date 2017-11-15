import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  /**
    Fetches all `employee` from the store.
    @method model
    @return {DS.PromiseManyArray}
  */
  model() {
    return this.store.findAll('employee');
  },

  /**
    Set locations for display, and default to picking the first
    @method setupController
    @param {LocationsController} controller
    @param {LocationModel[]} model
    @public
  */
  setupController(controller, model) {
    controller.setProperties({
      'attrs.model': this._buildData(model),
      'attrs.table': {
        rows: [
          {
            'Browser': '<i class="fa fa-chrome"></i> Chrome',
            'November': '48.15%',
            'December': '46.22%',
            'change': '-1.93%',
            'relative': '-4.00%'
          },
          {
            'Browser': '<i class="fa fa-firefox"></i> Firefox',
            'November': '16.76%',
            'December': '16.34%',
            'change': '-0.42%',
            'relative': '-2.50%'
          },
          {
            'Browser': '<i class="fa fa-safari"></i> Safari',
            'November': '4.45%',
            'December': '4.24%',
            'change': '-0.21%',
            'relative': '-4.70%'
          }
        ]
        }
    });
  },

  /**
    Find and return the last 5 records into the model
    @method _findLastFiveEmployees
    @param {LocationModel[]} model
    @private
  */
  _buildData(model) {
    const modelArr = model.toArray();
    const data = { rows: [] };

    modelArr.forEach(item => {
      const body = {
        _id: item.id,
        firstName: item.data.firstName,
        lastName: item.data.lastName,
        position: item.data.position,
        team: item.data.team,
        startDate: item.data.startDate,
        birthday: item.data.birthday
      };

      data.rows.push(body);
    });
    console.log(data);
    return data;
  },
});
