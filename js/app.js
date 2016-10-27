sweetApp.run(function($rootScope, dataService) {
    $rootScope.DataService = function() {
      return dataService;
    }
});
