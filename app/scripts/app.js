'use strict';

/**
 * @ngdoc overview
 * @name dictyFrontpageApp
 * @description
 * # dictyFrontpageApp
 *
 * Main module of the application.
 */

angular
  .module('dictyFrontpageApp', [
    'ngRoute',
    'ngTouch',
    'ngAnimate',
    'resetFieldApp',
    'dictyHeaderFooterApp',
    'frontImageApp',
    'frontNewsApp',
    'frontConferenceApp',
    'frontPapersApp',
    'frontStockCenterApp',
    'frontPopularsApp',
    'frontMeetingsApp',
    'definitionBarApp'
  ])
  // .config(function ($routeProvider, $locationProvider) {
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/mainFrontpage.html',
        controller: 'MainFrontpageController'
      })
      .when('/front', {
        templateUrl: 'views/mainFrontpage.html',
        controller: 'MainFrontpageController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'TopAboutController'
      })
      .when('/downloads', {
        templateUrl: 'views/download.html'
      })
      .when('/citation', {
        templateUrl: 'views/citeus.html'
      })
      .when('/news', {
        templateUrl: 'views/front-news-all.html' 
      })
      .when('/papers', {
        templateUrl: 'views/front-papers-all.html'
      })
      .when('/meetings', {
        templateUrl: 'views/front-meetings-all.html'      
      })
      .when('/research', {
        templateUrl: 'views/research.html'      
      })
      .when('/research\/techniques', {
        templateUrl: 'views/techniques/index.html'
      })
      .otherwise ({
        templateUrl: 'views/notyet.html',
      });

      // $locationProvider.html5Mode(true);
  });