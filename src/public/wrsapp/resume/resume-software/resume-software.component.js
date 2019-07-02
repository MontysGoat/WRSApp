(function () {
  "use strict";
  
  angular.module('public')
  .component('resumeSoftware', {
    templateUrl: 'src/public/wrsapp/resume/resume-software/resume-software.html',
    bindings: {
      software: '<'
    },
    controller: ResumeSoftwareController
  });
  
  
  function ResumeSoftwareController() {
    var $ctrl = this;
  }
  
  })();