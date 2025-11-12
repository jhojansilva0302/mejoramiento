/*Ejercicio 13: Transformación
con .map()
Enunciado: Dado el array de precios [100, 250, 399, 75], usa .map() para
retornar un nuevo array donde cada precio haya sido aumentado en un
10%. */
let preciosBase = [100, 250, 399, 75];
let preciosConAumento =
preciosBase.map(
precio => precio * 1.10
);
console.log("Originales:",
preciosBase);
console.log("Con 10% aumento:",
preciosConAumento);