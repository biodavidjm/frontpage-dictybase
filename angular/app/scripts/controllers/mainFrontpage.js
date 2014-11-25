'use strict';

/**
 * @ngdoc function
 * @name dictyFrontpageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dictyFrontpageApp
 */
angular.module('dictyFrontpageApp')
  .controller('MainFrontpageCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
