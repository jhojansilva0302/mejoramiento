/*Ejercicio Integrador 3: Registro de
Estudiantes con Persistencia

Enunciado: Crea un sistema de registro de estudiantes que guarde y cargue datos desde un archivo JSON. Debe
permitir agregar estudiantes, calcular promedios, y persistir los datos. */

// Estudiante.js
export class Estudiante {
constructor(nombre, calificaciones) {
this.nombre = nombre;
this.calificaciones = calificaciones;
}

promedio() {
const suma = this.calificaciones.reduce(
(acc, cal) => acc + cal, 0
);
return (suma / this.calificaciones.length).toFixed(2);
}
}

export class RegistroEstudiantes {
constructor() {
this.estudiantes = [];
}

agregar(estudiante) {
this.estudiantes.push(estudiante);
}

buscar(nombre) {
return this.estudiantes.find(e => e.nombre === nombre);
}

promedioGeneral() {
const promedios = this.estudiantes.map(e =>
parseFloat(e.promedio())
);
const suma = promedios.reduce((a, b) => a + b, 0);
return (suma / promedios.length).toFixed(2);
}

aJSON() {
return JSON.stringify(this.estudiantes, null, 2);
}
}

