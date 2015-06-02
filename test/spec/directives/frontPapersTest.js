// Unit testing appFrontPapers.js module
// 
'use strict';

describe('Directive: frontPapers', function () {

  beforeEach(module('frontPapersApp'));

  var element,scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make the front-papers directive visible', inject(function ($compile) {
    element = angular.element('<front-papers></front-papers>');
    element = $compile(element)(scope);
  }));

});


describe('Unit testing the front-papers directive', function() {
  var $compile,
      $rootScope,
      $httpBackend,
      dictyPapersFactory;

  beforeEach(module('frontPapersApp'));

  beforeEach(module('scripts/frontPapers/front-papers.html'));

  beforeEach(function(){
    inject(function(_dictyPapersFactory_) {
      dictyPapersFactory = _dictyPapersFactory_;
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
    expect(angular.isFunction(dictyPapersFactory.getJasonFile)).toBe(true);
  });

});


describe('Unit testing the front-papersall directive', function() {
  var $compile,
      $rootScope,
      $httpBackend,
      dictyPapersFactory;

  beforeEach(module('frontPapersApp'));

  beforeEach(module('scripts/frontPapers/front-papersall.html'));

  beforeEach(function(){
    inject(function(_dictyPapersFactory_) {
      dictyPapersFactory = _dictyPapersFactory_;
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
    expect(angular.isFunction(dictyPapersFactory.getJasonFile)).toBe(true);
  });

});