/* similar al patron observador (pub/sub).
la diferencia está en que se usa una funcion, un objeto intermedio
que escucha los eventos y ejecuta logica en base a esto

Cuando los objetos quieren suscribirse a eventos, se suscriben al mediador
el mediador será responsable de despachar los eventos
*/
const Emitter = require('events');

const emitter = new Emitter();

emitter.on('lala', (x) => console.log(x));

emitter.emit('lala', { lala: 'lele' });
