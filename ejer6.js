/*Ejercicio 6: Constantes y Reasignación

Enunciado: Define una constante PI con valor 3.14159. Intenta reasignarla y observa qué sucede. Explica la
diferencia entre let y const respecto al ámbito y la reasignación. */


//constantes(const)
const PI = 3.14159
// PI = 3.14; // ERROR!

console.log(PI); // 3.14159


//Variables(let)
let contador = 10;
contador = 20; // Válido

console.log(contador); // 20

//ambito bloque

{
let temporal = 5;
const fija = 10;
}
// Ambas inaccesibles aquí
