sweetApp.controller('loginController', ['$scope', 'dataService', function ($scope, DataService) {
  $scope.email = "asfasf";
  $scope.password = "fasfasf";
  $scope.login = function() {
    console.log($scope.email, $scope.password);
    DataService.login($scope.email, $scope.password);
  }
}]);
