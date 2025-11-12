// Promises y Async/Await
function simularOperacionAsincrona(exito) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) resolve("Datos obtenidos correctamente.");
            else reject("Error al obtener los datos.");
        }, 2000);
    });
}

simularOperacionAsincrona(true)
    .then(mensaje => console.log("Éxito (Promise):", mensaje))
    .catch(error => console.error("Error (Promise):", error));

simularOperacionAsincrona(false)
    .then(mensaje => console.log("Éxito (Promise):", mensaje))
    .catch(error => console.error("Error (Promise):", error));

async function ejecutarOperacionAsincrona() {
    try {
        console.log("Iniciando operación con async/await...");
        const resultado = await simularOperacionAsincrona(true);
        console.log("Éxito (Async/Await):", resultado);
        const resultadoFallido = await simularOperacionAsincrona(false);
        console.log("Esto no debería mostrarse:", resultadoFallido);
    } catch (error) {
        console.error("Error (Async/Await):", error);
    } finally {
        console.log("Operación async/await finalizada.");
    }
}

ejecutarOperacionAsincrona();
