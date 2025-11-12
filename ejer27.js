/*Ejercicio 27: Exportación Nombrada

Enunciado: Crea utilidades.js y main.js. En utilidades.js, define y exporta con nombre una constante VERSION y
una función saludarUsuario. En main.js, impórtalos usando llaves {} y sus nombres exactos. */

//Archivo: utilidades.js
export const VERSION = "1.0.0";
export function
saludarUsuario(nombre) {
return `Hola ${nombre}. Versión:
${VERSION}`;
}
export const MAX_USUARIOS =
100;

//Archivo: main.js

import { VERSION, saludarUsuario
} from './utilidades.js';
console.log("Versión:", VERSION);
console.log(saludarUsuario("Ana")
);