'use strict';

describe('Controller: ResultsCtrl', function () {

  // load the controller's module
  beforeEach(module('lastfmApp'));

  var resultsController,
    $httpBackend,
    $rootScope,
    $routeParams;

  beforeEach(inject(function($injector) {
    // Set up the mock http service responses
    $httpBackend = $injector.get('$httpBackend');
    // backend definition common for all tests
    $httpBackend.whenGET('http://ws.audioscrobbler.com/2.0/?' +
      'api_key=aceab0ee7a1b569b1cec10bac112a84e&artist=skycamefalling' +
      '&format=json&limit=24&method=artist.search')
      .respond({
        'results': {
          'opensearch:totalResults': '2',
          'artistmatches': {
            'artist': [
              {
                'name': 'Skycamefalling',
              },
              {
                'name': '.skycamefalling.'
              }
            ]
          }
        }
      });
    $routeParams = {};
    $routeParams.artist = 'skycamefalling';
    // Get hold of a scope (i.e. the root scope)
    $rootScope = $injector.get('$rootScope');
    // The $controller service is used to create instances of controllers
    var $controller = $injector.get('$controller');

    resultsController = function() {
      return $controller('ResultsCtrl', {
        '$scope' : $rootScope,
        '$routeParams' : $routeParams
      });
    };
  }));

  it('should show "Searching..." as the default context message', function () {
    resultsController();
    expect($rootScope.resultMessage).toBe('Searching...');
  });

  it('should echo the searched artist', function () {
    resultsController();
    $httpBackend.flush();
    expect($rootScope.search).toBe('skycamefalling');
  });

  it('should show how many matches were found', function () {
    resultsController();
    $httpBackend.flush();
    expect($rootScope.resultMessage).toBe('2 matches were found');
  });

});
