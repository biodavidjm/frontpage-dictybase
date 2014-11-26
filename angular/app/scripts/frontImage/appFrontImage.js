'use strict';

/**
 * @ngdoc directive 
 * @name dictyFooterApp
 * @description
 * directive of the main image of the dicty front page
 */

angular
  .module('frontImageApp', [])
  .directive('frontImage', function() {
    return{
      restrict:'E',
      templateUrl:'scripts/frontImage/front-image.html',
      scope: true,
      controller: function($scope) {
        $scope.name = 'Frontpage Main Image';
      }
    };
  });

  