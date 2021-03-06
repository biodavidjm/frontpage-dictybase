'use strict';

/**
 * @ngdoc directive
 * @name frontMeetingsApp.directive:frontMeetings
 * @description
 * Directive for upcoming meetings on the frontPage
 */

angular
  .module('frontMeetingsApp', ['angularUtils.directives.dirPagination'])
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
        controller: function(dictyMeetingsFactory, $scope, $filter) {
          $scope.meetingsHeader = 'UPCOMING MEETINGS';
          $scope.meetings = {};
          dictyMeetingsFactory.getJasonFile( function(data) { 
            $scope.meetings = data;
          });
          
          // FILTER FOR ONLY FUTURE MEETINGS
          $scope.upComingMeetings = function(meeting) {

            // var date = new Date();
            var currentDate = $filter('date')(new Date(), 'yyyy.MM.dd');
            var meetingComing = meeting.dateF;
            if (meetingComing > currentDate) {
              return true;
            }

          };
        }
      };
    })
    .directive('frontMeetingsall', function() {
      return{
        restrict:'E',
        templateUrl:'scripts/frontMeetings/front-meetingsall.html',
        scope: true,
        controller: function(dictyMeetingsFactory, $scope, $filter) {
          $scope.meetingsHeaderAll = 'Upcoming Meetings';
          $scope.meetingsAll = {};
          $scope.clearFilter = function(){
            console.log('clearing the filter at meetings');
            $scope.query = '';
          };
          dictyMeetingsFactory.getJasonFile( function(data) { 
            $scope.meetingsAll = data;
          });


          // FILTER FOR ONLY FUTURE MEETINGS
          $scope.upComingMeetings = function(meeting) {
            
            var currentDate = $filter('date')(new Date(), 'yyyy.MM.dd');
            var meetingComing = meeting.dateF;
            if (meetingComing > currentDate) {
              return true;
            }
            
          };

          // Pagination variables and functions
          $scope.currentPage = 1;
          $scope.pageSize = 10;
          $scope.maxSize = 5;
          $scope.numberOfPages=function(){
              return Math.ceil($scope.meetingsAll.length/$scope.pageSize);                
          };
          $scope.moveUp = function() {
            window.scrollTo(0,0);
          };
        }
      };
    })
    // This controller handles updates in the navitation bar.
    .controller('BarControllersMeetings', ['$scope', function ($scope) {
      $scope.pageChangeHandler = function(num) {
        console.log('going to page ' + num);
      };
    }]);