//Tipos de Errores en JavaScript


/*SyntaxError
Error de sintaxis. Olvidaste
cerrar paréntesis, llaves,
comillas, o escribiste algo que
JavaScript no puede interpretar. */

// Error: falta cerrar paréntesis
console.log("Hola");

/*ReferenceError
Intentas usar una variable que
no existe o no está declarada. */

// Error: variableNoExiste no

// Error: variableNoExiste no está definida
console.log(variableNoExiste
);

/*TypeError
Intentas realizar una operación
en un tipo de dato incorrecto. */

// Error: null no tiene método toUpperCase
let texto = null;
texto.toUpperCase();

