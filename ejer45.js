//metodos de string avanzados ren javaScrip
//=============================================================//

/*slice(): Extraer Subcadenas
El método slice() extrae una sección de un string y
devuelve esa sección como una nueva cadena. No
modifica el string original. Acepta dos parámetros:
el índice de inicio (inclusive) y el índice de fin
(exclusivo). Si el segundo parámetro se omite,
extrae hasta el final del string. Los índices
negativos cuentan desde el final del string.

Caso de uso: Truncar mensajes largos para
mostrar en una interfaz de usuario, obtener el
nombre de archivo sin la extensión (ej.
"documento.pdf".slice(0, -4)).*/

let texto = "Programación JavaScript";
let parte1 = texto.slice(0, 12); // "Programación"
let parte2 = texto.slice(13); // "JavaScript"
let parte3 = texto.slice(-10); // "JavaScript"
let parte4 = texto.slice(4, -10); // "ramac" (desde el índice 4 hasta 10 caracteres antes del final)

//=============================================================//
/*substring(): Otra forma de Extraer
Similar a slice(), substring() también extrae
caracteres entre dos índices de un string. La
principal diferencia es cómo maneja los
argumentos negativos: substring() los trata como 0.
Además, si el índice inicial es mayor que el final,
substring() los intercambia automáticamente.

Caso de uso: Cuando se necesita compatibilidad
con navegadores muy antiguos que no manejan
slice() con argumentos negativos de la misma
manera, o cuando los argumentos pueden venir
desordenados y se prefiere que el método los
gestione.*/

let lenguaje = "Desarrollo Web";
let parte5 = lenguaje.substring(0, 9); //"Desarroll"
let parte6 = lenguaje.substring(9, 0); //"Desarroll" (intercambia 0 y 9)
let parte7 = lenguaje.substring(-5, 5); // "Desar"(trata -5 como 0)

//=============================================================//
/*charAt(): Acceder a Caracteres
El método charAt() devuelve el carácter en el índice
especificado de un string. Si el índice está fuera
del rango, devuelve un string vacío. Es una forma
segura de acceder a caracteres individuales en
comparación con la notación de corchetes [], que
devolvería undefined para índices fuera de rango.

Caso de uso: Validar el primer carácter de una
entrada de usuario, construir una cadena carácter
por carácter, verificar un formato específico.*/

let palabra = "Computadora";
let primerCaracter = palabra.charAt(0); // "C"
let quintoCaracter = palabra.charAt(4); // "u"
let ultimoCaracter =
palabra.charAt(palabra.length - 1); // "a"
let caracterInexistente = palabra.charAt(15); //"" (string vacío)

//=============================================================//
/* indexOf(): Encontrar la Primera
Aparición
indexOf() devuelve el índice de la primera
ocurrencia del valor especificado dentro del string.
La búsqueda es sensible a mayúsculas y
minúsculas. Si el valor no se encuentra, devuelve
-1. Opcionalmente, se puede especificar un
segundo parámetro para iniciar la búsqueda desde
ese índice.

Caso de uso: Verificar si un string contiene un
substring específico, encontrar la posición de un
delimitador para luego extraer partes de un string,
implementar una función de búsqueda básica. */

let cita = "La programación es arte y ciencia.";
let indiceArte = cita.indexOf("arte"); // 19
let indiceA = cita.indexOf("a"); // 1 (la primera 'a')
let indiceA_despues = cita.indexOf("a", 2); // 3 (la 'a' en "programación")
let noEncontrado = cita.indexOf("código"); // -1
//=============================================================//
/* replace(): Reemplazar Substrings
El método replace() busca un valor o expresión
regular en un string y lo reemplaza con otro valor.
Por defecto, solo reemplaza la primera ocurrencia.
Para reemplazar todas las ocurrencias, se debe
usar una expresión regular con el modificador
global g.

Caso de uso: Limpiar datos de entrada (ej. eliminar
caracteres no deseados), formatear cadenas de
texto (ej. reemplazar espacios por guiones para
URLs amigables), sanitizar entradas de usuario. */

let frase = "El gato es un animal, y el perro también.";
let nuevaFrase1 = frase.replace("gato", "león");// "El león es un animal, y el perro también."
let nuevaFrase2 = frase.replace(/el/g, "un"); //"Un gato es un animal, y un perro también."
let nuevaFrase3 = frase.replace(/es/gi, "será"); //"El gato será un animal, y el perro también." (ipara ignorar mayúsculas/minúsculas)

//=============================================================//
/*split(): Dividir un String
El método split() divide un objeto String en un array
de strings al separar el string en subcadenas,
utilizando un separador que se proporciona en el
argumento. Si el separador es un string vacío (""),
el string se divide en un array de caracteres
individuales.

Caso de uso: Procesar datos CSV, extraer palabras
de una oración, dividir una URL en sus
componentes, analizar una cadena de etiquetas
separadas por comas. */


let listaItems = "manzana,pera,uva,naranja";
let frutas = listaItems.split(","); // ["manzana","pera", "uva", "naranja"]

let oracion = "Hola mundo JavaScript";
let palabras = oracion.split(" "); // ["Hola","mundo", "JavaScript"]

let caracteres = "código".split(""); // ["c", "ó", "d","i", "g", "o"]

//=============================================================//
