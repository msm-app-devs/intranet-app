import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: 'http:///localhost:80/employees/admin'
  // serverTokenEndpoint: 'http://localhost:80/intranet-api/admin'
});