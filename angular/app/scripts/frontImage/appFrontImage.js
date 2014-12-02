'use strict';

/**
 * @ngdoc module 
 * @name frontImageApp
 * @description
 * Module with the directive of the main image of the dicty front page
 */

angular
  .module('frontImageApp', ['ui.bootstrap'])
  .directive('frontImage', function() {
    return{
      restrict:'E',
      templateUrl:'scripts/frontImage/front-image.html',
      scope: true,
      controller: function($scope) {
        $scope.name = 'Dicty Carousel Directive';
        $scope.myInterval = 8000;
        $scope.slides = [
            {image: 'images/dictyPic.png', description: 'Whatever'},
            {image: 'images/dev.jpg', description: 'Whatever'}
        ];
      }
    };
  });