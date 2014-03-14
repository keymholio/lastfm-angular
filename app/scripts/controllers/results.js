'use strict';

angular.module('lastfmApp')
  .controller('ResultsCtrl', function ($scope, Artists, $routeParams) {
    // search echo
    $scope.search = $routeParams.artist;

    Artists.getArtists($routeParams.artist)
      .then(function (data) {
        $scope.artists = data.results.artistmatches.artist;
        $scope.total = data.results['opensearch:totalResults'];

        // vars for grid layout
        $scope.rows = [];
        var maxCols = 4;
        var maxRows = Math.round($scope.artists.length / maxCols);
        var counter = 0;

        // restructure data for grid layout
        for( var i=0 ; i < maxRows; i++){
          if ($scope.artists[counter]) {
            $scope.rows.push([]);
            for( var j=0 ; j < maxCols; j++){
              $scope.rows[i][j] = $scope.artists[counter];
              counter++;
            }
          }
        }
      }, function(error) {
        // promise rejected
        console.log(error);
      });
  });
