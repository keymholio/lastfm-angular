'use strict';

angular.module('lastfmApp')
  .controller('ResultsCtrl', function ($scope, Artists, $routeParams) {
    // echo search
    $scope.search = $routeParams.artist;
    $scope.resultMessage = 'Searching...';

    Artists.getArtists($routeParams.artist)
      .then(function (data) {
        $scope.artists = data.results.artistmatches.artist;
        $scope.total = data.results['opensearch:totalResults'];
        $scope.resultMessage = $scope.total + ' matches were found';

        // vars for grid layout
        $scope.rows = [];
        var maxCols = 4;
        var maxRows = Math.round($scope.artists.length / maxCols);
        var counter = 0;

        // restructure data for grid layout
        for( var i=0 ; i < maxRows; i++){
          if ($scope.artists[counter]) {
            for( var j=0 ; j < maxCols; j++){
              if ($scope.artists[counter]) {
                $scope.rows.push([]);
                $scope.rows[i][j] = $scope.artists[counter];
                counter++;
              }
            }
          }
        }
      }, function(error) {
        // promise rejected
        console.log(error);
      });
  });
