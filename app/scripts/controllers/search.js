'use strict';

angular.module('lastfmApp')
  .controller('SearchCtrl', ['$scope', '$location', function ($scope, $location) {

    $scope.search = function(param) {
      $location.path( '/search/' + param );
    };
  }]);
