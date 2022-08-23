// Otra forma de aplicar el patron decorador

/* 
Se envuelve el precio de macbook pero se decora con una
funcion que va a terminar aumentando el valor
*/

class Macbook {
  precio() {
    return 1000;
  }
}

const memoryDecorator = (mac) => {
  const v = mac.precio();
  mac.precio = function () {
    return v + 100;
  };
};

const macbook = new Macbook();
memoryDecorator(macbook);

console.log(macbook.precio());
