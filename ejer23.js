/*Ejercicio 23: Getters y
Setters

Enunciado: Modifica Auto para que _velocidad sea interna. Implementa
un setter que solo permita valores positivos. Si se intenta asignar
negativo, muestra error. Implementa el getter correspondiente. */


class Auto {
constructor(marca, velocidadInicial) {
this.marca = marca;
this._velocidad = velocidadInicial;
}
set velocidad(valor) {
if (valor >= 0) {
this._velocidad = valor;
} else {
console.log("Error: Velocidad no puede ser negativa");
}
}
get velocidad() {
return this._velocidad;
}
}
const carro = new Auto("Ford", 80);
console.log("Velocidad:", carro.velocidad);
carro.velocidad = 120;
carro.velocidad = -50;