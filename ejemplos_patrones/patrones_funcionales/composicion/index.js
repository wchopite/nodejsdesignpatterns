const users = [
  { edad: 17, nombre: 'Nicolas', apellido: 'Soto' },
  { edad: 18, nombre: 'Chanchito', apellido: 'Feliz' },
  { edad: 12, nombre: 'Loreto', apellido: 'Fernandez' },
  { edad: 1, nombre: 'Sofia', apellido: 'Zapata' },
];

// Puede ser poco confuso. Para eso se puede usar pipe
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((y, f) => f(y), x);

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((y, f) => f(y), x);

const trace = (x) => (y) => {
  console.log(x, y);
  return y;
};

const head = (xs) => xs[0];
const filter = (f) => (xs) => xs.filter(f);
const lowerThan2 = (x) => x.edad < 2;

const formateo = (x) => ({
  nombreCompleto: `${x.nombre} ${x.apellido}`,
  edad: x.edad,
});

const formato = (x) => `${x.nombreCompleto} tiene ${x.edad} año(s)`;

// de abajo hacia arriba
const traePrimerInfanteWithCompose = compose(
  formato,
  formateo,
  head,
  filter(lowerThan2)
);
// de arriba hacia abajo
const traePrimerInfanteWithPipe = pipe(
  filter(lowerThan2),
  trace('despues de filter'),
  head,
  formateo,
  formato
);

// forma imperativa ///////
// const traePrimerInfante = (data) => {
//   const infantes = data.filter((x) => x.edad < 2);
//   const primerInfante = infantes[0];
//   const infante = {
//     nombreCompleto: `${primerInfante.nombre} ${primerInfante.apellido}`,
//     edad: primerInfante.edad,
//   };

//   return `${infante.nombreCompleto} tiene ${infante.edad} año(s)`;
// };

console.log(traePrimerInfanteWithCompose(users));
console.log(traePrimerInfanteWithPipe(users));
