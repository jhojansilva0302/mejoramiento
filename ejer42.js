/*Ejercicio Integrador 3: Implementación con
Persistencia */

// app.js
import fs from 'fs';
import { Estudiante, RegistroEstudiantes } from './Estudiante.js';

const registro = new RegistroEstudiantes();

// Agregar estudiantes
registro.agregar(new Estudiante("Ana", [85, 90, 88]));
registro.agregar(new Estudiante("Carlos", [78, 82, 80]));
registro.agregar(new Estudiante("María", [92, 95, 91]));

// Mostrar promedio general
console.log("Promedio general del curso:",
registro.promedioGeneral());

// Guardar en archivo JSON
fs.writeFile(
'estudiantes.json',
registro.aJSON(),
(err) => {
if (err) {
console.error("Error al guardar:", err);
return;
}
console.log("Datos guardados exitosamente en estudiantes.json");
}
);

// Cargar desde archivo (ejemplo)
fs.readFile('estudiantes.json', 'utf8', (err, data) => {
if (err) {
console.log("Archivo no existe aún");
return;
}

const datosEstudiantes = JSON.parse(data);
console.log("\nDatos cargados desde archivo:");
console.log(datosEstudiantes);
});