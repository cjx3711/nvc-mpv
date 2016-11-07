sweetApp.controller('bakeryController', ['$scope', '$route', 'dataService', function ($scope, $route, dataService) {
  $scope.posts = dataService.getPosts();
  var route = $route.current.$$route.originalPath;
  if ( route == '/nearby' ) {
    $scope.pageTitle = "Nearby Bakeries";
    $scope.state = 'nearby';
  } else if ( route == "/bakeries" ) {
    $scope.pageTitle = "Bakeries";
    $scope.state = 'list';
  }

  $scope.stores = dataService.getStores();

  console.log("Run");
  if ( $scope.state == 'nearby' ) {
    _.delay( function() {

      var lat = 0;
      var lon = 0;
      _.each( $scope.stores, function(s) {
        lat += s.lat;
        lon += s.lon;
      });
      lat /= $scope.stores.length;
      lon /= $scope.stores.length;

      var map = new GMaps({
        div: '#map',
        lat: lat,
        lng: lon,
        zoom: 13,
        width:'100%',
        height:'100%'
      });

      _.each( $scope.stores, function(s) {
        map.addMarker({
          lat: s.lat,
          lng: s.lon,
          title: s.name,
          infoWindow: {
            content: '<p><strong>'+s.name+'</strong></p>'+'<p>'+s.location+'</p>'
          }
        });
      });
    }, 200 );
  }


}]);
