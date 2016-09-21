var sweetApp = angular.module('SweetApp', ['ngRoute']);

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