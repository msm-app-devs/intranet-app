import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  // serverTokenEndpoint: 'http://q1q1.eu/employees/token'
  serverTokenEndpoint: 'http://localhost:80/intranet-api/token'
});