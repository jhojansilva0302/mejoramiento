/*Ejercicio 24: Patrón Singleton

Enunciado: Define BaseDeDatos que implemente el patrón Singleton. Este patrón garantiza que, sin importar
cuántas veces se instancie, siempre se retorne la misma instancia única. Demuéstralo creando dos instancias y
comparándolas. */

class BaseDeDatos {
constructor(url) {
if (BaseDeDatos.instancia) {
return BaseDeDatos.instancia;
}
this.url = url;
this.conectado = true;
BaseDeDatos.instancia = this;
}
}
const db1 = new
BaseDeDatos("servidor_prod");
const db2 = new
BaseDeDatos("servidor_test");
console.log("URL db1:", db1.url);
console.log("URL db2:", db2.url);
console.log("¿Misma instancia?", db1 === db2);