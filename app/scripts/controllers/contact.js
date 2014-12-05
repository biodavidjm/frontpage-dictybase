'use strict';

/**
 * @ngdoc function
 * @name dictyFrontpageApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the dictyFrontpageApp
 */
angular.module('dictyFrontpageApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.Stuff = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
