// Fetch API y Manejo de Múltiples Promesas
async function obtenerDatosUsuario(idUsuario) {
    try {
        console.log(`Obteniendo datos para el usuario ID: ${idUsuario}...`);
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${idUsuario}`);
        if (!respuesta.ok) throw new Error(`Error de red o servidor: ${respuesta.status}`);
        const datos = await respuesta.json();
        console.log("Datos del usuario:", datos);
        return datos;
    } catch (error) {
        console.error("Fallo al obtener datos del usuario:", error);
        return null;
    }
}

async function obtenerMultiplesUsuarios(ids) {
    try {
        const promesasUsuarios = ids.map(id =>
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res => {
                    if (!res.ok) throw new Error(`Usuario ${id} no encontrado.`);
                    return res.json();
                })
        );
        console.log("Esperando a que todas las promesas se resuelvan...");
        const usuarios = await Promise.all(promesasUsuarios);
        console.log("Todos los usuarios obtenidos:", usuarios);
        return usuarios;
    } catch (error) {
        console.error("Error al obtener múltiples usuarios:", error);
        return [];
    }
}

obtenerDatosUsuario(1);
obtenerMultiplesUsuarios([1, 2, 3]);
