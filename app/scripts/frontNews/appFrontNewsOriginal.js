'use strict';

/**
 * @ngdoc module 
 * @name frontNewsApp
 * @description
 * Module with the directive of the news at the front page
 */

angular
  .module('frontNewsApp', [])
    .factory('dictyNewsFactory', function ($http) {
      return {
        getJasonFile: function() {
          return $http.get('scripts/frontNews/news.json');
        }
      };
    })
    .directive('frontNews', function() {
      return{
        restrict:'E',
        templateUrl:'scripts/frontNews/front-news.html',
        scope: true,
        controller: function(dictyNewsFactory, $scope, $log) {
          $scope.newsHeader = 'DICTY NEWS';
          $scope.details = {};
          dictyNewsFactory.getJasonFile()
            .success(function(data) {
              $scope.details = data;
            })
            .error(function() {
              $log.error('Error connecting to the NEWS!!');
            });
        }
      };
    });