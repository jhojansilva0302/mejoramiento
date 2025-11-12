/*Métodos de Array Avanzados

Los métodos de array avanzados en JavaScript son herramientas poderosas que permiten manipular y procesar
colecciones de datos de manera eficiente y concisa. Dominar estos métodos no solo mejora la legibilidad del
código, sino que también optimiza el rendimiento y simplifica tareas complejas. A continuación, exploraremos
algunos de los más utilizados, junto con ejemplos prácticos y casos de uso comunes. */




//=============================================================//
/* forEach(): Iterar Elementos
El método forEach() ejecuta una función provista
una vez para cada elemento del array. Es una
forma limpia y funcional de iterar sobre los
elementos sin tener que gestionar un índice
manualmente, a diferencia de un bucle for
tradicional. No devuelve ningún valor y no muta el
array original.

Caso de uso: Realizar una acción en cada
elemento de una lista, como actualizar la interfaz
de usuario con datos de una API, enviar cada
elemento a otro servicio o simplemente registrar la
información de cada item en la consola. Es ideal
para efectos secundarios.*/

let numeros = [10, 20, 30, 40];

numeros.forEach(function(numero, index) {
// `numero` es el valor del elemento actual
// `index` es el índice del elemento actual
console.log(`El número en la posición ${index}
es ${numero}`);
});
// Salida:
// El número en la posición 0 es 10
// El número en la posición 1 es 20
// El número en la posición 2 es 30
// El número en la posición 3 es 40

let productos = [
{ nombre: "Laptop", precio: 1200 },
{ nombre: "Mouse", precio: 25 },
{ nombre: "Teclado", precio: 75 }
];

productos.forEach(producto => {
console.log(`Producto: ${producto.nombre},
Precio: $${producto.precio}`);
});
// Salida:
// Producto: Laptop, Precio: $1200
// Producto: Mouse, Precio: $25
// Producto: Teclado, Precio: $75

//=============================================================//
/*find(): Encontrar el Primer Elemento
El método find() devuelve el valor del primer
elemento en el array que cumple con la función de
prueba proporcionada. Si ningún elemento
satisface la función de prueba, devuelve
undefined. Es útil cuando se necesita solo la
primera coincidencia de un criterio de búsqueda.

Caso de uso: Buscar un registro específico en una
base de datos local (ej. encontrar un producto por
su ID), validar si un elemento particular existe y
obtener sus detalles, encontrar la primera entrada
que coincida con un filtro en una tabla.*/


let usuarios = [
{ id: 1, nombre: "Ana", activo: true },
{ id: 2, nombre: "Juan", activo: false },
{ id: 3, nombre: "María", activo: true }
];

let usuarioActivo = usuarios.find(usuario =>
usuario.activo === true);
console.log(usuarioActivo);
// Salida: { id: 1, nombre: "Ana", activo: true }(Devuelve el primer objeto que cumple la condición)

let usuarioInexistente = usuarios.find(usuario => usuario.id === 99);
console.log(usuarioInexistente);
// Salida: undefined

let primerNumeroPar = [1, 3, 4, 5, 6].find(num => num % 2 === 0);
console.log(primerNumeroPar);
// Salida: 4

//=============================================================//
/*some(): Verificar Existencia (al menos
uno)
El método some() comprueba si al menos un
elemento del array cumple con la condición
implementada por la función proporcionada.
Devuelve true si encuentra un elemento que
cumple la condición y false en caso contrario. Deja
de iterar tan pronto como la condición se cumple.

Caso de uso: Validar si alguna opción fue
seleccionada en un grupo de checkboxes, verificar
si hay elementos pendientes en una lista de tareas,
comprobar la existencia de un tipo específico de
error en un array de logs. */

let productos4 = [
{ nombre: "Leche", agotado: true },
{ nombre: "Pan", agotado: false },
{ nombre: "Huevos", agotado: false }
];

let hayAgotados = productos4.some(producto =>
producto.agotado === true);
console.log(hayAgotados);
// Salida: true (La leche está agotada)

let hayProductosCaros =
productos4.some(producto => producto.precio >
100);
console.log(hayProductosCaros);
// Salida: false (No hay propiedad 'precio' en este ejemplo para que cumpla)

let numeros4 = [10, 25, 30, 45];
let hayNumerosGrandes = numeros.some(num => num > 40);
console.log(hayNumerosGrandes);
// Salida: true (45 es mayor que 40)

