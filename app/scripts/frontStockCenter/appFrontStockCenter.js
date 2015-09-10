'use strict';

/**
 * @ngdoc module directive
 * @name frontStockCenterApp.directive:frontStockCenter
 * @description
 * # Directive for the Stock Center shortcut shown in
 * the front page
 */

angular
  .module('frontStockCenterApp', [])
    .directive('frontStockcenter', function() {
      return{
        restrict:'E',
        templateUrl:'scripts/frontStockCenter/front-stockcenter.html',
        scope: true,
        controller: function($scope) {
          $scope.stockcenterHeader = 'DICTY STOCK CENTER';
          $scope.stockcenterSubHead = 'New items';
        }
      };
    });

