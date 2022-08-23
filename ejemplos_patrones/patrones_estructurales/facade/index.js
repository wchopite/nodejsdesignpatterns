// Facade pattern
/*
Se utiliza cuando queremos simplicar el llamado a una funcion
Ejemplo: Podemos tener una funcion que va a recibir siempre los mismos
3 argumentos. Una llamada ajax: recibe el verbo (put, patch, post, delete, get),
url y datos extras. Este se puede llamar ajax. Si queremos simplicar la llamada,
podemos crear una facade por sobre este el cual vamos a llamar "get", que por detras
llamara a ajax y le entregara el verbo "get". De esta forma no tenemos que pasar los
3 argumentos, sino solamente 1 que será la url
*/

const https = require('https');

// facade
const get = (url) =>
  new Promise((resolve, reject) => {
    const comp = url.split('/');
    const host = comp.shift();
    const options = {
      hostname: host,
      path: `/${comp.join('/')}`,
      method: 'GET',
    };

    const req = https.request(options, (res) => {
      res.setEncoding('utf-8');
      let body = '';

      res.on('data', (d) => {
        body += d;
      });

      res.on('end', (d) => {
        const parsed = JSON.parse(body);
        resolve(parsed);
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.end();
  });

const main = async () => {
  const resultado = await get('jsonplaceholder.typicode.com/users');
  console.log('resultado', resultado);
};

main();
