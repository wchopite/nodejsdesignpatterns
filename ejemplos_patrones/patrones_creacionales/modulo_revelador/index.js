// modulo revelador
const resultado = (() => {
  const x = {};

  return {
    a: () => console.log(x),
    // eslint-disable-next-line no-return-assign
    b: (key, val) => (x[key] = val),
  };
})();

resultado.a();
resultado.b('queso', 'cabra');
resultado.a();
