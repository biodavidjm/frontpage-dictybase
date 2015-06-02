// Unit testing appfrontMeetings.js module

'use strict';

describe('Directive: frontMeetings', function () {

  beforeEach(module('frontMeetingsApp'));

  var element,scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make the front-meetings directive visible', inject(function ($compile) {
    element = angular.element('<front-meetings></front-meetings>');
    element = $compile(element)(scope);
  }));

});


describe('Unit testing the front-meetings directive', function() {
  var $compile,
      $rootScope,
      $httpBackend,
      dictyMeetingsFactory;

  beforeEach(module('frontMeetingsApp'));

  beforeEach(module('scripts/frontMeetings/front-meetings.html'));

  beforeEach(function(){
    inject(function(_dictyMeetingsFactory_) {
      dictyMeetingsFactory = _dictyMeetingsFactory_;
    });
  });

  beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
  });


  it ('TEST 1 should have a getJasonFile function', function() {
    expect(angular.isFunction(dictyMeetingsFactory.getJasonFile)).toBe(true);
  });

});


describe('Unit testing the front-meetingsall directive', function() {
  var $compile,
      $rootScope,
      $httpBackend,
      dictyMeetingsFactory;

  beforeEach(module('frontMeetingsApp'));

  beforeEach(module('scripts/frontMeetings/front-meetingsall.html'));

  beforeEach(function(){
    inject(function(_dictyMeetingsFactory_) {
      dictyMeetingsFactory = _dictyMeetingsFactory_;
    });
  });

  beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
  });


  it ('TEST 2 should have a getJasonFile function', function() {
    expect(angular.isFunction(dictyMeetingsFactory.getJasonFile)).toBe(true);
  });

});