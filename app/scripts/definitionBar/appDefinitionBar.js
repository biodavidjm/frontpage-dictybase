'use strict';

/**
 * @ngdoc module 
 * @name definitionBar
 * @description
 * Module with the directive of the definition bar for links
 */

angular
  .module('definitionBarApp', [])
    .directive('definitionBar', function() {
      return{
        restrict:'EA',
        templateUrl:'scripts/definitionBar/definition-bar.html',
        scope: {
          text: '@',
          look: '@'
        },
        controller: function($scope) {
          $scope.text = '';
          $scope.look = '';
        }
      };
    });
