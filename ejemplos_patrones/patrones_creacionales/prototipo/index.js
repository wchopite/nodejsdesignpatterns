const perro = {
  raza: 'Kilterrier',
  ladrar() {
    console.log(`Guau, soy un ${this.raza}`);
  },
};

const kiltro = Object.create(perro);
const boby = Object.create(perro);

kiltro.ladrar();
kiltro.raza = 'Super perro!';
kiltro.ladrar();

boby.raza = 'Chiguagua';
boby.ladrar();
