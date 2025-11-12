/*Ejercicio 8: Manipulación Básica de Arrays

Enunciado: Crea un array pilaLibros con tres títulos. Simula una pila usando push() para añadir al final y pop() para
remover el último. Muestra la longitud antes de push y después de pop. */

let pilaLibros = ["El Quijote", "100 Años de Soledad", "Fahrenheit 451"];
console.log("Libros iniciales:", pilaLibros.length);
pilaLibros.push("Moby Dick");
console.log("Después de push:", pilaLibros.length);
let libroEliminado = pilaLibros.pop();
console.log("Libro removido:", libroEliminado);
console.log("Libros finales:", pilaLibros.length);