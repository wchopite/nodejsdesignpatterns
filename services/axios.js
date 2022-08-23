const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// Suponiendo un cambio importante en axios, vamos a implementar un adapter pattern
const adapter = {
  get: (url) => instance.get(url),
  post: (url, body) => instance.post(url, body),
  put: (url, body) => instance.put(url, body),
  delete: (url) => instance.delete(url),
};

// Singleton pattern. In this case because nodejs cached the module to be exported
module.exports = adapter;
