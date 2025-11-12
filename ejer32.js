/*Ejercicio 32: Leer Archivo (Read)

Enunciado: Escribe un programa para leer el contenido completo de log.txt e imprimirlo en consola. Especifica la
codificación 'utf8' para que el dato sea legible. */

import fs from 'fs';

fs.readFile('log.txt', 'utf8', (err, data) => {
if (err) {
console.error("Error al leer:", err);
return;
}

console.log("=== Contenido de log.txt ===");
console.log(data);
console.log("============================");
});

