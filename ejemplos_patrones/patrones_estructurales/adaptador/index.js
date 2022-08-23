/*
Cuando tenemos una clase o implementacion de alguna libreria
que nosotros hayamos construido, pero nos damos cuenta de que su
api o los metodos que queremos utilizar para accerder a estar,
nos damos cuenta estamos teniendo problemas y queremos actualizarla.
Por lo que sacamos la version 2. Pero nos damos cuenta de que en versiones
anteriores vamos a seguir utilizando la misma. Lo que vamos a querer hacer
es que en lugar de estar queriendo hacer es que en lugar de usar una version
anterior queremos que nuestro codigo legacy use la nueva version. Aqui es
cuando entra en juego el patron adaptador.
*/
class Api {
  constructor() {
    this.operations = function (url, opts, verb) {
      switch (verb) {
        case 'get':
        // return fetch
        case 'post':
        // return fetch
        default:
          return;
      }
    };
  }
}

class Api2 {
  constructor() {
    this.get = function (url, opts) {
      // return axios.get
    };

    this.post = function (url, opts) {
      // return axios.post
    };
  }
}

class ApiAdapter {
  constructor() {
    const api2 = new Api2();

    this.operations = function (url, opts, verb) {
      switch (verb) {
        case 'get':
          return api2.get(url, opts);
        case 'post':
          return api2.post(url, opts);
        default:
          return;
      }
    };
  }
}

const api = new Api();
api.operations('www.google.cl', { q: 1 }, 'get');

const api2 = new Api2();
api2.get('www.google.cl', { q: 1 });

const adapter = new ApiAdapter();
adapter.operations('www.google.cl', { q: 1 });
