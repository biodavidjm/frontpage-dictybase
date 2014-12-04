'use strict';

describe('Controller: MainFrontpageCtrl', function () {

  // load the controller's module
  beforeEach(module('dictyFrontpageApp'));

  var MainFrontpageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainFrontpageCtrl = $controller('MainFrontpageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of Stuff to the scope', function () {
    expect(scope.Stuff.length).toBe(3);
  });
});
