'use strict';

describe('Controller: GenomesCtrl', function () {

  // load the controller's module
  beforeEach(module('dictyFrontpageApp'));

  var GenomesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GenomesCtrl = $controller('GenomesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of Stuff to the scope', function () {
    expect(scope.Stuff.length).toBe(3);
  });
});
