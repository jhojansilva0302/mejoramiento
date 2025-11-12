/*Ejercicio 16: Condicional if-else

Enunciado: Escribe una función esMayorDeEdad que reciba una edad. Usa if...else para retornar true si la edad es
18 o mayor, y false en caso contrario. */
function esMayorDeEdad(edad) {
if (edad >= 18) {
return true;
} else {
return false;
}
}
function esMayorDeEdadSimple(edad) {
return edad >= 18;
}
console.log("Edad 20:", esMayorDeEdad(20));
console.log("Edad 16:", esMayorDeEdad(16));