(function () {
  "use strict";
  
  angular.module('public')
  .controller('NowPlayingController', NowPlayingController);
  
  NowPlayingController.$inject = ['SpotifyService'];
  function NowPlayingController(SpotifyService) {
   var ctrl = this;
   var token = null;

   

   ctrl.login = function(){
    token = SpotifyService.login();
    var data = SpotifyService.getNowPlaying(token);
   }
   
   if(token != null){

   }
  }
  
  
  })();