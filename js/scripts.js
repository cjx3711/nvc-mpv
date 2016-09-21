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

sweetApp.controller('blogController', function ($scope) {
  $scope.posts = [];
  
  $scope.posts.push ( {
    id: 1,
    title: "Baked goods are awesome",
    date: "24th Aug 2015",
    author: "Jessie",
    img: "http://placehold.it/1024x400",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  });
  
  $scope.posts.push ( {
    id: 2,
    title: "Baked goods are cool",
    date: "21th Aug 2015",
    author: "Jessie",
    img: "http://placehold.it/1024x400",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  });
  
  $scope.posts.push ( {
    id: 3,
    title: "Pastries awesome",
    date: "14th Aug 2015",
    author: "Jessie",
    img: "http://placehold.it/1024x400",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  });
  
  $scope.posts.push ( {
    id: 4,
    title: "We are going live",
    date: "5th Aug 2015",
    author: "Jessie",
    img: "http://placehold.it/1024x400",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  });
  
  $scope.posts.push ( {
    id: 5,
    title: "Hello World",
    date: "29th Jun 2015",
    author: "Jessie",
    img: "http://placehold.it/1024x400",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  });
});

sweetApp.controller('postController', function ($scope, $routeParams) {
  $scope.id = $routeParams.id;
});