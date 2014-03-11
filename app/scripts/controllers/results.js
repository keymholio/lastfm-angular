'use strict';

angular.module('lastfmApp')
  .controller('ResultsCtrl', ['$scope', 'Artists', '$routeParams',
    function ($scope, Artists, $routeParams) {
      $scope.search = $routeParams.artist;
      $scope.artists = Artists.query({ 'artist':$routeParams.artist });
    }]);
