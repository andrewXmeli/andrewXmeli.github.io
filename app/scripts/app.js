'use strict';

/**
 * @ngdoc overview
 * @name andrewXmeliApp
 * @description
 * # andrewXmeliApp
 *
 * Main module of the application.
 */
angular
 .module('shared.services', []);

angular
  .module('andrewXmeliApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'shared.services'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
