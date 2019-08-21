(function () {
  'use strict';
  
  angular.module('WRSApp', ['public', 'common'])
  .config(config);

  config.$inject = ['$urlRouterProvider', '$locationProvider'];
  function config($urlRouterProvider, $locationProvider){

    $urlRouterProvider.otherwise('/');
    // $urlRouterProvider.when('/path', {
    //   templateUrl: 'path.html',
    // });
    $locationProvider.html5Mode(true);
  }
  
  })();
  