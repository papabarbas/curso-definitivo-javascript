var page = require('page');
var template = require('./template');

page('/signup', function(ctx, next){
  $('title').html('Platizgram - Signup');
  var main = $('#main-container');
  main.empty().append(template);
})
