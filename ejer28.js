/*Ejercicio 28: Importación de Clases

Enunciado: Asumiendo que la clase Auto fue exportada por defecto, crea tienda.js que importe esta clase, cree
una instancia y muestre su descripción. */


//Archivo: Auto.js
class Auto {
constructor(marca, modelo) {
this.marca = marca;
this.modelo = modelo;
}
obtenerDescripcion() {
return `${this.marca}
${this.modelo}`;
}
}
export default Auto;

//Archivo: tienda.js

import Auto from './Auto.js';
const vehiculo = new Auto("Nissan",
"Sentra");
console.log("Nuevo vehículo:");
console.log(vehiculo.obtenerDescripcion());