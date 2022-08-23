// const suma = (a, b) => a + b;
const suma = (a) => (b) => a + b;

console.log(suma(1)(5));

const suma1 = suma(1); // ejecucion parcial con una valor ya pasado. 1 en este caso
const suma5 = suma(5); // ejecucion parcial con una valor ya pasado. 5 en este caso

console.log('suma1 + 2 = ', suma1(2));
console.log('suma5 + 2 = ', suma5(2));
