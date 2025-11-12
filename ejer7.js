/*Ejercicio 7: Función para Verificar Números
Pares

Enunciado: Escribe una función llamada verificarParImpar que reciba un número. Usa el operador módulo (%) para
determinar si es par o impar. Muestra el resultado en consola. */

function verificarParImpar(numero) {
if (numero % 2 === 0) {
console.log(numero + " es par");
} else {
console.log(numero + " es impar");
}
}
verificarParImpar(15);
verificarParImpar(20);
verificarParImpar(0);
verificarParImpar(-3);