(function () {
  "use strict";

  angular.module('common')
    .service('SpotifyService', SpotifyService);


  SpotifyService.$inject = ['$http'];
  function SpotifyService($http) {
    var service = this;

    // Get the hash of the url
    const hash = window.location.hash
      .substring(1)
      .split('&')
      .reduce(function (initial, item) {
        if (item) {
          var parts = item.split('=');
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});
    window.location.hash = '';

    // Set token
    let _token = hash.access_token;

    const authEndpoint = 'https://accounts.spotify.com/authorize';

    // Replace with your app's client ID, redirect URI and desired scopes
    const clientId = '4031dba0e79f425a9a8620c298a3f543';
    const redirectUri = 'http://localhost:3000/index.html#/projects/now-playing';
    const scopes = [
      'user-top-read'
    ];

    // If there is no token, redirect to Spotify authorization
    if (!_token) {
      window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
    }

    service.getToken = function() {
      return _token;
    }

    service.getResume = function () {
      return $http.get('src/common/resume.json').then(function (response) {
        return response.data;
      });
    };
  }

})();