var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.use(express.static('public'));
app.get('/', function(req, res) {
  res.render('index');
})

app.get('/signup', function(req, res) {
  res.render('index');
})

app.get('/signin', function(req, res) {
  res.render('index');
})
app.get('/api/pictures', function(res, res) {
    var pictures = [
      {
        user: {
          username: 'Hillary-Clinton',
          avatar: 'http://2016christianvotersguide.com/img/hillary.png'
        },
        url: 'office.jpg',
        likes: 0,
        liked: true,
        createdAt: +new Date()
      },
      {
        user: {
          username: 'Hillary-Clinton',
          avatar: 'http://2016christianvotersguide.com/img/hillary.png'
        },
        url: 'office.jpg',
        likes: 1,
        liked: true,
        createdAt: new Date().setDate(new Date().getDate() -10)
      },
    ];

    res.send(pictures);

})
app.listen(3000, function(err) {
  if (err) return console.log('Hubo un error'), process.exit(1);
  console.log('Platzi escuchando en el puerto 3000');
})
