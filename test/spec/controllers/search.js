'use strict';

describe('Controller: SearchCtrl', function () {

  // load the controller's module
  beforeEach(module('lastfmApp'));

  var SearchCtrl,
    scope,
    location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    scope = $rootScope.$new();
    location = $location;
    SearchCtrl = $controller('SearchCtrl', {
      $scope: scope
    });
  }));

  it('ensures the user is redirected when searching', function () {
    scope.search('tool');
    expect(location.path()).toBe('/search/tool');
  });
});
