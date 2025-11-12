/*Ejercicio 25: Composición de Objetos

Enunciado: Demuestra el concepto de Composición. Crea una clase Direccion con calle y codigoPostal. Luego,
crea Cliente que contenga un objeto Direccion como propiedad. */

class Direccion {
constructor(calle, codigoPostal) {
this.calle = calle;
this.codigoPostal = codigoPostal;
}
}
class Cliente {
constructor(nombre, direccion) {
this.nombre = nombre;
this.direccion = direccion;
}
mostrarUbicacion() {
console.log(`${this.nombre} vive en: ${this.direccion.calle}, CP
${this.direccion.codigoPostal}`);
}
}
const miDireccion = new Direccion("Avenida Central 456", "10101");
const juan = new Cliente("Juan Pérez", miDireccion);
juan.mostrarUbicacion();