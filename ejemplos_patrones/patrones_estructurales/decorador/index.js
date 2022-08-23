// toma instancias de una clase y le agrega nuevas funcionalidades
class Macbook {
  constructor() {
    this.precio = 1000;
    this.pantalla = 11.6;
  }
}

// Decorador mas sencillo que se puede aplicar
const macbook = new Macbook();
macbook.agregarMemoria = function () {
  this.precio += 100;
};

macbook.agregarMemoria();

console.log(macbook.precio);
