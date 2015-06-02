'use strict';

/**
 * @ngdoc directive
 * @name frontMeetingsApp.directive:frontMeetings
 * @description
 * Directive for upcoming meetings on the frontPage
 */

angular
  .module('frontMeetingsApp', [])
    .factory('dictyMeetingsFactory', function ($http, $log) {
      return {
        getJasonFile: function(done) {
          $http.get('scripts/frontMeetings/meetings.json')
            .success(function(data) {
              done(data);
            })
            .error(function() {
              $log.error('ERROR while trying to retrieve the MEETINGS info');
            });
        }
      };
    })
    .directive('frontMeetings', function() {
      return{
        restrict:'E',
        templateUrl:'scripts/frontMeetings/front-meetings.html',
        scope: true,
        controller: function(dictyMeetingsFactory, $scope) {
          $scope.meetingsHeader = 'UPCOMING MEETINGS';
          $scope.meetings = {};
          dictyMeetingsFactory.getJasonFile( function(data) { 
            $scope.meetings = data;
          });
        }
      };
    });
