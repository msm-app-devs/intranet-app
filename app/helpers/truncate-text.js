import Ember from 'ember';

export function truncateText(params, hash) {
  var value = params[0];
  var len = hash.limit;
  var out = '';
  var subStringVar='';

  if (value !== undefined) {

    if (value.length > len) {
			subStringVar = value.substr (0, len-1);
			out = value.substr(0,subStringVar.lastIndexOf(" ")) + "...";
		}
		else {
			out = value;
		}
  } 
  else {
    out = '';
  }

  return out;
}

export default Ember.Helper.helper(truncateText);