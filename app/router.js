import EmberRouter from '@ember/routing/router';
import config from './config/environment';
// add-on which scroll to page top on transition, like a non-SPA website.
// should be considered for core implementation after Ember 2.13, try to remove after upgrade.
import RouterScroll from 'ember-router-scroll';

const Router = EmberRouter.extend(RouterScroll, {
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
