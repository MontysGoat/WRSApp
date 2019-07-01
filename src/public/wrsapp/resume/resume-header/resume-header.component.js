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
    
    
    function ResumeHeaderController() {
      var $ctrl = this;
    }
    
    })();