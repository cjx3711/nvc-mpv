function generatePromotionData() {
  var promotions = [{
    id: 1,
    discount: 0.2,
    name: 'Autumn year sale',
    fakeData: {
      status: 'inactive',
      totalSales: 243,
      daysLeft: 0,
      daysActive: 15,
      change: 0,
      trend: [0, 0, 0, 0, 0, 0 ]
    }
  },
  {
    id: 2,
    discount: 0.2,
    name: 'End year sale',
    fakeData: {
      status: 'inactive',
      totalSales: 50,
      daysLeft: 5,
      daysActive: 8,
      change: 6,
      trend: [16, 12, 3, 0, 0, 0 ]
    }
  },
  {
    id: 3,
    discount: 0.2,
    name: 'New Year sale',
    fakeData: {
      status: 'expiring',
      totalSales: 50,
      daysLeft: 5,
      daysActive: 8,
      change: 6,
      trend: [25, 33, 38, 42, 46, 41 ]
    }
  },
  {
    id: 4,
    discount: 0.2,
    name: 'Spring sale',
    fakeData: {
      status: 'active',
      totalSales: 50,
      daysLeft: 5,
      daysActive: 8,
      change: 6,
      trend: [0, 0, 15, 26, 10, 5 ]
    }
  }];

  return promotions;
}
