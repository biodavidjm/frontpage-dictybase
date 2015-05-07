'use strict';

describe('First clean test', function() {
  it('It contains spec with an expectation. This is a simple test to check that unit testing works', 
    function() {
      expect(true).toBe(true);
    });
});

// FACTORY
describe('The Factory dictyhfFactory', function() {

  var $httpBackend;

  beforeEach(module('dictyHeaderFooterApp'));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET('scripts/dictyHF/dicty-footer.html').respond(200, '');
  }));

});

// TESTING DIRECTIVE

describe('Testing the dictyFooter directive', function() {
  var $compile, $rootScope;

  //Load the application module that contains the directive:
  beforeEach(module('dictyHeaderFooterApp'));

  // Store the references to $rootScope and $compile: in this 
  // way, they will be available to all tests in this describe
  // block:
  
  beforeEach(inject(function(_$compile_, _$rootScope_){
    // Now the injecto will unwrap the underscore from around
    // the parameters names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;

  }));

  // it('Replaces the element with the appropiate content', function() {

  //   var element = $compile('<dicty-footer></dicty-footer>')($rootScope);

  //   $rootScope.$digest();

  //   $compile(element)($rootScope);

  // });



});




// DIRECTIVE 

describe('Directive: dictyFooter', function () {

  var element,scope,$compile;

  beforeEach(module('dictyHeaderFooterApp'));

  beforeEach(inject(function(_$compile_, $rootScope) {
      scope = $rootScope;
      $compile = _$compile_;
    }));

  it('should make the dicty-footer directive visible', inject(function ($compile) {
    element = angular.element('<dicty-footer></dicty-footer>');
    element = $compile(element)(scope);
  }));

});

// FACTORY TESTS

describe('mocking service http call', function() {

  beforeEach(module('dictyHeaderFooterApp'));

  var dictyHeaderFooterCtrl, $scope;

  describe('first with spies', function() {
    beforeEach(inject(function($controller, $rootScope, dictyhfFactory) {
      $scope = $rootScope.$new();

      spyOn(dictyhfFactory,'getJasonFile').and.callFake(function() {
        return {
          success: function(callback) { 
            callback({things: 'and stuff'});
          }
        };  
      });

      dictyHeaderFooterCtrl = $controller ('dictyHeaderFooterCtrl', { 
        $scope: $scope, dictyhfFactory: dictyhfFactory 
      });
    }));
  });

describe('with httpBackend', function() {
    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
      $scope = $rootScope.$new();
      
      $httpBackend.when('GET','templates/links.json')
        .respond({things: 'and stuff'});

      dictyHeaderFooterCtrl = $controller('dictyHeaderFooterCtrl', { $scope: $scope });
      $httpBackend.flush();
    }));
  });
});



// CONTROLLER TESTS
// 
// describe('Testing the controller: dictyHeaderFooterCtrl', function() {
  
//   beforeEach(module('dictyHeaderFooterApp'));

//   var controllerService, scope, httpMock;
  
//   beforeEach(inject(function($controller,$rootScope,$httpBackend) {
//     httpMock = $httpBackend;
//     scope = $rootScope.$new();
//     controllerService  = $controller('dictyHeaderFooterCtrl', {$scope: scope});
//   }));

//   it('should check that the dynamic sections are not null', function(){
//     expect(scope.sections.menus).not.toBeNull();
//   });

//   it('should access and check the title', function () {
//     expect(scope.footer).toEqual('Angular Dynamic Footer');
//   });

//   it('should mock the http service', function() {
//     httpMock.expectGET('templates/links.json');
//   });

// });


// describe ('Footer Controller, simple test', function() {

//   beforeEach(module('dictyHeaderFooterApp'));
  
//   var controller, scope;

//   beforeEach(inject(function($controller, $rootScope) {
//        scope = $rootScope.$new();
//        controller = $controller('dictyHeaderFooterCtrl', { $scope: scope});
//   }));
  
// });

// describe('UnitTesting: main controller', function() {
//   // Load the module with MainController
//   beforeEach(module('dictyHeaderFooterApp'));

//   var ctrl, scope;
//   // inject the $controller and $rootScope services
//   beforeEach(inject(function($controller, $rootScope) {
//     // Create a new scope that's a child of the $rootScope
//     scope = $rootScope.$new();
//     // Create the controller
//     ctrl = $controller('dictyHeaderFooterCtrl', {
//       $scope: scope
//     });
//   }));

//   it('should access the scope', function() {
//     expect(scope.footer).toBeDefined();
//     expect(scope.footer).toEqual('Angular Dynamic Footer');
//     expect(scope.header).toEqual('Angular Dynamic Header');
//   });
// });

// // New attempt. I have to inject the resource:
// // Unfinished 
// describe('Testing the Controller', function(){
//   var scope, ctrl, httpBackend;

//   beforeEach(module('dictyHeaderFooterApp'));

//   beforeEach(
//     inject(
//       function($controller, $rootScope, dictyhfFactory, $httpBackend) {
//         httpBackend = $httpBackend;
//         scope = $rootScope.$new();
//         ctrl = $controller('dictyHeaderFooterCtrl', {
//           $scope: scope, dictyhfFactory: dictyhfFactory });
//       }
//     )
//   );

// });


