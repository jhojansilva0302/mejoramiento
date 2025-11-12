/*Ejercicio 18: Operador
Ternario

Enunciado: Reescribe la lógica de validación de edad usando el
Operador Ternario. La función verificarAcceso debe retornar "Permitido"
o "Denegado". */


const verificarAcceso = (edad) =>
edad >= 18 ?
"Permitido" :
"Denegado";
console.log("17 años:",
verificarAcceso(17));
console.log("35 años:",
verificarAcceso(35));