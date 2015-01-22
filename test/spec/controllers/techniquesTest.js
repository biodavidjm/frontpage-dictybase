'use strict';

describe('Controller: TechniquesController', function () {

  // load the controller's module
  beforeEach(module('dictyFrontpageApp'));

  var TechniquesController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TechniquesController = $controller('TechniquesController', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.Stuff.length).toBe(3);
  });
});
