(function () {
  'use strict';
  
  angular.module('WRSApp', ['public', 'common'])
  .config(config);

  config.$inject = ['$urlRouterProvider'];
  function config($urlRouterProvider){

    $urlRouterProvider.otherwise('/');
  }
  
  })();
  