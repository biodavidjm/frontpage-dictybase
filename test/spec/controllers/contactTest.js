'use strict';

describe('Controller: ContactController', function () {

  // load the controller's module
  beforeEach(module('dictyFrontpageApp'));

  var ContactController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactController = $controller('ContactController', {
      $scope: scope
    });
  }));

  it('should attach a list of Stuff to the scope', function () {
    expect(scope.Stuff.length).toBe(3);
  });
});
