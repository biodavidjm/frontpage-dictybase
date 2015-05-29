'use strict';

/**
 * @ngdoc function
 * @name newsAllController
 * @description
 * # newsAllController
 */
angular.module('dictyFrontpageApp')
  .controller('NewsAllController', function ($scope) {
    $scope.Stuff = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
