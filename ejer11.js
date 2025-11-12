/*Ejercicio 11: Matrices y Bucles Anidados

Enunciado: Dada una matriz (arreglo de arreglos), escribe una función que recorra e imprima cada elemento
usando bucles anidados. */
let matriz = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];
function imprimirMatriz(arr) {
for (let i = 0; i < arr.length; i++) {
for (let j = 0; j < arr[i].length; j++) {
console.log(`[${i}][${j}] = ${arr[i]
[j]}`);
}
}
}
imprimirMatriz(matriz);