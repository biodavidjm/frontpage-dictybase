'use strict';

describe('Controller: DownloadController', function () {

  // load the controller's module
  beforeEach(module('dictyFrontpageApp'));

  var DownloadController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DownloadController = $controller('DownloadController', {
      $scope: scope
    });
  }));

  it('should attach a list of Stuff to the scope', function () {
    expect(scope.Stuff.length).toBe(3);
  });
});
