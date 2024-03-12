var posts=["2024/03/05/hello-world/","2024/03/12/关于本站/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };