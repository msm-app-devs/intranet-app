import Ember from 'ember';

const monthNames = ["January", "February", "March", "April", "May", "June",
 "July", "August", "September", "October", "November", "December"
];

export function format(params/*, hash*/) {
  const date = params[0];
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year  = date.getFullYear();

  return day + ' ' + month + ' ' + year;
}

export default Ember.Helper.helper(format);
