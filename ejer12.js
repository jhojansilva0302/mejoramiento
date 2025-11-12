/*Ejercicio 12: Operaciones al Inicio del Array

Enunciado: Crea una lista colaClientes con tres nombres. Simula una cola FIFO usando .shift() para remover al
primer cliente y .unshift() para agregar un nuevo cliente al inicio. */

let colaClientes = ["Cliente A", "Cliente B", "Cliente C"];
console.log("Cola inicial:", colaClientes);
let atendido = colaClientes.shift();
console.log("Cliente atendido:", atendido);
console.log("Cola después de shift:", colaClientes);
colaClientes.unshift("Cliente Prioritario");
console.log("Cola final:", colaClientes);