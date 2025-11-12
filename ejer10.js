/*Ejercicio 10: Filtrado con .filter()

Enunciado: Dado el array [15, 22, 33, 45, 68, 82, 91], usa .filter() para crear un nuevo array con solo los números
mayores a 50. */

let temperaturas = [15, 22, 33, 45, 68, 82, 91];
let temperaturasAltas = temperaturas.filter(temp => temp > 50);
console.log("Originales:", temperaturas);
console.log("Mayores a 50:", temperaturasAltas);