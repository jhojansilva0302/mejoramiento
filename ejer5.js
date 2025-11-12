/*Ejercicio 5: Calculadora de Impuestos

Enunciado: Define una constante TASA_IMPUESTO con valor 0.15. Pide al usuario un precio usando prompt().
Calcula el impuesto total asegurándote de convertir la entrada a Number(). Muestra el resultado en consola. */

const TASA_IMPUESTO = 0.15;
let precioString = prompt("Ingrese el precio:");
let precio = Number(precioString);

if (!isNaN(precio)) {
let impuesto = precio * TASA_IMPUESTO;
let total = precio + impuesto;

console.log("Precio base:", precio);
console.log("Impuesto (15%):", impuesto.toFixed(2));
console.log("Total a pagar:", total.toFixed(2));
} else {
console.log("Error: Entrada inválida");
}