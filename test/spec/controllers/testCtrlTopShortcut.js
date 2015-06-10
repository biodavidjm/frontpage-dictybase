'use strict';

describe('Controller: TopAboutController', function () {

  // load the controller's module
  beforeEach(module('dictyFrontpageApp'));

  var TopAboutController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopAboutController = $controller('TopAboutController', {
      $scope: scope
    });
  }));

  it('should access the scope of About Us', function() {
    expect(scope.aboutTitle).toBeDefined();
    expect(scope.aboutTitle).toEqual('About Us');
  });
});



// OLD  CITE US

// describe('Controller: DownloadController', function () {

//   // load the controller's module
//   beforeEach(module('dictyFrontpageApp'));

//   var DownloadController,
//     scope;

//   // Initialize the controller and a mock scope
//   beforeEach(inject(function ($controller, $rootScope) {
//     scope = $rootScope.$new();
//     DownloadController = $controller('DownloadController', {
//       $scope: scope
//     });
//   }));

//   it('should attach a list of Stuff to the scope', function () {
//     expect(scope.Stuff.length).toBe(3);
//   });
// });

