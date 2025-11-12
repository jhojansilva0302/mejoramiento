/*Ejercicio 21: Herencia con extends y super

Enunciado: Crea VehiculoElectrico que herede de Auto. Añade la propiedad autonomiaBateria. Usa super() para
inicializar las propiedades heredadas. */


class VehiculoElectrico extends Auto {
constructor(marca, modelo, autonomiaBateria) {
super(marca, modelo);
this.autonomiaBateria = autonomiaBateria;
}
mostrarInfo() {
return `${super.obtenerDescripcion()}, Autonomía: ${this.autonomiaBateria} km`;
}
}
const tesla = new VehiculoElectrico("Tesla", "Model 3", 500);
console.log(tesla.mostrarInfo());