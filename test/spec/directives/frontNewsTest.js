// Unit testing the appFrontNews.js module

'use strict';

describe('Checking the factory', function (){

	var dictyNewsFactory, $httpBackend;

  beforeEach(module('frontNewsApp'));

	beforeEach(function(){
		inject(function(_dictyNewsFactory_) {
			dictyNewsFactory = _dictyNewsFactory_;
		});
	});

  beforeEach(inject(function($injector) {
    // Set up the mock http service responses
    $httpBackend = $injector.get('$httpBackend');
   }));

  afterEach(function() {
   $httpBackend.verifyNoOutstandingExpectation();
   $httpBackend.verifyNoOutstandingRequest();
  });

	// check to see if it has the expected fucntion:
	it ('should hava a getJasonFile function', function() {
    expect(angular.isFunction(dictyNewsFactory.getJasonFile)).toBe(true);
	});

});


describe('testing frontNewsApp', function() {
    var scope, httpBackend;

    // Initialization of the AngularJS application before each test case
    beforeEach(module('frontNewsApp'));

    // Injection of dependencies, $http will be mocked with $httpBackend
    beforeEach(inject(function($rootScope, $httpBackend) {
        scope = $rootScope.$new();
        httpBackend = $httpBackend;
    }));


    it('should query the webservice', function() {

        // Which HTTP requests do we expect to occur, and how do we response?
        // httpBackend.expectGET('/scripts/frontNews/news.json').respond('[{"source": "dictyBase"}, {"source": "Petra Fey"}]');

        // Triggering the AngularJS digest cycle in order to resolve all promises
        // scope.$apply();

        // We expect the controller to put the right value onto the scope
        // expect(scope.details).toEqual('dictyBase');

    });

});

describe('TESTING FRONT-NEWS directive', function() {

  var element, scope, dictyNewsFactory, $httpBackend;

  beforeEach(module('frontNewsApp'));

  beforeEach(module('scripts/frontNews/front-news.html'));

  beforeEach(function(){
    inject(function(_dictyNewsFactory_) {
      dictyNewsFactory = _dictyNewsFactory_;
    });
  });

  beforeEach(inject(function($injector) {
    // Set up the mock http service responses
    $httpBackend = $injector.get('$httpBackend');
   }));

  afterEach(function() {
   $httpBackend.verifyNoOutstandingExpectation();
   $httpBackend.verifyNoOutstandingRequest();
  });

  beforeEach(inject(function ($compile, $rootScope) {

    scope = $rootScope.$new();
    element = angular.element('<front-news></front-news>');
    $compile(element)(scope);
    $rootScope.$digest();

  }));

  // it('should load the front-conference template', function(){
    
  //   expect(element.html()).toContain('newsMain');
  //   expect(element.html()).toContain('newsHeader');
    
  // });

});

// Increases the coverage but it gives an error
// 
// describe('frontNews directive', function() {
//   var element, scope, dictyNewsFactory;

//   beforeEach(module('frontNewsApp'));
  
//   beforeEach(module('scripts/frontNews/front-news.html'));

//   // beforeEach(function(){
//   //   inject(function(_dictyNewsFactory_) {
//   //     dictyNewsFactory = _dictyNewsFactory_;
//   //   });
//   // });

//   beforeEach(inject(function($rootScope, $compile, _dictyNewsFactory_) {

//     scope = $rootScope;
//     element = angular.element('<front-news></front-news>');
//     dictyNewsFactory = _dictyNewsFactory_;
//     $compile(element)(scope);
//     $rootScope.$digest();

//   }));

//   it('renders the dicty news', function() {
//     expect(element.html()).toContain('newsHeader');
//   });

// });
