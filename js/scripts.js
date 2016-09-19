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
