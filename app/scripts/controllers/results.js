'use strict';

angular.module('lastfmApp')
  .controller('ResultsCtrl', function ($scope, Artists, $routeParams) {
    //$scope.artists = Artists.query({ 'artist':$routeParams.artist });
    $scope.search = $routeParams.artist;

    Artists.getArtists($routeParams.artist)
      .then(function (data) {
        $scope.artists = data;
      }, function(error) {
        // promise rejected
        console.log(error);
      });
  });
