'use strict';

/**
 * @ngdoc directive
 * @name frontPopulars.directive:frontPopulars
 * @description
 * Directive for Popular tools and sections of the dictyBase
 */

angular
	.module('frontPopularsApp', [])
		.directive('frontPopulars', function(){
			return {
				restrict:'E',
				templateUrl: 'scripts/frontPopulars/front-populars.html'
			};

		});