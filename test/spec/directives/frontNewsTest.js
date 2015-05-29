// Unit testing the appFrontNews.js module

'use strict';

describe('Unit testing the front-news directive', function() {
  var $compile,
      $rootScope,
      $httpBackend,
      dictyNewsFactory;

  beforeEach(module('frontNewsApp'));

  beforeEach(module('scripts/frontNews/front-news.html'));

  beforeEach(function(){
    inject(function(_dictyNewsFactory_) {
      dictyNewsFactory = _dictyNewsFactory_;
    });
  });

  beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    // $httpBackend.whenGET('scripts/frontNews/news.json').passThrough();
  }));

  afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
  });


  it ('TEST 1 should have a getJasonFile function', function() {
    expect(angular.isFunction(dictyNewsFactory.getJasonFile)).toBe(true);
  });

});


describe('Unit testing the front-newsall directive', function() {
  var $compile,
      $rootScope,
      $httpBackend,
      dictyNewsFactory;

  beforeEach(module('frontNewsApp'));

  beforeEach(module('scripts/frontNews/front-newsall.html'));

  beforeEach(function(){
    inject(function(_dictyNewsFactory_) {
      dictyNewsFactory = _dictyNewsFactory_;
    });
  });

  beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    // $httpBackend.whenGET('scripts/frontNews/news.json').passThrough();
  }));

  afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
  });


  it ('TEST 2 should have a getJasonFile function', function() {
    expect(angular.isFunction(dictyNewsFactory.getJasonFile)).toBe(true);
  });

});



// describe('frontNewsApp', function () {
//     var controller = null, $scope = null, $httpBackend = null;
    
//     beforeEach(function () {
//         module('frontNewsApp');
//     });
    
//     beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
//         $httpBackend = _$httpBackend_;
//         $scope = $rootScope.$new();
//         controller = $controller('titleCtrl', {
//             $scope: $scope
//         });
//     }));
    
//     afterEach(function () {
//         $httpBackend.verifyNoOutstandingExpectation();
//         $httpBackend.verifyNoOutstandingRequest();
//     });
    
//     it('Initially has a title', function () {
//         assert.equal($scope.title, "Hello!");
//     });
    
//     it('Clicking the button changes the title', function () {
//         $scope.changeIt();
//         $httpBackend.expectGET('/api/title').respond(200, {
//             title: "World!"
//         });
//         $httpBackend.flush();
//         assert.equal($scope.title, "World!");
//     });
    
//     it('Handles errors', function () {
//         $scope.changeIt();
//         $httpBackend.expectGET('/api/title').respond(500);
//         $httpBackend.flush();
//         assert.equal($scope.title, "Error");
//     });
// });



// describe('frontNews directive', function() {
//   var element, scope, dictyNewsFactory;

//   beforeEach(module('frontNewsApp'));
  
//   beforeEach(module('scripts/frontNews/front-news.html'));

//   beforeEach(function(){
//     inject(function(_dictyNewsFactory_) {
//       dictyNewsFactory = _dictyNewsFactory_;
//     });
//   });

//   beforeEach(inject(function($rootScope, $compile, _dictyNewsFactory_) {

//     scope = $rootScope;
//     element = angular.element('<front-news></front-news>');
//     dictyNewsFactory = _dictyNewsFactory_;
//     $compile(element)(scope);
//     $rootScope.$digest();

//   }));

//   // it('renders the dicty news', function() {
//   //   expect(element.html()).toContain('newsHeader');
//   // });

// });

// describe('Testing if it works', function () {

//     beforeEach(module('frontNewsApp'));

//     var dataFactory;

//     beforeEach(inject(function ($injector, $controller, $rootScope, $location, $httpBackend) {
//         this.$location = $location;
//         this.$httpBackend = $httpBackend;
//         this.scope = $rootScope.$new();
//         dataFactory = $injector.get('dictyNewsFactory');

//         this.$httpBackend.expectGET('scripts/frontNews/news.json')
//         .respond(
//             [
//                 {
//                     date: '2014.11.19',         
//                     source: 'dictyBase',
//                     content: 'The Dicty Stock Center will be closed for Thanksgiving in the week of November 24th - 28th. Please be advised that orders placed from now until November 30 will be shipped in early December. Please do not submit any materials during that week. Thank you for your understanding.'
//                 }
//             ]
//         );

//     }));

//     afterEach(function () {
//         this.$httpBackend.verifyNoOutstandingRequest();
//         this.$httpBackend.verifyNoOutstandingExpectation();
//     });

//     describe('Let see if it works', function () {
//         it('testing the factory', function () {

//             dataFactory.getData();
//             this.$httpBackend.flush();
//         });
//     });
// });



// describe('TESTING THE NEWS', function() {

//   describe('frontNewsApp', function(){
//     var scope, $httpBackend;

//     beforeEach(module('frontNewsApp'));

