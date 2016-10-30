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
    // Pages
    .when("/blog", {
        templateUrl : "templates/blog.html",
        controller: "blogController"
    })
    .when("/post/:id", {
        templateUrl : "templates/post.html",
        controller: "postController"
    })

    .when("/bakeries", {
        templateUrl : "templates/bakeries.html",
        controller: "bakeryController"
    })

    .when("/login", {
        templateUrl : "templates/login.html",
        controller: "loginController"
    })
    .when("/login/customer", {
        templateUrl : "templates/login.html",
        controller: "loginController"
    })
    .when("/login/bakery", {
        templateUrl : "templates/login.html",
        controller: "loginController"
    })
    // Member Pages


    .when("/customer/preferences", {
        templateUrl : "templates/customer-preferences.html",
        controller: "customerPreferencesController"
    })
    .when("/customer/statistics", {
        templateUrl : "templates/customer-statistics.html",
        controller: "customerStatisticsController"
    })
    .when("/customer/post", {
        templateUrl : "templates/customer-post.html",
        controller: "customerPostController"
    })

    // Bakery Pages
    .when("/bakery/admin", {
        templateUrl : "templates/bakery-admin.html",
        controller: "bakeryAdminController"
    })
    .when("/bakery/scan", {
        templateUrl : "templates/bakery-scan.html",
        controller: "bakeryScanController"
    })
    .when("/bakery/statistics", {
        templateUrl : "templates/bakery-statistics.html",
        controller: "bakeryStatisticsController"
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
