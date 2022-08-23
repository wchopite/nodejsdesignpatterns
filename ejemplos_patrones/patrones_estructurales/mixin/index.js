let mixing = {
  saludar() {
    console.log(`Hola ${this.nombre}`);
  },
  despedir() {
    console.log(`Chao ${this.nombre}`);
  },
};

class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

// aumentamos el prototipo con el mixing
Object.assign(Usuario.prototype, mixing);

const usuario = new Usuario('Chanchito feliz');
usuario.saludar();
