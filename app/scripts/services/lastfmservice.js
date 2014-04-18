'use strict';

angular.module("lastfmServices").service("Artists",
function($http, $q) {
  return {
    getArtists: function(artist, page) {
      // the $http API is based on the deferred/promise APIs exposed by the $q service
      // so it returns a promise for us by default
      return $http.get('http://ws.audioscrobbler.com/2.0/', {
        params: {
          'method': 'artist.search',
          'artist': artist,
          'api_key': 'aceab0ee7a1b569b1cec10bac112a84e',
          'page': page,
          'limit': 24,
          'format': 'json'
        }
      }).then(function(response) {
          if (typeof response.data === 'object') {
            return response.data;
          } else {
            // invalid response
            return $q.reject(response.data);
          }
        }, function(response) {
          // something went wrong
          return $q.reject(response.data);
        }
      );
    }
  };
});
