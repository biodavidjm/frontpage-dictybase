'use strict';

/**
 * @ngdoc module 
 * @name frontPapersApp
 * @description
 * Module with the directive of the papers at the front page
 */

angular
  .module('frontPapersApp', [])
    .factory('dictyPapersFactory', function ($http, $log) {
      return {
        getJasonFile: function(done) {
          $http.get('scripts/frontPapers/papers.json')
            .success(function(data) {
              done(data);
            })
            .error(function() {
              $log.error('ERROR while trying to retrieve the PAPERS');
            });
        }
      };
    })
    .directive('frontPapers', function() {
      return{
        restrict:'E',
        templateUrl:'scripts/frontPapers/front-papers.html',
        scope: true,
        controller: function(dictyPapersFactory, $scope) {
          $scope.papersHeader = 'LATEST PAPERS';
          $scope.papers = {};
          dictyPapersFactory.getJasonFile(function(data) {
            $scope.papers = data;
          });
        }
      };
    })

    .directive('frontPapersall', function() {
      return{
        restrict:'E',
        templateUrl:'scripts/frontPapers/front-papersall.html',
        scope: true,
        controller: function(dictyPapersFactory, $scope) {
          $scope.papersHeaderAll = 'Dicty Papers';
          $scope.papersAll = {};
          dictyPapersFactory.getJasonFile( function(data) {
            $scope.papersAll = data;
          });
        }
      };
    });