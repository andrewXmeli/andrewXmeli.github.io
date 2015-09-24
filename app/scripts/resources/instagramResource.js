'use strict';

angular.module('shared.services')

  .factory('instagramTag', function ($q, $http) {

    return {

      get: function (tag) {
        var deffered = $q.defer();
        var url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?callback=JSON_CALLBACK&client_id=4245685ddbb74b968134faede5244adf';

        $http.jsonp(url).then(function (response) {
          deffered.resolve(response.data);
        }, function (response) {
          deffered.reject(response);
        });

        return deffered.promise;
      }

    };
  })

  ;
