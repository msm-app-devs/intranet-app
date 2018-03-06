import Ember from 'ember';

export function getFirstImage(params) {
  var value = params[0].toString();
  var out = '';
  var subStringVar='';
  var firstImageIndex=0;

  if (value !== undefined) {

    if (value.indexOf("src=") > -1) {
      firstImageIndex = value.indexOf("src=");
      subStringVar = value.substr (firstImageIndex, value.length);
      subStringVar = subStringVar.substr(5,(subStringVar.indexOf(" ")-6));
			out = subStringVar;
		}
		else {
      // out = '/images/defaultArticle.png';
      out = 'https://www.gemseek.com/uploads/GemSeek_June_Web_Li_04_be0j7ah1i43w.png';
		}
  } 
  else {
      // out = '/images/defaultArticle.png';
      out = 'https://www.gemseek.com/uploads/GemSeek_June_Web_Li_04_be0j7ah1i43w.png';
  }

  return out;
}

export default Ember.Helper.helper(getFirstImage);