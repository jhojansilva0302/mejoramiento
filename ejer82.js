/* Enunciado: Escribe una función 'daysBetween' que calcule días entre dos fechas (strings ISO). */


// Escribe una función 'daysBetween' que calcule días entre dos fechas (strings ISO).
function daysBetween(a, b) {
  const da = new Date(a), db = new Date(b);
  const ms = Math.abs(db - da);
  return Math.floor(ms / (1000*60*60*24));
}

console.log(daysBetween('2025-01-01','2025-01-10')); // 9
