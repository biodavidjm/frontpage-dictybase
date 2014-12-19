'use strict';

describe('Directive: frontConference', function () {

  // load the directive's module
  beforeEach(module('frontConferenceApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<front-conference></front-conference>');
    element = $compile(element)(scope);
  }));
});

describe('testing the conference directive', function() {

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
