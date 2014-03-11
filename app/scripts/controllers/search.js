'use strict';

angular.module('lastfmApp')
  .controller('SearchCtrl', ['$scope', 'Artists', function ($scope, Artists) {

    $scope.search = function() {
      $scope.artists = Artists.query();
    };
  }]);
