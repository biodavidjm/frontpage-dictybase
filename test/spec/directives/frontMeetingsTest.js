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