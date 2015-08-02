'use strict';

/**
 * @ngdoc module 
 * @name frontPapersApp
 * @description
 * Module with the directive of the papers at the front page
 */

angular
  .module('frontPapersApp', ['angularUtils.directives.dirPagination'])
    .factory('dictyPapersFactory', function ($http, $log) {
      return {
        getJasonFile: function(done) {
          $http.get('scripts/frontPapers/papersDictyPubmed.json')
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
          // Pagination variables and functions
          $scope.currentPage = 1;
          $scope.pageSize = 10;
          $scope.maxSize = 5;
          $scope.numberOfPages=function(){
              return Math.ceil($scope.papersAll.length/$scope.pageSize);                
          };
          $scope.moveUp = function() {
            window.scrollTo(0,0);
          };
        }
      };
    })
    // This controller handles updates in the navitation bar.
    .controller('BarControllerPapers', ['$scope', function ($scope) {
      $scope.pageChangeHandler = function(num) {
        console.log('going to page ' + num);
      };
    }]);