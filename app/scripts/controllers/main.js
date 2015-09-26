'use strict';

/**
 * @ngdoc function
 * @name andrewXmeliApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the andrewXmeliApp
 */
angular.module('andrewXmeliApp')
  .controller('MainCtrl', function ($scope, instagramTag) {
    instagramTag.get('andrewxmeli').then(function (data) {
      console.log(data);
      $scope.posts = data.data.slice(0, 10);
    });
  });
