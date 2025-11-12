/*Ejercicio 9: Suma de Elementos con Bucle

Enunciado: Dado el arreglo [100, 200, 300, 400, 500], escribe una función que calcule la suma de todos sus
elementos usando un bucle for. */
function sumarArreglo(arr) {
let suma = 0;
for (let i = 0; i < arr.length; i++) {
suma += arr[i];
}
return suma;
}
let ventas = [100, 200, 300, 400, 500];
console.log("Total:",
sumarArreglo(ventas));