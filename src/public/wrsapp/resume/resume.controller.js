(function () {
    "use strict";
    
    angular.module('public')
    .controller('ResumeController', ResumeController);
    
    ResumeController.$inject = ['resume'];
    function ResumeController(resume) {
      var $ctrl = this;
      $ctrl.experiences = resume.resume.experience;
      $ctrl.personal_info = resume.resume.personal_info;
      $ctrl.education = resume.resume.education;
    }
    
    
    })();
    