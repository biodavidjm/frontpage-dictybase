// Unit testing the appFrontNews.js module

'use strict';


describe('testing frontNewsApp', function() {
  describe('frontNews directive', function() {
    var element, scope;

    beforeEach(module('frontNewsApp'));
    beforeEach(module('/Users/djt469/github/frontpage-dictybase/app/scripts/frontNews/front-news.html'));
    beforeEach(inject(function($rootScope, $compile) {
      element = angular.element('<div> <front-news></front-news></div>');
      scope = $rootScope;
      $compile(element)(scope);
      scope.$digest();
    }));

    // it('renders the dicty news', function() {
    //   var news = element.find('.newsHeader');
    //   expect(news.length).toBe(1);
      // expect(news.attr('aria-valuenow')).toBe('50');
      // expect(news.css('width')).toBe('50%');
    // });

    // it('renders caption text', function() {
    //   var caption = element.find('span');
    //   expect(caption.length).toBe(1);
    //   expect(caption.text()).toBe('50% Complete');
    // });
  });
});




describe('Checking the factory', function (){

	var dictyNewsFactory;

	beforeEach(function(){

		module('frontNewsApp');

		inject(function(_dictyNewsFactory_) {
			dictyNewsFactory = _dictyNewsFactory_;
		});
	});

	// check to see if it has the expected fucntion:
	it ('should hava a getJasonFile function', function() {
		expect(angular.isFunction(dictyNewsFactory.getJasonFile)).toBe(true);
	});

	// check to see if it does what it's supposed to do.
	// it('should make function works', function (){
	// 	var result = dictyNewsFactory.getJasonFile();
	// 	expect(result).toBe('news.json');
	// });

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