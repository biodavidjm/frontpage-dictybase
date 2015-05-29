'use strict';

/**
 * @ngdoc module 
 * @name frontNewsApp
 * @description
 * Module with the directive of the news at the front page
 */

angular
  .module('frontNewsApp', [])
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
          $scope.newsHeaderAll = 'DICTY NEWS';
          $scope.detailsAll = {};
          dictyNewsFactory.getJasonFile(function(data) {
              $scope.detailsAll = data;
          });
        }
      };
    });