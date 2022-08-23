class MiClase {
  constructor(p1, p2) {
    this.propiedad1 = p1;
    this.propiedad2 = p2;
    this.metodo = () => ({
      prop1: this.propiedad1,
      prop2: this.propiedad2,
    });
  }
}

const instancia = new MiClase(4, 2);
console.log(instancia.metodo());
