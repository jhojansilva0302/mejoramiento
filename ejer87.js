/* Enunciado: Escribe una función 'mergeObjects' que fusione dos objetos (propiedades del segundo sobrescriben). */


// Escribe una función 'mergeObjects' que fusione dos objetos (propiedades del segundo sobrescriben).
function mergeObjects(a = {}, b = {}) {
  return Object.assign({}, a, b);
}

console.log(mergeObjects({x:1,y:2}, {y:3,z:4})); // {x:1,y:3,z:4}
