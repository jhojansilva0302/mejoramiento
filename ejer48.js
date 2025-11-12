/*Funciones Especiales y Avanzadas en
JavaScript

JavaScript es un lenguaje versátil que soporta paradigmas de programación funcional y declarativa, en gran parte
gracias a sus capacidades con funciones. Más allá de la declaración y llamada básica, existen funciones con
comportamientos y usos avanzados que permiten escribir código más potente, conciso y mantenible. En esta
sección, exploraremos conceptos clave como las funciones de orden superior, closures, recursividad y funciones
generadoras, desglosando cada uno con ejemplos prácticos y casos de uso en el desarrollo moderno. */

//=============================================================//
/* Funciones de Orden Superior (Higher-
Order Functions)

Las funciones de orden superior son aquellas que
pueden recibir otras funciones como argumentos, o
bien pueden devolver una función como resultado.
Este concepto es fundamental en la programación
funcional y permite una gran flexibilidad y reutilización
de código.

Caso de uso: Son omnipresentes en JavaScript,
ejemplos comunes incluyen los métodos de array
como map(), filter(), y reduce(). También se usan para
crear decoradores, funciones de utilidad
personalizadas, o para inyectar lógica de manera
dinámica.*/

// Ejemplo 1: Función que recibe otra función como
argumento
function aplicarOperacion(a, b, operacion) {
return operacion(a, b);
}

function sumar(x, y) {
return x + y;
}

function multiplicar(x, y) {
return x * y;
}

let resultadoSuma = aplicarOperacion(5, 3, sumar);
console.log(resultadoSuma); // Salida: 8

let resultadoMultiplicacion = aplicarOperacion(5, 3,
multiplicar);
console.log(resultadoMultiplicacion); // Salida: 15

// Ejemplo 2: Función que devuelve otra función
function crearSaludo(saludoInicial) {
return function(nombre) {
return `${saludoInicial}, ${nombre}!`;
};
}

const saludarHola = crearSaludo("Hola");
const saludarQueTal = crearSaludo("Qué tal");

console.log(saludarHola("Ana")); // Salida: Hola,Ana!
console.log(saludarQueTal("Pedro")); // Salida: Quétal, Pedro!

//=============================================================//

/*Closures (Clausuras)
Una closure es la combinación de una función y el
entorno léxico en el que esa función fue declarada.
Esto significa que una función interna recuerda (o
"cierra" sobre) las variables de su ámbito externo,
incluso después de que la función externa haya
terminado de ejecutarse. Es una característica muy
poderosa para encapsulación y mantenimiento de
estados.

Caso de uso: Las closures son esenciales para crear
funciones que mantienen un estado privado (como
contadores, memorización), para implementar el
patrón de módulo en JavaScript (IIFEs), o para la
creación de callbacks con acceso a variables
específicas de su contexto original. */

function contador() {
let cuenta = 0; // Esta variable es parte del entorno léxico de la función interna

return function() { // Esta es la closure
cuenta++;
return cuenta;
};
}

const miContador = contador(); // 'miContador' ahora es la función interna
console.log(miContador()); // Salida: 1 (accede a 'cuenta' de la función 'contador')
console.log(miContador()); // Salida: 2
console.log(miContador()); // Salida: 3

const otroContador = contador(); // Creamos otra instancia de la closure
console.log(otroContador()); // Salida: 1 (tiene su propia 'cuenta' independiente)

//=============================================================//
/* Funciones Recursivas
Una función recursiva es aquella que se llama a sí
misma durante su ejecución. Para que una función
recursiva sea efectiva y no caiga en un bucle infinito,
debe tener una "condición base" que detenga la
recursión, y un "paso recursivo" que se acerque a esa
condición base en cada llamada.

Caso de uso: Procesamiento de estructuras de datos
anidadas (como árboles o grafos), algoritmos de
búsqueda y ordenación (quicksort, mergesort), cálculo
de secuencias matemáticas como Fibonacci, o para
operaciones donde la solución de un problema se
reduce a la solución de una instancia más pequeña del
mismo problema.*/

// Ejemplo: Calcular el factorial de un número
function factorial(n) {
// Condición base: si n es 0 o 1, el factorial es 1
if (n === 0 || n === 1) {
return 1;
}
// Paso recursivo: n * factorial de (n-1)
return n * factorial(n - 1);
}

console.log(factorial(5)); // Salida: 120 (5 * 4 * 3 * 2 *1)
console.log(factorial(0)); // Salida: 1

// Ejemplo: Suma de una secuencia numérica
function sumaHasta(n) {
if (n === 0) {
return 0;
}
return n + sumaHasta(n - 1);
}

console.log(sumaHasta(4)); // Salida: 10 (4 + 3 + 2 +1 + 0)

//=============================================================//
/*Funciones Generadoras (Generators)
Las funciones generadoras son funciones especiales
que pueden pausar su ejecución y reanudarla más
tarde, manteniendo su contexto. Se definen con
function* y utilizan la palabra clave yield para producir
un valor y pausar la ejecución. Cuando se reanudan,
continúan desde donde se pausaron.

Caso de uso: Creación de iteradores personalizados,
manejo de flujos de datos asíncronos de manera más
sencilla (con async/await que se basa en
generadores), implementación de secuencias infinitas
(como la generación de IDs únicos), o para controlar el
flujo de ejecución de forma más granular. */
function* generadorId() {
let id = 1;
while (true) {
yield id++; // Pausa la ejecución y devuelve 'id',luego reanuda con el siguiente llamado
}
}

const siguienteId = generadorId(); // 'siguienteId' es un objeto generador, no la función directamente
console.log(siguienteId.next().value); // Salida: 1
console.log(siguienteId.next().value); // Salida: 2
console.log(siguienteId.next().value); // Salida: 3

function* secuenciaNumerica(limite) {
for (let i = 0; i <= limite; i++) {
yield i;
}
}

const numeros = secuenciaNumerica(3);
console.log(numeros.next().value); // Salida: 0
console.log(numeros.next().value); // Salida: 1
console.log(numeros.next().value); // Salida: 2
console.log(numeros.next().value); // Salida: 3
console.log(numeros.next().done); // Salida: true (indica que la secuencia ha terminado)
//=============================================================//
