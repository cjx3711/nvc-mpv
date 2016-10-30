sweetApp.controller('loginController', ['$scope', '$location', 'dataService', function ($scope, $location, DataService) {
  $scope.email = "user@gmail.com";
  $scope.password = "12345";
  $scope.login = function() {
    console.log($scope.email, $scope.password);
    var result = DataService.login($scope.email, $scope.password);
    if ( result ) {
      $location.path('/')
    }
  }

  if ( $location.path() == '/login/customer' ) {
    var result = DataService.login('user@gmail.com', '12345');
    if ( result ) {
      $location.path('/')
    }
  }
  if ( $location.path() == '/login/bakery' ) {
    var result = DataService.login('admin@store.com', '12345');
    if ( result ) {
      $location.path('/')
    }
  }
}]);
