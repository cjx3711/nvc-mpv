sweetApp.controller('bakeryController', ['$scope', '$route', 'dataService', function ($scope, $route, dataService) {
  $scope.posts = dataService.getPosts();
  var route = $route.current.$$route.originalPath;
  if ( route == '/nearby' ) {
    $scope.pageTitle = "Nearby Bakeries";
  } else if ( route == "/bakeries" ) {
    $scope.pageTitle = "Bakeries";
  }

  $scope.stores = dataService.getStores();

}]);
