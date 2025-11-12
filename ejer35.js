/*Ejercicio Integrador 1: Gestión de Tareas

Enunciado: Crea un sistema de gestión de tareas que permita agregar tareas, marcar como completadas
(añadiendo "7" al inicio), y mostrar estadísticas (total, completadas, pendientes). */

class GestionTareas {
constructor() {
this.tareas = [];
}

agregar(tarea) {
this.tareas.push(tarea);
console.log(`Tarea agregada: "${tarea}"`);
}

completar(indice) {
if (indice >= 0 && indice < this.tareas.length) {
this.tareas[indice] = "7 " + this.tareas[indice];
console.log("Tarea marcada como completada");
} else {
console.log("Índice inválido");
}
}

obtenerEstadisticas() {
const total = this.tareas.length;
const completadas = this.tareas.filter(
t => t.startsWith("7")
).length;
const pendientes = total - completadas;

return { total, completadas, pendientes };
}

mostrar() {
console.log("\n=== LISTA DE TAREAS ===");
this.tareas.forEach((tarea, i) => {
console.log(`${i}. ${tarea}`);
});
}
}