/*Ejercicio 34: Verificar y Eliminar (Delete)

Enunciado: Simula la operación Eliminar. Usa fs.existsSync para verificar si temporal.txt existe. Si existe, usa
fs.unlinkSync() para eliminarlo mostrando mensaje de éxito. Si no existe, muestra mensaje apropiado. */

import fs from 'fs';

const archivo = "temporal.txt";

if (fs.existsSync(archivo)) {
try {
fs.unlinkSync(archivo);
console.log(`Archivo '${archivo}' eliminado exitosamente`);
} catch (err) {
console.error("Error al eliminar:", err);
}
} else {
console.log(`El archivo '${archivo}' no existe`);
}