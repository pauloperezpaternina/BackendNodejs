let nombre = process.env.NOMBRE || 'Sin Nombre';
let web = process.env.WEB || 'No tiene web';

console.log('Hola '+ nombre);
console.log('Mi web es '+ web);