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

describe('UnitTesting: the FrontImageController controller', function() {

  beforeEach(module('frontImageApp'));

  var ctrl, scope;
  
  beforeEach(inject(function($controller, $rootScope) {
  
    scope = $rootScope.$new();
    ctrl = $controller('FrontImageController', {
      $scope: scope
    });
  }));

  it('should access the scope', function() {
    expect(scope.name).toBeDefined();
    expect(scope.name).toEqual('Dicty Carousel Directive');
    expect(scope.myInterval).toEqual(8000);
    expect(scope.slides.length).toEqual(5);
  });
});
