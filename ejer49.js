// Control de Flujo con try-catch-finally
function procesarArchivo(nombreArchivo) {
    try {
        console.log(`Intentando leer el archivo: ${nombreArchivo}`);
        if (nombreArchivo !== "datos.json") {
            throw new Error("Archivo no encontrado o inválido.");
        }
        const contenido = "Contenido del archivo datos.json";
        console.log("Archivo leído exitosamente:", contenido);
        return contenido;
    } catch (error) {
        console.error("Se produjo un error:", error.message);
        throw new Error(`Fallo en el procesamiento: ${error.message}`);
    } finally {
        console.log("Operación de procesamiento de archivo finalizada.");
    }
}

try {
    procesarArchivo("datos.json");
} catch (e) {
    console.log("Error capturado externamente (éxito):", e.message);
}
console.log("---");
try {
    procesarArchivo("config.txt");
} catch (e) {
    console.log("Error capturado externamente (fallo):", e.message);
}
