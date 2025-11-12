/*Ejercicio 14: Modificación Precisa con
.splice()

Enunciado: Dada la lista ["Hacer cama", "Comprar pan", "Estudiar JS", "Lavar platos"], usa .splice() para eliminar
"Comprar pan" y reemplazarlo por "Pasear al perro". */

let tareas = ["Hacer cama", "Comprar pan", "Estudiar JS", "Lavar platos"];
console.log("Inicial:", tareas);
tareas.splice(1, 1, "Pasear al perro");
console.log("Final:", tareas);