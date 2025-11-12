/*Ejercicio 26: Exportación por Defecto

Enunciado: Crea calculadora.js y app.js. En calculadora.js, define una función exportada por defecto llamada
sumar. En app.js, impórtala usando un nombre diferente (ej: operacionSuma) y utilízala. */


//Archivo: calculadora.js
export default function sumar(a, b) {
return a + b;
}


//Archivo: app.js
import operacionSuma from
'./calculadora.js';
const resultado = operacionSuma(8,
7);
console.log("Resultado:", resultado);