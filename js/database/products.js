function generateProductData() {
    var products = [];

    for ( var i = 0 ; i < 6; i++ ) {
      products.push({
        id: i+1,
        name: "Cupcake",
        img: "http://placehold.it/400x400",
        discount: "20%"
      })
    }
    return products;
}
