(function () {
  "use strict";
  
  angular.module('public')
  .controller('ProjectsController', ProjectsController);
  
  // ProjectsController.$inject = ['resume'];
  function ProjectsController() {
    var $ctrl = this;
    $ctrl.sidebarButton = '<';

    $ctrl.clickSideBar = function () {
      $('#sidebar').toggleClass('active');
      if($ctrl.sidebarButton == '>'){
        $ctrl.sidebarButton ='<';
      } else {
        $ctrl.sidebarButton ='>';
      }
    };
  }
  
  
  })();
  