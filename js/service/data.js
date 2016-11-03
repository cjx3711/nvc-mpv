sweetApp.service('dataService', function() {
  window.DataService = this;
  this.save = function() {
    // Store
    localStorage.setObject("user", this.user);
    console.log("Saving data", this.user)
  }
  this.load = function() {
    this.user = localStorage.getObject("user");
    console.log("Loading data", this.user);
  }

  this.user = null;
  this.load();

  this.login = function(username, password) {
    if ( username && username.toLowerCase() == "user@gmail.com"
         && password && password == "12345" ) {
      this.user = {
        name: "Member",
        type: "consumer"
      }
      this.save();
      return true;
    }
    if ( username && username.toLowerCase() == "admin@store.com"
         && password && password == "12345" ) {
      this.user = {
        name: "Super Bakery",
        type: "store"
      }
      this.save();
      return true;
    }
    return false;
  }

  this.logout = function() {
    if ( this.user ) {
      this.user = null;
    }
    this.save();
  }

  // Generate post data
  this.posts = generatePostData();
  this.stores = generateStoreData();;
  this.products = generateProductData();


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


  this.promotionData = generatePromotionData();
});
