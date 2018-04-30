import Ember from 'ember';

export function getFirstImage(params) {
  var value = params[0].toString();
  var out = '';
  var subStringVar='';
  var firstImageIndex=0;

  if (value !== undefined) {

    if (value.indexOf("src=") > -1) {
      firstImageIndex = value.indexOf('src="');
      subStringVar = value.substr (firstImageIndex + 5, value.length);
      subStringVar = subStringVar.substr(0,(subStringVar.indexOf('"')));
      out = subStringVar;
		}
		else {
      // out = '/images/defaultArticle.png';
      out = 'http://q1q1.eu/employees/webroot/testnews/1520443467357.jpg';
		}
  } 
  else {
      // out = '/images/defaultArticle.png';
      out = 'http://q1q1.eu/employees/webroot/testnews/1520443467357.jpg';
  }

  return out;
}

export default Ember.Helper.helper(getFirstImage);