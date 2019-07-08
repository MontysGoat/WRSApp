(function () {
  'use strict';
  
  angular.module('WRSApp')
  .config(RoutesConfig);
  
  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
  
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/resume');
  
    // *** Set up UI states ***
    $stateProvider
  
    // Home page
    // .state('home', {
    //   url: '/',
    //   templateUrl: 'src/wrsapp/templates/home.template.html'
    // })
  
    // Resume Page
    .state('resume', {
      url: '/resume',
      templateUrl: 'src/public/wrsapp/resume/resume.template.html',
      controller: 'ResumeController',
      controllerAs: 'resumeCtrl',
      resolve: {
        resume: ['ResumeService', function (ResumeService) {
          return ResumeService.getResume();
        }]
      }
    })
    .state('about', {
      url: '/about/',
      templateUrl: 'src/public/wrsapp/about/about.template.html'
    });
  }  
  })();
  