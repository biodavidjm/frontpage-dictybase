'use strict';

/**
 * @ngdoc function
 * @name dictyFrontpageApp.controller:GenomesCtrl
 * @description
 * # GenomesCtrl
 * Controller of the genomes view
 */

angular.module('dictyFrontpageApp')
  .controller('GenomesController', function ($scope) {
    $scope.Stuff = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.genomes = 'DICTYOSTELID GENOMICS';
    $scope.comparative = 'COMPARATIVE GENOMICS';
  })
  .directive('genomeCard', function() {
    return{
      restrict:'E',
      templateUrl:'templates/genome-card.html',
      scope: true,
    };
});


