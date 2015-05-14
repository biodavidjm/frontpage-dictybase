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
    'dictyHeaderFooterApp',
    'frontImageApp',
    'frontNewsApp',
    'frontConferenceApp',
    'frontPapersApp',
    'frontStockCenterApp',
    'frontPopularsApp'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/mainFrontpage.html',
        controller: 'MainFrontpageController'
      })
      .when('/main', {
        templateUrl: 'views/mainFrontpage.html',
        controller: 'MainFrontpageController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
      })
      .when('/download', {
        templateUrl: 'views/download.html',
        controller: 'DownloadController'
      })
      .when('/citeus', {
        templateUrl: 'views/citeus.html',
        controller: 'CiteusController'
      })
      .when('/genomes', {
        templateUrl: 'views/genomes.html',
        controller: 'GenomesController'
      })
      .when('/techniques', {
        templateUrl: 'views/techniques.html',
        controller: 'TechniquesController'
      })
      .otherwise ({
        templateUrl: 'views/notyet.html',
      });

      $locationProvider.html5Mode(true);
  });