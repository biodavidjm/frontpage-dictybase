'use strict';

/**
 * @ngdoc module 
 * @name frontNewsApp
 * @description
 * Module with the directive of the news at the front page
 */

angular
  .module('frontNewsApp', ['angularUtils.directives.dirPagination'])
    .factory('dictyNewsFactory', function ($http, $log) {
      return {
        getJasonFile: function(done) {
          $http.get('scripts/frontNews/news.json')
            .success(function(data) {
              done(data);
            })
            .error(function() {
              $log.error('ERROR while trying to retrieve the NEWS data');
            });
        }
      };
    })
    .directive('frontNews', function() {
      return{
        restrict:'E',
        templateUrl:'scripts/frontNews/front-news.html',
        scope: true,
        controller: function($scope, dictyNewsFactory) {
          $scope.newsHeader = 'DICTY NEWS';
          $scope.details = {};
          dictyNewsFactory.getJasonFile(function(data) {
              $scope.details = data;
          });
        }
      };
    })
    .directive('frontNewsall', function() {
      return{
        restrict:'E',
        templateUrl:'scripts/frontNews/front-newsall.html',
        scope: true,
        controller: function($scope, dictyNewsFactory) {
          $scope.newsHeaderAll = 'Dicty News';
          $scope.detailsAll = {};
          $scope.clearFilter = function(){
            console.log('clearing the filter');
            $scope.query = '';
          };
          dictyNewsFactory.getJasonFile(function(data) {
              $scope.detailsAll = data;
          });
          // Pagination variables and functions
          $scope.currentPage = 1;
          $scope.pageSize = 6;
          $scope.maxSize = 5;
          $scope.numberOfPages=function(){
              return Math.ceil($scope.detailsAll.length/$scope.pageSize);                
          };
          $scope.moveUp = function() {
            window.scrollTo(0,0);
          };
        }
      };
    })

    // This controller handles updates in the navitation bar.
    .controller('BarControllerNews', ['$scope', function ($scope) {
      $scope.pageChangeHandler = function(num) {
        console.log('going to page ' + num);
      };
    }]);