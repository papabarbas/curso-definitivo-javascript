var page = require('page');
var template = require('./template');
var request = require('superagent');
var header = require('../header');
var axios = require('axios');

page('/', header, asyncLoad, function(ctx, next){
  $('title').html('Platizgram');

  var main = $('#main-container');
  main.empty().append(template(ctx.pictures));
})

async function asyncLoad(ctx, next) {
  try {
    ctx.pictures = await fetch('/api/pictures').then(res => res.json());
    next();
  } catch (err) {
    return console.log(err);
  }
}
