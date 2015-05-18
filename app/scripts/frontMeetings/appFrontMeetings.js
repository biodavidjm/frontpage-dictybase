'use strict';

/**
 * @ngdoc directive
 * @name frontMeetingsApp.directive:frontMeetings
 * @description
 * Directive for upcoming meetings on the frontPage
 */

angular
  .module('frontMeetingsApp', [])
      .factory('dictyMeetingsFactory', function ($http) {
      return {
        getJasonFile: function() {
          return $http.get('scripts/frontMeetings/meetings.json');
        }
      };
    })

    .directive('frontMeetings', function() {
      return{
        restrict:'E',
        templateUrl:'scripts/frontMeetings/front-meetings.html',
        scope: true,
        controller: function(dictyMeetingsFactory, $scope, $log) {
          $scope.meetingsHeader = 'UPCOMING MEETINGS';
          $scope.meetings = {};
          dictyMeetingsFactory.getJasonFile()
            .success(function(data) {
              $scope.meetings = data;
            })
            .error(function() {
              $log.error('Error connecting to the get the MEETINGS!!');
            });
        }
      };
    });
