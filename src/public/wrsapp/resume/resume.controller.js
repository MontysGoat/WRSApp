(function () {
    "use strict";
    
    angular.module('public')
    .controller('ResumeController', ResumeController);
    
    ResumeController.$inject = ['resume'];
    function ResumeController(resume) {
      var $ctrl = this;
      $ctrl.experiences = resume.experiences;
    }
    
    
    })();
    