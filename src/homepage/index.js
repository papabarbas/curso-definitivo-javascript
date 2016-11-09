var page = require('page');
var template = require('./template');

page('/', function(ctx, next){
  $('title').html('Platizgram');
  var main = $('#main-container');
  main.empty().append(template);
})
