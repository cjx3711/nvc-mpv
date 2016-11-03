function generateStoreData() {
  var stores = [];
  for ( var i = 0; i < 10; i++ ) {
    stores.push({
      id: i+1,
      name: "Sweet Bakery",
      img: "http://placehold.it/600x400",
      location: "123 Some Street"
    });
  }
  return stores;
}
