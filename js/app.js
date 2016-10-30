sweetApp.run(function($rootScope, $location, dataService) {
    $rootScope.DataService = function() {
      return dataService;
    }
    $rootScope.logout = function() {
      dataService.logout();
      $location.path('/');
    }
});
