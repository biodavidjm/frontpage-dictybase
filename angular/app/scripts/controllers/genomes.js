'use strict';

/**
 * @ngdoc function
 * @name dictyFrontpageApp.controller:GenomesCtrl
 * @description
 * # GenomesCtrl
 * Controller of the genomes view
 */

angular.module('dictyFrontpageApp')
  .controller('GenomesCtrl', function ($scope) {
    $scope.Stuff = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .directive('genomeCard', function() {
    return{
      restrict:'E',
      templateUrl:'templates/genome-card.html',
      scope: true,
      controller: function($scope) {
        $scope.title = 'Dicty Carousel Directive';
        $scope.species = [
            {name: 'Dictyostelium discoideum', file: 'images/dictyPic.png'}
        ];
      }
    };
  });
