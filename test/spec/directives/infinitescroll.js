'use strict';

describe('Directive: infiniteScroll', function () {

  // load the directive's module
  beforeEach(module('lastfmApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<infinite-scroll></infinite-scroll>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the infiniteScroll directive');
  }));
});
