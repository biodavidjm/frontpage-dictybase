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
  // anchor scroll option 1
  .run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
  }])
  .controller('AnchorController', ['$anchorScroll', '$location', '$scope', function ($anchorScroll, $location, $scope) 
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
  // Anchor Scroll option 2
  .controller('MainAnchorController', function($scope, $location, $anchorScroll) {
    $scope.scrollTo = function(id) {
       $location.hash(id);
       $anchorScroll.yOffset = 50;
    };
  })
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
      .when('/tools', {
        templateUrl: 'views/tools.html'
      })
      .when('/genomes', {
        templateUrl: 'views/genomes.html'
      })
      .when('/community', {
        templateUrl: 'views/community.html'
      })
      .when('/dsc', {
        templateUrl: 'views/dsc.html'
      })
      // EXPLORE
      .when('/explore', {
        templateUrl: 'views/explore/explore.html'
      })
      .when('/explore/teach', {
        templateUrl: 'views/explore/teach/index.html'
      })
      .when('/explore/teach/:name*', {
        templateUrl:  function(address) {
          return 'views/explore/teach/'+address.name;
          },
          controller: 'MediaController'
      })
      .when('/explore/learn', {
        templateUrl: 'views/explore/tutorial/index.html'
      })
      .when('/explore/gallery', {
        templateUrl: 'views/explore/Multimedia/index.html'
      })
      .when('/explore/gallery/:name*', { 
        templateUrl:  function(address) {
          return 'views/explore/Multimedia/'+address.name;
          },
          controller: 'MediaController'
      })
      .when('/explore/art', {
        templateUrl: 'views/explore/art/index.html'
      })
      .when('/explore/resources', {
        templateUrl: 'views/explore/genome_resources.html'
      })
      .when('/explore/resources/1', {
        templateUrl: 'views/explore/genomeseq.html'
      })
      .when('/explore/statistics', {
        templateUrl: 'views/explore/genome_statistics.html'
      })
      .when('/explore/links', {
        templateUrl: 'views/explore/other_links.html'
      })
      // RESEARCH
      .when('/research', {
        templateUrl: 'views/research/research.html'
      })
      .when('/tools/jbrowse', {
        templateUrl: 'views/jbrowse.html'
      })
      .when('/research/ontology', {
        templateUrl: 'views/research/dicty_anatomy_ontology.html'
      })
      .when('/research/codon', {
        templateUrl: 'views/research/codon.html'
      })
      .when('/research/nomenclature', {
        templateUrl: 'views/research/nomenclature_guidelines.html'
      })
      .when('/research/nomenclature/name', {
        templateUrl: 'views/research/naming_genes.html'
      })
      .when('/research/techniques', {
        templateUrl: 'views/research/techniques/index.html'
      })
      .when('/research/techniques/media/:name', {
        templateUrl:  function(address) {
          return 'views/research/techniques/media/'+address.name;
          },
          controller: 'MediaController'
      })
      .when('/research/techniques/molbio/:name', {
        templateUrl:  function(address) {
          return 'views/research/techniques/molbio/'+address.name;
          },
          controller: 'MediaController'
      })
      .when('/research/techniques/transformation/:name*', {
        templateUrl:  function(address) {
          return 'views/research/techniques/transformation/'+address.name;
          },
          controller: 'MediaController' 
      })
      .when('/research/techniques/geneex/:name*', { 
        templateUrl:  function(address) {
          return 'views/research/techniques/geneex/'+address.name;
          },
          controller: 'MediaController' 
      })
      .when('/research/techniques/microscopy/:name*', { 
        templateUrl:  function(address) {
          return 'views/research/techniques/microscopy/'+address.name;
          },
          controller: 'MediaController' 
      })
      .when('/research/techniques/biochem/:name*', { 
        templateUrl:  function(address) {
          return 'views/research/techniques/biochem/'+address.name;
          }
          // controller: 'MediaController' 
      })
      .when('/research/techniques/cytoskeleton/:name*', { 
        templateUrl:  function(address) {
          return 'views/research/techniques/cytoskeleton/'+address.name;
          },
          controller: 'MediaController' 
      })
      .when('/research/techniques/chemotaxis/:name*', { 
        templateUrl:  function(address) {
          return 'views/research/techniques/chemotaxis/'+address.name;
          },
          controller: 'MediaController' 
      })
      .otherwise ({
        templateUrl: 'views/notyet.html',
      });

      // $locationProvider.html5Mode(true);
  });
