/*Ejercicio 30: Crear Archivo (Create)

Enunciado: Escribe un programa Node.js que use fs para crear un archivo log.txt con el texto "Log creado a las
[fecha actual]". Usa fs.writeFile(). */

import fs from 'fs';

const fecha= new Date().tolSOString();
const contenido = `Log creado: ${fecha}\n`;

fs.writeFile('log.txt', contenido, (err) => {
if (err) {
console.error("Error:", err);
return;
}
console.log("Archivo creado exitosamente (CREATE)");
});