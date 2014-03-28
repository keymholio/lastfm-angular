'use strict';

angular.module('lastfmApp')
  .directive('infiniteScroll', function ($window) {
    return {
      link: function (scope, element, attrs) {
        var elementBottom, windowBottom;
        $window = angular.element($window);
        console.log(scope);
        $window.bind('scroll', function() {
          windowBottom = $window.height() + $window.scrollTop();
          elementBottom = element.offset().top + element.innerHeight();
          if (windowBottom >= elementBottom) {
            scope.$apply(attrs.infiniteScroll);
          }
        });

      }
    };
  });

