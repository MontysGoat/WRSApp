(function () {
  'use strict';

  angular.module('WRSApp', [
    'public',
    'common',
    'hl.ui.router.css'])
    .config(config);

  config.$inject = ['$urlRouterProvider', '$locationProvider'];
  function config($urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/about');
  }

})();
