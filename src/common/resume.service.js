(function () {
    "use strict";
    
    angular.module('common')
    .service('ResumeService', ResumeService);
    
    
    ResumeService.$inject = ['$http'];
    function ResumeService($http) {
      var service = this;
    
      service.getResume = function () {
        return $http.get('/resume.json').then(function (response) {
          return response.data;
        });
      };
    }
        
    })();