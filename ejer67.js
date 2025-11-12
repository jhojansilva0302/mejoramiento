/* Enunciado: Escribe una función 'sumArray' que reciba un array de números y devuelva la suma. */


// Escribe una función 'sumArray' que reciba un array de números y devuelva la suma.
function sumArray(arr) {
  if (!Array.isArray(arr)) throw new TypeError('Se espera un array');
  return arr.reduce((s, v) => s + Number(v || 0), 0);
}

// Ejemplo
console.log(sumArray([1,2,3,4])); // 10