//     beforeEach(inject(function(_$httpBackend_, $rootScope) {
//       $httpBackend = _$httpBackend_;
//       $httpBackend.expectGET('scripts/frontNews/news.json').
//           respond(
//               [
//                   {
//                       date: '2014.11.19',         
//                       source: 'dictyBase',
//                       content: 'The Dicty Stock Center will be closed for Thanksgiving in the week of November 24th - 28th. Please be advised that orders placed from now until November 30 will be shipped in early December. Please do not submit any materials during that week. Thank you for your understanding.'
//                   }
//               ]
//           );
//       scope = $rootScope.$new();
//     }));

//     it('let me get in the scope', function() {
//       expect(scope.details).toBe('whatever');
//     });

//     // it('no way to get in the scope?', function() {
//     //   expect(scope.newsHeader).toBe('age');
//     // });
//   });

// });

// describe('Checking the factory', function (){

//   var dictyNewsFactory, $httpBackend, scope, element;

//   beforeEach(module('frontNewsApp'));

//   beforeEach(module('scripts/frontNews/front-news.html'));

//   beforeEach(function(){
//    inject(function(_dictyNewsFactory_) {
//      dictyNewsFactory = _dictyNewsFactory_;
//    });
//   });

//   beforeEach(inject(function($injector) {
//     // Set up the mock http service responses
//     $httpBackend = $injector.get('$httpBackend');
//    }));

//   afterEach(function() {
//    $httpBackend.verifyNoOutstandingExpectation();
//    $httpBackend.verifyNoOutstandingRequest();
//   });

//   beforeEach(inject(function($rootScope, $compile, _dictyNewsFactory_) {

//     scope = $rootScope;
//     element = angular.element('<front-news></front-news>');
//     dictyNewsFactory = _dictyNewsFactory_;
//     $compile(element)(scope);
//     $rootScope.$digest();

//   }));

//  // check to see if it has the expected fucntion:
//  // it ('should hava a getJasonFile function', function() {
//  //    expect(angular.isFunction(dictyNewsFactory.getJasonFile)).toBe(true);
//  // });

// });



// Increases the coverage but it throws an error

// describe('frontNews directive', function() {
//   var element, scope, dictyNewsFactory;

//   beforeEach(module('frontNewsApp'));
  
//   beforeEach(module('scripts/frontNews/front-news.html'));

//   beforeEach(function(){
//     inject(function(_dictyNewsFactory_) {
//       dictyNewsFactory = _dictyNewsFactory_;
//     });
//   });

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


// describe('myDirective', function() {
//   var el, scope, controller, $httpBackend;

//   beforeEach(module('frontNewsApp'));

//   beforeEach (inject(function($compile, $rootScope) {

//     //Instantiate directive.
//     // gotacha: Controller and link functions will execute.
//     el = angular.element('<front-news></front-news>');
//     $compile(el)($rootScope.$new());
//     $rootScope.$digest();

//     //Grab controller instance
//     controller = el.controller();

//     // Grab scope. Depends on type of scope.
//     // See angular.element documentation.
//     scope = el.isolateScope() || el.scope();
//   }));

//   // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
//   // This allows us to inject a service but then attach it to a variable
//   // with the same name as the service in order to avoid a name conflict.
//   beforeEach(inject(function(_$httpBackend_) {
//     $httpBackend = _$httpBackend_;
//     $httpBackend.expectGET('scripts/frontNews/news.json').
//         respond(
//             [
//                 {
//                     date: '2014.11.19',         
//                     source: 'dictyBase',
//                     content: 'The Dicty Stock Center will be closed for Thanksgiving in the week of November 24th - 28th. Please be advised that orders placed from now until November 30 will be shipped in early December. Please do not submit any materials during that week. Thank you for your understanding.'
//                 }
//             ]
//         );
//   }));

//   it('should create "details" model with 2 details fetched from xhr', function() {
//     expect(scope.details).toBeUndefined();
//   });


//   it('should do something to the scope', function() {
//     // expect(scope.isInitialized).toBeDefined();
//     expect(scope.newsHeader).toBe('age');
//   });
// });


// describe('TESTING THE NEWS', function() {

//   describe('frontNewsApp', function(){
//     var scope, $httpBackend;

//     // Load our app module definition before each test.
//     beforeEach(module('frontNewsApp'));

//     // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
//     // This allows us to inject a service but then attach it to a variable
//     // with the same name as the service in order to avoid a name conflict.
//     beforeEach(inject(function(_$httpBackend_, $rootScope) {
//       $httpBackend = _$httpBackend_;
//       $httpBackend.expectGET('scripts/frontNews/news.json').
//           respond(
//               [
//                   {
//                       date: '2014.11.19',         
//                       source: 'dictyBase',
//                       content: 'The Dicty Stock Center will be closed for Thanksgiving in the week of November 24th - 28th. Please be advised that orders placed from now until November 30 will be shipped in early December. Please do not submit any materials during that week. Thank you for your understanding.'
//                   }
//               ]
//           );
//       scope = $rootScope.$new();
//     }));

