sweetApp.controller('bakeryScanController', ['$scope', '$location' ,'dataService', function ($scope, $location, DataService) {
  $scope.pageTitle = "Scan voucher";

  $scope.scanned = false;


  var video = document.querySelector('video');
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var localMediaStream = null;

  var errorCallback = function(e) {
    console.log('Reeeejected!', e);
  };

  $scope.scan = function() {
    if ( video.paused ) {
      video.play();
      $scope.scanned = false;
    } else {
      video.pause();
      $scope.scanned = true;
    }
  }



  function snapshot() {
    if (localMediaStream) {
      ctx.drawImage(video, 0, 0);
      // "image/webp" works in Chrome.
      // Other browsers will fall back to image/png.
      document.querySelector('img').src = canvas.toDataURL('image/webp');
    }
  }

  video.addEventListener('click', snapshot, false);

  // Not showing vendor prefixes or code that works cross-browser.
  navigator.getUserMedia({video: true}, function(stream) {
    video.src = window.URL.createObjectURL(stream);
    localMediaStream = stream;
    // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
    // See crbug.com/110938.
    video.onloadedmetadata = function(e) {
      // Ready to go. Do some stuff.
    };
  }, errorCallback);

}]);
