var sweetApp = angular.module('SweetApp', ['ngRoute']);

sweetApp.config( function($routeProvider) {
  $routeProvider
    .when("/", {
        templateUrl : "templates/simple.html",
        controller: "mainController"
    })
    .when("/about", {
        templateUrl : "templates/simple.html",
        controller: "aboutController"
    });
});

sweetApp.controller('mainController', function ($scope) {
  $scope.title = "Homepage";
  $scope.message = "Welcome to the homepage of premium sweets (name pending)";
});

sweetApp.controller('aboutController', function ($scope) {
  $scope.title = "About";
  $scope.message = "We are a team passionate about stuff.";
});
