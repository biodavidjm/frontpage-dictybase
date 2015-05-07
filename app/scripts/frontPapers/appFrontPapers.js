'use strict';

/**
 * @ngdoc module 
 * @name frontPapersApp
 * @description
 * Module with the directive of the papers at the front page
 */

angular
  .module('frontPapersApp', [])
    .factory('dictyPapersFactory', function ($http) {
      return {
        getJasonFile: function() {
          return $http.get('scripts/frontPapers/papers.json');
        }
      };
    })
    .directive('frontPapers', function() {
      return{
        restrict:'E',
        templateUrl:'scripts/frontPapers/front-papers.html',
        scope: true,
        controller: function(dictyPapersFactory, $scope, $log) {
          $scope.papersHeader = 'LATEST PAPERS';
          $scope.papers = {};
          dictyPapersFactory.getJasonFile()
            .success(function(data) {
              $scope.papers = data;
            })
            .error(function() {
              $log.error('Error connecting to the PAPERS!!');
            });
        }
      };
    });