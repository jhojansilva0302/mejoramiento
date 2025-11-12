/*Ejercicio 31: Agregar Contenido (Append)

Enunciado: Modifica el programa para agregar una nueva entrada. Usa fs.appendFile() para agregar "--- Nueva
entrada de sistema\n" al final de log.txt sin borrar el contenido existente. */

import fs from 'fs';

const nuevaLinea =
"--- Nueva entrada: Verificación OK\n";

fs.appendFile('log.txt', nuevaLinea, (err) => {
if (err) {
console.error("Error:", err);
return;
}
console.log("Dato agregado (APPEND)");
});