// tambien conocido como pub/sub
// consta de 2 actores: el que publica y el que se suscribe
const User = new User();

const init = () => {
  user.on('login', userLoggedInd);
  user.on('login', retrieveInitData);
};

const userLoggedInd = () => {
  // usuario inició sesión
};

app.init();

const login = () => {
  // Logica de inicio de sesion
  // ...

  // Luego:
  user.trigger('login');
};

login();
