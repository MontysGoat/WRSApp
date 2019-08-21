(function () {
  'use strict';
  
  angular.module('WRSApp', ['public', 'common'])
  .config(config);

  config.$inject = ['$urlRouterProvider', '$locationProvider'];
  function config($urlRouterProvider, $locationProvider){

    $urlRouterProvider.otherwise('/');
  }
  
  })();
  