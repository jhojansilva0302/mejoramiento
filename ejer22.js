/* Ejercicio 22: Métodos Estáticos

Enunciado: Modifica la clase Auto para incluir un método estático informacionGeneral() que retorne "Clase base
para la gestión de vehículos". Explica por qué se invocan desde la clase y no desde instancias. */
class Auto {
constructor(marca, modelo) {
this.marca = marca;
this.modelo = modelo;
}
static informacionGeneral() {
return "Clase base para gestión de vehículos";
}
}
console.log(Auto.informacionGeneral());
const carro = new Auto("Ford", "Focus");