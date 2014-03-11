'use strict';

angular.module('lastfmServices', ['ngResource'])
  .factory('Artists', ['$resource', function ($resource) {
    return $resource('http://ws.audioscrobbler.com/2.0/', {}, {
      query: {
        method:'GET',
        params: {
          'method': 'artist.search',
          'artist': '@artist',
          'api_key': 'aceab0ee7a1b569b1cec10bac112a84e',
          'format': 'json'
        }
      }
    });
  }]);
