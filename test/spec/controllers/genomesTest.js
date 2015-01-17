'use strict';

describe('Testing the Genomes controller', function() {

  var element, scope;

  beforeEach(module('dictyFrontpageApp'));

  beforeEach(module('templates/genome-card.html'));

  beforeEach(inject(function($compile, $rootScope) {
    scope = $rootScope.$new();
    element = angular.element('<genome-card></genome-card>');
    $compile(element)(scope);
    $rootScope.$digest();
  }));

  it('Checking that the content of the genome-card is there', function() {
    expect(element.html()).toContain('<div class="container mainCard">');
    
  });
});


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
