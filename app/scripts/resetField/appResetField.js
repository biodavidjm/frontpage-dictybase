'use strict';

/**
 * @ngdoc directive
 * @name resetField.directive:resetField
 * @description
 * # Directive for the conference box on the frontPage
 * Credits: adapted from https://github.com/amageed/angular-resetfield
 */

angular.module('resetFieldApp', [])

	.directive('resetField', ['$compile', '$timeout', function($compile, $timeout) {
	  return {
	    require: 'ngModel', 
	    scope: {},
	    controller: function($scope){},
	    link: function(scope, el, attrs, ctrl) {
	      // compiled reset icon template
	      var template = $compile('<i ng-show=\"enabled\" ng-mousedown=\"reset()\" class=\"fa fa-times-circle\"></i>')(scope);
	      el.after(template);

	      scope.reset = function() {
	        ctrl.$setViewValue(null);
	        ctrl.$render();
	        $timeout(function() {
	            el[0].focus();
	        }, 0, false);
	      };

	      el.bind('input', function() {
	        scope.enabled = !ctrl.$isEmpty(el.val());
	      })
	      .bind('focus', function() {
	        scope.enabled = !ctrl.$isEmpty(el.val());
	        scope.$apply();
	      })
	      .bind('blur', function() {
	        scope.enabled = false;
	        scope.$apply();
	      });
	    }
	  };
	}]);
