'use strict';

/**
 * @ngdoc function
 * @name dictyFrontpageApp.controller:DownloadCtrl
 * @description
 * # DownloadCtrl
 * Controller of the dictyFrontpageApp
 */

angular.module('dictyFrontpageApp')
  .controller('DownloadController', function ($scope) {
    $scope.Stuff = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
