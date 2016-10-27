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
        controller: "loginController"
    })
    .when("/blog", {
        templateUrl : "templates/blog.html",
        controller: "blogController"
    })
    .when("/nearby", {
        templateUrl : "templates/bakeries.html",
        controller: "bakeryController"
    })
    .when("/bakeries", {
        templateUrl : "templates/bakeries.html",
        controller: "bakeryController"
    })
    .when("/admin", {
        templateUrl : "templates/admin.html",
        controller: "adminController"
    })
    .when("/preferences", {
        templateUrl : "templates/preferences.html",
        controller: "preferencesController"
    })
    .when("/admin/scan", {
        templateUrl : "templates/scan.html",
        controller: "scanController"
    })
    .when("/post/:id", {
        templateUrl : "templates/post.html",
        controller: "postController"
    })
    .when("/voucher/:id", {
        templateUrl : "templates/voucher.html",
        controller: "voucherController"
    })
    .otherwise({
        templateUrl : "templates/home.html",
        controller: "homeController"
    });
});
