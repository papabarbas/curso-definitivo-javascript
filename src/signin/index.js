var page = require('page');
var template = require('./template');

page('/signin', function(ctx, next){
  $('title').html('Platizgram - Signin');
  var main = $('#main-container');
  main.empty().append(template);
})
