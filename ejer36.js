//Ejercicio Integrador 1: Uso del Sistema de Tareas

// Crear instancia
const misTareas = new GestionTareas();

// Agregar tareas
misTareas.agregar("Estudiar JavaScript");
misTareas.agregar("Hacer ejercicio");
misTareas.agregar("Preparar presentación");

// Mostrar todas
misTareas.mostrar();

// Completar primera tarea
misTareas.completar(0);

// Mostrar actualizado
misTareas.mostrar();

// Mostrar estadísticas
const stats = misTareas.obtenerEstadisticas();
console.log("\n=== ESTADÍSTICAS ===");
console.log(`Total: ${stats.total}`);
console.log(`Completadas: ${stats.completadas}`);
console.log(`Pendientes: ${stats.pendientes}`);