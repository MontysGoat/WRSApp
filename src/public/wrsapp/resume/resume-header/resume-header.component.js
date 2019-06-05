(function () {
    "use strict";
    
    angular.module('public')
    .component('resumeHeader', {
      templateUrl: 'src/public/wrsapp/resume/resume-header/resume-header.html',
      bindings: {
        personalInfo: '<'
      },
      controller: ResumeHeaderController
    });
    
    
    ResumeHeaderController.$inject = ['ApiPath'];
    function ResumeHeaderController(ApiPath) {
      var $ctrl = this;
      $ctrl.basePath = ApiPath;
    }
    
    })();