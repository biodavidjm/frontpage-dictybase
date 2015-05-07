'use strict';

/**
 * @ngdoc function
 * @name dictyFrontpageApp.controller:CiteusController
 * @description
 * # CiteusController
 * Controller of the dictyFrontpageApp
 */

angular.module('dictyFrontpageApp')
  .controller('CiteusController', function ($scope) {
    $scope.Stuff = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
