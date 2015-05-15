'use strict';

/**
 * @ngdoc directive
 * @name frontMeetingsApp.directive:frontMeetings
 * @description
 * Directive for upcoming meetings on the frontPage
 */

angular
  .module('frontMeetingsApp', [])
    .directive('frontMeetings', function() {
      return{
        restrict:'E',
        templateUrl:'scripts/frontMeetings/front-meetings.html',
        scope: true,
        controller: function($scope) {
          $scope.meetingsHeader = 'Upcoming Meetings';
        }
      };
    });
