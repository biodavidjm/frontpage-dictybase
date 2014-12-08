// Unit testing appFrontImage.js module
// 
'use strict';

describe('Directive: frontImage', function () {

  var element,scope;

  beforeEach(module('frontImageApp'));

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make the front-image directive visible', inject(function ($compile) {
    element = angular.element('<front-image></front-image>');
    element = $compile(element)(scope);
  }));

});

