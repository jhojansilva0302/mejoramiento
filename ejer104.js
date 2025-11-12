/* Enunciado: Escribe una función 'reverseString' que invierta una cadena. */


// Escribe una función 'reverseString' que invierta una cadena.
function reverseString(s) {
  return String(s).split('').reverse().join('');
}

console.log(reverseString('hola')); // 'aloh'