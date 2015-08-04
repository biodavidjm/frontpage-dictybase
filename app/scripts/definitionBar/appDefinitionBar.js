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
          look: '@',
          urlhome: '@',
          urlmain: '@',
          urlsub: '@',
          desaparece: '@'
        },
        controller: function($scope) {
          $scope.text = '';
          $scope.look = '';
          $scope.urlhome = '';
          $scope.urlmain = '';
          $scope.urlsub = '';
          $scope.desaparece = '';
        }
      };
    });