//=============================================================//
/*every(): Verificar Todos los Elementos
El método every() comprueba si todos los
elementos del array cumplen con la condición
implementada por la función proporcionada.
Devuelve true si todos los elementos cumplen la
condición y false en caso contrario. Si un solo
elemento no cumple, devuelve false
inmediatamente.

Caso de uso: Validar que todos los campos de un
formulario son válidos antes de enviarlo, asegurar
que todos los permisos necesarios están
concedidos para una operación, verificar que
todos los ítems de un carrito cumplen con un
requisito de envío mínimo. */

let estudiantes = [
{ nombre: "Carlos", aprobado: true },
{ nombre: "Elena", aprobado: true },
{ nombre: "Pedro", aprobado: true }
];

let todosAprobados =
estudiantes.every(estudiante =>
estudiante.aprobado === true);
console.log(todosAprobados);
// Salida: true

estudiantes[1].aprobado = false; // Elena ha suspendido ahora

todosAprobados = estudiantes.every(estudiante => estudiante.aprobado === true);
console.log(todosAprobados);
// Salida: false

let edades = [18, 22, 35, 19];
let todosMayoresDeEdad = edades.every(edad => edad >= 18);
console.log(todosMayoresDeEdad);
// Salida: true


//=============================================================//
/* reduce(): Acumular Valores
El método reduce() ejecuta una función "reductora"
proporcionada por el usuario sobre cada elemento
del array, de izquierda a derecha, para producir un
único valor de salida. La función reductora toma
cuatro argumentos: un acumulador, el valor actual,
el índice actual y el array completo. El acumulador
es el valor que se va construyendo y se devuelve
al final.

Caso de uso: Calcular el total de un carrito de
compras, agrupar datos de un array por una
propiedad, aplanar un array de arrays en uno solo,
calcular promedios o estadísticas complejas.*/

let precios = [10.50, 25.75, 5.20, 15.00];

// Sumar todos los precios en el array
let totalPrecios =
precios.reduce(function(acumulador,
precioActual) {
return acumulador + precioActual;
}, 0); // 0 es el valor inicial del acumulador
console.log(totalPrecios);
// Salida: 56.45

let palabras = ["Hola", "mundo", "JavaScript"];
// Unir palabras en una frase
let fraseCompleta =
palabras.reduce((acumulador, palabra) =>
acumulador + " " + palabra);
console.log(fraseCompleta);
// Salida: "Hola mundo JavaScript"

let votos = ['JavaScript', 'Python', 'JavaScript',
'C++', 'Python', 'JavaScript'];
// Contar la frecuencia de cada voto
let recuentoVotos = votos.reduce((acc, voto) =>
{
acc[voto] = (acc[voto] || 0) + 1;
return acc;
}, {}); // Objeto vacío como valor inicial del
acumulador
console.log(recuentoVotos);
// Salida: { JavaScript: 3, Python: 2, 'C++': 1 }
//=============================================================//
/*sort(): Ordenar Elementos
El método sort() ordena los elementos de un array
in situ (es decir, modifica el array original) y
devuelve el array ordenado. Por defecto, ordena
los elementos como strings en orden alfabético.
Para ordenar números o usar criterios
personalizados, se debe proporcionar una función
de comparación.

Caso de uso: Ordenar listas de usuarios por
nombre, productos por precio, fechas
cronológicamente, o cualquier colección de
objetos por una propiedad específica para facilitar
la visualización o el procesamiento posterior. */

let frutas = ["Manzana", "Naranja", "Banana",
"Kiwi"];
frutas.sort();
console.log(frutas);
// Salida: ["Banana", "Kiwi", "Manzana","Naranja"]

let numeros5 = [40, 100, 1, 5, 25, 10];
// Ordenar números de forma ascendente
numeros.sort(function(a, b) {
return a - b;
});
console.log(numeros);
// Salida: [1, 5, 10, 25, 40, 100]

// Ordenar números de forma descendente
numeros.sort((a, b) => b - a);
console.log(numeros);
// Salida: [100, 40, 25, 10, 5, 1]

let productos5 = [
{ nombre: "Mouse", precio: 25 },
{ nombre: "Laptop", precio: 1200 },
{ nombre: "Teclado", precio: 75 }
];
// Ordenar productos por precio ascendente
productos.sort((a, b) => a.precio - b.precio);
console.log(productos);
// Salida: [ { nombre: 'Mouse', precio: 25 }, {nombre: 'Teclado', precio: 75 }, { nombre: 'Laptop', precio: 1200 } ]
//=============================================================//
