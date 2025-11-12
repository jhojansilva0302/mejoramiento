/*Ejercicio 33: Actualizar Archivo (Update)

Enunciado: Simula la operación Actualizar. Escribe una función que reemplace completamente el contenido de
log.txt con "Registro actualizado y sobrescrito." */

import fs from 'fs';

function actualizarContenido(nuevoContenido) {
fs.writeFile('log.txt', nuevoContenido, (err) => {
if (err) {
console.error("Error:", err);
return;
}
console.log("Archivo actualizado (UPDATE)");
});
}

const contenidoActualizado =
"Registro actualizado: " +
new Date().toLocaleString() + "\n";

actualizarContenido(contenidoActualizado);