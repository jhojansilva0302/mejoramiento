/* Enunciado: Escribe 'unique' que devuelva los elementos únicos de un array preservando orden. */


// Escribe 'unique' que devuelva los elementos únicos de un array preservando orden.
function unique(arr) {
  const seen = new Set();
  return arr.filter(x => (seen.has(x) ? false : (seen.add(x), true)));
}

console.log(unique([1,2,2,3,1])); // [1,2,3]
