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