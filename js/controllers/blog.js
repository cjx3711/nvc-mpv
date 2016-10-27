sweetApp.controller('blogController', ['$scope', 'dataService', function ($scope, dataService) {
  $scope.posts = dataService.getPosts();
}]);
