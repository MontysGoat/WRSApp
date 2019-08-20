(function () {
  "use strict";
  
  angular.module('common')
  .service('SpotifyService', SpotifyService);
  
  
  SpotifyService.$inject = ['$http'];
  function SpotifyService($http) {
    var service = this;
  
    service.getResume = function () {
      return $http.get('src/common/resume.json').then(function (response) {
        return response.data;
      });
    };
  }
      
  })();