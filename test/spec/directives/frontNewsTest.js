// Unit testing the appFrontNews.js module

'use strict';


describe('frontNews directive', function() {
  var element, scope, dictyNewsFactory;

  beforeEach(module('frontNewsApp'));
  
  beforeEach(module('scripts/frontNews/front-news.html'));

  beforeEach(inject(function($rootScope, $compile, _dictyNewsFactory_) {

    scope = $rootScope;
    element = angular.element('<front-news></front-news>');
    dictyNewsFactory = _dictyNewsFactory_;
    $compile(element)(scope);
    $rootScope.$digest();

  }));

  // it('renders the dicty news', function() {
  //   expect(element.html()).toContain('newsHeader');
  // });

});


describe('Checking the factory', function (){

	var dictyNewsFactory;

  beforeEach(module('frontNewsApp'));

	beforeEach(function(){

		// module('frontNewsApp');

		inject(function(_dictyNewsFactory_) {
			dictyNewsFactory = _dictyNewsFactory_;
		});
	});

	// check to see if it has the expected fucntion:
	it ('should hava a getJasonFile function', function() {
		expect(angular.isFunction(dictyNewsFactory.getJasonFile)).toBe(true);
	});

});


// It does not work---> Do not know why
// describe('httpBasedService', function () {
//   var httpBasedService,
//       httpBackend;
  
//   beforeEach(function (){  
//     // load the module.
//     module('frontNewsApp');
    
//     // get your service, also get $httpBackend
//     // $httpBackend will be a mock, thanks to angular-mocks.js
//     inject(function($httpBackend, _httpBasedService_) {
//       httpBasedService = _httpBasedService_;      
//       httpBackend = $httpBackend;
//     });
//   });
  
//   // make sure no expectations were missed in your tests.
//   // (e.g. expectGET or expectPOST)
//   afterEach(function() {
//     httpBackend.verifyNoOutstandingExpectation();
//     httpBackend.verifyNoOutstandingRequest();
//   });
 
//   it('should send the msg and return the response.', function (){
//     // set up some data for the http call to return and test later.
//     var returnData = { excited: true };
    
//     // expectGET to make sure this is called once.
//     httpBackend.expectGET('/app/scripts/frontNews/news.json').respond(returnData);
    
//   });  
// });




describe('Directive: frontNews', function () {

  beforeEach(module('frontNewsApp'));

  var element,scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make the front-news directive visible', inject(function ($compile) {
    element = angular.element('<front-news></front-news>');
    element = $compile(element)(scope);
  }));
});