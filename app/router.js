import EmberRouter from '@ember/routing/router';
import config from './config/environment';
// add-on which scroll to page top on transition, like a non-SPA website.
// should be considered for core implementation after Ember 2.13, try to remove after upgrade.
import RouterScroll from 'ember-router-scroll';
// to import Google Analytics 
import googlePageview from './mixins/google-pageview';

const Router = EmberRouter.extend(RouterScroll, googlePageview, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('map');
  // this.route('news'); // TODO: folder/route to be deleted.
  this.route('statistics');

  this.route('employees', { resetNamespace: true }, function() {
    this.route('employee', { path: '/employee/:employee_id' });
  });

  this.route('hr-folder', { resetNamespace: true }, function() {
    this.route('hr-newsletter');
    this.route('hr-first');
    this.route('hr-documents');
    this.route('hr-recruitment');
    this.route('hr-practicies');
  });

  this.route('pdf-viewer', { path: '/pdf-viewer/:pdf-viewer_id' });

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
