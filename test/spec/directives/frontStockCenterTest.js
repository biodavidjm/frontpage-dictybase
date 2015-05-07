'use strict';

describe('Directive: frontStockCenter', function () {

  // load the directive's module
  beforeEach(module('frontStockCenterApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<front-stockcenter></front-stockcenter>');
    element = $compile(element)(scope);
  }));
});

describe('testing the stockcenter directive', function() {

  var element, scope;

  beforeEach(module('frontStockCenterApp'));

  beforeEach(module('scripts/frontStockCenter/front-stockcenter.html'));

  beforeEach(inject(function ($compile, $rootScope) {

    scope = $rootScope.$new();
    element = angular.element('<front-stockcenter></front-stockcenter>');
    $compile(element)(scope);
    $rootScope.$digest();

  }));

  it('should load the front-stockcenter template', function(){

    expect(element.html()).toContain('stockHouse');
    expect(element.html()).toContain('PLASMIDS');
    
  });

});
