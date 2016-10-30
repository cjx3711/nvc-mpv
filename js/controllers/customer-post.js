// The page that handles the customer posting an image
sweetApp.controller('customerPostController', ['$scope', '$location' ,'dataService', function ($scope, $location, DataService) {
  $scope.pageTitle = "Post a picture";

  $scope.captured = false;
  $scope.posted = false;

  $scope.postLink = "http://localhost/sweets/#/voucher/4";

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
      $scope.captured = false;
    } else {
      video.pause();
      $scope.captured = true;
    }
  }

  $scope.post = function() {
    $scope.posted = true;
  }

  function snapshot() {
    if (localMediaStream) {
      ctx.drawImage(video, 0, 0);
      // "image/webp" works in Chrome.
      // Other browsers will fall back to image/png.
      document.querySelector('img').src = canvas.toDataURL('image/webp');
    }
  }

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

  $(document).on('click', '.btn-social', function() {
    console.log("Clicked");
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  });

}]);
