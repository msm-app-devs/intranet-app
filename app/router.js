import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('map');
  this.route('news');
  this.route('statistics');
  this.route('employees', { resetNamespace: true }, function() {
    this.route('employee', { path: '/employee/:employee_id' });
  });

  this.route('login', { resetNamespace: true }, function() {
    this.route('news');
    this.route('employees');
    this.route('settings');
  });

});

export default Router;
