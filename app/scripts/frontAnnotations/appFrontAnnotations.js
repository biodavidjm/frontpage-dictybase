'use strict';

/**
 * @ngdoc module directive
 * @name frontAnnotationsApp.directive:frontStockCenter
 * @description
 * # Directive for the Stock Center shortcut shown in
 * the front page
 */

angular
  .module('frontAnnotationsApp', [])
    .directive('frontAnnotations', function() {
      return{
        restrict:'E',
        templateUrl:'scripts/frontAnnotations/front-annotations.html',
        scope: true,
        controller: function($scope) {
          $scope.annotationsHeader = 'RECENT ANNOTATIONS';
        }
      };
    });

