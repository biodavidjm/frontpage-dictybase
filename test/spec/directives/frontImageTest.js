'use strict';

describe('Directive: frontImage', function () {

  beforeEach(module('frontImageApp'));

  var element,scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make the front-image directive visible', inject(function ($compile) {
    element = angular.element('<front-image></front-image>');
    element = $compile(element)(scope);
  }));

});