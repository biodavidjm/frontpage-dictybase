'use strict';

describe('resetField', function() {
  
  var scope, $compile;
  var validElement = '<input type=\"text\" ng-model=\"foo\" reset-field />';

  beforeEach(module('resetFieldApp'));
  beforeEach(inject(function(_$rootScope_, _$compile_) {
    scope = _$rootScope_.$new();
    $compile = _$compile_;
  }));

  describe('1 compiling the directive', function()
  {
    it('A) should throw an error if a model is absent', function() {
      function template() {
        return $compile('<input type=\"text\" reset-field />')(scope);
      }
      expect(template).toThrow();
    });

    it('should append the icon element as a sibling', function() {
      var element = $compile(validElement)(scope);
      expect(element.next().hasClass('fa')).toBeTruthy();
    });


  });

  describe('icon visibility', function() {
    it('should be hidden on compile', function() {
      var element = $compile(validElement)(scope);
      scope.$digest();
      expect(element.isolateScope().enabled).toBeFalsy();
      expect(element.next().hasClass('ng-hide')).toBeTruthy();
    });

    it('should be visible when text exists in input and focus is gained', function() {
      var element = $compile(validElement)(scope);
      element.val('foo').triggerHandler('focus');
      expect(element.isolateScope().enabled).toBeTruthy();
      expect(element.next().hasClass('ng-hide')).toBeFalsy();
    });

    it('should be hidden when text exists in input and focus is lost', function() {
      var element = $compile(validElement)(scope);
      element.val('foo').triggerHandler('focus');
      element.triggerHandler('blur');
      expect(element.isolateScope().enabled).toBeFalsy();
      expect(element.next().hasClass('ng-hide')).toBeTruthy();
    });

    it('should be hidden when text is completely deleted in input', function() {
      var element = $compile(validElement)(scope);
      element.val('foo').triggerHandler('focus');
      element.val(null).triggerHandler('focus');
      expect(element.isolateScope().enabled).toBeFalsy();
      expect(element.next().hasClass('ng-hide')).toBeTruthy();
    });
  });

}); // THE END