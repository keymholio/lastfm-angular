'use strict';

angular.module('lastfmApp')
  .controller('ResultsCtrl', function ($scope, Artists, $routeParams) {
    // echo search
    $scope.search = $routeParams.artist;
    $scope.resultMessage = 'Searching...';
    $scope.page = $routeParams.page || 1;
    $scope.itemsPerPage = 0;
    $scope.total = 0;
    $scope.totalShown = 0;
    $scope.showMore = false;

    $scope.populate = function (page) {
      Artists.getArtists($routeParams.artist, page)
      .then(function (data) {
        $scope.artists = data.results.artistmatches.artist;
        $scope.total = Number(data.results['opensearch:totalResults']);
        $scope.itemsPerPage = Number(data.results['opensearch:itemsPerPage']);
        $scope.resultMessage = $scope.total + ' matches were found';
        $scope.totalShown = $scope.page * $scope.itemsPerPage;

        // vars for grid layout
        $scope.rows = $scope.rows || [];
        var maxCols = 4;
        var maxRows = Math.round($scope.itemsPerPage / maxCols) * page;
        var counter = 0;
        // restructure data for grid layout
        for( var i=$scope.rows.length; i < maxRows; i++){
          if ($scope.artists[counter]) {
            $scope.rows.push([]);
            for( var j=0 ; j < maxCols; j++){
              if ($scope.artists[counter]) {
                $scope.rows[i][j] = $scope.artists[counter];
                counter++;
              }
            }
          }
        }
        $scope.isShownMoreThanTotal();
      }, function(error) {
        // promise rejected
        console.log(error);
      });
    };

    $scope.nextPage = function () {
      $scope.page = Number($scope.page) + 1;
      $scope.populate($scope.page);
    };

    $scope.isShownMoreThanTotal = function () {
      // shows and hides "show more" button
      if ($scope.totalShown >= $scope.total) {
        $scope.showMore = false;
      } else {
        $scope.showMore = true;
      }
    };

    // populate on load
    $scope.populate($scope.page);
  });
