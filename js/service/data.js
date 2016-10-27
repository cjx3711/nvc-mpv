sweetApp.service('dataService', function() {
  window.DataService = this;
  this.save = function() {
    // Store
    localStorage.setItem("user", this.user);
    console.log("Saving data", this.user)
  }
  this.load = function() {
    this.user = localStorage.getItem("user");
    console.log("Loading data", this.user);

  }

  this.user = null;

  this.login = function(username, password) {
    console.log("Logging in with", username, password);
    if ( username && username.toLowerCase() == "user@gmail.com"
         && password && password == "12345" ) {
      this.user = {
        name: "Member",
        type: "consumer"
      }
      return true;
    }
    if ( username && username.toLowerCase() == "admin@store.com"
         && password && password == "12345" ) {
      this.user = {
        name: "Super Bakery",
        type: "store"
      }
      return true;
    }
    this.save();
    return false;
  }

  this.logout = function() {
    if ( this.user ) {
      this.user = null;
    }
  }

  // Generate post data
  this.posts = [];

  this.posts.push({
    id: 1,
    title: "Baked goods are awesome",
    date: "24th Aug 2015",
    author: "Jessie",
    img: "http://placehold.it/1024x400",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  });

  this.posts.push({
    id: 2,
    title: "Baked goods are cool",
    date: "21th Aug 2015",
    author: "Jessie",
    img: "http://placehold.it/1024x400",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  });

  this.posts.push({
    id: 3,
    title: "Pastries awesome",
    date: "14th Aug 2015",
    author: "Jessie",
    img: "http://placehold.it/1024x400",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  });

  this.posts.push({
    id: 4,
    title: "We are going live",
    date: "5th Aug 2015",
    author: "Jessie",
    img: "http://placehold.it/1024x400",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  });

  this.posts.push({
    id: 5,
    title: "Hello World",
    date: "29th Jun 2015",
    author: "Jessie",
    img: "http://placehold.it/1024x400",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  });

  this.stores = [];

  for ( var i = 0; i < 10; i++ ) {
    this.stores.push({
      id: i+1,
      name: "Sweet Bakery",
      img: "http://placehold.it/600x400",
      location: "123 Some Street"
    });
  }

  this.products = [];

  for ( var i = 0 ; i < 6; i++ ) {
    this.products.push({
      id: i+1,
      name: "Cupcake",
      img: "http://placehold.it/400x400",
      discount: "20%"
    })
  }


  this.getPosts = function() {
      return this.posts;
  }
  this.getPost = function(id) {
    _.get(this.posts)
    return {
      id: id,
      title: "Hello World",
      date: "29th Jun 2015",
      author: "Jessie",
      img: "http://placehold.it/1024x400",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
  }

  this.getStores = function() {
      return this.stores;
  }

  this.getProducts = function ( store_id ) {
      // Generate products based on some random things.
      return this.products
  }
});
