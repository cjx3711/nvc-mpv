// Admin panel is for the bakeries
sweetApp.controller('voucherController', ['$scope', '$location' ,'dataService', function ($scope, $location, DataService) {
  $scope.pageTitle = "Voucher";
  $('#qrcode').qrcode({width: 200,height: 200,text: "size doesn't matter"});
}]);
