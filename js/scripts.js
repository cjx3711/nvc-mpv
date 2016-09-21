sweetApp.config( function($routeProvider) {
  $routeProvider
    .when("/", {
        templateUrl : "templates/home.html",
        controller: "homeController"
    })
    .when("/about", {
        templateUrl : "templates/about.html",
        controller: "aboutController"
    })
    .when("/contact", {
        templateUrl : "templates/contact.html",
        controller: "contactController"
    })
    .when("/login", {
        templateUrl : "templates/login.html",
        controller: "loginControler"
    })
    .when("/blog", {
        templateUrl : "templates/blog.html",
        controller: "blogController"
    })
    .when("/post/:id", {
        templateUrl : "templates/post.html",
        controller: "postController"
    })
    .otherwise({
        templateUrl : "templates/home.html",
        controller: "homeController"
    });
});

sweetApp.controller('homeController', function ($scope) {

});

sweetApp.controller('aboutController', function ($scope) {

});

sweetApp.controller('contactController', function ($scope) {

});

sweetApp.controller('loginController', function ($scope) {

});

sweetApp.controller('blogController', ['$scope', 'dataService', function ($scope, dataService) {
  $scope.posts = dataService.getPosts();
}]);

sweetApp.controller('postController', ['$scope', '$routeParams', 'dataService', function ($scope, $routeParams, dataService) {
  $scope.currentPostID = $routeParams.id;
  debugger;
  $scope.post = dataService.getPost($scope.currentPostID);
}]);