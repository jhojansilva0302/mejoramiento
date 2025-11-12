// Tipos de Errores Personalizados
class ValidacionError extends Error {
    constructor(mensaje, campo) {
        super(mensaje);
        this.name = "ValidacionError";
        this.campo = campo;
    }
}

class AutorizacionError extends Error {
    constructor(mensaje, usuario) {
        super(mensaje);
        this.name = "AutorizacionError";
        this.usuario = usuario;
    }
}

function validarUsuario(usuario, rol) {
    if (!usuario || usuario.length < 3) {
        throw new ValidacionError("El nombre de usuario es demasiado corto.", "usuario");
    }
    if (rol !== "admin") {
        throw new AutorizacionError("No tiene permisos de administrador.", usuario);
    }
    return true;
}

try {
    validarUsuario("Juan", "user");
} catch (error) {
    if (error instanceof ValidacionError) {
        console.error(`Error de Validación en ${error.campo}: ${error.message}`);
    } else if (error instanceof AutorizacionError) {
        console.error(`Error de Autorización para ${error.usuario}: ${error.message}`);
    } else {
        console.error("Error desconocido:", error.message);
    }
}

try {
    validarUsuario("Ana", "admin");
} catch (error) {
    console.log("Este bloque no debería ejecutarse si 'Ana' y 'admin' son válidos.");
}
