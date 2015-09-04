'use strict';

describe('Testing frontPopulars directive', function() {

  var element, scope;

  beforeEach(module('frontPopularsApp'));

  beforeEach(module('scripts/frontPopulars/front-populars.html'));

  beforeEach(inject(function ($compile, $rootScope) {

    scope = $rootScope.$new();
    element = angular.element('<front-populars></front-populars>');
    $compile(element)(scope);
    $rootScope.$digest();

  }));

  it('Checking the content of the front-populars directive', function(){

    expect(element.html()).toContain('images/widgetLEARNDICTY1.png');
    expect(element.html()).toContain('images/widgetLEARNDICTY2.png');

    expect(element.html()).toContain('images/widgetTECHNIQUES1.png');
    expect(element.html()).toContain('images/widgetTECHNIQUES2.png');

  });

});