//     it('should create "details" model with 2 details fetched from xhr', function() {
//       expect(scope.details).toBeUndefined();
//       // $httpBackend.flush();

//       // expect(scope.details).toEqual([{name: 'Nexus S'},
//       //                              {name: 'Motorola DROID'}]);
//     });

//     // it('should set the default value of orderProp model', function() {
//     //   expect(scope.newsHeader).toBe('age');
//     // });
//   });

// });


// describe('TRYING TO ACCESS THE SCOPE OF THE NEWS DIRECTIVE', function () {

//     var $scope, template, controller;

//     beforeEach(module('frontNewsApp'));

//     beforeEach(inject(function($rootScope, $compile) {
//         $scope = $rootScope.$new();
//         var element = angular.element('<front-news></front-whatever>');
//         template = $compile(element)($scope);
//         $scope.$digest();
//         controller = element.controller;
//     }));

//     it('IT SHOULD ACCESS THE SCOPE OF THE DAMN DIRECTIVE', inject(function() {
//         // $scope.newsHeader = 'DICTY NEWS';
//         // expect($scope.newsHeader).toBe('DICTY NEWS');
//     }));


// });





// // Previously on testing...

// describe('Checking the factory', function (){

// 	var dictyNewsFactory, $httpBackend;

//   beforeEach(module('frontNewsApp'));

// 	beforeEach(function(){
// 		inject(function(_dictyNewsFactory_) {
// 			dictyNewsFactory = _dictyNewsFactory_;
// 		});
// 	});

//   beforeEach(inject(function($injector) {
//     // Set up the mock http service responses
//     $httpBackend = $injector.get('$httpBackend');
//    }));

//   afterEach(function() {
//    $httpBackend.verifyNoOutstandingExpectation();
//    $httpBackend.verifyNoOutstandingRequest();
//   });

// 	// check to see if it has the expected fucntion:
// 	it ('should hava a getJasonFile function', function() {
//     expect(angular.isFunction(dictyNewsFactory.getJasonFile)).toBe(true);
// 	});

// });

// describe('testing frontNewsApp', function() {
//     var scope, httpBackend;

//     // Initialization of the AngularJS application before each test case
//     beforeEach(module('frontNewsApp'));

//     // Injection of dependencies, $http will be mocked with $httpBackend
//     beforeEach(inject(function($rootScope, $httpBackend) {
//         scope = $rootScope.$new();
//         httpBackend = $httpBackend;
//     }));


//     it('should query the webservice', function() {

//         // Which HTTP requests do we expect to occur, and how do we response?
//         // httpBackend.expectGET('/scripts/frontNews/news.json').respond('[{"source": "dictyBase"}, {"source": "Petra Fey"}]');

//         // Triggering the AngularJS digest cycle in order to resolve all promises
//         // scope.$apply();

//         // We expect the controller to put the right value onto the scope
//         // expect(scope.details).toEqual('dictyBase');

//     });

// });

// describe('TESTING FRONT-NEWS directive', function() {

//   var element, scope, dictyNewsFactory, $httpBackend;

//   beforeEach(module('frontNewsApp'));

//   beforeEach(module('scripts/frontNews/front-news.html'));

//   beforeEach(function(){
//     inject(function(_dictyNewsFactory_) {
//       dictyNewsFactory = _dictyNewsFactory_;
//     });
//   });

//   beforeEach(inject(function($injector) {
//     // Set up the mock http service responses
//     $httpBackend = $injector.get('$httpBackend');
//    }));

//   afterEach(function() {
//    $httpBackend.verifyNoOutstandingExpectation();
//    $httpBackend.verifyNoOutstandingRequest();
//   });

//   beforeEach(inject(function ($compile, $rootScope) {

//     scope = $rootScope.$new();
//     element = angular.element('<front-news></front-news>');
//     $compile(element)(scope);
//     $rootScope.$digest();

//   }));

//   // it('should load the front-conference template', function(){
    
//   //   expect(element.html()).toContain('newsMain');
//   //   expect(element.html()).toContain('newsHeader');
    
//   // });

// });

// // Increases the coverage but it gives an error
// // 
// // describe('frontNews directive', function() {
// //   var element, scope, dictyNewsFactory;

// //   beforeEach(module('frontNewsApp'));
  
// //   beforeEach(module('scripts/frontNews/front-news.html'));

// //   // beforeEach(function(){
// //   //   inject(function(_dictyNewsFactory_) {
// //   //     dictyNewsFactory = _dictyNewsFactory_;
// //   //   });
// //   // });

// //   beforeEach(inject(function($rootScope, $compile, _dictyNewsFactory_) {

// //     scope = $rootScope;
// //     element = angular.element('<front-news></front-news>');
// //     dictyNewsFactory = _dictyNewsFactory_;
// //     $compile(element)(scope);
// //     $rootScope.$digest();

// //   }));

// //   it('renders the dicty news', function() {
// //     expect(element.html()).toContain('newsHeader');
// //   });

// // });
