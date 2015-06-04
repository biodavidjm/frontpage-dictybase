'use strict';

describe('Controller: AboutController', function () {

  // load the controller's module
  beforeEach(module('dictyFrontpageApp'));

  var AboutController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutController = $controller('AboutController', {
      $scope: scope
    });
  }));

  it('should attach a list of Stuff to the scope', function () {
    expect(scope.Stuff.length).toBe(3);
  });
});

