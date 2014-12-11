// Unit testing appFrontImage.js module
// 
'use strict';

describe('Directive: frontImage', function () {

  var element,scope;

  beforeEach(module('frontImageApp'));

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope;
    element = angular.element('<div simple-test>{{30+3}}</div>');
    $compile(element)($rootScope);
  }));

  it('should be equal to 33', function(){
  	scope.$digest();
  	expect(element.html()).toBe('33');
  });

  it('should make the front-image directive visible', inject(function ($compile) {
    element = angular.element('<front-image></front-image>');
    element = $compile(element)(scope);
  }));

});

// TESTING DIRECTIVE

describe('Testing the frontImage directive', function() {
  var $compile, $rootScope;

  //Load the application module that contains the directive:
  beforeEach(module('frontImageApp'));
  
  // Store the references to $rootScope and $compile: in this 
  // way, they will be available to all tests in this describe
  // block:
  
  beforeEach(inject(function(_$compile_, _$rootScope_){
    // Now the injecto will unwrap the underscore from around
    // the parameters names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;

  }));

  it('Replaces the element with the appropiate content', function() {
    // var element = $compile('<front-image></front-image>')($rootScope);
    // $rootScope.$digest();
    // $compile(element)($rootScope);
  });

});
