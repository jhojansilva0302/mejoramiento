/*Ejercicio 20: Clase Básica con Constructor

Enunciado: Define una clase Auto con constructor que inicialice marca y modelo. Incluye un método
obtenerDescripcion que retorne una cadena con la marca y modelo del auto. */

class Auto {
constructor(marca, modelo) {
this.marca = marca;
this.modelo = modelo;
}
obtenerDescripcion() {
return `Marca: ${this.marca},
Modelo: ${this.modelo}`;
}
}
const miAuto = new Auto("Toyota",
"Corolla");
console.log(miAuto.obtenerDescripcion());
export default Auto;