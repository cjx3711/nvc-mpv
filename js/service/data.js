sweetApp.service('dataService', function() {
  this.posts = [];
  
  this.posts.push ( {
    id: 1,
    title: "Baked goods are awesome",
    date: "24th Aug 2015",
    author: "Jessie",
    img: "http://placehold.it/1024x400",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  });
  
  this.posts.push ( {
    id: 2,
    title: "Baked goods are cool",
    date: "21th Aug 2015",
    author: "Jessie",
    img: "http://placehold.it/1024x400",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  });
  
  this.posts.push ( {
    id: 3,
    title: "Pastries awesome",
    date: "14th Aug 2015",
    author: "Jessie",
    img: "http://placehold.it/1024x400",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  });
  
  this.posts.push ( {
    id: 4,
    title: "We are going live",
    date: "5th Aug 2015",
    author: "Jessie",
    img: "http://placehold.it/1024x400",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  });
  
  this.posts.push ( {
    id: 5,
    title: "Hello World",
    date: "29th Jun 2015",
    author: "Jessie",
    img: "http://placehold.it/1024x400",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  });
  this.getPosts = function() {
      return this.posts;
  }
  this.getPost = function(id) {
    return {
      id: id,
      title: "Hello World",
      date: "29th Jun 2015",
      author: "Jessie",
      img: "http://placehold.it/1024x400",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
  }
});