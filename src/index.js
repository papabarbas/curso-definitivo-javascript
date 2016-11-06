var page = require('page');
var main = document.getElementById('main-container');

page('/', function(ctx, next){
  main.innerHTML = 'HOME <a href="/signup">signup</a>'
})

page('/signup', function(ctx, next){
  main.innerHTML = 'SIGNUP <a href="/">Home</a>';
})

page.start();
