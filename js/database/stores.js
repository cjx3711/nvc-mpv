function generateStoreData() {
  var stores =
  [
    {
      name: "Super Bakery",
      location: "123 Some street",
      lat: 1.2949889884722228,
      lon: 103.85204315185548
    },
    {
      name: "Bake it",
      location: "321 Street Newton",
      lat: 1.304599552047222,
      lon: 103.8604116439819
    },
    {
      name: "French Bakery",
      location: "12 Street 3",
      lat: 1.3154113921738335,
      lon: 103.85757923126225
    },
    {
      name: "L'Patisserie",
      location: "French Street",
      lat: 1.3137810383194464,
      lon: 103.87830734252934
    },
    {
      name: "Cupcakes Galore",
      location: "Some address",
      lat: 1.287008760656557,
      lon: 103.8405418395996
    },
    {
      name: "A new cake",
      location: "44 Cupcake street",
      lat: 1.3065731453895093,
      lon: 103.87762069702143
    },
    {
      name: "Super Bakery",
      location: "123 Some street",
      lat: 1.312751340599998,
      lon: 103.8470649719238
    },
    {
      name: "Super Bakery",
      location: "123 Some street",
      lat: 1.3378071972557988,
      lon: 103.85187149047858
    },
    {
      name: "Super Bakery",
      location: "123 Some street",
      lat: 1.3319722944135324,
      lon: 103.84981155395504
    },
    {
      name: "Super Bakery",
      location: "123 Some street",
      lat: 1.3182430568620136,
      lon: 103.86938095092776
    },
    {
      name: "Super Bakery",
      location: "123 Some street",
      lat: 1.339180113557158,
      lon: 103.8745307922363
    },
    {
      name: "Super Bakery",
      location: "123 Some street",
      lat: 1.297649058834867,
      lon: 103.8541030883789
    },
    {
      name: "Super Bakery",
      location: "123 Some street",
      lat: 1.3023685316222549,
      lon: 103.87809276580819
    },
    {
      name: "Super Bakery",
      location: "123 Some street",
      lat: 1.294388327036012,
      lon: 103.8689947128295
    },
    {
      name: "Super Bakery",
      location: "123 Some street",
      lat: 1.2997942748317888,
      lon: 103.86247158050538
    }
  ];

  function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  var i = 0;
  _.each ( stores, function (store) {
    store.id = i;
    i++;
    store.img = window.baseURL + "img/stores/store-"+pad(i,2)+".jpg";
  });

  return stores;
}
