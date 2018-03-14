import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
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

  this.route('articles', { resetNamespace: true }, function() {
    this.route('article', { path: '/article/:article_id' });
  });

  this.route('benefits', { resetNamespace: true }, function() {
    this.route('benefit', { path: '/benefit/:benefit_id' });
  });

  this.route('login', { resetNamespace: true }, function() {
    this.route('news');
    this.route('employees');
    this.route('settings');
  });
});

export default Router;
