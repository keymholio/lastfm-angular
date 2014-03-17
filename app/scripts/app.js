'use strict';

angular.module('lastfmApp', [
  'ngResource',
  'ngRoute',
  'lastfmServices'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/search/:artist', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  // The following allows cross-domain calls
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]);
