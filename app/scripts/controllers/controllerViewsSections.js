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
	.run(['$anchorScroll', function($anchorScroll) {
		$anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
	}])
	.controller('headerCtrl', ['$anchorScroll', '$location', '$scope', function ($anchorScroll, $location, $scope) 
	{
		$scope.gotoAnchor = function(x) 
		{
		  	// var newHash = 'anchor' + x;
		  	var newHash = x;
		  	if ($location.hash() !== newHash) 
		  	{
		    	// set the $location.hash to `newHash` and
		   		// $anchorScroll will automatically scroll to it
		    	// $location.hash('anchor' + x);
		    	$location.hash(x);
		  	} 
		  	else 
		  	{
			    // call $anchorScroll() explicitly,
			    // since $location.hash hasn't changed
			    $anchorScroll();
		  	}
		};
	}
]);