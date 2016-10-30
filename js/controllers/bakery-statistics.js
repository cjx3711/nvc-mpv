sweetApp.controller('bakeryStatisticsController', ['$scope', '$route', 'dataService', function ($scope, $route, dataService) {
  $scope.pageTitle = "Statistics";

  var labels = ['Jan 16', 'Feb 16', 'Mar 16', 'Apr 16', 'May 16', 'Jun 16'];
  var voucherSales = [
    [25, 33, 38, 42, 46, 41 ],
    [16, 12, 3, 0, 0, 0 ],
    [0, 0, 15, 26, 10, 5 ]
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
    labels: ['Year end sale', 'New year sale!', 'Spring sale'],
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
}]);
