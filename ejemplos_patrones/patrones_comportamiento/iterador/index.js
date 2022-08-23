// mediante una funcion, objeto o clase. podemos acceder a 2 metodos. next, value
// y saber si terminamos de iterar un conjunto de datos

function* iterador(col) {
  var nextIndex = 0;

  while (nextIndex < col.length) {
    yield col[nextIndex++];
  }
}

const x = [1, 2, 3, 4, 5, 6, 7];
const gen = iterador(x);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
