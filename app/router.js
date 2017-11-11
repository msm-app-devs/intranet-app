import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('home', function() {
  //   this.route('employees');
  //   this.route('employee', { path: '/employee/:employee_id' });
  // });

  this.route('home');
  this.route('map');
  this.route('news');
  this.route('events');
  this.route('employees');
  this.route('employee', { path: '/employee/:employee_id' });

  this.route('admin', { resetNamespace: true }, function() {
    this.route('news');
    this.route('events');
    this.route('employees');
    this.route('settings');
  });

});

export default Router;
