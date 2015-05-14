'use strict';

/**
 * @ngdoc directive
 * @name frontConferenceApp.directive:frontConference
 * @description
 * # Directive for the conference box on the frontPage
 */

angular
  .module('frontConferenceApp', [])
    .directive('frontConference', function() {
      return{
        restrict:'E',
        templateUrl:'scripts/frontConference/front-conference.html',
        scope: true,
        controller: function($scope) {
          $scope.conferenceHeader = 'UPCOMING MEETINGS';
        }
      };
    });

// angular
//   .module('frontConferenceApp',[])
//     .directive('frontConference', function () {
//       return {
//         template: '<div></div>',
//         restrict: 'E',
//         link: function postLink(scope, element) {
//           element.text('Upcoming meetings');
//         }
//       };
//     });
