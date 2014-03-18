'use strict';

describe('Controller: ResultsCtrl', function () {

  // load the controller's module
  beforeEach(module('lastfmApp'));

  var ResultsCtrl,
    $httpBackend,
    location,
    routeParams,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector,  $location) {
    // Set up the mock http service responses
    $httpBackend = $injector.get('$httpBackend');

    // Get hold of a scope (i.e. the root scope)
    //$rootScope = $injector.get('$rootScope');

    location = $location.path('/search/tool');
    scope = $rootScope.$new();
    routeParams = {};
    routeParams.artist = 'tool';
    // The $controller service is used to create instances of controllers
    //$controller = $injector.get('$controller');
    ResultsCtrl = $controller('ResultsCtrl', {
      $scope: scope,
      $routeParams : routeParams
    });
  }));

  it('should echo the searched artist', function () {
    expect(scope.search).toBe('tool');
  });

  it('should show "Searching..." as the default context message', function () {
    expect(scope.resultMessage).toBe('Searching...');
  });
});
