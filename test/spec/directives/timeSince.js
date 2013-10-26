'use strict';

describe('Directive: timeSince', function () {

  // load the directive's module
  beforeEach(module('TwitterApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<time-since></time-since>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the timeSince directive');
  }));
});
