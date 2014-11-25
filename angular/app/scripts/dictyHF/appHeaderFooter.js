'use strict';

/**
 * @ngdoc directive and factory
 * @name dictyFooterApp
 * @description
 * dictyFooterApp includes everything requires by the factury, directive and the controller within the directive.
 *
 * This is the main module of the application.
 */
angular
  .module('dictyHeaderFooterApp', [])
  .factory('dictyhfFactory', function ($http) {
    return {
      getJasonFile: function() {
        return $http.get('scripts/dictyHF/links.json');
      }
    };
  })
  .directive('dictyFooter', function() {
    return{
      restrict:'E',
      templateUrl:'scripts/dictyHF/dicty-footer.html',
      scope: true,
      controller: function(dictyhfFactory, $scope, $log) {

        $scope.title = 'Dynamic Footer';
        $scope.sections = {};

        dictyhfFactory.getJasonFile()
            .success(function(data){
                $scope.sections.menus = data;
            })
            .error(function() {
                $log.error('EEERRRRROOOOORRRR!!');
            });
      }
    };
  })
  .directive('dictyHeader', function() {
    return{
      restrict:'E',
      templateUrl:'scripts/dictyHF/dicty-header.html',
      scope: true,
      controller: function(dictyhfFactory, $scope, $log) {

        $scope.title = 'Dynamic Header';
        $scope.sections = {};

        dictyhfFactory.getJasonFile()
            .success(function(data){
                $scope.sections.menus = data;
            })
            .error(function() {
                $log.error('EEERRRRROOOOORRRR!!');
            });
      }
    };

  });

  