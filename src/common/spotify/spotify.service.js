(function () {
  "use strict";

  angular.module('common')
    .service('SpotifyService', SpotifyService);


  SpotifyService.$inject = ['$http'];
  function SpotifyService($http) {
    var service = this;

    service.login = function() {
      var CLIENT_ID = '4031dba0e79f425a9a8620c298a3f543';
      var REDIRECT_URI = 'http://localhost:3000/index.html#!/projects/now-playing';
      function getLoginURL(scopes) {
        return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
          '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
          '&scope=' + encodeURIComponent(scopes.join(' ')) +
          '&response_type=token';
      }

      var url = getLoginURL([
        'user-read-email'
      ]);

      var width = 450,
        height = 730,
        left = (screen.width / 2) - (width / 2),
        top = (screen.height / 2) - (height / 2);

      window.addEventListener("message", function (event) {
        var hash = JSON.parse(event.data);
        if (hash.type == 'access_token') {
          return hash.access_token;
        }
      }, false);

      var w = window.open(url,
        'Spotify',
        'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
      );
    };

    service.getNowPlaying = function (token){
      return $.ajax({
        url: 'https://api.spotify.com/v1/me',
        headers: {
           'Authorization': 'Bearer ' + token
        }.then(function(response){
          return response;
        })
    });
    };

  }

})();