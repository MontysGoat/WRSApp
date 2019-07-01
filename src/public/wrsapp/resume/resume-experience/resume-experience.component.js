(function () {
  "use strict";
  
  angular.module('public')
  .component('resumeExperience', {
    templateUrl: 'src/public/wrsapp/resume/resume-experience/resume-experience.html',
    bindings: {
      experience: '<'
    },
    controller: ResumeExperienceController
  });
  
  
  function ResumeExperienceController() {
    var $ctrl = this;
  }
  
  })();