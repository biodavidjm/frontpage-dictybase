'use strict';

describe('FIRST testing approach of the conference directive', function() {

  var element, scope;

  beforeEach(module('frontConferenceApp'));

  beforeEach(module('scripts/frontConference/front-conference.html'));

  beforeEach(inject(function ($compile, $rootScope) {

    scope = $rootScope.$new();
    element = angular.element('<front-conference></front-conference>');
    $compile(element)(scope);
    $rootScope.$digest();

  }));

  it('should load the front-conference template', function(){

    expect(element.html()).toContain('conferenceMain');
    expect(element.html()).toContain('conferenceHeader');
    expect(element.html()).toContain('conferenceDate');
    
  });

});


// An alternative way...

describe('SECOND testing approach of the conference directive', function() {
  var $compile,
      $rootScope;

  beforeEach(module('frontConferenceApp'));

  beforeEach(module('scripts/frontConference/front-conference.html'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('SHOULD LOAD THE CONFERENCE directive', function() {
    // Compile a piece of HTML containing the directive
    var element = $compile('<front-conference></front-conference>')($rootScope);
    // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
    $rootScope.$digest();
    // Check that the compiled element contains the templated content
    expect(element.html()).toContain('conferenceMain');
    expect(element.html()).toContain('conferenceHeader');
    expect(element.html()).toContain('conferenceDate');
  });
});
