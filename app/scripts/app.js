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
  // Makes anchorScroll available everywhere
  .run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
  }])
  .controller('headerCtrl', ['$anchorScroll', '$location', '$scope', function ($anchorScroll, $location, $scope) 
  {
    $scope.gotoAnchor = function(x) 
    {
        var newHash = x;
        if ($location.hash() !== newHash) 
        {
          // set the $location.hash to `newHash` and
          // $anchorScroll will automatically scroll to it
          $location.hash(x);
        } 
        else 
        {
          // call $anchorScroll() explicitly,
          // since $location.hash hasn't changed
          $anchorScroll();
        }
    };
  }])
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
      .when('/explore', {
        templateUrl: 'views/explore/explore.html'      
      })
      .when('/explore/teach/:name*', { 
        templateUrl:  function(address) {
          return '/views/explore/teach/'+address.name;
          },
          controller: 'MediaController' 
      })
      .when('/tools/jbrowse', {
        templateUrl: 'views/jbrowse.html'      
      })
      .when('/research/techniques', {
        templateUrl: 'views/techniques/index.html'
      })
      .when('/research/techniques/media/:name', { 
        templateUrl:  function(address) {
          return '/views/techniques/media/'+address.name;
          },
          controller: 'MediaController' 
      })
      .when('/research/techniques/molbio/:name', { 
        templateUrl:  function(address) {
          return '/views/techniques/molbio/'+address.name;
          },
          controller: 'MediaController' 
      })
      .when('/research/techniques/transformation/:name*', { 
        templateUrl:  function(address) {
          return '/views/techniques/transformation/'+address.name;
          },
          controller: 'MediaController' 
      })
      .when('/research/techniques/geneex/:name*', { 
        templateUrl:  function(address) {
          return '/views/techniques/geneex/'+address.name;
          },
          controller: 'MediaController' 
      })
      .when('/research/techniques/microscopy/:name*', { 
        templateUrl:  function(address) {
          return '/views/techniques/microscopy/'+address.name;
          },
          controller: 'MediaController' 
      })
      .when('/research/techniques/biochem/:name*', { 
        templateUrl:  function(address) {
          return '/views/techniques/biochem/'+address.name;
          },
          controller: 'MediaController' 
      })
      .when('/research/techniques/cytoskeleton/:name*', { 
        templateUrl:  function(address) {
          return '/views/techniques/cytoskeleton/'+address.name;
          },
          controller: 'MediaController' 
      })
      .otherwise ({
        templateUrl: 'views/notyet.html',
      });

      // $locationProvider.html5Mode(true);
  });