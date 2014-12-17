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
    // expect(element.text()).toBe('UPCOMING MEETINGS');
  }));
});
