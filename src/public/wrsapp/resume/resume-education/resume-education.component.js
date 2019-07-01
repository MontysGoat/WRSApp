(function () {
  "use strict";
  
  angular.module('public')
  .component('resumeEducation', {
    templateUrl: 'src/public/wrsapp/resume/resume-education/resume-education.html',
    bindings: {
      education: '<'
    },
    controller: ResumeEducationController
  });
  
  
  function ResumeEducationController() {
    var $ctrl = this;
  }
  
  })();