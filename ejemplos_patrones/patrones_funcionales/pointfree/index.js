const f = (ruta, cb) => {
  // muchaaaaaaas lineas de codigo despues
  // eslint-disable-next-line no-undef
  const resultado = computacionPesada();
  cb(resultado);
};

const manejaResultado = (result) => console.log(result);
f('/users', manejaResultado); // point free. sin argumentos

// f('/users', (result) => console.log(result));
// Similar a una ruta express. Esto resulta muy dificil de testear unitariamente
/*
app.get('/users', (req, res) => {
  ......
});
*/
