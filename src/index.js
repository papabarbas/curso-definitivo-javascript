var page = require('page');

var yo = require('yo-yo');

var main = document.getElementById('main-container');

page('/', function(ctx, next){
  main.innerHTML = '<a href="/signup">signup</a>'
})

page('/signup', function(ctx, next){
  var el = yo`<div class="container">
    <div class="row">
      <div class="col s10 push-s1">
        <div class="row">
          <div class="col m5 hide-on-small-only">
            <img class="iphone" src="iphone.png" />
          </div>
          <div class="col s12 m7">
            <div class="row">
              <div class="signup-box">
                <h1 class="platzigram">Platzigram</h1>
                <form class="signup-form">
                  <h2>Regístrate para ver las fotos de tus amigos estudiando en Platzi</h2>
                  <div class="section">
                    <a class="btn btn-fb hide-on-small-only"href="#">Iniciar sesión con Facebook</a>
                    <a class="btn btn-fb hide-on-med-and-up"href="#">Iniciar sesión</a>
                  </div>
                  <div class="divider"></div>
                  <div class="section">
                    <input type="email" name="email" placeholder="Correo Electrónico" />
                    <input type="text" name="name" placeholder="Nombre completo" />
                    <input type="text" name="username" placeholder="Nombre de usuario" />
                    <input type="password" name="password" placeholder="Contraseña" />
                    <button class="btn waves-effect waves-light btn-sign-up" type="submit">Regístrate</button>
                  </div>
                </form>
            </div>
          </div>
          <div class="row">
            <div class="login-box">
              ¿Tienes una cuenta? <a href="#">entrar</a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  main.innerHTML = "";
  main.appendChild(el);
})

page.start();
