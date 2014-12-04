'use strict';

/**
 * @ngdoc function
 * @name dictyFrontpageApp.controller:MainFrontpage
 * @description
 * # MainFrontpage
 * Controller of the dictyFrontpageApp
 */
angular.module('dictyFrontpageApp')
  .controller('MainFrontpageCtrl', function ($scope) {
    $scope.Stuff = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
