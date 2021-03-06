'use strict';

/**
 * @ngdoc module 
 * @name frontImageApp
 * @description
 * Module with the directive of the image for the dicty front page
 */

angular
  .module('frontImageApp', ['ui.bootstrap'])
  .controller('FrontImageController', ['$scope', function FrontImageController($scope){
    $scope.name = 'Dicty Carousel Directive';
    $scope.myInterval = 5000;
    $scope.slides = [
        {image: 'images/dictyPic.png', description: 'Whatever'},
        {image: 'images/dictyFront02.jpg', description: 'Whatever'},
        {image: 'images/dictyFront01.jpg', description: 'Whatever'},
        {image: 'images/dictyFront03.jpg', description: 'Whatever'},
        {image: 'images/dictyFront04.jpg', description: 'Whatever'},
    ];
  }])
  .directive('frontImage', function() {
    return{
      restrict:'E',
      templateUrl:'scripts/frontImage/front-image.html',
      scope: true,
      controller: 'FrontImageController'
    };
  });
  