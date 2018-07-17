import Ember from 'ember';

const monthNames = ["January", "February", "March", "April", "May", "June",
 "July", "August", "September", "October", "November", "December"
];

export function format(params/*, hash*/) {
  const date = moment(params[0]);
  const day = date.date();
  const month = monthNames[date.month()];
  const year  = date.year();

  return day + ' ' + month;
}

export default Ember.Helper.helper(format);
