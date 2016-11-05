// Admin panel is for the bakeries
sweetApp.controller('redeemController', ['$scope', '$location' ,'dataService', function ($scope, $location, DataService) {
  $scope.pageTitle = "Redeem";

  $scope.friend = {
    name : "Joel"
  };
  $scope.bakery = {
    name : "Super Bakery"
  }

  $scope.game = {};
  $scope.game.cards = [];

  for ( var i = 0 ; i < 12; i++ ) {
    $scope.game.cards.push({
      selected : false,
      discount: 0
    });
  }

  $scope.cardSelected = false;
  $scope.selectCard = function(card) {
    if ($scope.revealed) return;

    $scope.cardSelected = true;
    _.each($scope.game.cards, function( card ) {
      card.selected = false;
    });
    card.selected = true;
    $scope.selectedCard = card;
  }
  $scope.revealed = false;
  $scope.getVoucher = function() {
    if ($scope.revealed) return;
    $scope.revealed = true;
    _.each($scope.game.cards, function( card ) {
      card.discount = parseInt (Math.random() * 16 + 2) * 5; // Randomise from 10 to 90%
    });
  }

}]);
