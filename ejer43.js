/*Patrones Comunes de Programación

A medida que programas, notarás que ciertos problemas se resuelven de formas similares. Estos son algunos
patrones comunes que encontrarás frecuentemente en JavaScript y te ayudarán a escribir código más limpio y
eficiente. */

//Patrón Acumulador y Validación de Entrada

/*Patrón Acumulador
Usa una variable para ir
acumulando resultados dentro
de un bucle. Útil para sumas,
conteos, concatenaciones. */

let suma = 0;
for (let num of numeros) {
suma += num;
}

/*Validación de Entrada
Siempre valida datos del
usuario antes de procesarlos.
Usa condicionales, typeof,
isNaN(), y expresiones
regulares. */

if (typeof edad !== 'number'
|| edad < 0) {
console.log("Edad inválida"); return;
}


/**Guard Clauses
Valida condiciones al inicio de
una función y retorna temprano
si no se cumplen. Hace el
código más legible. */

function procesar(data) {
if (!data) return null;
if (data.length === 0) return
[];
// Procesamiento principal...
}

