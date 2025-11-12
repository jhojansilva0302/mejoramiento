/* Enunciado: Crea 'delay' que retorna una promesa que se resuelve después de ms milisegundos. */


// Crea 'delay' que retorna una promesa que se resuelve después de ms milisegundos.
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Uso (descomentarlo para probar en entorno con setTimeout)
// delay(100).then(() => console.log('Hecho'));
