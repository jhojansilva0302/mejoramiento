// Métodos especiales de console
const usuarios = [
    { id: 1, nombre: "Ana", edad: 30 },
    { id: 2, nombre: "Luis", edad: 24 },
    { id: 3, nombre: "Marta", edad: 35 }
];
console.table(usuarios);

console.group("Proceso de Inicialización");
console.log("Cargando configuración...");
console.warn("API Key no encontrada.");
console.groupEnd();

console.groupCollapsed("Detalles de Usuario");
console.log("Usuario: admin");
console.log("Rol: superuser");
console.groupEnd();

console.time("CalculoComplejo");
let resultado = 0;
for (let i = 0; i < 1000000; i++) {
    resultado += Math.sqrt(i);
}
console.timeEnd("CalculoComplejo");
