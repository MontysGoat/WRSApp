(function () {
  'use strict';
  
  angular.module('WRSApp')
  .config(RoutesConfig);
  
  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
  
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');
  
    // *** Set up UI states ***
    $stateProvider
  
    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/wrsapp/templates/home.template.html'
    })
  
    // Resume Page
    .state('resume', {
      url: '/resume',
      templateUrl: 'src/wrsapp/templates/categories.template.html',
      controller: 'CategoriesController as ctrl'
    });
  }
  
  })();
  