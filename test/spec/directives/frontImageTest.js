'use strict';

describe('Testing frontImage directive', function() {

  var element, scope;

  beforeEach(module('frontImageApp'));

  beforeEach(module('scripts/frontImage/front-image.html'));

  beforeEach(inject(function ($compile, $rootScope) {

    scope = $rootScope.$new();
    element = angular.element('<front-image></front-image>');
    $compile(element)(scope);
    $rootScope.$digest();

  }));

  it('Checking the content of the front-image directive', function(){

    expect(element.html()).toContain('images/dictyFront01.jpg');
    expect(element.html()).toContain('images/dictyFront02.jpg');
    expect(element.html()).toContain('images/dictyFront03.jpg');

  });

});