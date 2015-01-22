'use strict';

/**
 * @ngdoc function
 * @name dictyFrontpageApp.controller:TechniquesController
 * @description
 * # TechniquesController
 * Controller of the dictyFrontpageApp
 */
angular.module('dictyFrontpageApp')
  .controller('TechniquesController', function ($scope) {
    $scope.Stuff = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
