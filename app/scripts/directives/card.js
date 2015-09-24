'use strict';

/**
 * @ngdoc directive
 * @name andrewXmeliApp.directive:card
 * @description
 * # card
 */
angular.module('andrewXmeliApp')
  .directive('card', function () {
    return {
      template: '\
        <img ng-src="{{meta.images.standard_resolution.url}}"/> \
      ',
      restrict: 'E',
      scope: {
        'meta': '='
      },
      link: function postLink(scope) {
      }
    };
  });
