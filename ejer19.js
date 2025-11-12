/*Ejercicio 19: Funciones con Múltiples
Parámetros

Enunciado: Define generarBienvenida que reciba nombre y curso. Imprime un mensaje de bienvenida estructurado
usando console.log(). */

function generarBienvenida(nombre, curso) {
console.log(`¡Bienvenido, ${nombre}!`);
console.log(`Estás inscrito en el curso: ${curso}`);
console.log("Comencemos a programar.");
}
generarBienvenida("Esteban", "Fundamentos de JavaScript");
generarBienvenida("María", "Programación Web");