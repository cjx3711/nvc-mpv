// Admin panel is for the bakeries
sweetApp.controller('bakeryPromotionsController', ['$scope', '$location' ,'dataService', function ($scope, $location, DataService) {
  $scope.pageTitle = "Promotions";

  $scope.promotions = DataService.promotions;



  var labels = ['Jan 16', 'Feb 16', 'Mar 16', 'Apr 16', 'May 16', 'Jun 16'];
  var voucherSales = [
    $scope.promotions[1].fakeData.trend,
    $scope.promotions[2].fakeData.trend,
    $scope.promotions[3].fakeData.trend
  ];

  var voucherTotals = [];
  voucherTotals[0] = _.sum(voucherSales[0]);
  voucherTotals[1] = _.sum(voucherSales[1]);
  voucherTotals[2] = _.sum(voucherSales[2]);


  new Chartist.Bar('#overall', {
  labels: labels,
  series: voucherSales }, {
    stackBars: true,
    seriesBarDistance: 10,
    axisX: {
      offset: 60
    },
    axisY: {
      offset: 80,
      labelInterpolationFnc: function(value) {
        return value
      },
      scaleMinSpace: 15
    }
  }).on('draw', function(data) {
    if(data.type === 'bar') {
      data.element.attr({
        style: 'stroke-width: 30px'
      });
    }
  });


  var pieData = {
    labels: [ $scope.promotions[1].name, $scope.promotions[2].name, $scope.promotions[2].name],
    series: voucherTotals
  };
  var pieOptions = {
    labelInterpolationFnc: function(value) {
      return value[0]
    }
  };

  var responsiveOptions = [
    ['screen and (min-width: 640px)', {
      chartPadding: 30,
      labelOffset: 100,
      labelDirection: 'explode',
      labelInterpolationFnc: function(value) {
        return value;
      }
    }],
    ['screen and (min-width: 1024px)', {
      labelOffset: 80,
      chartPadding: 20
    }]
  ];
  new Chartist.Pie('#voucher', pieData, pieOptions, responsiveOptions);

  _.delay( function() {
    for ( var i = 0; i < $scope.promotions.length; i++ ) {
      var promotion = $scope.promotions[i];
      var data = promotion.fakeData.trend;
      new Chartist.Line('#chart-' + promotion.id, {
        series: [
          data
        ]
      }, {
        showArea: true
      });
    }
  }, 1000 );




}]);
