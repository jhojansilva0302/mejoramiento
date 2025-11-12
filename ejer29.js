/*Ejercicio 29: Alias en Importaciones

Enunciado: En calculosAvanzados.js se exportan sumar y sumarDoble. En reporteria.js, impórtalas usando alias
para renombrarlas (ej: sumaSimple y sumaConMultiplicador). */

// calculosAvanzados.js
export function sumar(a, b) {
return a + b;
}
export function sumarDoble(a, b) {
return (a + b) * 2;
}
// reporteria.js
import { sumar as sumaSimple, sumarDoble as sumaConMultiplicador } from
'./calculosAvanzados.js';
console.log("Suma simple:", sumaSimple(3, 2));
console.log("Suma doble:", sumaConMultiplicador(5, 5));