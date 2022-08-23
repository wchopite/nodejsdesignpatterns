class MiClase {
  constructor(p1, p2) {
    this.prop1 = p1;
    this.prop2 = p2;
  }

  metodo() {
    // this is a prototype method
  }
}

const instancia = new MiClase(4, 2);
console.log(instancia);
