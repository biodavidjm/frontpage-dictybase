// Unit testing the appFrontNews.js module

'use strict';

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