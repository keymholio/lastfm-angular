'use strict';

angular.module('lastfmApp')
  .controller('ResultsCtrl', ['$scope', 'Artists', function ($scope, Artists) {
    $scope.search = "Korn";
    $scope.lastfm_json = Artists.query();
    $scope.artists = $scope.lastfm_json;
  }]);
