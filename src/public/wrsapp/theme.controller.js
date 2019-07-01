(function () {
  "use strict";
  
  angular.module('public')
  .controller('ThemeController', ThemeController);
  
  ThemeController.$inject = ['$scope'];
  function ThemeController($scope) {
    $scope.theme = 'dark'; 

    $scope.toggleTheme = function(){
      if($scope.theme === 'light'){
        $scope.theme = 'dark';
        $scope.lightActive = '';
      } else {
        $scope.theme ='light';
        $scope.lightActive = 'active';
      }
    }
  }
  
  
  })();
  