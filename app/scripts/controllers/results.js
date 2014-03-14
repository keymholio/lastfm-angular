'use strict';

angular.module('lastfmApp')
  .controller('ResultsCtrl', function ($scope, Artists, $routeParams) {
    // search echo
    $scope.search = $routeParams.artist;

    Artists.getArtists($routeParams.artist)
      .then(function (data) {
        // vars for grid layout
        var maxRows = 30;
        var maxCols = 4;
        var counter = 0;

        $scope.artists = data;
        $scope.total = data.results['opensearch:totalResults'];
        $scope.rows = [];

        for( var i=0 ; i < maxRows; i++){
          $scope.rows.push([]);
          for( var j=0 ; j < maxCols; j++){
            $scope.rows[i][j] = $scope.artists.results.artistmatches.artist[counter];
            counter++;
          }
        }
      }, function(error) {
        // promise rejected
        console.log(error);
      });
  });
