var page = require('page');
var template = require('./template');

page('/', function(ctx, next){
  $('title').html('Platizgram');
  var pictures = [
    {
      user: {
        username: 'Hillary-Clinton',
        avatar: 'http://2016christianvotersguide.com/img/hillary.png'
      },
      url: 'office.jpg',
      likes: 10,
      liked: true
    },
    {
      user: {
        username: 'Hillary-Clinton',
        avatar: 'http://2016christianvotersguide.com/img/hillary.png'
      },
      url: 'office.jpg',
      likes: 2,
      liked: true
    },
  ];
  var main = $('#main-container');
  main.empty().append(template(pictures));
})
