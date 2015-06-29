'use strict';

/**
 * @ngdoc function
 * @name dictyFrontpageApp.controller:MainFrontpage
 * @description
 * # MainFrontpage
 * Controller of the dictyFrontpageApp
 */
angular.module('dictyFrontpageApp')
	.controller('researchViewCtrl', function ($scope) {
    	$scope.mainResearch = 'Research';
  	})
  	.controller('MediaController', function($scope, $routeParams) {
	  $scope.address = $routeParams.address;
	  console.log('address' + $scope.address);
	});
