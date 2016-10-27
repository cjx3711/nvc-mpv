sweetApp.controller('postController', ['$scope', '$routeParams', 'dataService', function ($scope, $routeParams, dataService) {
  $scope.currentPostID = $routeParams.id;
  debugger;
  $scope.post = dataService.getPost($scope.currentPostID);
}]);
