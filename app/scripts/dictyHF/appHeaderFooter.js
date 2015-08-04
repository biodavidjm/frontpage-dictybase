'use strict';

/**
 * @ngdoc directive and factory
 * @name dictyFooterApp
 * @description
 * dictyFooterApp includes everything requires by the factory, directive and the controller within the directive.
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
                $log.error('EEERRRRROOOOORRRR parsing the link.json file!!! Take a look');
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
                $log.error('EEERRRRROOOOORRRR parsing the link.json file!!! Take a look!!');
            });
      }
    };
  })
  .directive('definitionBar', function() {
    return{
      restrict:'EA',
      templateUrl:'scripts/dictyHF/definition-bar.html',
      scope: {
        text: '@',
        look: '@',
        urlhome: '@',
        urlmain: '@',
        urlsub: '@',
        desaparece: '@'
      },
      controller: function($scope) {
        $scope.text = '';
        $scope.look = '';
        $scope.urlhome = '';
        $scope.urlmain = '';
        $scope.urlsub = '';
        $scope.desaparece = '';
      }
    };
  });  