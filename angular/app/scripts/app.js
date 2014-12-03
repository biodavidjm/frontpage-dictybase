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
    'frontNewsApp'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/mainFrontpage.html',
        controller: 'MainFrontpageCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/download', {
        templateUrl: 'views/download.html',
        controller: 'DownloadCtrl'
      })
      .when('/genomes', {
        templateUrl: 'views/genomes.html',
        controller: 'GenomesCtrl'
      })
      .otherwise ({
        templateUrl: 'views/notyet.html',
      });
  });